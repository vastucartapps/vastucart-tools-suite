import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Eye, Cookie, Lock, Mail, RefreshCw } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: 'Privacy Policy - Divine Life',
    hi: 'गोपनीयता नीति - डिवाइन लाइफ',
  };

  const descriptions = {
    en: 'Learn how Divine Life by VastuCart collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
    hi: 'जानें कि डिवाइन लाइफ आपकी व्यक्तिगत जानकारी कैसे एकत्र करता है, उपयोग करता है और सुरक्षित रखता है।',
  };

  return {
    title: titles[locale as 'en' | 'hi'] || titles.en,
    description: descriptions[locale as 'en' | 'hi'] || descriptions.en,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        en: '/en/privacy',
        hi: '/hi/privacy',
      },
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: December 2024',
      intro: 'At Divine Life by VastuCart, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website tools.vastucart.in.',
      sections: [
        {
          icon: Eye,
          title: 'Information We Collect',
          content: [
            'Usage Data: We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.',
            'Analytics Data: We use Google Analytics to understand how visitors interact with our website. This includes information about your device, location (country/city level), and browsing behavior.',
            'Calculator Inputs: When you use our numerology, astrology, or vastu calculators, the information you enter (such as names, dates of birth) is processed locally in your browser and is NOT stored on our servers.',
          ],
        },
        {
          icon: Cookie,
          title: 'Cookies and Tracking',
          content: [
            'We use cookies and similar tracking technologies to track activity on our website and hold certain information.',
            'Essential Cookies: Required for the website to function properly.',
            'Analytics Cookies: Help us understand how visitors use our website.',
            'Preference Cookies: Remember your language preference and other settings.',
            'You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
          ],
        },
        {
          icon: Lock,
          title: 'How We Use Your Information',
          content: [
            'To provide and maintain our services',
            'To improve, personalize, and expand our website',
            'To understand and analyze how you use our website',
            'To develop new products, services, features, and functionality',
            'To communicate with you (if you contact us)',
          ],
        },
        {
          icon: Shield,
          title: 'Data Security',
          content: [
            'We use administrative, technical, and physical security measures to help protect your personal information.',
            'Your calculator inputs are processed client-side and are not transmitted to or stored on our servers.',
            'We do not sell, trade, or otherwise transfer your personal information to outside parties.',
          ],
        },
        {
          icon: RefreshCw,
          title: 'Third-Party Services',
          content: [
            'Google Analytics: We use Google Analytics to analyze website traffic. Google may use the data collected to contextualize and personalize ads. You can opt out using the Google Analytics Opt-out Browser Add-on.',
            'VastuCart Store: Our website links to vastucart.in, which has its own privacy policy.',
          ],
        },
        {
          icon: Mail,
          title: 'Contact Us',
          content: [
            'If you have questions about this Privacy Policy, please contact us through our parent website at vastucart.in.',
          ],
        },
      ],
    },
    hi: {
      title: 'गोपनीयता नीति',
      lastUpdated: 'अंतिम अपडेट: दिसंबर 2024',
      intro: 'डिवाइन लाइफ बाय वास्तुकार्ट में, हम आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट tools.vastucart.in पर जाते हैं तो हम आपकी जानकारी कैसे एकत्र, उपयोग, प्रकट और सुरक्षित करते हैं।',
      sections: [
        {
          icon: Eye,
          title: 'हम कौन सी जानकारी एकत्र करते हैं',
          content: [
            'उपयोग डेटा: जब आप हमारी वेबसाइट पर जाते हैं तो हम स्वचालित रूप से कुछ जानकारी एकत्र करते हैं, जिसमें आपका IP पता, ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम, रेफरिंग URLs और देखे गए पृष्ठ शामिल हैं।',
            'एनालिटिक्स डेटा: हम Google Analytics का उपयोग करते हैं यह समझने के लिए कि विज़िटर हमारी वेबसाइट के साथ कैसे इंटरैक्ट करते हैं।',
            'कैलकुलेटर इनपुट: जब आप हमारे अंकशास्त्र, ज्योतिष या वास्तु कैलकुलेटर का उपयोग करते हैं, तो आपके द्वारा दर्ज की गई जानकारी आपके ब्राउज़र में स्थानीय रूप से प्रोसेस होती है और हमारे सर्वर पर संग्रहीत नहीं होती।',
          ],
        },
        {
          icon: Cookie,
          title: 'कुकीज़ और ट्रैकिंग',
          content: [
            'हम अपनी वेबसाइट पर गतिविधि को ट्रैक करने और कुछ जानकारी रखने के लिए कुकीज़ और इसी तरह की ट्रैकिंग तकनीकों का उपयोग करते हैं।',
            'आवश्यक कुकीज़: वेबसाइट के ठीक से काम करने के लिए आवश्यक।',
            'एनालिटिक्स कुकीज़: हमें यह समझने में मदद करती हैं कि विज़िटर हमारी वेबसाइट का उपयोग कैसे करते हैं।',
            'प्राथमिकता कुकीज़: आपकी भाषा प्राथमिकता और अन्य सेटिंग्स याद रखती हैं।',
          ],
        },
        {
          icon: Lock,
          title: 'हम आपकी जानकारी का उपयोग कैसे करते हैं',
          content: [
            'हमारी सेवाएं प्रदान करने और बनाए रखने के लिए',
            'हमारी वेबसाइट को बेहतर बनाने, वैयक्तिकृत करने और विस्तारित करने के लिए',
            'यह समझने के लिए कि आप हमारी वेबसाइट का उपयोग कैसे करते हैं',
            'नए उत्पाद, सेवाएं, सुविधाएं और कार्यक्षमता विकसित करने के लिए',
          ],
        },
        {
          icon: Shield,
          title: 'डेटा सुरक्षा',
          content: [
            'हम आपकी व्यक्तिगत जानकारी की सुरक्षा में मदद के लिए प्रशासनिक, तकनीकी और भौतिक सुरक्षा उपायों का उपयोग करते हैं।',
            'आपके कैलकुलेटर इनपुट क्लाइंट-साइड प्रोसेस होते हैं और हमारे सर्वर पर संग्रहीत नहीं होते।',
            'हम आपकी व्यक्तिगत जानकारी को बाहरी पक्षों को नहीं बेचते, व्यापार करते या अन्यथा स्थानांतरित करते हैं।',
          ],
        },
        {
          icon: Mail,
          title: 'संपर्क करें',
          content: [
            'यदि आपके पास इस गोपनीयता नीति के बारे में प्रश्न हैं, तो कृपया vastucart.in पर हमसे संपर्क करें।',
          ],
        },
      ],
    },
  };

  const t = content[locale as 'en' | 'hi'] || content.en;

  return (
    <div className="min-h-screen bg-cream-50 pattern-zodiac">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-deepteal-500 to-deepteal-600 rounded-2xl mb-4 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
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
                  <div className="w-10 h-10 rounded-xl bg-deepteal-100 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-deepteal-600" />
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

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-deepteal-600 text-white rounded-xl hover:bg-deepteal-700 transition-colors"
          >
            {locale === 'en' ? 'Back to Home' : 'होम पर वापस जाएं'}
          </Link>
        </div>
      </div>
    </div>
  );
}
