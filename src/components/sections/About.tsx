"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
  FaRocket,
  FaCode,
} from "react-icons/fa";

import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    description:
      "Developing responsive and scalable web applications using modern frontend and backend technologies.",
  },
  {
    icon: <FaBrain />,
    title: "AI Integration",
    description:
      "Building intelligent applications powered by LLMs, OpenRouter and modern AI tools.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description:
      "BCA Graduate with a strong academic record and hands-on development experience.",
  },
  {
    icon: <FaRocket />,
    title: "Always Learning",
    description:
      "Passionate about learning new technologies and building impactful products.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Started BCA",
    description:
      "Began my journey into software development and computer science.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    description:
      "Built multiple responsive projects using React, Tailwind CSS and JavaScript.",
  },
  {
    year: "2025",
    title: "Full Stack & AI",
    description:
      "Worked on full-stack applications, AI-powered solutions and research projects.",
  },
  {
    year: "2026",
    title: "Open to Opportunities",
    description:
      "Looking for Full Stack Developer roles while continuously improving my skills.",
  },
];

export default function About() {
  return (
    <section className="relative sm:px-20 px-5 py-3">

        <SectionHeading
          title="About Me"
          subtitle="Passionate Full Stack Developer dedicated to building scalable, performant and user-friendly web applications."
        />

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="relative overflow-hidden p-6">

              {/* Glow */}

              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#9EF01A]/10 blur-[100px]" />

              <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-[#38BDF8]/10 blur-[120px]" />

              <div className="relative">

                {/* Badge */}

                <div className="inline-flex items-center gap-2 rounded-full border border-[#9EF01A]/20 bg-[#9EF01A]/10 px-4 py-2 text-sm font-medium text-[#9EF01A]">

                  <span className="h-2 w-2 rounded-full bg-[#9EF01A]" />

                  Available for Work

                </div>

                {/* Heading */}

                <h3 className="mt-8 text-3xl font-black leading-tight text-white">

                  Turning{" "}

                  <span className="bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8] bg-clip-text text-transparent">

                    Ideas{" "}

                  </span>

                  Into Digital Products

                </h3>

                {/* Description */}

                <div className="mt-8 space-y-6 text-base leading-9 text-slate-300">

                  <p>
                    I'm a{" "}
                    <span className="font-semibold text-[#F8FAFC]">
                      Full Stack Developer
                    </span>{" "}
                    passionate about building scalable web applications,
                    intuitive user experiences and modern backend systems.
                  </p>

                  <p>
                    My primary interests include{" "}
                      AI
                    , API development, UI/UX and creating
                    software that solves real-world problems.
                  </p>

                  <p>
                    I enjoy transforming ideas into production-ready products
                    while continuously learning new technologies and writing
                    clean, maintainable code.
                  </p>

                </div>

                {/* Divider */}

                <div className="my-5 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

                {/* Stats */}

                <div className="grid grid-cols-2 gap-5">

                  {[
                    {
                      number: "12+",
                      label: "Projects",
                    },
                    {
                      number: "10+",
                      label: "Technologies",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl flex flex-col justify-center items-center border border-white/10 bg-white/2 p-5 text-center transition-all duration-300 hover:border-[#9EF01A]/20 hover:bg-white/4"
                    >
                      <h4 className="text-2xl font-black text-[#9EF01A]">
                        {item.number}
                      </h4>

                      <p className="mt-2 text-base text-slate-300">
                        {item.label}
                      </p>
                    </div>
                  ))}

                </div>

                {/* CTA */}

                <div className="mt-7 inline-flex items-center gap-3 font-medium text-[#9EF01A]">

                  <FaCode />

                  Crafting clean code & meaningful experiences


                </div>

              </div>

            </Card>

          </motion.div>
          
          {/* RIGHT SIDE */}

<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="grid gap-10 sm:grid-cols-2"
>
  {highlights.map((item, index) => (
    <motion.div
      key={item.title}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.12,
        duration: 0.5,
      }}
    >
      <Card
        hover
        glow
        className="group relative h-full overflow-hidden p-5"
      >
        {/* Glow */}

        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#9EF01A]/5 blur-[90px] transition-all duration-500 group-hover:bg-[#9EF01A]/10" />

        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-[#38BDF8]/5 blur-[90px] transition-all duration-500 group-hover:bg-[#38BDF8]/10" />

        <div className="relative">

          {/* Icon */}

          <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#9EF01A]/20 via-[#70E000]/10 to-[#38BDF8]/20 text-3xl text-[#9EF01A] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">

            {item.icon}

          </div>

          {/* Title */}

          <h4 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#9EF01A]">

            {item.title}

          </h4>

          {/* Divider */}

          <div className="my-5 h-px w-14 bg-linear-to-r from-[#9EF01A] to-transparent transition-all duration-500 group-hover:w-24" />

          {/* Description */}

          <p className="leading-7 text-slate-300">

            {item.description}

          </p>

        </div>

      </Card>
    </motion.div>
  ))}
</motion.div>
</div>


{/* JOURNEY */}

{/* <div className=" mt-24 sm:mt-28">

  <motion.div
    initial={{
      opacity: 0,
      y: 30,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: .6,
    }}
  >
    <h3 className="text-center text-4xl font-black bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8] bg-clip-text text-transparent">

      My Journey

    </h3>

    <p className="mx-auto mt-4 max-w-2xl text-center leading-8 text-slate-300">

      Every project, challenge and achievement has shaped my
      journey into becoming a better developer.

    </p>

  </motion.div>

  <div className="relative mx-auto mt-20 max-w-6xl">


  <div className="absolute left-5 top-0 h-full w-0.5 bg-linear-to-b from-[#9EF01A] via-[#70E000] to-[#38BDF8] md:left-1/2 md:-translate-x-1/2" />

  <div className=" sm:space-y-10 space-y-14">

    {timeline.map((item, index) => (
      <motion.div
        key={item.year}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .6,
          delay: index * .12,
        }}
        className={`relative flex items-center ${
          index % 2 === 0
            ? "md:flex-row"
            : "md:flex-row-reverse"
        } gap-8`}
      >


        <div className="hidden md:block md:flex-1" />

        <div className="absolute left-5 z-20 -translate-x-1/2 md:left-1/2">

          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#09090B]">

            <div className="h-4 w-4 rounded-full bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8] shadow-[0_0_20px_rgba(158,240,26,.7)]" />

          </div>

        </div>

        <div className="ml-14 flex-1 md:ml-0">

          <Card
            hover
            glow
            className="group relative overflow-hidden p-5"
          >


            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#9EF01A]/5 blur-[120px] transition-all duration-500 group-hover:bg-[#9EF01A]/10" />

            <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-[#38BDF8]/5 blur-[120px] transition-all duration-500 group-hover:bg-[#38BDF8]/10" />

            <div className="relative">


              <span className="inline-flex rounded-full border border-[#9EF01A]/20 bg-[#9EF01A]/10 px-4 py-2 text-sm font-semibold text-[#9EF01A]">

                {item.year}

              </span>


              <h4 className="mt-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#9EF01A]">

                {item.title}

              </h4>

            

              <p className="leading-8 text-slate-300 mt-2">

                {item.description}

              </p>

            </div>

          </Card>

        </div>

      </motion.div>
    ))}

  </div>
</div>

</div> */}

</section>
 );
}
