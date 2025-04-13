import { Types } from 'mongoose';

export interface TAbout {
  me: Types.ObjectId;
  title: string;
  description: string;
  image?: string;
  address: string;
  country: string;
  district: string;
}
