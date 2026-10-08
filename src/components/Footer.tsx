import React from 'react';

interface FooterProps {
  isDark?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark = true }) => {
  return (
    <footer className={`border-t py-10 text-xs graph-bg transition-colors ${
      isDark ? 'bg-slate-950 border-slate-800/90 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b text-center md:text-left ${
          isDark ? 'border-slate-800/80' : 'border-slate-200'
        }`}>
          <div>
            <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Cervical Butterfly Pillow
            </h4>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Ergonomic Memory Foam Cervical Support Pillow
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#demo-videos" className="hover:text-teal-400 transition-colors">
              ভিডিও ডেমো
            </a>
            <a href="#reviews" className="hover:text-teal-400 transition-colors">
              রিভিউ
            </a>
            <a href="#features" className="hover:text-teal-400 transition-colors">
              ফিচার ও তুলনা
            </a>
            <a href="#order-section" className="hover:text-teal-400 transition-colors">
              অর্ডার করুন
            </a>
            <a href="#faq" className="hover:text-teal-400 transition-colors">
              এফএকিউ
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Cervical Butterfly Pillow Bangladesh. সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center justify-center gap-3">
            <span>ক্যাশ অন ডেলিভারি</span>
            <span aria-hidden="true">·</span>
            <span>সারা দেশে হোম ডেলিভারি</span>
            <span aria-hidden="true">·</span>
            <span>৭ দিনের এক্সচেঞ্জ সুবিধা</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
