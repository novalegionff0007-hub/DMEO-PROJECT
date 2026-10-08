import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  isDark?: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ isDark = true }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'এই বালিশ কি Side Sleeper-দের জন্য উপযোগী?',
      a: 'হ্যাঁ। Side sleeping-এর সময় ঘাড় ও কাঁধকে সাপোর্ট দেওয়ার জন্য এতে বিশেষ arm-support grooves রয়েছে, যা কাঁধ সংকুচিত হওয়া ও অবশভাব রোধ করে।',
    },
    {
      q: 'এটি কি Memory Foam Pillow?',
      a: 'হ্যাঁ। এটি Hi-Per™ Memory Foam দিয়ে তৈরি, যা শরীরের প্রাকৃতিক গঠন অনুযায়ী স্বয়ংক্রিয়ভাবে মানিয়ে নেয় এবং চাপ শোষণ করে।',
    },
    {
      q: 'কত ধরনের height ব্যবহার করা যায়?',
      a: 'Dual-height design থাকায় আপনার comfort ও sleeping position অনুযায়ী height নির্বাচন করা যায়। একপাশে ১০ সেমি এবং অন্যপাশে ১২ সেমি—বালিশটি ১৮০ ডিগ্রি ঘুরিয়ে আপনার পছন্দের উচ্চতা বেছে নিতে পারেন।',
    },
    {
      q: 'নতুন ব্যবহার করলে অস্বস্তি লাগতে পারে?',
      a: 'সাধারণ বালিশ থেকে ergonomic pillow-এ পরিবর্তন করলে শরীরের মানিয়ে নিতে কয়েক রাত সময় লাগতে পারে। কারণ পূর্বে ভুল ভঙ্গিতে থাকার পর পেশিগুলো নতুন সঠিক বিন্যাসে অভ্যস্থ হতে সাধারণত ৩ থেকে ৫ দিন সময় নেয়।',
    },
    {
      q: 'এটি কি কোনো রোগের চিকিৎসা করে?',
      a: 'না। এটি একটি ergonomic support pillow, কোনো medical treatment নয়। এটি আপনার ঘুমের সময় ঘাড় ও মেরুদণ্ডের সঠিক অঙ্গবিন্যাস বজায় রাখতে সাহায্য করে যাতে অতিরিক্ত চাপ ও অস্বস্তি সৃষ্টি না হয়।',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className={`py-10 sm:py-16 border-b graph-bg relative ${
      isDark ? 'border-slate-800' : 'border-slate-200'
    }`}>
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-1.5 mb-6 sm:mb-8">
          <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
            সাধারণ জিজ্ঞাসা
          </span>
          <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)
          </h2>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            বালিশটি অর্ডার করার আগে আপনার প্রয়োজনীয় প্রশ্নের উত্তর জেনে নিন।
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-2.5 max-w-2xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl overflow-hidden shadow-sm transition-colors ${
                  isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-3.5 px-4 sm:px-5 flex items-center justify-between text-left gap-3 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-xs sm:text-sm font-bold leading-snug ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {faq.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-teal-400/20 text-teal-400'
                        : isDark
                          ? 'bg-slate-800 text-slate-400'
                          : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>
                {isOpen && (
                  <div className={`px-4 sm:px-5 pb-4 pt-1 border-t text-xs leading-relaxed ${
                    isDark ? 'border-slate-800 text-slate-300' : 'border-slate-100 text-slate-600'
                  }`}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
