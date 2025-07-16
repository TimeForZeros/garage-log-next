import { coerce, string, z } from 'zod';

export type LoginSchema = z.infer<typeof loginSchema>;
export type SignupSchema = z.infer<typeof signupSchema>;
export type VehicleSchema = z.infer<typeof vehicleSchema>;

const parseIntFromInput = (text: string) => {
  const num = Number(text);
  return Number.isInteger(num) && num >= 0;
};

export const vehicleSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .trim()
    .min(1, { message: 'name must be at least one character in length' })
    .max(128),
  model: z.string().trim().max(128),
  make: z.string().trim().max(128),
  year: z.string().max(4).refine(parseIntFromInput),
  odometer: z.string().max(8).refine(parseIntFromInput),
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
