import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, ShieldCheck } from 'lucide-react';

interface VideoPlayerCardProps {
  src: string;
  title: string;
  description: string;
  badge: string;
  isDark?: boolean;
}

const VideoPlayerCard: React.FC<VideoPlayerCardProps> = ({
  src,
  title,
  description,
  badge,
  isDark = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className={`backdrop-blur-md rounded-2xl border overflow-hidden shadow-xl flex flex-col transition-colors ${
      isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/50'
    }`}>
      {/* Video Container */}
      <div className="relative bg-slate-950 aspect-[4/5] sm:aspect-[9/13] max-h-[440px] flex items-center justify-center overflow-hidden group">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40 pointer-events-none" />

        {/* Badge & Audio Toggle */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-900/90 text-teal-300 border border-slate-700/80">
            {badge}
          </span>
          <button
            type="button"
            onClick={toggleMute}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center cursor-pointer border border-white/10"
            aria-label={isMuted ? 'আনমিউট করুন' : 'মিউট করুন'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-300" /> : <Volume2 className="w-3.5 h-3.5 text-teal-400" />}
          </button>
        </div>

        {/* Big Play/Pause Toggle */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            type="button"
            onClick={togglePlay}
            className={`w-12 h-12 rounded-full bg-slate-900/75 text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer ${
              isPlaying ? 'opacity-0 group-hover:opacity-100 hover:scale-105' : 'opacity-100 scale-100'
            }`}
            aria-label={isPlaying ? 'পজ' : 'প্লে'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-white" />
            ) : (
              <Play className="w-5 h-5 fill-white translate-x-0.5" />
            )}
          </button>
        </div>

        {/* Bottom Status text */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-white/90">
          <span className="font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            প্রোডাক্ট ডেমো
          </span>
          <button
            type="button"
            onClick={togglePlay}
            className="text-[10px] text-slate-400 hover:text-white underline cursor-pointer"
          >
            {isPlaying ? 'পজ করতে ট্যাপ করুন' : 'প্লে করতে ট্যাপ করুন'}
          </button>
        </div>
      </div>

      {/* Caption */}
      <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className={`text-sm sm:text-base font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h3>
          <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {description}
          </p>
        </div>

        <div className={`pt-2 border-t flex items-center gap-1.5 text-[11px] font-medium ${
          isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
        }`}>
          <ShieldCheck className="w-3.5 h-3.5 text-teal-500 shrink-0" />
          <span>১০০% অরিজিনাল সারভাইকাল বাটারফ্লাই পিলো</span>
        </div>
      </div>
    </div>
  );
};

interface VideoShowcaseSectionProps {
  isDark?: boolean;
}

export const VideoShowcaseSection: React.FC<VideoShowcaseSectionProps> = ({ isDark = true }) => {
  const video1 = 'https://cdn.shopify.com/videos/c/o/v/53aaa9fe92ea43d2bca0a998b35c81cc.mp4';
  const video2 = 'https://cdn.shopify.com/videos/c/o/v/36f65cc7fdda4b8b802e87d41d9b0f5e.mp4';

  return (
    <section id="demo-videos" className={`py-10 sm:py-16 border-b graph-bg relative ${
      isDark ? 'border-slate-800' : 'border-slate-200'
    }`}>
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-1.5 mb-6 sm:mb-8">
          <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
            ভিডিও ডেমোস্ট্রেশন
          </span>
          <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            বাস্তবে কীভাবে সাপোর্ট দেয়—ভিডিওতে দেখুন
          </h2>
          <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Cervical Butterfly Pillow-এর বিশেষ গঠন, স্লো-রিবউন্ড ফোম এবং শোয়ার সঠিক ভঙ্গি সরাসরি দেখে নিন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          <VideoPlayerCard
            src={video1}
            title="বাটারফ্লাই ডিজাইন ও ফোম কমফোর্ট টেস্ট"
            description="ভিডিওতে দেখুন কীভাবে এরগনোমিক বাটারফ্লাই কনট্যুর শরীরের চাপ শোষণ করে স্বাভাবিক আকৃতি বজায় রাখে।"
            badge="ভিডিও ১ — কমফোর্ট ও ফোম"
            isDark={isDark}
          />

          <VideoPlayerCard
            src={video2}
            title="সঠিক ঘুমের ভঙ্গি ও ব্যবহার প্রণালী"
            description="পাশ ফিরে বা চিৎ হয়ে শোয়ার সময় ঘাড় ও কাঁধের সাপোর্ট কীভাবে সঠিক সরলরেখায় থাকে তা বাস্তবে দেখুন।"
            badge="ভিডিও ২ — স্লিপিং পজিশন"
            isDark={isDark}
          />
        </div>
      </div>
    </section>
  );
};
