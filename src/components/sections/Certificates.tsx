"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import CertificateCard from "@/components/certificate/CertificateCard";
import CertificateModal from "@/components/certificate/CertificateModal";

import certificates from "@/data/certificates";

import { Certificate } from "@/types/certificate";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <section className="container">
      <SectionHeading
        title="Certificates"
        subtitle="Certifications and professional learning achievements that have strengthened my skills in software development, artificial intelligence and modern web technologies."
      />

      <motion.div
        layout
        className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
      >
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            onOpen={setSelectedCertificate}
          />
        ))}
      </motion.div>

      <CertificateModal
        open={selectedCertificate !== null}
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}