'use client';

import { useState, useId } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { JsonLd } from '@/components/seo/json-ld';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title: string;
}

export function FAQSection({ faqs, title }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqId = useId();

  // Generate JSON-LD for FAQ schema - uses safe sanitized component
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
    <section className="mt-12" aria-labelledby={`${faqId}-title`}>
      {/* JSON-LD Schema - XSS-safe */}
      <JsonLd data={faqSchema} />

      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-6 h-6 text-teal-600" aria-hidden="true" />
        <h2 id={`${faqId}-title`} className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-card overflow-hidden" role="list">
        {faqs.map((faq, index) => {
          const answerId = `${faqId}-answer-${index}`;
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              role="listitem"
              className={cn(
                'border-b border-gray-100 last:border-0',
                isOpen && 'bg-teal-50/50'
              )}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300',
                    isOpen && 'rotate-180 text-teal-600'
                  )}
                  aria-hidden="true"
                />
              </button>

              <div
                id={answerId}
                className={cn(
                  'grid transition-all duration-300 ease-in-out',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                )}
                role="region"
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
