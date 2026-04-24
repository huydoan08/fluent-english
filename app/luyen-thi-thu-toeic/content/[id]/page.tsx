"use client";

import { Assignment } from "@/components/assignment";
import Loading from "@/components/loading";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TestPage() {
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
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!exam) {
    return <div className="p-10 text-center">Không tìm thấy đề</div>;
  }

  return (
    <main className="min-h-screen bg-[#f5f6f8]">
      <Assignment
        questions={exam.questions}
        AUDIO_URL={exam.audio}
        part={exam.part}
      />
    </main>
  );
}
