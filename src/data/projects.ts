import { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: 1,

    slug: "spendwise",

    title: "SpendWise",

    category: "Featured",

    image: "/projects/spendwise.png",

    shortDescription:
      "AI-powered personal finance platform that tracks expenses, analyzes spending habits, and delivers personalized financial insights. Includes budget tracking, spending alerts, and downloadable monthly reports.",

    techStack: {
      frontend: [
        "Next.js",
        "Tailwind CSS",
      ],

      backend: [
        "Google OAuth",
      ],

      database: [
        "MongoDB",
      ],

      tools: [
        "HuggingFace",
        "Chart.js",
      ],
    },

    links: {
      github: "https://github.com/ishaNegi1/SpendWise",
      live: "https://spendwise-lovat.vercel.app/",
    },
  },

  {
    id: 2,

    slug: "tripgenie",

    title: "TripGenie",

    category: "Featured",

    image: "/projects/tripgenie.png",

    shortDescription:
      "AI-powered collaborative travel planner that generates personalized itineraries and enables real-time trip planning with friends. Features shared expenses, group chat, and smart settlement calculations.",

    techStack: {
      frontend: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],

      backend: [
        "PostgreSQL"
      ],

      database: [
        "Supabase",
      ],

      tools: [
        "OpenRouter",
      ],
    },

    links: {
      github: "https://github.com/ishaNegi1/TripGenie",
      live: "https://trip-genie-fawn.vercel.app/",
    },
  },

  {
    id: 3,

    slug: "sustainabite",

    title: "SustainaBite",

    category: "Featured",

    image: "/projects/sustainabite.png",

    shortDescription:
      "A full-stack platform that reduces food waste through food donations and sustainable community engagement. Users can donate food, discover leftover recipes, purchase fertilizers, write blogs, and earn reward coins within the platform.",

    techStack: {
      frontend: [
        "React.js",
        "Redux Toolkit",
      ],

      backend: [
        "Express.js",
      ],

      database: [
        "MongoDB",
      ],

      tools: [
        "JWT",
        "Cloudinary",
        "Render",
      ],
    },

    links: {
      github: "https://github.com/ishaNegi1/SustainaBite",
      live: "https://sustaina-bite.vercel.app/",
    },
  },

  {
    id: 4,

    slug: "indiaquant",

    title: "IndiaQuant",

    category: "Others",

    image: "/projects/indiaquant.png",

    shortDescription:
      "A Model Context Protocol (MCP) server that enables AI agents to access real-time Indian stock market intelligence. Supports technical analysis, options analytics, sentiment analysis, and virtual trading tools.",

    techStack: {
      frontend: [
    
      ],

      backend: [
        "Node.js",
        "Express.js",
      ],

      database: [
        "SQLite",
      ],

      tools: [
        "Yahoo Finance API",
        "NewsAPI",
      ],
    },

    links: {
      github: "https://github.com/ishaNegi1/IndiaQuant-MCP",
      live: "https://github.com/ishaNegi1/IndiaQuant-MCP",
    },
  },

  {
    id: 5,

    slug: "smartbookmark",

    title: "Smart Bookmark",

    category: "Others",

    image: "/projects/smartbookmark.png",

    shortDescription:
      "A real-time bookmark manager with Google authentication and private bookmark collections. Keeps bookmarks synchronized instantly across devices using Supabase Realtime.",

    techStack: {
      frontend: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],

      backend: [
        "Google OAuth",
      ],

      database: [
        "Supabase",
      ],

      tools: [
        "Vercel",
      ],
    },

    links: {
      github: "https://github.com/ishaNegi1/smart-bookmark",
      live: "https://smart-bookmark-beta-sand.vercel.app/",
    },
  },

  {
    id: 6,

    slug: "epochconvertor",

    title: "Epoch Converter",

    category: "Others",

    image: "/projects/epochconvertor.png",

    shortDescription:
      "A lightweight online tool that converts Unix/Epoch timestamps to readable date and time formats and vice versa. Supports both local time and UTC with instant and accurate conversions.",

    techStack: {
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],

      backend: [
       
      ],

      database: [
    
      ],

      tools: [
        "Vercel",
      ],
    },

    links: {
      github: "https://github.com/ishaNegi1/epochconvertor",
      live: "https://epochconvertor.vercel.app/",
    },
  },

  {
    id: 7,

    slug: "foodly",

    title: "Foodly",

    category: "Others",

    image: "/projects/foodly.png",

    shortDescription:
      "A modern responsive restaurant website with beautifully designed pages and smooth navigation. Includes Home, Menu, About, and Contact sections for an engaging user experience.",

    techStack: {
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],

      backend: [
       
      ],

      database: [
        
      ],

      tools: [
        "Vercel",
      ],
    },

    links: {
      github: "https://github.com/ishaNegi1/Foodly",
      live: "https://foodly-weld.vercel.app/",
    },
  },

  {
    id: 8,

    slug: "currencyconvertor",

    title: "Currency Converter",

    category: "Others",

    image: "/projects/currencyconvertor.png",

    shortDescription:
      "A responsive web application that converts currencies using real-time exchange rates. Designed with a clean interface for fast, accurate, and seamless conversions.",

    techStack: {
      frontend: [
        "React.js",
        "Tailwind CSS",
      ],

      backend: [

      ],

      database: [
      
      ],

      tools: [
        "API",
        "Vercel",
      ],
    },

    links: {
      github: "https://github.com/ishaNegi1/currencyconvertor",
      live: "https://currencyswitch.vercel.app/",
    },
  },

  {
    id: 9,

    slug: "stylesense",

    title: "StyleSense",

    category: "Team",

    image: "/projects/stylesense.png",

    shortDescription:
      "An AI-powered virtual wardrobe that generates personalized outfit recommendations from your clothing collection. Includes an intelligent fashion assistant for styling suggestions based on different occasions.",

    techStack: {
      frontend: [
        "Next.js",
        "TypeScript",
        "Zustand",
      ],

      backend: [
        "Python",
        "Flask",
      ],

      database: [
        "Supabase",
        "OpenCV"
      ],

      tools: [
       
      ],
    },

    links: {
      github: "https://github.com/ishaNegi1/StyleSense",
      live: "https://style-sense-five.vercel.app/",
    },
  },

  {
    id: 10,

    slug: "nutrisense",

    title: "NutriSense",

    category: "Team",

    image: "/projects/nutrisense.png",

    shortDescription:
      "AI-powered wellness platform that analyzes nutrition and predicts health insights using machine learning. Provides personalized recommendations and interactive analytics for healthier living.",

    techStack: {
      frontend: [
        "React.js",
        "Chart.js",
      ],

      backend: [
        "FastAPI",
        "Scikit-learn",
      ],

      database: [
        "MongoDB ",
      ],

      tools: [
        "Render",
        "Vercel",
      ],
    },

    links: {
      github: "https://github.com/ishaNegi1/NutriSense",
      live: "https://nutrisense-three.vercel.app/",
    },
  },

  {
    id: 11,

    slug: "dms",

    title: "DMS",

    category: "Team",

    image: "/projects/dms.png",

    shortDescription:
      "A secure document management platform for uploading, organizing, searching, and managing files. Allows users to view, download, and delete files and folders efficiently.",

    techStack: {
      frontend: [
        "React.js",
        "Redux Toolkit",
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
        
      ],
    },

    links: {
      github: "https://github.com/ishaNegi1/DMS",
      live: "https://dms-organize.vercel.app/",
    },
  },

];

export default projects;