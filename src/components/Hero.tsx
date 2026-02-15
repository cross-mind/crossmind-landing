export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#2D5BFF]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#00D4FF]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Subtle badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]"></span>
            </span>
            <span className="text-gray-300 text-sm font-medium tracking-wide">BETA ACCESS AVAILABLE</span>
          </div>

          {/* Bold statement headline */}
          <h1 className="text-6xl sm:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tight max-w-5xl mx-auto">
            Your AI co-founder for{' '}
            <span className="bg-gradient-to-r from-[#2D5BFF] via-[#00D4FF] to-[#2D5BFF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              growth
            </span>
          </h1>

          {/* Simple subheadline */}
          <p className="text-2xl sm:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            I handle content, competitors, users.
            <span className="block mt-2 text-white font-bold">You focus on building.</span>
          </p>

          {/* Strong CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#waitlist"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#2D5BFF]/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Get Early Access</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </a>
          </div>

          {/* Simple value props */}
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto pt-8 border-t border-white/10">
            <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10">
              <span className="text-sm text-gray-400">Competitor tracking</span>
            </div>
            <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10">
              <span className="text-sm text-gray-400">Content creation</span>
            </div>
            <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10">
              <span className="text-sm text-gray-400">User interviews</span>
            </div>
            <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10">
              <span className="text-sm text-gray-400">Legal docs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
