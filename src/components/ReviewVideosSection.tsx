import React, { useRef, useState } from 'react';
import { Star, Play, Pause, Volume2, VolumeX, CheckCircle } from 'lucide-react';

interface ReviewVideoItem {
  id: string;
  videoUrl: string;
  customerName: string;
  location: string;
  stars: number;
  reviewText: string;
  tag: string;
}

const REVIEW_ITEMS: ReviewVideoItem[] = [
  {
    id: 'rev-1',
    videoUrl: 'https://d2uuihegjef4te.cloudfront.net/reviews/QNsopoRay/0.mp4',
    customerName: 'তানভীর আহমেদ',
    location: 'ধানমন্ডি, ঢাকা',
    stars: 5,
    reviewText: 'অফিসে বসে কাজ করে ঘাড়ের ব্যথায় ভুগছিলাম। এই বালিশটি ব্যবহারে সকালটা সতেজ লাগে।',
    tag: 'ঘাড়ের ব্যথা উপশম',
  },
  {
    id: 'rev-2',
    videoUrl: 'https://d2uuihegjef4te.cloudfront.net/reviews/FZ-YdL6NY/0.mp4',
    customerName: 'নুসরাত জাহান',
    location: 'পাঁচলাইশ, চট্টগ্রাম',
    stars: 5,
    reviewText: 'আমি সাইড স্লিপার। এর আর্ম গ্রুভসের কারণে হাত বা কাঁধ অবশ হয় না। ফোম অনেক সফট।',
    tag: 'সাইড স্লিপার সাপোর্ট',
  },
  {
    id: 'rev-3',
    videoUrl: 'https://d2uuihegjef4te.cloudfront.net/reviews/CRMR2KNpt/0.mp4',
    customerName: 'রাশেদুল হাসান',
    location: 'উপশহর, সিলেট',
    stars: 5,
    reviewText: 'আগে রাতে বারবার পাশ ফিরে ঘুম ভাঙত। এখন একদম গভীর ও আরামদায়ক ঘুম হয়।',
    tag: 'গভীর ও নিরবচ্ছিন্ন ঘুম',
  },
];

interface ReviewCardProps {
  item: ReviewVideoItem;
  isDark?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ item, isDark = true }) => {
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
    <div className={`backdrop-blur-md rounded-xl overflow-hidden shadow-lg flex flex-col group border transition-colors ${
      isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/50'
    }`}>
      {/* 2-Column Friendly Compact Video Container */}
      <div className="relative aspect-[9/14] bg-slate-950 overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={item.videoUrl}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40 pointer-events-none" />

        {/* Audio Mute/Unmute */}
        <div className="absolute top-2 right-2 z-10">
          <button
            type="button"
            onClick={toggleMute}
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900/80 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
            aria-label={isMuted ? 'আনমিউট' : 'মিউট'}
          >
            {isMuted ? <VolumeX className="w-3 h-3 text-slate-300" /> : <Volume2 className="w-3 h-3 text-teal-400" />}
          </button>
        </div>

        {/* Center Play/Pause button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            type="button"
            onClick={togglePlay}
            className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/75 text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer ${
              isPlaying ? 'opacity-0 group-hover:opacity-100 hover:scale-105' : 'opacity-100 scale-100'
            }`}
            aria-label={isPlaying ? 'পজ' : 'প্লে'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-white" />
            ) : (
              <Play className="w-4 h-4 fill-white translate-x-0.5" />
            )}
          </button>
        </div>

        {/* Verified Badge Overlay */}
        <div className="absolute bottom-2 left-2 right-2 z-10 flex items-center justify-between text-[10px] text-white">
          <span className="flex items-center gap-1 text-emerald-400 font-semibold truncate">
            <CheckCircle className="w-3 h-3 shrink-0" />
            <span className="truncate">ভেরিফাইড</span>
          </span>
          <div className="flex items-center text-amber-400">
            {[...Array(item.stars)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-amber-400 stroke-amber-400" />
            ))}
          </div>
        </div>
      </div>

      {/* Review details */}
      <div className="p-2 sm:p-3 flex-1 flex flex-col justify-between space-y-1.5">
        <p className={`text-[11px] sm:text-xs leading-snug line-clamp-3 ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}>
          "{item.reviewText}"
        </p>
        <div className={`pt-1.5 border-t text-[10px] sm:text-[11px] flex items-center justify-between ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <span className={`font-bold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.customerName}</span>
          <span className="text-slate-400 truncate">{item.location.split(',')[0]}</span>
        </div>
      </div>
    </div>
  );
};

interface ReviewVideosSectionProps {
  isDark?: boolean;
}

export const ReviewVideosSection: React.FC<ReviewVideosSectionProps> = ({ isDark = true }) => {
  return (
    <section id="reviews" className={`py-10 sm:py-16 border-b graph-bg relative ${
      isDark ? 'border-slate-800' : 'border-slate-200'
    }`}>
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-1.5 mb-6 sm:mb-8">
          <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
            গ্রাহকদের বাস্তব অভিজ্ঞতা
          </span>
          <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            কাস্টমার ভিডিও রিভিউ
          </h2>
          <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Cervical Butterfly Pillow ব্যবহার করে যারা ভালো ফল পেয়েছেন তাদের সরাসরি ভিডিও প্রতিক্রিয়া।
          </p>
        </div>

        {/* 2-Columns on Mobile as Requested ("PASAPASI 2 TA COLUM E THAKBE") */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 max-w-3xl mx-auto">
          {REVIEW_ITEMS.map((item) => (
            <ReviewCard key={item.id} item={item} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};
