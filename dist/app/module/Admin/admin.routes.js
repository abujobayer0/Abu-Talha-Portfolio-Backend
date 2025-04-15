"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const admin_validation_1 = require("./admin.validation");
const admin_controller_1 = require("./admin.controller");
const router = express_1.default.Router();
router.post('/create-admin', (0, validateRequest_1.default)(admin_validation_1.AdminValidation.adminValidationSchema), admin_controller_1.AdminController.createAdmin);
router.patch('/', admin_controller_1.AdminController.updateAdmin);
router.post('/login', (0, validateRequest_1.default)(admin_validation_1.AdminValidation.loginValidationSchema), admin_controller_1.AdminController.loginAdmin);
router.get('/:adminId', admin_controller_1.AdminController.getAdmin);
exports.AdminRoutes = router;
