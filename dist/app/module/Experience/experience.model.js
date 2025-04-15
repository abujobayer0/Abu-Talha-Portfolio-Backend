"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experience = void 0;
const mongoose_1 = require("mongoose");
const experienceSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        default: null,
    },
    description: {
        type: String,
        required: true,
    },
    technologies: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            required: true,
            ref: "Skill",
        },
    ],
}, { timestamps: true });
exports.Experience = (0, mongoose_1.model)("Experience", experienceSchema);
