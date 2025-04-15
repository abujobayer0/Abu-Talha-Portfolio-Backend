"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const education_controller_1 = require("./education.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const education_validation_1 = require("./education.validation");
const admin_constants_1 = require("../Admin/admin.constants");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
// Create an education
router.post('/', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), (0, validateRequest_1.default)(education_validation_1.EducationValidation.createEducationSchema), education_controller_1.EducationController.createEducation);
// Get all educations
router.get('/', education_controller_1.EducationController.getAllEducations);
// Get a single education by ID
router.get('/:id', education_controller_1.EducationController.getEducation);
// Update education by ID
router.patch('/:id', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), (0, validateRequest_1.default)(education_validation_1.EducationValidation.updateEducationSchema), education_controller_1.EducationController.updateEducation);
// Delete education by ID
router.delete('/:id', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), education_controller_1.EducationController.deleteEducation);
exports.EducationRoutes = router;
