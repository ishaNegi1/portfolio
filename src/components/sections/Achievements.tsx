"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAward,
  FaUniversity,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

import achievements from "@/data/achievements";

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null,
  );

  return (
    <section className="sm:px-20 px-5 my-20 sm:py-12 py-10">
      <SectionHeading
        title="Achievements"
        subtitle="Research publications and milestones reflecting my passion for innovation, continuous learning, and solving real-world problems."
      />

      <div className="mx-auto max-w-6xl space-y-12">
        {achievements.map((achievement, index) => {

          return (
            <motion.div
              key={achievement.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <Card className="overflow-hidden p-0">
                <div className="h-1 bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8]" />

                <div className="grid gap-8 py-5 px-3 lg:grid-cols-[260px_1fr]">
                  {/* Certificate */}

                  <button
                    className="group relative overflow-hidden rounded-2xl border border-white/10"
                  >
                    <Image
                      src={achievement.certificateImage}
                      alt="Certificate"
                      width={260}
                      height={180}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </button>

                  {/* Content */}

                  <div>
                    <div className="flex items-start gap-4">

                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {achievement.title}
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-3">
                          <div className="flex items-center gap-2 rounded-full border border-[#9EF01A]/20 bg-[#9EF01A]/10 px-3 py-1 text-sm text-[#9EF01A]">
                            <FaAward />
                            {achievement.organization}
                          </div>

                          <div className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                            <FaUniversity />
                            {achievement.conference}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 leading-6 text-sm text-slate-300">
                      {achievement.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button
                        size="sm"
                        onClick={() =>
                          setSelectedCertificate(achievement.certificateImage)
                        }
                      >
                        Certificate
                      </Button>

                      {achievement.paperLink ? (
                        <a
                          href={achievement.paperLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline">
                            <FaExternalLinkAlt className="mr-2" />
                            View Paper
                          </Button>
                        </a>
                      ) : (
                        <Button
                          variant="outline"
                          disabled
                          className="cursor-not-allowed opacity-70"
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          View Paper
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Certificate Modal */}

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur"
          >
            <motion.div
              initial={{
                scale: 0.9,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.9,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#111111]"
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-5 top-5 z-20 rounded-full bg-black/50 p-3 text-white transition hover:bg-[#9EF01A] hover:text-black"
              >
                <FaTimes />
              </button>

              <Image
                src={selectedCertificate}
                alt="Certificate"
                width={1200}
                height={900}
                className="max-h-[90vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
