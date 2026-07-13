"use client";

import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white">
        AI
      </div>

      <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-white/10 bg-[#111827] px-5 py-4">
        {[0, 1, 2].map((item) => (
          <motion.span
            key={item}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: item * 0.15,
            }}
            className="h-2.5 w-2.5 rounded-full bg-blue-400"
          />
        ))}
      </div>
    </div>
  );
}