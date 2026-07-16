"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

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
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [open, onClose]);

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
            className="fixed inset-0 z-90 bg-black/60 backdrop-blur-sm"
          />

          {/* Chat Window */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed bottom-24 right-6 z-100 flex h-1/2 w-105 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#08111f] shadow-2xl max-md:bottom-0 max-md:right-0 max-md:h-screen max-md:w-full max-md:rounded-none"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/10 bg-[#0b1528] px-6 py-5">
              <div>
                <h2 className="text-xl font-bold">
                  AI Portfolio Assistant
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Ask anything about Isha
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 transition hover:bg-white/10"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}

            <div className="flex-1 space-y-5 overflow-y-auto p-5">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                />
              ))}

              {loading && <TypingIndicator />}

              <div ref={bottomRef} />
            </div>

            {/* Input */}

            <ChatInput
              loading={loading}
              onSend={sendMessage}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}