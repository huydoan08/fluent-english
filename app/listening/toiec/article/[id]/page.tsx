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

type Result = {
  questionId: string;
  selected: string;
  correct: string;
  isCorrect: boolean;
};

export default function TOEICListeningPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [index, setIndex] = useState(0);
  const current = questions[index];

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(1);
  const [isRepeat, setIsRepeat] = useState(false);

  const [selected, setSelected] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  // 🧠 STATE lưu tất cả đáp án
  const [answers, setAnswers] = useState<Record<string, Result>>({});

  // 🔊 volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // 🔁 load state khi đổi câu
  useEffect(() => {
    const found = answers[current.id];

    if (found) {
      setSelected(found.selected);
      setIsSubmitted(true);
      setShowTranscript(true);
    } else {
      setSelected(null);
      setIsSubmitted(false);
      setShowTranscript(false);
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      setTimeout(() => {
        audioRef.current?.play();
        setIsPlaying(true);
      }, 300);
    }
  }, [index, answers]);

  // ▶️ play/pause
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

  // 🔁 replay
  const handleReplay = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  // ⏱
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    if (isRepeat && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      setIsPlaying(false);
    }
  };

  const formatTime = (t: number) => {
    if (!t) return '0:00';
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, '0');
    return `${m}:${s}`;
  };

  // 📊 seek
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;

    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  // ✅ submit → lưu vào state
  const handleSubmit = () => {
    if (!selected) return;

    const result: Result = {
      questionId: current.id,
      selected,
      correct: current.correct,
      isCorrect: selected === current.correct,
    };

    setAnswers((prev) => ({
      ...prev,
      [current.id]: result,
    }));

    setIsSubmitted(true);
    setShowTranscript(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link href="/listening/toiec" className="flex items-center gap-2 text-gray-600">
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
            onEnded={handleEnded}
          />

          <div className="flex items-center gap-3">
            <button
              onClick={handlePlay}
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center"
            >
              {isPlaying ? <Pause /> : <Play />}
            </button>

            <button
              onClick={handleReplay}
              className="px-3 py-1 bg-gray-200 rounded flex items-center gap-1"
            >
              <RotateCcw size={16} /> Replay
            </button>

            <button
              onClick={() => setIsRepeat(!isRepeat)}
              className={`px-3 py-1 rounded ${
                isRepeat ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              Repeat
            </button>

            {/* volume */}
            <div className="flex items-center gap-2">
              <Volume2 />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-32 cursor-pointer accent-blue-500 hover:accent-blue-600"
              />
            </div>
          </div>

          {/* progress */}
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
            const isCorrect = opt === current.correct;
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
                      : isSelected
                      ? 'bg-blue-100 border-blue-500'
                      : 'hover:bg-gray-100'
                  }
                `}
              >
                {opt}
              </div>
            );
          })}

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
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="font-semibold text-green-600">
              Correct: {current.correct}
            </p>
            <p>{current.explanation}</p>
          </div>
        )}

        {/* TRANSCRIPT */}
        <div className="bg-white rounded-2xl shadow p-6">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center gap-2 text-blue-600"
          >
            {showTranscript ? <EyeOff /> : <Eye />}
            Toggle Transcript
          </button>

          {showTranscript && (
            <p className="mt-4 text-gray-700">{current.transcript}</p>
          )}
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between">
          <button disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
            Prev
          </button>

          <button
            disabled={index === questions.length - 1}
            onClick={() => setIndex((i) => i + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}