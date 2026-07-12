"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaEye } from "react-icons/fa";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { Certificate } from "@/types/certificate";

interface CertificateCardProps {
  certificate: Certificate;
  onOpen: (certificate: Certificate) => void;
}

export default function CertificateCard({
  certificate,
  onOpen,
}: CertificateCardProps) {
  return (
    <motion.div
      layout
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
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <Card className="overflow-hidden p-0">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div className="space-y-5 p-6">
          <div>
            <h3 className="line-clamp-2 text-xl font-bold">
              {certificate.title}
            </h3>

            <p className="mt-2 text-blue-400">
              {certificate.issuer}
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
              <FaCalendarAlt />
              <span>{certificate.issueDate}</span>
            </div>
          </div>

          <Button
            fullWidth
            onClick={() => onOpen(certificate)}
          >
            <FaEye className="mr-2" />
            View Certificate
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}