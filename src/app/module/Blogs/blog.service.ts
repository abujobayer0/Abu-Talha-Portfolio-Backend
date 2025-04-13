import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog, id: string) => {
  const result = await Blog.create({ ...payload, author: id });
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find().populate('author').sort('-createdAt');
  return result;
};

const getBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id).populate('author');
  return result;
};

const updateBlogInDB = async (id: string, payload: TBlog) => {
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getBlogFromDB,
  updateBlogInDB,
  deleteBlogFromDB,
};
