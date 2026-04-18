'use client';

import { motion } from 'framer-motion';

export function Fireworks() {
  const particles = Array.from({ length: 40 });

  const colors = [
    'bg-red-400',
    'bg-yellow-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-pink-400',
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => {
        const angle = Math.random() * 2 * Math.PI;
        const distance = 80 + Math.random() * 140;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x, y, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full ${
              colors[i % colors.length]
            }`}
          />
        );
      })}
    </div>
  );
}