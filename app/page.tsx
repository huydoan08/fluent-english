'use client';

import { Header } from '@/components/header';
import { PromoBanner } from '@/components/promo-banner';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { TenseDetails } from '@/components/tense-details';
import { CourseCard } from '@/components/course-card';
import { GoToTop } from '@/components/go-to-top';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PromoBanner />
      <BreadcrumbNav />

      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="bg-[#2a5477] text-white text-center py-4 md:py-6 px-4 md:px-8 font-bold text-base md:text-xl">
          12 THÌ TRONG TIẾNG ANH: CẤU TRÚC, DẤU HIỆU VÀ CÁCH DÙNG
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <TenseDetails />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4 lg:space-y-6">
            <CourseCard
              title="TIẾNG ANH GIAO TIẾP ONLINE"
              subtitle="Khóa học tiếng Anh giao tiếp với giáo viên bản xứ"
              discount="GIẢM ĐẾN 20%"
              features={[
                'Bài test đầu vào miễn phí',
                'Hệ thống quản lý học tập 24/7',
                'Chứng chỉ quốc tế sau khóa học',
              ]}
              image="/course-1.jpg"
            />

            <CourseCard
              title="TIẾNG ANH ONLINE 1 KÈM 1"
              subtitle="Lớp học 1 kèm 1 với giáo viên chuyên nghiệp"
              price="UU DÃI 10.000.000Đ"
              features={[
                'Tư vấn lộ trình học tập',
                'Luyện thi IELTS/TOEIC hiệu quả',
                'Cải thiện phát âm trong 2 tuần',
              ]}
              image="/course-2.jpg"
            />
          </div>
        </div>
      </div>

      <GoToTop />
    </div>
  );
}
