"use client";

import { motion } from "framer-motion";

import SkillCard from "./SkillCard";
import { SkillCategory as SkillCategoryType } from "@/types/skill";

interface Props {
  category: SkillCategoryType;
}

export default function SkillCategory({
  category,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mb-16"
    >
      <h3 className="mb-8 text-2xl font-bold">
        {category.title}
      </h3>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {category.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </motion.div>
  );
}