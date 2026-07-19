"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative mb-20 flex flex-col items-center text-center"
    >
      {/* Top Accent */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 90 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-6 h-1 rounded-full bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8]"
      />

      {/* Background Glow */}
      <div className="absolute top-4 h-24 w-72 rounded-full bg-[#9EF01A]/10 blur-3xl" />

      {/* Title */}
      <h2 className="relative bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8] bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-5 h-px w-28 origin-center bg-linear-to-r from-transparent via-[#9EF01A]/60 to-transparent"
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative mt-7 max-w-3xl text-base leading-8 text-[#94A3B8] md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}