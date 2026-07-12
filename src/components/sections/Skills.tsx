"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import SkillCategory from "@/components/skills/SkillCategory";

import skills from "@/data/skills";

export default function Skills() {
  return (
    <div className="container">
      <SectionHeading
        title="Skills"
        subtitle="Technologies, programming languages, frameworks and tools I use to build modern web applications."
      />

      {skills.map((category) => (
        <SkillCategory
          key={category.title}
          category={category}
        />
      ))}
    </div>
  );
}