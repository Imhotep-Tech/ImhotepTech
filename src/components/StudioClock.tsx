'use client';

import React, { useEffect, useState } from 'react';

interface TimeParts {
  hours: string;
  minutes: string;
  seconds: string;
  isBusinessHours: boolean;
}

const getCairoTimeParts = (date: Date): TimeParts => {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Cairo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).formatToParts(date);

    const hours = parts.find((p) => p.type === 'hour')?.value || '12';
    const minutes = parts.find((p) => p.type === 'minute')?.value || '00';
    const seconds = parts.find((p) => p.type === 'second')?.value || '00';
    const hourNum = parseInt(hours, 10);
    const isBusinessHours = hourNum >= 9 && hourNum <= 23;

    return { hours, minutes, seconds, isBusinessHours };
  } catch {
    const utcHours = date.getUTCHours();
    const cairoHours = (utcHours + 2) % 24;
    const pad = (n: number) => String(n).padStart(2, '0');
    return {
      hours: pad(cairoHours),
      minutes: pad(date.getUTCMinutes()),
      seconds: pad(date.getUTCSeconds()),
      isBusinessHours: cairoHours >= 9 && cairoHours <= 23,
    };
  }
};

export default function StudioClock() {
  const [timeParts, setTimeParts] = useState<TimeParts>(() => getCairoTimeParts(new Date()));

  useEffect(() => {
    // Tick at 250ms frequency so seconds change the exact millisecond they roll over
    const update = () => {
      setTimeParts(getCairoTimeParts(new Date()));
    };

    update();
    const interval = setInterval(update, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111A28]/90 backdrop-blur-md border border-[#D4AF37]/25 text-xs font-mono text-slate-300 shadow-sm select-none"
      title="Live local time at Imhotep Tech studio headquarters in Cairo, Egypt (UTC+2) — updating every second"
    >
      {/* Live Pulsing Status Beacon */}
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            timeParts.isBusinessHours ? 'bg-emerald-400' : 'bg-[#D4AF37]'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            timeParts.isBusinessHours ? 'bg-emerald-400' : 'bg-[#D4AF37]'
          }`}
        />
      </span>

      <span className="text-slate-400 font-sans font-medium text-xs">Cairo, EG:</span>

      {/* Live Second-by-Second Digital Clock with Highlighted Seconds */}
      <div
        suppressHydrationWarning
        className="flex items-center tabular-nums text-xs font-mono tracking-wider"
      >
        <span className="text-white font-semibold">{timeParts.hours}</span>
        <span className="text-[#D4AF37] px-0.5 animate-pulse font-bold">:</span>
        <span className="text-white font-semibold">{timeParts.minutes}</span>
        <span className="text-[#D4AF37] px-0.5 animate-pulse font-bold">:</span>
        <span className="text-[#D4AF37] font-bold bg-[#D4AF37]/15 px-1.5 py-0.5 rounded border border-[#D4AF37]/35 shadow-[0_0_8px_rgba(212,175,55,0.25)] min-w-[22px] text-center inline-block">
          {timeParts.seconds}
        </span>
      </div>

      {/* Active/Standby Pill */}
      <span className="text-[10px] uppercase font-sans tracking-wider px-1.5 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 hidden sm:inline-block font-semibold">
        {timeParts.isBusinessHours ? 'Active' : 'Standby'}
      </span>
    </div>
  );
}
