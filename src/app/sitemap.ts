import { MetadataRoute } from 'next';
import { getActiveTools } from '@/config/tools';
import { getAllPosts } from '@/content/blog/posts';

const BASE_URL = 'https://www.vastucart.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = getActiveTools();
  const posts = getAllPosts();

  // Helper: create en + hi URL pair with hreflang alternates
  function pair(
    path: string,
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly',
    priority: number,
    lastModified?: Date,
  ): MetadataRoute.Sitemap {
    const enUrl = path ? `${BASE_URL}${path}` : BASE_URL;
    const hiUrl = `${BASE_URL}/hi${path}`;
    const alternates = { languages: { en: enUrl, hi: hiUrl, 'x-default': enUrl } };
    return [
      { url: enUrl, changeFrequency, priority, lastModified, alternates },
      { url: hiUrl, changeFrequency, priority, lastModified, alternates },
    ];
  }

  return [
    ...pair('', 'daily', 1.0),
    ...pair('/tools', 'daily', 1.0),
    ...tools.flatMap((tool) => pair(`/tools/${tool.slug}`, 'monthly', 0.9)),
    ...pair('/blog', 'daily', 0.8),
    ...posts.flatMap((post) =>
      pair(`/blog/${post.slug}`, 'monthly', 0.7, new Date(post.updatedAt))
    ),
    ...['about', 'privacy', 'terms'].flatMap((page) =>
      pair(`/${page}`, 'monthly', 0.3)
    ),
  ];
}
