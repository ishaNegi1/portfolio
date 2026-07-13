"use client";

import { useState } from "react";

import { ChatMessage } from "@/types/chat";

export default function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),

      role: "assistant",

      content:
        "Hi 👋 I'm Isha's AI Assistant. Ask me anything about her skills, projects, achievements or experience.",

      createdAt: new Date(),
    },
  ]);

  const [loading, setLoading] = useState(false);

  async function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),

      role: "user",

      content: text,

      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),

          role: "assistant",

          content: data.answer,

          createdAt: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return {
    messages,
    loading,
    sendMessage,
  };
}