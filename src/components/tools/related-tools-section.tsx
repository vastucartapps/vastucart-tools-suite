'use client';

import { ResultCard } from './result-display';

export interface RelatedTool {
  slug: string;
  icon: string;
  name: {
    en: string;
    hi: string;
  };
}

interface RelatedToolsSectionProps {
  tools: RelatedTool[];
  locale: 'en' | 'hi';
  title?: {
    en: string;
    hi: string;
  };
  description?: {
    en: string;
    hi: string;
  };
  className?: string;
}

export function RelatedToolsSection({
  tools,
  locale,
  title = { en: 'Explore More', hi: 'और जानें' },
  description = {
    en: 'Discover more about yourself with these related tools:',
    hi: 'इन संबंधित टूल्स से अपने बारे में और जानें:',
  },
  className = 'mb-6',
}: RelatedToolsSectionProps) {
  if (!tools || tools.length === 0) {
    return null;
  }

  return (
    <ResultCard title={`🔗 ${title[locale]}`} className={className}>
      <p className="text-gray-600 mb-4 text-sm">{description[locale]}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <a
            key={tool.slug}
            href={`/${locale}/tools/${tool.slug}`}
            className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all"
          >
            {tool.icon} {tool.name[locale]}
          </a>
        ))}
      </div>
    </ResultCard>
  );
}
