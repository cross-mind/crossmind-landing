const scenarios = [
  {
    label: '01',
    title: 'Build in Public Without the Grind',
    hook: 'It\'s Tuesday 9am.',
    story: [
      'I\'ve already pulled your latest commits, matched your voice, and queued 3 posts for review.',
      'You shipped email verification Friday—by Monday I\'ve turned it into a tweet thread with metrics from beta feedback.'
    ],
    highlight: 'Content on autopilot, in your voice'
  },
  {
    label: '02',
    title: 'Competitor Research That Stays Current',
    hook: 'Your competitor dropped their Team plan from $99→$79 yesterday.',
    story: [
      'I noticed.',
      'I\'ve drafted a comparison update for your docs and flagged 3 positioning opportunities you can use this week.'
    ],
    highlight: 'Market intelligence, delivered'
  },
  {
    label: '03',
    title: 'User Feedback That Doesn\'t Pile Up',
    hook: '8 interview requests in your inbox from last month.',
    story: [
      'I booked 5 for next week (filtered out tire-kickers), prepared questions based on your roadmap.',
      'When a user mentions "export is clunky" 3 times, I create a feature request linked to 4 similar complaints, calculate it affects 23% of power users, move it to Next Sprint.'
    ],
    highlight: 'From feedback to roadmap, automatically'
  },
  {
    label: '04',
    title: 'The Docs You Keep Postponing',
    hook: 'Your Privacy Policy doesn\'t mention new EU users.',
    story: [
      'I\'ve drafted GDPR-compliant updates, flagged 3 sections you need to review (data retention), formatted for /legal.',
      'You added Stripe? I updated Section 4, added it to processors list, created changelog so users know what changed.'
    ],
    highlight: 'Compliance handled, users informed'
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

        {/* Asymmetric scenario cards */}
        <div className="space-y-32">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.label}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content side */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-black text-gray-900">{scenario.label}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent"></div>
                </div>

                <h3 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight">
                  {scenario.title}
                </h3>

                {/* Story blocks */}
                <div className="space-y-6">
                  {/* Hook - attention grabber */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2D5BFF]/20 to-[#00D4FF]/10 border border-[#00D4FF]/30">
                    <p className="text-xl text-white font-medium leading-relaxed">
                      {scenario.hook}
                    </p>
                  </div>

                  {/* Story progression */}
                  {scenario.story.map((line, i) => (
                    <div key={i} className="pl-6 border-l-2 border-gray-800">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {line}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Highlight badge */}
                <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-lg shadow-[#00D4FF]/50"></div>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">
                    {scenario.highlight}
                  </span>
                </div>
              </div>

              {/* Visual side - large number or graphic */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} flex items-center justify-center`}>
                <div className="relative">
                  {/* Giant decorative number */}
                  <div className="text-[20rem] sm:text-[25rem] font-black leading-none opacity-5 bg-gradient-to-br from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent select-none">
                    {scenario.label}
                  </div>

                  {/* Floating accent */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#2D5BFF]/20 to-[#00D4FF]/20 blur-3xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
