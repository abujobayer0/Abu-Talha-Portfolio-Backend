import express from 'express';
import { ExperienceController } from './experience.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ExperienceValidation } from './experience.validation';
import { USER_ROLE } from '../Admin/admin.constants';
import Auth from '../../middlewares/auth';

const router = express.Router();

// Create an experience
router.post(
  '/',
  Auth(USER_ROLE.ADMIN),
  validateRequest(ExperienceValidation.createExperienceSchema),
  ExperienceController.createExperience
);

// Get all experiences
router.get('/', ExperienceController.getAllExperiences);

// Get a single experience by ID
router.get('/:id', ExperienceController.getExperience);

// Update an experience by ID
router.patch(
  '/:id',
  Auth(USER_ROLE.ADMIN),
  validateRequest(ExperienceValidation.updateExperienceSchema),
  ExperienceController.updateExperience
);

// Delete an experience by ID
router.delete(
  '/:id',
  Auth(USER_ROLE.ADMIN),
  ExperienceController.deleteExperience
);

export const ExperienceRoutes = router;
