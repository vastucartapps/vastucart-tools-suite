'use client';

import { Link } from '@/i18n/navigation';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

/**
 * Pillar section: an H2 heading with one or more paragraphs underneath.
 *
 * Used by pillar tools (career-predictor, pitraDosh, gemstoneRecommender,
 * loshuGrid, manglik) whose `educational.sections` translation entry
 * carries 6–10 of these structured blocks. Each section is independently
 * citable by LLM chunkers and gives the page real H2 hierarchy that
 * Google's content-quality systems weight heavily for YMYL topics.
 */
export interface PillarSection {
  heading: string;
  paragraphs: string[];
}

interface EducationalSectionProps {
  title: string;
  /**
   * Legacy plain content — either a single paragraph or an array of
   * paragraphs rendered without H2 subheadings. Kept for the 27 tools
   * that don't yet have pillar-grade content.
   */
  content?: string | string[];
  /**
   * Pillar-grade structured content. When present, takes precedence over
   * `content` and renders each section with an H2 heading plus paragraphs.
   * Each section is a self-contained answer block that AI search engines
   * (ChatGPT, Perplexity, Gemini) can cite without surrounding context.
   */
  sections?: PillarSection[];
  className?: string;
  blogLink?: string;
  blogLinkText?: string;
}

export function EducationalSection({
  title,
  content,
  sections,
  className = 'mb-8',
  blogLink,
  blogLinkText = 'Read Complete Guide',
}: EducationalSectionProps) {
  const hasSections = Array.isArray(sections) && sections.length > 0;
  const paragraphs = Array.isArray(content) ? content : content ? [content] : [];

  return (
    <Card className={`bg-gradient-to-br from-deepteal-50 to-white ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

      {hasSections ? (
        <div className="prose prose-deepteal max-w-none text-gray-700 space-y-8">
          {sections!.map((section, sectionIndex) => (
            <section key={sectionIndex} aria-labelledby={`pillar-h2-${sectionIndex}`}>
              <h3
                id={`pillar-h2-${sectionIndex}`}
                className="text-xl font-semibold text-gray-900 mt-0 mb-3"
              >
                {section.heading}
              </h3>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="prose prose-deepteal max-w-none text-gray-700">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={index < paragraphs.length - 1 ? 'mb-4' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

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
