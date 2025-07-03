import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/lib/prisma';
import { login } from '@/app/actions/auth';
import { User } from '@/prisma';

type LoginResponse = User | Error;

export const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      authorize: async (credentials, req) => {
        if (credentials) {
          const userData = { email: credentials.email, password: credentials.password };
          const data: LoginResponse = await login(userData);
          if (!(data instanceof Error)) {
            return data;
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30,
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/login',
    // error: '/error', // Error code passed in query string as ?error=
    // verifyRequest: '/verify-request', // (used for check email message)
    newUser: '/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  // events: {
  //   async signIn(message) {
  //     console.log(message);
  //     /* on successful sign in */
  //   },
  //   async signOut(message) {
  //     console.log(message);
  //     /* on signout */
  //   },
  //   async createUser(message) {
  //     console.log(message);
  //     /* user created */
  //   },
  //   async updateUser(message) {
  //     console.log(message);

  //     /* user updated - e.g. their email was verified */
  //   },
  //   async linkAccount(message) {
  //     console.log(message);

  //     /* account (e.g. Twitter) linked to a user */
  //   },
  //   async session(message) {
  //     console.log(message);

  //     /* session is active */
  //   },
  // },
};
