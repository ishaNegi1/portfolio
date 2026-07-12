"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

import ProjectCard from "@/components/project/ProjectCard";
import ProjectModal from "@/components/project/ProjectModal";

import projects from "@/data/projects";

import { Project } from "@/types/project";

const filters = [
  "All",
  "Full Stack",
  "AI",
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === selectedFilter
    );
  }, [selectedFilter]);

  return (
    <div className="container">
      <SectionHeading
        title="Projects"
        subtitle="A collection of projects that showcase my experience in Full Stack Development, Artificial Intelligence and modern web technologies."
      />

      {/* Filters */}

      <div className="mb-14 flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <Button
            key={filter}
            size="sm"
            variant={
              selectedFilter === filter
                ? "primary"
                : "secondary"
            }
            onClick={() =>
              setSelectedFilter(filter)
            }
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Projects */}

      <motion.div
        layout
        className="grid gap-8 md:grid-cols-2"
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setSelectedProject}
          />
        ))}
      </motion.div>

      {/* Modal */}

      <ProjectModal
        open={selectedProject !== null}
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />
    </div>
  );
}