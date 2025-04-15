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
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const tokenGenerateFunction_1 = require("../utils/tokenGenerateFunction");
const config_1 = __importDefault(require("../../config"));
const admin_model_1 = require("../module/Admin/admin.model");
const Auth = (...requiredRoles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const authHeader = req.headers.authorization;
        // Checking if the Authorization header is missing
        if (!authHeader) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized!');
        }
        // Ensure the token has 'Bearer' prefix and split it
        const token = authHeader.startsWith('Bearer ')
            ? authHeader.split(' ')[1] // Extract the token without 'Bearer' prefix
            : authHeader;
        if (!token) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid token format!');
        }
        // Verify the token
        const decoded = (0, tokenGenerateFunction_1.verifyToken)(token, config_1.default.jwt_secret);
        const { id, role, email } = decoded;
        // Check if the user exists
        const admin = yield admin_model_1.Admin.findById(id);
        if (!admin) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This user is not found!');
        }
        // Check if the role is authorized
        if (requiredRoles &&
            requiredRoles.length &&
            !requiredRoles.includes(role)) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized for this action');
        }
        req.user = decoded;
        next();
    }));
};
exports.default = Auth;
