'use client';

import { Info } from 'lucide-react';

interface LegalDisclaimerProps {
  locale: 'en' | 'hi';
  variant?: 'default' | 'compact';
}

export function LegalDisclaimer({ locale, variant = 'default' }: LegalDisclaimerProps) {
  const text = {
    en: 'For entertainment and educational purposes only. These calculations are based on ancient Vedic traditions and should not replace professional advice. Consult qualified experts for important life decisions.',
    hi: 'केवल मनोरंजन और शैक्षिक उद्देश्यों के लिए। ये गणनाएं प्राचीन वैदिक परंपराओं पर आधारित हैं और पेशेवर सलाह का स्थान नहीं ले सकतीं। महत्वपूर्ण जीवन निर्णयों के लिए योग्य विशेषज्ञों से परामर्श करें।',
  };

  if (variant === 'compact') {
    return (
      <p className="text-xs text-gray-500 text-center mt-4">
        {locale === 'en'
          ? 'For entertainment purposes only. Not professional advice.'
          : 'केवल मनोरंजन उद्देश्यों के लिए। पेशेवर सलाह नहीं।'}
      </p>
    );
  }

  return (
    <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 leading-relaxed">
          {text[locale]}
        </p>
      </div>
    </div>
  );
}
