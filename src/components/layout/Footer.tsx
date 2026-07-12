import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import social from "@/data/social";
import { PORTFOLIO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">
            {PORTFOLIO.name}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {PORTFOLIO.role}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            <FaGithub size={22} />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        <p className="flex items-center gap-2 text-sm text-slate-400">
          Made with
          <FaHeart className="text-red-500" />
          by {PORTFOLIO.name}
        </p>
      </div>
    </footer>
  );
}