"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 outline-none",

          "disabled:pointer-events-none disabled:opacity-50",

          fullWidth && "w-full",

          size === "sm" &&
            "px-4 py-2 text-sm",

          size === "md" &&
            "px-6 py-3 text-base",

          size === "lg" &&
            "px-8 py-4 text-lg",

          variant === "primary" &&
            "bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-blue-500/30",

          variant === "secondary" &&
            "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700",

          variant === "outline" &&
            "border border-blue-500 text-blue-400 hover:bg-blue-500/10",

          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;