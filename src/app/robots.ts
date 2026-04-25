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

      // AI assistants fetching pages for users (cite back, drive traffic)
      { userAgent: "ChatGPT-User", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "PerplexityBot", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "Claude-User", allow: "/", disallow: DISALLOW_DEFAULT },
      { userAgent: "Claude-Web", allow: "/", disallow: DISALLOW_DEFAULT },

      // AI training crawlers — block (no benefit to you)
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "Applebot-Extended", disallow: "/" },
      { userAgent: "Meta-ExternalAgent", disallow: "/" },
      { userAgent: "Amazonbot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "cohere-ai", disallow: "/" },

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
