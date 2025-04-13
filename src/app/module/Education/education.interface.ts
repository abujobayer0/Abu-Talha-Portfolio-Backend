export interface TEducation {
  degree: string;
  institution: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  grade: string;
  subjects: string[];
}
