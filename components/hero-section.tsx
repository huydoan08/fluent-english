'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-600 to-blue-700 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-balance leading-tight">
              JUMPSTART YOUR ENGLISH
            </h1>
            <p className="text-base md:text-lg text-blue-100">
              Learn English through engaging stories and interactive lessons. Master fluent English with proven methods used by thousands of students worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-6 md:px-8 py-2 md:py-3 text-base md:text-lg flex items-center justify-center gap-2">
                <PlayCircle size={20} />
                Free English Video Course
              </Button>
              <Button className="border-2 border-white text-white hover:bg-blue-700 font-bold px-6 md:px-8 py-2 md:py-3 text-base md:text-lg">
                JOIN NOW
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-blue-500">
              <div>
                <p className="text-2xl md:text-3xl font-bold">50K+</p>
                <p className="text-sm text-blue-100">Active Students</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">100+</p>
                <p className="text-sm text-blue-100">Video Lessons</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">24/7</p>
                <p className="text-sm text-blue-100">Support</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex justify-center">
            <div className="w-full max-w-sm h-96 bg-blue-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <PlayCircle size={80} className="mx-auto mb-4" />
                <p className="text-lg font-bold">Video Course Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
