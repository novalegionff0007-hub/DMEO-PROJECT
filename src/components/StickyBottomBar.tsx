import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface StickyBottomBarProps {
  onOrderClick: () => void;
  isDark?: boolean;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOrderClick, isDark = true }) => {
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl border-t px-3 py-2 sm:hidden shadow-2xl transition-colors ${
      isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
    }`}>
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <div className="flex flex-col shrink-0">
          <div className="flex items-baseline gap-1">
            <span className={`text-base font-black tabular-nums ${isDark ? 'text-white' : 'text-slate-900'}`}>৳১,৮৫০</span>
            <span className="text-[11px] text-slate-400 line-through tabular-nums">৳২,৯৫০</span>
          </div>
          <span className="text-[10px] font-semibold text-teal-500">
            ক্যাশ অন ডেলিভারি
          </span>
        </div>

        {/* Slightly smaller mobile CTA button */}
        <button
          type="button"
          onClick={onOrderClick}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-teal-400 active:bg-teal-300 text-slate-950 font-black text-xs transition-transform active:scale-95 shadow-sm shadow-teal-500/20 cursor-pointer whitespace-nowrap"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-slate-950 shrink-0" />
          <span>এখনই অর্ডার করুন</span>
        </button>
      </div>
    </div>
  );
};
