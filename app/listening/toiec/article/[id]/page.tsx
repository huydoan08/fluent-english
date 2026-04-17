'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, ChevronLeft, Eye, EyeOff, RotateCcw } from 'lucide-react';
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

  const TOTAL_QUESTIONS = 10;

  const [index, setIndex] = useState(0);
  const current = questions[index];

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(1);
  const [isRepeat, setIsRepeat] = useState(false);

  const [selected, setSelected] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // dùng để đổi style hiển thị
  const [showTranscript, setShowTranscript] = useState(false);

  // 🧠 STATE lưu đáp án theo questionId
  const [answers, setAnswers] = useState<Record<string, Result>>({});

  // 🪟 Modal kết quả
  const [showResultModal, setShowResultModal] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const isLastQuestion = index === questions.length - 1;

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
      setIsSubmitted(false); // submit thật sự chỉ ở cuối, nên không dùng trạng thái "submitted" cho từng câu
      setShowTranscript(true); // tuỳ bạn, có thể giữ false nếu muốn
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
  }, [index, answers, current.id]);

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

  // ✅ Khi user chọn đáp án -> lưu vào answers ngay
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

  // ✅ Submit ở câu cuối -> tính điểm và mở modal
  const handleFinalSubmit = () => {
    // đảm bảo đã trả lời đủ 10 câu (tuỳ bạn, có thể bỏ check)
    setShowResultModal(true)
    const answeredCount = Object.keys(answers).length;

    if (answeredCount < TOTAL_QUESTIONS) {
      // không dùng alert theo requirement không nói; bạn có thể đổi UI báo lỗi nếu muốn
      // Nếu muốn tối giản: chỉ return
      return;
    }

    const computedCorrectCount = Object.values(answers).filter((a) => a.isCorrect).length;

    setCorrectCount(computedCorrectCount);
    setShowResultModal(true);
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

            <button
              onClick={() => setIsRepeat(!isRepeat)}
              className={`px-3 py-1 rounded transition ${
                isRepeat ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
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
                onClick={() => handleSelectOption(opt)}
                className={`p-3 border rounded cursor-pointer transition
                  ${
                    isSelected
                      ? 'bg-blue-100 border-blue-500'
                      : 'hover:bg-gray-100'
                  }
                `}
              >
                {opt}
                {/* Nếu bạn muốn show đúng/sai sau khi modal hiện, có thể thêm UI tại đây */}
                {/* Hiện tại chỉ highlight theo selection */}
                {isSelected && showResultModal && isCorrect && (
                  <span className="ml-2 text-green-600 font-semibold">✓</span>
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

          {showTranscript && <p className="mt-4 text-gray-700">{current.transcript}</p>}
        </div>

        {/* NAVIGATION + submit cuối */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            {/* Prev */}
            <button
              disabled={index === 0}
              onClick={() => setIndex((i) => i - 1)}
              className={`px-4 py-2 rounded font-medium transition border ${
                index === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
              }`}
            >
              Prev
            </button>

            {/* Next */}
            <button
              disabled={index === questions.length - 1}
              onClick={() => setIndex((i) => i + 1)}
              className={`px-4 py-2 rounded font-medium transition border ${
                index === questions.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                  : 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600'
              }`}
            >
              Next
            </button>
          </div>

          {/* Submit ở câu cuối */}
          {isLastQuestion && (
            <button
              onClick={handleFinalSubmit}
              className="w-full mt-2 bg-green-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Submit (View score)
            </button>
          )}
        </div>
      </div>

      {/* MODAL KẾT QUẢ */}
      {showResultModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setShowResultModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold">Kết quả bài làm</h3>

            <div className="mt-4 text-center">
              <div className="text-4xl font-bold text-blue-600">
                {correctCount}/{TOTAL_QUESTIONS}
              </div>
              <div className="mt-2 text-gray-600">
                Bạn đã trả lời đúng {correctCount} câu trên {TOTAL_QUESTIONS} câu.
              </div>
            </div>

            <button
              onClick={() => setShowResultModal(false)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}