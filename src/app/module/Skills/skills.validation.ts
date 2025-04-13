import { z } from 'zod';
import { SkillLevel, SkillCategory } from './skills.interface';

// Validation for creating a skill
const createSkillSchema = z.object({
  body: z.object({
    name: z.string().nonempty(),
    level: z.enum([
      SkillLevel.Beginner,
      SkillLevel.Intermediate,
      SkillLevel.Advanced,
      SkillLevel.Expert,
    ]), // Use enum for level
    category: z.enum([
      SkillCategory.Frontend,
      SkillCategory.Backend,
      SkillCategory.DevOps,
      SkillCategory.Database,
      SkillCategory.Android,
      SkillCategory.Tools,
      SkillCategory.Other,
    ]), // Use enum for category
    icon: z.string().url(),
  }),
});

// Validation for updating a skill
const updateSkillSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    level: z
      .enum([
        SkillLevel.Beginner,
        SkillLevel.Intermediate,
        SkillLevel.Advanced,
        SkillLevel.Expert,
      ])
      .optional(), // Enum for level
    category: z
      .enum([
        SkillCategory.Frontend,
        SkillCategory.Backend,
        SkillCategory.DevOps,
        SkillCategory.Database,
        SkillCategory.Android,
        SkillCategory.Tools,
        SkillCategory.Other,
      ])
      .optional(), // Enum for category
    icon: z.string().url().optional(),
  }),
});

export const SkillsValidation = {
  createSkillSchema,
  updateSkillSchema,
};
