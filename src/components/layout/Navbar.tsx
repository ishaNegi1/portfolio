"use client";

import useScrollSpy from "@/hooks/useScrollSpy";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { scrollToSection } from "@/lib/utils";
import navigation from "@/data/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(
  navigation.map((item) => item.id)
);

  const handleNavigation = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed left-0 top-0 z-50 w-full transition-all duration-300 border-b-2 border-white/30 bg-[#050816]/80 backdrop-blur-xl"
      >
        <div className="flex h-20 max-w-7xl items-center justify-between mx-auto md:px-6 px-4">
          <button
            onClick={() => handleNavigation("home")}
            className="text-2xl font-bold h-10.5 w-10.5 rounded-4xl bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500"
          >
            <span className=" bg-white bg-clip-text text-transparent">
              IN
            </span>
          </button>

          <nav className="hidden items-center gap-8 sm:flex">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`transition ${
                  active === item.id
                    ? "text-blue-400"
                    : "hover:text-slate-300 text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl sm:hidden"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="fixed top-20 z-40 w-full border-b border-white/10 bg-[#050816] sm:hidden"
          >
            <div className="flex flex-col gap-6 p-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-center text-base ${
                    active === item.id
                      ? "text-blue-400"
                      : "hover:text-slate-300 text-white"
                  }`}
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