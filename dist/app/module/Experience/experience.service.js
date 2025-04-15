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
exports.ExperienceService = void 0;
const experience_model_1 = require("./experience.model");
const createExperienceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.Experience.create(payload);
    return result;
});
const getAllExperiencesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.Experience.find()
        .sort('-createdAt')
        .populate('technologies');
    return result;
});
const getExperienceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.Experience.findById(id);
    return result;
});
const updateExperienceInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.Experience.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteExperienceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.Experience.findByIdAndDelete(id);
    return result;
});
exports.ExperienceService = {
    createExperienceIntoDB,
    getAllExperiencesFromDB,
    getExperienceFromDB,
    updateExperienceInDB,
    deleteExperienceFromDB,
};
