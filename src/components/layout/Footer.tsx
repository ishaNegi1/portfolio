import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

import social from "@/data/social";
import { PORTFOLIO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09090B] mt-12">
      {/* Background Glow */}
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-r from-[#9EF01A]/10 via-[#70E000]/5 to-[#38BDF8]/10 blur-3xl" />

      {/* Gradient Divider */}
      <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-[#9EF01A]/40 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 py-8 text-center">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <h3 className="bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8] bg-clip-text text-xl font-bold text-transparent">
            {PORTFOLIO.name}
          </h3>

          <p className="mt-2 text-[#CBD5E1]">
            {PORTFOLIO.role}
          </p>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl text-base leading-8 text-slate-300">
          {PORTFOLIO.tagline}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#18181B] text-[#CBD5E1] transition-all duration-300 hover:-translate-y-1 hover:border-[#9EF01A]/30 hover:bg-[#232326] hover:text-[#9EF01A] hover:shadow-[0_0_25px_rgba(158,240,26,.25)]"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#18181B] text-[#CBD5E1] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/30 hover:bg-[#232326] hover:text-[#38BDF8] hover:shadow-[0_0_25px_rgba(56,189,248,.25)]"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={`mailto:${social.email}`}
            className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#18181B] text-[#CBD5E1] transition-all duration-300 hover:-translate-y-1 hover:border-[#9EF01A]/30 hover:bg-[#232326] hover:text-[#9EF01A] hover:shadow-[0_0_25px_rgba(158,240,26,.25)]"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-2 text-sm text-slate-400 md:flex-row md:gap-3">
          <span>
            © {new Date().getFullYear()} {PORTFOLIO.name}. All Rights Reserved.
          </span>

          <span className="hidden md:block">•</span>

          <span className="flex items-center gap-2">
            Built with
            <FaHeart className="text-red-500" />
            using Next.js & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}