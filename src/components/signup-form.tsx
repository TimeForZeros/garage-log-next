'use client';

import { useActionState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from './ui/card';
import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core';
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en';
import { signupSchema, SignupSchema } from '@/lib/definitions';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signup } from '@/app/actions/auth';

const options = {
  translations: zxcvbnEnPackage.translations,
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
};

zxcvbnOptions.setOptions(options);

export const SignupForm = () => {
  // const [state, action, pending] = useActionState(signup, undefined);
  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: SignupSchema) => {
    const res = await signup(values);
    console.log(res);
  };

  const IntegrityMessage = () => {
    const { password } = form.getValues();
    const result = zxcvbn(password);
    let message = '';
    let textColor = '';
    switch (true) {
      case result.score > 3:
        message = 'Strong Password';
        textColor = 'text-green-600';
        break;
      case result.score > 2:
        message = 'Medium Password';
        textColor = 'text-yellow-600';
        break;
      case result.score > 0:
        message = 'Weak Password';
        break;
      default:
    }

    return <FormMessage className={textColor}>{message}</FormMessage>;
  };

  const ConfirmMessage = () => {
    const { password, confirmPassword } = form.getValues();
    let message = '';
    if (confirmPassword.length > 1) {
      message = password === confirmPassword ? 'Passwords Match' : 'Passwords Do Not Match';
    }
    return (
      <FormMessage className={password === confirmPassword ? 'text-green-600' : ''}>
        {message}
      </FormMessage>
    );
  };

  return (
    <Card className='w-[36rem] max-h-screen'>
      <CardHeader className='flex justify-center'>
        <h1 className='font-bold text-2xl'>Sign Up</h1>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='Username' {...field} />
                  </FormControl>
                  <FormMessage /> {/* Displays validation errors */}
                </FormItem>
              )}
            />

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
                  <IntegrityMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='Confirm Password' {...field} />
                  </FormControl>
                  <ConfirmMessage />
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
