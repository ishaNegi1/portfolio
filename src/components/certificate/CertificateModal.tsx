"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaIdCard,
  FaBuilding,
} from "react-icons/fa";

import Button from "@/components/ui/Button";

import { Certificate } from "@/types/certificate";

interface CertificateModalProps {
  certificate: Certificate | null;
  open: boolean;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  open,
  onClose,
}: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-1/2 top-1/2 z-60 h-[90vh] w-[95%] max-w-6xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#08111f]"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">
              <div>
                <h2 className="text-3xl font-bold">
                  {certificate.title}
                </h2>

                <p className="mt-2 text-slate-400">
                  {certificate.issuer}
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-3 transition hover:bg-white/10"
              >
                <FaTimes size={22} />
              </button>
            </div>

            {/* Body */}

            <div className="grid h-[calc(90vh-90px)] gap-10 overflow-y-auto p-8 lg:grid-cols-2">
              {/* Certificate */}

              <div className="relative aspect-[1.414/1] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-contain bg-[#050816]"
                />
              </div>

              {/* Details */}

              <div className="flex flex-col justify-between">
                <div className="space-y-8">
                  <section>
                    <h3 className="mb-5 text-2xl font-semibold">
                      Certificate Details
                    </h3>

                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <FaBuilding className="text-blue-400" />

                        <div>
                          <p className="text-sm text-slate-500">
                            Issued By
                          </p>

                          <p className="font-medium">
                            {certificate.issuer}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <FaCalendarAlt className="text-blue-400" />

                        <div>
                          <p className="text-sm text-slate-500">
                            Issue Date
                          </p>

                          <p className="font-medium">
                            {certificate.issueDate}
                          </p>
                        </div>
                      </div>

                      {certificate.credentialId && (
                        <div className="flex items-center gap-4">
                          <FaIdCard className="text-blue-400" />

                          <div>
                            <p className="text-sm text-slate-500">
                              Credential ID
                            </p>

                            <p className="font-medium break-all">
                              {certificate.credentialId}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </section>

                  <section>
                    <h3 className="mb-4 text-2xl font-semibold">
                      About
                    </h3>

                    <p className="leading-8 text-slate-400">
                      This certificate represents successful completion of the
                      course and demonstrates knowledge and practical skills in
                      the respective technology or domain.
                    </p>
                  </section>
                </div>

                {certificate.credentialUrl && (
                  <div className="mt-10">
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>
                        <FaExternalLinkAlt className="mr-2" />
                        Verify Credential
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}