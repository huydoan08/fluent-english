'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row */}
        <div className="flex items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold text-[#2a5477]">
            logo
          </Link>

          {/* Menu */}
          <div className="hidden lg:flex flex-col ml-8 w-full">
            <div className="flex flex-wrap items-center gap-6 text-[15px] text-gray-700 hover:text-[#1e73be">
              <Link href="/uyen-thi-thu-ielts">Luyện thi IELTS</Link>
              <Link href="/luyen-thi-thu-toeic">Luyện thi TOEIC</Link>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}