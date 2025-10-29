"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsValidation = void 0;
const zod_1 = require("zod");
// Zod schema for GitHub links validation
const githubSchema = zod_1.z.object({
    frontend: zod_1.z.string().url("Frontend GitHub link must be a valid URL"),
    backend: zod_1.z.string().url("Backend GitHub link must be a valid URL"),
});
// Zod schema for project validation
const objectId = zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Must be a valid Mongo ObjectId");
const createProjectSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().nonempty("Title is required"),
        description: zod_1.z.string().nonempty("Description is required"),
        github: githubSchema,
        live: zod_1.z.string().url("Live URL must be a valid URL"),
        technologies: zod_1.z.array(objectId, {
            required_error: "Technologies are required",
            invalid_type_error: "Technologies must be an array of ObjectIds",
        }),
        images: zod_1.z.array(zod_1.z.string().url("Image URL must be a valid URL")),
    }),
});
// Zod schema for updating a project (all fields optional)
const updateProjectSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        github: githubSchema.partial().optional(),
        live: zod_1.z.string().url("Live URL must be a valid URL").optional(),
        technologies: zod_1.z.array(objectId).optional(),
        images: zod_1.z.array(zod_1.z.string().url("Image URL must be a valid URL")).optional(),
    }),
});
exports.ProjectsValidation = {
    createProjectSchema,
    updateProjectSchema,
};
