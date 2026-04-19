'use client';

import { useState, useMemo } from 'react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
const questions = [
  // 1-3
  {
    id: 1,
    question: `Question 73: What type of company does the speaker work for?`,
    options: ['A: A technology consulting firm', 'B: A landscaping company', 'C: A construction company', 'D: A law firm'],
  },
  {
    id: 2,
    question: `Question 74: What good news does the speaker share about the company?`,
    options: ['A: It won a city contract.', 'B: It will expand its headquarters.', 'C: It has won an industry award.', 'D: Its profits have increased.'],
  },
  {
    id: 3,
    question: `Question 75: What does the speaker say he will do later this week?`,
    options: ['A: Purchase new equipment', 'B: Update some software', 'C: Contact an advertising agency', 'D: Post some job openings'],
  },

  // 4-6
  {
    id: 4,
    question: `Question 76: Where does the talk most likely take place?`,
    options: ['A: At a press conference', 'B: At a trade show', 'C: At an awards ceremony', 'D: At a sports competition'],
  },
  {
    id: 5,
    question: `Question 77: What aspect of a product does the speaker mention?`,
    options: ['A: Its improved graphics', 'B: Its fast download speeds', 'C: Its smartphone compatibility', 'D: Its high-quality audio'],
  },
  {
    id: 6,
    question: `Question 78: What does the speaker say the listeners can do after the talk?`,
    options: ['A: Start a free trial', 'B: Speak to a representative', 'C: Enjoy some refreshments', 'D: Enter a contest'],
  },

  // 7-9
  {
    id: 7,
    question: `Question 79: Where is the meeting most likely taking place?`,
    options: ['A: At a farm', 'B: At a cafeteria', 'C: At a warehouse', 'D: At a grocery store'],
  },
  {
    id: 8,
    question: `Question 80: What does the speaker say is required?`,
    options: ['A: Requesting vacation time in advance', 'B: Updating employee contact information', 'C: Wearing the appropriate clothing', 'D: Completing some employee training'],
  },
  {
    id: 9,
    question: `Question 81: What did the speaker find out about this week?`,
    options: ['A: Business has been slower than usual.', 'B: Inventory has been running low.', 'C: Employees have been missing meetings.', 'D: Workers have been taking extended breaks.'],
  },

  // 10-12
  {
    id: 10,
    question: `Question 82: What type of business is coming to an area?`,
    options: ['A: A research facility', 'B: A delivery service', 'C: A computer repair company', 'D: An electronics manufacturer'],
  },
  {
    id: 11,
    question: `Question 83: Why was a specific location chosen?`,
    options: ['A: It is near public transportation.', 'B: It is affordable.', 'C: It is near an educational institution.', 'D: It will attract a lot of customers.'],
  },
  {
    id: 12,
    question: `Question 84: How can the listeners find out more information?`,
    options: ['A: By attending an event', 'B: By visiting a Web site', 'C: By calling a city official', 'D: By subscribing to a newsletter'],
  },

  // 13-15
  {
    id: 13,
    question: `Question 85: What is the broadcast mainly about?`,
    options: ['A: The announcement of a sporting competition', 'B: The completion of a construction project', 'C: The closing of a local business', 'D: The election of a city official'],
  },
  {
    id: 14,
    question: `Question 86: According to the speaker, which industry will benefit from an event?`,
    options: ['A: Technology', 'B: Manufacturing', 'C: Fishing', 'D: Tourism'],
  },
  {
    id: 15,
    question: `Question 87: Why does the speaker say, “that’s less than taking the ferry”?`,
    options: ['A: To show surprise', 'B: To stress a disadvantage', 'C: To acknowledge a mistake', 'D: To offer a counterargument'],
  },

  // 16-18
  {
    id: 16,
    question: `Question 88: What kind of business does the speaker work for?`,
    options: ['A: A publicity agency', 'B: A plastics manufacturer', 'C: An accounting firm', 'D: A grocery store'],
  },
  {
    id: 17,
    question: `Question 89: What does the speaker mainly discuss?`,
    options: ['A: Upgrading the bookkeeping system', 'B: Preparing for a new regulation', 'C: Revising a company logo', 'D: Increasing online advertising'],
  },
  {
    id: 18,
    question: `Question 90: What does the speaker expect one of the listeners to do?`,
    options: ['A: Contact another department', 'B: Draft a timeline', 'C: Find a new supplier', 'D: Design a showroom layout'],
  },

  // 19-21
  {
    id: 19,
    question: `Question 91: Who most likely is the speaker?`,
    options: ['A: A journalist', 'B: An accountant', 'C: A restaurant owner', 'D: A customer service representative'],
  },
  {
    id: 20,
    question: `Question 92: What does the speaker say she needs the listener to do?`,
    options: ['A: Contact some clients', 'B: Check an inventory list', 'C: Create a marketing campaign', 'D: Scan some information'],
  },
  {
    id: 21,
    question: `Question 93: Why does the speaker say, “we’re offering a workshop on that topic next month”?`,
    options: ['A: To reject an invitation', 'B: To explain a survey', 'C: To make a recommendation', 'D: To ask for help'],
  },

  // 22-24
  {
    id: 22,
    question: `Question 94: What is the speaker discussing?`,
    options: ['A: Updating a database', 'B: Hiring more staff', 'C: Revising safety guidelines', 'D: Purchasing supplies'],
  },
  {
    id: 23,
    question: `Question 95: Where does the speaker most likely work?`,
    options: ['A: At a warehouse', 'B: At a fitness center', 'C: At a home-improvement store', 'D: At a cleaning service'],
  },
  {
    id: 24,
    question: `Question 96: What does the speaker imply when he says, “Tunji, I think you have a free hour tomorrow morning”?`,
    options: ['A: Tunji should complete the task.', 'B: Tunji can attend the client meeting.', 'C: Tunji’s schedule needs to be corrected.', 'D: Tunji can leave work early.'],
  },

  // 25-27
  {
    id: 25,
    question: `Question 97: Where does the speaker work?`,
    options: ['A: At a community center', 'B: At a car repair shop', 'C: At a supermarket', 'D: At a department store'],
  },
  {
    id: 26,
    question: `Question 98: Look at the graphic. How much will the speaker pay for today’s order?`,
    options: ['A: $15', 'B: $17', 'C: $18', 'D: $14'],
  },
  {
    id: 27,
    question: `Question 99: What does the speaker want to install?`,
    options: ['A: A beverage vending machine', 'B: An air-conditioning unit', 'C: Some security cameras', 'D: Some carpeting'],
  },

  // 28-30
  {
    id: 28,
    question: `Question 100: Look at the graphic. Who is the speaker?`,
    options: ['A: Takanori Kimura', 'B: Ozan Demir', 'C: Robert Wilson', 'D: Ivan Stepanov'],
  },
  {
    id: 29,
    question: `Question 101: How is the company trying to increase participation in a program?`,
    options: ['A: By offering free snacks', 'B: By providing paid time off', 'C: By providing a salary increase', 'D: By giving away a free trip'],
  },
  {
    id: 30,
    question: `Question 102: What will the speaker do next?`,
    options: ['A: Introduce some committee members', 'B: Review some sales figures', 'C: Pass out tickets to an upcoming event', 'D: Give examples of employee goals'],
  },
];

