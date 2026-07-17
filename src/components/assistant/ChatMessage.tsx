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
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white">
          <FaRobot/>
        </div>
      )}

      <div
        className={`max-w-[80%] rounded-2xl p-3 text-sm leading-7 ${
          isUser
            ? "rounded-br-md bg-linear-to-r from-blue-600 to-purple-600 text-white"
            : "rounded-bl-md border border-white/10 bg-[#111827] text-slate-200"
        }`}
      >
        <p className="whitespace-pre-wrap wrap-break-word text-sm">
          {message.content}
        </p>
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-700 text-white">
          <FaUser />
        </div>
      )}
    </motion.div>
  );
}