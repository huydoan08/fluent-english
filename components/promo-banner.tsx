'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from './countdown-timer';

export function PromoBanner() {
  return (
    <div className="w-full bg-[#2a5477] py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
          <div className="text-white flex-1">
            <h2 className="text-xs md:text-sm font-bold mb-1 md:mb-2">
              HỌC THỬ IELTS ONLINE MIỄN PHÍ & NHẬN LỘ TRÌNH CÁ NHÂN HÓA
            </h2>
            <p className="text-sm md:text-lg font-bold">
              DỰY NHẤT 10 SLOTS TRONG HÔM NAY
            </p>
          </div>

          <div className="flex-1 md:flex-none w-full md:w-auto">
            <CountdownTimer />
          </div>

          <div>
            <Button
              className="w-full md:w-auto bg-white text-[#2a5477] hover:bg-gray-100 font-bold px-4 md:px-6 py-2 text-sm md:text-base"
            >
              Nhận ưu đãi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
