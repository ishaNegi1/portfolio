"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  opacity: number;
};

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 9 + 6,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 5 + 8,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.2,
    }));

    setParticles(generated);
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            background:
              particle.id % 2 === 0 ? "#60a5fa" : "#a855f7",
            boxShadow:
              particle.id % 2 === 0
                ? "0 0 10px #60a5fa"
                : "0 0 10px #a855f7",
          }}
          animate={{
  y: [-45, 45, -45],
  x: [-30, 30, -30],
            opacity: [
              particle.opacity,
              particle.opacity + 0.3,
              particle.opacity,
            ],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </>
  );
}