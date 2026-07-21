"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/project/ProjectCard";

import projects from "@/data/projects";

const filters = [
  {
    label: "Featured",
    icon: FaStar,
  },
  {
    label: "Others",
    icon: FaRocket,
  },
  {
    label: "Team",
    icon: FaUsers,
  },
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] =
    useState("Featured");

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) => project.category === selectedFilter
    );
  }, [selectedFilter]);

  return (
    <section
      id="projects"
      className="sm:px-20 px-5 sm:py-2"
    >
      <SectionHeading
        title="Projects"
        subtitle="A selection of projects showcasing my experience in full-stack development, artificial intelligence, and modern web technologies."
      />

      {/* Filter Tabs */}

      <div className="mb-8 flex justify-center">
        <div className="inline-flex flex-wrap items-center gap-1 sm:gap-2 rounded-xl border border-white/10 bg-zinc-900 p-1.5">
          {filters.map((filter) => {
            const Icon = filter.icon;

            const active =
              selectedFilter === filter.label;

            return (
              <button
                key={filter.label}
                onClick={() =>
                  setSelectedFilter(filter.label)
                }
                className={`relative overflow-hidden rounded-lg sm:px-4 px-3 py-2.5 transition-all duration-300 ${
                  active
                    ? "text-black"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeProjectTab"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 28,
                    }}
                    className="absolute inset-0 rounded-lg bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8]"
                  />
                )}

                <span className="relative z-10 flex items-center gap-2 text-sm font-semibold">
                  <Icon size={14} />
                  {filter.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Count */}

      <motion.div
        key={selectedFilter}
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="mb-12 text-center text-sm text-slate-300"
      >
        Showing{" "}
        <span className="font-semibold text-[#9EF01A]">
          {filteredProjects.length}
        </span>{" "}
        {selectedFilter.toLowerCase()}{" "}
        {filteredProjects.length === 1
          ? "project"
          : "projects"}
      </motion.div>

      {/* Projects Grid */}

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedFilter}
          layout
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.35,
          }}
          className="grid grid-cols-1 gap-10 sm:gap-6 md:grid-cols-3 pt-3"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="pt-3 text-center"
        >
          <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-8">
            <h3 className="mb-3 text-xl font-bold text-white">
              No Projects Found
            </h3>

            <p className="text-slate-400">
              There are no projects in this category yet.
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}