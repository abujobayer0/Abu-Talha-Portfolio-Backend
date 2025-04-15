"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const blog_validation_1 = require("./blog.validation");
const admin_constants_1 = require("../Admin/admin.constants");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
// Create a blog
router.post("/", (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), (0, validateRequest_1.default)(blog_validation_1.BlogsValidation.createBlogSchema), blog_controller_1.BlogController.createBlog);
// Get all blogs
router.get("/", blog_controller_1.BlogController.getAllBlogs);
// Get a single blog by ID
router.get("/:id", blog_controller_1.BlogController.getBlog);
// Update blog by ID
router.patch("/:id", (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), (0, validateRequest_1.default)(blog_validation_1.BlogsValidation.updateBlogSchema), blog_controller_1.BlogController.updateBlog);
// Delete blog by ID
router.delete("/:id", (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), blog_controller_1.BlogController.deleteBlog);
exports.BlogRoutes = router;
