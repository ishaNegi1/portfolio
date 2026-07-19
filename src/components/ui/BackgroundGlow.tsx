"use client";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Top Left */}
      <div className="absolute -left-45 -top-30 h-137.5 w-137.5 rounded-full bg-[#9EF01A]/10 blur-[180px]" />

      {/* Top Right */}
      <div className="absolute -right-55 top-[10%] h-125 w-125 rounded-full bg-[#38BDF8]/8 blur-[180px]" />

      {/* Center */}
      <div className="absolute left-1/2 top-[45%] h-150 w-150 -translate-x-1/2 rounded-full bg-[#70E000]/5 blur-[220px]" />

      {/* Bottom Left */}
      <div className="absolute -bottom-45 left-[5%] h-125 w-125 rounded-full bg-[#38BDF8]/8 blur-[180px]" />

      {/* Bottom Right */}
      <div className="absolute -bottom-45 -right-30 h-137.5 w-137.5 rounded-full bg-[#9EF01A]/10 blur-[200px]" />
    </div>
  );
}