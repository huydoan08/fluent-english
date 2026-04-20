'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE (ZOOM + PARALLAX) */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        }}
      />

      {/* OVERLAY (FADE IN) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black"
      />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-3xl">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
        >
          Chinh Phục Mọi Kỳ Thi <br /> Chứng Chỉ
        </motion.h1>

        {/* DESC */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-200 text-base md:text-lg mb-8"
        >
          Nền tảng luyện thi toàn diện, cung cấp lộ trình học tập và đề thi cập nhật nhất
          giúp bạn đạt được điểm số mơ ước.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link href="#">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0px 0px 0px rgba(59,130,246,0.4)',
                  '0px 0px 20px rgba(59,130,246,0.6)',
                  '0px 0px 0px rgba(59,130,246,0.4)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-block rounded-full"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full font-semibold">
                Bắt đầu Luyện thi Ngay →
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}