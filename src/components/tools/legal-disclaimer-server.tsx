import { Info } from 'lucide-react';

interface LegalDisclaimerServerProps {
  locale: string;
}

export function LegalDisclaimerServer({ locale }: LegalDisclaimerServerProps) {
  const text = {
    en: 'For entertainment and educational purposes only. These calculations are based on ancient Vedic traditions and should not replace professional advice. Consult qualified experts for important life decisions.',
    hi: 'केवल मनोरंजन और शैक्षिक उद्देश्यों के लिए। ये गणनाएं प्राचीन वैदिक परंपराओं पर आधारित हैं और पेशेवर सलाह का स्थान नहीं ले सकतीं। महत्वपूर्ण जीवन निर्णयों के लिए योग्य विशेषज्ञों से परामर्श करें।',
  };

  return (
    <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 leading-relaxed">
          {locale === 'hi' ? text.hi : text.en}
        </p>
      </div>
    </div>
  );
}
