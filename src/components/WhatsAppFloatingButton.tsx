import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  // Updated WhatsApp Number: +880 1909-666141
  const phoneNumber = '8801909666141';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'আসসালামু আলাইকুম, Cervical Butterfly Pillow সম্পর্কে জানতে ও অর্ডার করতে চাই।'
  )}`;

  return (
    <aside
      aria-label="WhatsApp Support"
      className="fixed bottom-[64px] sm:bottom-6 right-3 sm:right-6 z-40 flex items-center group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white p-2.5 sm:px-3.5 sm:py-2.5 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95"
        aria-label="WhatsApp-এ মেসেজ দিন"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 fill-white stroke-[#25D366]" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full" />
        </span>
        <span className="text-xs font-bold tracking-tight whitespace-nowrap hidden sm:inline">
          হোয়াটসঅ্যাপ
        </span>
      </a>
    </aside>
  );
};
