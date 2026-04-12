'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  return (
    <div className="fixed right-3 md:right-6 bottom-6 md:bottom-6 flex flex-col gap-3 z-50">
      <button
        className="bg-[#2a5477] hover:bg-red-700 text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
        title="Gọi"
      >
        <Phone size={20} className="md:w-6 md:h-6" />
      </button>
      <button
        className="bg-[#2a5477] hover:bg-red-700 text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
        title="Zalo/Chat"
      >
        <MessageCircle size={20} className="md:w-6 md:h-6" />
      </button>
    </div>
  );
}
