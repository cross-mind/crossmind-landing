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
          <h2 className="text-7xl sm:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter max-w-5xl mx-auto">
            The game
            <br />
            <span className="bg-gradient-to-r from-[#2D5BFF] via-[#00D4FF] to-[#2D5BFF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              changed
            </span>
          </h2>
        </div>

        {/* Visual comparison */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Old */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-xs font-bold text-gray-700 uppercase">Before</div>
              <div className="text-4xl font-black text-gray-700 mb-8 line-through decoration-gray-800">
                Bigger team
              </div>
              <div className="space-y-4 text-gray-600 text-lg">
                <div>More engineers</div>
                <div>More funding</div>
                <div>More time</div>
              </div>
            </div>

            {/* New */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#2D5BFF]/20 to-[#00D4FF]/10 border border-[#00D4FF]/30 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-xs font-bold text-[#00D4FF] uppercase">Now</div>
              <div className="text-4xl font-black bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent mb-8">
                Faster iteration
              </div>
              <div className="space-y-4 text-white text-lg font-medium">
                <div>Ship faster</div>
                <div>Learn from users quicker</div>
                <div>Iterate continuously</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-32 max-w-3xl mx-auto text-center">
          <p className="text-3xl sm:text-4xl font-bold text-white leading-relaxed mb-8">
            I remove friction between shipping and learning
          </p>
          <p className="text-xl text-gray-400">
            You build. I handle growth. We iterate faster together.
          </p>
        </div>
      </div>
    </section>
  );
}
