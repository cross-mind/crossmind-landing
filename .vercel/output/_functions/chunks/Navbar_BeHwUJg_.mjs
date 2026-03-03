import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return /* @__PURE__ */ jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-3 group", "aria-label": "CrossMind - Home", children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 200", fill: "none", width: "28", height: "28", className: "transform group-hover:scale-110 transition-transform", role: "img", "aria-label": "CrossMind logo", children: [
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
        /* @__PURE__ */ jsx("a", { href: "/features", className: "text-gray-400 hover:text-white transition-colors text-sm font-medium", children: "Features" }),
        /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-gray-400 hover:text-white transition-colors text-sm font-medium", children: "Blog" }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/#waitlist",
            className: "bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#2D5BFF]/50 transition-all transform hover:scale-105",
            children: "Join Waitlist"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "md:hidden p-2 text-white",
          onClick: () => setIsMenuOpen(!isMenuOpen),
          "aria-label": "Toggle menu",
          children: isMenuOpen ? /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) : /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
        }
      )
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden py-4 border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/features",
          className: "text-gray-400 hover:text-white transition-colors text-sm font-medium py-2",
          onClick: () => setIsMenuOpen(false),
          children: "Features"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/blog",
          className: "text-gray-400 hover:text-white transition-colors text-sm font-medium py-2",
          onClick: () => setIsMenuOpen(false),
          children: "Blog"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/#waitlist",
          className: "bg-gradient-to-r from-[#2D5BFF] to-[#00D4FF] text-white px-5 py-2 rounded-full text-sm font-semibold text-center hover:shadow-lg hover:shadow-[#2D5BFF]/50 transition-all",
          onClick: () => setIsMenuOpen(false),
          children: "Join Waitlist"
        }
      )
    ] }) })
  ] }) });
}

export { Navbar as N };
