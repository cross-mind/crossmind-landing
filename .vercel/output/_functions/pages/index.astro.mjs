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
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="CrossMind - Your AI Co-Founder for Automated Growth. Handle social media, content marketing, user acquisition, and analytics automatically."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-white text-gray-900 antialiased"> ${renderSlot($$result, $$slots["default"])} <footer class="bg-gray-900 text-gray-400 py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row justify-between items-center gap-8"> <div class="flex items-center gap-2"> <svg viewBox="0 0 200 200" fill="none" width="28" height="28"> <polygon points="28,22 54,22 108,84 100,100 92,84" fill="#2D5BFF"></polygon> <polygon points="92,116 100,100 108,116 172,178 146,178" fill="#2D5BFF"></polygon> <polygon points="172,22 146,22 92,84 100,100 108,84" fill="#00D4FF"></polygon> <polygon points="108,116 100,100 92,116 28,178 54,178" fill="#00D4FF"></polygon> </svg> <span class="text-lg font-bold text-white">CrossMind</span> </div> <div class="flex flex-col md:flex-row gap-6 text-sm text-gray-400"> <a href="mailto:nova-yu@crossmind.io" class="hover:text-white transition">Contact</a> <a href="#what-i-do" class="hover:text-white transition">What I do</a> </div> <p class="text-sm">&copy; 2026 CrossMind. All rights reserved.</p> </div> </div> </footer> </body></html>`;
}, "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/layouts/Layout.astro", void 0);

function Navbar() {
  return /* @__PURE__ */ jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-3 group", children: [
      /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 200", fill: "none", width: "28", height: "28", className: "transform group-hover:scale-110 transition-transform", children: [
        /* @__PURE__ */ jsx("polygon", { points: "28,22 54,22 108,84 100,100 92,84", fill: "#2D5BFF" }),
        /* @__PURE__ */ jsx("polygon", { points: "92,116 100,100 108,116 172,178 146,178", fill: "#2D5BFF" }),
        /* @__PURE__ */ jsx("polygon", { points: "54,22 74,40 108,84", fill: "#1A3FC7", opacity: "0.7" }),
        /* @__PURE__ */ jsx("polygon", { points: "172,178 172,160 108,116", fill: "#1A3FC7", opacity: "0.7" }),
        /* @__PURE__ */ jsx("polygon", { points: "172,22 146,22 92,84 100,100 108,84", fill: "#00D4FF" }),
        /* @__PURE__ */ jsx("polygon", { points: "108,116 100,100 92,116 28,178 54,178", fill: "#00D4FF" }),
        /* @__PURE__ */ jsx("polygon", { points: "146,22 126,40 92,84", fill: "#00939B", opacity: "0.65" }),
        /* @__PURE__ */ jsx("polygon", { points: "28,178 28,160 92,116", fill: "#00939B", opacity: "0.65" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-white", children: "CrossMind" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
      /* @__PURE__ */ jsx("a", { href: "#what-i-do", className: "text-gray-400 hover:text-white transition-colors text-sm font-medium", children: "What I do" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#waitlist",
          className: "bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#2D5BFF]/50 transition-all transform hover:scale-105",
          children: "Join Waitlist"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { className: "md:hidden p-2 text-white", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) }) })
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
      /* @__PURE__ */ jsxs("h1", { className: "text-6xl sm:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tight max-w-5xl mx-auto", children: [
        "Your AI co-founder for",
        " ",
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#2D5BFF] via-[#00D4FF] to-[#2D5BFF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient", children: "growth" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-2xl sm:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed", children: [
        "I handle content, competitors, users.",
        /* @__PURE__ */ jsx("span", { className: "block mt-2 text-white font-bold", children: "You focus on building." })
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
      /* @__PURE__ */ jsxs("div", { className: "relative w-full pt-8 border-t border-white/10 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-8 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-8 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 animate-scroll", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 flex-shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Competitor tracking" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Content creation" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "User interviews" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Legal docs" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Social media posts" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "SEO optimization" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Email campaigns" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Product analytics" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Landing pages" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Feature requests" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 flex-shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Competitor tracking" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Content creation" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "User interviews" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Legal docs" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Social media posts" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "SEO optimization" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Email campaigns" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Product analytics" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Landing pages" }) }),
            /* @__PURE__ */ jsx("div", { className: "px-6 py-3 rounded-full bg-white/5 border border-white/10 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Feature requests" }) })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" })
  ] });
}

