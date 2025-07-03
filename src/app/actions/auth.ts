'use server';

import { argon2id, argon2Verify } from 'hash-wasm';
import { randomBytes } from 'crypto';
import { signupSchema, SignupSchema, loginSchema, LoginSchema } from '@/lib/definitions';
import config from '@/config/index';
import prisma from '@/lib/prisma';
import { PrismaClientKnownRequestError } from '@/prisma/runtime/library';
// import { PrismaClientKnownRequestError } from '@/prisma/runtime/library';

const ARGON2ID_CONFIG = {
  // OWASP recommended config
  iterations: 2,
  parallelism: 1,
  memorySize: 1024 * 19, // 19 MiB
  hashLength: 32,
  outputType: 'encoded' as const,
  secret: config.db.pepper,
};

const hashPassword = (password: string): Promise<string> =>
  argon2id({
    ...ARGON2ID_CONFIG,
    password,
    salt: randomBytes(16),
  });

export const authenticate = async (password: string, hash: string) =>
  argon2Verify({ password, hash, secret: config.db.pepper });

export async function signup(formData: SignupSchema) {
  const validatedFields = signupSchema.safeParse(formData);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const passwordHash = await hashPassword(validatedFields.data.password);
  const signupData = {
    name: validatedFields.data.username,
    email: validatedFields.data.email,
    password: passwordHash,
  };
  try {
    await prisma.user.create({ data: signupData });
    return null;
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        return { error: 'Email already registered' };
      }
    }
    return { error: 'Unknown error occurred' };
  }
}

export const login = async (loginData: LoginSchema) => {
  const InvalidLoginError = new Error('Invalid Login Information');
  try {
    const { data, success } = loginSchema.safeParse(loginData);
    if (!success) throw InvalidLoginError;
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!user) throw InvalidLoginError;
    const isValid = await authenticate(data.password, user?.password);
    if (!isValid) throw InvalidLoginError;
    // set session
    return user;
  } catch (err) {
    if (err instanceof Error && err.message !== InvalidLoginError.message) {
      console.error(err);
    }
    return err as Error;
  }
};
