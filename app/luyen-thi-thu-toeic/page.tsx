"use client";

import React, { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, Clock, ListChecks, Users, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import StartButton from "@/components/ui/start-button";

type Exam = {
  id: string;
  tag: "Listening" | "Reading";
  title: string; // tên hiển thị
  rating: number; // ví dụ 4.6
  ratingCount: number; // ví dụ 259
  durationText: string; // "35 Phút"
  questionCountText: string; // "31 Câu hỏi"
  attemptText: string; // "433 lượt làm"
};

const Pill = ({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-5 py-2 rounded-full text-sm font-semibold border transition-colors",
        active
          ? "bg-[#189DE0] border-[#189DE0] text-white shadow-sm"
          : "bg-white border-gray-200 text-gray-600 hover:border-[#189DE0]/50",
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default function ToeicExamListUI() {
  const [activeTag, setActiveTag] = useState<"All" | "Listening" | "Reading">(
    "All",
  );
  const [examSet, setExamSet] = useState<
    "Tất cả các đề" | "Đề Listening" | "Đề Reading"
  >("Tất cả các đề");
  const [examPart, setExamPart] = useState<
    "Tất cả các Part" | "Part 1" | "Part 2" | "Part 3"
  >("Tất cả các Part");
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/luyen-thi-thu-toeic/article/${id}`);
  };

  const exams: Exam[] = useMemo(
    () => [
      {
        id: "1",
        tag: "Listening",
        title: "Thi thử TOEIC online Đề 1 - Listening Part 1",
        rating: 4.6,
        ratingCount: 259,
        durationText: "35 Phút",
        questionCountText: "31 Câu hỏi",
        attemptText: "433 lượt làm",
      },
      {
        id: "2",
        tag: "Reading",
        title: "Thi thử TOEIC online Đề 1 - Reading Part 2",
        rating: 4.7,
        ratingCount: 165,
        durationText: "35 Phút",
        questionCountText: "46 Câu hỏi",
        attemptText: "566 lượt làm",
      },
      {
        id: "3",
        tag: "Reading",
        title: "Thi thử TOEIC online Đề 1 - Reading Part 2",
        rating: 4.9,
        ratingCount: 211,
        durationText: "35 Phút",
        questionCountText: "29 Câu hỏi",
        attemptText: "479 lượt làm",
      },
      {
        id: "4",
        tag: "Reading",
        title: "Thi thử TOEIC online Đề 1 - Reading Part 3",
        rating: 4.5,
        ratingCount: 297,
        durationText: "35 Phút",
        questionCountText: "29 Câu hỏi",
        attemptText: "652 lượt làm",
      },
      {
        id: "5",
        tag: "Listening",
        title: "Thi thử TOEIC online Đề 1 - Listening Part 2",
        rating: 4.5,
        ratingCount: 217,
        durationText: "30 Phút",
        questionCountText: "39 Câu hỏi",
        attemptText: "455 lượt làm",
      },
      {
        id: "6",
        tag: "Listening",
        title: "Thi thử TOEIC online Đề 1 - Listening Part 3",
        rating: 4.8,
        ratingCount: 166,
        durationText: "30 Phút",
        questionCountText: "30 Câu hỏi",
        attemptText: "412 lượt làm",
      },
    ],
    [],
  );

  const filtered = useMemo(() => {
    return exams.filter((e) => {
      if (activeTag !== "All" && e.tag !== activeTag) return false;
      // examSet/examPart: demo, nếu bạn có field tương ứng thì lọc theo dữ liệu thật
      return true;
    });
  }, [activeTag, exams, examSet, examPart]);

  return (
    <div className="w-full bg-white">
      {/* HERO XANH */}
      <section className="max-w-6xl mx-auto px-4 pt-10 md:pt-14 pb-10">
        <div className="bg-[#109FDE] rounded-2xl px-6 md:px-10 py-10 md:py-12 text-center text-white shadow-sm">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-white/90">
              <Star className="text-[#FFD55A]" size={18} />
              <span>Chinh phục mục tiêu 990 điểm</span>
            </span>
          </div>

          <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight">
            Luyện thi TOEIC Online Cấp tốc
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed">
            Cùng có kiến thức và tối đa hóa điểm số TOEIC với các bài thi thử
            online bám sát format mới nhất từ ETS. Luyện tập không giới hạn với
            các bộ đề Listening &amp; Reading đầy đủ, có đáp án và giải thích
            chi tiết. Hệ thống chấm điểm tự động giúp bạn theo dõi tiến độ và
            làm quen với áp lực thời gian như thi thật.
          </p>

          {/* pills */}
          <div className="mt-8 flex justify-center gap-4">
            <span className="px-6 py-2 rounded-full bg-[#E08B00] text-white text-sm font-bold shadow-[0_6px_0_rgba(0,0,0,0.06)]">
              TOEIC Listening
            </span>
            <span className="px-6 py-2 rounded-full bg-[#E08B00] text-white text-sm font-bold shadow-[0_6px_0_rgba(0,0,0,0.06)]">
              TOEIC Reading
            </span>
            <span className="px-6 py-2 rounded-full bg-[#E08B00] text-white text-sm font-bold shadow-[0_6px_0_rgba(0,0,0,0.06)]">
              Full Test
            </span>
          </div>

          {/* 2x2 feature boxes */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
            <div className="bg-[#0D86BE] border border-white/10 rounded-xl px-6 py-4 flex items-center gap-3 text-white/95">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded bg-white/10 border border-white/10">
                ✅
              </span>
              <span className="font-bold">Format đề thi mới nhất</span>
            </div>
            <div className="bg-[#0D86BE] border border-white/10 rounded-xl px-6 py-4 flex items-center gap-3 text-white/95">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded bg-white/10 border border-white/10">
                ℹ️
              </span>
              <span className="font-bold">
                Giao diện thân thiện, dễ sử dụng
              </span>
            </div>
            <div className="bg-[#0D86BE] border border-white/10 rounded-xl px-6 py-4 flex items-center gap-3 text-white/95">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded bg-white/10 border border-white/10">
                📄
              </span>
              <span className="font-bold">
                Đề thi có độ khó tương đương thi thật
              </span>
            </div>
            <div className="bg-[#0D86BE] border border-white/10 rounded-xl px-6 py-4 flex items-center gap-3 text-white/95">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded bg-white/10 border border-white/10">
                ✉️
              </span>
              <span className="font-bold">Xem điểm và đáp án chi tiết</span>
            </div>
          </div>

          <div className="mt-9">
            <button className="px-10 py-3 rounded-full bg-[#E08B00] text-white font-extrabold shadow-[0_10px_18px_rgba(0,0,0,0.18)] hover:brightness-105 transition">
              Bắt đầu luyện đề ngay
            </button>
          </div>
        </div>
      </section>

      {/* TITLE LIST */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#159FDB]">
            Danh sách đề thi TOEIC
          </h2>
          <div className="mt-3 mx-auto w-24 h-1.5 rounded bg-[#159FDB]" />
        </div>

        {/* Disclaimer box */}
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-3xl bg-white border border-[#BCE8FF] rounded-xl px-5 md:px-8 py-4 text-gray-600 text-xs md:text-sm italic">
            <span>
              Lưu ý: Đây là một bài thi thử được biên soạn nhằm mục đích luyện
              tập và đánh giá năng lực cá nhân. Nội dung và cấu trúc đề thi có
              thể không hoàn toàn giống với đề thi thật. Chúng tôi không chịu
              trách nhiệm về kết quả thi chính thức của bạn.
            </span>
          </div>
        </div>

        {/* FILTER ROW */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Pill
            active={activeTag === "All"}
            onClick={() => setActiveTag("All")}
          >
            Tất cả
          </Pill>
          <Pill
            active={activeTag === "Listening"}
            onClick={() => setActiveTag("Listening")}
          >
            Listening
          </Pill>
          <Pill
            active={activeTag === "Reading"}
            onClick={() => setActiveTag("Reading")}
          >
            Reading
          </Pill>

          {/* demo selects */}
          <div className="flex flex-wrap items-center gap-3 mt-2 md:mt-0">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              Lọc theo đề:
            </label>
            <div className="relative">
              <select
                value={examSet}
                onChange={(e) => setExamSet(e.target.value as any)}
                className="appearance-none bg-white border border-gray-200 rounded-full px-4 py-2 pr-9 text-sm text-gray-700 shadow-sm"
              >
                <option>Tất cả các đề</option>
                <option>Đề Listening</option>
                <option>Đề Reading</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <label className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              Lọc theo Part:
            </label>
            <div className="relative">
              <select
                value={examPart}
                onChange={(e) => setExamPart(e.target.value as any)}
                className="appearance-none bg-white border border-gray-200 rounded-full px-4 py-2 pr-9 text-sm text-gray-700 shadow-sm"
              >
                <option>Tất cả các Part</option>
                <option>Part 1</option>
                <option>Part 2</option>
                <option>Part 3</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <input
              placeholder="Tìm kiếm theo tên đề thi.."
              className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-700 shadow-sm w-full sm:w-56"
            />
          </div>
        </div>

        {/* GRID CARDS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((e) => (
            <Card
              key={e.id}
              className="
                  cursor-pointer 
                  rounded-2xl 
                  border border-gray-200 
                  shadow-sm 
                  overflow-hidden
                  transition-all duration-300 ease-out
                  transform
                  hover:-translate-y-2
                  hover:shadow-xl
                 "
              onClick={() => handleClick(e.id)}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <span className="text-[#159FDB] bg-[#E9F7FF] border border-[#CFEFFF] rounded-full text-xs font-bold px-3 py-1">
                    {e.tag}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-extrabold text-gray-900 leading-snug">
                  {e.title}
                </h3>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {"★★★★★".split("").map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-[#F59E0B] text-[#F59E0B]"
                        style={{ opacity: i < Math.round(e.rating) ? 1 : 0.35 }}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-bold text-gray-800">
                      {e.rating.toFixed(1)}
                    </span>{" "}
                    <span className="text-gray-500">({e.ratingCount})</span>
                  </div>
                </div>

                <div className="mt-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-2">
                      <Clock size={16} className="text-gray-400" />
                      {e.durationText}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <ListChecks size={16} className="text-gray-400" />
                      {e.questionCountText}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-2">
                      <Users size={16} className="text-gray-400" />
                      {e.attemptText}
                    </span>
                  </div>
                </div>
                <StartButton id={e.id} />
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
