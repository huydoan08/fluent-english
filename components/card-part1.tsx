'use client';

import { Card } from '@/components/ui/card';

export default function Part1Card() {
  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-lg font-bold text-gray-800">PART 1</h2>

      <p className="text-sm text-gray-700 leading-relaxed">
       In the Listening test, you will be asked to demonstrate how well you understand spoken English. The entire Listening test will last approximately 45 minutes. There are four parts, and directions are given for each part.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">
        <span className="font-semibold">PART 1 - Directions:</span>{' '}
        For each question in this part, you will hear four statements about a picture. When you hear the statements, you must select the one statement that best describes what you see in the picture. The statements will not be printed and will be spoken only one time.
      </p>
    </Card>
  );
}