import { useState, useEffect } from 'react';

export default function GrowthProfessionalDemo() {
  const [activeStrategy, setActiveStrategy] = useState(0);

  const strategies = [
    {
      channel: 'Product Hunt',
      status: 'Running',
      metrics: { reach: '12.4K', conversion: '8.2%', cost: '$0' },
      tasks: [
        { done: true, text: 'Draft launch post with social proof' },
        { done: true, text: 'Schedule influencer outreach (15 targets)' },
        { done: false, text: 'Prepare FAQ responses for comments' }
      ]
    },
    {
      channel: 'Reddit',
      status: 'Optimizing',
      metrics: { reach: '8.1K', conversion: '12.8%', cost: '$0' },
      tasks: [
        { done: true, text: 'Identify 5 high-intent subreddits' },
        { done: true, text: 'Craft value-first posts (not promotional)' },
        { done: true, text: 'Monitor engagement and iterate messaging' }
      ]
    },
    {
      channel: 'Twitter/X',
      status: 'Scheduled',
      metrics: { reach: '4.2K', conversion: '6.1%', cost: '$0' },
      tasks: [
        { done: true, text: 'Build-in-public thread series (8 posts)' },
        { done: false, text: 'Engage with relevant conversations daily' },
        { done: false, text: 'DM outreach to 20 early adopters' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStrategy((prev) => (prev + 1) % strategies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = strategies[activeStrategy];

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Growth Strategy Dashboard</h3>
        <div className="flex gap-2">
          {strategies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStrategy(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === activeStrategy ? 'bg-[#00D4FF] w-6' : 'bg-gray-600'
              }`}
              aria-label={`Strategy ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Current Strategy Card */}
      <div className="bg-black/40 rounded-xl p-5 mb-4 border border-white/5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-xl font-black text-white mb-1">{current.channel}</h4>
            <span className={`text-xs font-bold px-2 py-1 rounded ${
              current.status === 'Running' ? 'bg-green-500/20 text-green-400' :
              current.status === 'Optimizing' ? 'bg-blue-500/20 text-blue-400' :
              'bg-purple-500/20 text-purple-400'
            }`}>
              {current.status}
            </span>
          </div>
          <svg className="w-8 h-8 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-white/5 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">Reach</div>
            <div className="text-lg font-bold text-white">{current.metrics.reach}</div>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">Conv.</div>
            <div className="text-lg font-bold text-[#00D4FF]">{current.metrics.conversion}</div>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">Cost</div>
            <div className="text-lg font-bold text-green-400">{current.metrics.cost}</div>
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-2">
          {current.tasks.map((task, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm">
              <div className={`w-4 h-4 rounded flex-shrink-0 mt-0.5 ${
                task.done ? 'bg-[#00D4FF]' : 'bg-gray-700 border border-gray-600'
              } flex items-center justify-center`}>
                {task.done && (
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className={task.done ? 'text-gray-500 line-through' : 'text-gray-300'}>
                {task.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Bar */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>3 active campaigns</span>
        <span className="text-[#00D4FF] font-bold">$0 total spend</span>
      </div>
    </div>
  );
}
