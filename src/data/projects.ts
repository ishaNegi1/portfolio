import { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: 1,

    slug: "spendwise",

    title: "SpendWise",

    category: "Featured",

    image: "/projects/spendwise.png",

    shortDescription:
      "AI-powered personal finance tracker with intelligent budgeting, analytics and AI financial insights.",

    techStack: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],

      backend: [
        "Node.js",
        "Express.js",
      ],

      database: [
        "PostgreSQL",
        "Drizzle ORM",
      ],

      tools: [
        "OpenRouter",
        "Chart.js",
        "GitHub",
        "Vercel",
      ],
    },

    links: {
      github: "",
      live: "",
    },
  },

  {
    id: 2,

    slug: "tripgenie",

    title: "TripGenie",

    category: "Featured",

    image: "/projects/tripgenie.png",

    shortDescription:
      "AI-powered travel planner that creates personalized itineraries based on destination, interests and budget.",

    techStack: {
      frontend: [
        "Next.js",
        "React",
        "Tailwind CSS",
      ],

      backend: [
        "Node.js",
      ],

      database: [
        "PostgreSQL",
      ],

      tools: [
        "OpenRouter",
        "Google Maps API",
      ],
    },

    links: {
      github: "",
      live: "",
    },
  },

  {
    id: 3,

    slug: "sustainabite",

    title: "SustainaBite",

    category: "Featured",

    image: "/projects/sustainabite.png",

    shortDescription:
      "A MERN platform that reduces food waste by connecting food donors with NGOs and charities.",

    techStack: {
      frontend: [
        "React",
        "Tailwind CSS",
      ],

      backend: [
        "Node.js",
        "Express.js",
      ],

      database: [
        "MongoDB",
      ],

      tools: [
        "JWT",
        "Cloudinary",
      ],
    },

    links: {
      github: "",
      live: "",
    },
  },
];

export default projects;