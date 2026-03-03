import { useState, useEffect } from 'react';

export default function LandingBuilderDemo() {
  const [lineCount, setLineCount] = useState(0);
  const [deployStatus, setDeployStatus] = useState('idle');

  const codeLines = [
    "import { motion } from 'framer-motion';",
    "",
    "export default function Hero() {",
    "  return (",
    "    <section className='relative min-h-screen",
    "      bg-gradient-to-br from-slate-950 to-indigo-950'>",
    "      <motion.div",
    "        initial={{ opacity: 0, y: 20 }}",
    "        animate={{ opacity: 1, y: 0 }}",
    "        className='max-w-6xl mx-auto px-6 pt-32'>",
    "        <h1 className='text-7xl font-black mb-6",
    "          bg-gradient-to-r from-blue-400 to-cyan-400",
    "          bg-clip-text text-transparent'>",
    "          Ship faster than ever",
    "        </h1>",
    "        <p className='text-2xl text-slate-300 mb-12'>",
    "          Your AI co-founder that actually executes",
    "        </p>",
    "        <button className='bg-gradient-to-r",
    "          from-blue-600 to-cyan-600 px-8 py-4",
    "          rounded-full font-bold text-lg",
    "          hover:shadow-2xl transition-all'>",
    "          Get Started",
    "        </button>",
    "      </motion.div>",
    "    </section>",
    "  );",
    "}"
  ];

  useEffect(() => {
    if (lineCount < codeLines.length) {
      const timer = setTimeout(() => {
        setLineCount(lineCount + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else if (lineCount === codeLines.length && deployStatus === 'idle') {
      setTimeout(() => setDeployStatus('building'), 300);
      setTimeout(() => setDeployStatus('deploying'), 1500);
      setTimeout(() => setDeployStatus('deployed'), 2800);
      setTimeout(() => {
        setLineCount(0);
        setDeployStatus('idle');
      }, 5000);
    }
  }, [lineCount, deployStatus]);

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
      {/* Editor Header */}
      <div className="bg-black/60 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-3 text-sm font-mono text-gray-400">src/components/Hero.tsx</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-[#00D4FF]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Code Editor */}
      <div className="bg-black/40 p-6 font-mono text-sm h-80 overflow-hidden">
        {codeLines.slice(0, lineCount).map((line, idx) => (
          <div key={idx} className="flex gap-4">
            <span className="text-gray-600 select-none w-8 text-right">{idx + 1}</span>
            <span className={`${
              line.includes('import') || line.includes('export') ? 'text-purple-400' :
              line.includes('return') ? 'text-pink-400' :
              line.includes('className') ? 'text-green-400' :
              line.includes('gradient') || line.includes('blue') || line.includes('cyan') ? 'text-[#00D4FF]' :
              line.includes("'") || line.includes('"') ? 'text-amber-400' :
              'text-gray-300'
            }`}>
              {line || '\u00A0'}
            </span>
          </div>
        ))}
        {lineCount < codeLines.length && (
          <div className="flex gap-4">
            <span className="text-gray-600 select-none w-8 text-right">{lineCount + 1}</span>
            <span className="text-gray-300 animate-pulse">|</span>
          </div>
        )}
      </div>

      {/* Preview & Deploy Status */}
      <div className="bg-black/60 p-4">
        {deployStatus === 'idle' && lineCount === codeLines.length && (
          <div className="text-center text-gray-400 text-sm">
            <svg className="w-5 h-5 inline mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Generation complete
          </div>
        )}
        {deployStatus === 'building' && (
          <div className="flex items-center justify-center gap-3 text-yellow-400 text-sm">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Building production bundle...</span>
          </div>
        )}
        {deployStatus === 'deploying' && (
          <div className="flex items-center justify-center gap-3 text-blue-400 text-sm">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Deploying to yourdomain.com...</span>
          </div>
        )}
        {deployStatus === 'deployed' && (
          <div className="flex items-center justify-center gap-3 text-[#00D4FF] text-sm font-bold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Live at yourdomain.com</span>
          </div>
        )}
      </div>

      {/* Mini Preview */}
      <div className="bg-gradient-to-br from-slate-950 to-indigo-950 p-6">
        <div className="text-center">
          <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ship faster than ever
          </h3>
          <p className="text-sm text-slate-400 mb-4">Your AI co-founder that actually executes</p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
