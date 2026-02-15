export default function WhyNow() {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      {/* Dramatic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2D5BFF]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00D4FF]/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statement */}
        <div className="text-center mb-32">
          <p className="text-2xl sm:text-3xl text-gray-400 mb-8 font-light">The game changed.</p>
          <h2 className="text-7xl sm:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter max-w-5xl mx-auto">
            I'm here to make sure you can{' '}
            <span className="bg-gradient-to-r from-[#2D5BFF] via-[#00D4FF] to-[#2D5BFF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              play it
            </span>
          </h2>
        </div>

        {/* Old vs New era - dramatic asymmetric split */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Old Era - faded, struck through aesthetic */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-red-900/10 to-transparent rounded-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-sm font-bold text-red-500/50 uppercase tracking-widest">Old Era</div>
                <div className="h-px flex-1 bg-red-500/20"></div>
              </div>

              <h3 className="text-5xl font-black text-gray-700 mb-8 line-through decoration-red-500/30 decoration-4">
                Bigger team wins
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-3 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <p className="text-xl text-gray-600 line-through decoration-gray-700">
                    More engineers = more features
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-3 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <p className="text-xl text-gray-600 line-through decoration-gray-700">
                    More funding = longer runway
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-3 rounded-full bg-gray-700 flex-shrink-0"></div>
                  <p className="text-xl text-gray-600 line-through decoration-gray-700">
                    Execution is scarce resource
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-red-950/20 border border-red-900/30">
                <p className="text-gray-500 italic">
                  "We need to hire 3 more people to handle growth..."
                </p>
              </div>
            </div>
          </div>

          {/* New Era - vibrant, glowing */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#2D5BFF]/20 via-[#00D4FF]/10 to-transparent rounded-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-sm font-bold text-[#00D4FF] uppercase tracking-widest">New Era</div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#00D4FF] to-transparent"></div>
              </div>

              <h3 className="text-5xl font-black bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent mb-8">
                Faster iteration wins
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-3 rounded-full bg-[#2D5BFF] flex-shrink-0 shadow-lg shadow-[#2D5BFF]/50"></div>
                  <p className="text-xl text-white font-medium">
                    AI makes execution nearly infinite
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-3 rounded-full bg-[#00D4FF] flex-shrink-0 shadow-lg shadow-[#00D4FF]/50"></div>
                  <p className="text-xl text-white font-medium">
                    Better feedback loops = better product-market fit
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-3 rounded-full bg-[#2D5BFF] flex-shrink-0 shadow-lg shadow-[#2D5BFF]/50"></div>
                  <p className="text-xl text-white font-medium">
                    Your unique vision is the bottleneck
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[#2D5BFF]/10 to-[#00D4FF]/10 border border-[#00D4FF]/30 backdrop-blur-sm">
                <p className="text-[#00D4FF] font-medium">
                  "I shipped 3 experiments this week and learned what users actually want."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-32 max-w-4xl mx-auto text-center">
          <p className="text-3xl sm:text-4xl text-white font-light leading-relaxed mb-6">
            Your bottleneck isn't{' '}
            <span className="line-through decoration-gray-700 text-gray-600">"can I build it"</span>
          </p>
          <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent leading-relaxed">
            It's "can I learn fast enough from users"
          </p>

          <div className="mt-16 p-12 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <p className="text-2xl text-gray-300 leading-relaxed">
              I remove the friction between shipping and learning.
              <span className="block mt-4 text-white font-medium">
                You build, I handle the growth loop.
              </span>
              <span className="block mt-4 text-white font-bold text-3xl">
                Together we iterate faster than teams 10x your size.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
