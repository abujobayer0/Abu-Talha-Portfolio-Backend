import mongoose, { Schema, Document } from 'mongoose';
import { TProject } from './projects.interface';

const projectSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    github: {
      frontend: {
        type: String,
        required: true,
      },
      backend: {
        type: String,
        required: true,
      },
    },
    live: {
      type: String,
      required: true,
    },
    technologies: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: 'Skill',
    },
    images: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model<TProject>('Project', projectSchema);