const scenarios = [
  {
    label: "01",
    title: "Content Marketing",
    problem: "Posting consistently is hard",
    visual: "commits",
    result: "Tue 9am → 3 posts ready",
    example: "Your Friday commit became Monday's tweet thread"
  },
  {
    label: "02",
    title: "Competitor Tracking",
    problem: "Markets move fast",
    visual: "price-change",
    result: "$99→$79 noticed in 2hrs",
    example: "Comparison doc + 3 positioning moves drafted"
  },
  {
    label: "03",
    title: "User Interviews",
    problem: "8 interviews piling up",
    visual: "feedback-loop",
    result: "5 booked, questions ready",
    example: '"Export clunky" × 3 → feature request created, 23% users affected'
  },
  {
    label: "04",
    title: "Legal Docs",
    problem: "Privacy policy outdated",
    visual: "docs",
    result: "GDPR update drafted",
    example: "You added Stripe → Section 4 updated, changelog posted"
  }
];
function Features() {
  return /* @__PURE__ */ jsxs("section", { id: "what-i-do", className: "py-40 bg-black relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2D5BFF]/10 rounded-full blur-[150px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[150px]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100px_100px]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-32", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-7xl sm:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter", children: [
          "What I handle",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gray-800", children: "for you" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-2xl sm:text-3xl text-gray-400 max-w-3xl font-light", children: [
          "The growth work that drains your time.",
          /* @__PURE__ */ jsx("span", { className: "block mt-2 text-white", children: "I do it while you build." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: scenarios.map((scenario) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2D5BFF]/0 to-[#00D4FF]/0 group-hover:from-[#2D5BFF]/10 group-hover:to-[#00D4FF]/10 transition-all duration-300" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-6", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-[#00D4FF] uppercase tracking-wider mb-2", children: scenario.label }),
                /* @__PURE__ */ jsx("h3", { className: "text-3xl font-black text-white mb-2", children: scenario.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: scenario.problem })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "my-8 p-6 rounded-2xl bg-black/40 border border-white/5", children: [
                scenario.visual === "commits" && /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-gray-700" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 font-mono", children: 'git commit -m "Add email verification"' })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "pl-5 border-l-2 border-[#2D5BFF]/30 ml-1 py-2", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-[#00D4FF]", children: "AI extracts value" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#00D4FF] shadow-lg shadow-[#00D4FF]/50" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-white font-medium", children: "3 posts queued for review" })
                  ] })
                ] }),
                scenario.visual === "price-change" && /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-gray-700 line-through", children: "$99" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "→" }),
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-[#00D4FF]", children: "$79" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-white", children: "Alert sent in 2 hours" })
                ] }),
                scenario.visual === "feedback-loop" && /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("div", { className: "flex-1 h-8 rounded bg-gray-800 flex items-center px-3", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "8 requests" }) }) }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-[#00D4FF] text-center", children: "↓ Filter & Schedule" }),
                  /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx("div", { className: "flex-1 h-6 rounded bg-[#2D5BFF]/30 border border-[#2D5BFF]" }, i)) })
                ] }),
                scenario.visual === "docs" && /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 line-through", children: "Privacy v2.0 (2024)" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "pl-5 border-l-2 border-[#00D4FF]/30 ml-1 py-2", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-[#00D4FF]", children: "GDPR compliance check" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#00D4FF] shadow-lg shadow-[#00D4FF]/50" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-white", children: "Privacy v3.0 ready" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "p-4 rounded-xl bg-gradient-to-r from-[#2D5BFF]/10 to-[#00D4FF]/10 border border-[#00D4FF]/20 mb-4", children: /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-white mb-1", children: scenario.result }) }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 leading-relaxed", children: scenario.example })
            ] })
          ]
        },
        scenario.label
      )) })
    ] })
  ] });
}

