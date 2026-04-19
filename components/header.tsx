'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP */}
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png" // 👉 đặt ảnh vào public/logo.png
              alt="logo"
              width={40}
              height={40}
              className="object-contain rounded-full"
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] text-gray-700">
            <Link href="/luyen-thi-thu-ielts" className="hover:text-[#1e73be] transition">
              Luyện thi IELTS
            </Link>
            <Link href="/luyen-thi-thu-toeic" className="hover:text-[#1e73be] transition">
              Luyện thi TOEIC
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md border"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden pb-4 border-t mt-2">
            <div className="flex flex-col gap-3 pt-4 text-gray-700">
              <Link
                href="/luyen-thi-thu-toeic"
                className="px-2 py-2 rounded hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Luyện thi IELTS
              </Link>
              <Link
                href="/luyen-thi-thu-toeic"
                className="px-2 py-2 rounded hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Luyện thi TOEIC
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}