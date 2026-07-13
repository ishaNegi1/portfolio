"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

import achievements from "@/data/achievements";

export default function Achievements() {
  return (
    <div className="container">
      <SectionHeading
        title="Achievements"
        subtitle="Milestones that reflect my continuous learning, technical growth and passion for building impactful software."
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Timeline Line */}
        <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-linear-to-b from-blue-500 via-indigo-500 to-purple-500 md:block lg:left-1/2 lg:-translate-x-1/2" />

        <div className="space-y-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={achievement.id}
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
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`relative flex flex-col lg:flex-row ${
                  isLeft ? "" : "lg:flex-row-reverse"
                } items-center gap-8`}
              >
                {/* Card */}

                <div className="flex-1 w-full">
                  <Card className="p-6">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-purple-600 text-2xl text-white">
                        <Icon />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">
                          {achievement.title}
                        </h3>

                        <p className="text-blue-400">
                          {achievement.organization}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                      {achievement.date}
                    </span>

                    <p className="mt-5 leading-7 text-slate-400">
                      {achievement.description}
                    </p>
                  </Card>
                </div>

                {/* Timeline Dot */}

                <div className="z-10 hidden h-5 w-5 rounded-full border-4 border-[#050816] bg-linear-to-r from-blue-500 to-purple-600 lg:block" />

                {/* Empty Side */}

                <div className="hidden flex-1 lg:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}