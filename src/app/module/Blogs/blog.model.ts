import { Schema, model } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
    content: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Blog = model<TBlog>('Blog', blogSchema);
