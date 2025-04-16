import { Types } from "mongoose";

export interface TBlog {
  author: Types.ObjectId;
  content: string;
  title: string;
  imageUrl?: string;
}
