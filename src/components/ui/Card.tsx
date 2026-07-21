"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  glow = false,
}: CardProps) {
  const [active, setActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => setActive(true)}
      className={cn(
        "group relative overflow-hidden rounded-3xl",

        // Base
        "border border-white/10",
        "bg-[#18181B]/80",
        "backdrop-blur-2xl",

        // Shadow
        "shadow-[0_10px_35px_rgba(0,0,0,.30)]",

        // Animation
        "transition-all duration-500",

        // Desktop Hover
        hover &&
          "hover:border-[#9EF01A]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,.45)]",

        // Mobile Active
        active &&
          "border-[#9EF01A]/20 shadow-[0_20px_60px_rgba(0,0,0,.45)]",

        className
      )}
    >
      {/* Background Gradient */}

      <div className="absolute inset-0 bg-linear-to-br from-white/3 via-transparent to-[#38BDF8]/2" />

      {/* Top Glow */}

      <div
        className={cn(
          "pointer-events-none absolute -top-28 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#9EF01A]/10 blur-3xl transition-opacity duration-500",
          active
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        )}
      />

      {/* Bottom Glow */}

      <div
        className={cn(
          "pointer-events-none absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-[#38BDF8]/10 blur-3xl transition-opacity duration-500",
          active
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        )}
      />

      {/* Border Glow */}

      {glow && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-3xl border border-[#9EF01A]/20 transition-opacity duration-500",
            active
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          )}
        />
      )}

      {/* Shine */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className={cn(
            "absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/10 to-transparent transition-all duration-700",
            active
              ? "left-[140%] opacity-100"
              : "opacity-0 group-hover:left-[140%] group-hover:opacity-100"
          )}
        />
      </div>

      {/* Top Accent */}

      <div
        className={cn(
          "absolute left-0 top-0 h-0.5 w-full bg-linear-to-r from-transparent via-[#9EF01A]/40 to-transparent transition-opacity duration-500",
          active
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        )}
      />

      {/* Content */}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}