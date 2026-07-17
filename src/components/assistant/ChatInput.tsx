"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

import Button from "@/components/ui/Button";

interface ChatInputProps {
  loading: boolean;
  onSend: (message: string) => void;
}

export default function ChatInput({
  loading,
  onSend,
}: ChatInputProps) {
  const [message, setMessage] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <form autoComplete="off"
      onSubmit={handleSubmit}
      className="border-t border-white/10 p-4"
    >
      <div className="flex gap-3">
        <input
  type="text"
  autoComplete="off"
  spellCheck={false}
  value={message}
  onChange={(e) =>
    setMessage(e.target.value)
  }
  placeholder="Ask me anything about Isha..."
  className="flex-1 rounded-xl border border-white/10 bg-[#111827] p-3 outline-none transition focus:border-blue-500 text-sm"
/>

        <Button
          type="submit"
          disabled={loading}
          size="sm"
        >
          <FaPaperPlane className=" h-4 w-4"/>
        </Button>
      </div>
    </form>
  );
}