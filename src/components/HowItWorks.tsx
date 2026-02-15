export default function HowItWorks() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gradient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2D5BFF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            How I work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I optimize your time, not just tasks
          </p>
        </div>

        {/* Time allocation comparison */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Before */}
            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Before me</div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Building product</span>
                    <span className="text-gray-400">40%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Growth grunt work</span>
                    <span className="text-gray-400">40%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500/60 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">← Time drain</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Strategic thinking</span>
                    <span className="text-gray-400">20%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#2D5BFF]/20 to-[#00D4FF]/20 backdrop-blur-sm border border-[#00D4FF]/30">
              <div className="text-sm font-bold text-[#00D4FF] uppercase tracking-wider mb-6">With me</div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Building product</span>
                    <span className="text-[#00D4FF] font-bold">60%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Growth grunt work</span>
                    <span className="text-gray-400">10%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500/60 rounded-full" style={{width: '10%'}}></div>
                  </div>
                  <p className="text-xs text-[#00D4FF] mt-1">← I handle this</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Strategic thinking</span>
                    <span className="text-[#00D4FF] font-bold">30%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-lg">
              Time saved = faster iteration ={' '}
              <span className="text-white font-bold">competitive advantage</span>
            </p>
          </div>
        </div>

        {/* Learning progression */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">I learn what you care about</h3>
            <p className="text-gray-400">I'm not a tool you configure. I'm a co-founder who evolves.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-[#00D4FF] font-bold text-sm mb-2">Week 1</div>
              <h4 className="text-white font-bold text-lg mb-2">Like a good junior hire</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I use best practices from successful indie products. Ready to work from day one.
              </p>
            </div>

            <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-[#00D4FF] font-bold text-sm mb-2">Week 4</div>
              <h4 className="text-white font-bold text-lg mb-2">Like a seasoned teammate</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                You edited my competitor analysis to focus on UI? Noted. Next report emphasizes design decisions.
              </p>
            </div>

            <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#2D5BFF]/20 to-[#00D4FF]/20 backdrop-blur-sm border border-[#00D4FF]/30">
              <div className="text-[#00D4FF] font-bold text-sm mb-2">Week 12</div>
              <h4 className="text-white font-bold text-lg mb-2">Like a co-founder</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I know you ignore motivational tweets but engage with data-driven posts. I proactively adjust content mix.
              </p>
            </div>
          </div>
        </div>

        {/* Why now */}
        <div className="max-w-4xl mx-auto mt-24 text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6">
              "The game changed. I'm here to make sure you can play it."
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
              <div>
                <div className="text-gray-500 font-bold text-sm uppercase tracking-wide mb-2">Old era</div>
                <p className="text-gray-400">Bigger team wins (more engineers = more features)</p>
              </div>
              <div>
                <div className="text-[#00D4FF] font-bold text-sm uppercase tracking-wide mb-2">New era</div>
                <p className="text-white">Faster iteration wins (better feedback loops = better product-market fit)</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              AI made execution nearly infinite. Your bottleneck isn't "can I build it"—it's "can I learn fast enough from users."
              <span className="block mt-4 text-white font-medium">
                I remove the friction between shipping and learning. You build, I handle the growth loop, together we iterate faster than teams 10x your size.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
