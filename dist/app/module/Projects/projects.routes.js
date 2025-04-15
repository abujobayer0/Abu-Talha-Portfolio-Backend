"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const projects_controller_1 = require("./projects.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const projects_validation_1 = require("./projects.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const admin_constants_1 = require("../Admin/admin.constants");
const router = express_1.default.Router();
// Create a new project
router.post('/', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), (0, validateRequest_1.default)(projects_validation_1.ProjectsValidation.createProjectSchema), projects_controller_1.ProjectController.createProject);
// Get all projects
router.get('/', projects_controller_1.ProjectController.getAllProjects);
// Get a single project by ID
router.get('/:id', projects_controller_1.ProjectController.getProjectById);
// Update a project by ID
router.patch('/:id', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), (0, validateRequest_1.default)(projects_validation_1.ProjectsValidation.updateProjectSchema), projects_controller_1.ProjectController.updateProjectById);
// Delete a project by ID
router.delete('/:id', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), projects_controller_1.ProjectController.deleteProjectById);
exports.ProjectRoutes = router;
