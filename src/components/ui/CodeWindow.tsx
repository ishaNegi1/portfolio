"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

export default function CodeWindow() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1120] shadow-2xl"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-4 text-sm text-slate-400">
          developer.ts
        </span>
      </div>

      <div className="space-y-4 p-6 font-mono text-sm leading-7">
        <div>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">developer</span>{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-white">{"{"}</span>
        </div>

        <div className="ml-6">
          <span className="text-cyan-400">name</span>
          <span className="text-white">:</span>{" "}
          <span className="text-green-400">
            "Isha Negi"
          </span>
          ,
        </div>

        <div className="ml-6">
          <span className="text-cyan-400">role</span>
          <span className="text-white">:</span>{" "}
          <span className="text-green-400">
            "Full Stack Developer"
          </span>
          ,
        </div>

        <div className="ml-6">
          <span className="text-cyan-400">frontend</span>
          <span className="text-white">:</span>{" "}
          [
          <span className="text-green-400">
            "React"
          </span>
          ,
          <span className="text-green-400">
            " Next.js"
          </span>
          ,
          <span className="text-green-400">
            " TypeScript"
          </span>
          ]
        </div>

        <div className="ml-6">
          <span className="text-cyan-400">backend</span>
          <span className="text-white">:</span>{" "}
          [
          <span className="text-green-400">
            "Node.js"
          </span>
          ,
          <span className="text-green-400">
            " PostgreSQL"
          </span>
          ]
        </div>

        <div className="ml-6">
          <span className="text-cyan-400">status</span>
          <span className="text-white">:</span>{" "}
          <span className="text-green-400">
            "Open to Opportunities"
          </span>
        </div>

        <div>{"}"}</div>

        <div className="mt-8 flex flex-wrap gap-5 text-3xl">
          <FaReact className="text-sky-400" />
          <SiNextdotjs />
          <SiTypescript className="text-blue-500" />
          <SiTailwindcss className="text-cyan-400" />
          <FaNodeJs className="text-green-500" />
          <SiPostgresql className="text-sky-500" />
          <FaDatabase className="text-purple-500" />
        </div>
      </div>
    </motion.div>
  );
}