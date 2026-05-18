import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vastucart.in";

const DISALLOW_DEFAULT = ["/api/", "/design-preview/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search engines — full access except APIs and preview
      { userAgent: "Googlebot", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "Googlebot-Image", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "Googlebot-News", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "Google-InspectionTool", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "Bingbot", allow: "/", disallow: DISALLOW_DEFAULT },

      // AI assistants fetching pages for users (cite back, drive traffic).
      // Includes both OpenAI search/user agents, Anthropic citation agents,
      // Perplexity citation + user-action agent, You.com search, DuckDuckGo
      // assist, Phind, Mistral, and Common Crawl's citation variant. Tokens
      // ordered alphabetically within each provider to keep edits diff-friendly.
      { userAgent: "ChatGPT-User", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "PerplexityBot", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "Perplexity-User", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "Claude-User", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "Claude-Web", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "Claude-SearchBot", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "DuckAssistBot", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "YouBot", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "PhindBot", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "MistralAI-User", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "Meta-ExternalFetcher", allow: "/", disallow: DISALLOW_DEFAULT },

      // Google-Extended / Applebot-Extended govern whether generative-AI
      // features (Gemini app citations, AI Overview content sourcing, Apple
      // Intelligence summarization) may use site content. ALLOW because the
      // stated goal is to be CITED by AI, not to be invisible to it. The
      // training-only tokens (GPTBot, ClaudeBot, anthropic-ai, CCBot,
      // Bytespider, Amazonbot, Meta-ExternalAgent) remain blocked below.
      { userAgent: "Google-Extended", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "Applebot-Extended", allow: "/", disallow: DISALLOW_DEFAULT },

      // AI training-only crawlers — block.
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Meta-ExternalAgent", disallow: "/" },
      { userAgent: "Amazonbot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "cohere-ai", disallow: "/" },
      { userAgent: "ImagesiftBot", disallow: "/" },
      { userAgent: "Omgilibot", disallow: "/" },

      // SEO crawlers — block (free intel for competitors)
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "SemrushBot", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
      { userAgent: "DotBot", disallow: "/" },
      { userAgent: "serpstatbot", disallow: "/" },

      // Search engines you don't serve
      { userAgent: "Yandex", disallow: "/" },
      { userAgent: "Baiduspider", disallow: "/" },
      { userAgent: "PetalBot", disallow: "/" },

      // Everything else — pages allowed, APIs and preview blocked
      { userAgent: "*", allow: "/", disallow: DISALLOW_DEFAULT },
    ],
    sitemap: "https://www.vastucart.in/sitemap.xml",
  };
}
