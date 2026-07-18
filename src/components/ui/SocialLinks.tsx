"use client";

import Link from "next/link";
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
  },

  {
    title: "LinkedIn",
    value: social.linkedin.replace(
      "https://linkedin.com/in/",
      ""
    ),
    icon: FaLinkedin,
    href: social.linkedin,
  },

  {
    title: "Email",
    value: social.email,
    icon: FaEnvelope,
    href: `mailto:${social.email}`,
  },

  {
    title: "Location",
    value: social.location,
    icon: FaLocationDot,
  },
];

export default function SocialLinks() {
  return (
    <div className=" flex flex-col gap-5 md:mt-16 mt-6">
      {socials.map((item) => {
        const Icon = item.icon;

        const content = (
          <Card className="flex items-center gap-5 p-4 transition-all hover:border-blue-500/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-xl text-white">
              <Icon className=" h-6 w-6"/>
            </div>

            <div>
              <p className="text-base text-slate-500">
                {item.title}
              </p>

              <p className="break-all font-medium">
                {item.value}
              </p>
            </div>
          </Card>
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
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}