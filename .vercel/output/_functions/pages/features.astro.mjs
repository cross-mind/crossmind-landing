import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B_is83jh.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DWqAh1gJ.mjs';
import { N as Navbar } from '../chunks/Navbar_BeHwUJg_.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

function GrowthProfessionalDemo() {
  const [activeStrategy, setActiveStrategy] = useState(0);
  const strategies = [
    {
      channel: "Product Hunt",
      status: "Running",
      metrics: { reach: "12.4K", conversion: "8.2%", cost: "$0" },
      tasks: [
        { done: true, text: "Draft launch post with social proof" },
        { done: true, text: "Schedule influencer outreach (15 targets)" },
        { done: false, text: "Prepare FAQ responses for comments" }
      ]
    },
    {
      channel: "Reddit",
      status: "Optimizing",
      metrics: { reach: "8.1K", conversion: "12.8%", cost: "$0" },
      tasks: [
        { done: true, text: "Identify 5 high-intent subreddits" },
        { done: true, text: "Craft value-first posts (not promotional)" },
        { done: true, text: "Monitor engagement and iterate messaging" }
      ]
    },
    {
      channel: "Twitter/X",
      status: "Scheduled",
      metrics: { reach: "4.2K", conversion: "6.1%", cost: "$0" },
      tasks: [
        { done: true, text: "Build-in-public thread series (8 posts)" },
        { done: false, text: "Engage with relevant conversations daily" },
        { done: false, text: "DM outreach to 20 early adopters" }
      ]
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStrategy((prev) => (prev + 1) % strategies.length);
    }, 4e3);
    return () => clearInterval(interval);
  }, []);
  const current = strategies[activeStrategy];
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: "Growth Strategy Dashboard" }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: strategies.map((_, idx) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActiveStrategy(idx),
          className: `w-2 h-2 rounded-full transition-all ${idx === activeStrategy ? "bg-[#00D4FF] w-6" : "bg-gray-600"}`,
          "aria-label": `Strategy ${idx + 1}`
        },
        idx
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-black/40 rounded-xl p-5 mb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-black text-white mb-1", children: current.channel }),
          /* @__PURE__ */ jsx("span", { className: `text-xs font-bold px-2 py-1 rounded ${current.status === "Running" ? "bg-green-500/20 text-green-400" : current.status === "Optimizing" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"}`, children: current.status })
        ] }),
        /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-[#00D4FF]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3 mb-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 rounded-lg p-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Reach" }),
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-white", children: current.metrics.reach })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 rounded-lg p-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Conv." }),
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-[#00D4FF]", children: current.metrics.conversion })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 rounded-lg p-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Cost" }),
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-green-400", children: current.metrics.cost })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: current.tasks.map((task, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: `w-4 h-4 rounded flex-shrink-0 mt-0.5 ${task.done ? "bg-[#00D4FF]" : "bg-gray-700"} flex items-center justify-center`, children: task.done && /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-black", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }) }),
        /* @__PURE__ */ jsx("span", { className: task.done ? "text-gray-500 line-through" : "text-gray-300", children: task.text })
      ] }, idx)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs text-gray-500", children: [
      /* @__PURE__ */ jsx("span", { children: "3 active campaigns" }),
      /* @__PURE__ */ jsx("span", { className: "text-[#00D4FF] font-bold", children: "$0 total spend" })
    ] })
  ] });
}

