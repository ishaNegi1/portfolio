"use client";

import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white">
        <FaRobot />
      </div>

      <div className="flex items-center gap-2 rounded-2xl rounded-bl-md">
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
            className="h-2 w-2 rounded-full bg-blue-400"
          />
        ))}
      </div>
    </div>
  );
}