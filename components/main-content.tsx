'use client';

import React from 'react';
import { Card } from '@/components/ui/card';

export function MainContent() {
  const topics = [
    { num: 'I.', title: 'Thì hiện tại đơn – Present Simple Tense' },
    { num: 'II.', title: 'Thì hiện tại tiếp diễn – Present Continuous Tense' },
    { num: 'III.', title: 'Thì hiện tại hoàn thành – Present Perfect Tense' },
    { num: 'IV.', title: 'Thì hiện tại hoàn thành tiếp diễn – Present Perfect Continuous Tense' },
    { num: 'V.', title: 'Thì quá khứ đơn – Past Simple Tense' },
    { num: 'VI.', title: 'Thì quá khứ tiếp diễn – Past Continuous' },
    { num: 'VII.', title: 'Thì quá khứ hoàn thành – Past Perfect' },
    { num: 'VIII.', title: 'Thì quá khứ hoàn thành tiếp diễn – Past Perfect Continuous Tense' },
    { num: 'IX.', title: 'Thì tương lai đơn – Simple Future Tense' },
    { num: 'X.', title: 'Thì tương lai tiếp diễn – Future Continuous Tense' },
    { num: 'XI.', title: 'Thì tương lai hoàn thành – Future Perfect Tense' },
    { num: 'XII.', title: 'Thì tương lai hoàn thành tiếp diễn – Future Perfect Continuous Tense' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card className="border border-gray-300">
        <div className="p-8">
          <h3 className="text-center text-xl font-bold mb-6 text-gray-800">Mục lục [Ấn]</h3>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold text-gray-700 mb-4">
                A. Tổng hợp 12 thì trong tiếng Anh
              </p>

              <ul className="space-y-3 text-gray-700">
                {topics.map((topic, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="font-semibold text-gray-600 min-w-fit">
                      {topic.num}
                    </span>
                    <span>{topic.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
