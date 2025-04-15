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
exports.AboutService = void 0;
const about_model_1 = require("./about.model");
// Create a new about entry
const createAboutIntoDB = (payload, adminId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.About.create(Object.assign(Object.assign({}, payload), { me: adminId }));
    return result;
});
// Get all about entries
const getAllAboutFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.About.find().sort('-createdAt').populate('me');
    return result;
});
// Get a single about entry by ID
const getAboutFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.About.findById(id);
    return result;
});
// Update an about entry
const updateAboutInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.About.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
// Delete an about entry
const deleteAboutFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.About.findByIdAndDelete(id);
    return result;
});
exports.AboutService = {
    createAboutIntoDB,
    getAllAboutFromDB,
    getAboutFromDB,
    updateAboutInDB,
    deleteAboutFromDB,
};