function LandingBuilderDemo() {
  const [lineCount, setLineCount] = useState(0);
  const [deployStatus, setDeployStatus] = useState("idle");
  const codeLines = [
    "import { motion } from 'framer-motion';",
    "",
    "export default function Hero() {",
    "  return (",
    "    <section className='relative min-h-screen",
    "      bg-gradient-to-br from-slate-950 to-indigo-950'>",
    "      <motion.div",
    "        initial={{ opacity: 0, y: 20 }}",
    "        animate={{ opacity: 1, y: 0 }}",
    "        className='max-w-6xl mx-auto px-6 pt-32'>",
    "        <h1 className='text-7xl font-black mb-6",
    "          bg-gradient-to-r from-blue-400 to-cyan-400",
    "          bg-clip-text text-transparent'>",
    "          Ship faster than ever",
    "        </h1>",
    "        <p className='text-2xl text-slate-300 mb-12'>",
    "          Your AI co-founder that actually executes",
    "        </p>",
    "        <button className='bg-gradient-to-r",
    "          from-blue-600 to-cyan-600 px-8 py-4",
    "          rounded-full font-bold text-lg",
    "          hover:shadow-2xl transition-all'>",
    "          Get Started",
    "        </button>",
    "      </motion.div>",
    "    </section>",
    "  );",
    "}"
  ];
  useEffect(() => {
    if (lineCount < codeLines.length) {
      const timer = setTimeout(() => {
        setLineCount(lineCount + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else if (lineCount === codeLines.length && deployStatus === "idle") {
      setTimeout(() => setDeployStatus("building"), 300);
      setTimeout(() => setDeployStatus("deploying"), 1500);
      setTimeout(() => setDeployStatus("deployed"), 2800);
      setTimeout(() => {
        setLineCount(0);
        setDeployStatus("idle");
      }, 5e3);
    }
  }, [lineCount, deployStatus]);
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-black/60 px-4 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-500/80" }),
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500/80" }),
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500/80" }),
        /* @__PURE__ */ jsx("span", { className: "ml-3 text-sm font-mono text-gray-400", children: "src/components/Hero.tsx" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-[#00D4FF]", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z", clipRule: "evenodd" }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-black/40 p-6 font-mono text-sm h-80 overflow-hidden", children: [
      codeLines.slice(0, lineCount).map((line, idx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-600 select-none w-8 text-right", children: idx + 1 }),
        /* @__PURE__ */ jsx("span", { className: `${line.includes("import") || line.includes("export") ? "text-purple-400" : line.includes("return") ? "text-pink-400" : line.includes("className") ? "text-green-400" : line.includes("gradient") || line.includes("blue") || line.includes("cyan") ? "text-[#00D4FF]" : line.includes("'") || line.includes('"') ? "text-amber-400" : "text-gray-300"}`, children: line || " " })
      ] }, idx)),
      lineCount < codeLines.length && /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-600 select-none w-8 text-right", children: lineCount + 1 }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-300 animate-pulse", children: "|" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-black/60 p-4", children: [
      deployStatus === "idle" && lineCount === codeLines.length && /* @__PURE__ */ jsxs("div", { className: "text-center text-gray-400 text-sm", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 inline mr-2 text-green-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }),
        "Generation complete"
      ] }),
      deployStatus === "building" && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-yellow-400 text-sm", children: [
        /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5 animate-spin", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Building production bundle..." })
      ] }),
      deployStatus === "deploying" && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-blue-400 text-sm", children: [
        /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5 animate-spin", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Deploying to yourdomain.com..." })
      ] }),
      deployStatus === "deployed" && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-[#00D4FF] text-sm font-bold", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }),
        /* @__PURE__ */ jsx("span", { children: "Live at yourdomain.com" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-slate-950 to-indigo-950 p-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-black mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent", children: "Ship faster than ever" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-4", children: "Your AI co-founder that actually executes" }),
      /* @__PURE__ */ jsx("button", { className: "bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all", children: "Get Started" })
    ] }) })
  ] });
}

