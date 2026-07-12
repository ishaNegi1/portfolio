"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowBorderProps {
  children: ReactNode;
  className?: string;
}

export default function GlowBorder({
  children,
  className,
}: GlowBorderProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-[1px]",
        "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500",
        className
      )}
    >
      <div className="rounded-2xl bg-[#0B1120]">
        {children}
      </div>
    </div>
  );
}