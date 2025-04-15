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
exports.EducationService = void 0;
const education_model_1 = require("./education.model");
const createEducationIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield education_model_1.Education.create(payload);
    return result;
});
const getAllEducationsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield education_model_1.Education.find().sort('-createdAt');
    return result;
});
const getEducationFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield education_model_1.Education.findById(id);
    return result;
});
const updateEducationInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield education_model_1.Education.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteEducationFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield education_model_1.Education.findByIdAndDelete(id);
    return result;
});
exports.EducationService = {
    createEducationIntoDB,
    getAllEducationsFromDB,
    getEducationFromDB,
    updateEducationInDB,
    deleteEducationFromDB,
};
