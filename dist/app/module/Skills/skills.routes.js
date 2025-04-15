"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = __importDefault(require("express"));
const skills_controller_1 = require("./skills.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const skills_validation_1 = require("./skills.validation");
const admin_constants_1 = require("../Admin/admin.constants");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
// Create a skill
router.post('/', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), (0, validateRequest_1.default)(skills_validation_1.SkillsValidation.createSkillSchema), skills_controller_1.SkillController.createSkill);
// Get all skills
router.get('/', skills_controller_1.SkillController.getAllSkills);
// Get a single skill by ID
router.get('/:id', skills_controller_1.SkillController.getSkill);
// Update a skill by ID
router.patch('/:id', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), (0, validateRequest_1.default)(skills_validation_1.SkillsValidation.updateSkillSchema), skills_controller_1.SkillController.updateSkill);
// Delete a skill by ID
router.delete('/:id', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), skills_controller_1.SkillController.deleteSkill);
exports.SkillRoutes = router;
