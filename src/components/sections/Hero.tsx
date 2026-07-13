"use client";

import useTypewriter from "@/hooks/useTypewriter";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

import Button from "@/components/ui/Button";
import CodeWindow from "@/components/ui/CodeWindow";

import { PORTFOLIO } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {

  const typingText = useTypewriter([
  "Full Stack Developer",
  "AI Enthusiast",
  "React Developer",
  "Next.js Developer",
]);

  return (
    <div className="container min-h-screen flex items-center">
      <div className="grid w-full items-center gap-20 lg:grid-cols-2">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <p className="mb-5 text-lg text-blue-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            {PORTFOLIO.name}
          </h1>

          <h2 className="mt-6 bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            {typingText}
<span className="animate-pulse text-blue-400">|</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            {PORTFOLIO.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Button
              onClick={() =>
                scrollToSection("projects")
              }
            >
              View Projects

              <FaArrowRight className="ml-3" />
            </Button>

            <a
              href={PORTFOLIO.resume}
              download
            >
              <Button variant="outline">
                <FaDownload className="mr-3" />

                Resume
              </Button>
            </a>
          </div>
        </motion.div>

        <CodeWindow />
      </div>
    </div>
  );
}