"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
const mongoose_1 = require("mongoose");
const educationSchema = new mongoose_1.Schema({
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, default: null },
    description: { type: String, required: true },
    grade: { type: String, required: true },
    subjects: [{ type: String, required: true }],
}, { timestamps: true });
exports.Education = (0, mongoose_1.model)('Education', educationSchema);
