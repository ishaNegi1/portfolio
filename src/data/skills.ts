import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiDrizzle,
  SiPostman,
  SiVercel,
  SiRender,
  SiCloudinary,
  SiFramer,
} from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";

import { SkillCategory } from "@/types/skill";

const skills: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiPostman },
      { name: "Cloudinary", icon: SiCloudinary },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "C++", icon: TbBrandCpp },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Drizzle ORM", icon: SiDrizzle },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "Figma", icon: FaFigma },
    ],
  },
];

export default skills;