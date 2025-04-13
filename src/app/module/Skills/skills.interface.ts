export enum SkillLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Expert = 'Expert',
}

export enum SkillCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  DevOps = 'DevOps',
  Database = 'Database',
  Android = 'Android',
  Tools = 'Tools',
  Other = 'Other',
}

export interface TSkill {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  icon: string;
}
