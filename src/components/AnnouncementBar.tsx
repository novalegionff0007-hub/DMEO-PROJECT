import React from 'react';
import { Sparkles, Truck, ShieldCheck, Flame, RotateCcw } from 'lucide-react';

interface AnnouncementBarProps {
  variant?: 'top' | 'middle';
  isDark?: boolean;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  variant = 'top',
  isDark = true,
}) => {
  const announcements = [
    { text: 'সীমিত সময়ের ধামাকা অফার: ৩৭% পর্যন্ত বিশেষ ছাড়!', icon: Flame },
    { text: '২টি বালিশ অর্ডারে সারা দেশে ফ্রি ডেলিভারি + অতিরিক্ত ৳২০০ ছাড়!', icon: Truck },
    { text: '১০০% ক্যাশ অন ডেলিভারি — পণ্য হাতে পেয়ে চেক করে মূল্য পরিশোধ করুন', icon: ShieldCheck },
    { text: '৭ দিনের সহজ এক্সচেঞ্জ ও রিটার্ন গ্যারান্টি', icon: RotateCcw },
    { text: 'অরিজিনাল Hi-Per™ মেমোরি ফোম — আরামদায়ক ঘুমের স্মার্ট সাপোর্ট', icon: Sparkles },
  ];

  // Repeat for continuous infinite seamless loop
  const repeatedItems = [...announcements, ...announcements, ...announcements];

  return (
    <div
      className={`w-full overflow-hidden select-none border-y text-xs font-semibold ${
        variant === 'top'
          ? isDark
            ? 'bg-teal-950/80 border-teal-800/60 text-teal-300 py-1.5'
            : 'bg-teal-600 border-teal-700 text-white py-1.5 shadow-xs'
          : isDark
            ? 'bg-slate-900/90 border-slate-800 text-slate-300 py-2.5 my-8 shadow-inner'
            : 'bg-slate-100 border-slate-200 text-slate-800 py-2.5 my-8 shadow-inner'
      }`}
    >
      <div className="animate-marquee-flow flex items-center gap-8 whitespace-nowrap">
        {repeatedItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 shrink-0 opacity-80" />
              <span>{item.text}</span>
              <span className="opacity-40 ml-4 font-mono">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
