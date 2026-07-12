export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: Date;
}

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply: string;
}