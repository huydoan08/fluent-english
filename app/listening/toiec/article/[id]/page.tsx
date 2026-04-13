'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  ChevronLeft,
  Eye,
  EyeOff,
} from 'lucide-react';
import Link from 'next/link';

type Question = {
  id: string;
  audio: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  transcript: string;
};

const data: Question = {
  id: 'q1',
  audio: '/toeic/part4-01.mp3',
  question: 'What is the main purpose of the call?',
  options: [
    'To report an issue',
    'To request information',
    'To confirm a booking',
    'To cancel an order',
  ],
  correct: 'To report an issue',
  explanation:
    'The caller mentions problems with the expense report and asks for correction.',
  transcript: `Hello, Mr. Watson. This is Jim Taylor from Accounting. I’m calling regarding the travel expense report you turned in yesterday...`,
};

export default function TOEICListeningPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [selected, setSelected] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [showTranscript, setShowTranscript] = useState(false);

  // ▶️ Play / Pause
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

  // ⏱ time update
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  // 📊 format time
  const formatTime = (t: number) => {
    if (!t) return '0:00';
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, '0');
    return `${m}:${s}`;
  };

  // ✅ Submit
  const handleSubmit = () => {
    if (!selected) return;
    setIsSubmitted(true);
    setShowTranscript(true);
  };

  // 🔁 Seek
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;

    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-gray-600">
            <ChevronLeft />
            Back
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        {/* AUDIO PLAYER */}
        <div className="bg-white rounded-2xl shadow p-6 space-y-4">
          <audio
            ref={audioRef}
            src={data.audio}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
          />

          <button
            onClick={handlePlay}
            className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <div onClick={handleSeek} className="cursor-pointer">
            <div className="h-2 bg-gray-200 rounded overflow-hidden">
              <div
                className="h-full bg-blue-500"
                style={{
                  width: `${
                    duration ? (progress / duration) * 100 : 0
                  }%`,
                }}
              />
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <Volume2 className="w-5 h-5 text-gray-600" />
        </div>

        {/* QUESTION */}
        <div className="bg-white rounded-2xl shadow p-6 space-y-4">
          <h2 className="text-lg font-semibold">{data.question}</h2>

          <div className="space-y-3">
            {data.options.map((opt) => {
              const isCorrect = opt === data.correct;
              const isSelected = opt === selected;

              return (
                <div
                  key={opt}
                  onClick={() => !isSubmitted && setSelected(opt)}
                  className={`p-3 border rounded cursor-pointer transition
                    ${
                      isSubmitted
                        ? isCorrect
                          ? 'bg-green-100 border-green-500'
                          : isSelected
                          ? 'bg-red-100 border-red-500'
                          : ''
                        : 'hover:bg-gray-100'
                    }
                  `}
                >
                  {opt}
                </div>
              );
            })}
          </div>

          {!isSubmitted && (
            <button
              onClick={handleSubmit}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          )}
        </div>

        {/* RESULT */}
        {isSubmitted && (
          <div className="bg-white rounded-2xl shadow p-6 space-y-3">
            <p className="font-semibold text-green-600">
              ✅ Correct Answer: {data.correct}
            </p>
            <p className="text-gray-700">{data.explanation}</p>
          </div>
        )}

        {/* TRANSCRIPT */}
        <div className="bg-white rounded-2xl shadow p-6">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center gap-2 text-blue-600"
          >
            {showTranscript ? <EyeOff /> : <Eye />}
            {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
          </button>

          <div
            className={`transition-all duration-500 overflow-hidden ${
              showTranscript ? 'max-h-[1000px] mt-4' : 'max-h-0'
            }`}
          >
            <p className="text-gray-700 leading-relaxed">
              {data.transcript}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}