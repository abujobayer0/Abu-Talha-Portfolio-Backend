import { z } from "zod";

// Zod schema for GitHub links validation
const githubSchema = z.object({
  frontend: z.string().url("Frontend GitHub link must be a valid URL"),
  backend: z.string().url("Backend GitHub link must be a valid URL"),
});

// Zod schema for project validation
const objectId = z.string().regex(/^[0-9a-fA-F]{24}$/, "Must be a valid Mongo ObjectId");

const createProjectSchema = z.object({
  body: z.object({
    title: z.string().nonempty("Title is required"),
    description: z.string().nonempty("Description is required"),
    github: githubSchema,
    live: z.string().url("Live URL must be a valid URL"),
    technologies: z.array(objectId, {
      required_error: "Technologies are required",
      invalid_type_error: "Technologies must be an array of ObjectIds",
    }),
    images: z.array(z.string().url("Image URL must be a valid URL")),
  }),
});

// Zod schema for updating a project (all fields optional)
const updateProjectSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    github: githubSchema.partial().optional(),
    live: z.string().url("Live URL must be a valid URL").optional(),
    technologies: z.array(objectId).optional(),
    images: z.array(z.string().url("Image URL must be a valid URL")).optional(),
  }),
});

export const ProjectsValidation = {
  createProjectSchema,
  updateProjectSchema,
};
