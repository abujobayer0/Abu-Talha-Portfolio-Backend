import express from "express";
import { BlogController } from "./blog.controller";
import validateRequest from "../../middlewares/validateRequest";
import { BlogsValidation } from "./blog.validation";
import { USER_ROLE } from "../Admin/admin.constants";
import Auth from "../../middlewares/auth";

const router = express.Router();

// Create a blog
router.post(
  "/",
  Auth(USER_ROLE.ADMIN),
  validateRequest(BlogsValidation.createBlogSchema),
  BlogController.createBlog
);

// Get all blogs
router.get("/", BlogController.getAllBlogs);

// Get a single blog by ID
router.get("/:id", BlogController.getBlog);

// Update blog by ID
router.patch(
  "/:id",
  // Auth(USER_ROLE.ADMIN),
  validateRequest(BlogsValidation.updateBlogSchema),
  BlogController.updateBlog
);

// Delete blog by ID
router.delete("/:id", Auth(USER_ROLE.ADMIN), BlogController.deleteBlog);

export const BlogRoutes = router;
