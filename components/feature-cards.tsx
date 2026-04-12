'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Zap, Volume2, Headphones } from 'lucide-react';
import Link from 'next/link';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export function FeatureCards() {
  const features: Feature[] = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Free Lessons',
      description: 'Practice Your Listening',
      link: '#free-lessons',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'AI Chatbot',
      description: 'English Assistant Roleplay',
      link: '#ai-chatbot',
    },
    {
      icon: <Volume2 className="w-12 h-12" />,
      title: 'Three Minute English',
      description: 'Learn New Words',
      link: '#three-minute',
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: 'Shadowing',
      description: 'Develop Your English Flow',
      link: '#shadowing',
    },
  ];

  return (
    <div className="w-full py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Learning Methods
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Choose from our variety of proven learning methods to improve your English skills
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                {feature.description}
              </p>
              <Link href={feature.link}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3">
                  Learn More
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
