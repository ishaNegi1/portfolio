"use client";

export default function TechGrid() {
  return (
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );
}