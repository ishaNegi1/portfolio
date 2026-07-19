"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex items-center justify-center py-10">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="h-10 w-10 rounded-full border-4 border-[#38BDF8] border-t-transparent"
      />
    </div>
  );
}