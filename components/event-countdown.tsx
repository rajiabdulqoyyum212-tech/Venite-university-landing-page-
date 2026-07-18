'use client';

import { useState, useEffect } from 'react';

export function EventCountdown({ targetDate, eventName }: { targetDate: string; eventName: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-card-bg rounded-3xl border border-border-color shadow-sm">
      <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Next Major Event</p>
      <h3 className="text-2xl font-display font-bold text-text-heading mb-6 text-center">{eventName}</h3>
      
      <div className="flex gap-4 sm:gap-6 text-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map((item, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-heading bg-bg border border-border-color rounded-xl w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center shadow-inner">
              {item.value.toString().padStart(2, '0')}
            </span>
            <span className="text-xs sm:text-sm text-text-muted mt-2 uppercase tracking-wide">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
