import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import social from "@/data/social";
import { PORTFOLIO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className=" relative border-t-2 border-white/30 bg-[#050816]/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 py-10">
        <div className="text-center">
          <h3 className="font-semibold">
            {PORTFOLIO.name}
          </h3>

          <p className="mt-1 text-sm text-slate-300">
            {PORTFOLIO.role}
          </p>
        </div>

        <div className=" text-center">
          <p className="text-sm text-slate-300">
          {PORTFOLIO.tagline}
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
          <a
            href={social.email}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}