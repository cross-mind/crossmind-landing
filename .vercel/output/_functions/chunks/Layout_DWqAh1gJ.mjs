import { c as createAstro, a as createComponent, b as renderTemplate, i as renderSlot, r as renderComponent, j as renderHead, u as unescapeHTML, d as addAttribute } from './astro/server_B_is83jh.mjs';
import 'piccolore';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://crossmind.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Your AI co-founder that automates growth tasks - social media, content marketing, user acquisition, and analytics. Focus on building your product while AI handles growth.",
    ogImage = "/og-image.png",
    ogType = "website",
    canonicalUrl = Astro2.url.href
  } = Astro2.props;
  const siteUrl = "https://crossmind.io";
  const fullOgImage = new URL(ogImage, siteUrl).href;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name" content="CrossMind"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:creator" content="@cestivan"><meta name="twitter:site" content="@cestivan"><!-- Additional SEO --><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><meta name="language" content="English"><meta name="revisit-after" content="7 days"><meta name="author" content="CrossMind"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Schema.org JSON-LD for Organization --><script type="application/ld+json">', '<\/script><!-- Schema.org JSON-LD for SoftwareApplication --><script type="application/ld+json">', "<\/script>", '</head> <body class="bg-white text-gray-900 antialiased"> ', " ", ' <footer class="bg-gray-900 text-gray-400 py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"> <!-- Brand --> <div class="flex flex-col gap-4"> <div class="flex items-center gap-2"> <svg viewBox="0 0 200 200" fill="none" width="28" height="28"> <polygon points="28,22 54,22 108,84 100,100 92,84" fill="#2D5BFF"></polygon> <polygon points="92,116 100,100 108,116 172,178 146,178" fill="#2D5BFF"></polygon> <polygon points="172,22 146,22 92,84 100,100 108,84" fill="#00D4FF"></polygon> <polygon points="108,116 100,100 92,116 28,178 54,178" fill="#00D4FF"></polygon> </svg> <span class="text-lg font-bold text-white">CrossMind</span> </div> <p class="text-sm">Your AI Co-Founder for Automated Growth</p> </div> <!-- Company --> <div> <h3 class="text-white font-semibold mb-4">Company</h3> <div class="flex flex-col gap-3 text-sm"> <a href="#what-i-do" class="hover:text-white transition">What I do</a> <a href="/blog" class="hover:text-white transition">Blog</a> <a href="/changelog" class="hover:text-white transition">Changelog</a> <a href="mailto:nova-yu@crossmind.io" class="hover:text-white transition">Contact</a> </div> </div> <!-- Resources --> <div> <h3 class="text-white font-semibold mb-4">Resources</h3> <div class="flex flex-col gap-3 text-sm"> <a href="https://ui-style-showcase.apps.crossmind.io" target="_blank" rel="noopener noreferrer" class="hover:text-white transition flex items-center gap-1">\nUI Style Showcase\n<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> </div> <!-- Social (placeholder for future) --> <div> <h3 class="text-white font-semibold mb-4">Follow</h3> <div class="flex flex-col gap-3 text-sm"> <a href="https://twitter.com/cestivan" target="_blank" rel="noopener noreferrer" class="hover:text-white transition">Twitter</a> <a href="https://linkedin.com/company/crossmind" target="_blank" rel="noopener noreferrer" class="hover:text-white transition">LinkedIn</a> </div> </div> </div> <!-- Copyright --> <div class="pt-8 border-t border-gray-800 text-center"> <p class="text-sm">&copy; 2026 CrossMind. All rights reserved.</p> </div> </div> </footer> </body></html>'])), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalUrl, "href"), addAttribute(ogType, "content"), addAttribute(canonicalUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(fullOgImage, "content"), addAttribute(canonicalUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(fullOgImage, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CrossMind",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "AI co-founder platform that automates growth tasks for startups",
    "foundingDate": "2025",
    "sameAs": [
      "https://twitter.com/cestivan",
      "https://linkedin.com/company/crossmind"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "nova-yu@crossmind.io",
      "contactType": "Customer Support"
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CrossMind",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Usage-based pricing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "1"
    },
    "description": description,
    "url": siteUrl,
    "screenshot": fullOgImage,
    "featureList": [
      "Automated social media management",
      "Content marketing automation",
      "User acquisition automation",
      "Analytics and insights",
      "24/7 autonomous execution"
    ]
  })), renderHead(), renderComponent($$result, "PostHogInit", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/components/PostHogInit", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]));
}, "/app/agents-data/nova-yu-4731f3e4/repos/crossmind-landing/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
