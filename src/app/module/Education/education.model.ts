import { Schema, model } from 'mongoose';
import { TEducation } from './education.interface';

const educationSchema = new Schema<TEducation>(
  {
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, default: null },
    description: { type: String, required: true },
    grade: { type: String, required: true },
    subjects: [{ type: String, required: true }],
  },
  { timestamps: true }
);

export const Education = model<TEducation>('Education', educationSchema);
