'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Headphones, CheckCircle } from 'lucide-react';

interface Lesson {
  id: string;
  number: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  questions: number;
  completed?: boolean;
}

const lessons: Lesson[] = [
  {
    id: '632',
    number: 632,
    title: 'Telephone Message - Expense Report',
    description:
      'Listen to a conversation about a travel expense report and answer the questions.',
    image:
      'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=200&h=160&fit=crop',
    duration: '1:10',
    questions: 3,
    completed: false,
  },
  {
    id: '631',
    number: 631,
    title: 'Business Discussion - Amazon Project',
    description:
      'A discussion about environmental issues and business decisions.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=160&fit=crop',
    duration: '1:25',
    questions: 3,
    completed: true,
  },
  {
    id: '630',
    number: 630,
    title: 'Personal Story - Lost Ring',
    description:
      'A story about persistence and finding a lost valuable item.',
    image:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=160&fit=crop',
    duration: '1:05',
    questions: 3,
    completed: false,
  },
];

export default function TOEICListeningList() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            TOEIC Listening - Part 4
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

                  {/* META */}
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Headphones className="w-4 h-4" />
                      {lesson.duration}
                    </div>

                    <span>{lesson.questions} questions</span>
                  </div>
                </div>

                {/* STATUS */}
                <div className="flex items-center">
                  {lesson.completed ? (
                    <CheckCircle className="text-green-500 w-6 h-6" />
                  ) : (
                    <span className="text-xs text-gray-400">
                      Not started
                    </span>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}