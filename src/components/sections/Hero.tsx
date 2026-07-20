"use client";

import { motion } from "framer-motion";
import { FaDownload, FaRobot } from "react-icons/fa";
import { useState } from "react";

import AssistantModal from "../assistant/AssistantModal";
import { PORTFOLIO } from "@/lib/constants";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative mt-20 sm:mb-20 mb-16 overflow-hidden sm:px-20 px-5 py-12 text-center sm:text-left">

        <div className="relative grid items-center gap-20 md:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
           <div className="inline-flex items-center gap-3 rounded-full border border-[#9EF01A]/20 bg-[#18181B]/70 px-5 py-2 backdrop-blur-xl">

    <span className="h-2.5 w-2.5 rounded-full bg-[#9EF01A] animate-pulse shadow-[0_0_15px_rgba(158,240,26,.5)]"/>

    <span className="text-sm font-medium text-slate-300">
        Available for Opportunities
    </span>

</div>

            {/* Heading */}
            <p className="mt-8 text-lg font-medium text-[#9EF01A]">
              Hello, I'm
            </p>

            <h1 className="mt-2 bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8] bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-6xl">
              {PORTFOLIO.name}
            </h1>

           <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Full Stack Developer
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              {PORTFOLIO.tagline}
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5 justify-center items-center sm:justify-start">
              <button
                onClick={() => setOpen(true)}
                className="group inline-flex items-center rounded-xl bg-linear-to-br from-[#9EF01A] via-[#70E000] to-[#38BDF8] px-4 py-3 font-semibold text-[#09090B] shadow-[0_0_35px_rgba(158,240,26,.30)] transition-all duration-300 hover:scale-105 hover:brightness-110"
              >
                <FaRobot className="mr-3 transition-transform duration-300 group-hover:rotate-12 h-6 w-6" />
                AI Assistant
              </button>

              <a
                href={PORTFOLIO.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center rounded-xl border border-[#9EF01A]/25 bg-[#18181B] px-4 py-3 font-semibold text-white transition-all duration-300 hover:border-[#9EF01A] hover:bg-[#232326] hover:scale-105 hover:brightness-110"
              >
                <FaDownload className="mr-3 transition-transform duration-300 group-hover:-translate-y-1" />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative items-center justify-center flex"
          >
            <div className="relative sm:h-130 sm:w-130 h-72 w-72">
              {/* Main Glow */}
<div className="absolute inset-0 rounded-full bg-linear-to-r from-[#9EF01A]/15 via-[#70E000]/10 to-[#38BDF8]/15 blur-[120px]" />

{/* Dotted Grid */}
<div className="absolute inset-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08)_1px,transparent_1px)] bg-size-[28px_28px] opacity-20" />

{/* Outer Ring */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
  className="absolute inset-0 rounded-full border border-dashed border-[#9EF01A]/25"
/>

{/* Middle Ring */}
<motion.div
  animate={{ rotate: -360 }}
  transition={{ repeat: Infinity, duration: 34, ease: "linear" }}
  className="absolute inset-12 rounded-full border border-[#38BDF8]/20"
/>

{/* Inner Ring */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
  className="absolute inset-24 rounded-full border border-dashed border-[#70E000]/20"
/>

{/* Center Sphere */}
<div className="absolute left-1/2 top-1/2 flex h-60 w-60 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#9EF01A]/20 bg-[#18181B]/80 backdrop-blur-xl shadow-[0_0_70px_rgba(158,240,26,.18)]">

  <motion.div
    animate={{ rotate: 360, scale: [1, 1.06, 1] }}
    transition={{ rotate: { repeat: Infinity, duration: 18, ease: "linear" }, scale: { repeat: Infinity, duration: 4 } }}
    className="relative h-36 w-36 rounded-full border border-[#38BDF8]/30"
  >
    <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-[#9EF01A] via-[#70E000] to-[#38BDF8] shadow-[0_0_45px_rgba(158,240,26,.45)]" />

    <div className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#9EF01A]" />
    <div className="absolute bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#38BDF8]" />
    <div className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#70E000]" />
    <div className="absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white" />
  </motion.div>
</div>

{/* Floating Orbs */}
<motion.div
  animate={{ x: [-20,20,-20], y: [-10,10,-10] }}
  transition={{ duration: 6, repeat: Infinity }}
  className="absolute left-8 top-24 h-5 w-5 rounded-full bg-[#9EF01A] shadow-[0_0_25px_rgba(158,240,26,.5)]"
/>

<motion.div
  animate={{ x: [20,-20,20], y: [15,-15,15] }}
  transition={{ duration: 8, repeat: Infinity }}
  className="absolute right-8 bottom-24 h-6 w-6 rounded-full bg-[#38BDF8] shadow-[0_0_25px_rgba(56,189,248,.5)]"
/>

<motion.div
  animate={{ x: [-15,15,-15], y: [10,-10,10] }}
  transition={{ duration: 10, repeat: Infinity }}
  className="absolute right-24 top-10 h-4 w-4 rounded-full bg-[#70E000] shadow-[0_0_20px_rgba(112,224,0,.5)]"
/>

<motion.div
  animate={{ x: [15,-15,15], y: [-8,8,-8] }}
  transition={{ duration: 12, repeat: Infinity }}
  className="absolute left-24 bottom-16 h-3 w-3 rounded-full bg-white shadow-[0_0_20px_white]"
/>

            </div>
          </motion.div>
        </div>
      </section>

      <AssistantModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}