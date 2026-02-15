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
        setMessage('🎉 成功加入 waitlist!我们会尽快联系你。');
        setEmail('');
        setName('');
      } else {
        throw new Error('提交失败');
      }
    } catch (error) {
      setStatus('error');
      setMessage('提交失败,请稍后重试或直接邮件联系 cestivan@163.com');
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            抢占早鸟名额
          </h2>
          <p className="text-xl text-blue-100">
            前 100 名用户享受首月 6 折 + 年付 5 折优惠
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="你的名字"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 focus:border-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="你的邮箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition disabled:opacity-50"
            >
              {status === 'loading' ? '提交中...' : '加入 Waitlist'}
            </button>
          </div>
          {message && (
            <p
              className={`mt-4 text-center ${
                status === 'success' ? 'text-white' : 'text-yellow-200'
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
