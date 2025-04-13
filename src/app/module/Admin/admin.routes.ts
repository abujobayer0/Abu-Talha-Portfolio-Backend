import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AdminValidation } from './admin.validation';
import { AdminController } from './admin.controller';

const router = express.Router();

router.post(
  '/create-admin',
  validateRequest(AdminValidation.adminValidationSchema),
  AdminController.createAdmin
);

router.patch('/', AdminController.updateAdmin);

router.post(
  '/login',
  validateRequest(AdminValidation.loginValidationSchema),
  AdminController.loginAdmin
);

router.get('/:adminId', AdminController.getAdmin);

export const AdminRoutes = router;