function HowIWork() {
  return /* @__PURE__ */ jsxs("section", { className: "py-40 bg-black relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#2D5BFF]/10 via-transparent to-[#00D4FF]/10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00D4FF]/5 to-transparent transform skew-x-12" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-7xl sm:text-9xl font-black text-white mb-20 leading-[0.85] tracking-tighter", children: [
        "I optimize",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent", children: "your time" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-16", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-black text-gray-700 mb-6", children: "Before" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { style: { width: "40%" }, className: "h-14 bg-gray-800 rounded-lg relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center px-4", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-gray-400", children: "Building" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-2xl font-black text-gray-600 w-16", children: "40%" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { style: { width: "40%" }, className: "h-14 bg-red-900/30 rounded-lg border border-red-500/30 relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center px-4", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-red-400", children: "Growth work" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-2xl font-black text-red-400 w-16", children: "40%" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { style: { width: "20%" }, className: "h-14 bg-gray-800 rounded-lg relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center px-4", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-gray-400", children: "Thinking" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-2xl font-black text-gray-600 w-16", children: "20%" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-black bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent mb-6", children: "With me" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { style: { width: "60%" }, className: "h-16 bg-gradient-to-r from-[#2D5BFF] to-[#2D5BFF]/80 rounded-lg shadow-2xl shadow-[#2D5BFF]/30 relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex items-center justify-between px-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-white", children: "Building" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-[#00D4FF] font-bold", children: "+50%" })
              ] }) }),
              /* @__PURE__ */ jsx("span", { className: "text-3xl font-black text-white w-16", children: "60%" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { style: { width: "10%" }, className: "h-10 bg-gray-900/50 rounded-lg opacity-40 relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center px-4", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-gray-600", children: "Growth" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-xl font-black text-gray-600 w-16", children: "10%" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { style: { width: "30%" }, className: "h-16 bg-gradient-to-r from-[#00D4FF] to-[#00D4FF]/80 rounded-lg shadow-2xl shadow-[#00D4FF]/30 relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex items-center justify-between px-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-white", children: "Thinking" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-[#2D5BFF] font-bold", children: "+50%" })
              ] }) }),
              /* @__PURE__ */ jsx("span", { className: "text-3xl font-black text-white w-16", children: "30%" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-5xl font-black text-white mb-16 text-center", children: "I learn as we work" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-800 via-[#2D5BFF] to-[#00D4FF]" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1 text-right", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-gray-600 mb-1", children: "MONTH 1" }),
                /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-white", children: "Junior hire" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "relative z-10 w-4 h-4 rounded-full bg-gray-700 border-4 border-black flex-shrink-0" }),
              /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Best practices baseline" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1 text-right", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-[#2D5BFF] mb-1", children: "MONTH 2" }),
                /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-white", children: "Teammate" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "relative z-10 w-4 h-4 rounded-full bg-[#2D5BFF] border-4 border-black flex-shrink-0 shadow-lg shadow-[#2D5BFF]/50" }),
              /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Knows your preferences" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1 text-right", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-[#00D4FF] mb-1", children: "MONTH 3" }),
                /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-white", children: "Co-founder" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "relative z-10 w-4 h-4 rounded-full bg-[#00D4FF] border-4 border-black flex-shrink-0 shadow-lg shadow-[#00D4FF]/50" }),
              /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Proactive & in sync" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-40 max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-4xl font-black text-white mb-6", children: "You're in control" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 leading-relaxed", children: "Dashboard shows what I'm doing. Set boundaries. I remember your rules." })
      ] })
    ] })
  ] });
}

function WhyNow() {
  return /* @__PURE__ */ jsxs("section", { className: "py-40 bg-black relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-0 w-96 h-96 bg-[#2D5BFF]/20 rounded-full blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-0 w-96 h-96 bg-[#00D4FF]/20 rounded-full blur-[120px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-32", children: /* @__PURE__ */ jsxs("h2", { className: "text-7xl sm:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter max-w-5xl mx-auto", children: [
        "The game",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#2D5BFF] via-[#00D4FF] to-[#2D5BFF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient", children: "changed" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 text-xs font-bold text-gray-700 uppercase", children: "Before" }),
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-black text-gray-700 mb-8 line-through decoration-gray-800", children: "Bigger team" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-gray-600 text-lg", children: [
            /* @__PURE__ */ jsx("div", { children: "More engineers" }),
            /* @__PURE__ */ jsx("div", { children: "More funding" }),
            /* @__PURE__ */ jsx("div", { children: "More time" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-3xl bg-gradient-to-br from-[#2D5BFF]/20 to-[#00D4FF]/10 border border-[#00D4FF]/30 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 text-xs font-bold text-[#00D4FF] uppercase", children: "Now" }),
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-black bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent mb-8", children: "Faster iteration" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-white text-lg font-medium", children: [
            /* @__PURE__ */ jsx("div", { children: "Ship faster" }),
            /* @__PURE__ */ jsx("div", { children: "Learn from users quicker" }),
            /* @__PURE__ */ jsx("div", { children: "Iterate continuously" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-32 max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-3xl sm:text-4xl font-bold text-white leading-relaxed mb-8", children: "I remove friction between shipping and learning" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400", children: "You build. I handle growth. We iterate faster together." })
      ] })
    ] })
  ] });
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
        /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl font-bold text-white mb-4", children: "Let me handle growth while you build" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xl text-blue-100", children: [
          `Join the waitlist. We'll ask: "What growth task drains your time most?"`,
          /* @__PURE__ */ jsx("span", { className: "block text-sm mt-2 text-blue-200", children: "(So I know exactly where to help you first)" })
        ] })
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CrossMind - The AI Co-Founder That Handles Growth While You Build" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, {})} ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/Hero.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Features", Features, {})} ${renderComponent($$result2, "HowIWork", HowIWork, {})} ${renderComponent($$result2, "WhyNow", WhyNow, {})} ${renderComponent($$result2, "Waitlist", Waitlist, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/Waitlist.tsx", "client:component-export": "default" })} ` })}`;
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
