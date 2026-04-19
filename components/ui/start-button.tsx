'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function StartButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (loading) return;

    setLoading(true);

    // delay để animation chạy
    setTimeout(() => {
      router.push(`/luyen-thi-thu-toeic/article/${id}`);
    }, 800); // 600–1000ms là đẹp
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      animate={{ scale: loading ? 0.97 : 1 }}
      className="relative mt-5 w-full rounded-xl bg-[#159FDB] text-white font-extrabold py-3 overflow-hidden shadow-sm"
    >
      {/* SHIMMER */}
      {loading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}

      {/* SPINNER */}
      <div className="relative flex items-center justify-center gap-2">
        {loading ? (
          <>
            <motion.div
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <span>Đang tải...</span>
          </>
        ) : (
          <span>Bắt đầu làm bài</span>
        )}
      </div>
    </motion.button>
  );
}