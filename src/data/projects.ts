import { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: 1,

    slug: "spendwise",

    title: "SpendWise",

    category: "Full Stack",

    featured: true,

    image: "/projects/spendwise.png",

    shortDescription:
      "AI-powered personal finance tracker with spending insights and budgeting.",

    description:
      "SpendWise is a modern AI-powered personal finance management application that helps users track expenses, manage budgets, visualize spending patterns and receive AI-driven financial suggestions.",

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

    features: [
      {
        title: "Expense Tracking",
        description:
          "Track income and expenses with smart categorization.",
      },

      {
        title: "Budget Planner",
        description:
          "Create monthly budgets and monitor savings.",
      },

      {
        title: "AI Financial Assistant",
        description:
          "Ask questions about your expenses using AI.",
      },

      {
        title: "Analytics Dashboard",
        description:
          "Interactive charts for spending analysis.",
      },
    ],

    challenges: [
      "Managing real-time transaction updates.",
      "Designing responsive financial charts.",
      "Optimizing AI prompts.",
    ],

    futureScope: [
      "Multi-user collaboration.",
      "Bank account integration.",
      "Receipt OCR.",
      "Investment tracking.",
    ],

    links: {
      github: "",
      live: "",
    },
  },

  {
    id: 2,

    slug: "tripgenie",

    title: "TripGenie",

    category: "AI",

    featured: true,

    image: "/projects/tripgenie.png",

    shortDescription:
      "AI-powered travel planner with personalized itineraries.",

    description:
      "TripGenie helps users generate complete travel itineraries based on destination, duration, interests and budget using AI.",

    techStack: {
      frontend: [
        "Next.js",
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
        "Google Maps",
      ],
    },

    features: [
      {
        title: "AI Itinerary",
        description:
          "Generate detailed travel plans instantly.",
      },

      {
        title: "Budget Planner",
        description:
          "Estimate trip expenses.",
      },

      {
        title: "Travel Chatbot",
        description:
          "Answer destination-related questions.",
      },
    ],

    challenges: [
      "Prompt engineering.",
      "Dynamic itinerary generation.",
    ],

    futureScope: [
      "Hotel booking.",
      "Flight integration.",
      "Weather forecast.",
    ],

    links: {
      github: "",
      live: "",
    },
  },

  {
    id: 3,

    slug: "sustainabite",

    title: "SustainaBite",

    category: "Full Stack",

    featured: true,

    image: "/projects/sustainabite.png",

    shortDescription:
      "Food donation and waste reduction platform.",

    description:
      "A MERN application that connects food donors with NGOs and promotes sustainable food management.",

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
        "Cloudinary",
        "JWT",
      ],
    },

    features: [
      {
        title: "Food Donation",
        description:
          "Donate excess food quickly.",
      },

      {
        title: "NGO Dashboard",
        description:
          "Manage incoming donations.",
      },

      {
        title: "Reward System",
        description:
          "Earn points for donations.",
      },
    ],

    challenges: [
      "Authentication.",
      "Image uploads.",
    ],

    futureScope: [
      "Real-time tracking.",
      "Mobile application.",
    ],

    links: {
      github: "",
      live: "",
    },
  },

  {
    id: 4,

    slug: "virtual-wardrobe",

    title: "Virtual Wardrobe",

    category: "AI",

    featured: true,

    image: "/projects/wardrobe.png",

    shortDescription:
      "AI-powered virtual wardrobe and outfit recommendation system.",

    description:
      "Upload wardrobe items, categorize clothing using AI and receive personalized outfit suggestions.",

    techStack: {
      frontend: [
        "Next.js",
        "Tailwind CSS",
      ],

      backend: [
        "FastAPI",
      ],

      database: [
        "PostgreSQL",
      ],

      tools: [
        "PyTorch",
        "OpenRouter",
      ],
    },

    features: [
      {
        title: "Wardrobe Upload",
        description:
          "Organize clothes digitally.",
      },

      {
        title: "Outfit Generator",
        description:
          "AI suggests outfit combinations.",
      },

      {
        title: "Clothing Classification",
        description:
          "Automatically classify clothing images.",
      },
    ],

    challenges: [
      "Image processing.",
      "Model optimization.",
    ],

    futureScope: [
      "Virtual try-on.",
      "Shopping recommendations.",
    ],

    links: {
      github: "",
      live: "",
    },
  },
];

export default projects;