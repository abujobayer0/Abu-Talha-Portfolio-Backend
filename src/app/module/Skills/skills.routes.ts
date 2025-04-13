import express from 'express';
import { SkillController } from './skills.controller';
import validateRequest from '../../middlewares/validateRequest';
import { SkillsValidation } from './skills.validation';
import { USER_ROLE } from '../Admin/admin.constants';
import Auth from '../../middlewares/auth';

const router = express.Router();

// Create a skill
router.post(
  '/',
  Auth(USER_ROLE.ADMIN),
  validateRequest(SkillsValidation.createSkillSchema),
  SkillController.createSkill
);

// Get all skills
router.get('/', SkillController.getAllSkills);

// Get a single skill by ID
router.get('/:id', SkillController.getSkill);

// Update a skill by ID
router.patch(
  '/:id',
  Auth(USER_ROLE.ADMIN),
  validateRequest(SkillsValidation.updateSkillSchema),
  SkillController.updateSkill
);

// Delete a skill by ID
router.delete('/:id', Auth(USER_ROLE.ADMIN), SkillController.deleteSkill);

export const SkillRoutes = router;
