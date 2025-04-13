import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { LinksService } from "./links.service";

const createLink = catchAsync(async (req: Request, res: Response) => {
  const result = await LinksService.createLinkInDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Link created successfully",
    data: result,
  });
});

const getAllLinks = catchAsync(async (_req: Request, res: Response) => {
  const result = await LinksService.getAllLinksFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All links retrieved successfully",
    data: result,
  });
});

const getLinkById = catchAsync(async (req: Request, res: Response) => {
  const result = await LinksService.getLinkByIdFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Link retrieved successfully",
    data: result,
  });
});

const updateLink = catchAsync(async (req: Request, res: Response) => {
  const result = await LinksService.updateLinkInDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Link updated successfully",
    data: result,
  });
});

const deleteLink = catchAsync(async (req: Request, res: Response) => {
  await LinksService.deleteLinkFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Link deleted successfully",
  });
});

export const LinksController = {
  createLink,
  getAllLinks,
  getLinkById,
  updateLink,
  deleteLink,
};
