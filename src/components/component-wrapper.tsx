'use client';
import { NavBar } from '@/components/nav-bar';
import { SessionProvider } from 'next-auth/react';

export default function ContentWrapper({ children }) {
  return (
    <SessionProvider>
      <NavBar />
      <main>{children}</main>
    </SessionProvider>
  );
};
