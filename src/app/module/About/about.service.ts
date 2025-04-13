import { TAbout } from './about.interface';
import { About } from './about.model';

// Create a new about entry
const createAboutIntoDB = async (payload: TAbout, adminId: string) => {
  const result = await About.create({ ...payload, me: adminId });
  return result;
};

// Get all about entries
const getAllAboutFromDB = async () => {
  const result = await About.find().sort('-createdAt').populate('me');
  return result;
};

// Get a single about entry by ID
const getAboutFromDB = async (id: string) => {
  const result = await About.findById(id);
  return result;
};

// Update an about entry
const updateAboutInDB = async (id: string, payload: TAbout) => {
  const result = await About.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// Delete an about entry
const deleteAboutFromDB = async (id: string) => {
  const result = await About.findByIdAndDelete(id);
  return result;
};

export const AboutService = {
  createAboutIntoDB,
  getAllAboutFromDB,
  getAboutFromDB,
  updateAboutInDB,
  deleteAboutFromDB,
};