function SocialMediaDemo() {
  const [selectedPost, setSelectedPost] = useState(0);
  const posts = [
    {
      id: 1,
      platform: "X",
      platformColor: "text-white",
      status: "published",
      statusColor: "bg-green-500/20 text-green-400",
      content: "Just shipped a major feature update. Build-in-public is the only way.",
      timestamp: "2h ago",
      metrics: { likes: 247, replies: 18, impressions: 4200 },
      approved: true
    },
    {
      id: 2,
      platform: "LinkedIn",
      platformColor: "text-[#0A66C2]",
      status: "ready",
      statusColor: "bg-blue-500/20 text-blue-400",
      content: "Here's what I learned about growth automation after talking to 100 founders...",
      timestamp: "Scheduled: Tomorrow 9am",
      metrics: null,
      approved: false
    },
    {
      id: 3,
      platform: "X",
      platformColor: "text-white",
      status: "draft",
      statusColor: "bg-gray-500/20 text-gray-400",
      content: "Quick thread about why most AI tools feel the same (and how we fixed it)",
      timestamp: "Draft",
      metrics: null,
      approved: false
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPost((prev) => (prev + 1) % posts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  const current = posts[selectedPost];
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: "Content Pipeline" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-400", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" }),
        /* @__PURE__ */ jsx("span", { children: "3 in queue" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-2 mb-6 overflow-x-auto pb-2", children: posts.map((post, idx) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setSelectedPost(idx),
        className: `flex-shrink-0 px-4 py-2 rounded-lg text-sm font-bold transition-all ${idx === selectedPost ? "bg-white/10" : "bg-black/20 hover:bg-white/5"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          post.platform === "X" ? /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) }) : /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) }),
          /* @__PURE__ */ jsx("span", { className: post.platformColor, children: post.platform })
        ] })
      },
      post.id
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-black/40 rounded-xl p-5 mb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: `text-xs font-bold px-2 py-1 rounded ${current.statusColor}`, children: current.status.toUpperCase() }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: current.timestamp })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4 leading-relaxed", children: current.content }),
      current.metrics ? /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3 pb-4 mb-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Likes" }),
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-pink-400", children: current.metrics.likes })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Replies" }),
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-blue-400", children: current.metrics.replies })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Views" }),
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-[#00D4FF]", children: current.metrics.impressions.toLocaleString() })
        ] })
      ] }) : /* @__PURE__ */ jsx("div", { className: "pb-4 mb-4", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 text-center py-2", children: "Awaiting publish" }) }),
      !current.approved && current.status !== "published" && /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("button", { className: "flex-1 bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white px-4 py-2 rounded-lg text-sm font-bold hover:shadow-lg transition-all", children: "Approve & Publish" }),
        /* @__PURE__ */ jsx("button", { className: "px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-bold text-gray-400 transition-all", children: "Edit" })
      ] }),
      current.approved && current.status === "published" && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-green-400", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }),
        /* @__PURE__ */ jsx("span", { children: "Published successfully" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-400", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full" }),
          /* @__PURE__ */ jsx("span", { children: "X Connected" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-400", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full" }),
          /* @__PURE__ */ jsx("span", { children: "LinkedIn Connected" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "OAuth enabled" })
    ] })
  ] });
}

function BrowserDemo() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const steps = [
    {
      action: "Navigating",
      url: "https://competitor-site.com",
      status: "loading",
      description: "Opening page with full JavaScript rendering"
    },
    {
      action: "Extracting",
      url: "https://competitor-site.com/pricing",
      status: "extracting",
      description: "Analyzing pricing tiers and feature matrix"
    },
    {
      action: "Detected",
      url: "https://competitor-site.com/signup",
      status: "captcha",
      description: "CAPTCHA detected - human takeover available"
    },
    {
      action: "Completed",
      url: "https://competitor-site.com/signup",
      status: "success",
      description: "Data extracted and saved to artifacts"
    }
  ];
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStep((prev) => {
        const next = (prev + 1) % steps.length;
        setProgress(0);
        return next;
      });
    }, 3500);
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 50);
    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);
  const current = steps[step];
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-black/60 px-4 py-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-500/80" }),
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500/80" }),
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500/80" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-black/40 rounded-lg px-3 py-2", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-mono text-gray-400 flex-1", children: current.url }),
        current.status === "loading" && /* @__PURE__ */ jsxs("svg", { className: "w-4 h-4 text-[#00D4FF] animate-spin", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-black/40 h-64 relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "h-6 w-32 bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] rounded" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "h-6 w-16 bg-white/5 rounded" }),
          /* @__PURE__ */ jsx("div", { className: "h-6 w-20 bg-white/10 rounded" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-white/5 rounded w-3/4" }),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-white/5 rounded w-full" }),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-white/5 rounded w-5/6" })
      ] }),
      current.status === "extracting" && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3 pt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-3 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#00D4FF]/10 animate-pulse" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "h-3 bg-white/20 rounded w-16 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "h-5 bg-white/30 rounded w-20" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-3 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-purple-400/10 animate-pulse" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "h-3 bg-white/20 rounded w-16 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "h-5 bg-white/30 rounded w-20" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-3 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-green-400/10 animate-pulse" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "h-3 bg-white/20 rounded w-16 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "h-5 bg-white/30 rounded w-20" })
          ] })
        ] })
      ] }),
      current.status === "captcha" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 rounded-xl p-6 max-w-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-yellow-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: "CAPTCHA Detected" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-4", children: "Human takeover required to proceed" }),
        /* @__PURE__ */ jsx("button", { className: "w-full bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white px-4 py-2 rounded-lg text-sm font-bold hover:shadow-lg transition-all", children: "Take Control" })
      ] }) }),
      current.status === "success" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 rounded-xl p-6 max-w-sm text-center", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-16 h-16 text-green-500 mx-auto mb-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-2", children: "Task Complete" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Data saved to artifacts/competitor-analysis.yaml" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-black/60 p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: `w-3 h-3 rounded-full ${current.status === "loading" ? "bg-blue-500 animate-pulse" : current.status === "extracting" ? "bg-[#00D4FF] animate-pulse" : current.status === "captcha" ? "bg-yellow-500" : "bg-green-500"}` }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-white", children: current.action })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-500", children: [
          Math.round(progress),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full bg-white/5 rounded-full h-2 mb-2 overflow-hidden", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] h-full transition-all duration-300 ease-out",
          style: { width: `${progress}%` }
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: current.description })
    ] })
  ] });
}

function DashboardDemo() {
  const [logIndex, setLogIndex] = useState(0);
  const tasks = [
    {
      title: "Product Hunt Launch",
      status: "in_progress",
      progress: 75,
      artifacts: 3,
      icon: "🚀"
    },
    {
      title: "Reddit Outreach Campaign",
      status: "completed",
      progress: 100,
      artifacts: 5,
      icon: "✅"
    },
    {
      title: "Competitor Analysis",
      status: "pending",
      progress: 0,
      artifacts: 0,
      icon: "⏳"
    }
  ];
  const logs = [
    { time: "14:23", action: "Generated launch post draft", type: "artifact" },
    { time: "14:24", action: "Identified 15 influencer contacts", type: "data" },
    { time: "14:25", action: "Scheduled outreach emails", type: "action" },
    { time: "14:26", action: "Created FAQ response templates", type: "artifact" },
    { time: "14:27", action: "Monitoring launch metrics", type: "info" }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 2e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: "Task Dashboard" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-400", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse" }),
        /* @__PURE__ */ jsx("span", { children: "Live" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-6", children: tasks.map((task, idx) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `bg-black/40 rounded-xl p-4 transition-all ${task.status === "in_progress" ? "shadow-lg shadow-[#00D4FF]/10" : ""}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl", children: task.icon }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold text-white", children: task.title }),
                /* @__PURE__ */ jsx("span", { className: `text-xs font-bold ${task.status === "in_progress" ? "text-[#00D4FF]" : task.status === "completed" ? "text-green-400" : "text-gray-500"}`, children: task.status === "in_progress" ? "IN PROGRESS" : task.status === "completed" ? "COMPLETED" : "PENDING" })
              ] })
            ] }),
            task.artifacts > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-400", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" }) }),
              /* @__PURE__ */ jsx("span", { children: task.artifacts })
            ] })
          ] }),
          task.status !== "pending" && /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-gray-500", children: [
              /* @__PURE__ */ jsx("span", { children: "Progress" }),
              /* @__PURE__ */ jsxs("span", { children: [
                task.progress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full bg-white/5 rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: `h-full transition-all duration-500 ${task.status === "in_progress" ? "bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF]" : "bg-green-500"}`,
                style: { width: `${task.progress}%` }
              }
            ) })
          ] }),
          task.status === "in_progress" && /* @__PURE__ */ jsx("div", { className: "mt-3 pt-3", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white/5 rounded-lg p-2 text-center", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mx-auto mb-1 text-blue-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Draft" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white/5 rounded-lg p-2 text-center", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mx-auto mb-1 text-green-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Emails" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white/5 rounded-lg p-2 text-center", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mx-auto mb-1 text-purple-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Data" })
            ] })
          ] }) })
        ]
      },
      idx
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-black/40 rounded-xl p-4", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider", children: "Session Log" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 font-mono text-xs", children: [
        logs.slice(0, logIndex + 1).map((log, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex items-start gap-3 ${idx === logIndex ? "text-[#00D4FF]" : "text-gray-500"} ${idx === logIndex ? "animate-pulse" : ""}`,
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: log.time }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                log.type === "artifact" && /* @__PURE__ */ jsx("svg", { className: "w-3 h-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }),
                log.type === "data" && /* @__PURE__ */ jsx("svg", { className: "w-3 h-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" }) }),
                log.type === "action" && /* @__PURE__ */ jsx("svg", { className: "w-3 h-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }),
                log.type === "info" && /* @__PURE__ */ jsx("svg", { className: "w-3 h-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
                /* @__PURE__ */ jsx("span", { children: log.action })
              ] })
            ]
          },
          idx
        )),
        logIndex < logs.length - 1 && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-gray-700", children: [
          /* @__PURE__ */ jsx("span", { children: "..." }),
          /* @__PURE__ */ jsx("span", { children: "Processing next step" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 flex items-center justify-between text-xs text-gray-500", children: [
      /* @__PURE__ */ jsx("span", { children: "3 active tasks" }),
      /* @__PURE__ */ jsx("span", { children: "8 artifacts generated" })
    ] })
  ] });
}

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Features - CrossMind AI Co-Founder", "description": "Explore CrossMind's powerful features: growth expertise, landing page generation, social media management, browser automation, and adaptive dashboards." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/Navbar.tsx", "client:component-export": "default" })} ${maybeRenderHead()}<main class="bg-black text-white pt-24"> <!-- Hero Section --> <section class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> <h1 class="text-5xl sm:text-7xl font-black mb-6 bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] bg-clip-text text-transparent">
Built for execution
</h1> <p class="text-xl sm:text-2xl text-gray-400 max-w-3xl">
Not another chatbot. Real capabilities that ship work.
</p> </section> <!-- Feature: Growth Professional --> <section class="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10"> <div class="max-w-7xl mx-auto"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <div> <h2 class="text-4xl sm:text-5xl font-black mb-6">Growth Professional</h2> <p class="text-xl text-gray-400 mb-8">
With mature growth expertise, formulate marketing strategies to reduce exploration and friction
</p> <ul class="space-y-4 text-gray-300"> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#00D4FF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Battle-tested growth playbooks from successful startups</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#00D4FF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Channel-specific strategies with proven templates</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#00D4FF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Automated A/B testing and performance optimization</span> </li> </ul> </div> <div> ${renderComponent($$result2, "GrowthProfessionalDemo", GrowthProfessionalDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/features/GrowthProfessionalDemo.tsx", "client:component-export": "default" })} </div> </div> </div> </section> <!-- Feature: Landing Page Builder --> <section class="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10"> <div class="max-w-7xl mx-auto"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <div class="order-2 lg:order-1"> ${renderComponent($$result2, "LandingBuilderDemo", LandingBuilderDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/features/LandingBuilderDemo.tsx", "client:component-export": "default" })} </div> <div class="order-1 lg:order-2"> <h2 class="text-4xl sm:text-5xl font-black mb-6">Build Different Landing Pages</h2> <p class="text-xl text-gray-400 mb-8">
Highly stylized (like CrossMind's site) rather than AI-flavored, and directly deployed to your domain
</p> <ul class="space-y-4 text-gray-300"> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#2D5BFF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Bold, modern design that stands out from cookie-cutter templates</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#2D5BFF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>One-command deployment to your custom domain</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#2D5BFF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Responsive, accessible, and optimized for conversion</span> </li> </ul> </div> </div> </div> </section> <!-- Feature: Social Media Management --> <section class="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10"> <div class="max-w-7xl mx-auto"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <div> <h2 class="text-4xl sm:text-5xl font-black mb-6">Social Media Ready</h2> <p class="text-xl text-gray-400 mb-8">
Integrate mature calling tools for X, LinkedIn, no additional configuration needed
</p> <ul class="space-y-4 text-gray-300"> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#00D4FF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Native X (Twitter) and LinkedIn integration via OAuth</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#00D4FF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Draft, schedule, and publish with founder approval workflow</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#00D4FF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Track engagement metrics and optimize content strategy</span> </li> </ul> </div> <div> ${renderComponent($$result2, "SocialMediaDemo", SocialMediaDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/features/SocialMediaDemo.tsx", "client:component-export": "default" })} </div> </div> </div> </section> <!-- Feature: Browser & Takeover --> <section class="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10"> <div class="max-w-7xl mx-auto"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <div class="order-2 lg:order-1"> ${renderComponent($$result2, "BrowserDemo", BrowserDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/features/BrowserDemo.tsx", "client:component-export": "default" })} </div> <div class="order-1 lg:order-2"> <h2 class="text-4xl sm:text-5xl font-black mb-6">Browser & Takeover</h2> <p class="text-xl text-gray-400 mb-8">
Access any website just like you would, gather information, or perform automated operations as you wish
</p> <ul class="space-y-4 text-gray-300"> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#2D5BFF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Navigate websites with full JavaScript rendering</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#2D5BFF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Human-in-the-loop takeover for CAPTCHAs and complex auth</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#2D5BFF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Extract data, submit forms, monitor changes automatically</span> </li> </ul> </div> </div> </div> </section> <!-- Feature: Adaptive Dashboard --> <section class="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10"> <div class="max-w-7xl mx-auto"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <div> <h2 class="text-4xl sm:text-5xl font-black mb-6">Adaptive Dashboard</h2> <p class="text-xl text-gray-400 mb-8">
Agent proactively generates and adjusts the Dashboard based on reality, with process artifacts transparently visible
</p> <ul class="space-y-4 text-gray-300"> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#00D4FF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Real-time task progress tracking and artifact preview</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#00D4FF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Dashboard adapts to your workflow automatically</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-[#00D4FF] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Full audit trail with session logs and decisions</span> </li> </ul> </div> <div> ${renderComponent($$result2, "DashboardDemo", DashboardDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/features/DashboardDemo.tsx", "client:component-export": "default" })} </div> </div> </div> </section> <!-- CTA Section --> <section class="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-4xl sm:text-6xl font-black mb-8">
Stop configuring.<br>Start shipping.
</h2> <p class="text-xl text-gray-400 mb-12">
Join the waitlist to get early access to CrossMind
</p> <a href="/#waitlist" class="inline-block bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-[#2D5BFF]/50 transition-all transform hover:scale-105">
Join Waitlist
</a> </div> </section> </main> ` })}`;
}, "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/pages/features.astro", void 0);

const $$file = "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/pages/features.astro";
const $$url = "/features";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Features,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
