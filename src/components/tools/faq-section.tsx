'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

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

  // Generate JSON-LD for FAQ schema
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
    <section className="mt-12">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-6 h-6 text-teal-600" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={cn(
              'border-b border-gray-100 last:border-0',
              openIndex === index && 'bg-teal-50/50'
            )}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-gray-900 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300',
                  openIndex === index && 'rotate-180 text-teal-600'
                )}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
