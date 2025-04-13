import express from "express";
import { LinksController } from "./links.controller";
import validateRequest from "../../middlewares/validateRequest";
import { LinksValidation } from "./links.validations";
import Auth from "../../middlewares/auth";
import { USER_ROLE } from "../Admin/admin.constants";

const router = express.Router();

router.post(
  "/",
  Auth(USER_ROLE.ADMIN),
  validateRequest(LinksValidation.linksValidationSchema),
  LinksController.createLink
);
router.get("/", LinksController.getAllLinks);
router.get("/:id", LinksController.getLinkById);
router.patch("/:id", Auth(USER_ROLE.ADMIN), LinksController.updateLink);
router.delete("/:id", Auth(USER_ROLE.ADMIN), LinksController.deleteLink);

export const LinksRoutes = router;
