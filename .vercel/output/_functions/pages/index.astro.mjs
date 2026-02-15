import { e as createComponent, g as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, h as createAstro, n as renderComponent } from '../chunks/astro/server_BxQsOMIE.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="zh-CN"> <head><meta charset="UTF-8"><meta name="description" content="CrossMind - AI 联合创始人,自动化处理增长工作,让创始人专注构建产品"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gray-50 text-gray-900"> ${renderSlot($$result, $$slots["default"])} <footer class="bg-gray-900 text-gray-400 py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <p>&copy; 2026 CrossMind. All rights reserved.</p> </div> </footer> </body></html>`;
}, "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/layouts/Layout.astro", void 0);

function Hero() {
  return /* @__PURE__ */ jsx("section", { className: "relative bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-6xl font-bold text-gray-900 mb-6", children: [
      "AI 联合创始人",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "帮你处理增长工作" })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-xl text-gray-600 mb-8 max-w-3xl mx-auto", children: [
      "CrossMind 自动化执行 growth 任务 —— Social Media 运营、内容营销、用户获取、数据分析。",
      /* @__PURE__ */ jsx("br", {}),
      "让你专注构建产品,我们帮你获取用户。"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#waitlist",
          className: "bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition",
          children: "抢占早鸟名额"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#pricing",
          className: "border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition",
          children: "查看定价"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm text-gray-500", children: "早鸟用户专享:首月 6 折 · 年付 5 折" })
  ] }) }) });
}

const features = [
  {
    icon: "📱",
    title: "Social Media 自动化",
    description: "自动研究热门话题,生成内容日历,起草并发布 Twitter/LinkedIn 内容,跟踪互动效果"
  },
  {
    icon: "✍️",
    title: "内容营销",
    description: "基于产品定位生成博客文章、SEO 内容、landing page 文案,提升搜索排名和转化"
  },
  {
    icon: "🎯",
    title: "用户获取",
    description: "主动识别目标用户,通过 LinkedIn/Twitter/Reddit 触达,个性化邀请测试,追踪转化率"
  },
  {
    icon: "📊",
    title: "数据分析",
    description: "聚合用户反馈、竞品动态、增长指标,生成优先级建议,让你快速做出正确决策"
  }
];
function Features() {
  return /* @__PURE__ */ jsx("section", { id: "features", className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-5xl font-bold text-gray-900 mb-4", children: "全自动增长引擎" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "不只是工具,而是一个真正为你执行的 AI 联合创始人" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: features.map((feature) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-8 rounded-xl hover:shadow-lg transition", children: [
      /* @__PURE__ */ jsx("div", { className: "text-5xl mb-4", children: feature.icon }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3", children: feature.title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: feature.description })
    ] }, feature.title)) })
  ] }) });
}

const plans = [
  {
    name: "按量付费",
    price: "¥0.5",
    unit: "/ 每次任务执行",
    description: "适合刚开始验证想法的创始人",
    features: [
      "所有 growth 自动化功能",
      "Twitter/LinkedIn 自动发布",
      "用户触达与反馈收集",
      "数据分析与建议",
      "按实际使用量计费"
    ],
    cta: "开始使用",
    highlight: false
  },
  {
    name: "月度套餐",
    price: "¥299",
    unit: "/ 月",
    originalPrice: "¥499",
    discount: "早鸟 6 折",
    description: "适合需要持续增长的产品",
    features: [
      "包含 1000 次任务执行",
      "所有按量付费功能",
      "优先技术支持",
      "定制化增长策略",
      "超出部分 ¥0.4/次"
    ],
    cta: "抢占早鸟名额",
    highlight: true
  },
  {
    name: "年度套餐",
    price: "¥2,988",
    unit: "/ 年",
    originalPrice: "¥5,988",
    discount: "早鸟 5 折",
    description: "长期增长的最佳选择",
    features: [
      "包含 15,000 次任务执行",
      "所有月度套餐功能",
      "专属增长顾问",
      "ROI 分析报告",
      "超出部分 ¥0.3/次"
    ],
    cta: "立即购买",
    highlight: false
  }
];
function Pricing() {
  return /* @__PURE__ */ jsx("section", { id: "pricing", className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-5xl font-bold text-gray-900 mb-4", children: "透明定价,早鸟优惠" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "选择适合你的方案,随时可调整" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: plans.map((plan) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `bg-white p-8 rounded-xl ${plan.highlight ? "ring-2 ring-blue-600 shadow-xl scale-105" : "shadow-lg"}`,
        children: [
          plan.discount && /* @__PURE__ */ jsx("span", { className: "inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-4", children: plan.discount }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2", children: plan.name }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-4xl font-bold", children: plan.price }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: plan.unit }),
            plan.originalPrice && /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-400 line-through mt-1", children: [
              "原价 ",
              plan.originalPrice
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: plan.description }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8", children: plan.features.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-600 mr-2", children: "✓" }),
            /* @__PURE__ */ jsx("span", { children: feature })
          ] }, feature)) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#waitlist",
              className: `block text-center py-3 px-6 rounded-lg font-semibold transition ${plan.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "border-2 border-gray-300 hover:border-gray-400"}`,
              children: plan.cta
            }
          )
        ]
      },
      plan.name
    )) })
  ] }) });
}

function Waitlist() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name })
      });
      if (response.ok) {
        setStatus("success");
        setMessage("🎉 成功加入 waitlist!我们会尽快联系你。");
        setEmail("");
        setName("");
      } else {
        throw new Error("提交失败");
      }
    } catch (error) {
      setStatus("error");
      setMessage("提交失败,请稍后重试或直接邮件联系 cestivan@163.com");
    }
  };
  return /* @__PURE__ */ jsx("section", { id: "waitlist", className: "py-20 bg-blue-600", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-5xl font-bold text-white mb-4", children: "抢占早鸟名额" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100", children: "前 100 名用户享受首月 6 折 + 年付 5 折优惠" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "你的名字",
            value: name,
            onChange: (e) => setName(e.target.value),
            required: true,
            className: "w-full px-4 py-3 rounded-lg border-2 border-blue-400 focus:border-white focus:outline-none"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            placeholder: "你的邮箱",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true,
            className: "w-full px-4 py-3 rounded-lg border-2 border-blue-400 focus:border-white focus:outline-none"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: status === "loading",
            className: "w-full bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition disabled:opacity-50",
            children: status === "loading" ? "提交中..." : "加入 Waitlist"
          }
        )
      ] }),
      message && /* @__PURE__ */ jsx(
        "p",
        {
          className: `mt-4 text-center ${status === "success" ? "text-white" : "text-yellow-200"}`,
          children: message
        }
      )
    ] })
  ] }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CrossMind - AI Co-founder That Handles Growth" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/Hero.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Features", Features, {})} ${renderComponent($$result2, "Pricing", Pricing, {})} ${renderComponent($$result2, "Waitlist", Waitlist, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/Waitlist.tsx", "client:component-export": "default" })} ` })}`;
}, "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/pages/index.astro", void 0);

const $$file = "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
