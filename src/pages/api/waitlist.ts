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

    // 获取 UTM 参数
    const url = new URL(request.url);
    const utmSource = url.searchParams.get('utm_source') || 'direct';

    // 保存到 CrossMind database
    const response = await fetch('https://agent.linktion.cn/api/public/artifacts/waitlist-leads/rows', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer aat_b37e65e9b430ed0f008f20ac2d23f85ee83f3bf48a1ee4bf0de04b78bec41a03',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        row: {
          name: name,
          email: email,
          submitted_at: new Date().toISOString(),
          utm_source: utmSource,
          notes: `来自 landing page,IP: ${request.headers.get('x-forwarded-for') || 'unknown'}`
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Database API error:', errorText);
      throw new Error('保存数据失败');
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
