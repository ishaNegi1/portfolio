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
        className="fixed bottom-24 right-8 z-50 flex h-18 w-18 items-center justify-center rounded-full bg-linear-to-br from-[#9EF01A] via-[#70E000] to-[#38BDF8] text-2xl text-[#09090B] shadow-2xl"
      >
        <FaRobot className=" h-9 w-9"/>
      </motion.button>

      <AssistantModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}