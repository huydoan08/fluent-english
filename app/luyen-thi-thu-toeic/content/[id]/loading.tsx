'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-white z-[9999] flex items-center justify-center">
      
      <div className="flex flex-col items-center gap-6">
        
        {/* LOGO ANIMATION */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="relative"
        >
          {/* Glow */}
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full bg-blue-200 blur-xl opacity-60"
          />

          {/* Logo */}
          <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200 shadow-md bg-white relative">
            <Image
              src="/logo.png"
              alt="logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* SPINNER DOTS */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="text-gray-600 text-sm"
        >
          Đang tải bài thi...
        </motion.p>
      </div>
    </div>
  );
}