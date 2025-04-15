"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksValidation = void 0;
const zod_1 = require("zod");
const linksValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        resume: zod_1.z.string().url("Invalid Resume URL"),
        linkedin: zod_1.z.string().url("Invalid LinkedIn URL"),
        github: zod_1.z.string().url("Invalid GitHub URL"),
        twitter: zod_1.z.string().url("Invalid Twitter URL"),
        facebook: zod_1.z.string().url("Invalid Facebook URL"),
        email: zod_1.z.string().email("Invalid Email Address"),
        phone: zod_1.z.string().min(11, "Phone number must be at least 11 digits"),
        discord: zod_1.z.string().min(3, "Discord ID must be at least 3 characters"),
    }),
});
exports.LinksValidation = { linksValidationSchema };
