"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import useScrollSpy from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/lib/utils";
import navigation from "@/data/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(navigation.map((item) => item.id));

  const handleNavigation = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#09090B]/80 backdrop-blur-2xl supports-backdrop-filter:bg-[#09090B]/70"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button onClick={() => handleNavigation("home")}>
            <div className=" text-left">
              <p className="bg-linear-to-b from-[#9EF01A] via-[#70E000] to-[#38BDF8] bg-clip-text font-black leading-tight text-transparent">Isha Negi</p>
              <p className="text-xs text-slate-300">Full Stack Developer</p>
            </div>
          </button>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-[#18181B]/70 px-3 py-2 backdrop-blur-xl md:flex">
            {navigation.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive ? "text-[#9EF01A]" : "text-slate-300 hover:bg-white/5 hover:text-[#38BDF8]"}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      className="absolute inset-0 rounded-full border border-[#9EF01A]/25 bg-[#9EF01A]/10"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl border border-white/10 bg-[#18181B] p-3 text-white transition hover:border-[#9EF01A]/40 hover:bg-[#232326] md:hidden"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 top-20 z-40 w-full border-b border-white/10 bg-[#09090B]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-3 p-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`rounded-xl py-3 text-center text-lg font-medium transition-all ${active === item.id ? "bg-[#9EF01A]/15 text-[#9EF01A]" : "text-[#CBD5E1] hover:bg-white/5 hover:text-[#38BDF8]"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
