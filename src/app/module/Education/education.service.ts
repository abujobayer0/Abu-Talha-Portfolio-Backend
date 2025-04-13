import { TEducation } from './education.interface';
import { Education } from './education.model';

const createEducationIntoDB = async (payload: TEducation) => {
  const result = await Education.create(payload);
  return result;
};

const getAllEducationsFromDB = async () => {
  const result = await Education.find().sort('-createdAt');
  return result;
};

const getEducationFromDB = async (id: string) => {
  const result = await Education.findById(id);
  return result;
};

const updateEducationInDB = async (id: string, payload: any) => {
  const result = await Education.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteEducationFromDB = async (id: string) => {
  const result = await Education.findByIdAndDelete(id);
  return result;
};

export const EducationService = {
  createEducationIntoDB,
  getAllEducationsFromDB,
  getEducationFromDB,
  updateEducationInDB,
  deleteEducationFromDB,
};
