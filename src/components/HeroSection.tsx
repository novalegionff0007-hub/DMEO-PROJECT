import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Truck, RotateCcw, ArrowRight, ZoomIn } from 'lucide-react';
import { ImageZoomModal } from './ImageZoomModal';

export interface ProductVariant {
  id: string;
  nameBn: string;
  nameEn: string;
  imageUrl: string;
  colorHex: string;
}

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: 'grey',
    nameBn: 'ধূসর (Grey)',
    nameEn: 'Grey',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0553/0419/2034/files/Butterfly-P_LI_Grey_01_74c3be27-0dcb-45f3-a6d8-dbaffb48428b.png?v=1739885554&width=1080',
    colorHex: '#64748B',
  },
  {
    id: 'blue',
    nameBn: 'গাঢ় নীল (Blue)',
    nameEn: 'Blue',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0553/0419/2034/files/Butterfly-P_LI_Blue_01_2687325b-45be-4823-a514-011918521231.png?v=1739885535&width=1080',
    colorHex: '#1E3A8A',
  },
  {
    id: 'beige',
    nameBn: 'ক্লাসিক বেইজ (Beige)',
    nameEn: 'Beige',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0553/0419/2034/files/Butterfly-P_LI_Beige_01_d4b211f9-2749-48ad-a468-aeb6a7f24898.png?v=1739885510&width=1080',
    colorHex: '#D6C7A1',
  },
  {
    id: 'pink',
    nameBn: 'সফট পিঙ্ক (Pink)',
    nameEn: 'Pink',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0553/0419/2034/files/BP-01-Pink_0b8b945c-105d-45d4-abf4-55a0028cdda9.jpg?v=1755155821&width=1080',
    colorHex: '#F472B6',
  },
];

