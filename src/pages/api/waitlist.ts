import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, name } = await request.json();

    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: '缺少必填字段' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 使用 Web3Forms 免费服务发送邮件
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: import.meta.env.WEB3FORMS_ACCESS_KEY,
        subject: `CrossMind Waitlist: ${name}`,
        from_name: 'CrossMind Landing',
        to: 'cestivan@163.com',
        message: `新用户加入 Waitlist:\n\n姓名: ${name}\n邮箱: ${email}\n提交时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}`
      })
    });

    if (!response.ok) {
      throw new Error('发送邮件失败');
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return new Response(
      JSON.stringify({ error: '服务器错误' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
