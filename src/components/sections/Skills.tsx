"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import SkillCategory from "@/components/skills/SkillCategory";

import skills from "@/data/skills";

export default function Skills() {
  return (
    <section className=" sm:px-20 px-5 py-12 my-20">
        <SectionHeading
          title="Skills"
          subtitle="Technologies, languages, frameworks and tools I use to build modern applications."
        />

        <div className=" space-y-14">
          {skills.map((category) => (
            <SkillCategory
              key={category.title}
              category={category}
            />
          ))}
        </div>
    </section>
  );
}