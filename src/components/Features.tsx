const features = [
  {
    icon: '→',
    title: 'Social Media',
    subtitle: 'Auto-publish 24/7',
    description: 'Research trends, generate content calendars, draft posts, publish to Twitter/LinkedIn—all while you sleep.'
  },
  {
    icon: '→',
    title: 'Content',
    subtitle: 'SEO on autopilot',
    description: 'Generate blog posts, SEO copy, and landing pages tailored to your positioning. Boost rankings effortlessly.'
  },
  {
    icon: '→',
    title: 'Outreach',
    subtitle: 'Find & convert users',
    description: 'Identify targets on LinkedIn/Twitter/Reddit. Send personalized invites and track conversions automatically.'
  },
  {
    icon: '→',
    title: 'Analytics',
    subtitle: 'Data-driven decisions',
    description: 'Aggregate feedback, monitor competitors, track metrics. Get actionable recommendations instantly.'
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
            What we automate
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four core growth pillars. Zero manual effort required.
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
