'use client';

import React, { useState, useEffect } from 'react';

interface TimeUnit {
  value: number;
  label: string;
}

export function CountdownTimer() {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([
    { value: 2, label: 'Ngày' },
    { value: 13, label: 'Giờ' },
    { value: 57, label: 'Phút' },
    { value: 26, label: 'Giây' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUnits((prev) => {
        const updated = [...prev];
        updated[3].value -= 1;

        if (updated[3].value < 0) {
          updated[3].value = 59;
          updated[2].value -= 1;
        }
        if (updated[2].value < 0) {
          updated[2].value = 59;
          updated[1].value -= 1;
        }
        if (updated[1].value < 0) {
          updated[1].value = 23;
          updated[0].value -= 1;
        }

        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center md:justify-start w-full">
      <div className="flex items-center gap-2 md:gap-4 flex-wrap md:flex-nowrap justify-center md:justify-start">
        {timeUnits.map((unit, index) => (
          <React.Fragment key={index}>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm font-semibold text-white whitespace-nowrap">
                {unit.label}
              </div>
            </div>
            {index < timeUnits.length - 1 && (
              <div className="text-xl md:text-3xl font-light text-white">|</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
