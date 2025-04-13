import config from '../../../config';
import { createToken } from '../../utils/tokenGenerateFunction';
import { TAdmin } from './admin.interface';
import { Admin } from './admin.model';
import bcrypt from 'bcrypt';

const createAdminIntoDB = async (payload: any) => {
  // The password will be hashed in the Admin model's pre-save hook
  const result = await Admin.create(payload);
  return result;
};

const updateAdminIntoDB = async (payload: Partial<TAdmin>, id: string) => {
  const result = await Admin.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const getAdminFromDB = async (id: string) => {
  const result = await Admin.findById(id).sort('-createdAt');
  return result;
};

// New function for login
const loginAdmin = async (payload: { email: string; password: string }) => {
  const { email, password } = payload;

  // Find the admin by email and include the password in the query
  const admin = await Admin.findOne({ email }).select('+password');

  if (!admin) {
    throw new Error('Invalid email or password');
  }

  // Check if the password matches
  const isPasswordMatch = await bcrypt.compare(password, admin.password);

  if (!isPasswordMatch) {
    throw new Error('Invalid email or password');
  }

  const jwtPayload = {
    id: admin._id,
    email: admin.email,
    role: admin.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_secret as string,
    config.jwt_secret_expires_in as string
  );

  return {
    admin,
    accessToken,
  };
};

export const AdminService = {
  createAdminIntoDB,
  updateAdminIntoDB,
  getAdminFromDB,
  loginAdmin,
};
