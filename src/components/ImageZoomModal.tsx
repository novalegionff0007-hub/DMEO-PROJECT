import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { ProductVariant } from './HeroSection';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeVariant: ProductVariant;
  variants: ProductVariant[];
  onSelectVariant: (variantId: string) => void;
  isDark?: boolean;
}

export const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  isOpen,
  onClose,
  activeVariant,
  variants,
  onSelectVariant,
  isDark = true,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.35, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.35, 0.9));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="zoom-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className={`relative w-full max-w-3xl rounded-2xl border p-4 sm:p-6 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden ${
          isDark
            ? 'bg-slate-900 border-slate-800 text-white'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-700/50">
          <div>
            <h3 id="zoom-modal-title" className="text-sm sm:text-base font-bold">
              Cervical Butterfly Pillow — {activeVariant.nameBn}
            </h3>
            <p className="text-xs text-slate-400">
              জুম করে খুঁটিনাটি সেলাই ও এরগনোমিক কনট্যুর পর্যবেক্ষণ করুন
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-slate-800/80 rounded-lg p-1 border border-slate-700">
              <button
                type="button"
                onClick={handleZoomIn}
                className="p-1.5 rounded hover:bg-slate-700 text-slate-200 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                className="p-1.5 rounded hover:bg-slate-700 text-slate-200 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                className="p-1.5 rounded hover:bg-slate-700 text-slate-200 cursor-pointer text-xs font-mono"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Zoom Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Main Zoomable Viewport */}
        <div className="flex-1 min-h-[300px] sm:min-h-[420px] flex items-center justify-center overflow-auto p-4 select-none relative bg-slate-950/60 rounded-xl my-3">
          <div
            className="transition-transform duration-200 ease-out cursor-grab active:cursor-grabbing flex items-center justify-center w-full h-full"
            style={{ transform: `scale(${zoomLevel})` }}
            onClick={() => setZoomLevel((prev) => (prev > 1.2 ? 1 : 1.7))}
            title="ট্যাপ করে জুম ইন/আউট করুন"
          >
            <img
              src={activeVariant.imageUrl}
              alt={activeVariant.nameBn}
              className="max-h-[60vh] max-w-full object-contain filter drop-shadow-2xl pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="absolute bottom-3 left-3 bg-slate-900/80 text-[11px] text-slate-300 px-2.5 py-1 rounded-md border border-slate-700 backdrop-blur-md">
            জুম: {Math.round(zoomLevel * 100)}% (ট্যাপ করে জুম টগল করুন)
          </div>
        </div>

        {/* Color Switcher Strip inside Zoom Modal */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
          <span className="text-xs text-slate-400 font-medium">অন্যান্য কালার দেখুন:</span>
          <div className="flex items-center gap-2">
            {variants.map((v) => {
              const isSelected = v.id === activeVariant.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => {
                    onSelectVariant(v.id);
                    setZoomLevel(1);
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                    isSelected
                      ? 'border-teal-400 bg-teal-950/60 text-teal-300'
                      : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <span
                    className="w-3 h-3 rounded-full border border-white/20"
                    style={{ backgroundColor: v.colorHex }}
                  />
                  <span>{v.nameEn}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
