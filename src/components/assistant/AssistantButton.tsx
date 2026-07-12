"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

import AssistantModal from "./AssistantModal";

export default function AssistantButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-2xl text-white shadow-2xl"
      >
        <FaRobot />
      </motion.button>

      <AssistantModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}