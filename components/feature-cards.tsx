'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Languages,
  Globe,
  GraduationCap,
  Landmark,
  Briefcase,
} from 'lucide-react';

interface Exam {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export function FeatureCards() {
  const exams: Exam[] = [
    {
      icon: <Languages className="w-10 h-10" />,
      title: 'Luyện thi TOPIK',
      description:
        'Dành cho người học tiếng Hàn, chinh phục các cấp độ từ sơ cấp đến cao cấp.',
      link: '/topik',
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Luyện thi IELTS',
      description:
        'Chứng chỉ tiếng Anh hàng đầu cho du học, làm việc và định cư quốc tế.',
      link: '/ielts',
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: 'Luyện thi APTIS',
      description:
        'Bài thi đánh giá năng lực tiếng Anh linh hoạt và hiện đại của Hội đồng Anh.',
      link: '/aptis',
    },
    {
      icon: <Landmark className="w-10 h-10" />,
      title: 'Luyện thi HSK',
      description:
        'Kỳ thi năng lực Hán ngữ quốc tế, thước đo trình độ tiếng Trung của bạn.',
      link: '/hsk',
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Luyện thi TOEIC',
      description:
        'Chứng chỉ tiếng Anh giao tiếp quốc tế, tập trung vào môi trường công sở.',
      link: '/toeic',
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Chọn Kỳ Thi Của Bạn
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {exams.map((exam, index) => (
            <motion.div key={index} variants={item}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition"
              >
                {/* ICON */}
                <div className="flex justify-center text-blue-600 mb-4">
                  {exam.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {exam.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm md:text-base mb-6">
                  {exam.description}
                </p>

                {/* LINK */}
                <Link
                  href={exam.link}
                  className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Bắt đầu ngay →
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}