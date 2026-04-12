'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <div className="w-full bg-blue-500 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* CTA Content */}
          <div className="text-white space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold">
              Start Your Journey to Fluent English Today
            </h2>
            <p className="text-base md:text-lg text-blue-500">
              Join thousands of students who are already improving their English skills with our proven methods and expert guidance.
            </p>
            <Button className="bg-white text-blue-500 hover:bg-gray-100 font-bold px-6 md:px-8 py-3 text-base md:text-lg">
              Enroll Now - Free Trial
            </Button>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-500 p-4 md:p-6 rounded-lg">
              <p className="text-white font-bold text-base md:text-lg">✓ Expert Teachers</p>
              <p className="text-blue-500 text-sm mt-2">Native English speakers with years of experience</p>
            </div>
            <div className="bg-blue-500 p-4 md:p-6 rounded-lg">
              <p className="text-white font-bold text-base md:text-lg">✓ Flexible Schedule</p>
              <p className="text-blue-500 text-sm mt-2">Learn at your own pace, anytime, anywhere</p>
            </div>
            <div className="bg-blue-500 p-4 md:p-6 rounded-lg">
              <p className="text-white font-bold text-base md:text-lg">✓ Affordable Rates</p>
              <p className="text-blue-500 text-sm mt-2">High-quality education at reasonable prices</p>
            </div>
            <div className="bg-blue-500 p-4 md:p-6 rounded-lg">
              <p className="text-white font-bold text-base md:text-lg">✓ Guaranteed Results</p>
              <p className="text-blue-500 text-sm mt-2">Improve your skills or money back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
