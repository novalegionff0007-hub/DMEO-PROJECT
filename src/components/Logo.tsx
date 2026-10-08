import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative shrink-0 flex items-center justify-center rounded-xl overflow-hidden shadow-sm ${className}`}
    >
      <svg
        viewBox="0 0 64 64"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D9488" />
            <stop offset="50%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#065F46" />
          </linearGradient>
        </defs>

        {/* Outer Tile */}
        <rect width="64" height="64" rx="16" fill="#042F2E" />
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="14"
          stroke="#14B8A6"
          strokeOpacity="0.4"
          strokeWidth="2"
        />

        {/* Left Wing (Butterfly wave) */}
        <path
          d="M30 18 C22 13, 10 16, 8 26 C6 35, 12 43, 24 45 C28 45.5, 30 43, 30 40 C30 35, 23 33, 21 28 C19 23, 24 19, 30 18 Z"
          fill="url(#logoWingGrad)"
        />

        {/* Right Wing (Butterfly wave) */}
        <path
          d="M34 18 C42 13, 54 16, 56 26 C58 35, 52 43, 40 45 C36 45.5, 34 43, 34 40 C34 35, 41 33, 43 28 C45 23, 40 19, 34 18 Z"
          fill="url(#logoWingGrad)"
        />

        {/* Cervical Center Contour */}
        <path
          d="M32 20 C30 24, 27 28, 27 34 C27 39, 30 42, 32 44 C34 42, 37 39, 37 34 C37 28, 34 24, 32 20 Z"
          fill="#99F6E4"
        />

        {/* Alignment Points */}
        <circle cx="32" cy="32" r="3.2" fill="#FFFFFF" />
        <circle cx="32" cy="24" r="2" fill="#5EEAD4" />
        <circle cx="32" cy="40" r="2" fill="#5EEAD4" />
      </svg>
    </div>
  );
};
