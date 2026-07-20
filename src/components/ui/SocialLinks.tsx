"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

import Card from "./Card";

import social from "@/data/social";

const socials = [
  {
    title: "GitHub",
    value: social.github.replace("https://github.com/", ""),
    icon: FaGithub,
    href: social.github,
    color: "#9EF01A",
    bg: "bg-[#9EF01A]/10",
    border: "hover:border-[#9EF01A]/30",
  },

  {
    title: "LinkedIn",
    value: social.linkedin.replace(
      "https://linkedin.com/in/",
      ""
    ),
    icon: FaLinkedin,
    href: social.linkedin,
    color: "#38BDF8",
    bg: "bg-[#38BDF8]/10",
    border: "hover:border-[#38BDF8]/30",
  },

  {
    title: "Email",
    value: social.email,
    icon: FaEnvelope,
    href: `mailto:${social.email}`,
    color: "#70E000",
    bg: "bg-[#70E000]/10",
    border: "hover:border-[#70E000]/30",
  },

  {
    title: "Location",
    value: social.location,
    icon: FaLocationDot,
    color: "#F8FAFC",
    bg: "bg-white/10",
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-6 flex flex-col sm:gap-5 gap-8 lg:mt-0">
      {socials.map((item, index) => {
        const Icon = item.icon;

        const content = (
          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
          >
            <Card
              hover
              className={`group flex items-center justify-between p-5 ${item.border ?? ""}`}
            >
              <div className="flex items-center gap-5">
                {/* Icon */}

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                >
                  <Icon
                    className="text-2xl"
                    style={{
                      color: item.color,
                    }}
                  />
                </div>

                {/* Text */}

                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-300">
                    {item.title}
                  </p>

                  <p className="mt-1 font-medium text-[#F8FAFC] break-all">
                    {item.value}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        );

        if (!item.href) {
          return (
            <div key={item.title}>
              {content}
            </div>
          );
        }

        return (
          <Link
            key={item.title}
            href={item.href}
            target="_blank"
            className="block"
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}