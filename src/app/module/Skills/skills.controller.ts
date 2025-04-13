import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillService } from './skills.service';

// Create a new skill
const createSkill = catchAsync(async (req, res) => {
  const result = await SkillService.createSkillIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is created successfully',
    data: result,
  });
});

// Get all skills, optionally filter by category
const getAllSkills = catchAsync(async (req, res) => {
  const { category } = req.query;
  const result = await SkillService.getAllSkillsFromDB(category as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: category
      ? `Skills for category: ${category}`
      : 'All skills retrieved successfully',
    data: result,
  });
});

// Get a skill by ID
const getSkill = catchAsync(async (req, res) => {
  const result = await SkillService.getSkillFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get skill successfully',
    data: result,
  });
});

// Update a skill
const updateSkill = catchAsync(async (req, res) => {
  const result = await SkillService.updateSkillInDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  });
});

// Delete a skill
const deleteSkill = catchAsync(async (req, res) => {
  const result = await SkillService.deleteSkillFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill deleted successfully',
    data: result,
  });
});

export const SkillController = {
  createSkill,
  getAllSkills,
  getSkill,
  updateSkill,
  deleteSkill,
};