const AUDIO_URL = '/toeic/TOEIC-Listening-TEST-17-Part-4.mp3';

export default function TestPage() {
  const [current, setCurrent] = useState(2);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [audioKey, setAudioKey] = useState(0); // để reset audio nếu cần

  const currentQuestion = useMemo(
    () => questions.find((q) => q.id === current),
    [current]
  );

  const selectedOption = answers[current] ?? '';

  const handleSelect = (option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [current]: option,
    }));
  };

  return (
    <main className="min-h-screen bg-[#f5f6f8]">
      {/* HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 text-sm">
            <ChevronLeft size={18} />
            Quay lại danh sách đề
          </Link>

          <h1 className="text-[#2196f3] font-medium text-lg">
            Test IELTS listening - Đề 2
          </h1>

          <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
            59:40
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="col-span-9 space-y-6">
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className="font-medium mb-4">Listen to the audio and answer questions 1-40.</p>

            {/* AUDIO */}
            <div className="bg-gray-100 rounded-xl p-4">
              <audio
                key={audioKey}
                controls
                src={AUDIO_URL}
                className="w-full"
              />
            </div>

            {/* Nếu muốn reset audio khi đổi đề/câu thì có thể dùng setAudioKey */}
            {/* <button onClick={() => setAudioKey((k) => k + 1)}>Reset audio</button> */}
          </div>

          {/* QUESTION */}
          <div className="bg-white rounded-xl border shadow-sm p-6 text-sm text-gray-700">
            <p className="font-medium mb-4">
              {currentQuestion ? currentQuestion.question : 'Chọn câu hỏi'}
            </p>

            {questions.map((opt) => (
              <label
                key={opt.id}
                className={`
                  flex items-center gap-3 p-4 border rounded-lg cursor-pointer mb-3
                  ${selectedOption === opt.options[0]
                    ? 'bg-blue-50 border-blue-500'
                    : 'bg-white hover:bg-gray-50'
                  }
                `}
              >
                <input
                  type="radio"
                  name={`q${current}`}
                  checked={selectedOption === opt.options[0]}
                  onChange={() => handleSelect(opt.options[0])}
                />
                {opt.options[0]}
              </label>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl border shadow-sm p-4 sticky top-6">
            <h3 className="font-medium mb-4">Danh sách câu hỏi</h3>

            {/* GRID */}
            <div className="grid grid-cols-5 gap-3 max-h-[260px] overflow-y-auto pr-1">
              {questions.map((q) => {
                const isActive = current === q.id;
                const isAnswered = !!answers[q.id];

                return (
                  <div
                    key={q.id}
                    onClick={() => setCurrent(q.id)}
                    className={`
                      relative w-10 h-10 flex items-center justify-center 
                      rounded-full text-sm cursor-pointer border transition
                      ${isActive ? 'bg-green-500 text-white border-green-500' : 'bg-white hover:bg-gray-100'}
                    `}
                  >
                    {q.id}

                    {isAnswered && !isActive && (
                      <span className="absolute -top-1 -right-1 text-[10px] bg-green-500 text-white rounded-full px-1">
                        ✓
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* SCROLL BAR GIẢ */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-full h-2 bg-gray-200 rounded-full relative">
                <div className="absolute left-4 w-20 h-2 bg-gray-400 rounded-full" />
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full mt-4 bg-[#2196f3] hover:bg-[#1e88e5] text-white py-3 rounded-lg font-medium">
              Nộp Bài
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}