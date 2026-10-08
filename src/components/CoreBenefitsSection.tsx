import React from 'react';
import { Check, X, ShieldCheck, Compass, SlidersHorizontal, Wind } from 'lucide-react';

interface CoreBenefitsSectionProps {
  isDark?: boolean;
}

export const CoreBenefitsSection: React.FC<CoreBenefitsSectionProps> = ({ isDark = true }) => {
  const highlights = [
    {
      icon: Compass,
      title: 'Ergonomic Butterfly Shape',
      desc: 'মাথা, ঘাড় ও কাঁধের জন্য বিশেষ contour design, যা ঘুমে শরীরের সঠিক অ্যালাইনমেন্ট ধরে রাখে।',
    },
    {
      icon: ShieldCheck,
      title: 'Hi-Per™ Memory Foam',
      desc: '৫০ডি হাই-ডেনসিটি মেমোরি ফোম যা ৩-৫ সেকেন্ডে স্বাভাবিক আকারে ফিরে আসে এবং চাপ শোষণ করে।',
    },
    {
      icon: SlidersHorizontal,
      title: 'Dual-Height Design',
      desc: '১০ সেমি ও ১২ সেমি—আপনার পছন্দের ঘুমের ভঙ্গি অনুযায়ী বালিশটি ঘুরিয়ে উচ্চতা বেছে নিন।',
    },
    {
      icon: Wind,
      title: 'Washable Breathable Cover',
      desc: 'বাতাস চলাচলে সহায়ক ত্বক-বান্ধব আইস-সিল্ক কভার যা সহজেই জিপার খুলে ধোয়া যায়।',
    },
  ];

  return (
    <section id="features" className={`py-10 sm:py-16 border-b graph-bg relative ${
      isDark ? 'border-slate-800' : 'border-slate-200'
    }`}>
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-1.5 mb-6 sm:mb-8">
          <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
            কেন এই বালিশটি আলাদা
          </span>
          <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            সাধারণ বালিশ বনাম Cervical Butterfly Pillow
          </h2>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            মাথা ও ঘাড়ের সঠিক এরগনোমিক সাপোর্ট আপনার ঘুমের অস্বস্তি দূর করে।
          </p>
        </div>

        {/* 4 Core Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 shadow-md transition-colors ${
                  isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  isDark ? 'bg-slate-800 text-teal-400' : 'bg-teal-50 text-teal-600'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Comparison Box */}
        <div className={`border rounded-2xl p-4 sm:p-6 shadow-xl transition-colors ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/50'
        }`}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
            {/* Regular Pillow */}
            <div className={`space-y-2 pr-2 border-r ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className={`font-bold text-rose-400 flex items-center gap-1.5 pb-2 border-b ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <X className="w-4 h-4 shrink-0" />
                <span>সাধারণ বালিশ</span>
              </div>
              <ul className={`space-y-1.5 text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>• শুধু মাথার নিচে সাপোর্ট দেয়</li>
                <li>• কোনো নির্দিষ্ট এরগনোমিক কার্ভ নেই</li>
                <li>• উচ্চতা পরিবর্তন করা যায় না</li>
                <li>• হাত বা কাঁধ রাখার স্লট নেই</li>
              </ul>
            </div>

            {/* Butterfly Pillow */}
            <div className="space-y-2 pl-2">
              <div className={`font-bold text-teal-500 flex items-center gap-1.5 pb-2 border-b ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <Check className="w-4 h-4 shrink-0" />
                <span>Butterfly Pillow</span>
              </div>
              <ul className={`space-y-1.5 text-xs ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                <li>✓ মাথা ও ঘাড়ের ব্যালান্সড সাপোর্ট</li>
                <li>✓ বাটারফ্লাই কনট্যুর ডিজাইন</li>
                <li>✓ ১০ ও ১২ সেমি ডুয়েল হাইট</li>
                <li>✓ সাইড স্লিপারদের আর্ম গ্রুভস</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
