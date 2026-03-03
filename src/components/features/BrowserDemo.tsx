import { useState, useEffect } from 'react';

export default function BrowserDemo() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      action: 'Navigating',
      url: 'https://competitor-site.com',
      status: 'loading',
      description: 'Opening page with full JavaScript rendering'
    },
    {
      action: 'Extracting',
      url: 'https://competitor-site.com/pricing',
      status: 'extracting',
      description: 'Analyzing pricing tiers and feature matrix'
    },
    {
      action: 'Detected',
      url: 'https://competitor-site.com/signup',
      status: 'captcha',
      description: 'CAPTCHA detected - human takeover available'
    },
    {
      action: 'Completed',
      url: 'https://competitor-site.com/signup',
      status: 'success',
      description: 'Data extracted and saved to artifacts'
    }
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStep((prev) => {
        const next = (prev + 1) % steps.length;
        setProgress(0);
        return next;
      });
    }, 3500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 50);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const current = steps[step];

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
      {/* Browser Chrome */}
      <div className="bg-black/60 px-4 py-3">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex items-center gap-2 bg-black/40 rounded-lg px-3 py-2">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-sm font-mono text-gray-400 flex-1">{current.url}</span>
          {current.status === 'loading' && (
            <svg className="w-4 h-4 text-[#00D4FF] animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
        </div>
      </div>

      {/* Browser Viewport */}
      <div className="bg-black/40 h-64 relative overflow-hidden">
        {/* Simulated webpage content */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-4">
            <div className="h-6 w-32 bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] rounded"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-white/5 rounded"></div>
              <div className="h-6 w-20 bg-white/10 rounded"></div>
            </div>
          </div>

          {/* Content blocks */}
          <div className="space-y-3">
            <div className="h-4 bg-white/5 rounded w-3/4"></div>
            <div className="h-4 bg-white/5 rounded w-full"></div>
            <div className="h-4 bg-white/5 rounded w-5/6"></div>
          </div>

          {/* Pricing cards (visible during extract step) */}
          {current.status === 'extracting' && (
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#00D4FF]/10 animate-pulse"></div>
                <div className="relative">
                  <div className="h-3 bg-white/20 rounded w-16 mb-2"></div>
                  <div className="h-5 bg-white/30 rounded w-20"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-400/10 animate-pulse"></div>
                <div className="relative">
                  <div className="h-3 bg-white/20 rounded w-16 mb-2"></div>
                  <div className="h-5 bg-white/30 rounded w-20"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-400/10 animate-pulse"></div>
                <div className="relative">
                  <div className="h-3 bg-white/20 rounded w-16 mb-2"></div>
                  <div className="h-5 bg-white/30 rounded w-20"></div>
                </div>
              </div>
            </div>
          )}

          {/* CAPTCHA overlay */}
          {current.status === 'captcha' && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
              <div className="bg-gray-900 rounded-xl p-6 max-w-sm">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <h4 className="text-lg font-bold text-white">CAPTCHA Detected</h4>
                </div>
                <p className="text-sm text-gray-400 mb-4">Human takeover required to proceed</p>
                <button className="w-full bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white px-4 py-2 rounded-lg text-sm font-bold hover:shadow-lg transition-all">
                  Take Control
                </button>
              </div>
            </div>
          )}

          {/* Success overlay */}
          {current.status === 'success' && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
              <div className="bg-gray-900 rounded-xl p-6 max-w-sm text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h4 className="text-lg font-bold text-white mb-2">Task Complete</h4>
                <p className="text-sm text-gray-400">Data saved to artifacts/competitor-analysis.yaml</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-black/60 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${
              current.status === 'loading' ? 'bg-blue-500 animate-pulse' :
              current.status === 'extracting' ? 'bg-[#00D4FF] animate-pulse' :
              current.status === 'captcha' ? 'bg-yellow-500' :
              'bg-green-500'
            }`}></div>
            <span className="text-sm font-bold text-white">{current.action}</span>
          </div>
          <span className="text-xs text-gray-500">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-white/5 rounded-full h-2 mb-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] h-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-400">{current.description}</p>
      </div>
    </div>
  );
}
