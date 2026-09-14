import { useState } from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

// Crisp inline SVGs for recognized technologies
// Perfectly ordered by architecture flow:
// 1. Languages & Core: TypeScript, Python, Node.js
// 2. Frontend & UI: React 19, Next.js, Tailwind CSS
// 3. Database & Storage: PostgreSQL, Supabase
// 4. Automation & AI: OpenAI API, n8n, Playwright
// 5. Cloud, DevOps & Tools: Docker, Linux / Ubuntu, Git & GitHub, QGIS
const techItems: TechItem[] = [
  // 1. Languages & Core
  {
    name: 'TypeScript',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M11.5 14.5H9.75V19H7.75V14.5H6V12.75H11.5V14.5ZM17.75 14C17.75 13.5 17.5 13.1 17 12.8C16.5 12.5 15.75 12.3 14.75 12C13.75 11.7 13.1 11.3 12.75 10.9C12.4 10.5 12.25 10 12.25 9.4C12.25 8.7 12.5 8.1 13 7.7C13.5 7.2 14.25 7 15.1 7C16 7 16.75 7.2 17.25 7.7C17.75 8.1 18 8.7 18 9.5H16C16 9.1 15.9 8.8 15.6 8.6C15.4 8.4 15 8.3 14.6 8.3C14.2 8.3 13.9 8.4 13.6 8.6C13.4 8.8 13.3 9.1 13.3 9.4C13.3 9.7 13.4 10 13.7 10.2C14 10.4 14.5 10.6 15.4 10.9C16.4 11.2 17.1 11.6 17.5 12C17.9 12.5 18.25 13.1 18.25 13.8C18.25 14.6 17.9 15.2 17.4 15.7C16.8 16.1 16 16.3 15 16.3C14 16.3 13.1 16.1 12.5 15.5C11.9 15 11.6 14.2 11.6 13.2H13.6C13.6 13.8 13.8 14.2 14.1 14.5C14.4 14.8 14.9 14.9 15.4 14.9C15.9 14.9 16.3 14.8 16.6 14.5C16.8 14.4 16.9 14.2 16.9 14H17.75Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Python',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2C8.7 2 8.9 3.4 8.9 3.4L8.9 4.8H12V5.5H5.4S2 5.1 2 8.4C2 11.6 4.9 11.4 4.9 11.4H6.2V9.8C6.2 8 7.7 8 7.7 8H12.3C13.8 8 13.8 6.5 13.8 6.5V3.4C13.8 3.4 14 2 11.9 2ZM10.5 3.3C10.9 3.3 11.2 3.6 11.2 4C11.2 4.4 10.9 4.7 10.5 4.7C10.1 4.7 9.8 4.4 9.8 4C9.8 3.6 10.1 3.3 10.5 3.3Z" fill="#3776AB" />
        <path d="M12.1 22C15.3 22 15.1 20.6 15.1 20.6L15.1 19.2H12V18.5H18.6S22 18.9 22 15.6C22 12.4 19.1 12.6 19.1 12.6H17.8V14.2C17.8 16 16.3 16 16.3 16H11.7C10.2 16 10.2 17.5 10.2 17.5V20.6C10.2 20.6 10 22 12.1 22ZM13.5 20.7C13.1 20.7 12.8 20.4 12.8 20C12.8 19.6 13.1 19.3 13.5 19.3C13.9 19.3 14.2 19.6 14.2 20C14.2 20.4 13.9 20.7 13.5 20.7Z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7.2V16.8L12 22L21 16.8V7.2L12 2Z" fill="#5FA04E" />
        <path d="M12 4.5L18.5 8.2V15.8L12 19.5L5.5 15.8V8.2L12 4.5Z" fill="#030712" />
        <path d="M12 6.5L16.8 9.3V14.7L12 17.5L7.2 14.7V9.3L12 6.5Z" fill="#5FA04E" />
      </svg>
    ),
  },

  // 2. Frontend & UI
  {
    name: 'React',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="black" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
        <path d="M8 8V16M16 8L10 16" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M6.5 8.5C8 5.5 10.5 4.5 14 5.5C12 7.5 12.5 9 13.5 10C14.8 11.3 16 12.5 16 15C16 17.5 13.5 19.5 10 18.5C12 16.5 11.5 15 10.5 14C9.2 12.7 8 11.5 6.5 8.5Z" fill="#06B6D4" />
      </svg>
    ),
  },

  // 3. Database & Storage
  {
    name: 'PostgreSQL',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7 3 5 6 5 10C5 13.5 6.5 16 9 17V21L12 19L15 21V17C17.5 16 19 13.5 19 10C19 6 17 3 12 3Z" stroke="#4169E1" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="10" cy="9" r="1" fill="#4169E1" />
        <circle cx="14" cy="9" r="1" fill="#4169E1" />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M13.5 2L4 13.5H11.5L10.5 22L20 10.5H12.5L13.5 2Z" fill="#3ECF8E" />
      </svg>
    ),
  },

  // 4. Automation & Integration
  {
    name: 'REST APIs & Webhooks',
    icon: (
      <svg className="w-4 h-4 shrink-0 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    name: 'n8n',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="8" width="6" height="8" rx="2" fill="#EA4B71" />
        <rect x="16" y="8" width="6" height="8" rx="2" fill="#EA4B71" />
        <circle cx="12" cy="12" r="3" fill="#FF6D5A" />
        <line x1="8" y1="12" x2="9" y2="12" stroke="#FF6D5A" strokeWidth="2" />
        <line x1="15" y1="12" x2="16" y2="12" stroke="#FF6D5A" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Playwright',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="11" r="6" fill="#2EAD33" />
        <circle cx="15" cy="13" r="6" fill="#E23237" fillOpacity="0.85" />
      </svg>
    ),
  },

  // 5. Cloud, DevOps & Tools
  {
    name: 'Docker',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
        <rect x="6" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
        <rect x="10" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
        <rect x="6" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
        <rect x="10" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
        <path d="M1 14C3 14 4 15 6 15C8 15 9 14 11 14C13 14 14 15 16 15C18 15 19 14 21 14C22 14 23 15 23 15C23 18 20 20 12 20C4 20 1 18 1 14Z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: 'Linux / Ubuntu',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#E95420" />
        <circle cx="12" cy="7" r="1.5" fill="white" />
        <circle cx="7.5" cy="14.5" r="1.5" fill="white" />
        <circle cx="16.5" cy="14.5" r="1.5" fill="white" />
        <path d="M12 9V11M9 13.5L10.5 12.5M15 13.5L13.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Git & GitHub',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="3" stroke="#F05032" strokeWidth="2" />
        <circle cx="6" cy="18" r="3" stroke="#F05032" strokeWidth="2" />
        <circle cx="18" cy="12" r="3" stroke="#F05032" strokeWidth="2" />
        <path d="M6 9V15M15 12H9" stroke="#F05032" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'QGIS',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#589632" strokeWidth="2" />
        <path d="M15 15L19 19M12 7V17M7 12H17" stroke="#93B023" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function TechMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicating array for a completely seamless infinite loop
  const loopItems = [...techItems, ...techItems];

  return (
    <div
      className="relative w-full py-5 border-y border-slate-900 bg-slate-950/40 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left and Right Fade Gradients using pure Tailwind CSS utilities */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      {/* Infinite Leftward Moving Strip powered by Framer Motion */}
      <motion.div
        className="flex items-center gap-3 w-max"
        animate={isPaused ? { x: undefined } : { x: ['0%', '-50%'] }}
        transition={{
          ease: 'linear',
          duration: 32,
          repeat: Infinity,
        }}
      >
        {loopItems.map((tech, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-colors shrink-0 group select-none cursor-default"
          >
            {tech.icon}
            <span className="text-xs font-mono text-slate-300 group-hover:text-white transition-colors font-medium">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
