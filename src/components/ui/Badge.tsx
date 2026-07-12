"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full",
        "border border-blue-500/30",
        "bg-blue-500/10",
        "px-3 py-1",
        "text-xs font-medium",
        "text-blue-300",
        className
      )}
    >
      {children}
    </span>
  );
}