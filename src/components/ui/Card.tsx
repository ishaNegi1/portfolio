"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  glow = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              transition: {
                duration: 0.25,
              },
            }
          : undefined
      }
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "border border-white/10",
        "bg-[#0F172A]/80",
        "backdrop-blur-xl",
        "transition-all duration-300",

        glow &&
          "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-br before:from-blue-500/40 before:via-indigo-500/30 before:to-purple-500/40 before:[mask-composite:exclude]",

        className
      )}
    >
      {children}
    </motion.div>
  );
}