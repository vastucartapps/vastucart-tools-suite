export interface BlogPost {
  slug: string;
  title: {
    en: string;
    hi: string;
  };
  excerpt: {
    en: string;
    hi: string;
  };
  content: {
    en: string;
    hi: string;
  };
  category: 'numerology' | 'astrology' | 'vastu' | 'general';
  image?: string;
  author: string;
  publishedAt: string;
  readingTime: number; // in minutes
  featured?: boolean;
  relatedTools?: string[]; // tool slugs
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-numerology',
    title: {
      en: 'What is Numerology? A Complete Beginner\'s Guide',
      hi: 'अंकशास्त्र क्या है? एक संपूर्ण शुरुआती गाइड',
    },
    excerpt: {
      en: 'Discover the ancient science of numbers and how they influence your life, personality, and destiny. Learn the basics of numerology in this comprehensive guide.',
      hi: 'संख्याओं के प्राचीन विज्ञान की खोज करें और जानें कि वे आपके जीवन, व्यक्तित्व और भाग्य को कैसे प्रभावित करते हैं।',
    },
    content: {
      en: `
## What is Numerology?

Numerology is an ancient metaphysical science that studies the mystical relationship between numbers and living beings. It is based on the belief that numbers carry specific vibrations and energies that can influence our lives in profound ways.

### The Origins of Numerology

Numerology has roots in several ancient civilizations:

- **Pythagorean Numerology**: Developed by the Greek mathematician Pythagoras around 500 BCE
- **Chaldean Numerology**: One of the oldest systems, originating from ancient Babylon
- **Vedic Numerology**: Part of the ancient Indian Vedic traditions

### Core Numbers in Numerology

There are several key numbers that numerologists analyze:

1. **Life Path Number**: Calculated from your birth date, this reveals your life's purpose
2. **Destiny Number**: Derived from your full name, showing your life's goals
3. **Soul Urge Number**: Reveals your inner desires and motivations
4. **Birthday Number**: Simply the day you were born, adding a unique energy

### How Numbers Affect Your Life

Each number from 1-9 carries unique characteristics:

- **1**: Leadership, independence, new beginnings
- **2**: Partnership, diplomacy, sensitivity
- **3**: Creativity, expression, joy
- **4**: Stability, hard work, foundation
- **5**: Freedom, change, adventure
- **6**: Nurturing, responsibility, harmony
- **7**: Spirituality, introspection, wisdom
- **8**: Abundance, power, success
- **9**: Completion, humanitarianism, wisdom

### Getting Started with Numerology

The easiest way to begin your numerology journey is to calculate your Life Path Number. Simply add all the digits of your birth date until you get a single digit (or a master number: 11, 22, 33).

Try our free Life Path Number Calculator to discover your number!
      `,
      hi: `
## अंकशास्त्र क्या है?

अंकशास्त्र एक प्राचीन आध्यात्मिक विज्ञान है जो संख्याओं और जीवित प्राणियों के बीच रहस्यमय संबंध का अध्ययन करता है। यह इस विश्वास पर आधारित है कि संख्याएं विशिष्ट कंपन और ऊर्जाएं वहन करती हैं।

### अंकशास्त्र की उत्पत्ति

अंकशास्त्र की जड़ें कई प्राचीन सभ्यताओं में हैं:

- **पाइथागोरियन अंकशास्त्र**: ग्रीक गणितज्ञ पाइथागोरस द्वारा विकसित
- **कैल्डियन अंकशास्त्र**: सबसे पुरानी प्रणालियों में से एक
- **वैदिक अंकशास्त्र**: प्राचीन भारतीय वैदिक परंपराओं का हिस्सा

### अंकशास्त्र में मुख्य संख्याएं

1. **मूलांक**: आपकी जन्म तिथि से गणना की जाती है
2. **भाग्यांक**: आपके पूरे नाम से प्राप्त
3. **आत्मा अंक**: आपकी आंतरिक इच्छाओं को प्रकट करता है

### संख्याएं आपके जीवन को कैसे प्रभावित करती हैं

प्रत्येक संख्या 1-9 अद्वितीय विशेषताएं रखती है।

अपनी मूलांक संख्या जानने के लिए हमारा मुफ्त कैलकुलेटर आज़माएं!
      `,
    },
    category: 'numerology',
    author: 'Divine Life Team',
    publishedAt: '2024-12-01',
    readingTime: 8,
    featured: true,
    relatedTools: ['life-path-number', 'chaldean-numerology', 'destiny-number'],
  },
  {
    slug: 'understanding-your-kundli',
    title: {
      en: 'Understanding Your Kundli: A Guide to Vedic Birth Charts',
      hi: 'अपनी कुंडली को समझना: वैदिक जन्म कुंडली की गाइड',
    },
    excerpt: {
      en: 'Learn how to read and interpret your Vedic birth chart (Kundli). Understand the houses, planets, and their significance in your life.',
      hi: 'अपनी वैदिक जन्म कुंडली को पढ़ना और समझना सीखें। भावों, ग्रहों और उनके महत्व को जानें।',
    },
    content: {
      en: `
## What is a Kundli?

A Kundli, also known as a birth chart or horoscope, is a map of the celestial bodies at the exact moment of your birth. In Vedic astrology, this chart reveals the cosmic influences that shape your personality, relationships, career, and life events.

### The 12 Houses

Each house in a Kundli represents different aspects of life:

1. **First House (Lagna)**: Self, personality, physical appearance
2. **Second House**: Wealth, family, speech
3. **Third House**: Siblings, communication, courage
4. **Fourth House**: Mother, home, emotional foundation
5. **Fifth House**: Children, creativity, romance
6. **Sixth House**: Health, enemies, daily work
7. **Seventh House**: Marriage, partnerships, business
8. **Eighth House**: Transformation, occult, inheritance
9. **Ninth House**: Fortune, higher learning, father
10. **Tenth House**: Career, reputation, public life
11. **Eleventh House**: Gains, friendships, aspirations
12. **Twelfth House**: Spirituality, losses, foreign lands

### The Nine Planets (Navagraha)

Vedic astrology considers nine celestial bodies:

- Sun (Surya) - Soul, authority, father
- Moon (Chandra) - Mind, emotions, mother
- Mars (Mangal) - Energy, courage, siblings
- Mercury (Budh) - Intelligence, communication
- Jupiter (Guru) - Wisdom, expansion, teachers
- Venus (Shukra) - Love, beauty, luxuries
- Saturn (Shani) - Karma, discipline, delays
- Rahu - Obsession, material desires
- Ketu - Spirituality, detachment

Generate your free Kundli with our calculator!
      `,
      hi: `
## कुंडली क्या है?

कुंडली, जिसे जन्म कुंडली या राशिफल भी कहा जाता है, आपके जन्म के सटीक समय पर आकाशीय पिंडों का एक नक्शा है।

### 12 भाव

कुंडली में प्रत्येक भाव जीवन के विभिन्न पहलुओं का प्रतिनिधित्व करता है।

### नौ ग्रह (नवग्रह)

वैदिक ज्योतिष में नौ आकाशीय पिंडों पर विचार किया जाता है।

हमारे कैलकुलेटर से अपनी मुफ्त कुंडली बनाएं!
      `,
    },
    category: 'astrology',
    author: 'Divine Life Team',
    publishedAt: '2024-11-15',
    readingTime: 10,
    featured: true,
    relatedTools: ['kundli', 'moon-sign', 'nakshatra'],
  },
  {
    slug: 'vastu-tips-for-home',
    title: {
      en: '10 Essential Vastu Tips for a Harmonious Home',
      hi: 'सुखी घर के लिए 10 आवश्यक वास्तु टिप्स',
    },
    excerpt: {
      en: 'Transform your living space with these practical Vastu Shastra tips. Learn how to create positive energy flow in your home.',
      hi: 'इन व्यावहारिक वास्तु शास्त्र टिप्स से अपने घर को बदलें। अपने घर में सकारात्मक ऊर्जा प्रवाह बनाना सीखें।',
    },
    content: {
      en: `
## Introduction to Vastu for Homes

Vastu Shastra is the ancient Indian science of architecture and design that aims to create harmonious living spaces by aligning with natural forces and cosmic energies.

### 10 Essential Vastu Tips

1. **Main Entrance**: Should ideally face North, East, or North-East
2. **Kitchen Placement**: South-East is the ideal direction for the kitchen
3. **Master Bedroom**: South-West corner brings stability
4. **Pooja Room**: North-East corner is most auspicious
5. **Living Room**: North or East facing promotes positive energy
6. **Bathroom**: Avoid North-East, prefer West or South
7. **Staircase**: Should be in South or West, never in center
8. **Water Elements**: North-East is ideal for water features
9. **Mirror Placement**: Avoid mirrors facing the bed
10. **Declutter**: Keep spaces clean for energy flow

### Quick Remedies

- Place a Tulsi plant in the North-East
- Use salt water to cleanse negative energy
- Keep the center of the home (Brahmasthan) open
- Ensure adequate natural light

Use our Room Advisor tool to check your room's Vastu score!
      `,
      hi: `
## घर के लिए वास्तु परिचय

वास्तु शास्त्र वास्तुकला और डिज़ाइन का प्राचीन भारतीय विज्ञान है।

### 10 आवश्यक वास्तु टिप्स

1. **मुख्य प्रवेश द्वार**: आदर्श रूप से उत्तर, पूर्व या उत्तर-पूर्व की ओर होना चाहिए
2. **रसोई**: दक्षिण-पूर्व आदर्श दिशा है
3. **मास्टर बेडरूम**: दक्षिण-पश्चिम कोना स्थिरता लाता है

### त्वरित उपाय

- उत्तर-पूर्व में तुलसी का पौधा रखें
- नकारात्मक ऊर्जा को साफ करने के लिए नमक के पानी का उपयोग करें

अपने कमरे का वास्तु स्कोर जांचने के लिए हमारा रूम एडवाइज़र टूल इस्तेमाल करें!
      `,
    },
    category: 'vastu',
    author: 'Divine Life Team',
    publishedAt: '2024-11-01',
    readingTime: 6,
    featured: false,
    relatedTools: ['room-advisor', 'house-number'],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
