export interface Project {
  id: number;

  slug: string;

  title: string;

  category:
    | "Featured"
    | "Others"
    | "Team";

  image: string;

  shortDescription: string;

  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };

  links: {
    github?: string;
    live?: string;
  };
}