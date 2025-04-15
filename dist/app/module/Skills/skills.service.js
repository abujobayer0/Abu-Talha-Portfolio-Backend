"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillService = void 0;
const skills_model_1 = require("./skills.model");
// Create a new skill
const createSkillIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skills_model_1.Skill.create(payload);
    return result;
});
// Get all skills or filter by category
const getAllSkillsFromDB = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = category ? { category } : {};
    const result = yield skills_model_1.Skill.find(filter).sort('createdAt');
    return result;
});
// Get a single skill by ID
const getSkillFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skills_model_1.Skill.findById(id);
    return result;
});
// Update a skill
const updateSkillInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skills_model_1.Skill.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
// Delete a skill
const deleteSkillFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skills_model_1.Skill.findByIdAndDelete(id);
    return result;
});
exports.SkillService = {
    createSkillIntoDB,
    getAllSkillsFromDB,
    getSkillFromDB,
    updateSkillInDB,
    deleteSkillFromDB,
};
