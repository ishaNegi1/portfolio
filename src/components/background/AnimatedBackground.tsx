"use client";

import GradientBlobs from "./GradientBlobs";
import FloatingParticles from "./FloatingParticles";
import TechGrid from "./TechGrid";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#050816]" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(59,130,246,0.15), transparent 55%), radial-gradient(circle at bottom, rgba(139,92,246,0.15), transparent 55%)",
        }}
      />

      <TechGrid />

      <GradientBlobs />

      <FloatingParticles />
    </div>
  );
}