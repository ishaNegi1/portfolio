"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    size: 420,
    color: "#3b82f6",
    left: "-8%",
    top: "5%",
    duration: 24,
  },
  {
    size: 360,
    color: "#8b5cf6",
    right: "-6%",
    top: "35%",
    duration: 28,
  },
  {
    size: 300,
    color: "#6366f1",
    left: "30%",
    bottom: "-8%",
    duration: 22,
  },
];

export default function GradientBlobs() {
  return (
    <>
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-[120px]"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            opacity: 0.18,
            ...blob,
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 25, 0],
            scale: [1, 1.12, 0.95, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}