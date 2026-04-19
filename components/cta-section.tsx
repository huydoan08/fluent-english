'use client';

import Link from 'next/link';
import {
  Map,
  FileText,
  Users,
} from 'lucide-react';

export function CtaSection() {
  return (
    <div className="w-full">

      {/* WHY US */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Tại Sao Luyện Thi Cùng Chúng Tôi?
          </h2>

          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* ITEM */}
            <div className="flex flex-col items-center">
              <Map className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Lộ Trình Rõ Ràng
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Các khóa học được thiết kế theo lộ trình từ cơ bản đến nâng cao,
                phù hợp với mọi trình độ.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FileText className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Đề Thi Cập Nhật
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Ngân hàng đề thi phong phú, bám sát cấu trúc đề thi thật và được cập nhật liên tục.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Users className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Hướng Dẫn Chi Tiết
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Giải thích đáp án cặn kẽ, cung cấp mẹo làm bài và chiến lược học tập hiệu quả.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ABOUT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Về Chúng Tôi</h3>
            <p className="text-sm leading-relaxed">
              Trang web luyện thi tổng hợp, cung cấp các công cụ và tài nguyên học tập
              chất lượng cao để giúp bạn chinh phục các kỳ thi chứng chỉ quan trọng.
              Hãy bắt đầu hành trình của bạn ngay hôm nay!
            </p>
          </div>

          {/* EXAMS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Luyện Thi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/topik">TOPIK</Link></li>
              <li><Link href="/ielts">IELTS</Link></li>
              <li><Link href="/toeic">TOEIC</Link></li>
              <li><Link href="/hsk">HSK</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq">Câu hỏi thường gặp</Link></li>
              <li><Link href="/contact">Liên hệ</Link></li>
              <li><Link href="/terms">Điều khoản dịch vụ</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400 px-4">
          <p className="italic mb-2">
            Miễn trừ trách nhiệm: Mọi thông tin trên trang web chỉ mang tính chất tham khảo.
          </p>
          <p>© 2026 © Làm Trắc Nghiệm. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}