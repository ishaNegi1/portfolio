"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import SectionHeading from "@/components/ui/SectionHeading";
import CertificateCard from "@/components/certificate/CertificateCard";

import certificates from "@/data/certificates";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null,
  );

  return (
    <section className="sm:px-20 px-5 py-2">
      <SectionHeading
        title="Certificates"
        subtitle="Certifications and professional learning achievements that have strengthened my skills in software development, artificial intelligence, and problem solving."
      />

      <motion.div
        layout
        className="grid gap-10 sm:gap-6 sm:grid-cols-3"
      >
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            onOpen={setSelectedCertificate}
          />
        ))}
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#111111]"
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-5 right-5 z-20 rounded-full bg-black/50 p-3 text-white transition hover:bg-[#9EF01A] hover:text-black"
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