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
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="CrossMind - Your AI Co-Founder for Automated Growth. Handle social media, content marketing, user acquisition, and analytics automatically."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-white text-gray-900 antialiased"> ${renderSlot($$result, $$slots["default"])} <footer class="bg-gray-900 text-gray-400 py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row justify-between items-center gap-8"> <div class="flex items-center gap-2"> <svg viewBox="0 0 200 200" fill="none" width="28" height="28"> <polygon points="28,22 54,22 108,84 100,100 92,84" fill="#2D5BFF"></polygon> <polygon points="92,116 100,100 108,116 172,178 146,178" fill="#2D5BFF"></polygon> <polygon points="172,22 146,22 92,84 100,100 108,84" fill="#00D4FF"></polygon> <polygon points="108,116 100,100 92,116 28,178 54,178" fill="#00D4FF"></polygon> </svg> <span class="text-lg font-bold text-white">CrossMind</span> </div> <div class="flex flex-col md:flex-row gap-6 text-sm text-gray-400"> <a href="mailto:hello@crossmind.io" class="hover:text-white transition">Contact</a> <a href="#pricing" class="hover:text-white transition">Pricing</a> <a href="#how-it-works" class="hover:text-white transition">How it Works</a> </div> <p class="text-sm">&copy; 2026 CrossMind. All rights reserved.</p> </div> </div> </footer> </body></html>`;
}, "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/layouts/Layout.astro", void 0);

function Navbar() {
  return /* @__PURE__ */ jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-3 group", children: [
      /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 200", fill: "none", width: "32", height: "32", className: "transform group-hover:scale-110 transition-transform", children: [
        /* @__PURE__ */ jsx("polygon", { points: "28,22 54,22 108,84 100,100 92,84", fill: "#2D5BFF" }),
        /* @__PURE__ */ jsx("polygon", { points: "92,116 100,100 108,116 172,178 146,178", fill: "#2D5BFF" }),
        /* @__PURE__ */ jsx("polygon", { points: "54,22 74,40 108,84", fill: "#1A3FC7", opacity: "0.7" }),
        /* @__PURE__ */ jsx("polygon", { points: "172,178 172,160 108,116", fill: "#1A3FC7", opacity: "0.7" }),
        /* @__PURE__ */ jsx("polygon", { points: "172,22 146,22 92,84 100,100 108,84", fill: "#00D4FF" }),
        /* @__PURE__ */ jsx("polygon", { points: "108,116 100,100 92,116 28,178 54,178", fill: "#00D4FF" }),
        /* @__PURE__ */ jsx("polygon", { points: "146,22 126,40 92,84", fill: "#00939B", opacity: "0.65" }),
        /* @__PURE__ */ jsx("polygon", { points: "28,178 28,160 92,116", fill: "#00939B", opacity: "0.65" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-xl font-bold bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent", children: "CrossMind" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
      /* @__PURE__ */ jsx("a", { href: "#how-it-works", className: "text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium", children: "How it works" }),
      /* @__PURE__ */ jsx("a", { href: "#pricing", className: "text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium", children: "Pricing" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#waitlist",
          className: "bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#2D5BFF]/25 transition-all",
          children: "Join Waitlist"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { className: "md:hidden p-2", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) }) })
  ] }) }) });
}

function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#2D5BFF]/20 to-transparent rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#00D4FF]/20 to-transparent rounded-full blur-3xl animate-pulse", style: { animationDelay: "1s" } })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" }),
    /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm font-medium tracking-wide", children: "BETA ACCESS AVAILABLE" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-6xl sm:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight", children: [
        "Growth on",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#2D5BFF] via-[#00D4FF] to-[#2D5BFF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient", children: "Autopilot" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed", children: [
        "While you build, your AI co-founder handles content, outreach, and analytics.",
        /* @__PURE__ */ jsx("span", { className: "block mt-2 text-white font-medium", children: "Zero manual work required." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-16", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#waitlist",
          className: "group relative px-8 py-4 bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#2D5BFF]/50 transition-all duration-300 transform hover:scale-105",
          children: [
            /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Get Early Access" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-1", children: "40%" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 uppercase tracking-wide", children: "Early bird discount" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-1", children: "24/7" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 uppercase tracking-wide", children: "Automated execution" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-1", children: "0" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 uppercase tracking-wide", children: "Manual effort" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" })
  ] });
}

const features = [
  {
    icon: "→",
    title: "Social Media",
    subtitle: "Auto-publish 24/7",
    description: "Research trends, generate content calendars, draft posts, publish to Twitter/LinkedIn—all while you sleep."
  },
  {
    icon: "→",
    title: "Content",
    subtitle: "SEO on autopilot",
    description: "Generate blog posts, SEO copy, and landing pages tailored to your positioning. Boost rankings effortlessly."
  },
  {
    icon: "→",
    title: "Outreach",
    subtitle: "Find & convert users",
    description: "Identify targets on LinkedIn/Twitter/Reddit. Send personalized invites and track conversions automatically."
  },
  {
    icon: "→",
    title: "Analytics",
    subtitle: "Data-driven decisions",
    description: "Aggregate feedback, monitor competitors, track metrics. Get actionable recommendations instantly."
  }
];
function Features() {
  return /* @__PURE__ */ jsxs("section", { id: "how-it-works", className: "py-32 bg-black relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-5xl sm:text-6xl font-black text-white mb-6", children: "What we automate" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-2xl mx-auto", children: "Four core growth pillars. Zero manual effort required." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 hover:bg-white/10",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2D5BFF]/0 to-[#00D4FF]/0 group-hover:from-[#2D5BFF]/10 group-hover:to-[#00D4FF]/10 transition-all duration-300" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[#00D4FF] text-sm font-bold uppercase tracking-wider mb-2", children: String(index + 1).padStart(2, "0") }),
                  /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-white mb-1", children: feature.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm font-medium", children: feature.subtitle })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-4xl text-[#00D4FF] group-hover:translate-x-2 transition-transform duration-300", children: feature.icon })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed", children: feature.description })
            ] })
          ]
        },
        feature.title
      )) })
    ] })
  ] });
}

