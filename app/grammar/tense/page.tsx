'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

export default function TenseDetails() {
  const [expandedTense, setExpandedTense] = useState<string | null>(null);

  const tenses = [
    {
      id: 'present-simple',
      roman: 'I.',
      name: 'Thì hiện tại đơn – Present Simple Tense',
      concept: 'Thị hiện tại đơn (Present Simple Tense) trong tiếng Anh là một thì cơ bản dùng để diễn tả các hành động xảy ra thường xuyên, lặp đi lặp lại, thói quen, sự thật hiển nhiên, hoặc các tình huống cố định.',
      formula: {
        labels: ['Phân loại', 'Cấu trúc đối với động từ thường', 'Cấu trúc đối với động từ "To be"'],
        rows: [
          ['Khẳng định', 'S + V(s/es) + O', 'S + am/is/are + O'],
          ['Phủ định', 'S + do not/does not + V-inf', 'S + am not/is not/are not + O'],
          ['Nghi vấn', 'Do/Does + S + V-inf?', 'Am/is/are + S + O?'],
        ]
      },
      usages: [
        'Dùng để diễn tả chân lý, sự thật hiển nhiên',
        'Dùng để diễn tả những thói quen, sở thích, quan điểm',
        'Dùng để diễn tả hành động thường xuyên hoặc một thói quen lặp lại ở hiện tại',
        'Dùng để diễn tả suy nghĩ, cảm xúc, cảm giác và các trạng thái tĩnh',
        'Dùng để diễn tả khả năng hoặc năng lực',
        'Dùng để diễn tả các hướng dẫn hoặc chỉ dẫn',
        'Dùng để diễn tả kế hoạch đã được ấn định trong tương lai',
      ],
      signs: [
        'Các trạng từ chỉ tần suất: always, constantly, usually, often, frequently, sometimes, rarely, seldom, never…',
        'Các cụm từ chỉ thời gian: every day/month/week/year, every week, on Mondays, in the morning…',
        'Các động từ chỉ trạng thái, cảm xúc: like, love, hate, want, need, believe, know, understand, mean',
      ]
    },
    {
      id: 'present-continuous',
      roman: 'II.',
      name: 'Thì hiện tại tiếp diễn – Present Continuous Tense',
      concept: 'Thì hiện tại tiếp diễn (Present Continuous Tense) trong tiếng Anh là một thì được sử dụng để diễn tả các hành động đang xảy ra ngay tại thời điểm nói hoặc các hành động/sự kiện tạm thời.',
      formula: {
        labels: ['Phân loại', 'Cấu trúc'],
        rows: [
          ['Khẳng định', 'S + am/is/are + V-ing'],
          ['Phủ định', 'S + am/is/are not + V-ing'],
          ['Nghi vấn', 'Am/Is/Are + S + V-ing?'],
        ]
      },
      usages: [
        'Diễn tả một hành động đang diễn ra tại thời điểm nói',
        'Dùng để diễn tả một hành động, kế hoạch sắp xảy ra ở tương lai gần',
        'Dùng để diễn tả một hành động hoặc sự kiện tạm thời',
        'Dùng để diễn tả hành động được lặp lại, gây khó chịu cho người khác',
        'Dùng để diễn tả các hành động đang thay đổi, phát triển',
      ],
      signs: [
        'Các trạng từ chỉ thời gian: now, right now, at the moment, currently, at present',
        'Câu mệnh lệnh: Listen!, Look!, Watch out!, Be quiet!',
        'Các cụm từ: today, tomorrow, this week, this month',
      ]
    },
    {
      id: 'present-perfect',
      roman: 'III.',
      name: 'Thì hiện tại hoàn thành – Present Perfect Tense',
      concept: 'Thì hiện tại hoàn thành (Present Perfect Tense) trong tiếng Anh là một thì dùng để diễn tả hành động hoặc sự kiện bắt đầu trong quá khứ nhưng có liên quan hoặc ảnh hưởng đến hiện tại.',
      formula: {
        labels: ['Phân loại', 'Cấu trúc đối với động từ thường', 'Cấu trúc đối với động từ "To be"'],
        rows: [
          ['Khẳng định', 'S + have/has + V3/ed + O', 'S + have/has + been + O'],
          ['Phủ định', 'S + have/has + not + V3/ed + O', 'S + have/has + not + been + O'],
          ['Nghi vấn', 'Have/has + S + V3/ed + O?', 'Have/has + S + been + O?'],
        ]
      },
      usages: [
        'Dùng để diễn tả hành động đã xảy ra ở quá khứ không xác định',
        'Diễn tả hành động bắt đầu trong quá khứ và còn tiếp tục ở hiện tại',
        'Dùng để diễn tả hành động lặp đi lặp lại trong quá khứ',
        'Dùng để diễn tả các trải nghiệm hoặc thành tựu mà ai đó đã đạt được',
        'Dùng để diễn tả hành động vừa mới xảy ra (thường dùng với "just")',
      ],
      signs: [
        'Các trạng từ: already, just, ever, never, recently, lately, before, not…yet',
        'Các cụm từ chỉ thời gian: for + khoảng thời gian, since + mốc thời gian, over the past/the last + số năm + years',
      ]
    },
    {
      id: 'present-perfect-continuous',
      roman: 'IV.',
      name: 'Thì hiện tại hoàn thành tiếp diễn – Present Perfect Continuous Tense',
      concept: 'Thì hiện tại hoàn thành tiếp diễn (Present Perfect Continuous) là thì dùng để diễn tả các hành động bắt đầu trong quá khứ và vẫn đang kéo dài không bị ngắt quãng cho đến hiện tại.',
      formula: {
        labels: ['Phân loại', 'Cấu trúc'],
        rows: [
          ['Khẳng định', 'S + have/has + been + V-ing'],
          ['Phủ định', 'S + have/has + not + been + V-ing'],
          ['Nghi vấn', 'Have/Has + S + been + V-ing?'],
        ]
      },
      usages: [
        'Dùng để diễn tả hành động bắt đầu trong quá khứ và vẫn đang tiếp tục ở hiện tại',
        'Diễn tả hành động đã xảy ra liên tục trong một khoảng thời gian',
        'Dùng để diễn tả các hành động gần đây và có thể ảnh hưởng đến hiện tại',
        'Dùng để diễn tả hành động vừa kết thúc và nhấn mạnh kết quả',
      ],
      signs: [
        'Các trạng từ chỉ thời gian: for (khoảng thời gian), since (mốc thời gian), all day, all week, recently, lately',
        'Các cụm từ: how long, in recent days/weeks/months, all day/week/month',
      ]
    },
    {
      id: 'past-simple',
      roman: 'V.',
      name: 'Thì quá khứ đơn – Past Simple Tense',
      concept: 'Thì quá khứ đơn (Simple past) là thì đơn giản nhất trong bảng các thì ở quá khứ. Diễn tả các hành động, sự kiện hoặc tình trạng đã xảy ra và hoàn tất trong quá khứ.',
      formula: {
        labels: ['Phân loại', 'Cấu trúc với động từ thường', 'Cấu trúc với động từ "To be"'],
        rows: [
          ['Khẳng định', 'S + V2/ed + O', 'S + was/were + O'],
          ['Phủ định', 'S + didn\'t + V-inf + O', 'S + was/were + not + O'],
          ['Nghi vấn', 'Did + S + V-inf + O?', 'Was/were + S + O?'],
        ]
      },
      usages: [
        'Dùng để diễn tả một hành động đã xảy ra và đã chấm dứt trong quá khứ',
        'Dùng để diễn tả tình trạng hoặc thói quen trong quá khứ',
        'Dùng để diễn tả một chuỗi hành động xảy ra nối tiếp nhau trong quá khứ',
        'Sử dụng trong câu điều kiện loại 2 (If)',
      ],
      signs: [
        'Các cụm từ chỉ thời gian trong quá khứ: yesterday, today, last week/month/year',
        'Các cụm từ: [thời gian] + ago, in + [năm], when I was a child',
      ]
    },
    {
      id: 'past-continuous',
      roman: 'VI.',
      name: 'Thì quá khứ tiếp diễn – Past Continuous',
      concept: 'Thì quá khứ tiếp diễn (Past Continuous Tense) được sử dụng để diễn tả các hành động hoặc sự kiện đang xảy ra tại một thời điểm cụ thể trong quá khứ.',
      formula: {
        labels: ['Phân loại', 'Cấu trúc'],
        rows: [
          ['Khẳng định', 'S + was/were + V-ing + O'],
          ['Phủ định', 'S + was/were + not + V-ing + O'],
          ['Nghi vấn', 'Was/were + S + V-ing + O?'],
        ]
      },
      usages: [
        'Dùng để diễn tả hành động đang xảy ra tại một thời điểm xác định trong quá khứ',
        'Dùng để diễn tả một hành động đang xảy ra thì một hành động khác chen ngang',
        'Dùng để diễn tả hành động hoặc tình huống kéo dài trong quá khứ',
        'Dùng để diễn tả những thói quen hoặc hành động tiêu cực lặp đi lặp lại',
      ],
      signs: [
        'Các trạng từ, cụm từ chỉ thời gian: at (thời gian cụ thể), while, when, as, all day, all afternoon',
        'Các cụm từ: at this time last + night/month/week, from…to…',
      ]
    },
  ];

  return (
    <div className="w-full py-6 md:py-8">
      <div className="space-y-3 md:space-y-4">
        {tenses.map((tense) => (
          <Card key={tense.id} className="border border-gray-300 overflow-hidden">
            <button
              onClick={() => setExpandedTense(expandedTense === tense.id ? null : tense.id)}
              className="w-full p-3 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-gray-50 transition-colors gap-3 md:gap-0"
            >
              <div className="flex items-start gap-2 md:gap-4 text-left flex-1 w-full">
                <span className="font-bold text-[#2a5477] min-w-fit text-base md:text-lg flex-shrink-0">{tense.roman}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">{tense.name}</h4>
                  <p className="text-gray-600 text-xs md:text-sm mt-1 line-clamp-2">{tense.concept}</p>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`text-gray-400 transition-transform flex-shrink-0 ${
                  expandedTense === tense.id ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedTense === tense.id && (
              <div className="px-3 md:px-6 pb-4 md:pb-6 border-t border-gray-200 bg-gray-50">
                {/* Công thức */}
                <div className="mb-4 md:mb-6">
                  <h5 className="font-bold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">Công thức</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs md:text-sm">
                      <thead>
                        <tr className="border-b border-gray-300 bg-white">
                          {tense.formula.labels.map((label, i) => (
                            <th key={i} className="text-left p-2 md:p-3 font-semibold text-gray-700">
                              {label}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tense.formula.rows.map((row, i) => (
                          <tr key={i} className="border-b border-gray-200 hover:bg-white">
                            {row.map((cell, j) => (
                              <td key={j} className="p-2 md:p-3 text-gray-700">
                                {j === 0 ? <span className="font-semibold">{cell}</span> : cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cách dùng */}
                <div className="mb-4 md:mb-6">
                  <h5 className="font-bold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Cách dùng</h5>
                  <ul className="space-y-1 md:space-y-2">
                    {tense.usages.map((usage, i) => (
                      <li key={i} className="flex gap-2 md:gap-3 text-gray-700 text-xs md:text-sm">
                        <span className="text-[#2a5477] font-bold flex-shrink-0">•</span>
                        <span>{usage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dấu hiệu nhận biết */}
                <div>
                  <h5 className="font-bold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Dấu hiệu nhận biết</h5>
                  <ul className="space-y-1 md:space-y-2">
                    {tense.signs.map((sign, i) => (
                      <li key={i} className="flex gap-2 md:gap-3 text-gray-700 text-xs md:text-sm">
                        <span className="text-[#2a5477] font-bold flex-shrink-0">•</span>
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
