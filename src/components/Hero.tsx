export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            AI 联合创始人
            <br />
            <span className="text-blue-600">帮你处理增长工作</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            CrossMind 自动化执行 growth 任务 —— Social Media 运营、内容营销、用户获取、数据分析。
            <br />
            让你专注构建产品,我们帮你获取用户。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#waitlist"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              抢占早鸟名额
            </a>
            <a
              href="#pricing"
              className="border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition"
            >
              查看定价
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            早鸟用户专享:首月 6 折 · 年付 5 折
          </p>
        </div>
      </div>
    </section>
  );
}
