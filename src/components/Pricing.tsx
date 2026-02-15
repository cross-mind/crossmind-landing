const plans = [
  {
    name: '按量付费',
    price: '¥0.5',
    unit: '/ 每次任务执行',
    description: '适合刚开始验证想法的创始人',
    features: [
      '所有 growth 自动化功能',
      'Twitter/LinkedIn 自动发布',
      '用户触达与反馈收集',
      '数据分析与建议',
      '按实际使用量计费'
    ],
    cta: '开始使用',
    highlight: false
  },
  {
    name: '月度套餐',
    price: '¥299',
    unit: '/ 月',
    originalPrice: '¥499',
    discount: '早鸟 6 折',
    description: '适合需要持续增长的产品',
    features: [
      '包含 1000 次任务执行',
      '所有按量付费功能',
      '优先技术支持',
      '定制化增长策略',
      '超出部分 ¥0.4/次'
    ],
    cta: '抢占早鸟名额',
    highlight: true
  },
  {
    name: '年度套餐',
    price: '¥2,988',
    unit: '/ 年',
    originalPrice: '¥5,988',
    discount: '早鸟 5 折',
    description: '长期增长的最佳选择',
    features: [
      '包含 15,000 次任务执行',
      '所有月度套餐功能',
      '专属增长顾问',
      'ROI 分析报告',
      '超出部分 ¥0.3/次'
    ],
    cta: '立即购买',
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            透明定价,早鸟优惠
          </h2>
          <p className="text-xl text-gray-600">
            选择适合你的方案,随时可调整
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white p-8 rounded-xl ${
                plan.highlight
                  ? 'ring-2 ring-blue-600 shadow-xl scale-105'
                  : 'shadow-lg'
              }`}
            >
              {plan.discount && (
                <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-4">
                  {plan.discount}
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">{plan.unit}</span>
                {plan.originalPrice && (
                  <div className="text-sm text-gray-400 line-through mt-1">
                    原价 {plan.originalPrice}
                  </div>
                )}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition ${
                  plan.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border-2 border-gray-300 hover:border-gray-400'
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
