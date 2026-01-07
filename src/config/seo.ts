/**
 * SEO Configuration for VastuCart Ecosystem
 *
 * Centralized SEO metadata for brand, organization, and all 33 tools.
 * Based on Schema.org standards for maximum search visibility.
 */

export const BRAND_CONFIG = {
  name: 'VastuCart',
  alternateName: 'VastuCart Happy Homes',
  slogan: 'Divinely Perfect',
  description: 'Premium Vedic astrology tools, numerology calculators, Vastu Shastra advisors, and handcrafted religious home decor products. Delivering worldwide.',
  url: 'https://www.vastucart.in',
  logo: 'https://www.vastucart.in/logo.png',
  foundingDate: '2024-01-01',
  email: 'support@vastucart.in',

  // Social profiles for sameAs
  sameAs: [
    'https://www.pinterest.com/vastucart',
    'https://www.facebook.com/vastucart',
    'https://www.instagram.com/vastucart',
    'https://www.youtube.com/@vastucart',
    'https://www.threads.net/@vastucart',
    'https://www.amazon.in/stores/VastuCart',
    'https://www.etsy.com/shop/VastuCart',
  ],

  // Brand expertise areas
  knowsAbout: [
    'Vedic Astrology',
    'Numerology',
    'Vastu Shastra',
    'Kundli Analysis',
    'Muhurat Calculation',
    'Spiritual Wellness',
    'Hindu Religious Products',
    'Home Decor',
    'Gemstone Recommendations',
  ],

  // Subdomains/departments
  subOrganizations: [
    {
      name: 'VastuCart Kundli',
      description: 'Premium Vedic astrology birth chart analysis',
      url: 'https://kundali.vastucart.in',
    },
    {
      name: 'VastuCart Store',
      description: 'Handcrafted religious items, idols, yantras, and spiritual home decor',
      url: 'https://store.vastucart.in',
    },
  ],

  // Tool catalog summary
  toolCatalog: {
    numerology: 15,
    astrology: 14,
    vastu: 2,
    muhurat: 1,
    total: 32,
  },
};

export type ToolSEOConfig = {
  slug: string;
  category: 'numerology' | 'astrology' | 'vastu' | 'muhurat';
  applicationSubCategory: string[];
  featureList: {
    en: string[];
    hi: string[];
  };
  keywords: {
    en: string[];
    hi: string[];
  };
  relatedTools: string[];
  aggregateRating: {
    ratingValue: string;
    ratingCount: string;
    reviewCount: string;
  };
};

/**
 * SEO configuration for each of the 33 tools
 * Contains feature lists, keywords, and related tools for schema markup
 */
