import { useEffect, useRef } from 'react';
import { posthog } from '../lib/posthog';

export default function HowIWork() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hasTrackedPlay = false;
    let hasTracked25 = false;
    let hasTracked50 = false;
    let hasTracked75 = false;
    let hasTrackedComplete = false;

    const handlePlay = () => {
      if (!hasTrackedPlay) {
        posthog.capture('homepage_video_started', {
          location: 'how_i_work_section'
        });
        hasTrackedPlay = true;
      }
    };

    const handleTimeUpdate = () => {
      const percent = (video.currentTime / video.duration) * 100;

      if (percent >= 25 && !hasTracked25) {
        posthog.capture('homepage_video_progress_25');
        hasTracked25 = true;
      }
      if (percent >= 50 && !hasTracked50) {
        posthog.capture('homepage_video_progress_50');
        hasTracked50 = true;
      }
      if (percent >= 75 && !hasTracked75) {
        posthog.capture('homepage_video_progress_75');
        hasTracked75 = true;
      }
    };

    const handleEnded = () => {
      if (!hasTrackedComplete) {
        posthog.capture('homepage_video_completed', {
          location: 'how_i_work_section'
        });
        hasTrackedComplete = true;
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      {/* Dramatic diagonal split background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D5BFF]/10 via-transparent to-[#00D4FF]/10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00D4FF]/5 to-transparent transform skew-x-12"></ div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Oversized title */}
        <h2 className="text-6xl sm:text-8xl font-black text-white mb-24 leading-[0.9] tracking-tight">
          I optimize
          <br />
          <span className="bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent">
            your time
          </span>
        </h2>

        {/* Time optimization visual */}
        <div className="mb-32">

          <div className="max-w-5xl mx-auto space-y-20">
            {/* Before */}
            <div>
              <div className="text-3xl font-black text-gray-500 mb-8 tracking-tight">Before</div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div style={{width: '40%'}} className="h-16 bg-gray-800/80 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center px-5">
                      <span className="text-base font-bold text-gray-300">Building</span>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-gray-500 min-w-[80px]">40%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div style={{width: '40%'}} className="h-16 bg-red-950/40 rounded-xl border-2 border-red-900/40 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center px-5">
                      <span className="text-base font-bold text-red-400/90">Growth work</span>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-red-400/70 min-w-[80px]">40%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div style={{width: '20%'}} className="h-16 bg-gray-800/80 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center px-5">
                      <span className="text-base font-bold text-gray-300">Thinking</span>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-gray-500 min-w-[80px]">20%</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent mb-8 tracking-tight">With me</div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div style={{width: '60%'}} className="h-20 bg-gradient-to-r from-[#2D5BFF] to-[#2D5BFF]/90 rounded-xl shadow-2xl shadow-[#2D5BFF]/40 relative overflow-hidden border border-[#2D5BFF]/20">
                    <div className="absolute inset-0 flex items-center justify-between px-5">
                      <span className="text-base font-bold text-white">Building</span>
                      <span className="text-sm text-[#00D4FF] font-black">+50%</span>
                    </div>
                  </div>
                  <span className="text-4xl font-black text-white min-w-[80px]">60%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div style={{width: '10%'}} className="h-12 bg-gray-900/60 rounded-xl opacity-50 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center px-5">
                      <span className="text-sm font-bold text-gray-500">Growth</span>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-gray-500 min-w-[80px]">10%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div style={{width: '30%'}} className="h-20 bg-gradient-to-r from-[#00D4FF] to-[#00D4FF]/90 rounded-xl shadow-2xl shadow-[#00D4FF]/40 relative overflow-hidden border border-[#00D4FF]/20">
                    <div className="absolute inset-0 flex items-center justify-between px-5">
                      <span className="text-base font-bold text-white">Thinking</span>
                      <span className="text-sm text-[#2D5BFF] font-black">+50%</span>
                    </div>
                  </div>
                  <span className="text-4xl font-black text-white min-w-[80px]">30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning timeline - simplified */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-5xl sm:text-6xl font-black text-white mb-20 text-center tracking-tight">
            I learn as we work
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-800 via-[#2D5BFF] to-[#00D4FF] rounded-full"></div>

            <div className="space-y-16">
              {/* Week 1 */}
              <div className="flex items-center gap-6 sm:gap-12">
                <div className="flex-1 text-right pr-4">
                  <div className="text-xs font-black text-gray-600 mb-2 tracking-wider">WEEK 1</div>
                  <div className="text-2xl sm:text-3xl font-black text-white">Junior hire</div>
                </div>
                <div className="relative z-10 w-6 h-6 rounded-full bg-gray-700 border-4 border-black flex-shrink-0 shadow-xl shadow-gray-700/50"></div>
                <div className="flex-1 pl-4">
                  <p className="text-lg text-gray-400">Best practices baseline</p>
                </div>
              </div>

              {/* Week 2 */}
              <div className="flex items-center gap-6 sm:gap-12">
                <div className="flex-1 text-right pr-4">
                  <div className="text-xs font-black text-[#2D5BFF] mb-2 tracking-wider">WEEK 2</div>
                  <div className="text-2xl sm:text-3xl font-black text-white">Teammate</div>
                </div>
                <div className="relative z-10 w-6 h-6 rounded-full bg-[#2D5BFF] border-4 border-black flex-shrink-0 shadow-xl shadow-[#2D5BFF]/60"></div>
                <div className="flex-1 pl-4">
                  <p className="text-lg text-gray-400">Knows your preferences</p>
                </div>
              </div>

              {/* Week 3 */}
              <div className="flex items-center gap-6 sm:gap-12">
                <div className="flex-1 text-right pr-4">
                  <div className="text-xs font-black text-[#00D4FF] mb-2 tracking-wider">WEEK 3</div>
                  <div className="text-2xl sm:text-3xl font-black text-white">Co-founder</div>
                </div>
                <div className="relative z-10 w-6 h-6 rounded-full bg-[#00D4FF] border-4 border-black flex-shrink-0 shadow-xl shadow-[#00D4FF]/60"></div>
                <div className="flex-1 pl-4">
                  <p className="text-lg text-gray-400">Proactive & in sync</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tour Video */}
        <div className="mt-32 max-w-6xl mx-auto">
          <h3 className="text-5xl sm:text-6xl font-black text-white mb-12 text-center tracking-tight">
            See it in action
          </h3>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-[#2D5BFF]/10 to-[#00D4FF]/10 backdrop-blur-sm">
            {/* Video container with aspect ratio */}
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full"
                controls
                preload="metadata"
              >
                <source src="/product-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] opacity-20 blur-xl -z-10"></div>
          </div>

          <p className="text-center text-gray-400 mt-8 text-lg">
            Watch how CrossMind handles growth tasks autonomously
          </p>
        </div>

        {/* Trust statement - simplified */}
        <div className="mt-32 max-w-4xl mx-auto text-center">
          <h3 className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-tight">You're in control</h3>
          <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed">
            Dashboard shows what I'm doing. Set boundaries. I remember your rules.
          </p>
        </div>
      </div>
    </section>
  );
}
