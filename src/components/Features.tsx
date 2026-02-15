const features = [
  {
    icon: '📱',
    title: 'Social Media Automation',
    description: 'Research trending topics, generate content calendars, draft and publish to Twitter/LinkedIn, track engagement metrics—all on autopilot.'
  },
  {
    icon: '✍️',
    title: 'Content Marketing',
    description: 'Generate blog posts, SEO content, and landing page copy tailored to your product positioning. Boost rankings and conversions effortlessly.'
  },
  {
    icon: '🎯',
    title: 'User Acquisition',
    description: 'Identify and reach target users on LinkedIn, Twitter, and Reddit. Send personalized invitations and track conversion rates automatically.'
  },
  {
    icon: '📊',
    title: 'Analytics & Insights',
    description: 'Aggregate user feedback, competitor moves, and growth metrics. Get prioritized recommendations to make faster, better decisions.'
  }
];

export default function Features() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Your Fully Automated Growth Engine
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Not just a tool—a true AI co-founder that executes growth tasks while you focus on building
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#2D5BFF]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
