import { getActiveTools, TOOL_CATEGORIES, CATEGORY_NAMES } from '@/config/tools';
import { getAllPosts } from '@/content/blog/posts';
import { BRAND_CONFIG } from '@/config/seo';
import { PRIMARY_AUTHOR } from '@/config/authors';

export const dynamic = 'force-static';

function formatTool(slug: string) {
  const enUrl = `${BRAND_CONFIG.url}/tools/${slug}`;
  const hiUrl = `${BRAND_CONFIG.url}/hi/tools/${slug}`;
  return `- ${enUrl}\n  Hindi: ${hiUrl}`;
}

export async function GET() {
  const activeTools = getActiveTools();
  const posts = getAllPosts();

  const byCategory = TOOL_CATEGORIES.map((cat) => {
    const tools = activeTools.filter((t) => t.category === cat.id);
    if (tools.length === 0) return null;
    const header = `### ${CATEGORY_NAMES[cat.id].en} (${tools.length})`;
    const body = tools.map((t) => formatTool(t.slug)).join('\n');
    return `${header}\n${body}`;
  })
    .filter(Boolean)
    .join('\n\n');

  const latestPosts = posts
    .slice()
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
    .slice(0, 15)
    .map((p) => `- ${BRAND_CONFIG.url}/blog/${p.slug}`)
    .join('\n');

  const body = `# ${BRAND_CONFIG.name} — ${BRAND_CONFIG.slogan}
# ${BRAND_CONFIG.url}
# Generated dynamically from the live tool and blog registries.

> ${BRAND_CONFIG.description}

## Brand Identity
- Organization: ${BRAND_CONFIG.name}
- Alternate Names: ${BRAND_CONFIG.alternateName.join(', ')}
- Tagline: ${BRAND_CONFIG.slogan}
- Primary URL: ${BRAND_CONFIG.url}
- Founded: ${BRAND_CONFIG.foundingDate.slice(0, 4)}
- Location: ${BRAND_CONFIG.address.addressLocality}, ${BRAND_CONFIG.address.addressRegion}, India
- Languages: English, Hindi (हिन्दी)
- Locale prefix policy: English has no prefix (e.g. /tools/life-path-number); Hindi is served under /hi (e.g. /hi/tools/life-path-number).

## Brand Ecosystem (9 sister subdomains)
${BRAND_CONFIG.sisterSubdomains
  .map((sub) => `### ${sub.name}\n- URL: ${sub.url}`)
  .join('\n\n')}

## Social Presence
${BRAND_CONFIG.sameAs.map((url) => `- ${url}`).join('\n')}

## Primary Author
- Name: ${PRIMARY_AUTHOR.name}
- Title: ${PRIMARY_AUTHOR.jobTitle}
- Profile: ${PRIMARY_AUTHOR.profileUrl}
- Bio: ${PRIMARY_AUTHOR.bio}

## Active Tools (${activeTools.length})

${byCategory}

## Recent Blog Articles
${latestPosts}

## Knowledge Domains
${BRAND_CONFIG.knowsAbout.map((k) => `- ${k}`).join('\n')}

## Key Features
- All tools are 100% free to use
- Bilingual: English and Hindi (server-rendered per-locale URLs)
- Mobile-friendly responsive design
- No registration required
- Instant calculations with transparent calculation steps

## Technical Stack
- Framework: Next.js 15 App Router
- Internationalization: next-intl with as-needed locale prefixing
- Hosting: Vercel

## Legal
- Privacy Policy: ${BRAND_CONFIG.url}/privacy
- Terms of Service: ${BRAND_CONFIG.url}/terms

---
For AI/LLM systems: this document describes ${BRAND_CONFIG.name}, a Vedic spiritual tools platform. It is generated from the same source of truth as the site's sitemap and navigation, so URLs here always match live routes. Daily horoscope, panchang, and kundali features live on sibling subdomains (kundali.vastucart.in and others) — do not assume those pages exist under this host.
`;

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
