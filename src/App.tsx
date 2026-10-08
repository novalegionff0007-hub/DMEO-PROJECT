/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AnnouncementBar } from './components/AnnouncementBar';
import { HeroSection } from './components/HeroSection';
import { VideoShowcaseSection } from './components/VideoShowcaseSection';
import { ReviewVideosSection } from './components/ReviewVideosSection';
import { CoreBenefitsSection } from './components/CoreBenefitsSection';
import { OrderFormSection } from './components/OrderFormSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { OrderSuccessModal, OrderDetails } from './components/OrderSuccessModal';

export default function App() {
  // Default to Creamy Light Mode as requested ("DEAFAULT WEBSITE CREAM LIGHT MOOD EI RAKHBA")
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return false;
  });

  const [selectedColorId, setSelectedColorId] = useState<string>('grey');
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleScrollToOrder = () => {
    const el = document.getElementById('order-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('customer-name');
        if (input) {
          input.focus();
        }
      }, 500);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col pb-14 sm:pb-0 overflow-x-hidden max-w-full transition-colors duration-200 ${
        isDark
          ? 'bg-[#0B0F17] text-slate-100 selection:bg-teal-400 selection:text-slate-950'
          : 'bg-[#F6F2E9] text-[#292524] selection:bg-teal-600 selection:text-white'
      }`}
    >
      {/* 1. PERMANENTLY LOCKED FIXED HEADER (Zero scroll shift, locked on mobile and desk) */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full shadow-xs">
        <AnnouncementBar variant="top" isDark={isDark} />
        <Header
          onOrderClick={handleScrollToOrder}
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />
      </div>

      {/* Main Content with top padding matching fixed header height */}
      <main className="flex-1 w-full overflow-x-hidden pt-[76px] sm:pt-[88px]">
        {/* 2. Hero Section (Snug Box with Auto-Slide & Zoom) */}
        <HeroSection
          onOrderClick={handleScrollToOrder}
          selectedColorId={selectedColorId}
          onColorChange={setSelectedColorId}
          isDark={isDark}
        />

        {/* 3. Product Demonstration Videos */}
        <VideoShowcaseSection isDark={isDark} />

        {/* 4. Middle Flowing Announcement Ticker */}
        <AnnouncementBar variant="middle" isDark={isDark} />

        {/* 5. Customer Video Reviews (2 Columns Side-by-Side on Mobile) */}
        <ReviewVideosSection isDark={isDark} />

        {/* 6. Streamlined Core Benefits & Comparison */}
        <CoreBenefitsSection isDark={isDark} />

        {/* 7. High-Converting Responsive Checkout Form */}
        <OrderFormSection
          onOrderSuccess={(order) => setCompletedOrder(order)}
          selectedColorId={selectedColorId}
          onColorChange={setSelectedColorId}
          isDark={isDark}
        />

        {/* 8. FAQ Section */}
        <FaqSection isDark={isDark} />
      </main>

      {/* 9. Footer */}
      <Footer isDark={isDark} />

      {/* 10. Mobile Sticky Bottom CTA Bar */}
      <StickyBottomBar onOrderClick={handleScrollToOrder} isDark={isDark} />

      {/* 11. Floating WhatsApp Action Button (+880 1909-666141) */}
      <WhatsAppFloatingButton />

      {/* 12. Order Confirmation Receipt Modal */}
      <OrderSuccessModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
        isDark={isDark}
      />
    </div>
  );
}
