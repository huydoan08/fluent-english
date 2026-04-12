'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function CourseDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const courseCategories = [
    {
      title: 'KHÓA HỌC TIẾNG ANH GIAO TIẾP',
      items: [
        'Khóa tiếng Anh giao tiếp online',
      ],
    },
    {
      title: 'KHÓA HỌC TIẾNG ANH TRẺ EM',
      items: [
        'Khóa tiếng Anh trẻ em (3-6 tuổi)',
        'Khóa tiếng Anh trẻ em (6-12 tuổi)',
      ],
    },
    {
      title: 'KHÓA HỌC TIẾNG ANH DOANH NGHIỆP',
      items: [
        'Khóa tiếng Anh kinh doanh',
        'Khóa tiếng Anh chuyên ngành',
      ],
    },
  ];

  return (
    <div className="relative group">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="text-gray-700 hover:text-[#2a5477] font-medium text-sm flex items-center gap-1 py-2"
      >
        Khóa học
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute top-full left-0 mt-0 w-[800px] bg-white border border-gray-200 shadow-lg rounded-sm p-6 z-50"
        >
          <div className="grid grid-cols-4 gap-6">
            {courseCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-[#2a5477] font-bold text-sm mb-3 pb-2 border-b-2 border-red-300">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-700 text-sm hover:text-[#2a5477] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
