import { z } from 'zod';

const createEducationSchema = z.object({
  body: z.object({
    degree: z.string().nonempty(),
    institution: z.string().nonempty(),
    location: z.string().nonempty(),
    startDate: z.string().nonempty(),
    description: z.string().nonempty(),
    grade: z.string().nonempty(),
    subjects: z.array(z.string()).nonempty(),
  }),
});

const updateEducationSchema = z.object({
  body: z.object({
    degree: z.string().optional(),
    institution: z.string().optional(),
    location: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    description: z.string().optional(),
    grade: z.string().optional(),
    subjects: z.array(z.string()).optional(),
  }),
});

export const EducationValidation = {
  createEducationSchema,
  updateEducationSchema,
};
