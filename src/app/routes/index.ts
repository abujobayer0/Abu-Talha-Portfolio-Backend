import { Router } from "express";
import { AdminRoutes } from "../module/Admin/admin.routes";
import { ProjectRoutes } from "../module/Projects/projects.routes";
import { SkillRoutes } from "../module/Skills/skills.routes";
import { ExperienceRoutes } from "../module/Experience/experience.routes";
import { EducationRoutes } from "../module/Education/education.routes";
import { BlogRoutes } from "../module/Blogs/blog.routes";
import { AboutRoutes } from "../module/About/about.routes";
import { LinksRoutes } from "../module/Links/links.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: AdminRoutes,
  },
  {
    path: "/experiences",
    route: ExperienceRoutes,
  },
  {
    path: "/skills",
    route: SkillRoutes,
  },
  {
    path: "/projects",
    route: ProjectRoutes,
  },
  {
    path: "/educations",
    route: EducationRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
  {
    path: "/about",
    route: AboutRoutes,
  },
  {
    path: "/links",
    route: LinksRoutes,
  },
];

// This will automatically loop your routes that you will add in the moduleRoutes array
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
