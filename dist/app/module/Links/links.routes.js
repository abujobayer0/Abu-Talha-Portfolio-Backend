"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksRoutes = void 0;
const express_1 = __importDefault(require("express"));
const links_controller_1 = require("./links.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const links_validations_1 = require("./links.validations");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const admin_constants_1 = require("../Admin/admin.constants");
const router = express_1.default.Router();
router.post("/", (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), (0, validateRequest_1.default)(links_validations_1.LinksValidation.linksValidationSchema), links_controller_1.LinksController.createLink);
router.get("/", links_controller_1.LinksController.getAllLinks);
router.get("/:id", links_controller_1.LinksController.getLinkById);
router.patch("/:id", (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), links_controller_1.LinksController.updateLink);
router.delete("/:id", (0, auth_1.default)(admin_constants_1.USER_ROLE.ADMIN), links_controller_1.LinksController.deleteLink);
exports.LinksRoutes = router;
