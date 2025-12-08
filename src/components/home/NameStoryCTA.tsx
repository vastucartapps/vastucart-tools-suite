'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Sparkles, ArrowRight, RefreshCw } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { calculateDestiny, getDestinyMeaning, DestinyMeaning } from '@/lib/numerology/destiny';

interface NameStoryCTAProps {
  locale: 'en' | 'hi';
}

interface QuickResult {
  destinyNumber: number;
  meaning: DestinyMeaning;
  isMasterNumber: boolean;
}

export function NameStoryCTA({ locale }: NameStoryCTAProps) {
  const t = useTranslations('home.nameStory');

  const [name, setName] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<QuickResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    setError(null);
    const cleanName = name.trim();

    if (!cleanName) {
      setError(t('errors.empty'));
      return;
    }

    if (!/[a-zA-Z]/.test(cleanName)) {
      setError(t('errors.invalid'));
      return;
    }

    setIsCalculating(true);

    // Brief delay for UX polish
    setTimeout(() => {
      const calcResult = calculateDestiny(cleanName);
      const meaning = getDestinyMeaning(calcResult.destinyNumber);

      if (meaning) {
        setResult({
          destinyNumber: calcResult.destinyNumber,
          meaning,
          isMasterNumber: calcResult.isMasterNumber,
        });
      }
      setIsCalculating(false);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setResult(null);
    setError(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Truncate overview to ~150 chars
  const getShortOverview = (overview: string) => {
    if (overview.length <= 150) return overview;
    return overview.substring(0, 150).trim() + '...';
  };

  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-white to-cream-50 overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-saffron-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            <span className="bg-gradient-to-r from-saffron-500 to-teal-600 bg-clip-text text-transparent">
              {t('headline')}
            </span>
          </h2>
          <p className="text-gray-600">{t('subheadline')}</p>
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            /* Input Form */
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-md mx-auto"
            >
              <div className="mb-4">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('inputPlaceholder')}
                  leftIcon={<User className="w-5 h-5" />}
                  error={error || undefined}
                />
              </div>

              <Button
                onClick={handleSubmit}
                isLoading={isCalculating}
                size="lg"
                className="w-full bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700"
                rightIcon={!isCalculating ? <Sparkles className="w-5 h-5" /> : undefined}
              >
                {isCalculating ? t('calculating') : t('cta')}
              </Button>
            </motion.div>
          ) : (
            /* Result Display */
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            >
              {/* Number Display */}
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 mb-2">{t('yourNumber')}</p>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center font-bold text-4xl text-white shadow-lg ${
                    result.isMasterNumber
                      ? 'bg-gradient-to-br from-saffron-500 to-saffron-600'
                      : 'bg-gradient-to-br from-teal-500 to-teal-700'
                  }`}
                >
                  {result.destinyNumber}
                </motion.div>
                <p className="mt-3 text-lg font-semibold text-gray-900">
                  {result.meaning.title[locale]}
                </p>
                {result.isMasterNumber && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-saffron-100 text-saffron-700 text-xs font-medium rounded-full">
                    {locale === 'en' ? 'Master Number' : 'मास्टर नंबर'}
                  </span>
                )}
              </div>

              {/* Short Overview */}
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {getShortOverview(result.meaning.overview[locale])}
              </p>

              {/* Talents Preview (3-4 items) */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2 text-center">
                  {t('talents')}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {result.meaning.talents.slice(0, 4).map((talent, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
                    >
                      {talent[locale]}
                    </span>
                  ))}
                </div>
              </div>

              {/* Teaser Text */}
              <p className="text-sm text-gray-500 text-center mb-6 italic">
                {t('teaser')}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`/${locale}/tools/destiny-number`}>
                  <Button
                    size="lg"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    {t('exploreMore')}
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  onClick={handleReset}
                  leftIcon={<RefreshCw className="w-4 h-4" />}
                >
                  {t('tryAnother')}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
