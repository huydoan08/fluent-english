import Link from "next/link";
import { Users, Star } from "lucide-react";

export default function TOEICIntroPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-sm border p-10 text-center">
        
        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-blue-600 mb-6">
          Test IELTS listening - Đề 2
        </h1>

        {/* INFO */}
        <div className="flex justify-center gap-4 mb-6">
          
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700">
            <Users size={16} />
            350 lượt làm
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm">
            <div className="flex text-orange-400">
              ⭐⭐⭐⭐⭐
            </div>
            <span className="font-semibold text-black">4.5/5</span>
            <span className="text-gray-500">(127 đánh giá)</span>
          </div>

        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-2">
          Bài thi này bao gồm 40 câu hỏi.
        </p>

        <p className="font-semibold text-gray-700 mb-6">
          Thời gian làm bài: <span className="font-normal">60 phút.</span>
        </p>

        {/* BUTTON */}
        <Link href="/luyen-thi-thu-toeic/content/1">
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-medium">
            Bắt đầu làm bài
          </button>
        </Link>

      </div>
    </main>
  );
}