'use client';

import { Button } from '@/components/ui/button';
import { BarChart3, Clock, Brain, Trophy } from 'lucide-react';
import Link from 'next/link';

export function CtaSection() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-600 to-blue-800 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Boost Your TOEIC Score Faster 🚀
            </h2>

            <p className="text-blue-100 text-base md:text-lg">
              Practice with real TOEIC questions, track your progress, and improve your score with a structured learning system.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/exam/full">
                <Button className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-6 py-3 text-lg">
                  Start Full Test
                </Button>
              </Link>

              <Link href="/listening/toiec">
                <Button className="border-2 border-white text-white hover:bg-blue-700 font-bold px-6 py-3 text-lg">
                  Practice Listening
                </Button>
              </Link>
            </div>

            {/* SCORE PROOF */}
            <div className="pt-4 text-sm text-blue-200">
              Average improvement: <span className="font-bold text-white">+120 points</span> in 4 weeks
            </div>
          </div>

          {/* RIGHT - BENEFITS (REAL TOEIC VALUE) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* ITEM */}
            <div className="bg-white/10 backdrop-blur p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-white" />
                <p className="text-white font-semibold">Score Tracking</p>
              </div>
              <p className="text-blue-200 text-sm">
                Monitor your TOEIC progress with detailed analytics
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-white" />
                <p className="text-white font-semibold">Real Exam Timer</p>
              </div>
              <p className="text-blue-200 text-sm">
                Practice under real TOEIC exam conditions
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="text-white" />
                <p className="text-white font-semibold">AI Feedback</p>
              </div>
              <p className="text-blue-200 text-sm">
                Get instant explanations and learning insights
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="text-white" />
                <p className="text-white font-semibold">200+ Tests</p>
              </div>
              <p className="text-blue-200 text-sm">
                Full-length TOEIC tests and targeted practice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}