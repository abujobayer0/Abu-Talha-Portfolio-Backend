import { z } from 'zod';

const adminValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }).email(),
    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .max(20, { message: 'Password can not be more than 20 characters' })
      .min(6, { message: 'Password can not be less than 6 characters' })
      .optional(),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }).email(),
    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .max(20, { message: 'Password can not be more than 20 characters' })
      .min(6, { message: 'Password can not be less than 6 characters' })
      .optional(),
  }),
});

export const AdminValidation = {
  adminValidationSchema,
  loginValidationSchema,
};
