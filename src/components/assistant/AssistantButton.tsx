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
        className="fixed bottom-24 right-8 z-50 flex sm:h-18 sm:w-18 h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-[#9EF01A] via-[#70E000] to-[#38BDF8] text-2xl text-[#09090B] shadow-2xl"
      >
        <FaRobot className=" sm:h-9 sm:w-9 h-8 w-8"/>
      </motion.button>

      <AssistantModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}