// import { redirect } from 'next/navigation';
// import { getServerSession } from 'next-auth';
// import { nextAuthOptions } from '@/config';
// import { useSession } from 'next-auth/react';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { data: session } = useSession();
  return <main>{children}</main>;
}
