'use client';

import Link from "next/link";
import { Users } from "lucide-react";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from "@/components/loading";

export default function TOEICIntroPage() {
    const params = useParams();
    const id = params.id as string;
    const [exam, setExam] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExam = async () => {
            try {
                const res = await fetch(`/api/exams?id=${id}`);
                const data = await res.json();
                
                if (data.success) {
                    setExam(data.data);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchExam();
    }, [id]);

    if (loading) {
        return <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Loading />
        </div>;
    }

    if (!exam) {
        return <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <p className="text-gray-600">Không tìm thấy đề</p>
        </div>;
    }

    const totalQuestions = exam.questions?.length || 0;

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center mb-20">
      <div className="bg-white w-full max-w-4xl h-150 rounded-2xl shadow-sm border p-10 text-center">
        
        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-blue-600 mb-6 mt-30">
          {exam.title}
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
          Bài thi này bao gồm {totalQuestions} câu hỏi.
        </p>

        <p className="font-semibold text-gray-700 mb-6">
          Thời gian làm bài: <span className="font-normal">60 phút.</span>
        </p>

        {/* BUTTON */}
        <Link href={`/luyen-thi-thu-toeic/content/${id}`} className="inline-block">
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-medium">
            Bắt đầu làm bài
          </button>
        </Link>

      </div>
    </main>
  );
}