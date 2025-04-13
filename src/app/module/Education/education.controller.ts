import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { EducationService } from './education.service';

const createEducation = catchAsync(async (req, res) => {
  const result = await EducationService.createEducationIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education created successfully',
    data: result,
  });
});

const getAllEducations = catchAsync(async (req, res) => {
  const result = await EducationService.getAllEducationsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Educations fetched successfully',
    data: result,
  });
});

const getEducation = catchAsync(async (req, res) => {
  const result = await EducationService.getEducationFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education fetched successfully',
    data: result,
  });
});

const updateEducation = catchAsync(async (req, res) => {
  const result = await EducationService.updateEducationInDB(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education updated successfully',
    data: result,
  });
});

const deleteEducation = catchAsync(async (req, res) => {
  const result = await EducationService.deleteEducationFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education deleted successfully',
    data: result,
  });
});

export const EducationController = {
  createEducation,
  getAllEducations,
  getEducation,
  updateEducation,
  deleteEducation,
};
