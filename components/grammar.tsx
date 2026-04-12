'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Grammar() {
  const [isOpen, setIsOpen] = useState(false);

  const grammarCategories = [
    {
      title: 'CÁC THÌ TRONG TIẾNG ANH',
      items: [
       {
          title: '12 thì cơ bản',
          href: '/grammar/tense',
       }
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
        Ngữ pháp
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute top-full left-0 mt-0 w-[800px] bg-white border border-gray-200 shadow-lg rounded-sm p-6 z-50"
        >
          <div className="grid grid-cols-4 gap-6">
            {grammarCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-[#2a5477] font-bold text-sm mb-3 pb-2 border-b-2 border-red-300">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-gray-700 text-sm hover:text-[#2a5477] transition-colors"
                      >
                        {item.title}
                      </Link>
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
