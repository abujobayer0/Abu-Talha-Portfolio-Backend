import { TSkill } from './skills.interface';
import { Skill } from './skills.model';

// Create a new skill
const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

// Get all skills or filter by category
const getAllSkillsFromDB = async (category?: string) => {
  const filter = category ? { category } : {};
  const result = await Skill.find(filter).sort('createdAt');
  return result;
};

// Get a single skill by ID
const getSkillFromDB = async (id: string) => {
  const result = await Skill.findById(id);
  return result;
};

// Update a skill
const updateSkillInDB = async (id: string, payload: TSkill) => {
  const result = await Skill.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// Delete a skill
const deleteSkillFromDB = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id);
  return result;
};

export const SkillService = {
  createSkillIntoDB,
  getAllSkillsFromDB,
  getSkillFromDB,
  updateSkillInDB,
  deleteSkillFromDB,
};
