const scenarios = [
  {
    label: '01',
    title: 'Build in Public',
    problem: 'Content consistency is hard',
    visual: 'commits',
    result: 'Tue 9am → 3 posts ready',
    example: 'Your Friday commit became Monday\'s tweet thread'
  },
  {
    label: '02',
    title: 'Competitor Intel',
    problem: 'Markets move fast',
    visual: 'price-change',
    result: '$99→$79 noticed in 2hrs',
    example: 'Comparison doc + 3 positioning moves drafted'
  },
  {
    label: '03',
    title: 'User Feedback',
    problem: '8 interviews piling up',
    visual: 'feedback-loop',
    result: '5 booked, questions ready',
    example: '"Export clunky" × 3 → feature request created, 23% users affected'
  },
  {
    label: '04',
    title: 'Compliance Docs',
    problem: 'Privacy policy outdated',
    visual: 'docs',
    result: 'GDPR update drafted',
    example: 'You added Stripe → Section 4 updated, changelog posted'
  }
];

export default function Features() {
  return (
    <section id="what-i-do" className="py-40 bg-black relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2D5BFF]/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Oversized header */}
        <div className="mb-32">
          <h2 className="text-7xl sm:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter">
            What I handle
            <br />
            <span className="text-gray-800">for you</span>
          </h2>
          <p className="text-2xl sm:text-3xl text-gray-400 max-w-3xl font-light">
            The growth work that drains your time.
            <span className="block mt-2 text-white">I do it while you build.</span>
          </p>
        </div>

        {/* Compact visual cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {scenarios.map((scenario) => (
            <div
              key={scenario.label}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2D5BFF]/0 to-[#00D4FF]/0 group-hover:from-[#2D5BFF]/10 group-hover:to-[#00D4FF]/10 transition-all duration-300"></div>

              <div className="relative">
                {/* Header with number */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm font-bold text-[#00D4FF] uppercase tracking-wider mb-2">
                      {scenario.label}
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">
                      {scenario.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{scenario.problem}</p>
                  </div>
                </div>

                {/* Visual diagram */}
                <div className="my-8 p-6 rounded-2xl bg-black/40 border border-white/5">
                  {scenario.visual === 'commits' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                        <div className="text-xs text-gray-600 font-mono">git commit -m "Add email verification"</div>
                      </div>
                      <div className="pl-5 border-l-2 border-[#2D5BFF]/30 ml-1 py-2">
                        <div className="text-xs text-[#00D4FF]">AI extracts value</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-lg shadow-[#00D4FF]/50"></div>
                        <div className="text-xs text-white font-medium">3 posts queued for review</div>
                      </div>
                    </div>
                  )}

                  {scenario.visual === 'price-change' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-black text-gray-700 line-through">$99</div>
                        <div className="text-xs text-gray-600">→</div>
                        <div className="text-2xl font-black text-[#00D4FF]">$79</div>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent"></div>
                      <div className="text-xs text-white">Alert sent in 2 hours</div>
                    </div>
                  )}

                  {scenario.visual === 'feedback-loop' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-8 rounded bg-gray-800 flex items-center px-3">
                          <div className="text-xs text-gray-500">8 requests</div>
                        </div>
                      </div>
                      <div className="text-xs text-[#00D4FF] text-center">↓ Filter & Schedule</div>
                      <div className="flex gap-2">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="flex-1 h-6 rounded bg-[#2D5BFF]/30 border border-[#2D5BFF]"></div>
                        ))}
                      </div>
                    </div>
                  )}

                  {scenario.visual === 'docs' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="text-xs text-gray-500 line-through">Privacy v2.0 (2024)</div>
                      </div>
                      <div className="pl-5 border-l-2 border-[#00D4FF]/30 ml-1 py-2">
                        <div className="text-xs text-[#00D4FF]">GDPR compliance check</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-lg shadow-[#00D4FF]/50"></div>
                        <div className="text-xs text-white">Privacy v3.0 ready</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Result highlight */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#2D5BFF]/10 to-[#00D4FF]/10 border border-[#00D4FF]/20 mb-4">
                  <div className="text-lg font-bold text-white mb-1">
                    {scenario.result}
                  </div>
                </div>

                {/* Example */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {scenario.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
