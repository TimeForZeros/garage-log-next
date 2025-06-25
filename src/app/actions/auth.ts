'use server';

import { argon2id, argon2Verify } from 'hash-wasm';
import { randomBytes } from 'crypto';
import { signupSchema, SignupSchema, loginSchema, LoginSchema } from '@/lib/definitions';
import config from '@/config/index';
import prisma from '@/lib/prisma';

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
  await prisma.user.create({ data: signupData });
  return 'ok';
}

export const login = async (loginData: LoginSchema) => {
  const InvalidLoginError = new Error('Invalid Login Information');
  try {
    const { data, success } = loginSchema.safeParse(loginData);
    if (!success) throw InvalidLoginError;
    const res = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!res) throw InvalidLoginError;
    const isValid = await authenticate(data.password, res?.password);
    if (!isValid) throw InvalidLoginError;
    // set session
    return 'ok';
  } catch (err) {
    if (err instanceof Error) {
      if (err.message !== InvalidLoginError.message) {
        console.error(err);
      }
      return err.message;
    }
    return 'Unknown error';
  }
};
