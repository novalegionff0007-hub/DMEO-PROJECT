import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onOrderClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOrderClick }) => {
  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white text-center graph-bg relative border-b border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 relative z-10">
        <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
          স্মার্ট স্লিপ সলিউশন
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          প্রতিদিনের ঘুমটা আরও comfortable করুন।
        </h2>
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
          সঠিক সাপোর্ট দিয়ে ঘুমান। সকালে উঠুন আরও সতেজ অনুভূতি নিয়ে।
        </p>
        <div className="pt-4">
          <button
            type="button"
            onClick={onOrderClick}
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-base sm:text-lg transition-all shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 cursor-pointer active:scale-98"
          >
            <ShoppingBag className="w-5 h-5 text-slate-950" />
            <span>এখনই অর্ডার করুন</span>
            <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 font-medium pt-2">
          Cervical Butterfly Pillow — ঘুমের জন্য Smart Support।
        </p>
      </div>
    </section>
  );
};
