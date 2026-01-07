'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Clock, Calendar, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';
import type { BlogPost } from '@/content/blog/posts';
import { JsonLd } from '@/components/seo/json-ld';

// Table of Contents Component
interface TOCProps {
  items: BlogPost['tableOfContents'];
}

function TableOfContents({ items }: TOCProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <nav className="bg-gradient-to-br from-cream-50 to-cream-100 border border-deepteal-200 rounded-2xl p-6 mb-8 shadow-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left"
      >
        <h2 className="text-lg font-bold text-deepteal-800 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-warmaccent-500" />
          Table of Contents
        </h2>
        <ChevronDown
          className={`w-5 h-5 text-deepteal-600 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[500px] mt-4' : 'max-h-0'
        }`}
      >
        <ul className="space-y-2">
          {items.map((item, index) => {
            // Count only level 2 items for proper numbering
            const mainItemIndex = items
              .slice(0, index + 1)
              .filter(i => i.level === 2).length;

            return (
              <li
                key={item.id}
                className={`${item.level === 3 ? 'ml-6' : ''}`}
              >
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-2 text-deepteal-700 hover:text-warmaccent-600 transition-colors duration-200 group"
                >
                  {item.level === 2 ? (
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-deepteal-100 text-deepteal-700 text-xs font-semibold group-hover:bg-warmaccent-100 group-hover:text-warmaccent-700 transition-colors">
                      {mainItemIndex}
                    </span>
                  ) : (
                    <span className="w-4 h-4 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600 text-xs group-hover:bg-warmaccent-200 transition-colors">
                      •
                    </span>
                  )}
                  <span className="text-sm font-medium">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

// FAQ Accordion Component
interface FAQProps {
  faqs: BlogPost['faqs'];
}

function FAQSection({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // JSON-LD structured data for FAQs
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="my-12">
      <JsonLd data={faqSchema} />

      <div className="bg-gradient-to-br from-warmaccent-50 to-amber-50 rounded-2xl p-6 border border-warmaccent-200">
        <h2 className="text-2xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-500 text-white">
            ?
          </span>
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-warmaccent-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-cream-50 transition-colors"
              >
                <span className="font-semibold text-deepteal-800 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-warmaccent-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-4 text-gray-700 leading-relaxed border-t border-warmaccent-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Info Card Component
interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'deepteal' | 'warmaccent' | 'amber' | 'highlight';
  icon?: React.ReactNode;
}

export function InfoCard({ title, children, variant = 'deepteal', icon }: InfoCardProps) {
  const variants = {
    deepteal: 'bg-gradient-to-br from-deepteal-50 to-deepteal-100 border-deepteal-300 text-deepteal-800',
    warmaccent: 'bg-gradient-to-br from-warmaccent-50 to-orange-100 border-warmaccent-300 text-warmaccent-800',
    amber: 'bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-300 text-amber-800',
    highlight: 'bg-gradient-to-br from-cream-50 to-cream-100 border-warmaccent-400 text-deepteal-800',
  };

  return (
    <div className={`rounded-xl border-l-4 p-5 my-6 ${variants[variant]}`}>
      {title && (
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          {icon}
          {title}
        </h3>
      )}
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

// Highlight Box Component
interface HighlightBoxProps {
  children: React.ReactNode;
  type?: 'tip' | 'important' | 'note' | 'warning';
}

export function HighlightBox({ children, type = 'tip' }: HighlightBoxProps) {
  const styles = {
    tip: {
      bg: 'bg-deepteal-50',
      border: 'border-deepteal-500',
      icon: '💡',
      title: 'Pro Tip',
    },
    important: {
      bg: 'bg-warmaccent-50',
      border: 'border-warmaccent-500',
      icon: '⭐',
      title: 'Important',
    },
    note: {
      bg: 'bg-amber-50',
      border: 'border-amber-500',
      icon: '📝',
      title: 'Note',
    },
    warning: {
      bg: 'bg-red-50',
      border: 'border-red-500',
      icon: '⚠️',
      title: 'Warning',
    },
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} border-l-4 ${style.border} rounded-r-xl p-4 my-6`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl">{style.icon}</span>
        <div>
          <span className="font-bold text-gray-800 block mb-1">{style.title}</span>
          <div className="text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
}

// Feature List Component
interface FeatureListProps {
  items: string[];
  variant?: 'check' | 'star' | 'arrow' | 'number';
}

export function FeatureList({ items, variant = 'check' }: FeatureListProps) {
  const icons = {
    check: '✓',
    star: '★',
    arrow: '→',
    number: '',
  };

  return (
    <ul className="space-y-3 my-6">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-deepteal-100 text-deepteal-700 text-sm font-bold flex-shrink-0 mt-0.5">
            {variant === 'number' ? index + 1 : icons[variant]}
          </span>
          <span className="text-gray-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Section Divider Component
export function SectionDivider() {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="h-px bg-gradient-to-r from-transparent via-deepteal-300 to-transparent w-full max-w-md" />
      <div className="mx-4 flex gap-1">
        <span className="w-2 h-2 rounded-full bg-warmaccent-400" />
        <span className="w-2 h-2 rounded-full bg-deepteal-500" />
        <span className="w-2 h-2 rounded-full bg-warmaccent-400" />
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-deepteal-300 to-transparent w-full max-w-md" />
    </div>
  );
}

// Blog Image Component
interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export function BlogImage({ src, alt, caption, priority = false }: BlogImageProps) {
  return (
    <figure className="my-8">
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-deepteal-100">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={450}
          className="w-full h-auto object-cover"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-600 mt-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Related Tools Card
interface RelatedToolProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export function RelatedToolCard({ title, description, href, icon }: RelatedToolProps) {
  return (
    <Link
      href={href}
      className="group block bg-gradient-to-br from-deepteal-50 to-cream-50 rounded-xl p-5 border border-deepteal-200 hover:border-warmaccent-400 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-deepteal-100 text-deepteal-700 group-hover:bg-warmaccent-100 group-hover:text-warmaccent-700 transition-colors">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-bold text-deepteal-800 group-hover:text-warmaccent-700 transition-colors flex items-center gap-2">
            {title}
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
}

// Related Posts Section
interface RelatedPostsProps {
  posts: BlogPost[];
  locale: string;
}

export function RelatedPosts({ posts, locale }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-deepteal-500 text-white">
          📚
        </span>
        Related Articles
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group bg-white rounded-xl border border-deepteal-100 overflow-hidden hover:shadow-lg hover:border-warmaccent-300 transition-all duration-300"
          >
            <div className="relative h-40">
              <Image
                src={post.images.hero}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-deepteal-800 group-hover:text-warmaccent-700 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Stats Card Component
interface StatsCardProps {
  stats: { label: string; value: string }[];
}

export function StatsCard({ stats }: StatsCardProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-deepteal-500 to-deepteal-600 rounded-xl p-4 text-center text-white shadow-lg"
        >
          <div className="text-3xl font-bold">{stat.value}</div>
          <div className="text-sm text-deepteal-100 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// Comparison Table Component
interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-deepteal-600 to-deepteal-700 text-white">
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 text-left font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? 'bg-cream-50' : 'bg-white'
              } hover:bg-deepteal-50 transition-colors`}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 border-t border-deepteal-100 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Main BlogContent Component Props
interface BlogContentProps {
  post: BlogPost;
  locale: string;
  relatedPosts?: BlogPost[];
  children: React.ReactNode;
}

// Main BlogContent Component
export default function BlogContent({ post, locale, relatedPosts = [], children }: BlogContentProps) {
  // Article JSON-LD structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `https://www.vastucart.in${post.images.hero}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'VastuCart',
      url: 'https://www.vastucart.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'VastuCart',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.vastucart.in/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.vastucart.in/${locale}/blog/${post.slug}`,
    },
  };

  // BreadcrumbList JSON-LD structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://www.vastucart.in/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `https://www.vastucart.in/${locale}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.vastucart.in/${locale}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Structured Data - Article Schema */}
      <JsonLd data={articleSchema} />
      {/* Structured Data - BreadcrumbList Schema */}
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <header className="mb-10">
        {/* Category Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-gradient-to-r from-deepteal-500 to-deepteal-600 text-white text-sm font-semibold rounded-full uppercase tracking-wide">
            {post.category}
          </span>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readingTime} min read
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepteal-800 leading-tight mb-4">
          {post.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {post.description}
        </p>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={post.images.hero}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deepteal-900/20 to-transparent" />
        </div>
      </header>

      {/* Table of Contents */}
      <TableOfContents items={post.tableOfContents} />

      {/* Main Content */}
      <div className="prose prose-lg max-w-none prose-headings:text-deepteal-800 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-warmaccent-600 prose-a:no-underline hover:prose-a:text-warmaccent-700 prose-a:font-medium prose-strong:text-deepteal-700 prose-li:text-gray-700">
        {children}
      </div>

      {/* FAQ Section */}
      {post.faqs.length > 0 && <FAQSection faqs={post.faqs} />}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} locale={locale} />
      )}

      {/* Call to Action */}
      <div className="my-12 bg-gradient-to-br from-deepteal-600 to-deepteal-700 rounded-2xl p-8 text-center text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
        <p className="text-deepteal-100 mb-6 max-w-xl mx-auto">
          Try our free {post.category} calculator and discover personalized insights based on ancient wisdom.
        </p>
        <Link
          href={`/${locale}/tools/${post.toolSlug}`}
          className="inline-flex items-center gap-2 bg-warmaccent-500 hover:bg-warmaccent-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
        >
          Use Free Calculator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}

// Export all components for use in blog posts
export {
  TableOfContents,
  FAQSection,
};
