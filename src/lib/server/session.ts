import jwt from 'jsonwebtoken';
import { argon2id, argon2Verify } from 'hash-wasm';
import { randomBytes } from 'crypto';
import config from '@/config';

const ARGON2ID_CONFIG = {
  // OWASP recommended config
  iterations: 2,
  parallelism: 1,
  memorySize: 1024 * 19, // 19 MiB
  hashLength: 32,
  outputType: 'encoded' as const,
  secret: process.env.PEPPER,
};

export const hashPassword = (password: string): Promise<string> =>
  argon2id({
    ...ARGON2ID_CONFIG,
    password,
    salt: randomBytes(16),
  });

export const authenticate = (password: string, hash: string) =>
  argon2Verify({ password, hash, secret: config.db.pepper });

interface Session {
  id: string;
  secretHash: Uint8Array; // Uint8Array is a byte array
  createdAt: Date;
}

export const createJWT = (session: Session) => {
  const sessionJWT = jwt.sign(session, config.secret, { algorithm: 'HS256', expiresIn: 600 });
  return sessionJWT;
};

export const validateJWT = (token: string) => jwt.verify(token, config.secret);
