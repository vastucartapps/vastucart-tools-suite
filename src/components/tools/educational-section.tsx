'use client';

import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface EducationalSectionProps {
  title: string;
  content: string | string[];
  className?: string;
  blogLink?: string;
  blogLinkText?: string;
}

export function EducationalSection({
  title,
  content,
  className = 'mb-8',
  blogLink,
  blogLinkText = 'Read Complete Guide',
}: EducationalSectionProps) {
  const paragraphs = Array.isArray(content) ? content : [content];

  return (
    <Card className={`bg-gradient-to-br from-deepteal-50 to-white ${className}`}>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="prose prose-deepteal max-w-none text-gray-700">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={index < paragraphs.length - 1 ? 'mb-4' : ''}>
            {paragraph}
          </p>
        ))}
      </div>
      {blogLink && (
        <Link
          href={blogLink}
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-deepteal-600 text-white font-medium rounded-lg hover:bg-deepteal-700 transition-colors group"
        >
          <BookOpen className="w-4 h-4" />
          {blogLinkText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </Card>
  );
}
