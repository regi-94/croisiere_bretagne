"use client";
import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    jours: 0, heures: 0, minutes: 0, secondes: 0
  });

  useEffect(() => {
    // Date cible : 4 Juillet 2026 à 09:00
    const targetDate = new Date("2026-07-04T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        jours: Math.floor(distance / (1000 * 60 * 60 * 24)),
        heures: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secondes: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Petit style "Badge" élégant
  const Unit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col mx-2">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-[10px] uppercase tracking-tighter opacity-80">{label}</span>
    </div>
  );

  return (
    <div className="mt-8 inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl font-medium text-white shadow-xl">
      <Unit value={timeLeft.jours} label="Jours" />
      <div className="opacity-30 text-2xl mb-4">:</div>
      <Unit value={timeLeft.heures} label="H" />
      <div className="opacity-30 text-2xl mb-4">:</div>
      <Unit value={timeLeft.minutes} label="M" />
      <div className="opacity-30 text-2xl mb-4">:</div>
      <Unit value={timeLeft.secondes} label="S" />
    </div>
  );
}
