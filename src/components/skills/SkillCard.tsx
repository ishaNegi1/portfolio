"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { Skill } from "@/types/skill";

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <Card className="flex flex-col items-center justify-center p-6 text-center h-40">
        <Icon
          size={42}
          className="mb-5 text-blue-400"
        />

        <p className="font-semibold">
          {skill.name}
        </p>
      </Card>
    </motion.div>
  );
}