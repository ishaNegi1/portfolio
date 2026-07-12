"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onOpen,
}: ProjectCardProps) {
  return (
    <motion.div
      layout
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
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Card className="overflow-hidden p-0">
        <div className="relative h-60 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-500 hover:scale-110"
          />

          <div className="absolute left-4 top-4 rounded-full bg-blue-500/90 px-3 py-1 text-xs font-semibold text-white">
            {project.category}
          </div>
        </div>

        <div className="space-y-5 p-6">
          <div>
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.frontend
              .slice(0, 3)
              .map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
                >
                  {tech}
                </span>
              ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="secondary"
                >
                  <FaCode className="mr-2" />
                  GitHub
                </Button>
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="outline"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live
                </Button>
              </a>
            )}

            <Button
              size="sm"
              onClick={() => onOpen(project)}
            >
              View Details
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}