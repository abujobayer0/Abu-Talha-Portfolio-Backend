import { z } from "zod";

const linksValidationSchema = z.object({
  body: z.object({
    resume: z.string().url("Invalid Resume URL"),
    linkedin: z.string().url("Invalid LinkedIn URL"),
    github: z.string().url("Invalid GitHub URL"),
    twitter: z.string().url("Invalid Twitter URL"),
    facebook: z.string().url("Invalid Facebook URL"),
    email: z.string().email("Invalid Email Address"),
    phone: z.string().min(11, "Phone number must be at least 11 digits"),
    discord: z.string().min(3, "Discord ID must be at least 3 characters"),
  }),
});

export const LinksValidation = { linksValidationSchema };
