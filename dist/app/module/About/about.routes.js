"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutRoutes = void 0;
const express_1 = __importDefault(require("express"));
const about_controller_1 = require("./about.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const admin_constants_1 = require("../Admin/admin.constants");
const router = express_1.default.Router();
// Route to create a new about entry
router.post('/', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), about_controller_1.AboutController.createAbout);
// Route to get all about entries
router.get('/', about_controller_1.AboutController.getAllAbout);
// Route to get a single about entry by ID
router.get('/:id', about_controller_1.AboutController.getAbout);
// Route to update an about entry
router.patch('/:id', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), about_controller_1.AboutController.updateAbout);
// Route to delete an about entry
router.delete('/:id', (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), about_controller_1.AboutController.deleteAbout);
exports.AboutRoutes = router;
