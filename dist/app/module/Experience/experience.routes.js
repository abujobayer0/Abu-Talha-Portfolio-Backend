"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const experience_controller_1 = require("./experience.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const experience_validation_1 = require("./experience.validation");
const admin_constants_1 = require("../Admin/admin.constants");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
// Create an experience
router.post('/', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), (0, validateRequest_1.default)(experience_validation_1.ExperienceValidation.createExperienceSchema), experience_controller_1.ExperienceController.createExperience);
// Get all experiences
router.get('/', experience_controller_1.ExperienceController.getAllExperiences);
// Get a single experience by ID
router.get('/:id', experience_controller_1.ExperienceController.getExperience);
// Update an experience by ID
router.patch('/:id', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), (0, validateRequest_1.default)(experience_validation_1.ExperienceValidation.updateExperienceSchema), experience_controller_1.ExperienceController.updateExperience);
// Delete an experience by ID
router.delete('/:id', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), experience_controller_1.ExperienceController.deleteExperience);
exports.ExperienceRoutes = router;
