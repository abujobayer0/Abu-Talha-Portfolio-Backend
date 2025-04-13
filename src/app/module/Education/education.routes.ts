import express from 'express';
import { EducationController } from './education.controller';
import validateRequest from '../../middlewares/validateRequest';
import { EducationValidation } from './education.validation';
import { USER_ROLE } from '../Admin/admin.constants';
import Auth from '../../middlewares/auth';

const router = express.Router();

// Create an education
router.post(
  '/',
  Auth(USER_ROLE.ADMIN),
  validateRequest(EducationValidation.createEducationSchema),
  EducationController.createEducation
);

// Get all educations
router.get('/', EducationController.getAllEducations);

// Get a single education by ID
router.get('/:id', EducationController.getEducation);

// Update education by ID
router.patch(
  '/:id',
  Auth(USER_ROLE.ADMIN),
  validateRequest(EducationValidation.updateEducationSchema),
  EducationController.updateEducation
);

// Delete education by ID
router.delete(
  '/:id',
  Auth(USER_ROLE.ADMIN),
  EducationController.deleteEducation
);

export const EducationRoutes = router;
