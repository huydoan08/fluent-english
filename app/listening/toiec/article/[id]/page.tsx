'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  ChevronLeft,
  Eye,
  EyeOff,
  RotateCcw,
} from 'lucide-react';
import Link from 'next/link';
import { questions } from '../../../../../resource/question';
import { Fireworks } from '@/components/fire-work';

type Result = {
  questionId: string;
  selected: string;
  correct: string;
  isCorrect: boolean;
};

export default function TOEICListeningPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const TOTAL_QUESTIONS = 10;

  const [index, setIndex] = useState(0);
  const current = questions[index];

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(1);

  const [selected, setSelected] = useState<string | null>(null);
  const [showTranscript, setShowTranscript] = useState(false);

  const [answers, setAnswers] = useState<Record<string, Result>>({});

  const [showResultModal, setShowResultModal] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const isLastQuestion = index === questions.length - 1;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const found = answers[current.id];

    if (found) {
      setSelected(found.selected);
    } else {
      setSelected(null);
      setShowTranscript(false);
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [index, answers, current.id]);

  const handlePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleReplay = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const formatTime = (t: number) => {
    if (!t) return '0:00';
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;

    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  const handleSelectOption = (opt: string) => {
    setSelected(opt);

    const result: Result = {
      questionId: current.id,
      selected: opt,
      correct: current.correct,
      isCorrect: opt === current.correct,
    };

    setAnswers((prev) => ({
      ...prev,
      [current.id]: result,
    }));
  };

  const handleFinalSubmit = () => {
    const latestAnswers = {
      ...answers,
      ...(selected && {
        [current.id]: {
          questionId: current.id,
          selected,
          correct: current.correct,
          isCorrect: selected === current.correct,
        },
      }),
    };

    const answeredCount = Object.keys(latestAnswers).length;

    if (answeredCount < TOTAL_QUESTIONS) {
      return;
    }

    const computedCorrectCount = Object.values(latestAnswers).filter(
      (a) => a.isCorrect
    ).length;

    setCorrectCount(computedCorrectCount);
    setShowResultModal(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link
            href="/listening/toiec"
            className="flex items-center gap-2 text-gray-600"
          >
            <ChevronLeft />
            Back
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        {/* AUDIO */}
        <div className="bg-white rounded-2xl shadow p-6 space-y-4">
          <audio
            ref={audioRef}
            src={current.audio}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />

          <div className="flex items-center gap-3">
            <button
              onClick={handlePlay}
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition"
            >
              {isPlaying ? <Pause /> : <Play />}
            </button>

            <button
              onClick={handleReplay}
              className="px-3 py-1 bg-gray-200 rounded flex items-center gap-1 hover:bg-gray-300 transition"
            >
              <RotateCcw size={16} /> Replay
            </button>

            <div className="flex items-center gap-2">
              <Volume2 />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-32 cursor-pointer"
              />
            </div>
          </div>

          <div onClick={handleSeek} className="cursor-pointer">
            <div className="h-2 bg-gray-200 rounded overflow-hidden">
              <div
                className="h-full bg-blue-500"
                style={{
                  width: `${duration ? (progress / duration) * 100 : 0}%`,
                }}
              />
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {/* QUESTION */}
        <div className="bg-white rounded-2xl shadow p-6 space-y-4">
          <h2 className="text-lg font-semibold">{current.question}</h2>

          {current.options.map((opt) => {
            const result = answers[current.id];
            const isSelected = opt === selected;
            const isCorrect = opt === current.correct;

            let extraClass = '';

            if (showResultModal) {
              if (isCorrect) extraClass = 'bg-green-100 border-green-500';
              else if (isSelected) extraClass = 'bg-red-100 border-red-500';
            } else {
              if (isSelected) extraClass = 'bg-blue-100 border-blue-500';
            }

            return (
              <div
                key={opt}
                onClick={() => handleSelectOption(opt)}
                className={`p-3 border rounded cursor-pointer transition ${extraClass}`}
              >
                {opt}

                {showResultModal && isCorrect && (
                  <span className="ml-2 text-green-600 font-semibold">✓</span>
                )}

                {showResultModal && isSelected && !isCorrect && (
                  <span className="ml-2 text-red-600 font-semibold">✗</span>
                )}
              </div>
            );
          })}
        </div>

        {/* TRANSCRIPT */}
        <div className="bg-white rounded-2xl shadow p-6">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
          >
            {showTranscript ? <EyeOff /> : <Eye />}
            Toggle Transcript
          </button>

          {showTranscript && (
            <p className="mt-4 text-gray-700">{current.transcript}</p>
          )}
        </div>

        {/* NAV */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <button
              disabled={index === 0}
              onClick={() => setIndex((i) => i - 1)}
              className="px-4 py-2 border rounded"
            >
              Prev
            </button>

            <button
              disabled={index === questions.length - 1}
              onClick={() => setIndex((i) => i + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Next
            </button>
          </div>

          {isLastQuestion && (
            <button
              onClick={handleFinalSubmit}
              className="w-full bg-green-600 text-white py-3 rounded-xl"
            >
              Submit (View score)
            </button>
          )}
        </div>
      </div>

      {/* MODAL */}
      {showResultModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setShowResultModal(false)}
        >
          <div
            className="relative bg-white rounded-2xl p-6 w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 🎆 PHÁO HOA (chỉ thêm dòng này) */}
            <Fireworks />

            <h3 className="text-lg font-semibold">Kết quả</h3>

            <div className="text-center mt-4">
              <div className="text-4xl font-bold text-blue-600">
                {correctCount}/{TOTAL_QUESTIONS}
              </div>
              <p className="text-gray-600 mt-2">
                Bạn đúng {correctCount} câu
              </p>
            </div>

            <button
              onClick={() => setShowResultModal(false)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}