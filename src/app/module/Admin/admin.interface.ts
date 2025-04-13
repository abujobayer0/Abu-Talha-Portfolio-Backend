import { Model } from 'mongoose';

export interface TAdmin {
  name: string;
  email: string;
  password: string;
  role: 'ADMIN';
  image: string;
}

export interface AdminModel extends Model<TAdmin> {
  isAdminExistsByCustomId(id: string): Promise<TAdmin | null>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}
