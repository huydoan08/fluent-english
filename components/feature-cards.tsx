'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Headphones,
  FileText,
  BarChart3,
  Brain,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export function FeatureCards() {
  const features: Feature[] = [
    {
      icon: <Headphones className="w-10 h-10" />,
      title: 'Listening Practice',
      description: 'Practice TOEIC Part 1–4 with real audio',
      link: '/listening/toiec',
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Reading Practice',
      description: 'Master Part 5–7 with real exam questions',
      link: '/reading',
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Score Tracking',
      description: 'Analyze your performance and improve',
      link: '/dashboard',
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'AI Explanations',
      description: 'Understand answers with smart feedback',
      link: '/ai',
    },
  ];

  // animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            TOEIC Practice Features
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to improve your TOEIC score efficiently
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <Card className="relative bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition overflow-hidden">

                  {/* GLOW EFFECT */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-transparent" />

                  {/* ICON */}
                  <div className="flex justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 text-center">
                    {feature.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 text-sm md:text-base mb-6 text-center">
                    {feature.description}
                  </p>

                  {/* BUTTON */}
                  <Link href={feature.link}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3">
                      Start Practice
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}