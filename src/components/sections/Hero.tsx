"use client";

import { motion } from "framer-motion";
import { FaDownload, FaRobot } from "react-icons/fa";
import { useState } from "react";

import Button from "@/components/ui/Button";
import CodeWindow from "@/components/ui/CodeWindow";
import AssistantModal from "../assistant/AssistantModal";

import { PORTFOLIO } from "@/lib/constants";

export default function Hero() {
  
const [open, setOpen] = useState(false);

  return (
    <>
    <div className="container flex items-center sm:mt-16 mt-32 sm:mb:16 mb-28">
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
          <p className="mb-2 text-lg text-blue-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-tight">
            {PORTFOLIO.name}
          </h1>

          <h2 className="mt-4 bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">
            Full Stack Developer

          </h2>

          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
            {PORTFOLIO.tagline}
          </p>

          <div className="mt-5 flex flex-wrap gap-5">
            <Button
              onClick={() =>
                setOpen(true)
              }
            >
              <FaRobot className="mr-3 h-5 w-5" />
              AI Assistant

            </Button>

            <a
              href={PORTFOLIO.resume}
              target="_blank"
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

    <AssistantModal
            open={open}
            onClose={() => setOpen(false)}
          />
    </>
  );
}