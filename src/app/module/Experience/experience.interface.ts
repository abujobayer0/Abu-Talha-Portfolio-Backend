import { Types } from "mongoose";

export interface TExperience {
  title: string;
  logo: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  technologies: [Types.ObjectId];
}
