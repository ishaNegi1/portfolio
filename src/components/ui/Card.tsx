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
              y: -8,
              scale: 1.015,
            }
          : undefined
      }
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl",

        // Base
        "border border-white/10",
        "bg-[#18181B]/80",
        "backdrop-blur-2xl",

        // Shadow
        "shadow-[0_10px_35px_rgba(0,0,0,.30)]",

        // Animation
        "transition-all duration-500",

        // Hover
        hover &&
          "hover:border-[#9EF01A]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,.45)]",

        className
      )}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-white/3 via-transparent to-[#38BDF8]/2" />

      {/* Top Glow */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#9EF01A]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-[#38BDF8]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Border Glow */}
      {glow && (
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-[#9EF01A]/20" />
      )}

      {/* Shine Effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-[140%] group-hover:opacity-100" />
      </div>

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-0.5 w-full bg-linear-to-r from-transparent via-[#9EF01A]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}