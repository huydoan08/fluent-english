'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-3xl">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Chinh Phục Mọi Kỳ Thi <br /> Chứng Chỉ
        </h1>

        {/* DESC */}
        <p className="text-gray-200 text-base md:text-lg mb-8">
          Nền tảng luyện thi toàn diện, cung cấp lộ trình học tập và đề thi cập nhật nhất
          giúp bạn đạt được điểm số mơ ước.
        </p>

        {/* CTA */}
        <Link href="/exam">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full font-semibold shadow-lg">
            Bắt đầu Luyện thi Ngay →
          </Button>
        </Link>
      </div>
    </div>
  );
}