const features = [
  {
    icon: '→',
    title: 'Build in Public Without the Grind',
    subtitle: 'I handle your content',
    description: 'It\'s Tuesday 9am. I\'ve already pulled your latest commits, matched your voice, and queued 3 posts for review. You shipped email verification Friday—by Monday I\'ve turned it into a tweet thread with metrics from beta feedback.'
  },
  {
    icon: '→',
    title: 'Competitor Research That Stays Current',
    subtitle: 'I track the market',
    description: 'Your competitor dropped their Team plan from $99→$79 yesterday. I noticed. I\'ve drafted a comparison update for your docs and flagged 3 positioning opportunities you can use this week.'
  },
  {
    icon: '→',
    title: 'User Feedback That Doesn\'t Pile Up',
    subtitle: 'I close the loop',
    description: '8 interview requests in your inbox from last month. I booked 5 for next week (filtered out tire-kickers), prepared questions based on your roadmap. When a user mentions "export is clunky" 3 times, I create a feature request linked to 4 similar complaints, calculate it affects 23% of power users, move it to Next Sprint.'
  },
  {
    icon: '→',
    title: 'The Docs You Keep Postponing',
    subtitle: 'I handle compliance',
    description: 'Your Privacy Policy doesn\'t mention new EU users. I\'ve drafted GDPR-compliant updates, flagged 3 sections you need to review (data retention), formatted for /legal. You added Stripe? I updated Section 4, added it to processors list, created changelog so users know what changed.'
  }
];

export default function Features() {
  return (
    <section id="how-it-works" className="py-32 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            What I handle for you
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The growth work that drains your time. I do it while you build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 hover:bg-white/10"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2D5BFF]/0 to-[#00D4FF]/0 group-hover:from-[#2D5BFF]/10 group-hover:to-[#00D4FF]/10 transition-all duration-300"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-[#00D4FF] text-sm font-bold uppercase tracking-wider mb-2">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm font-medium">{feature.subtitle}</p>
                  </div>
                  <div className="text-4xl text-[#00D4FF] group-hover:translate-x-2 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
