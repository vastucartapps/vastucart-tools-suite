import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, AlertTriangle, Scale, Ban, BookOpen, RefreshCw } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: 'Terms of Service - Divine Life',
    hi: 'सेवा की शर्तें - डिवाइन लाइफ',
  };

  const descriptions = {
    en: 'Read the Terms of Service for using Divine Life by VastuCart. Understand your rights and responsibilities when using our numerology and astrology calculators.',
    hi: 'डिवाइन लाइफ की सेवा की शर्तें पढ़ें। हमारे अंकशास्त्र और ज्योतिष कैलकुलेटर का उपयोग करते समय अपने अधिकारों और जिम्मेदारियों को समझें।',
  };

  return {
    title: titles[locale as 'en' | 'hi'] || titles.en,
    description: descriptions[locale as 'en' | 'hi'] || descriptions.en,
    alternates: {
      canonical: `/${locale}/terms`,
      languages: {
        en: '/en/terms',
        hi: '/hi/terms',
      },
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: December 2024',
      intro: 'Welcome to Divine Life by VastuCart. By accessing and using our website tools.vastucart.in, you accept and agree to be bound by the terms and conditions outlined below. Please read these terms carefully before using our services.',
      sections: [
        {
          icon: BookOpen,
          title: 'Acceptance of Terms',
          content: [
            'By accessing or using Divine Life, you agree to be bound by these Terms of Service and all applicable laws and regulations.',
            'If you do not agree with any of these terms, you are prohibited from using or accessing this site.',
            'These terms apply to all visitors, users, and others who access or use the Service.',
          ],
        },
        {
          icon: AlertTriangle,
          title: 'Disclaimer of Accuracy',
          content: [
            'The numerology, astrology, vastu, and other spiritual calculations provided on this website are for entertainment and educational purposes only.',
            'These tools are based on ancient Vedic traditions and interpretations. Results should not be considered as professional advice.',
            'We make no guarantees about the accuracy, reliability, or completeness of any information provided.',
            'Important life decisions should not be made solely based on the results from our calculators. Always consult qualified professionals.',
          ],
        },
        {
          icon: Scale,
          title: 'Use of Services',
          content: [
            'You may use our calculators and tools for personal, non-commercial purposes.',
            'You agree not to misuse our services or help anyone else do so.',
            'You must not attempt to access our systems in unauthorized ways.',
            'We reserve the right to modify, suspend, or discontinue any part of our services at any time.',
          ],
        },
        {
          icon: Ban,
          title: 'Prohibited Activities',
          content: [
            'Using our services for any illegal purpose or in violation of any laws',
            'Attempting to interfere with, compromise the system integrity or security',
            'Scraping, data mining, or using automated tools to access our content',
            'Copying, reproducing, or redistributing our content without permission',
            'Using our results to harm, deceive, or mislead others',
          ],
        },
        {
          icon: FileText,
          title: 'Intellectual Property',
          content: [
            'The content, features, and functionality of Divine Life are owned by VastuCart and are protected by copyright, trademark, and other intellectual property laws.',
            'Our tools, algorithms, and content may not be copied, modified, or distributed without written permission.',
            'The Divine Life name, logo, and all related marks are trademarks of VastuCart.',
          ],
        },
        {
          icon: RefreshCw,
          title: 'Changes to Terms',
          content: [
            'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.',
            'Your continued use of the Service after any changes indicates your acceptance of the new Terms of Service.',
            'We encourage you to review these terms periodically for any changes.',
          ],
        },
      ],
      contact: {
        title: 'Contact Information',
        text: 'For questions about these Terms of Service, please contact us through our parent website at',
        link: 'vastucart.in',
      },
    },
    hi: {
      title: 'सेवा की शर्तें',
      lastUpdated: 'अंतिम अपडेट: दिसंबर 2024',
      intro: 'डिवाइन लाइफ बाय वास्तुकार्ट में आपका स्वागत है। हमारी वेबसाइट tools.vastucart.in को एक्सेस और उपयोग करके, आप नीचे दी गई शर्तों और नियमों से बंधे होने को स्वीकार करते हैं। कृपया हमारी सेवाओं का उपयोग करने से पहले इन शर्तों को ध्यान से पढ़ें।',
      sections: [
        {
          icon: BookOpen,
          title: 'शर्तों की स्वीकृति',
          content: [
            'डिवाइन लाइफ को एक्सेस या उपयोग करके, आप इन सेवा की शर्तों और सभी लागू कानूनों और नियमों से बंधे होने के लिए सहमत हैं।',
            'यदि आप इनमें से किसी भी शर्त से सहमत नहीं हैं, तो आप इस साइट का उपयोग या एक्सेस करने से प्रतिबंधित हैं।',
            'ये शर्तें सभी विज़िटर, उपयोगकर्ताओं और अन्य लोगों पर लागू होती हैं जो सेवा का उपयोग या एक्सेस करते हैं।',
          ],
        },
        {
          icon: AlertTriangle,
          title: 'सटीकता का अस्वीकरण',
          content: [
            'इस वेबसाइट पर प्रदान की गई अंकशास्त्र, ज्योतिष, वास्तु और अन्य आध्यात्मिक गणनाएं केवल मनोरंजन और शैक्षिक उद्देश्यों के लिए हैं।',
            'ये उपकरण प्राचीन वैदिक परंपराओं और व्याख्याओं पर आधारित हैं। परिणामों को पेशेवर सलाह के रूप में नहीं माना जाना चाहिए।',
            'हम प्रदान की गई किसी भी जानकारी की सटीकता, विश्वसनीयता या पूर्णता के बारे में कोई गारंटी नहीं देते।',
            'महत्वपूर्ण जीवन निर्णय केवल हमारे कैलकुलेटर के परिणामों के आधार पर नहीं लिए जाने चाहिए। हमेशा योग्य पेशेवरों से परामर्श करें।',
          ],
        },
        {
          icon: Scale,
          title: 'सेवाओं का उपयोग',
          content: [
            'आप व्यक्तिगत, गैर-व्यावसायिक उद्देश्यों के लिए हमारे कैलकुलेटर और टूल्स का उपयोग कर सकते हैं।',
            'आप हमारी सेवाओं का दुरुपयोग नहीं करने या किसी और को ऐसा करने में मदद नहीं करने के लिए सहमत हैं।',
            'आपको अनधिकृत तरीकों से हमारे सिस्टम को एक्सेस करने का प्रयास नहीं करना चाहिए।',
            'हम किसी भी समय अपनी सेवाओं के किसी भी हिस्से को संशोधित, निलंबित या बंद करने का अधिकार सुरक्षित रखते हैं।',
          ],
        },
        {
          icon: Ban,
          title: 'प्रतिबंधित गतिविधियां',
          content: [
            'हमारी सेवाओं का किसी भी अवैध उद्देश्य के लिए या किसी कानून के उल्लंघन में उपयोग करना',
            'सिस्टम की अखंडता या सुरक्षा में हस्तक्षेप करने या समझौता करने का प्रयास करना',
            'हमारी सामग्री तक पहुंचने के लिए स्क्रैपिंग, डेटा माइनिंग या स्वचालित टूल्स का उपयोग करना',
            'बिना अनुमति के हमारी सामग्री को कॉपी, पुनर्उत्पादित या पुनर्वितरित करना',
          ],
        },
        {
          icon: FileText,
          title: 'बौद्धिक संपदा',
          content: [
            'डिवाइन लाइफ की सामग्री, सुविधाएं और कार्यक्षमता वास्तुकार्ट के स्वामित्व में हैं और कॉपीराइट, ट्रेडमार्क और अन्य बौद्धिक संपदा कानूनों द्वारा संरक्षित हैं।',
            'हमारे टूल्स, एल्गोरिदम और सामग्री को लिखित अनुमति के बिना कॉपी, संशोधित या वितरित नहीं किया जा सकता।',
            'डिवाइन लाइफ नाम, लोगो और सभी संबंधित चिह्न वास्तुकार्ट के ट्रेडमार्क हैं।',
          ],
        },
        {
          icon: RefreshCw,
          title: 'शर्तों में परिवर्तन',
          content: [
            'हम किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। परिवर्तन पोस्ट होने पर तुरंत प्रभावी होंगे।',
            'किसी भी परिवर्तन के बाद सेवा का आपका निरंतर उपयोग नई सेवा शर्तों की आपकी स्वीकृति को इंगित करता है।',
            'हम आपको किसी भी परिवर्तन के लिए समय-समय पर इन शर्तों की समीक्षा करने के लिए प्रोत्साहित करते हैं।',
          ],
        },
      ],
      contact: {
        title: 'संपर्क जानकारी',
        text: 'इन सेवा की शर्तों के बारे में प्रश्नों के लिए, कृपया हमारी मूल वेबसाइट पर संपर्क करें',
        link: 'vastucart.in',
      },
    },
  };

  const t = content[locale as 'en' | 'hi'] || content.en;

  return (
    <div className="min-h-screen bg-cream-50 pattern-zodiac">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-2xl mb-4 shadow-lg">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {t.title}
          </h1>
          <p className="text-gray-500">{t.lastUpdated}</p>
        </header>

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 mb-8">
          <p className="text-gray-600 leading-relaxed">{t.intro}</p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {t.sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-saffron-100 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-saffron-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-gradient-to-r from-saffron-50 to-saffron-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t.contact.title}</h2>
          <p className="text-gray-600">
            {t.contact.text}{' '}
            <a
              href="https://vastucart.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron-600 hover:text-saffron-700 font-medium"
            >
              {t.contact.link}
            </a>
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-saffron-600 text-white rounded-xl hover:bg-saffron-700 transition-colors"
          >
            {locale === 'en' ? 'Back to Home' : 'होम पर वापस जाएं'}
          </Link>
        </div>
      </div>
    </div>
  );
}
