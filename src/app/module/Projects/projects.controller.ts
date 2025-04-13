import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectService } from "./projects.service";
import { TProject } from "./projects.interface";

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectService.createProject(req.body as TProject);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const { result, meta } = await ProjectService.getAllProjects(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All projects retrieved successfully",
    data: result,
    meta: meta,
  });
});

const getProjectById = catchAsync(async (req, res) => {
  const result = await ProjectService.getProjectById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project retrieved successfully",
    data: result,
  });
});

const updateProjectById = catchAsync(async (req, res) => {
  const result = await ProjectService.updateProjectById(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});

const deleteProjectById = catchAsync(async (req, res) => {
  const result = await ProjectService.deleteProjectById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Delete projects successfully",
    data: result,
  });
});

export const ProjectController = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
