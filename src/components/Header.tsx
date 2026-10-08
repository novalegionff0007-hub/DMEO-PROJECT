import React from 'react';
import { ShoppingBag, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOrderClick: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOrderClick, isDark, onToggleTheme }) => {
  return (
    <div
      className={`w-full backdrop-blur-xl border-b transition-colors shadow-xs ${
        isDark
          ? 'bg-slate-900/95 border-slate-800 text-white shadow-black/20'
          : 'bg-[#F6F2E9]/95 border-[#E6DEC8] text-[#292524] shadow-stone-300/30'
      }`}
    >
      <div className="max-w-5xl mx-auto px-3 sm:px-6 h-12 sm:h-14 flex items-center justify-between gap-2">
        {/* Zone 1: Beautiful Logo + Wordmark */}
        <a href="#" className="flex items-center gap-2 text-sm sm:text-base font-bold tracking-tight min-w-0 group">
          <Logo size={28} className="sm:w-8 sm:h-8 group-hover:scale-105 transition-transform" />
          <span className="truncate hidden sm:inline font-bold">Cervical Butterfly Pillow</span>
          <span className="truncate sm:hidden font-bold">Butterfly Pillow</span>
        </a>

        {/* Zone 2: Navigation links on desktop */}
        <nav
          className={`hidden md:flex items-center gap-5 text-xs lg:text-sm font-medium ${
            isDark ? 'text-slate-300' : 'text-[#574F43]'
          }`}
        >
          <a href="#demo-videos" className="hover:text-teal-600 transition-colors whitespace-nowrap">
            ভিডিও ডেমো
          </a>
          <a href="#reviews" className="hover:text-teal-600 transition-colors whitespace-nowrap">
            রিভিউ
          </a>
          <a href="#features" className="hover:text-teal-600 transition-colors whitespace-nowrap">
            ফিচার
          </a>
          <a href="#faq" className="hover:text-teal-600 transition-colors whitespace-nowrap">
            প্রশ্নোত্তর
          </a>
        </nav>

        {/* Zone 3: Dark/Light Mode Switcher & Primary Action */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className={`p-1.5 sm:p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-center ${
              isDark
                ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
                : 'bg-[#EDE7DA] border-[#D9CFC0] text-stone-700 hover:bg-[#E4DDCB]'
            }`}
            title={isDark ? 'ক্রিম লাইট মোডে পরিবর্তন করুন' : 'ডার্ক মোডে পরিবর্তন করুন'}
            aria-label="Toggle Dark and Light Mode"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#443E35]" />}
          </button>

          <button
            type="button"
            onClick={onOrderClick}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-95 rounded-lg transition-all shadow-sm shadow-teal-500/20 whitespace-nowrap cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-slate-950 shrink-0" />
            <span>অর্ডার করুন</span>
          </button>
        </div>
      </div>
    </div>
  );
};
