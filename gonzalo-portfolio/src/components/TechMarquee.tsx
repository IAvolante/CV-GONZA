import { useState } from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

// Curated certified production stack (11 technologies):
// Python, TypeScript, React, Flask, SQLite / SQLAlchemy, Linux, Playwright, REST APIs & Webhooks, Google Gemini Vision API, n8n, GitHub Actions
const techItems: TechItem[] = [
  {
    name: 'Python',
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2C8.7 2 8.9 3.4 8.9 3.4L8.9 4.8H12V5.5H5.4S2 5.1 2 8.4C2 11.6 4.9 11.4 4.9 11.4H6.2V9.8C6.2 8 7.7 8 7.7 8H12.3C13.8 8 13.8 6.5 13.8 6.5V3.4C13.8 3.4 14 2 11.9 2ZM10.5 3.3C10.9 3.3 11.2 3.6 11.2 4C11.2 4.4 10.9 4.7 10.5 4.7C10.1 4.7 9.8 4.4 9.8 4C9.8 3.6 10.1 3.3 10.5 3.3Z" fill="#3776AB" />
        <path d="M12.1 22C15.3 22 15.1 20.6 15.1 20.6L15.1 19.2H12V18.5H18.6S22 18.9 22 15.6C22 12.4 19.1 12.6 19.1 12.6H17.8V14.2C17.8 16 16.3 16 16.3 16H11.7C10.2 16 10.2 17.5 10.2 17.5V20.6C10.2 20.6 10 22 12.1 22ZM13.5 20.7C13.1 20.7 12.8 20.4 12.8 20C12.8 19.6 13.1 19.3 13.5 19.3C13.9 19.3 14.2 19.6 14.2 20C14.2 20.4 13.9 20.7 13.5 20.7Z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M11.5 14.5H9.75V19H7.75V14.5H6V12.75H11.5V14.5ZM17.75 14C17.75 13.5 17.5 13.1 17 12.8C16.5 12.5 15.75 12.3 14.75 12C13.75 11.7 13.1 11.3 12.75 10.9C12.4 10.5 12.25 10 12.25 9.4C12.25 8.7 12.5 8.1 13 7.7C13.5 7.2 14.25 7 15.1 7C16 7 16.75 7.2 17.25 7.7C17.75 8.1 18 8.7 18 9.5H16C16 9.1 15.9 8.8 15.6 8.6C15.4 8.4 15 8.3 14.6 8.3C14.2 8.3 13.9 8.4 13.6 8.6C13.4 8.8 13.3 9.1 13.3 9.4C13.3 9.7 13.4 10 13.7 10.2C14 10.4 14.5 10.6 15.4 10.9C16.4 11.2 17.1 11.6 17.5 12C17.9 12.5 18.25 13.1 18.25 13.8C18.25 14.6 17.9 15.2 17.4 15.7C16.8 16.1 16 16.3 15 16.3C14 16.3 13.1 16.1 12.5 15.5C11.9 15 11.6 14.2 11.6 13.2H13.6C13.6 13.8 13.8 14.2 14.1 14.5C14.4 14.8 14.9 14.9 15.4 14.9C15.9 14.9 16.3 14.8 16.6 14.5C16.8 14.4 16.9 14.2 16.9 14H17.75Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    name: 'Flask',
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M10 2v7.31L4.62 18.2A2 2 0 0 0 6.34 21h11.32a2 2 0 0 0 1.72-2.8L14 9.31V2" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 2h7" stroke="#f8fafc" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 16h10" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'SQLite / SQLAlchemy',
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#38bdf8" strokeWidth="1.8" fill="#0284c7" fillOpacity="0.2" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" stroke="#0ea5e9" strokeWidth="1.8" />
        <path d="M3 12A9 3 0 0 0 21 12" stroke="#38bdf8" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    name: 'Linux',
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#E95420" />
        <circle cx="12" cy="7" r="1.5" fill="white" />
        <circle cx="7.5" cy="14.5" r="1.5" fill="white" />
        <circle cx="16.5" cy="14.5" r="1.5" fill="white" />
        <path d="M12 9V11M9 13.5L10.5 12.5M15 13.5L13.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Playwright',
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="#10B981" strokeWidth="1.8" />
        <path d="M9 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM15 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#10B981" />
        <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'REST APIs & Webhooks',
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    name: 'Google Gemini Vision API',
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" />
      </svg>
    ),
  },
  {
    name: 'n8n',
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="8" width="6" height="8" rx="2" fill="#EA4B71" />
        <rect x="16" y="8" width="6" height="8" rx="2" fill="#EA4B71" />
        <circle cx="12" cy="12" r="3" fill="#FF6D5A" />
        <line x1="8" y1="12" x2="9" y2="12" stroke="#FF6D5A" strokeWidth="2" />
        <line x1="15" y1="12" x2="16" y2="12" stroke="#FF6D5A" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'GitHub Actions',
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#2088FF" strokeWidth="1.8" />
        <path d="M12 7v5l3 3" stroke="#2088FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="1.5" fill="#2088FF" />
        <circle cx="15" cy="15" r="1.5" fill="#2088FF" />
      </svg>
    ),
  },
];

export function TechMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicating array for seamless slow marquee
  const loopItems = [...techItems, ...techItems, ...techItems];

  return (
    <div
      className="relative w-full py-4 border-y border-slate-900/60 bg-transparent overflow-hidden my-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Demonstrated Tech Stack"
    >
      {/* Left and Right Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      {/* Infinite Slow Leftward Moving Strip (48s duration, calm and subtle) */}
      <motion.div
        className="flex items-center gap-6 w-max opacity-60 hover:opacity-90 transition-opacity"
        animate={isPaused ? { x: undefined } : { x: ['0%', '-33.333%'] }}
        transition={{
          ease: 'linear',
          duration: 45,
          repeat: Infinity,
        }}
      >
        {loopItems.map((tech, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors shrink-0 select-none cursor-default grayscale-[30%] hover:grayscale-0"
          >
            {tech.icon}
            <span className="text-xs font-mono tracking-tight font-medium text-slate-300">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
