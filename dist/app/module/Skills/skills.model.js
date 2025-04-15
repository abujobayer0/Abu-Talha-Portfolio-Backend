"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const mongoose_1 = require("mongoose");
const skills_interface_1 = require("./skills.interface");
const skillSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    level: {
        type: String,
        required: true,
        enum: Object.values(skills_interface_1.SkillLevel),
    },
    category: {
        type: String,
        required: true,
        enum: Object.values(skills_interface_1.SkillCategory),
    },
    icon: { type: String, required: true },
}, { timestamps: true });
exports.Skill = (0, mongoose_1.model)('Skill', skillSchema);
