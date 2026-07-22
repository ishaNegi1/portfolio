"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {

  const technologies = [
    ...project.techStack.frontend,
    ...project.techStack.backend,
    ...project.techStack.database,
    ...project.techStack.tools,
  ];

  return (
    <motion.div
      layout
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
        duration: 0.35,
      }}
      className="h-full"
    >
      <Card className="flex h-full flex-col overflow-hidden border border-white/10 bg-[#111111] p-0 transition-all duration-300 hover:border-[#9EF01A]/30 hover:shadow-[0_0_30px_rgba(158,240,26,0.08)]">

        {/* Top Accent */}

        <div className="h-0.5 w-full bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8]" />

        {/* Image */}

        <div className="relative h-56 overflow-hidden">

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#09090B] via-[#09090B]/10 to-transparent" />

          {/* <div className="absolute left-4 top-4 rounded-full border border-[#9EF01A]/25 bg-[#161616] px-3 py-1.5 text-xs font-semibold text-[#9EF01A]">
            {project.category}
          </div> */}

        </div>

        <div className="flex flex-1 flex-col py-5 px-3">
                  {/* Title */}

        <div>

          <h3 className="text-xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">
            {project.shortDescription}
          </p>

        </div>

        {/* Tech Stack */}

        <div className="mt-5 flex flex-wrap gap-2">

          {technologies.slice(0, 8).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors duration-300 hover:border-[#9EF01A]/30 hover:text-[#9EF01A]"
            >
              {tech}
            </span>
          ))}

          {technologies.length > 8 && (
            <span className="rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-slate-400">
              +{technologies.length - 5}
            </span>
          )}

        </div>

        <div className="my-5 h-px bg-linear-to-r from-white/10 via-white/5 to-transparent" />

        <div className="mt-auto" />
                {/* Buttons */}

        <div className="mt-2 grid grid-cols-2 gap-2">

          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                size="sm"
                className="w-full justify-center"
              >
                <FaCode className="mr-2" />
                GitHub
              </Button>
            </a>
          ) : (
            <Button
              size="sm"
              variant="secondary"
              disabled
              className="w-full justify-center"
            >
              <FaCode className="mr-2" />
              GitHub
            </Button>
          )}

          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                size="sm"
                variant="outline"
                className="w-full justify-center"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </Button>
            </a>
          ) : (
            <Button
              size="sm"
              variant="outline"
              disabled
              className="w-full justify-center"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </Button>
          )}

        </div>

      </div>

    </Card>

  </motion.div>
  );
}