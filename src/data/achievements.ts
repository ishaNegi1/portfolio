import {
  FaAward,
  FaMedal,
  FaUsers,
  FaFileAlt,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

import { Achievement } from "@/types/achievement";

const achievements: Achievement[] = [
  {
    id: 1,
    title: "IBM Agentic AI Certification",
    organization: "IBM SkillsBuild",
    date: "2025",
    description:
      "Successfully completed IBM's Agentic AI certification focused on AI agents, LLM workflows and modern AI application development.",
    icon: FaAward,
  },

  {
    id: 2,
    title: "Research Paper Publication",
    organization: "College Research",
    date: "2025",
    description:
      "Published a research paper on Smart Public Dustbin using Artificial Intelligence and IoT for Smart City waste management.",
    icon: FaFileAlt,
  },

  {
    id: 3,
    title: "Full Stack Projects",
    organization: "Personal Projects",
    date: "2024 - Present",
    description:
      "Built multiple full stack applications including SpendWise, SustainaBite, TripGenie and AI-powered solutions.",
    icon: FaLaptopCode,
  },

  {
    id: 4,
    title: "Academic Excellence",
    organization: "BCA",
    date: "2023 - Present",
    description:
      "Maintained an excellent academic record throughout the Bachelor's degree.",
    icon: FaGraduationCap,
  },

  {
    id: 5,
    title: "Technical Society Member",
    organization: "College",
    date: "2023 - Present",
    description:
      "Actively participated in technical events, workshops and collaborative development activities.",
    icon: FaUsers,
  },

  {
    id: 6,
    title: "Hackathons & Competitions",
    organization: "Various",
    date: "2024 - Present",
    description:
      "Participated in coding competitions, hackathons and innovation challenges to improve practical problem-solving skills.",
    icon: FaMedal,
  },
];

export default achievements;