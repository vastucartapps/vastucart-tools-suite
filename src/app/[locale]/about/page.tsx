import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Target, Users, Sparkles, BookOpen, Shield, Globe, Award } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: 'About Us - Divine Life | Vedic Wisdom Meets Modern Technology',
    hi: 'हमारे बारे में - डिवाइन लाइफ | वैदिक ज्ञान और आधुनिक तकनीक का संगम',
  };

  const descriptions = {
    en: 'Divine Life by VastuCart brings ancient Vedic wisdom to the digital age. Free, accurate numerology, astrology, and vastu calculators trusted by thousands. Learn about our mission to make spiritual guidance accessible to all.',
    hi: 'डिवाइन लाइफ प्राचीन वैदिक ज्ञान को डिजिटल युग में लाता है। हजारों लोगों द्वारा विश्वसनीय मुफ्त, सटीक अंकशास्त्र, ज्योतिष और वास्तु कैलकुलेटर। आध्यात्मिक मार्गदर्शन को सभी के लिए सुलभ बनाने के हमारे मिशन के बारे में जानें।',
  };

  return {
    title: titles[locale as 'en' | 'hi'] || titles.en,
    description: descriptions[locale as 'en' | 'hi'] || descriptions.en,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: '/en/about',
        hi: '/hi/about',
      },
    },
    openGraph: {
      title: titles[locale as 'en' | 'hi'] || titles.en,
      description: descriptions[locale as 'en' | 'hi'] || descriptions.en,
      url: `https://tools.vastucart.in/${locale}/about`,
      siteName: 'Divine Life by VastuCart',
      type: 'website',
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  const content = {
    en: {
      hero: {
        title: 'About Divine Life',
        subtitle: 'Where Ancient Vedic Wisdom Meets Modern Technology',
        description: 'We are on a mission to make the profound knowledge of Vedic sciences accessible to everyone, anywhere in the world.',
      },
      mission: {
        title: 'Our Mission',
        description: 'At Divine Life, we believe that the timeless wisdom of our ancestors should not be confined to ancient texts or available only to those who can afford expensive consultations. Our mission is to democratize access to Vedic knowledge through technology, making it free, accurate, and easy to understand for everyone.',
      },
      story: {
        title: 'Our Story',
        paragraphs: [
          'Divine Life was born from a simple observation: millions of people seek guidance from numerology, astrology, and vastu shastra, yet finding accurate, trustworthy calculators online was surprisingly difficult. Many existing tools were either inaccurate, hidden behind paywalls, or failed to explain the ancient wisdom behind their calculations.',
          'As part of the VastuCart family, we set out to change this. We assembled a team of Vedic scholars, software engineers, and UX designers to create tools that are not just accurate, but also educational and transparent. Every calculation shows its methodology, allowing users to learn and verify results.',
          'Today, Divine Life offers over 30 free calculators covering numerology, Vedic astrology, vastu shastra, and muhurat (auspicious timing). We serve users in both English and Hindi, honoring the linguistic heritage of these ancient sciences while making them accessible globally.',
        ],
      },
      values: {
        title: 'What We Stand For',
        items: [
          {
            icon: Target,
            title: 'Accuracy',
            description: 'Our calculations are based on authentic Vedic texts and traditional methodologies, verified by scholars.',
          },
          {
            icon: BookOpen,
            title: 'Transparency',
            description: 'We show you how every result is calculated. No black boxes, no mystery - just clear, educational explanations.',
          },
          {
            icon: Heart,
            title: 'Accessibility',
            description: 'Core tools are free forever. We believe spiritual guidance should not be a privilege of the wealthy.',
          },
          {
            icon: Shield,
            title: 'Privacy',
            description: 'Your data stays in your browser. We do not store your personal information on our servers.',
          },
          {
            icon: Globe,
            title: 'Inclusivity',
            description: 'Full support in Hindi and English, with plans to add more languages to serve our global community.',
          },
          {
            icon: Sparkles,
            title: 'Authenticity',
            description: 'We respect the traditions while making them relevant for modern life. No shortcuts, no dilution.',
          },
        ],
      },
      tools: {
        title: 'What We Offer',
        description: 'Divine Life provides a comprehensive suite of Vedic calculators:',
        categories: [
          {
            title: 'Numerology Tools',
            items: ['Life Path Number Calculator', 'Chaldean Name Numerology', 'Lo Shu Grid Analysis', 'Lucky Number Finder', 'Business Name Numerology', 'And many more...'],
          },
          {
            title: 'Astrology Tools',
            items: ['Kundli (Birth Chart) Generator', 'Moon Sign Calculator', 'Nakshatra Finder', 'Manglik Dosha Check', 'Marriage Matching (Kundli Milan)', 'Mahadasha Calculator'],
          },
          {
            title: 'Vastu Tools',
            items: ['Room Direction Advisor', 'House Number Analysis', 'Vastu Score Calculator', 'Placement Recommendations'],
          },
        ],
      },
      connection: {
        title: 'Part of the VastuCart Family',
        description: 'Divine Life is proudly brought to you by VastuCart, your trusted source for authentic Vastu products, yantras, gemstones, and spiritual items. While Divine Life provides free guidance and analysis, VastuCart offers quality products to implement the recommendations.',
        cta: 'Visit VastuCart Store',
      },
      closing: {
        title: 'Join Our Journey',
        description: 'Whether you are taking your first steps into the world of Vedic sciences or are a seasoned practitioner, Divine Life is here to support your journey. Explore our tools, learn from our educational content, and discover the wisdom that has guided millions for thousands of years.',
        tagline: 'May the divine light guide your path.',
      },
    },
    hi: {
      hero: {
        title: 'डिवाइन लाइफ के बारे में',
        subtitle: 'जहां प्राचीन वैदिक ज्ञान आधुनिक तकनीक से मिलता है',
        description: 'हम वैदिक विज्ञान के गहन ज्ञान को दुनिया में हर जगह, हर किसी के लिए सुलभ बनाने के मिशन पर हैं।',
      },
      mission: {
        title: 'हमारा मिशन',
        description: 'डिवाइन लाइफ में, हम मानते हैं कि हमारे पूर्वजों का कालातीत ज्ञान प्राचीन ग्रंथों तक सीमित नहीं रहना चाहिए या केवल उनके लिए उपलब्ध नहीं होना चाहिए जो महंगे परामर्श का खर्च उठा सकते हैं। हमारा मिशन तकनीक के माध्यम से वैदिक ज्ञान तक पहुंच को लोकतांत्रिक बनाना है, इसे सभी के लिए मुफ्त, सटीक और समझने में आसान बनाना है।',
      },
      story: {
        title: 'हमारी कहानी',
        paragraphs: [
          'डिवाइन लाइफ एक साधारण अवलोकन से पैदा हुआ: लाखों लोग अंकशास्त्र, ज्योतिष और वास्तु शास्त्र से मार्गदर्शन चाहते हैं, फिर भी ऑनलाइन सटीक, भरोसेमंद कैलकुलेटर खोजना आश्चर्यजनक रूप से कठिन था।',
          'वास्तुकार्ट परिवार के हिस्से के रूप में, हमने इसे बदलने का फैसला किया। हमने वैदिक विद्वानों, सॉफ्टवेयर इंजीनियरों और UX डिजाइनरों की एक टीम बनाई ताकि ऐसे उपकरण बनाए जा सकें जो न केवल सटीक हों, बल्कि शैक्षिक और पारदर्शी भी हों।',
          'आज, डिवाइन लाइफ अंकशास्त्र, वैदिक ज्योतिष, वास्तु शास्त्र और मुहूर्त को कवर करने वाले 30 से अधिक मुफ्त कैलकुलेटर प्रदान करता है। हम अंग्रेजी और हिंदी दोनों में उपयोगकर्ताओं की सेवा करते हैं।',
        ],
      },
      values: {
        title: 'हम किसके लिए खड़े हैं',
        items: [
          {
            icon: Target,
            title: 'सटीकता',
            description: 'हमारी गणनाएं प्रामाणिक वैदिक ग्रंथों और पारंपरिक पद्धतियों पर आधारित हैं, जो विद्वानों द्वारा सत्यापित हैं।',
          },
          {
            icon: BookOpen,
            title: 'पारदर्शिता',
            description: 'हम आपको दिखाते हैं कि हर परिणाम की गणना कैसे की जाती है। कोई ब्लैक बॉक्स नहीं, कोई रहस्य नहीं।',
          },
          {
            icon: Heart,
            title: 'सुलभता',
            description: 'मुख्य उपकरण हमेशा मुफ्त हैं। हम मानते हैं कि आध्यात्मिक मार्गदर्शन अमीरों का विशेषाधिकार नहीं होना चाहिए।',
          },
          {
            icon: Shield,
            title: 'गोपनीयता',
            description: 'आपका डेटा आपके ब्राउज़र में रहता है। हम आपकी व्यक्तिगत जानकारी अपने सर्वर पर संग्रहीत नहीं करते।',
          },
          {
            icon: Globe,
            title: 'समावेशिता',
            description: 'हिंदी और अंग्रेजी में पूर्ण समर्थन, हमारे वैश्विक समुदाय की सेवा के लिए और भाषाएं जोड़ने की योजना के साथ।',
          },
          {
            icon: Sparkles,
            title: 'प्रामाणिकता',
            description: 'हम परंपराओं का सम्मान करते हुए उन्हें आधुनिक जीवन के लिए प्रासंगिक बनाते हैं। कोई शॉर्टकट नहीं।',
          },
        ],
      },
      tools: {
        title: 'हम क्या प्रदान करते हैं',
        description: 'डिवाइन लाइफ वैदिक कैलकुलेटर का एक व्यापक सूट प्रदान करता है:',
        categories: [
          {
            title: 'अंकशास्त्र उपकरण',
            items: ['मूलांक कैलकुलेटर', 'कैल्डियन नाम अंकशास्त्र', 'लो शू ग्रिड विश्लेषण', 'लकी नंबर फाइंडर', 'व्यापार नाम अंकशास्त्र', 'और बहुत कुछ...'],
          },
          {
            title: 'ज्योतिष उपकरण',
            items: ['कुंडली जनरेटर', 'राशि कैलकुलेटर', 'नक्षत्र खोजक', 'मांगलिक दोष जांच', 'कुंडली मिलान', 'महादशा कैलकुलेटर'],
          },
          {
            title: 'वास्तु उपकरण',
            items: ['कमरा दिशा सलाहकार', 'घर नंबर विश्लेषण', 'वास्तु स्कोर कैलकुलेटर', 'प्लेसमेंट अनुशंसाएं'],
          },
        ],
      },
      connection: {
        title: 'वास्तुकार्ट परिवार का हिस्सा',
        description: 'डिवाइन लाइफ गर्व से वास्तुकार्ट द्वारा लाया गया है, प्रामाणिक वास्तु उत्पादों, यंत्रों, रत्नों और आध्यात्मिक वस्तुओं का आपका विश्वसनीय स्रोत।',
        cta: 'वास्तुकार्ट स्टोर देखें',
      },
      closing: {
        title: 'हमारी यात्रा में शामिल हों',
        description: 'चाहे आप वैदिक विज्ञान की दुनिया में अपने पहले कदम उठा रहे हों या एक अनुभवी अभ्यासकर्ता हों, डिवाइन लाइफ आपकी यात्रा का समर्थन करने के लिए यहां है। हमारे उपकरणों का अन्वेषण करें, हमारी शैक्षिक सामग्री से सीखें।',
        tagline: 'दिव्य प्रकाश आपके मार्ग को रोशन करे।',
      },
    },
  };

  const t = content[locale as 'en' | 'hi'] || content.en;

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-teal-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-saffron-400 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-6">
            <img src="/logo.png" alt="Divine Life" className="w-14 h-14 rounded-xl" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.hero.title}</h1>
          <p className="text-xl text-teal-100 mb-4">{t.hero.subtitle}</p>
          <p className="text-lg text-teal-200 max-w-2xl mx-auto">{t.hero.description}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.mission.title}</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">{t.mission.description}</p>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">{t.story.title}</h2>
          <div className="space-y-6">
            {t.story.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">{t.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.values.items.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-saffron-100 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tools Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-cream-100 to-cream-200 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.tools.title}</h2>
            <p className="text-gray-600 mb-8">{t.tools.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.tools.categories.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VastuCart Connection */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-saffron-500 to-saffron-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{t.connection.title}</h2>
            </div>
            <p className="text-saffron-100 text-lg mb-6">{t.connection.description}</p>
            <a
              href="https://vastucart.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-saffron-600 font-semibold rounded-xl hover:bg-saffron-50 transition-colors"
            >
              {t.connection.cta}
            </a>
          </div>
        </section>

        {/* Closing Section */}
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.closing.title}</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">{t.closing.description}</p>
          <p className="text-xl font-medium text-teal-600 italic">{t.closing.tagline}</p>

          <div className="mt-10">
            <Link
              href={`/${locale}/tools`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors shadow-lg"
            >
              {locale === 'en' ? 'Explore Our Tools' : 'हमारे टूल्स देखें'}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
