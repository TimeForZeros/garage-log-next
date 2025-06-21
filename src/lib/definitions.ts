import { z } from 'zod';

export type SignupSchema = z.infer<typeof signupSchema>
export const signupSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(2, { message: 'Name must be at least 2 characters long.' })
      .max(64, { message: 'Name cannot exceed 50 characters.' }),
    email: z.string().email().trim().toLowerCase(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'], // Apply the error to the confirmPassword field
  });
