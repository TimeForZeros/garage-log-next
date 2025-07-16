'use client';

import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '../ui/card';
import { loginSchema, LoginSchema } from '@/lib/definitions';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export const LoginForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const ErrorMessage = () => (
    <span className='text-destructive text-sm flex justify-around'>{errorMessage}</span>
  );
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: LoginSchema) => {
    const res = await signIn('credentials', { ...values, redirect: false });
    if (res?.ok) return router.push('/dashboard');
    setErrorMessage('Account not found or password incorrect');
  };

  return (
    <Card className='w-[36rem] max-h-screen'>
      <CardHeader className='flex justify-center'>
        <h1 className='font-bold text-2xl'>Log In</h1>
      </CardHeader>
      <CardContent>
        <ErrorMessage />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' placeholder='Email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='Password' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
