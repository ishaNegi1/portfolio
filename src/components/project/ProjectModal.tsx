"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  open,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-1/2 top-1/2 z-[60] h-[90vh] w-[95%] max-w-6xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#08111f] shadow-2xl"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">
              <div>
                <h2 className="text-3xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-2 text-slate-400">
                  {project.shortDescription}
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-3 transition hover:bg-white/10"
              >
                <FaTimes size={22} />
              </button>
            </div>

            {/* Content */}

            <div className="h-[calc(90vh-90px)] overflow-y-auto">
              <div className="grid gap-10 p-8 lg:grid-cols-2">
                {/* Image */}

                <div>
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>
                          <FaGithub className="mr-2" />
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
                        <Button variant="outline">
                          <FaExternalLinkAlt className="mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Details */}

                <div className="space-y-10">
                  {/* Description */}

                  <section>
                    <h3 className="mb-4 text-2xl font-semibold">
                      Overview
                    </h3>

                    <p className="leading-8 text-slate-400">
                      {project.description}
                    </p>
                  </section>

                  {/* Features */}

                  <section>
                    <h3 className="mb-5 text-2xl font-semibold">
                      Features
                    </h3>

                    <div className="space-y-5">
                      {project.features.map((feature) => (
                        <div
                          key={feature.title}
                          className="rounded-xl border border-white/10 bg-white/5 p-5"
                        >
                          <h4 className="font-semibold text-blue-400">
                            {feature.title}
                          </h4>

                          <p className="mt-2 text-slate-400">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Tech Stack */}

                  <section>
                    <h3 className="mb-5 text-2xl font-semibold">
                      Tech Stack
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-3 font-semibold text-blue-400">
                          Frontend
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {project.techStack.frontend.map((item) => (
                            <Badge key={item}>
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold text-blue-400">
                          Backend
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {project.techStack.backend.map((item) => (
                            <Badge key={item}>
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold text-blue-400">
                          Database
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {project.techStack.database.map((item) => (
                            <Badge key={item}>
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold text-blue-400">
                          Tools
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {project.techStack.tools.map((item) => (
                            <Badge key={item}>
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Challenges */}

                  <section>
                    <h3 className="mb-5 text-2xl font-semibold">
                      Challenges
                    </h3>

                    <ul className="list-disc space-y-3 pl-5 text-slate-400">
                      {project.challenges.map((challenge) => (
                        <li key={challenge}>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Future Scope */}

                  <section>
                    <h3 className="mb-5 text-2xl font-semibold">
                      Future Scope
                    </h3>

                    <ul className="list-disc space-y-3 pl-5 text-slate-400">
                      {project.futureScope.map((item) => (
                        <li key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}