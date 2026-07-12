"use client";

import { FaEye } from "react-icons/fa";

import useVisitor from "@/hooks/useVisitor";

export default function VisitorCounter() {
  const visitors = useVisitor();

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
      <FaEye className="text-blue-400" />

      <span className="text-sm font-medium">
        {visitors.toLocaleString()}
      </span>
    </div>
  );
}