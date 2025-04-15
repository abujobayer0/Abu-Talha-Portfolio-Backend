"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_routes_1 = require("../module/Admin/admin.routes");
const projects_routes_1 = require("../module/Projects/projects.routes");
const skills_routes_1 = require("../module/Skills/skills.routes");
const experience_routes_1 = require("../module/Experience/experience.routes");
const education_routes_1 = require("../module/Education/education.routes");
const blog_routes_1 = require("../module/Blogs/blog.routes");
const about_routes_1 = require("../module/About/about.routes");
const links_routes_1 = require("../module/Links/links.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/users",
        route: admin_routes_1.AdminRoutes,
    },
    {
        path: "/experiences",
        route: experience_routes_1.ExperienceRoutes,
    },
    {
        path: "/skills",
        route: skills_routes_1.SkillRoutes,
    },
    {
        path: "/projects",
        route: projects_routes_1.ProjectRoutes,
    },
    {
        path: "/educations",
        route: education_routes_1.EducationRoutes,
    },
    {
        path: "/blogs",
        route: blog_routes_1.BlogRoutes,
    },
    {
        path: "/about",
        route: about_routes_1.AboutRoutes,
    },
    {
        path: "/links",
        route: links_routes_1.LinksRoutes,
    },
];
// This will automatically loop your routes that you will add in the moduleRoutes array
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
