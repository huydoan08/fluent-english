'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Headphones, CheckCircle } from 'lucide-react';
import { lessons } from '../../../resource/lesson';

export default function TOEICListeningList() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            TOEIC Listening Practice
          </h1>
          <p className="text-gray-600 mt-2">
            Practice short talks and answer questions like the real TOEIC test.
          </p>
        </div>

        {/* PROGRESS */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border">
          <p className="text-sm text-gray-500 mb-2">Your Progress</p>
          <div className="h-3 bg-gray-200 rounded overflow-hidden">
            <div className="h-full bg-blue-500 w-[40%]" />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            2 / 5 lessons completed
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-6">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/listening/toiec/article/${lesson.id}`}
            >
              <article className="group flex gap-6 bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition cursor-pointer">
                
                {/* NUMBER */}
                <div className="flex-shrink-0">
                  <div className="bg-yellow-400 w-16 h-16 flex flex-col items-center justify-center rounded-lg">
                    <span className="text-white font-bold text-sm">
                      #{lesson.number}
                    </span>
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* IMAGE */}
                <div className="w-40 h-28 relative flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={lesson.image}
                    alt={lesson.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {lesson.title}
                  </h2>

                  <p className="text-gray-600 mt-1 line-clamp-2">
                    {lesson.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}