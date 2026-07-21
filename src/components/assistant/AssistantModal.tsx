"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaRobot } from "react-icons/fa";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import useChat from "@/hooks/useChat";

interface AssistantModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AssistantModal({
  open,
  onClose,
}: AssistantModalProps) {
  const { messages, loading, sendMessage } = useChat();

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-90 bg-black/50 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: .92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: .92, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-20 sm:right-6 right-4 z-100 flex h-[75%] sm:w-[50%] w-[92%] max-w-2xl flex-col overflow-hidden rounded-3xl border border-[#9EF01A]/20 bg-[#18181B]/95 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,.55)] "
          >
            <div className="relative flex items-center justify-between border-b border-white/10 bg-[#111111]/90 p-5">
              <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#9EF01A]/40 to-transparent" />

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#9EF01A] via-[#70E000] to-[#38BDF8]">
                  <FaRobot className="text-xl text-[#09090B]" />
                </div>

                <div>
                  <h2 className="bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8] bg-clip-text text-xl font-bold text-transparent">
                    AI Portfolio Assistant
                  </h2>
                  <p className="mt-1 text-sm text-slate-300">
                    Ask anything about Isha
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-[#232326] p-2 transition-all hover:border-[#9EF01A]/30 hover:bg-[#2c2c30]"
              >
                <FaTimes className="h-5 w-5 text-[#CBD5E1]" />
              </button>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto bg-linear-to-b from-[#18181B] to-[#111111] p-5">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {loading && <TypingIndicator />}

              <div ref={bottomRef} />
            </div>

            <div className="border-t border-white/10 bg-[#111111]/90">
              <ChatInput
                loading={loading}
                onSend={sendMessage}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
