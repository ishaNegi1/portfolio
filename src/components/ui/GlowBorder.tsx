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
        "rounded-2xl p-px",
        "bg-linear-to-br from-[#9EF01A] via-[#70E000] to-[#38BDF8]",
        className
      )}
    >
      <div className="rounded-2xl bg-[#0B1120]">
        {children}
      </div>
    </div>
  );
}