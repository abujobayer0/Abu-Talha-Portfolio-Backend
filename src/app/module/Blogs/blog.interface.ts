import { Types } from 'mongoose';

export interface TBlog {
  author: Types.ObjectId;
  content: string;
  imageUrl?: string;
}
