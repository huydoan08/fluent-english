'use client';

import { useState, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export function Assignment({ questions, AUDIO_URL }: { questions: Question[]; AUDIO_URL: string }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showModal, setShowModal] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  const questionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleSelect = (qId: number, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: option,
    }));
  };

  const scrollToQuestion = (id: number) => {
    questionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
  };

  const total = questions.length;
  const answered = Object.keys(answers).length;
  const isComplete = answered === total;

  const score = questions.reduce((acc, q) => {
    if (answers[q.id]?.startsWith(q.correctAnswer)) return acc + 1;
    return acc;
  }, 0);

  return (
    <main className="min-h-screen bg-[#f5f6f8]">
      {/* HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 text-sm">
            <ChevronLeft size={18} />
            Quay lại
          </Link>
          <h1 className="text-[#2196f3] font-medium">
            TOEIC Listening Test
          </h1>
          <div>{answered}/{total}</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 p-6 ">
        {/* LEFT */}
        <div className="col-span-9 space-y-6 ">
          <audio controls src={AUDIO_URL} className="w-full" />

          {questions.map((q) => {
            const selected = answers[q.id];

            return (
              <div
                key={q.id}
                ref={(el) => {
                  questionRefs.current[q.id] = el;
                }}
                className="bg-white p-6 rounded-xl border"
              >
                <p className="mb-4 font-medium">{q.question}</p>

                {q.options.map((opt) => {
                  const isCorrect = opt.startsWith(q.correctAnswer);
                  const isSelected = selected === opt;

                  let style = 'bg-white';

                  if (reviewMode) {
                    if (isCorrect) style = 'bg-green-100 border-green-500';
                    else if (isSelected) style = 'bg-red-100 border-red-500';
                  } else if (isSelected) {
                    style = 'bg-blue-50 border-blue-500';
                  }

                  return (
                    <label
                      key={opt}
                      className={`block p-3 border rounded mb-2 cursor-pointer ${style}`}
                    >
                      <input
                        type="radio"
                        name={`q${q.id}`}
                        checked={isSelected}
                        onChange={() => handleSelect(q.id, opt)}
                      />
                      <span className="ml-2">{opt}</span>
                    </label>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* RIGHT */}
        <div className="col-span-3">
          <div className="bg-white p-4 rounded-xl border sticky top-22">
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q) => (
                <div
                  key={q.id}
                  onClick={() => scrollToQuestion(q.id)}
                  className={`h-10 flex items-center justify-center border rounded cursor-pointer
                    ${answers[q.id] ? 'bg-green-500 text-white' : ''}
                  `}
                >
                  {q.id}
                </div>
              ))}
            </div>

            <button
              disabled={!isComplete}
              onClick={() => setShowModal(true)}
              className={`w-full mt-4 py-3 rounded text-white
                ${isComplete ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}
              `}
            >
              Nộp bài
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-80 text-center">
            <h2 className="text-lg font-bold mb-4">Kết quả</h2>
            <p className="mb-4">
              {score} / {total} câu đúng
            </p>

            <button
              onClick={() => {
                setReviewMode(true);
                setShowModal(false);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Xem lại đáp án
            </button>
          </div>
        </div>
      )}
    </main>
  );
}