export default function HowIWork() {
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
        <h2 className="text-7xl sm:text-9xl font-black text-white mb-32 leading-[0.85] tracking-tighter">
          I'm not a tool.
          <br />
          <span className="bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent">
            I learn.
          </span>
        </h2>

        {/* Time optimization visual */}
        <div className="mb-40">
          <p className="text-2xl text-gray-400 mb-16 max-w-2xl">
            Your time is the most valuable asset. Here's how I optimize it:
          </p>

          <div className="space-y-12">
            {/* Before */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl font-black text-gray-800">Before</span>
                <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent"></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-2/5 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center px-6">
                    <span className="text-white font-bold">Building product</span>
                  </div>
                  <span className="text-3xl font-black text-gray-600">40%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2/5 h-16 bg-gradient-to-r from-red-900/50 to-red-800/50 rounded-lg flex items-center px-6 border border-red-500/30">
                    <span className="text-red-300 font-bold">Growth grunt work</span>
                  </div>
                  <span className="text-3xl font-black text-red-400">40%</span>
                  <span className="text-red-400 text-sm">← Time drain</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1/5 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center px-6">
                    <span className="text-white font-bold">Thinking</span>
                  </div>
                  <span className="text-3xl font-black text-gray-600">20%</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl font-black bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent">With me</span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#00D4FF] to-transparent"></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-3/5 h-20 bg-gradient-to-r from-[#2D5BFF] to-[#2D5BFF]/80 rounded-lg flex items-center px-6 shadow-2xl shadow-[#2D5BFF]/30">
                    <span className="text-white font-bold text-lg">Building product</span>
                  </div>
                  <span className="text-4xl font-black text-white">60%</span>
                  <span className="text-[#00D4FF] text-sm font-bold">+50% more</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1/12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center opacity-50">
                    <span className="text-gray-500 font-bold text-xs">Growth</span>
                  </div>
                  <span className="text-2xl font-black text-gray-500">10%</span>
                  <span className="text-[#00D4FF] text-sm font-bold">← I handle this</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1/3 h-20 bg-gradient-to-r from-[#00D4FF] to-[#00D4FF]/80 rounded-lg flex items-center px-6 shadow-2xl shadow-[#00D4FF]/30">
                    <span className="text-white font-bold text-lg">Strategic thinking</span>
                  </div>
                  <span className="text-4xl font-black text-white">30%</span>
                  <span className="text-[#00D4FF] text-sm font-bold">+50% more</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning timeline - asymmetric layout */}
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <h3 className="text-5xl font-black text-white mb-8 leading-tight">
              How I evolve with you
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed">
              I'm not following a script. I'm learning your workflow, your voice, your priorities. Every interaction makes me sharper.
            </p>
          </div>

          <div className="space-y-8">
            {/* Week 1 */}
            <div className="relative pl-8 border-l-2 border-gray-800">
              <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-gray-700 border-4 border-black"></div>
              <div className="text-sm font-bold text-gray-600 mb-2">WEEK 1</div>
              <h4 className="text-2xl font-bold text-white mb-2">Like a junior hire</h4>
              <p className="text-gray-400">
                I use best practices from successful indie products. Solid baseline, no personalization yet.
              </p>
            </div>

            {/* Week 4 */}
            <div className="relative pl-8 border-l-2 border-[#2D5BFF]/30">
              <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-[#2D5BFF] border-4 border-black"></div>
              <div className="text-sm font-bold text-[#2D5BFF] mb-2">WEEK 4</div>
              <h4 className="text-2xl font-bold text-white mb-2">Like a teammate</h4>
              <p className="text-gray-400">
                You edited my competitor analysis to focus on UI? Noted. You prefer data-driven posts? I adjust the content mix automatically.
              </p>
            </div>

            {/* Week 12 */}
            <div className="relative pl-8 border-l-2 border-[#00D4FF]/50">
              <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-[#00D4FF] border-4 border-black shadow-lg shadow-[#00D4FF]/50"></div>
              <div className="text-sm font-bold text-[#00D4FF] mb-2">WEEK 12</div>
              <h4 className="text-2xl font-bold text-white mb-2">Like a co-founder</h4>
              <p className="text-gray-400">
                I proactively spot opportunities you'd miss. I know what you'd say yes to before you see it. We're in sync.
              </p>
            </div>
          </div>
        </div>

        {/* Trust statement */}
        <div className="mt-40 max-w-4xl">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
            <h3 className="text-4xl font-black text-white mb-6">I'm transparent, not a black box</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Check your dashboard any time: what I'm working on, what I've shipped, what I learned.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Set boundaries—tell me "never auto-publish" or "always ask before emailing users." I'll remember.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
