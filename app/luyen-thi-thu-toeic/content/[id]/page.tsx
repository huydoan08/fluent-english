'use client';

import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const questions = Array.from({ length: 25 }).map((_, i) => ({
  id: i + 1,
  question: `Question ${i + 1}`,
  options: ['A', 'B', 'C'],
}));

export default function TestPage() {
  const [current, setCurrent] = useState(2);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentQuestion = questions.find((q) => q.id === current)!;

  return (
    <main className="min-h-screen bg-[#f5f6f8]">
      
      {/* HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-2 text-gray-600 text-sm">
            <ChevronLeft size={18} />
            Quay lại danh sách đề
          </Link>

          <h1 className="text-[#2196f3] font-medium text-lg">
            Test IELTS listening - Đề 2
          </h1>

          <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
            59:40
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-12 gap-6">
        
        {/* LEFT */}
        <div className="col-span-9 space-y-6">

          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className="font-medium mb-4">
              Listen to the audio and answer questions 1-40.
            </p>
            <div className="bg-gray-100 rounded-full h-10 flex items-center px-4 text-sm text-gray-500">
              ▶ 0:00 / 0:00
            </div>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6 text-sm text-gray-700">
            <h3 className="font-medium mb-4">{currentQuestion.question}</h3>

            {currentQuestion.options.map((opt) => (
              <label
                key={opt}
                className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer mb-3
                ${
                  answers[current] === opt
                    ? 'bg-blue-50 border-blue-500'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name={`q${current}`}
                  checked={answers[current] === opt}
                  onChange={() =>
                    setAnswers((prev) => ({
                      ...prev,
                      [current]: opt,
                    }))
                  }
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl border shadow-sm p-4 sticky top-6">
            
            <h3 className="font-medium mb-4">Danh sách câu hỏi</h3>

            {/* GRID */}
            <div className="grid grid-cols-5 gap-3 max-h-[260px] overflow-y-auto pr-1">
              {questions.map((q) => {
                const isActive = current === q.id;
                const isAnswered = !!answers[q.id];

                return (
                  <div
                    key={q.id}
                    onClick={() => setCurrent(q.id)}
                    className={`
                      relative w-10 h-10 flex items-center justify-center 
                      rounded-full text-sm cursor-pointer border transition
                      
                      ${isActive 
                        ? 'bg-green-500 text-white border-green-500' 
                        : 'bg-white hover:bg-gray-100'
                      }
                    `}
                  >
                    {q.id}

                    {/* ✓ nếu đã trả lời */}
                    {isAnswered && !isActive && (
                      <span className="absolute -top-1 -right-1 text-[10px] bg-green-500 text-white rounded-full px-1">
                        ✓
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* SCROLL BAR GIẢ */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-full h-2 bg-gray-200 rounded-full relative">
                <div className="absolute left-4 w-20 h-2 bg-gray-400 rounded-full" />
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full mt-4 bg-[#2196f3] hover:bg-[#1e88e5] text-white py-3 rounded-lg font-medium">
              Nộp Bài
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}