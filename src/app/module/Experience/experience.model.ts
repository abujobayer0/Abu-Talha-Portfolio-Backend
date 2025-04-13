import { Schema, model } from "mongoose";
import { TExperience } from "./experience.interface";

const experienceSchema = new Schema<TExperience>(
  {
    title: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      default: null,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Skill",
      },
    ],
  },
  { timestamps: true }
);

export const Experience = model<TExperience>("Experience", experienceSchema);
