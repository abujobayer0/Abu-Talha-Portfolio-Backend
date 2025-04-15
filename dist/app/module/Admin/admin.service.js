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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const config_1 = __importDefault(require("../../../config"));
const tokenGenerateFunction_1 = require("../../utils/tokenGenerateFunction");
const admin_model_1 = require("./admin.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createAdminIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // The password will be hashed in the Admin model's pre-save hook
    const result = yield admin_model_1.Admin.create(payload);
    return result;
});
const updateAdminIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admin_model_1.Admin.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const getAdminFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admin_model_1.Admin.findById(id).sort('-createdAt');
    return result;
});
// New function for login
const loginAdmin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    // Find the admin by email and include the password in the query
    const admin = yield admin_model_1.Admin.findOne({ email }).select('+password');
    if (!admin) {
        throw new Error('Invalid email or password');
    }
    // Check if the password matches
    const isPasswordMatch = yield bcrypt_1.default.compare(password, admin.password);
    if (!isPasswordMatch) {
        throw new Error('Invalid email or password');
    }
    const jwtPayload = {
        id: admin._id,
        email: admin.email,
        role: admin.role,
    };
    const accessToken = (0, tokenGenerateFunction_1.createToken)(jwtPayload, config_1.default.jwt_secret, config_1.default.jwt_secret_expires_in);
    return {
        admin,
        accessToken,
    };
});
exports.AdminService = {
    createAdminIntoDB,
    updateAdminIntoDB,
    getAdminFromDB,
    loginAdmin,
};
