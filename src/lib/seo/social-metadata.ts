import type { Metadata } from 'next';

const OG_IMAGE_DEFAULT = 'https://www.vastucart.in/og-default.png';
const TWITTER_HANDLE = '@vastucart';

interface SocialMetadataInput {
  title: string;
  description: string;
  url: string;
  locale: string;
  imageUrl?: string;
  type?: 'website' | 'article';
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
}: SocialMetadataInput): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: 'VastuCart',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      type,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
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
