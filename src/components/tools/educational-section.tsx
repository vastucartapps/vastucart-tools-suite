'use client';

import { Card } from '@/components/ui/card';

interface EducationalSectionProps {
  title: string;
  content: string | string[];
  className?: string;
}

export function EducationalSection({
  title,
  content,
  className = 'mb-8',
}: EducationalSectionProps) {
  const paragraphs = Array.isArray(content) ? content : [content];

  return (
    <Card className={`bg-gradient-to-br from-teal-50 to-white ${className}`}>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="prose prose-teal max-w-none text-gray-700">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={index < paragraphs.length - 1 ? 'mb-4' : ''}>
            {paragraph}
          </p>
        ))}
      </div>
    </Card>
  );
}
