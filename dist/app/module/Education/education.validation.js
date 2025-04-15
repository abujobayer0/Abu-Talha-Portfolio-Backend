"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationValidation = void 0;
const zod_1 = require("zod");
const createEducationSchema = zod_1.z.object({
    body: zod_1.z.object({
        degree: zod_1.z.string().nonempty(),
        institution: zod_1.z.string().nonempty(),
        location: zod_1.z.string().nonempty(),
        startDate: zod_1.z.string().nonempty(),
        description: zod_1.z.string().nonempty(),
        grade: zod_1.z.string().nonempty(),
        subjects: zod_1.z.array(zod_1.z.string()).nonempty(),
    }),
});
const updateEducationSchema = zod_1.z.object({
    body: zod_1.z.object({
        degree: zod_1.z.string().optional(),
        institution: zod_1.z.string().optional(),
        location: zod_1.z.string().optional(),
        startDate: zod_1.z.string().optional(),
        endDate: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        grade: zod_1.z.string().optional(),
        subjects: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.EducationValidation = {
    createEducationSchema,
    updateEducationSchema,
};
