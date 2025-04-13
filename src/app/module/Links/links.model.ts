import mongoose, { Schema } from "mongoose";
import { TLinks } from "./links.interface";

const LinksSchema = new Schema<TLinks>(
  {
    resume: { type: String, required: true },
    linkedin: { type: String, required: true },
    github: { type: String, required: true },
    twitter: { type: String, required: true },
    facebook: { type: String, required: true },
    email: { type: String, required: true, match: /\S+@\S+\.\S+/ },
    phone: { type: String, required: true },
    discord: { type: String, required: true },
  },
  { timestamps: true }
);

export const Links = mongoose.model<TLinks>("Links", LinksSchema);
