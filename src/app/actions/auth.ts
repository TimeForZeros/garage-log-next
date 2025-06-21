import { signupSchema, SignupSchema } from '@/lib/definitions';

export async function signup(formData: SignupSchema) {
  formData.password = 'foo';
  const validatedFields = signupSchema.safeParse(formData);
  if (!validatedFields.success) {
    console.log('faaaill');
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  console.log('hiiitsss');
}
