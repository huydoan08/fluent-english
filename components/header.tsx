'use client';

import { CourseDropdown } from './course-dropdown';
import { GrammarDropdown } from './grammar-dropdown';

export function Header() {

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-3xl font-bold text-[#2a5477]">Fluent-English</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 flex-1 ml-6 xl:ml-12">
            <CourseDropdown />
            <GrammarDropdown />
          </nav>
        </div>
      </div>
    </header>
  );
}
