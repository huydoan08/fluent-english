'use client';

import { Card } from '@/components/ui/card';

export default function Part4Card() {
  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-lg font-bold text-gray-800">PART 4</h2>

      <p className="text-sm text-gray-700 leading-relaxed">
        <span className="font-semibold">Directions:</span>{' '}
        You will hear some talks given by a single speaker. You will be asked to answer three questions about what the speaker says in each talk.
        Select the best response to each question and mark the letter (A), (B), (C), or (D) on your answer sheet.
        The talks will not be printed in your test book and will be spoken only one time.
      </p>
    </Card>
  );
}