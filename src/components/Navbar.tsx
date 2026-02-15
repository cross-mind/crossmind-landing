export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <svg viewBox="0 0 200 200" fill="none" width="28" height="28" className="transform group-hover:scale-110 transition-transform">
              <polygon points="28,22 54,22 108,84 100,100 92,84" fill="#2D5BFF"></polygon>
              <polygon points="92,116 100,100 108,116 172,178 146,178" fill="#2D5BFF"></polygon>
              <polygon points="54,22 74,40 108,84" fill="#1A3FC7" opacity="0.7"></polygon>
              <polygon points="172,178 172,160 108,116" fill="#1A3FC7" opacity="0.7"></polygon>
              <polygon points="172,22 146,22 92,84 100,100 108,84" fill="#00D4FF"></polygon>
              <polygon points="108,116 100,100 92,116 28,178 54,178" fill="#00D4FF"></polygon>
              <polygon points="146,22 126,40 92,84" fill="#00939B" opacity="0.65"></polygon>
              <polygon points="28,178 28,160 92,116" fill="#00939B" opacity="0.65"></polygon>
            </svg>
            <span className="text-lg font-bold text-white">
              CrossMind
            </span>
          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              How it works
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </a>
            <a
              href="#waitlist"
              className="bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#2D5BFF]/50 transition-all transform hover:scale-105"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
