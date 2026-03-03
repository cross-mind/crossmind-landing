import { useState, useEffect } from 'react';

export default function SocialMediaDemo() {
  const [selectedPost, setSelectedPost] = useState(0);

  const posts = [
    {
      id: 1,
      platform: 'X',
      platformColor: 'text-white',
      status: 'published',
      statusColor: 'bg-green-500/20 text-green-400',
      content: 'Just shipped a major feature update. Build-in-public is the only way.',
      timestamp: '2h ago',
      metrics: { likes: 247, replies: 18, impressions: 4200 },
      approved: true
    },
    {
      id: 2,
      platform: 'LinkedIn',
      platformColor: 'text-[#0A66C2]',
      status: 'ready',
      statusColor: 'bg-blue-500/20 text-blue-400',
      content: "Here's what I learned about growth automation after talking to 100 founders...",
      timestamp: 'Scheduled: Tomorrow 9am',
      metrics: null,
      approved: false
    },
    {
      id: 3,
      platform: 'X',
      platformColor: 'text-white',
      status: 'draft',
      statusColor: 'bg-gray-500/20 text-gray-400',
      content: 'Quick thread about why most AI tools feel the same (and how we fixed it)',
      timestamp: 'Draft',
      metrics: null,
      approved: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPost((prev) => (prev + 1) % posts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = posts[selectedPost];

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Content Pipeline</h3>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>3 in queue</span>
        </div>
      </div>

      {/* Post Navigation */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {posts.map((post, idx) => (
          <button
            key={post.id}
            onClick={() => setSelectedPost(idx)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              idx === selectedPost
                ? 'bg-white/10'
                : 'bg-black/20 hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2">
              {post.platform === 'X' ? (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              )}
              <span className={post.platformColor}>{post.platform}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Post Card */}
      <div className="bg-black/40 rounded-xl p-5 mb-4">
        <div className="flex items-start justify-between mb-4">
          <span className={`text-xs font-bold px-2 py-1 rounded ${current.statusColor}`}>
            {current.status.toUpperCase()}
          </span>
          <span className="text-xs text-gray-500">{current.timestamp}</span>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">{current.content}</p>

        {current.metrics ? (
          <div className="grid grid-cols-3 gap-3 pb-4 mb-4">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">Likes</div>
              <div className="text-lg font-bold text-pink-400">{current.metrics.likes}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">Replies</div>
              <div className="text-lg font-bold text-blue-400">{current.metrics.replies}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">Views</div>
              <div className="text-lg font-bold text-[#00D4FF]">{current.metrics.impressions.toLocaleString()}</div>
            </div>
          </div>
        ) : (
          <div className="pb-4 mb-4">
            <div className="text-sm text-gray-500 text-center py-2">
              Awaiting publish
            </div>
          </div>
        )}

        {/* Actions */}
        {!current.approved && current.status !== 'published' && (
          <div className="flex gap-2">
            <button className="flex-1 bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white px-4 py-2 rounded-lg text-sm font-bold hover:shadow-lg transition-all">
              Approve & Publish
            </button>
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-bold text-gray-400 transition-all">
              Edit
            </button>
          </div>
        )}

        {current.approved && current.status === 'published' && (
          <div className="flex items-center justify-center gap-2 text-sm text-green-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Published successfully</span>
          </div>
        )}
      </div>

      {/* Platform Connected Status */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>X Connected</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>LinkedIn Connected</span>
          </div>
        </div>
        <span className="text-gray-500">OAuth enabled</span>
      </div>
    </div>
  );
}
