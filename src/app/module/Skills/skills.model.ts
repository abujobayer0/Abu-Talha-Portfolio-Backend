import { Schema, model } from 'mongoose';
import { TSkill, SkillLevel, SkillCategory } from './skills.interface';

const skillSchema = new Schema<TSkill>(
  {
    name: { type: String, required: true },
    level: {
      type: String,
      required: true,
      enum: Object.values(SkillLevel),
    },
    category: {
      type: String,
      required: true,
      enum: Object.values(SkillCategory),
    },
    icon: { type: String, required: true },
  },
  { timestamps: true }
);

export const Skill = model<TSkill>('Skill', skillSchema);
