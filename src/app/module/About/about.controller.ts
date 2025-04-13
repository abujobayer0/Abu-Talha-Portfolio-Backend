import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AboutService } from './about.service';

// Create a new about entry
const createAbout = catchAsync(async (req, res) => {
  const result = await AboutService.createAboutIntoDB(req.body, req.user.id);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'About entry created successfully',
    data: result,
  });
});

// Get all about entries
const getAllAbout = catchAsync(async (req, res) => {
  const result = await AboutService.getAllAboutFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All about entries retrieved successfully',
    data: result,
  });
});

// Get a single about entry by ID
const getAbout = catchAsync(async (req, res) => {
  const result = await AboutService.getAboutFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'About entry retrieved successfully',
    data: result,
  });
});

// Update an about entry
const updateAbout = catchAsync(async (req, res) => {
  const result = await AboutService.updateAboutInDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'About entry updated successfully',
    data: result,
  });
});

// Delete an about entry
const deleteAbout = catchAsync(async (req, res) => {
  const result = await AboutService.deleteAboutFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'About entry deleted successfully',
    data: result,
  });
});

export const AboutController = {
  createAbout,
  getAllAbout,
  getAbout,
  updateAbout,
  deleteAbout,
};
