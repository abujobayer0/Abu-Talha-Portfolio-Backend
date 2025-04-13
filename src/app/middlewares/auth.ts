import { NextFunction } from 'express';
import { USER_ROLE } from '../module/Admin/admin.constants';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import { verifyToken } from '../utils/tokenGenerateFunction';
import { JwtPayload } from 'jsonwebtoken';
import config from '../../config';
import { Admin } from '../module/Admin/admin.model';

const Auth = (...requiredRoles: (keyof typeof USER_ROLE)[]) => {
  return catchAsync(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Checking if the Authorization header is missing
    if (!authHeader) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    // Ensure the token has 'Bearer' prefix and split it
    const token = authHeader.startsWith('Bearer ')
      ? authHeader.split(' ')[1] // Extract the token without 'Bearer' prefix
      : authHeader;

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid token format!');
    }

    // Verify the token
    const decoded = verifyToken(
      token,
      config.jwt_secret as string
    ) as JwtPayload;

    const { id, role, email } = decoded;

    // Check if the user exists
    const admin = await Admin.findById(id);
    if (!admin) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
    }

    // Check if the role is authorized
    if (
      requiredRoles &&
      requiredRoles.length &&
      !requiredRoles.includes(role)
    ) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized for this action'
      );
    }

    req.user = decoded;
    next();
  });
};

export default Auth;
