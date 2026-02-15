const features = [
  {
    icon: '📱',
    title: 'Social Media 自动化',
    description: '自动研究热门话题,生成内容日历,起草并发布 Twitter/LinkedIn 内容,跟踪互动效果'
  },
  {
    icon: '✍️',
    title: '内容营销',
    description: '基于产品定位生成博客文章、SEO 内容、landing page 文案,提升搜索排名和转化'
  },
  {
    icon: '🎯',
    title: '用户获取',
    description: '主动识别目标用户,通过 LinkedIn/Twitter/Reddit 触达,个性化邀请测试,追踪转化率'
  },
  {
    icon: '📊',
    title: '数据分析',
    description: '聚合用户反馈、竞品动态、增长指标,生成优先级建议,让你快速做出正确决策'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            全自动增长引擎
          </h2>
          <p className="text-xl text-gray-600">
            不只是工具,而是一个真正为你执行的 AI 联合创始人
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
