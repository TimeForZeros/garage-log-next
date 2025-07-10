import { z } from 'zod';

export type LoginSchema = z.infer<typeof loginSchema>;
export type SignupSchema = z.infer<typeof signupSchema>;
export type VehicleSchema = z.infer<typeof vehicleSchema>;

export const vehicleSchema = z.object({
  name: z.string({ message: 'name is required' }).trim().min(1).max(128),
  model: z.string().trim().min(1).max(128).optional(),
  make: z.string().trim().min(1).max(128).optional(),
  year: z.number().max(9999).optional(),
  odometerMiles: z.number().positive().optional(),
  useKm: z.boolean(),
});

export const loginSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
});

export const signupSchema = loginSchema
  .extend({
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
