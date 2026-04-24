"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Globe, Briefcase } from "lucide-react";
import { useRef } from "react";

interface Exam {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const exams: Exam[] = [
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Luyện thi TOEIC",
      description:
        "Chứng chỉ tiếng Anh giao tiếp quốc tế, tập trung vào môi trường công sở.",
      link: "/luyen-thi-thu-toeic",
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
    <>
      <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        {/* BACKGROUND */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
          }}
        />

        {/* OVERLAY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-black"
        />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            Chinh Phục Mọi Kỳ Thi <br /> Chứng Chỉ
          </motion.h1>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-200 text-base md:text-lg mb-8"
          >
            Nền tảng luyện thi toàn diện, cung cấp lộ trình học tập và đề thi
            cập nhật nhất giúp bạn đạt được điểm số mơ ước.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div
              onClick={handleScroll}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(59,130,246,0.4)",
                  "0px 0px 20px rgba(59,130,246,0.6)",
                  "0px 0px 0px rgba(59,130,246,0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-block rounded-full cursor-pointer"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full font-semibold">
                Bắt đầu Luyện thi Ngay →
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* TARGET SECTION */}
      <div
        ref={sectionRef}
        className="w-full py-16 md:py-24 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Chọn Kỳ Thi Của Bạn
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {exams.map((exam, index) => (
              <Link
                key={index}
                href={exam.link}
                className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                <motion.div variants={item}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition"
                  >
                    <div className="flex justify-center text-blue-600 mb-4">
                      {exam.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      {exam.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mb-6">
                      {exam.description}
                    </p>
                    <div className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Bắt đầu ngay →
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}