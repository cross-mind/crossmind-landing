import { useState, useEffect } from 'react';

export default function DashboardDemo() {
  const [logIndex, setLogIndex] = useState(0);

  const tasks = [
    {
      title: 'Product Hunt Launch',
      status: 'in_progress',
      progress: 75,
      artifacts: 3,
      icon: '🚀'
    },
    {
      title: 'Reddit Outreach Campaign',
      status: 'completed',
      progress: 100,
      artifacts: 5,
      icon: '✅'
    },
    {
      title: 'Competitor Analysis',
      status: 'pending',
      progress: 0,
      artifacts: 0,
      icon: '⏳'
    }
  ];

  const logs = [
    { time: '14:23', action: 'Generated launch post draft', type: 'artifact' },
    { time: '14:24', action: 'Identified 15 influencer contacts', type: 'data' },
    { time: '14:25', action: 'Scheduled outreach emails', type: 'action' },
    { time: '14:26', action: 'Created FAQ response templates', type: 'artifact' },
    { time: '14:27', action: 'Monitoring launch metrics', type: 'info' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Task Dashboard</h3>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <div className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse"></div>
          <span>Live</span>
        </div>
      </div>

      {/* Task Cards */}
      <div className="space-y-3 mb-6">
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className={`bg-black/40 rounded-xl p-4 transition-all ${
              task.status === 'in_progress'
                ? 'shadow-lg shadow-[#00D4FF]/10'
                : ''
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{task.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-white">{task.title}</h4>
                  <span className={`text-xs font-bold ${
                    task.status === 'in_progress' ? 'text-[#00D4FF]' :
                    task.status === 'completed' ? 'text-green-400' :
                    'text-gray-500'
                  }`}>
                    {task.status === 'in_progress' ? 'IN PROGRESS' :
                     task.status === 'completed' ? 'COMPLETED' :
                     'PENDING'}
                  </span>
                </div>
              </div>
              {task.artifacts > 0 && (
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>{task.artifacts}</span>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            {task.status !== 'pending' && (
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Progress</span>
                  <span>{task.progress}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      task.status === 'in_progress'
                        ? 'bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF]'
                        : 'bg-green-500'
                    }`}
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Artifact Preview (for in-progress task) */}
            {task.status === 'in_progress' && (
              <div className="mt-3 pt-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white/5 rounded-lg p-2 text-center">
                    <svg className="w-5 h-5 mx-auto mb-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs text-gray-400">Draft</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">
                    <svg className="w-5 h-5 mx-auto mb-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-gray-400">Emails</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">
                    <svg className="w-5 h-5 mx-auto mb-1 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-xs text-gray-400">Data</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Session Log */}
      <div className="bg-black/40 rounded-xl p-4">
        <h4 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">Session Log</h4>
        <div className="space-y-2 font-mono text-xs">
          {logs.slice(0, logIndex + 1).map((log, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
                idx === logIndex ? 'text-[#00D4FF]' : 'text-gray-500'
              } ${idx === logIndex ? 'animate-pulse' : ''}`}
            >
              <span className="text-gray-600">{log.time}</span>
              <div className="flex items-center gap-2">
                {log.type === 'artifact' && (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                {log.type === 'data' && (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                )}
                {log.type === 'action' && (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {log.type === 'info' && (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <span>{log.action}</span>
              </div>
            </div>
          ))}
          {logIndex < logs.length - 1 && (
            <div className="flex items-start gap-3 text-gray-700">
              <span>...</span>
              <span>Processing next step</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-4 pt-4 flex items-center justify-between text-xs text-gray-500">
        <span>3 active tasks</span>
        <span>8 artifacts generated</span>
      </div>
    </div>
  );
}
