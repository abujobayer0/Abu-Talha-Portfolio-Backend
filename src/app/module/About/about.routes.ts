import express from 'express';
import { AboutController } from './about.controller';
import Auth from '../../middlewares/auth';
import { USER_ROLE } from '../Admin/admin.constants';

const router = express.Router();

// Route to create a new about entry
router.post('/', Auth(USER_ROLE.ADMIN), AboutController.createAbout);

// Route to get all about entries
router.get('/', AboutController.getAllAbout);

// Route to get a single about entry by ID
router.get('/:id', AboutController.getAbout);

// Route to update an about entry
router.patch('/:id', Auth(USER_ROLE.ADMIN), AboutController.updateAbout);

// Route to delete an about entry
router.delete('/:id', Auth(USER_ROLE.ADMIN), AboutController.deleteAbout);

export const AboutRoutes = router;
