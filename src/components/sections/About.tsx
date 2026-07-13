"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
  FaRocket,
} from "react-icons/fa";

import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    description:
      "Developing responsive and scalable web applications using modern frontend and backend technologies.",
  },
  {
    icon: <FaBrain />,
    title: "AI Integration",
    description:
      "Building intelligent applications powered by LLMs, OpenRouter and modern AI tools.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description:
      "BCA Graduate with a strong academic record and hands-on development experience.",
  },
  {
    icon: <FaRocket />,
    title: "Always Learning",
    description:
      "Passionate about learning new technologies and building impactful products.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Started BCA",
    description:
      "Began my journey into software development and computer science.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    description:
      "Built multiple responsive projects using React, Tailwind CSS and JavaScript.",
  },
  {
    year: "2025",
    title: "Full Stack & AI",
    description:
      "Worked on MERN applications, AI-powered solutions and research projects.",
  },
  {
    year: "2026",
    title: "Open to Opportunities",
    description:
      "Looking for Full Stack Developer roles while continuously improving my skills.",
  },
];

export default function About() {
  return (
    <div className="container">
      <SectionHeading
        title="About Me"
        subtitle="Passionate Full Stack Developer dedicated to building scalable, performant and user-friendly web applications."
      />

      <div className="grid gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="mb-6 text-3xl font-bold">
            Turning Ideas Into Digital Products
          </h3>

          <div className="space-y-6 text-slate-400 leading-8">
            <p>
              I'm a Full Stack Developer passionate about designing and
              developing modern web applications with clean architecture,
              responsive interfaces and scalable backend systems.
            </p>

            <p>
              My interests include Full Stack Development, Artificial
              Intelligence, API Development, UI/UX Design and building
              real-world solutions that solve meaningful problems.
            </p>

            <p>
              I enjoy learning new technologies and continuously improving my
              development workflow while writing clean, maintainable and
              production-ready code.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {highlights.map((item) => (
            <Card key={item.title} className="p-6">
              <div className="mb-5 text-3xl text-blue-400">
                {item.icon}
              </div>

              <h4 className="mb-3 text-xl font-semibold">
                {item.title}
              </h4>

              <p className="text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>

      <div className="mt-24">
        <h3 className="mb-12 text-center text-3xl font-bold">
          My Journey
        </h3>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-linear-to-b from-blue-500 via-indigo-500 to-purple-500 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                className={`flex ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                <div className="hidden md:block md:flex-1" />

                <div className="z-10 h-5 w-5 rounded-full bg-linear-to-r from-blue-500 to-purple-500" />

                <div className="flex-1">
                  <Card className="p-6">
                    <span className="text-blue-400 font-semibold">
                      {item.year}
                    </span>

                    <h4 className="mt-2 text-xl font-bold">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-slate-400 leading-7">
                      {item.description}
                    </p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}