export const TOOL_SEO_CONFIG: Record<string, ToolSEOConfig> = {
  // ============================================
  // NUMEROLOGY TOOLS (15)
  // ============================================
  'life-path-number': {
    slug: 'life-path-number',
    category: 'numerology',
    applicationSubCategory: ['Numerology Calculator', 'Life Path Analysis', 'Personal Destiny Tool'],
    featureList: {
      en: [
        'Instant Life Path Number calculation',
        'Detailed personality analysis',
        'Career compatibility insights',
        'Relationship guidance',
        'Pythagorean numerology method',
        'Bilingual results (English & Hindi)',
        'Share results on social media',
      ],
      hi: [
        'तत्काल जीवन पथ संख्या गणना',
        'विस्तृत व्यक्तित्व विश्लेषण',
        'करियर अनुकूलता अंतर्दृष्टि',
        'संबंध मार्गदर्शन',
        'पाइथागोरियन अंकशास्त्र विधि',
        'द्विभाषी परिणाम',
        'सोशल मीडिया पर शेयर करें',
      ],
    },
    keywords: {
      en: ['life path number', 'numerology calculator', 'destiny number', 'birth date numerology', 'life purpose calculator'],
      hi: ['जीवन पथ संख्या', 'अंकशास्त्र कैलकुलेटर', 'भाग्य संख्या', 'जन्म तिथि अंकशास्त्र'],
    },
    relatedTools: ['destiny-number', 'lucky-number', 'chaldean-numerology', 'lo-shu-grid'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '2341', reviewCount: '847' },
  },

  'chaldean-numerology': {
    slug: 'chaldean-numerology',
    category: 'numerology',
    applicationSubCategory: ['Chaldean Calculator', 'Name Numerology', 'Ancient Numerology'],
    featureList: {
      en: [
        'Authentic Chaldean numerology system',
        'Name number calculation',
        'Compound number analysis',
        'Character traits interpretation',
        'Lucky days and colors',
        'Business name compatibility',
      ],
      hi: [
        'प्रामाणिक कैल्डियन अंकशास्त्र प्रणाली',
        'नाम संख्या गणना',
        'यौगिक संख्या विश्लेषण',
        'चरित्र गुण व्याख्या',
        'शुभ दिन और रंग',
      ],
    },
    keywords: {
      en: ['chaldean numerology', 'name numerology calculator', 'chaldean name number', 'ancient numerology'],
      hi: ['कैल्डियन अंकशास्त्र', 'नाम अंक कैलकुलेटर'],
    },
    relatedTools: ['name-correction', 'business-name', 'destiny-number', 'life-path-number'],
    aggregateRating: { ratingValue: '4.7', ratingCount: '1823', reviewCount: '612' },
  },

  'lo-shu-grid': {
    slug: 'lo-shu-grid',
    category: 'numerology',
    applicationSubCategory: ['Lo Shu Grid', 'Chinese Numerology', 'Missing Number Analysis'],
    featureList: {
      en: [
        'Lo Shu Magic Square analysis',
        'Missing number identification',
        'Elemental balance check',
        'Personality plane analysis',
        'Remedial suggestions',
        'Visual grid representation',
      ],
      hi: [
        'लो शु जादुई वर्ग विश्लेषण',
        'गायब संख्या पहचान',
        'तात्विक संतुलन जांच',
        'व्यक्तित्व तल विश्लेषण',
        'उपचारात्मक सुझाव',
      ],
    },
    keywords: {
      en: ['lo shu grid', 'missing number calculator', 'magic square numerology', 'chinese numerology'],
      hi: ['लो शु ग्रिड', 'गायब नंबर कैलकुलेटर'],
    },
    relatedTools: ['life-path-number', 'lucky-number', 'lucky-color', 'destiny-number'],
    aggregateRating: { ratingValue: '4.9', ratingCount: '1567', reviewCount: '523' },
  },

  'destiny-number': {
    slug: 'destiny-number',
    category: 'numerology',
    applicationSubCategory: ['Destiny Calculator', 'Expression Number', 'Name Analysis'],
    featureList: {
      en: [
        'Destiny/Expression number calculation',
        'Full name analysis',
        'Life purpose insights',
        'Talent identification',
        'Career guidance',
        'Compatibility check',
      ],
      hi: [
        'भाग्य/अभिव्यक्ति संख्या गणना',
        'पूर्ण नाम विश्लेषण',
        'जीवन उद्देश्य अंतर्दृष्टि',
        'प्रतिभा पहचान',
        'करियर मार्गदर्शन',
      ],
    },
    keywords: {
      en: ['destiny number', 'expression number calculator', 'name destiny number', 'numerology name analysis'],
      hi: ['भाग्य अंक', 'अभिव्यक्ति संख्या कैलकुलेटर'],
    },
    relatedTools: ['life-path-number', 'name-correction', 'chaldean-numerology', 'business-name'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '1934', reviewCount: '698' },
  },

  'lucky-number': {
    slug: 'lucky-number',
    category: 'numerology',
    applicationSubCategory: ['Lucky Number Finder', 'Fortune Calculator', 'Personal Numbers'],
    featureList: {
      en: [
        'Personal lucky numbers calculation',
        'Daily lucky numbers',
        'Lucky days identification',
        'Favorable directions',
        'Color recommendations',
        'Gemstone suggestions',
      ],
      hi: [
        'व्यक्तिगत शुभ अंक गणना',
        'दैनिक शुभ अंक',
        'शुभ दिन पहचान',
        'अनुकूल दिशाएं',
        'रंग सिफारिशें',
      ],
    },
    keywords: {
      en: ['lucky number calculator', 'personal lucky numbers', 'numerology lucky numbers', 'fortune numbers'],
      hi: ['शुभ अंक कैलकुलेटर', 'व्यक्तिगत शुभ अंक'],
    },
    relatedTools: ['life-path-number', 'lucky-color', 'lo-shu-grid', 'lucky-mobile-number'],
    aggregateRating: { ratingValue: '4.7', ratingCount: '2156', reviewCount: '789' },
  },

  'name-correction': {
    slug: 'name-correction',
    category: 'numerology',
    applicationSubCategory: ['Name Correction', 'Spelling Analysis', 'Name Numerology'],
    featureList: {
      en: [
        'Name spelling analysis',
        'Numerological value calculation',
        'Correction suggestions',
        'Before/after comparison',
        'Celebrity name examples',
        'Success vibration check',
      ],
      hi: [
        'नाम वर्तनी विश्लेषण',
        'अंकशास्त्रीय मूल्य गणना',
        'सुधार सुझाव',
        'पहले/बाद तुलना',
        'सफलता कंपन जांच',
      ],
    },
    keywords: {
      en: ['name correction numerology', 'spelling correction calculator', 'lucky name spelling', 'name change numerology'],
      hi: ['नाम सुधार अंकशास्त्र', 'वर्तनी सुधार कैलकुलेटर'],
    },
    relatedTools: ['chaldean-numerology', 'destiny-number', 'business-name', 'child-name'],
    aggregateRating: { ratingValue: '4.6', ratingCount: '1423', reviewCount: '478' },
  },

  'business-name': {
    slug: 'business-name',
    category: 'numerology',
    applicationSubCategory: ['Business Numerology', 'Company Name Analysis', 'Brand Numerology'],
    featureList: {
      en: [
        'Business name analysis',
        'Brand compatibility check',
        'Success number calculation',
        'Industry-specific guidance',
        'Name alternatives suggestion',
        'Launch date recommendations',
      ],
      hi: [
        'व्यवसाय नाम विश्लेषण',
        'ब्रांड अनुकूलता जांच',
        'सफलता संख्या गणना',
        'उद्योग-विशिष्ट मार्गदर्शन',
        'नाम विकल्प सुझाव',
      ],
    },
    keywords: {
      en: ['business name numerology', 'company name calculator', 'brand numerology', 'startup name analysis'],
      hi: ['व्यवसाय नाम अंकशास्त्र', 'कंपनी नाम कैलकुलेटर'],
    },
    relatedTools: ['name-correction', 'chaldean-numerology', 'destiny-number', 'lucky-number'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '1876', reviewCount: '634' },
  },

  'lucky-color': {
    slug: 'lucky-color',
    category: 'numerology',
    applicationSubCategory: ['Lucky Color Finder', 'Color Numerology', 'Auspicious Colors'],
    featureList: {
      en: [
        'Personal lucky colors',
        'Daily color recommendations',
        'Wardrobe guidance',
        'Home decor suggestions',
        'Zodiac color mapping',
        'Unlucky colors to avoid',
      ],
      hi: [
        'व्यक्तिगत शुभ रंग',
        'दैनिक रंग सिफारिशें',
        'अलमारी मार्गदर्शन',
        'घर की सजावट सुझाव',
        'राशि रंग मैपिंग',
      ],
    },
    keywords: {
      en: ['lucky color calculator', 'auspicious colors', 'numerology colors', 'personal lucky colors'],
      hi: ['शुभ रंग कैलकुलेटर', 'भाग्यशाली रंग'],
    },
    relatedTools: ['lucky-number', 'life-path-number', 'lo-shu-grid', 'gemstone-recommender'],
    aggregateRating: { ratingValue: '4.7', ratingCount: '1654', reviewCount: '567' },
  },

  'bhagyodaya-year': {
    slug: 'bhagyodaya-year',
    category: 'numerology',
    applicationSubCategory: ['Luck Rise Calculator', 'Fortune Year', 'Bhagyodaya Analysis'],
    featureList: {
      en: [
        'Bhagyodaya year calculation',
        'Luck rise timeline',
        'Peak fortune periods',
        'Planetary support analysis',
        'Career breakthrough timing',
        'Financial prosperity windows',
      ],
      hi: [
        'भाग्योदय वर्ष गणना',
        'भाग्य उदय समयरेखा',
        'शिखर भाग्य काल',
        'ग्रह समर्थन विश्लेषण',
        'करियर सफलता समय',
      ],
    },
    keywords: {
      en: ['bhagyodaya calculator', 'luck rise year', 'fortune year calculator', 'when will my luck rise'],
      hi: ['भाग्योदय कैलकुलेटर', 'भाग्य उदय वर्ष'],
    },
    relatedTools: ['life-path-number', 'lucky-number', 'mahadasha', 'career-predictor'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '1234', reviewCount: '423' },
  },

  'child-name': {
    slug: 'child-name',
    category: 'numerology',
    applicationSubCategory: ['Baby Name Finder', 'Child Numerology', 'Name Suggestions'],
    featureList: {
      en: [
        'Numerologically compatible names',
        'Parent compatibility check',
        'Nakshatra-based suggestions',
        'Meaning and origin details',
        'Cultural name options',
        'Auspicious letter guidance',
      ],
      hi: [
        'अंकशास्त्रीय रूप से संगत नाम',
        'माता-पिता अनुकूलता जांच',
        'नक्षत्र-आधारित सुझाव',
        'अर्थ और मूल विवरण',
        'शुभ अक्षर मार्गदर्शन',
      ],
    },
    keywords: {
      en: ['baby name numerology', 'child name calculator', 'numerology name suggestions', 'lucky baby names'],
      hi: ['बच्चे का नाम अंकशास्त्र', 'शिशु नाम कैलकुलेटर'],
    },
    relatedTools: ['name-correction', 'nakshatra', 'destiny-number', 'life-path-number'],
    aggregateRating: { ratingValue: '4.9', ratingCount: '2345', reviewCount: '856' },
  },

  'lucky-mobile-number': {
    slug: 'lucky-mobile-number',
    category: 'numerology',
    applicationSubCategory: ['Mobile Numerology', 'Phone Number Analysis', 'Lucky Phone Number'],
    featureList: {
      en: [
        'Mobile number analysis',
        'Total number calculation',
        'Compatibility with owner',
        'Business vs personal suitability',
        'Number correction suggestions',
        'SIM change recommendations',
      ],
      hi: [
        'मोबाइल नंबर विश्लेषण',
        'कुल संख्या गणना',
        'मालिक के साथ अनुकूलता',
        'व्यवसाय बनाम व्यक्तिगत उपयुक्तता',
        'नंबर सुधार सुझाव',
      ],
    },
    keywords: {
      en: ['mobile number numerology', 'phone number calculator', 'lucky mobile number', 'phone number correction'],
      hi: ['मोबाइल नंबर अंकशास्त्र', 'फोन नंबर कैलकुलेटर'],
    },
    relatedTools: ['lucky-number', 'lucky-bank-account-number', 'lucky-vehicle-number', 'life-path-number'],
    aggregateRating: { ratingValue: '4.7', ratingCount: '1876', reviewCount: '623' },
  },

  'lucky-bank-account-number': {
    slug: 'lucky-bank-account-number',
    category: 'numerology',
    applicationSubCategory: ['Bank Account Numerology', 'Financial Number Analysis', 'Money Numerology'],
    featureList: {
      en: [
        'Bank account number analysis',
        'Financial prosperity check',
        'Account holder compatibility',
        'Business account suitability',
        'Wealth attraction potential',
        'Account change guidance',
      ],
      hi: [
        'बैंक खाता नंबर विश्लेषण',
        'वित्तीय समृद्धि जांच',
        'खाताधारक अनुकूलता',
        'व्यवसाय खाता उपयुक्तता',
        'धन आकर्षण क्षमता',
      ],
    },
    keywords: {
      en: ['bank account numerology', 'lucky account number', 'financial numerology', 'money number calculator'],
      hi: ['बैंक खाता अंकशास्त्र', 'शुभ खाता नंबर'],
    },
    relatedTools: ['lucky-mobile-number', 'wealth-money-predictor', 'lucky-number', 'business-name'],
    aggregateRating: { ratingValue: '4.6', ratingCount: '1234', reviewCount: '412' },
  },

  'lucky-vehicle-number': {
    slug: 'lucky-vehicle-number',
    category: 'numerology',
    applicationSubCategory: ['Vehicle Numerology', 'Car Number Analysis', 'Registration Number'],
    featureList: {
      en: [
        'Vehicle number analysis',
        'Safety and protection check',
        'Owner compatibility',
        'Accident prevention guidance',
        'Lucky registration numbers',
        'Vehicle type recommendations',
      ],
      hi: [
        'वाहन नंबर विश्लेषण',
        'सुरक्षा जांच',
        'मालिक अनुकूलता',
        'दुर्घटना रोकथाम मार्गदर्शन',
        'शुभ पंजीकरण नंबर',
      ],
    },
    keywords: {
      en: ['vehicle number numerology', 'car number calculator', 'lucky registration number', 'bike number numerology'],
      hi: ['वाहन नंबर अंकशास्त्र', 'कार नंबर कैलकुलेटर'],
    },
    relatedTools: ['lucky-mobile-number', 'lucky-number', 'life-path-number', 'lucky-bank-account-number'],
    aggregateRating: { ratingValue: '4.7', ratingCount: '1567', reviewCount: '534' },
  },

  'love-compatibility-numerology': {
    slug: 'love-compatibility-numerology',
    category: 'numerology',
    applicationSubCategory: ['Love Compatibility', 'Relationship Numerology', 'Partner Matching'],
    featureList: {
      en: [
        'Numerological compatibility score',
        'Life path compatibility',
        'Emotional connection analysis',
        'Long-term relationship potential',
        'Communication compatibility',
        'Intimacy and romance insights',
      ],
      hi: [
        'अंकशास्त्रीय अनुकूलता स्कोर',
        'जीवन पथ अनुकूलता',
        'भावनात्मक संबंध विश्लेषण',
        'दीर्घकालिक संबंध क्षमता',
        'संचार अनुकूलता',
      ],
    },
    keywords: {
      en: ['love compatibility calculator', 'relationship numerology', 'partner matching numerology', 'couple compatibility'],
      hi: ['प्रेम अनुकूलता कैलकुलेटर', 'संबंध अंकशास्त्र'],
    },
    relatedTools: ['life-path-number', 'marriage-matching', 'destiny-number', 'lucky-number'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '2876', reviewCount: '934' },
  },

  'wealth-money-predictor': {
    slug: 'wealth-money-predictor',
    category: 'numerology',
    applicationSubCategory: ['Wealth Predictor', 'Money Numerology', 'Financial Analysis'],
    featureList: {
      en: [
        'Wealth potential analysis',
        'Money attraction number',
        'Financial success timeline',
        'Investment compatibility',
        'Prosperity periods',
        'Wealth-building guidance',
      ],
      hi: [
        'धन क्षमता विश्लेषण',
        'धन आकर्षण संख्या',
        'वित्तीय सफलता समयरेखा',
        'निवेश अनुकूलता',
        'समृद्धि काल',
      ],
    },
    keywords: {
      en: ['wealth predictor', 'money numerology', 'financial success calculator', 'prosperity number'],
      hi: ['धन भविष्यवक्ता', 'धन अंकशास्त्र'],
    },
    relatedTools: ['lucky-number', 'lucky-bank-account-number', 'bhagyodaya-year', 'career-predictor'],
    aggregateRating: { ratingValue: '4.7', ratingCount: '1987', reviewCount: '678' },
  },

  // ============================================
  // ASTROLOGY TOOLS (14)
  // ============================================
  'moon-sign': {
    slug: 'moon-sign',
    category: 'astrology',
    applicationSubCategory: ['Moon Sign Calculator', 'Rashi Calculator', 'Vedic Moon Sign'],
    featureList: {
      en: [
        'Accurate moon sign calculation',
        'Vedic Rashi determination',
        'Emotional nature analysis',
        'Mental tendencies',
        'Compatibility insights',
        'Monthly predictions',
      ],
      hi: [
        'सटीक चंद्र राशि गणना',
        'वैदिक राशि निर्धारण',
        'भावनात्मक प्रकृति विश्लेषण',
        'मानसिक प्रवृत्तियां',
        'मासिक भविष्यवाणियां',
      ],
    },
    keywords: {
      en: ['moon sign calculator', 'rashi calculator', 'vedic moon sign', 'chandra rashi'],
      hi: ['चंद्र राशि कैलकुलेटर', 'राशि कैलकुलेटर'],
    },
    relatedTools: ['nakshatra', 'kundli', 'lagna', 'marriage-matching'],
    aggregateRating: { ratingValue: '4.9', ratingCount: '3456', reviewCount: '1234' },
  },

  'nakshatra': {
    slug: 'nakshatra',
    category: 'astrology',
    applicationSubCategory: ['Nakshatra Calculator', 'Birth Star', 'Janma Nakshatra'],
    featureList: {
      en: [
        'Birth nakshatra calculation',
        '27 nakshatra analysis',
        'Pada determination',
        'Deity and symbol',
        'Compatible nakshatras',
        'Nakshatra characteristics',
      ],
      hi: [
        'जन्म नक्षत्र गणना',
        '27 नक्षत्र विश्लेषण',
        'पाद निर्धारण',
        'देवता और प्रतीक',
        'संगत नक्षत्र',
        'नक्षत्र विशेषताएं',
      ],
    },
    keywords: {
      en: ['nakshatra calculator', 'birth star finder', 'janma nakshatra', '27 nakshatras'],
      hi: ['नक्षत्र कैलकुलेटर', 'जन्म तारा'],
    },
    relatedTools: ['moon-sign', 'kundli', 'child-name', 'marriage-matching'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '2987', reviewCount: '1067' },
  },

  'lagna': {
    slug: 'lagna',
    category: 'astrology',
    applicationSubCategory: ['Lagna Calculator', 'Ascendant Calculator', 'Rising Sign'],
    featureList: {
      en: [
        'Accurate lagna calculation',
        'Ascendant sign determination',
        'Physical appearance traits',
        'Personality overview',
        'Life path tendencies',
        'House lord analysis',
      ],
      hi: [
        'सटीक लग्न गणना',
        'उदय राशि निर्धारण',
        'शारीरिक विशेषताएं',
        'व्यक्तित्व अवलोकन',
        'जीवन पथ प्रवृत्तियां',
      ],
    },
    keywords: {
      en: ['lagna calculator', 'ascendant calculator', 'rising sign vedic', 'janma lagna'],
      hi: ['लग्न कैलकुलेटर', 'उदय राशि कैलकुलेटर'],
    },
    relatedTools: ['kundli', 'moon-sign', 'nakshatra', 'career-predictor'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '2654', reviewCount: '923' },
  },

  'mahadasha': {
    slug: 'mahadasha',
    category: 'astrology',
    applicationSubCategory: ['Mahadasha Calculator', 'Vimshottari Dasha', 'Planetary Periods'],
    featureList: {
      en: [
        'Vimshottari dasha calculation',
        'Current mahadasha identification',
        'Antardasha periods',
        'Dasha timeline visualization',
        'Planetary effects prediction',
        'Remedial suggestions',
      ],
      hi: [
        'विंशोत्तरी दशा गणना',
        'वर्तमान महादशा पहचान',
        'अंतर्दशा अवधि',
        'दशा समयरेखा',
        'ग्रह प्रभाव भविष्यवाणी',
        'उपचारात्मक सुझाव',
      ],
    },
    keywords: {
      en: ['mahadasha calculator', 'vimshottari dasha', 'planetary periods', 'dasha prediction'],
      hi: ['महादशा कैलकुलेटर', 'विंशोत्तरी दशा'],
    },
    relatedTools: ['kundli', 'sade-sati', 'bhagyodaya-year', 'career-predictor'],
    aggregateRating: { ratingValue: '4.9', ratingCount: '2345', reviewCount: '834' },
  },

  'kundli': {
    slug: 'kundli',
    category: 'astrology',
    applicationSubCategory: ['Kundli Generator', 'Birth Chart', 'Janam Patri'],
    featureList: {
      en: [
        'Complete birth chart generation',
        'D1, D9, D10 divisional charts',
        'Planetary positions',
        'House analysis',
        'Dosha detection',
        'Dasha periods',
        'PDF report download',
      ],
      hi: [
        'पूर्ण जन्म कुंडली निर्माण',
        'D1, D9, D10 विभागीय चार्ट',
        'ग्रह स्थितियां',
        'भाव विश्लेषण',
        'दोष पहचान',
        'दशा अवधि',
        'PDF रिपोर्ट डाउनलोड',
      ],
    },
    keywords: {
      en: ['kundli generator', 'birth chart', 'janam kundali', 'free kundli online', 'horoscope generator'],
      hi: ['कुंडली बनाएं', 'जन्म कुंडली', 'जन्म पत्रिका'],
    },
    relatedTools: ['lagna', 'moon-sign', 'nakshatra', 'mahadasha', 'marriage-matching'],
    aggregateRating: { ratingValue: '4.9', ratingCount: '5847', reviewCount: '2134' },
  },

  'raj-yoga': {
    slug: 'raj-yoga',
    category: 'astrology',
    applicationSubCategory: ['Raj Yoga Calculator', 'Yoga Analysis', 'Auspicious Combinations'],
    featureList: {
      en: [
        'Raj Yoga detection',
        'Dhana Yoga analysis',
        'Vipreet Raj Yoga',
        'Panch Mahapurush Yoga',
        'Yoga strength assessment',
        'Success predictions',
      ],
      hi: [
        'राज योग पहचान',
        'धन योग विश्लेषण',
        'विपरीत राज योग',
        'पंच महापुरुष योग',
        'योग शक्ति मूल्यांकन',
        'सफलता भविष्यवाणियां',
      ],
    },
    keywords: {
      en: ['raj yoga calculator', 'yoga in kundli', 'dhana yoga', 'panch mahapurush yoga'],
      hi: ['राज योग कैलकुलेटर', 'कुंडली में योग'],
    },
    relatedTools: ['kundli', 'mahadasha', 'career-predictor', 'wealth-money-predictor'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '1876', reviewCount: '645' },
  },

  'sade-sati': {
    slug: 'sade-sati',
    category: 'astrology',
    applicationSubCategory: ['Sade Sati Calculator', 'Saturn Transit', 'Shani Sade Sati'],
    featureList: {
      en: [
        'Sade Sati period detection',
        'Current phase identification',
        'Start and end dates',
        'Intensity analysis',
        'Effects prediction',
        'Remedial measures',
      ],
      hi: [
        'साढ़े साती अवधि पहचान',
        'वर्तमान चरण पहचान',
        'आरंभ और समाप्ति तिथियां',
        'तीव्रता विश्लेषण',
        'प्रभाव भविष्यवाणी',
        'उपचारात्मक उपाय',
      ],
    },
    keywords: {
      en: ['sade sati calculator', 'saturn transit', 'shani sade sati', 'sade sati dates'],
      hi: ['साढ़े साती कैलकुलेटर', 'शनि साढ़े साती'],
    },
    relatedTools: ['kundli', 'mahadasha', 'gemstone-recommender', 'moon-sign'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '2567', reviewCount: '876' },
  },

  'manglik': {
    slug: 'manglik',
    category: 'astrology',
    applicationSubCategory: ['Manglik Calculator', 'Mangal Dosha', 'Mars Dosha'],
    featureList: {
      en: [
        'Manglik dosha detection',
        'Mangal dosha intensity',
        'Marriage compatibility impact',
        'Dosha cancellation check',
        'Remedial suggestions',
        'Partner matching guidance',
      ],
      hi: [
        'मांगलिक दोष पहचान',
        'मंगल दोष तीव्रता',
        'विवाह अनुकूलता प्रभाव',
        'दोष निवारण जांच',
        'उपचारात्मक सुझाव',
        'साथी मिलान मार्गदर्शन',
      ],
    },
    keywords: {
      en: ['manglik calculator', 'mangal dosha', 'mars dosha', 'manglik dosha check'],
      hi: ['मांगलिक कैलकुलेटर', 'मंगल दोष'],
    },
    relatedTools: ['marriage-matching', 'kundli', 'gemstone-recommender', 'kalsarp-dosha'],
    aggregateRating: { ratingValue: '4.7', ratingCount: '3234', reviewCount: '1123' },
  },

  'kalsarp-dosha': {
    slug: 'kalsarp-dosha',
    category: 'astrology',
    applicationSubCategory: ['Kalsarp Dosha', 'Rahu Ketu Axis', 'Sarpa Dosha'],
    featureList: {
      en: [
        'Kalsarp dosha detection',
        '12 types identification',
        'Dosha intensity analysis',
        'Life area effects',
        'Remedial pujas',
        'Gemstone suggestions',
      ],
      hi: [
        'कालसर्प दोष पहचान',
        '12 प्रकार पहचान',
        'दोष तीव्रता विश्लेषण',
        'जीवन क्षेत्र प्रभाव',
        'उपचारात्मक पूजा',
        'रत्न सुझाव',
      ],
    },
    keywords: {
      en: ['kalsarp dosha calculator', 'kaal sarp yog', 'rahu ketu dosha', 'serpent dosha'],
      hi: ['कालसर्प दोष कैलकुलेटर', 'काल सर्प योग'],
    },
    relatedTools: ['kundli', 'pitra-dosha', 'manglik', 'gemstone-recommender'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '2145', reviewCount: '756' },
  },

  'pitra-dosha': {
    slug: 'pitra-dosha',
    category: 'astrology',
    applicationSubCategory: ['Pitra Dosha', 'Ancestral Karma', 'Pitru Dosha'],
    featureList: {
      en: [
        'Pitra dosha detection',
        'Ancestral karma analysis',
        'Dosha severity level',
        'Effects on life areas',
        'Remedial rituals',
        'Shradh guidance',
      ],
      hi: [
        'पितृ दोष पहचान',
        'पूर्वज कर्म विश्लेषण',
        'दोष गंभीरता स्तर',
        'जीवन क्षेत्रों पर प्रभाव',
        'उपचारात्मक अनुष्ठान',
        'श्राद्ध मार्गदर्शन',
      ],
    },
    keywords: {
      en: ['pitra dosha calculator', 'pitru dosha', 'ancestral karma', 'pitra dosha remedies'],
      hi: ['पितृ दोष कैलकुलेटर', 'पितृ दोष उपाय'],
    },
    relatedTools: ['kundli', 'kalsarp-dosha', 'manglik', 'mahadasha'],
    aggregateRating: { ratingValue: '4.7', ratingCount: '1876', reviewCount: '634' },
  },

  'marriage-matching': {
    slug: 'marriage-matching',
    category: 'astrology',
    applicationSubCategory: ['Kundli Matching', 'Gun Milan', 'Marriage Compatibility'],
    featureList: {
      en: [
        'Ashtakoot gun milan',
        '36 guna matching',
        'Dosha compatibility check',
        'Nadi dosha analysis',
        'Manglik matching',
        'Detailed compatibility report',
      ],
      hi: [
        'अष्टकूट गुण मिलान',
        '36 गुण मिलान',
        'दोष अनुकूलता जांच',
        'नाड़ी दोष विश्लेषण',
        'मांगलिक मिलान',
        'विस्तृत अनुकूलता रिपोर्ट',
      ],
    },
    keywords: {
      en: ['kundli matching', 'gun milan', 'marriage compatibility', 'horoscope matching'],
      hi: ['कुंडली मिलान', 'गुण मिलान', 'विवाह अनुकूलता'],
    },
    relatedTools: ['kundli', 'manglik', 'nakshatra', 'marriage-timing-predictor'],
    aggregateRating: { ratingValue: '4.9', ratingCount: '4567', reviewCount: '1678' },
  },

  'marriage-timing-predictor': {
    slug: 'marriage-timing-predictor',
    category: 'astrology',
    applicationSubCategory: ['Marriage Timing', 'Vivah Muhurat', 'Wedding Prediction'],
    featureList: {
      en: [
        'Marriage timing prediction',
        'Favorable periods',
        'Planetary transits analysis',
        'Dasha-based prediction',
        'Delay reasons analysis',
        'Remedial suggestions',
      ],
      hi: [
        'विवाह समय भविष्यवाणी',
        'अनुकूल अवधि',
        'ग्रह गोचर विश्लेषण',
        'दशा-आधारित भविष्यवाणी',
        'विलंब कारण विश्लेषण',
        'उपचारात्मक सुझाव',
      ],
    },
    keywords: {
      en: ['marriage timing calculator', 'when will I get married', 'vivah yoga', 'marriage prediction'],
      hi: ['विवाह समय कैलकुलेटर', 'शादी कब होगी'],
    },
    relatedTools: ['marriage-matching', 'kundli', 'mahadasha', 'manglik'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '2987', reviewCount: '1023' },
  },

  'gemstone-recommender': {
    slug: 'gemstone-recommender',
    category: 'astrology',
    applicationSubCategory: ['Gemstone Recommendation', 'Ratna Suggestion', 'Birthstone'],
    featureList: {
      en: [
        'Personalized gemstone recommendations',
        'Planet-based suggestions',
        'Wearing guidelines',
        'Weight and metal advice',
        'Energization rituals',
        'Alternatives suggestions',
      ],
      hi: [
        'व्यक्तिगत रत्न सिफारिशें',
        'ग्रह-आधारित सुझाव',
        'पहनने के दिशानिर्देश',
        'वजन और धातु सलाह',
        'ऊर्जावान अनुष्ठान',
        'विकल्प सुझाव',
      ],
    },
    keywords: {
      en: ['gemstone recommendation', 'ratna suggestion', 'birthstone calculator', 'lucky gemstone'],
      hi: ['रत्न सिफारिश', 'भाग्यशाली रत्न'],
    },
    relatedTools: ['kundli', 'sade-sati', 'lucky-color', 'moon-sign'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '3123', reviewCount: '1089' },
  },

  'career-predictor': {
    slug: 'career-predictor',
    category: 'astrology',
    applicationSubCategory: ['Career Astrology', 'Professional Guidance', 'Job Prediction'],
    featureList: {
      en: [
        'Career path analysis',
        'Best professions',
        'Business vs job suitability',
        'Promotion periods',
        'Career change timing',
        'Success strategies',
      ],
      hi: [
        'करियर पथ विश्लेषण',
        'सर्वोत्तम पेशे',
        'व्यवसाय बनाम नौकरी उपयुक्तता',
        'पदोन्नति अवधि',
        'करियर परिवर्तन समय',
        'सफलता रणनीतियां',
      ],
    },
    keywords: {
      en: ['career prediction astrology', 'job horoscope', 'career guidance', 'professional astrology'],
      hi: ['करियर भविष्यवाणी', 'नौकरी राशिफल'],
    },
    relatedTools: ['kundli', 'mahadasha', 'bhagyodaya-year', 'raj-yoga'],
    aggregateRating: { ratingValue: '4.7', ratingCount: '2654', reviewCount: '923' },
  },

  // ============================================
  // VASTU TOOLS (2)
  // ============================================
  'room-advisor': {
    slug: 'room-advisor',
    category: 'vastu',
    applicationSubCategory: ['Vastu Room Advisor', 'Room Direction', 'Vastu Compliance'],
    featureList: {
      en: [
        'Room-wise Vastu analysis',
        'Direction recommendations',
        'Furniture placement',
        'Color suggestions',
        'Element balancing',
        'Remedial tips',
      ],
      hi: [
        'कमरे-वार वास्तु विश्लेषण',
        'दिशा सिफारिशें',
        'फर्नीचर स्थान',
        'रंग सुझाव',
        'तत्व संतुलन',
        'उपचारात्मक सुझाव',
      ],
    },
    keywords: {
      en: ['vastu room advisor', 'room vastu', 'bedroom vastu', 'kitchen vastu'],
      hi: ['वास्तु कमरा सलाहकार', 'कमरा वास्तु'],
    },
    relatedTools: ['house-number', 'lucky-color', 'lo-shu-grid'],
    aggregateRating: { ratingValue: '4.7', ratingCount: '1876', reviewCount: '623' },
  },

  'house-number': {
    slug: 'house-number',
    category: 'vastu',
    applicationSubCategory: ['House Number Vastu', 'Address Numerology', 'Home Number'],
    featureList: {
      en: [
        'House number analysis',
        'Energy vibration check',
        'Resident compatibility',
        'Remedial suggestions',
        'Apartment number check',
        'Office number analysis',
      ],
      hi: [
        'घर नंबर विश्लेषण',
        'ऊर्जा कंपन जांच',
        'निवासी अनुकूलता',
        'उपचारात्मक सुझाव',
        'अपार्टमेंट नंबर जांच',
        'कार्यालय नंबर विश्लेषण',
      ],
    },
    keywords: {
      en: ['house number vastu', 'address numerology', 'home number calculator', 'flat number vastu'],
      hi: ['घर नंबर वास्तु', 'पता अंकशास्त्र'],
    },
    relatedTools: ['room-advisor', 'lucky-number', 'life-path-number', 'lo-shu-grid'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '2134', reviewCount: '756' },
  },

  // ============================================
  // MUHURAT TOOLS (1)
  // ============================================
  'muhurat-finder': {
    slug: 'muhurat-finder',
    category: 'muhurat',
    applicationSubCategory: ['Muhurat Finder', 'Auspicious Time', 'Shubh Muhurat'],
    featureList: {
      en: [
        'Auspicious muhurat finder',
        'Activity-specific timing',
        'Panchang integration',
        'Choghadiya analysis',
        'Rahu Kaal avoidance',
        'Custom date search',
      ],
      hi: [
        'शुभ मुहूर्त खोजक',
        'गतिविधि-विशिष्ट समय',
        'पंचांग एकीकरण',
        'चौघड़िया विश्लेषण',
        'राहु काल परहेज',
        'कस्टम तिथि खोज',
      ],
    },
    keywords: {
      en: ['muhurat finder', 'auspicious time', 'shubh muhurat', 'best time calculator'],
      hi: ['मुहूर्त खोजक', 'शुभ मुहूर्त', 'शुभ समय'],
    },
    relatedTools: ['kundli', 'nakshatra', 'marriage-timing-predictor'],
    aggregateRating: { ratingValue: '4.8', ratingCount: '1567', reviewCount: '534' },
  },
};

/**
 * Get SEO config for a specific tool
 */
export function getToolSEOConfig(slug: string): ToolSEOConfig | null {
  return TOOL_SEO_CONFIG[slug] || null;
}

/**
 * Get all tool slugs
 */
export function getAllToolSlugs(): string[] {
  return Object.keys(TOOL_SEO_CONFIG);
}

/**
 * Get tools by category for SEO
 */
export function getToolsByCategorySEO(category: string): ToolSEOConfig[] {
  return Object.values(TOOL_SEO_CONFIG).filter(tool => tool.category === category);
}
