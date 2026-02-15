export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { email, name } = await request.json();
    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: "缺少必填字段" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const url = new URL(request.url);
    const utmSource = url.searchParams.get("utm_source") || "direct";
    const response = await fetch("https://agent.linktion.cn/api/public/artifacts/waitlist-leads/rows", {
      method: "POST",
      headers: {
        "Authorization": "Bearer aat_b37e65e9b430ed0f008f20ac2d23f85ee83f3bf48a1ee4bf0de04b78bec41a03",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        row: {
          name,
          email,
          submitted_at: (/* @__PURE__ */ new Date()).toISOString(),
          utm_source: utmSource,
          notes: `来自 landing page,IP: ${request.headers.get("x-forwarded-for") || "unknown"}`
        }
      })
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Database API error:", errorText);
      throw new Error("保存数据失败");
    }
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return new Response(
      JSON.stringify({ error: "服务器错误" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
