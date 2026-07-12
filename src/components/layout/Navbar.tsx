"use client";

import useScrollSpy from "@/hooks/useScrollSpy";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { scrollToSection } from "@/lib/utils";
import { PORTFOLIO } from "@/lib/constants";

import Button from "@/components/ui/Button";
import VisitorCounter from "@/components/ui/VisitorCounter";

import navigation from "@/data/navigation";
import social from "@/data/social";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(
  navigation.map((item) => item.id)
);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <button
            onClick={() => handleNavigation("home")}
            className="text-2xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {PORTFOLIO.name}
            </span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`transition ${
                  active === item.id
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <VisitorCounter />

            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="text-2xl transition hover:text-blue-400"
              />
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-2xl transition hover:text-blue-400"
              />
            </a>

            <a href={PORTFOLIO.resume} download>
              <Button size="sm">
                Resume
              </Button>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl lg:hidden"
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
            className="fixed top-20 z-40 w-full border-b border-white/10 bg-[#050816] lg:hidden"
          >
            <div className="flex flex-col gap-6 p-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-left ${
                    active === item.id
                      ? "text-blue-400"
                      : "text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="flex gap-5 pt-2">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl" />
                </a>

                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>

              <a
                href={PORTFOLIO.resume}
                download
              >
                <Button fullWidth>
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}