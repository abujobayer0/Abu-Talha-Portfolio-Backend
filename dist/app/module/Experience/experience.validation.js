"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceValidation = void 0;
const zod_1 = require("zod");
const createExperienceSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().nonempty(),
        company: zod_1.z.string().nonempty(),
        location: zod_1.z.string().nonempty(),
        startDate: zod_1.z.string().nonempty(),
        description: zod_1.z.string().nonempty(),
        technologies: zod_1.z.array(zod_1.z.string()).nonempty(),
    }),
});
const updateExperienceSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        company: zod_1.z.string().optional(),
        location: zod_1.z.string().optional(),
        startDate: zod_1.z.string().optional(),
        endDate: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        technologies: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.ExperienceValidation = {
    createExperienceSchema,
    updateExperienceSchema,
};
