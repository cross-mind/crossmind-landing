const plans = [
  {
    name: 'Pay As You Go',
    price: '$0.10',
    unit: '/ task execution',
    description: 'Perfect for validating your idea',
    features: [
      'All growth automation features',
      'Twitter/LinkedIn auto-publishing',
      'User outreach & feedback collection',
      'Analytics & insights',
      'Pay only for what you use'
    ],
    cta: 'Get Started',
    highlight: false
  },
  {
    name: 'Monthly',
    price: '$49',
    unit: '/ month',
    originalPrice: '$79',
    discount: '40% OFF Early Bird',
    description: 'For products needing consistent growth',
    features: [
      '1,000 task executions included',
      'All Pay-As-You-Go features',
      'Priority support',
      'Custom growth strategies',
      'Overages at $0.08/task'
    ],
    cta: 'Claim Early Bird',
    highlight: true
  },
  {
    name: 'Annual',
    price: '$499',
    unit: '/ year',
    originalPrice: '$948',
    discount: '50% OFF Early Bird',
    description: 'Best value for long-term growth',
    features: [
      '15,000 task executions included',
      'All Monthly plan features',
      'Dedicated growth advisor',
      'ROI analysis reports',
      'Overages at $0.05/task'
    ],
    cta: 'Get Annual Deal',
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your growth stage. Switch anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlight
                  ? 'border-[#2D5BFF] shadow-2xl shadow-[#2D5BFF]/10 scale-105 relative'
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white text-sm font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              {plan.discount && (
                <span className="inline-block bg-[#2D5BFF]/10 text-[#2D5BFF] text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {plan.discount}
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.unit}</span>
                {plan.originalPrice && (
                  <div className="text-sm text-gray-400 line-through mt-1">
                    was {plan.originalPrice}
                  </div>
                )}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-[#00D4FF] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white hover:shadow-lg hover:shadow-[#2D5BFF]/25'
                    : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-[#2D5BFF]/50 hover:bg-slate-50'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
