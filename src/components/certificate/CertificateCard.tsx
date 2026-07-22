"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaIdBadge,
  FaImage,
} from "react-icons/fa";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { Certificate } from "@/types/certificate";

interface CertificateCardProps {
  certificate: Certificate;
  onOpen: (image: string) => void;
}

export default function CertificateCard({
  certificate,
  onOpen,
}: CertificateCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden p-0">
        {/* Certificate Image */}
        <div
          className="relative h-40 w-full overflow-hidden"
        >
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="line-clamp-2 text-lg font-bold text-white">
            {certificate.title}
          </h3>

          <div className="mt-4 flex gap-5">
            <span className="inline-flex rounded-full border border-[#9EF01A]/30 bg-[#9EF01A]/10 px-3 py-1 text-xs font-medium text-[#9EF01A]">
              {certificate.issuer}
            </span>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <FaCalendarAlt className="text-[#9EF01A]" />
            <span>{certificate.issueDate}</span>
          </div>
          </div>


          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              size="sm"
              onClick={() => onOpen(certificate.image)}
            >
              <FaImage className="mr-2" />
              Certificate
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}