interface HeroSectionProps {
  onOrderClick: () => void;
  selectedColorId: string;
  onColorChange: (colorId: string) => void;
  isDark?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOrderClick,
  selectedColorId,
  onColorChange,
  isDark = false,
}) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const activeIndex = PRODUCT_VARIANTS.findIndex((v) => v.id === selectedColorId);
  const activeVariant = PRODUCT_VARIANTS[activeIndex >= 0 ? activeIndex : 0];

  // Auto-sliding carousel: images change automatically every 3.5s
  useEffect(() => {
    if (isZoomOpen || isUserInteracting) return;

    const interval = setInterval(() => {
      onColorChange(PRODUCT_VARIANTS[(activeIndex + 1) % PRODUCT_VARIANTS.length].id);
    }, 3500);

    return () => clearInterval(interval);
  }, [activeIndex, isZoomOpen, isUserInteracting, onColorChange]);

  const handleManualColorChange = (variantId: string) => {
    onColorChange(variantId);
    setIsUserInteracting(true);
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 10000);
  };

  return (
    <section
      className={`relative pt-3 pb-8 sm:pt-6 sm:pb-12 overflow-hidden border-b graph-bg transition-colors ${
        isDark ? 'border-slate-800' : 'border-[#E6DEC8]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        {/* Rating Header (Compact) */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs mb-2 text-center">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className={`font-bold tabular-nums ${isDark ? 'text-white' : 'text-[#292524]'}`}>
            ৪.৭/৫.০
          </span>
          <span className="opacity-40">·</span>
          <span className={isDark ? 'text-slate-300' : 'text-[#574F43]'}>
            আরামদায়ক ঘুমের জন্য স্মার্ট সাপোর্ট
          </span>
        </div>

        {/* 1. SEAMLESS PRODUCT IMAGE BOX (Zero empty side void, snug fit) */}
        <div
          className={`max-w-md sm:max-w-lg mx-auto rounded-2xl p-3 sm:p-4 shadow-xl mb-3.5 transition-colors border ${
            isDark
              ? 'bg-slate-900 border-slate-800 shadow-black/40'
              : 'bg-[#FFFDF9] border-[#E6DEC8] shadow-stone-300/40'
          }`}
        >
          {/* Header Row: Active Color Name & Carousel Progress Dots */}
          <div className="flex items-center justify-between mb-2 px-1 text-[11px]">
            <span
              className={`font-semibold px-2 py-0.5 rounded border ${
                isDark
                  ? 'text-teal-400 bg-teal-950/70 border-teal-800/80'
                  : 'text-teal-700 bg-teal-50 border-teal-200'
              }`}
            >
              {activeVariant.nameBn}
            </span>

            {/* Carousel Step Dots */}
            <div className="flex items-center gap-1.5">
              {PRODUCT_VARIANTS.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => handleManualColorChange(v.id)}
                  aria-label={`Show ${v.nameEn} variant`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    v.id === activeVariant.id
                      ? 'w-4 bg-teal-500'
                      : isDark
                        ? 'w-1.5 bg-slate-700'
                        : 'w-1.5 bg-stone-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Seamless Image Stage (No letterboxed inner dark borders, fits image naturally) */}
          <div
            onClick={() => setIsZoomOpen(true)}
            className="relative w-full flex items-center justify-center p-1 cursor-pointer group select-none min-h-[220px] sm:min-h-[280px]"
            title="ছবি জুম করতে ক্লিক করুন"
          >
            <img
              src={activeVariant.imageUrl}
              alt={`Cervical Butterfly Pillow - ${activeVariant.nameBn}`}
              className="w-full max-h-[260px] sm:max-h-[320px] object-contain filter drop-shadow-md transition-all duration-500 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />

            {/* Subtle Zoom Badge in Corner */}
            <div className="absolute bottom-1 right-1 bg-black/65 hover:bg-black/85 text-white px-2 py-1 rounded-md border border-white/20 backdrop-blur-md flex items-center gap-1 text-[10px] font-semibold transition-opacity">
              <ZoomIn className="w-3 h-3 text-teal-400" />
              <span>জুম</span>
            </div>
          </div>

          {/* Color Switcher Swatches */}
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mt-2 pt-2 border-t border-stone-200/60 dark:border-slate-800">
            {PRODUCT_VARIANTS.map((variant) => {
              const isSelected = variant.id === activeVariant.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => handleManualColorChange(variant.id)}
                  className={`p-1.5 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    isSelected
                      ? isDark
                        ? 'border-teal-500 bg-teal-950/40 ring-1 ring-teal-500/50'
                        : 'border-teal-600 bg-teal-50/80 ring-1 ring-teal-600/40'
                      : isDark
                        ? 'border-slate-800 bg-slate-950/70 opacity-70 hover:opacity-100 hover:border-slate-700'
                        : 'border-[#E6DEC8] bg-[#FAF7F0] opacity-80 hover:opacity-100 hover:border-stone-400'
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                    style={{ backgroundColor: variant.colorHex }}
                  />
                  <span
                    className={`text-[10px] font-bold truncate max-w-full ${
                      isDark ? 'text-white' : 'text-[#292524]'
                    }`}
                  >
                    {variant.nameEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. PRICE & ERGONOMIC COMPACT MOBILE CTA */}
        <div className="max-w-md mx-auto mb-4 text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span
              className={`text-2xl sm:text-3xl font-black tabular-nums ${
                isDark ? 'text-white' : 'text-[#292524]'
              }`}
            >
              ৳১,৮৫০
            </span>
            <span className="text-sm sm:text-base text-stone-400 line-through tabular-nums">
              ৳২,৯৫০
            </span>
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded border ${
                isDark
                  ? 'text-teal-400 bg-teal-950 border-teal-800'
                  : 'text-teal-700 bg-teal-50 border-teal-200'
              }`}
            >
              ৩৭% ছাড়
            </span>
          </div>

          <button
            type="button"
            onClick={onOrderClick}
            className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-teal-400 hover:bg-teal-300 active:scale-98 text-slate-950 font-black text-sm sm:text-base transition-all shadow-md shadow-teal-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>আজই অর্ডার করুন (ক্যাশ অন ডেলিভারি)</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        {/* 3. REFINED HEADLINE AND TEXT BELOW CTA */}
        <div className="max-w-xl mx-auto text-center space-y-1.5 mb-4">
          <h1
            className={`text-lg sm:text-2xl font-bold tracking-tight leading-snug ${
              isDark ? 'text-white' : 'text-[#292524]'
            }`}
          >
            ঘুম থেকে উঠে ঘাড় শক্ত বা ব্যথা লাগে?
          </h1>

          <p className="text-xs sm:text-sm font-semibold text-teal-600 dark:text-teal-400 leading-relaxed">
            সঠিক বালিশই পারে আপনার ঘুমের আরামটা বদলে দিতে।
          </p>

          <p
            className={`text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-[#574F43]'
            }`}
          >
            <strong className={isDark ? 'text-white' : 'text-[#292524]'}>
              Cervical Butterfly Pillow
            </strong>{' '}
            — আপনার ঘাড়, মাথা ও কাঁধকে আরামদায়ক সাপোর্ট দেওয়ার জন্য তৈরি Ergonomic Memory Foam Pillow।
          </p>
        </div>

        {/* Trust Badges */}
        <div
          className={`max-w-md mx-auto grid grid-cols-3 gap-2 pt-2 border-t text-[11px] sm:text-xs text-center ${
            isDark ? 'border-slate-800 text-slate-400' : 'border-[#E6DEC8] text-[#574F43]'
          }`}
        >
          <div className="flex flex-col items-center gap-0.5">
            <Truck className="w-3.5 h-3.5 text-teal-500" />
            <span>ক্যাশ অন ডেলিভারি</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <RotateCcw className="w-3.5 h-3.5 text-teal-500" />
            <span>৭ দিনের রিটার্ন</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
            <span>১০০% মেমোরি ফোম</span>
          </div>
        </div>
      </div>

      {/* Picture Zoom Modal */}
      <ImageZoomModal
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        activeVariant={activeVariant}
        variants={PRODUCT_VARIANTS}
        onSelectVariant={handleManualColorChange}
        isDark={isDark}
      />
    </section>
  );
};
