import { model, Schema } from 'mongoose';
import { AdminModel, TAdmin } from './admin.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';

const AdminSchema = new Schema<TAdmin, AdminModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ['ADMIN'],
      default: 'ADMIN',
    },
    image: {
      type: String,
      default: config.admin_image,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook for hashing password
AdminSchema.pre('save', async function (next) {
  const admin = this;

  // Only hash password if it has been modified
  if (admin.isModified('password')) {
    admin.password = await bcrypt.hash(
      admin.password,
      Number(config.bcrypt_salt_rounds)
    );
  }

  next();
});

// Static methods
AdminSchema.statics.isAdminExistsByCustomId = async function (id: string) {
  return await Admin.findOne({ _id: id }).select('+password');
};

AdminSchema.statics.isPasswordMatched = async function (
  plainTextPassword: string,
  hashedPassword: string
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

AdminSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const Admin = model<TAdmin, AdminModel>('Admin', AdminSchema);
