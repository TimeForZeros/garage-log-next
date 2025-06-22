import { argon2id, argon2Verify } from 'hash-wasm';
import { randomBytes } from 'crypto';
import { signupSchema, SignupSchema } from '@/lib/definitions';
import config from '@/config/index'

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

export const authenticate = (password: string, hash: string) =>
  argon2Verify({ password, hash, secret: config.db.pepper });

export async function signup(formData: SignupSchema) {
  const validatedFields = signupSchema.safeParse(formData);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
}
