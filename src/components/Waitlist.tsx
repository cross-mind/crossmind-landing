import { useState } from 'react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      });

      if (response.ok) {
        setStatus('success');
        setMessage('🎉 Success! Check your inbox for next steps.');
        setEmail('');
        setName('');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Oops! Please try again or email us at hello@crossmind.io');
    }
  };

  return (
    <section id="waitlist" className="relative py-24 bg-gradient-to-br from-[#2D5BFF] to-[#1A3FC7] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Join the Waitlist
          </h2>
          <p className="text-xl text-blue-100">
            Get early access + 40% off for first 100 users
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-xl bg-white/95 backdrop-blur-sm border-2 border-transparent focus:border-[#00D4FF] focus:bg-white focus:outline-none transition-all shadow-lg"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-xl bg-white/95 backdrop-blur-sm border-2 border-transparent focus:border-[#00D4FF] focus:bg-white focus:outline-none transition-all shadow-lg"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-white text-[#2D5BFF] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all disabled:opacity-50 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              {status === 'loading' ? 'Submitting...' : 'Get Early Access →'}
            </button>
          </div>
          {message && (
            <p
              className={`mt-6 text-center font-medium ${
                status === 'success' ? 'text-white' : 'text-yellow-200'
              }`}
            >
              {message}
            </p>
          )}
        </form>
        <p className="text-center text-blue-100 text-sm mt-6">
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
