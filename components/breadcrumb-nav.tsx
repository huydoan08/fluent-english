'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

export function BreadcrumbNav() {
  const items = [
    { label: 'Trang chủ', href: '#' },
    { label: 'Ngữ Pháp', href: '#' },
    { label: '12 THÌ TRONG TIẾNG ANH: CẤU TRÚC, DẤU HIỆU VÀ CÁCH DÙNG', href: '/grammar' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-4">
      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700 flex-wrap">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <a href={item.href} className="hover:text-[#2a5477] truncate">
              {item.label}
            </a>
            {index < items.length - 1 && <ChevronRight size={14} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
