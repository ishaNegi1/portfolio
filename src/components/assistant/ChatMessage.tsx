"use client";

import { motion } from "framer-motion";
import { FaRobot, FaUser } from "react-icons/fa";

import { ChatMessage as ChatMessageType } from "@/types/chat";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({
  message,
}: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#9EF01A] via-[#70E000] to-[#38BDF8] text-[#09090B]">
          <FaRobot/>
        </div>
      )}

      <div
        className={`max-w-[80%] rounded-2xl p-3 text-base leading-7 ${
          isUser
            ? "rounded-br-md bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8] text-[#09090B]"
            : "rounded-bl-md border border-[#9EF01A]/20 bg-[#111111]/90 text-slate-200"
        }`}
      >
        <p className="whitespace-pre-wrap wrap-break-word text-base">
          {message.content}
        </p>
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-700 text-white border border-[#9EF01A]">
          <FaUser />
        </div>
      )}
    </motion.div>
  );
}