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
      /* @__PURE__ */ jsx("a", { href: "#how-it-works", className: "text-gray-400 hover:text-white transition-colors text-sm font-medium", children: "How it works" }),
      /* @__PURE__ */ jsx("a", { href: "#pricing", className: "text-gray-400 hover:text-white transition-colors text-sm font-medium", children: "Pricing" }),
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
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl sm:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight", children: [
        "I know you built",
        /* @__PURE__ */ jsx("br", {}),
        "something",
        " ",
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#2D5BFF] via-[#00D4FF] to-[#2D5BFF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient", children: "great" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl sm:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto font-light leading-relaxed", children: "And you're really good at it." }),
      /* @__PURE__ */ jsxs("p", { className: "text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed", children: [
        "But growing your product? There are always things you're not used to doing.",
        /* @__PURE__ */ jsx("span", { className: "block mt-4 text-white font-medium text-2xl sm:text-3xl", children: "Let me handle growth while you build." })
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
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-1", children: "20hrs" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Growth work I handle weekly" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent mb-1", children: "60%" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "More time for building" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-1", children: "2wks" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "To learn your workflow" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" })
  ] });
}

const scenarios = [
  {
    label: "01",
    title: "Build in Public Without the Grind",
    hook: "It's Tuesday 9am.",
    story: [
      "I've already pulled your latest commits, matched your voice, and queued 3 posts for review.",
      "You shipped email verification Friday—by Monday I've turned it into a tweet thread with metrics from beta feedback."
    ],
    highlight: "Content on autopilot, in your voice"
  },
  {
    label: "02",
    title: "Competitor Research That Stays Current",
    hook: "Your competitor dropped their Team plan from $99→$79 yesterday.",
    story: [
      "I noticed.",
      "I've drafted a comparison update for your docs and flagged 3 positioning opportunities you can use this week."
    ],
    highlight: "Market intelligence, delivered"
  },
  {
    label: "03",
    title: "User Feedback That Doesn't Pile Up",
    hook: "8 interview requests in your inbox from last month.",
    story: [
      "I booked 5 for next week (filtered out tire-kickers), prepared questions based on your roadmap.",
      'When a user mentions "export is clunky" 3 times, I create a feature request linked to 4 similar complaints, calculate it affects 23% of power users, move it to Next Sprint.'
    ],
    highlight: "From feedback to roadmap, automatically"
  },
  {
    label: "04",
    title: "The Docs You Keep Postponing",
    hook: "Your Privacy Policy doesn't mention new EU users.",
    story: [
      "I've drafted GDPR-compliant updates, flagged 3 sections you need to review (data retention), formatted for /legal.",
      "You added Stripe? I updated Section 4, added it to processors list, created changelog so users know what changed."
    ],
    highlight: "Compliance handled, users informed"
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
      /* @__PURE__ */ jsx("div", { className: "space-y-32", children: scenarios.map((scenario, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: index % 2 === 1 ? "lg:col-start-2" : "", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "text-6xl font-black text-gray-900", children: scenario.label }),
                /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-4xl sm:text-5xl font-black text-white mb-8 leading-tight", children: scenario.title }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx("div", { className: "p-6 rounded-2xl bg-gradient-to-br from-[#2D5BFF]/20 to-[#00D4FF]/10 border border-[#00D4FF]/30", children: /* @__PURE__ */ jsx("p", { className: "text-xl text-white font-medium leading-relaxed", children: scenario.hook }) }),
                scenario.story.map((line, i) => /* @__PURE__ */ jsx("div", { className: "pl-6 border-l-2 border-gray-800", children: /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-300 leading-relaxed", children: line }) }, i))
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-[#00D4FF] shadow-lg shadow-[#00D4FF]/50" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-gray-400 uppercase tracking-wide", children: scenario.highlight })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: `${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} flex items-center justify-center`, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[20rem] sm:text-[25rem] font-black leading-none opacity-5 bg-gradient-to-br from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent select-none", children: scenario.label }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#2D5BFF]/20 to-[#00D4FF]/20 blur-3xl" })
            ] }) })
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
      /* @__PURE__ */ jsxs("h2", { className: "text-7xl sm:text-9xl font-black text-white mb-32 leading-[0.85] tracking-tighter", children: [
        "I'm not a tool.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent", children: "I learn." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-40", children: [
        /* @__PURE__ */ jsx("p", { className: "text-2xl text-gray-400 mb-16 max-w-2xl", children: "Your time is the most valuable asset. Here's how I optimize it:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "text-6xl font-black text-gray-800", children: "Before" }),
              /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2/5 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center px-6", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: "Building product" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-3xl font-black text-gray-600", children: "40%" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2/5 h-16 bg-gradient-to-r from-red-900/50 to-red-800/50 rounded-lg flex items-center px-6 border border-red-500/30", children: /* @__PURE__ */ jsx("span", { className: "text-red-300 font-bold", children: "Growth grunt work" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-3xl font-black text-red-400", children: "40%" }),
                /* @__PURE__ */ jsx("span", { className: "text-red-400 text-sm", children: "← Time drain" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-1/5 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center px-6", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: "Thinking" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-3xl font-black text-gray-600", children: "20%" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "text-6xl font-black bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent", children: "With me" }),
              /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gradient-to-r from-[#00D4FF] to-transparent" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-3/5 h-20 bg-gradient-to-r from-[#2D5BFF] to-[#2D5BFF]/80 rounded-lg flex items-center px-6 shadow-2xl shadow-[#2D5BFF]/30", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-lg", children: "Building product" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-4xl font-black text-white", children: "60%" }),
                /* @__PURE__ */ jsx("span", { className: "text-[#00D4FF] text-sm font-bold", children: "+50% more" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-1/12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center opacity-50", children: /* @__PURE__ */ jsx("span", { className: "text-gray-500 font-bold text-xs", children: "Growth" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-2xl font-black text-gray-500", children: "10%" }),
                /* @__PURE__ */ jsx("span", { className: "text-[#00D4FF] text-sm font-bold", children: "← I handle this" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-1/3 h-20 bg-gradient-to-r from-[#00D4FF] to-[#00D4FF]/80 rounded-lg flex items-center px-6 shadow-2xl shadow-[#00D4FF]/30", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-lg", children: "Strategic thinking" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-4xl font-black text-white", children: "30%" }),
                /* @__PURE__ */ jsx("span", { className: "text-[#00D4FF] text-sm font-bold", children: "+50% more" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-20 items-start", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-5xl font-black text-white mb-8 leading-tight", children: "How I evolve with you" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 leading-relaxed", children: "I'm not following a script. I'm learning your workflow, your voice, your priorities. Every interaction makes me sharper." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative pl-8 border-l-2 border-gray-800", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -left-3 top-0 w-5 h-5 rounded-full bg-gray-700 border-4 border-black" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-gray-600 mb-2", children: "WEEK 1" }),
            /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-white mb-2", children: "Like a junior hire" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "I use best practices from successful indie products. Solid baseline, no personalization yet." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative pl-8 border-l-2 border-[#2D5BFF]/30", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -left-3 top-0 w-5 h-5 rounded-full bg-[#2D5BFF] border-4 border-black" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-[#2D5BFF] mb-2", children: "WEEK 4" }),
            /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-white mb-2", children: "Like a teammate" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "You edited my competitor analysis to focus on UI? Noted. You prefer data-driven posts? I adjust the content mix automatically." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative pl-8 border-l-2 border-[#00D4FF]/50", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -left-3 top-0 w-5 h-5 rounded-full bg-[#00D4FF] border-4 border-black shadow-lg shadow-[#00D4FF]/50" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-[#00D4FF] mb-2", children: "WEEK 12" }),
            /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-white mb-2", children: "Like a co-founder" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "I proactively spot opportunities you'd miss. I know what you'd say yes to before you see it. We're in sync." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-40 max-w-4xl", children: /* @__PURE__ */ jsxs("div", { className: "p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-4xl font-black text-white mb-6", children: "I'm transparent, not a black box" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 leading-relaxed mb-6", children: "Check your dashboard any time: what I'm working on, what I've shipped, what I learned." }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 leading-relaxed", children: `Set boundaries—tell me "never auto-publish" or "always ask before emailing users." I'll remember.` })
      ] }) })
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
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-32", children: [
        /* @__PURE__ */ jsx("p", { className: "text-2xl sm:text-3xl text-gray-400 mb-8 font-light", children: "The game changed." }),
        /* @__PURE__ */ jsxs("h2", { className: "text-7xl sm:text-9xl font-black text-white mb-12 leading-[0.85] tracking-tighter max-w-5xl mx-auto", children: [
          "I'm here to make sure you can",
          " ",
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#2D5BFF] via-[#00D4FF] to-[#2D5BFF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient", children: "play it" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 lg:gap-32", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-red-900/10 to-transparent rounded-3xl" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-red-500/50 uppercase tracking-widest", children: "Old Era" }),
              /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-red-500/20" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-5xl font-black text-gray-700 mb-8 line-through decoration-red-500/30 decoration-4", children: "Bigger team wins" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 mt-3 rounded-full bg-gray-700 flex-shrink-0" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 line-through decoration-gray-700", children: "More engineers = more features" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 mt-3 rounded-full bg-gray-700 flex-shrink-0" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 line-through decoration-gray-700", children: "More funding = longer runway" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 mt-3 rounded-full bg-gray-700 flex-shrink-0" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 line-through decoration-gray-700", children: "Execution is scarce resource" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-12 p-6 rounded-2xl bg-red-950/20 border border-red-900/30", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500 italic", children: '"We need to hire 3 more people to handle growth..."' }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-[#2D5BFF]/20 via-[#00D4FF]/10 to-transparent rounded-3xl" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-[#00D4FF] uppercase tracking-widest", children: "New Era" }),
              /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gradient-to-r from-[#00D4FF] to-transparent" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-5xl font-black bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent mb-8", children: "Faster iteration wins" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 mt-3 rounded-full bg-[#2D5BFF] flex-shrink-0 shadow-lg shadow-[#2D5BFF]/50" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-white font-medium", children: "AI makes execution nearly infinite" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 mt-3 rounded-full bg-[#00D4FF] flex-shrink-0 shadow-lg shadow-[#00D4FF]/50" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-white font-medium", children: "Better feedback loops = better product-market fit" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 mt-3 rounded-full bg-[#2D5BFF] flex-shrink-0 shadow-lg shadow-[#2D5BFF]/50" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-white font-medium", children: "Your unique vision is the bottleneck" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-12 p-6 rounded-2xl bg-gradient-to-br from-[#2D5BFF]/10 to-[#00D4FF]/10 border border-[#00D4FF]/30 backdrop-blur-sm", children: /* @__PURE__ */ jsx("p", { className: "text-[#00D4FF] font-medium", children: '"I shipped 3 experiments this week and learned what users actually want."' }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-32 max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-3xl sm:text-4xl text-white font-light leading-relaxed mb-6", children: [
          "Your bottleneck isn't",
          " ",
          /* @__PURE__ */ jsx("span", { className: "line-through decoration-gray-700 text-gray-600", children: '"can I build it"' })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent leading-relaxed", children: `It's "can I learn fast enough from users"` }),
        /* @__PURE__ */ jsx("div", { className: "mt-16 p-12 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10", children: /* @__PURE__ */ jsxs("p", { className: "text-2xl text-gray-300 leading-relaxed", children: [
          "I remove the friction between shipping and learning.",
          /* @__PURE__ */ jsx("span", { className: "block mt-4 text-white font-medium", children: "You build, I handle the growth loop." }),
          /* @__PURE__ */ jsx("span", { className: "block mt-4 text-white font-bold text-3xl", children: "Together we iterate faster than teams 10x your size." })
        ] }) })
      ] })
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CrossMind - The AI Co-Founder That Handles Growth While You Build" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, {})} ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/Hero.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Features", Features, {})} ${renderComponent($$result2, "HowIWork", HowIWork, {})} ${renderComponent($$result2, "WhyNow", WhyNow, {})} ${renderComponent($$result2, "Pricing", Pricing, {})} ${renderComponent($$result2, "Waitlist", Waitlist, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/Waitlist.tsx", "client:component-export": "default" })} ` })}`;
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
