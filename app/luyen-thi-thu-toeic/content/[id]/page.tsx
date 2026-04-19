'use client';

import { Assignment } from '@/components/assignment';
import { exams } from '@/resource/exams';
import { useParams } from 'next/navigation';

export default function TestPage() {
  const params = useParams();
  const id = params.id as string;
  const exam = exams.find((e) => e.id === id);
  if (!exam) {
    return <div className="p-10 text-center">Không tìm thấy đề</div>;
  }
  return (
    <main className="min-h-screen bg-[#f5f6f8]">
      <main className="min-h-screen bg-[#f5f6f8]">
        <Assignment questions={exam.questions} AUDIO_URL={exam.audio} />
      </main>
    </main>
  );
}