'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface CourseCardProps {
  title: string;
  subtitle: string;
  discount?: string;
  price?: string;
  image: string;
  features: string[];
}

export function CourseCard({
  title,
  subtitle,
  discount,
  price,
  image,
  features,
}: CourseCardProps) {
  return (
    <Card className="border-2 border-[#2a5477] overflow-hidden">
      <div className="relative">
        <div className="bg-gradient-to-br from-[#2a5427] to-[#2a5477] p-3 md:p-4 h-24 md:h-32 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="font-bold text-xs md:text-sm mb-1 md:mb-2">KHÓA HỌC</p>
            <p className="text-sm md:text-lg font-bold text-balance line-clamp-2">{title}</p>
          </div>
        </div>
      </div>

      <div className="p-3 md:p-4">
        <p className="text-xs md:text-sm text-gray-700 mb-2 md:mb-3 text-center line-clamp-2">{subtitle}</p>

        {features.map((feature, index) => (
          <div key={index} className="flex gap-2 text-xs text-gray-700 mb-1 md:mb-2">
            <span className="text-[#2a5477] flex-shrink-0">✓</span>
            <span className="line-clamp-2">{feature}</span>
          </div>
        ))}

        {discount && (
          <div className="text-center my-2 md:my-3">
            <p className="text-[#2a5477] font-bold text-base md:text-lg">{discount}</p>
          </div>
        )}

        {price && (
          <div className="text-center mb-3 md:mb-4">
            <p className="text-gray-800 font-bold text-sm md:text-base">{price}</p>
          </div>
        )}

        <Button className="w-full bg-[#2a5477] hover:bg-red-700 text-white font-bold py-2 text-sm md:text-base">
          ĐĂNG KÝ NGAY
        </Button>
      </div>
    </Card>
  );
}
