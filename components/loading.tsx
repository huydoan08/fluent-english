"use client";

import { motion } from "framer-motion";

export default function Loading() {
  const dots = [0, 1, 2];

  return (
    <div className="flex items-center justify-center w-full h-full py-20">
      <div className="flex gap-3">
        {dots.map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 rounded-full bg-blue-600"
            animate={{
              y: [0, -12, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}