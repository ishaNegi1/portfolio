export interface ProjectLink {
  github?: string;
  live?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectTechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  shortDescription: string;
  description: string;
  techStack: ProjectTechStack;
  features: ProjectFeature[];
  challenges: string[];
  futureScope: string[];
  links: ProjectLink;
  featured: boolean;
}