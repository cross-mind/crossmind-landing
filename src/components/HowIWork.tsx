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
        <h2 className="text-7xl sm:text-9xl font-black text-white mb-20 leading-[0.85] tracking-tighter">
          I optimize
          <br />
          <span className="bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent">
            your time
          </span>
        </h2>

        {/* Time optimization visual */}
        <div className="mb-40">

          <div className="max-w-4xl mx-auto space-y-16">
            {/* Before */}
            <div>
              <div className="text-4xl font-black text-gray-700 mb-6">Before</div>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div style={{width: '40%'}} className="h-14 bg-gray-800 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center px-4">
                      <span className="text-sm font-bold text-gray-400">Building</span>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-gray-600 w-16">40%</span>
                </div>
                <div className="flex items-start gap-3">
                  <div style={{width: '40%'}} className="h-14 bg-red-900/30 rounded-lg border border-red-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center px-4">
                      <span className="text-sm font-bold text-red-400">Growth work</span>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-red-400 w-16">40%</span>
                </div>
                <div className="flex items-start gap-3">
                  <div style={{width: '20%'}} className="h-14 bg-gray-800 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center px-4">
                      <span className="text-sm font-bold text-gray-400">Thinking</span>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-gray-600 w-16">20%</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div>
              <div className="text-4xl font-black bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent mb-6">With me</div>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div style={{width: '60%'}} className="h-16 bg-gradient-to-r from-[#2D5BFF] to-[#2D5BFF]/80 rounded-lg shadow-2xl shadow-[#2D5BFF]/30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                      <span className="text-sm font-bold text-white">Building</span>
                      <span className="text-xs text-[#00D4FF] font-bold">+50%</span>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-white w-16">60%</span>
                </div>
                <div className="flex items-start gap-3">
                  <div style={{width: '10%'}} className="h-10 bg-gray-900/50 rounded-lg opacity-40 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center px-4">
                      <span className="text-xs font-bold text-gray-600">Growth</span>
                    </div>
                  </div>
                  <span className="text-xl font-black text-gray-600 w-16">10%</span>
                </div>
                <div className="flex items-start gap-3">
                  <div style={{width: '30%'}} className="h-16 bg-gradient-to-r from-[#00D4FF] to-[#00D4FF]/80 rounded-lg shadow-2xl shadow-[#00D4FF]/30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                      <span className="text-sm font-bold text-white">Thinking</span>
                      <span className="text-xs text-[#2D5BFF] font-bold">+50%</span>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-white w-16">30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning timeline - simplified */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl font-black text-white mb-16 text-center">
            I learn as we work
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-800 via-[#2D5BFF] to-[#00D4FF]"></div>

            <div className="space-y-12">
              {/* Week 1 */}
              <div className="flex items-start gap-8">
                <div className="flex-1 text-right">
                  <div className="text-sm font-bold text-gray-600 mb-1">WEEK 1</div>
                  <div className="text-xl font-bold text-white">Junior hire</div>
                </div>
                <div className="relative z-10 w-4 h-4 rounded-full bg-gray-700 border-4 border-black flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-gray-400">Best practices baseline</p>
                </div>
              </div>

              {/* Week 4 */}
              <div className="flex items-start gap-8">
                <div className="flex-1 text-right">
                  <div className="text-sm font-bold text-[#2D5BFF] mb-1">WEEK 4</div>
                  <div className="text-xl font-bold text-white">Teammate</div>
                </div>
                <div className="relative z-10 w-4 h-4 rounded-full bg-[#2D5BFF] border-4 border-black flex-shrink-0 shadow-lg shadow-[#2D5BFF]/50"></div>
                <div className="flex-1">
                  <p className="text-gray-400">Knows your preferences</p>
                </div>
              </div>

              {/* Week 12 */}
              <div className="flex items-start gap-8">
                <div className="flex-1 text-right">
                  <div className="text-sm font-bold text-[#00D4FF] mb-1">WEEK 12</div>
                  <div className="text-xl font-bold text-white">Co-founder</div>
                </div>
                <div className="relative z-10 w-4 h-4 rounded-full bg-[#00D4FF] border-4 border-black flex-shrink-0 shadow-lg shadow-[#00D4FF]/50"></div>
                <div className="flex-1">
                  <p className="text-gray-400">Proactive & in sync</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust statement - simplified */}
        <div className="mt-40 max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-black text-white mb-6">You're in control</h3>
          <p className="text-xl text-gray-400 leading-relaxed">
            Dashboard shows what I'm doing. Set boundaries. I remember your rules.
          </p>
        </div>
      </div>
    </section>
  );
}
