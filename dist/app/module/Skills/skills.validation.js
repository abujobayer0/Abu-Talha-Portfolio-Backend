"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsValidation = void 0;
const zod_1 = require("zod");
const skills_interface_1 = require("./skills.interface");
// Validation for creating a skill
const createSkillSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nonempty(),
        level: zod_1.z.enum([
            skills_interface_1.SkillLevel.Beginner,
            skills_interface_1.SkillLevel.Intermediate,
            skills_interface_1.SkillLevel.Advanced,
            skills_interface_1.SkillLevel.Expert,
        ]), // Use enum for level
        category: zod_1.z.enum([
            skills_interface_1.SkillCategory.Frontend,
            skills_interface_1.SkillCategory.Backend,
            skills_interface_1.SkillCategory.DevOps,
            skills_interface_1.SkillCategory.Database,
            skills_interface_1.SkillCategory.Android,
            skills_interface_1.SkillCategory.Tools,
            skills_interface_1.SkillCategory.Other,
        ]), // Use enum for category
        icon: zod_1.z.string().url(),
    }),
});
// Validation for updating a skill
const updateSkillSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        level: zod_1.z
            .enum([
            skills_interface_1.SkillLevel.Beginner,
            skills_interface_1.SkillLevel.Intermediate,
            skills_interface_1.SkillLevel.Advanced,
            skills_interface_1.SkillLevel.Expert,
        ])
            .optional(), // Enum for level
        category: zod_1.z
            .enum([
            skills_interface_1.SkillCategory.Frontend,
            skills_interface_1.SkillCategory.Backend,
            skills_interface_1.SkillCategory.DevOps,
            skills_interface_1.SkillCategory.Database,
            skills_interface_1.SkillCategory.Android,
            skills_interface_1.SkillCategory.Tools,
            skills_interface_1.SkillCategory.Other,
        ])
            .optional(), // Enum for category
        icon: zod_1.z.string().url().optional(),
    }),
});
exports.SkillsValidation = {
    createSkillSchema,
    updateSkillSchema,
};
