"use client";

import { motion } from "framer-motion";

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
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {/* Heading */}

      <div className="mb-7 flex items-center gap-4">

        <div className="h-3 w-3 rounded-full bg-[#9EF01A]" />

        <h3 className="text-2xl font-bold text-white">
          {category.title}
        </h3>

        <div className="h-px flex-1 bg-linear-to-r from-[#9EF01A]/50 via-white/10 to-transparent" />

      </div>

      {/* Skills */}

      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.04,
              }}
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
            >
              <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/3 p-3 transition-all duration-300 hover:border-[#9EF01A]/30 hover:bg-[#9EF01A]/10">

                <Icon
                  size={18}
                  className="text-[#9EF01A] transition-transform duration-300 group-hover:rotate-12"
                />

                <span className="font-medium text-slate-300">
                  {skill.name}
                </span>

              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}