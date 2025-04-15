"use strict";
/* eslint-disable no-console */
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
exports.seed = void 0;
const config_1 = __importDefault(require("../../config"));
const admin_model_1 = require("../module/Admin/admin.model");
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check admin is created
        const admin = yield admin_model_1.Admin.findOne({
            email: config_1.default.admin_email,
        });
        if (!admin) {
            yield admin_model_1.Admin.create({
                name: "Abu Talha Md Jobayer",
                email: config_1.default.admin_email,
                password: config_1.default.admin_password,
            });
            console.log("Admin created successfully...");
            console.log("Seeding completed...");
        }
    }
    catch (error) {
        console.log("Error in seeding", error);
    }
});
exports.seed = seed;
