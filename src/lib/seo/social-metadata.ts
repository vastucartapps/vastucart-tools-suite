import type { Metadata } from 'next';

export const SITE_URL = 'https://www.vastucart.in';
export const SITE_NAME = 'VastuCart';
export const TWITTER_HANDLE = '@vastucart';
export const OG_IMAGE_DEFAULT = 'https://www.vastucart.in/og-default.png';

export type SocialLocale = 'en' | 'hi';

interface ArticleMeta {
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
}

interface SocialMetadataInput {
  title: string;
  description: string;
  /** Absolute or root-relative path of THIS page (locale-prefixed if hi). */
  url: string;
  locale: string;
  imageUrl?: string;
  type?: 'website' | 'article';
  article?: ArticleMeta;
}

// Returns a complete Open Graph + Twitter Card block. Pages should spread
// this into their generateMetadata return value so every page emits the
// 4 required OG fields (title, description, url, image) and the 6 Twitter
// fields (card, site, creator, title, description, image). Without this,
// pages were emitting 3-tag Twitter cards that fail x.com unfurling.
export function buildSocialMetadata({
  title,
  description,
  url,
  locale,
  imageUrl = OG_IMAGE_DEFAULT,
  type = 'website',
  article,
}: SocialMetadataInput): Pick<Metadata, 'openGraph' | 'twitter'> {
  const ogLocale = locale === 'hi' ? 'hi_IN' : 'en_US';
  const alternateLocale = locale === 'hi' ? 'en_US' : 'hi_IN';
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: ogLocale,
      alternateLocale,
      type,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      ...(type === 'article' && article
        ? {
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime,
            authors: article.authors,
            section: article.section,
            tags: article.tags,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
      images: [imageUrl],
    },
  };
}

/**
 * Build the absolute canonical/og:url for a given locale + path.
 * Pass `path` as a root-relative English path (e.g., "/blog/foo"); the
 * helper handles the /hi/ prefix for the Hindi locale.
 *
 * Homepage is the only special case: returns the bare locale root.
 */
export function pageUrl(locale: SocialLocale | string, path: string): string {
  const isEN = locale !== 'hi';
  const normalized = path && !path.startsWith('/') ? `/${path}` : path;
  if (!normalized || normalized === '/') {
    return isEN ? SITE_URL : `${SITE_URL}/hi`;
  }
  return isEN ? `${SITE_URL}${normalized}` : `${SITE_URL}/hi${normalized}`;
}

/**
 * Title cascade: returns the first candidate ≤ maxLen characters.
 * If all candidates exceed maxLen, truncates the shortest at the previous
 * word boundary and appends a single-character ellipsis.
 *
 * Use this in generateMetadata to enforce a 70-char SERP cap without
 * silently sacrificing the most keyword-rich candidate.
 *
 * Length counts visible characters (Devanagari / CJK count as 1 each via
 * String.prototype.length on the decoded string, NOT byte length).
 */
export function pickTitle(candidates: Array<string | null | undefined>, maxLen = 70): string {
  for (const c of candidates) {
    if (typeof c === 'string' && c.length > 0 && c.length <= maxLen) return c;
  }
  // Fallback: take the shortest non-empty candidate and truncate.
  const nonEmpty = candidates.filter((x): x is string => typeof x === 'string' && x.length > 0);
  if (nonEmpty.length === 0) return SITE_NAME;
  const shortest = nonEmpty.reduce((a, b) => (a.length <= b.length ? a : b));
  if (shortest.length <= maxLen) return shortest;
  const cut = shortest.slice(0, maxLen - 1).replace(/\s+\S*$/, '').trim();
  return cut + '…';
}

/**
 * Clamp a description to a maximum length, trimming on a word boundary
 * and appending an ellipsis when truncation occurs. Aims for SERP
 * comfort range 80–170 chars.
 */
export function clampDescription(text: string, maxLen = 160): string {
  if (!text) return '';
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen - 1).replace(/\s+\S*$/, '').trim();
  return cut + '…';
}