const plans = [
  {
    name: "Pay As You Go",
    price: "$0.10",
    unit: "/ task execution",
    description: "Perfect for validating your idea",
    features: [
      "All growth automation features",
      "Twitter/LinkedIn auto-publishing",
      "User outreach & feedback collection",
      "Analytics & insights",
      "Pay only for what you use"
    ],
    cta: "Get Started",
    highlight: false
  },
  {
    name: "Monthly",
    price: "$49",
    unit: "/ month",
    originalPrice: "$79",
    discount: "40% OFF Early Bird",
    description: "For products needing consistent growth",
    features: [
      "1,000 task executions included",
      "All Pay-As-You-Go features",
      "Priority support",
      "Custom growth strategies",
      "Overages at $0.08/task"
    ],
    cta: "Claim Early Bird",
    highlight: true
  },
  {
    name: "Annual",
    price: "$499",
    unit: "/ year",
    originalPrice: "$948",
    discount: "50% OFF Early Bird",
    description: "Best value for long-term growth",
    features: [
      "15,000 task executions included",
      "All Monthly plan features",
      "Dedicated growth advisor",
      "ROI analysis reports",
      "Overages at $0.05/task"
    ],
    cta: "Get Annual Deal",
    highlight: false
  }
];
function Pricing() {
  return /* @__PURE__ */ jsx("section", { id: "pricing", className: "py-24 bg-gradient-to-br from-slate-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl font-bold text-gray-900 mb-4", children: "Simple, Transparent Pricing" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Choose the plan that fits your growth stage. Switch anytime." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: plans.map((plan) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `bg-white p-8 rounded-2xl border transition-all duration-300 ${plan.highlight ? "border-[#2D5BFF] shadow-2xl shadow-[#2D5BFF]/10 scale-105 relative" : "border-gray-200 shadow-lg hover:shadow-xl"}`,
        children: [
          plan.highlight && /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsx("span", { className: "inline-block bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white text-sm font-semibold px-4 py-1 rounded-full", children: "MOST POPULAR" }) }),
          plan.discount && /* @__PURE__ */ jsx("span", { className: "inline-block bg-[#2D5BFF]/10 text-[#2D5BFF] text-sm font-medium px-3 py-1 rounded-full mb-4", children: plan.discount }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 text-gray-900", children: plan.name }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-5xl font-bold text-gray-900", children: plan.price }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 ml-1", children: plan.unit }),
            plan.originalPrice && /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-400 line-through mt-1", children: [
              "was ",
              plan.originalPrice
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: plan.description }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8", children: plan.features.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-start text-sm", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#00D4FF] mr-2 flex-shrink-0 mt-0.5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
          ] }, feature)) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#waitlist",
              className: `block text-center py-3 px-6 rounded-xl font-semibold transition-all ${plan.highlight ? "bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white hover:shadow-lg hover:shadow-[#2D5BFF]/25" : "bg-white text-gray-900 border-2 border-gray-300 hover:border-[#2D5BFF]/50 hover:bg-slate-50"}`,
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
        setMessage("🎉 Success! Check your inbox for next steps.");
        setEmail("");
        setName("");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Oops! Please try again or email us at hello@crossmind.io");
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "waitlist", className: "relative py-24 bg-gradient-to-br from-[#2D5BFF] to-[#1A3FC7] overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full", style: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    } }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl font-bold text-white mb-4", children: "Join the Waitlist" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100", children: "Get early access + 40% off for first 100 users" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Your name",
              value: name,
              onChange: (e) => setName(e.target.value),
              required: true,
              className: "w-full px-5 py-4 rounded-xl bg-white/95 backdrop-blur-sm border-2 border-transparent focus:border-[#00D4FF] focus:bg-white focus:outline-none transition-all shadow-lg"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              placeholder: "Your email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              required: true,
              className: "w-full px-5 py-4 rounded-xl bg-white/95 backdrop-blur-sm border-2 border-transparent focus:border-[#00D4FF] focus:bg-white focus:outline-none transition-all shadow-lg"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: status === "loading",
              className: "w-full bg-white text-[#2D5BFF] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all disabled:opacity-50 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5",
              children: status === "loading" ? "Submitting..." : "Get Early Access →"
            }
          )
        ] }),
        message && /* @__PURE__ */ jsx(
          "p",
          {
            className: `mt-6 text-center font-medium ${status === "success" ? "text-white" : "text-yellow-200"}`,
            children: message
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-blue-100 text-sm mt-6", children: "No credit card required • Cancel anytime" })
    ] })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CrossMind - Your AI Co-Founder for Automated Growth" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, {})} ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/Hero.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Features", Features, {})} ${renderComponent($$result2, "Pricing", Pricing, {})} ${renderComponent($$result2, "Waitlist", Waitlist, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/Waitlist.tsx", "client:component-export": "default" })} ` })}`;
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
