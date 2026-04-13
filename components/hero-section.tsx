'use client';

import { Button } from '@/components/ui/button';
import {
  PlayCircle,
  BarChart3,
  Headphones,
  FileText,
} from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              MASTER TOEIC LISTENING & READING
            </h1>

            <p className="text-blue-100 text-base md:text-lg">
              Practice real TOEIC questions, track your progress, and improve your score with a structured learning system.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/exam/full">
                <Button className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-6 py-3 text-lg flex items-center gap-2">
                  <PlayCircle size={20} />
                  Start Full Test
                </Button>
              </Link>

              <Link href="/listening/toiec">
                <Button className="border-2 border-white text-white hover:bg-blue-700 px-6 py-3 text-lg font-bold">
                  Practice Listening
                </Button>
              </Link>
            </div>

            {/* QUICK ACCESS */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { label: 'Part 1', href: '/listening/part1' },
                { label: 'Part 2', href: '/listening/part2' },
                { label: 'Part 3', href: '/listening/part3' },
                { label: 'Part 4', href: '/listening/part4' },
                { label: 'Part 5', href: '/reading/part5' },
                { label: 'Part 6', href: '/reading/part6' },
                { label: 'Part 7', href: '/reading/part7' },
              ].map((part) => (
                <Link key={part.label} href={part.href}>
                  <span className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm cursor-pointer transition">
                    {part.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-blue-500">
              <div>
                <p className="text-2xl md:text-3xl font-bold">990</p>
                <p className="text-sm text-blue-200">Max Score</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">200+</p>
                <p className="text-sm text-blue-200">Practice Tests</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">AI</p>
                <p className="text-sm text-blue-200">Smart Feedback</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 space-y-6">
            
            {/* MOCK PLAYER */}
            <div className="bg-white text-black rounded-xl p-4 shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <Headphones size={18} />
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-sm">
                    Listening - Part 4
                  </p>
                  <p className="text-xs text-gray-500">
                    3 questions · 1 audio
                  </p>
                </div>

                <PlayCircle className="text-blue-600" />
              </div>

              {/* PROGRESS */}
              <div className="mt-4 h-2 bg-gray-200 rounded overflow-hidden">
                <div className="h-full bg-blue-500 w-[40%]" />
              </div>
            </div>

            {/* MOCK SCORE */}
            <div className="bg-white text-black rounded-xl p-4 shadow flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Your Score</p>
                <p className="text-2xl font-bold">720</p>
              </div>

              <BarChart3 className="text-blue-600" />
            </div>

            {/* MOCK READING */}
            <div className="bg-white text-black rounded-xl p-4 shadow flex items-center gap-3">
              <FileText className="text-blue-600" />
              <p className="text-sm font-medium">
                Reading Practice Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}