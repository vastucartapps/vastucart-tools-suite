/**
 * Kundli Generator Data
 * Display data for birth chart visualization
 */

export const PLANET_ABBREVIATIONS: Record<string, { en: string; hi: string }> = {
  sun: { en: 'Su', hi: 'सू' },
  moon: { en: 'Mo', hi: 'चं' },
  mars: { en: 'Ma', hi: 'मं' },
  mercury: { en: 'Me', hi: 'बु' },
  jupiter: { en: 'Ju', hi: 'गु' },
  venus: { en: 'Ve', hi: 'शु' },
  saturn: { en: 'Sa', hi: 'श' },
  rahu: { en: 'Ra', hi: 'रा' },
  ketu: { en: 'Ke', hi: 'के' },
};

export const PLANET_FULL_NAMES: Record<string, { en: string; hi: string }> = {
  sun: { en: 'Sun', hi: 'सूर्य' },
  moon: { en: 'Moon', hi: 'चंद्रमा' },
  mars: { en: 'Mars', hi: 'मंगल' },
  mercury: { en: 'Mercury', hi: 'बुध' },
  jupiter: { en: 'Jupiter', hi: 'बृहस्पति' },
  venus: { en: 'Venus', hi: 'शुक्र' },
  saturn: { en: 'Saturn', hi: 'शनि' },
  rahu: { en: 'Rahu', hi: 'राहु' },
  ketu: { en: 'Ketu', hi: 'केतु' },
};

export const RASHI_NAMES: { en: string; hi: string; symbol: string }[] = [
  { en: 'Aries', hi: 'मेष', symbol: '♈' },
  { en: 'Taurus', hi: 'वृषभ', symbol: '♉' },
  { en: 'Gemini', hi: 'मिथुन', symbol: '♊' },
  { en: 'Cancer', hi: 'कर्क', symbol: '♋' },
  { en: 'Leo', hi: 'सिंह', symbol: '♌' },
  { en: 'Virgo', hi: 'कन्या', symbol: '♍' },
  { en: 'Libra', hi: 'तुला', symbol: '♎' },
  { en: 'Scorpio', hi: 'वृश्चिक', symbol: '♏' },
  { en: 'Sagittarius', hi: 'धनु', symbol: '♐' },
  { en: 'Capricorn', hi: 'मकर', symbol: '♑' },
  { en: 'Aquarius', hi: 'कुंभ', symbol: '♒' },
  { en: 'Pisces', hi: 'मीन', symbol: '♓' },
];

export const NAKSHATRA_NAMES: { en: string; hi: string }[] = [
  { en: 'Ashwini', hi: 'अश्विनी' },
  { en: 'Bharani', hi: 'भरणी' },
  { en: 'Krittika', hi: 'कृत्तिका' },
  { en: 'Rohini', hi: 'रोहिणी' },
  { en: 'Mrigashira', hi: 'मृगशिरा' },
  { en: 'Ardra', hi: 'आर्द्रा' },
  { en: 'Punarvasu', hi: 'पुनर्वसु' },
  { en: 'Pushya', hi: 'पुष्य' },
  { en: 'Ashlesha', hi: 'आश्लेषा' },
  { en: 'Magha', hi: 'मघा' },
  { en: 'Purva Phalguni', hi: 'पूर्वा फाल्गुनी' },
  { en: 'Uttara Phalguni', hi: 'उत्तरा फाल्गुनी' },
  { en: 'Hasta', hi: 'हस्त' },
  { en: 'Chitra', hi: 'चित्रा' },
  { en: 'Swati', hi: 'स्वाति' },
  { en: 'Vishakha', hi: 'विशाखा' },
  { en: 'Anuradha', hi: 'अनुराधा' },
  { en: 'Jyeshtha', hi: 'ज्येष्ठा' },
  { en: 'Mula', hi: 'मूल' },
  { en: 'Purva Ashadha', hi: 'पूर्वाषाढ़ा' },
  { en: 'Uttara Ashadha', hi: 'उत्तराषाढ़ा' },
  { en: 'Shravana', hi: 'श्रवण' },
  { en: 'Dhanishtha', hi: 'धनिष्ठा' },
  { en: 'Shatabhisha', hi: 'शतभिषा' },
  { en: 'Purva Bhadrapada', hi: 'पूर्वभाद्रपद' },
  { en: 'Uttara Bhadrapada', hi: 'उत्तरभाद्रपद' },
  { en: 'Revati', hi: 'रेवती' },
];

export const HOUSE_NAMES: { en: string; hi: string }[] = [
  { en: '1st House', hi: 'पहला भाव' },
  { en: '2nd House', hi: 'दूसरा भाव' },
  { en: '3rd House', hi: 'तीसरा भाव' },
  { en: '4th House', hi: 'चौथा भाव' },
  { en: '5th House', hi: 'पांचवां भाव' },
  { en: '6th House', hi: 'छठा भाव' },
  { en: '7th House', hi: 'सातवां भाव' },
  { en: '8th House', hi: 'आठवां भाव' },
  { en: '9th House', hi: 'नौवां भाव' },
  { en: '10th House', hi: 'दसवां भाव' },
  { en: '11th House', hi: 'ग्यारहवां भाव' },
  { en: '12th House', hi: 'बारहवां भाव' },
];

export const HOUSE_SIGNIFICATIONS: { en: string; hi: string }[] = [
  {
    en: 'Your personality, appearance, and how others see you. Planets here shape your identity and overall health.',
    hi: 'आपका व्यक्तित्व, रूप-रंग और दूसरे आपको कैसे देखते हैं। यहाँ के ग्रह आपकी पहचान और स्वास्थ्य को आकार देते हैं।'
  },
  {
    en: 'Your money, savings, and family life. Planets here influence how you earn, speak, and what you value most.',
    hi: 'आपका धन, बचत और पारिवारिक जीवन। यहाँ के ग्रह आपकी कमाई, बोलचाल और मूल्यों को प्रभावित करते हैं।'
  },
  {
    en: 'Your siblings, courage, and communication skills. Planets here affect your bravery and short travels.',
    hi: 'आपके भाई-बहन, साहस और संवाद कौशल। यहाँ के ग्रह आपकी हिम्मत और छोटी यात्राओं को प्रभावित करते हैं।'
  },
  {
    en: 'Your mother, home, and inner peace. Planets here shape your domestic happiness, property, and vehicles.',
    hi: 'आपकी माँ, घर और मानसिक शांति। यहाँ के ग्रह घरेलू सुख, संपत्ति और वाहन को प्रभावित करते हैं।'
  },
  {
    en: 'Your children, creativity, and intelligence. Planets here influence romance, education, and artistic talents.',
    hi: 'आपके बच्चे, रचनात्मकता और बुद्धि। यहाँ के ग्रह प्रेम, शिक्षा और कलात्मक प्रतिभा को प्रभावित करते हैं।'
  },
  {
    en: 'Your health challenges, enemies, and daily work. Planets here show obstacles you may face and how to overcome them.',
    hi: 'आपकी स्वास्थ्य चुनौतियाँ, शत्रु और दैनिक कार्य। यहाँ के ग्रह बाधाओं और उन्हें पार करने के तरीके दिखाते हैं।'
  },
  {
    en: 'Who you marry and your business partnerships. Planets here shape your relationships and how you connect with others.',
    hi: 'आपका विवाह और व्यापारिक साझेदारी। यहाँ के ग्रह आपके रिश्तों और दूसरों से जुड़ाव को आकार देते हैं।'
  },
  {
    en: 'Life span, sudden changes, and hidden matters. Planets here reveal transformations, inheritance, and research abilities.',
    hi: 'आयु, अचानक बदलाव और छुपे मामले। यहाँ के ग्रह परिवर्तन, विरासत और शोध क्षमता दर्शाते हैं।'
  },
  {
    en: 'Your father, luck, and higher wisdom. Planets here influence fortune, long journeys, and spiritual growth.',
    hi: 'आपके पिता, भाग्य और उच्च ज्ञान। यहाँ के ग्रह किस्मत, लंबी यात्राओं और आध्यात्मिक विकास को प्रभावित करते हैं।'
  },
  {
    en: 'Your career, reputation, and public image. Planets here determine your profession, success, and authority.',
    hi: 'आपका करियर, प्रतिष्ठा और सार्वजनिक छवि। यहाँ के ग्रह पेशा, सफलता और अधिकार निर्धारित करते हैं।'
  },
  {
    en: 'Your income, dreams, and social circle. Planets here show gains, friendships, and fulfillment of desires.',
    hi: 'आपकी आय, सपने और सामाजिक दायरा। यहाँ के ग्रह लाभ, मित्रता और इच्छापूर्ति दर्शाते हैं।'
  },
  {
    en: 'Your expenses, spirituality, and foreign connections. Planets here reveal losses, isolation, and path to inner peace.',
    hi: 'आपके खर्च, आध्यात्मिकता और विदेशी संबंध। यहाँ के ग्रह हानि, एकांत और आंतरिक शांति का मार्ग दर्शाते हैं।'
  },
];

// North Indian chart house positions (relative coordinates for SVG)
export const NORTH_INDIAN_HOUSES = [
  { id: 1, x: 1, y: 0, label: '1' },   // Top center - Lagna
  { id: 2, x: 0, y: 0, label: '2' },   // Top left
  { id: 3, x: 0, y: 1, label: '3' },   // Left top
  { id: 4, x: 0, y: 2, label: '4' },   // Left center
  { id: 5, x: 0, y: 3, label: '5' },   // Left bottom
  { id: 6, x: 1, y: 3, label: '6' },   // Bottom left
  { id: 7, x: 2, y: 3, label: '7' },   // Bottom center
  { id: 8, x: 3, y: 3, label: '8' },   // Bottom right
  { id: 9, x: 3, y: 2, label: '9' },   // Right bottom
  { id: 10, x: 3, y: 1, label: '10' }, // Right center
  { id: 11, x: 3, y: 0, label: '11' }, // Right top
  { id: 12, x: 2, y: 0, label: '12' }, // Top right
];

// Planet nature colors for chart
export const PLANET_COLORS: Record<string, string> = {
  sun: '#FF9800',     // Orange
  moon: '#E8E8E8',    // Silver/White
  mars: '#F44336',    // Red
  mercury: '#4CAF50', // Green
  jupiter: '#FFD700', // Gold
  venus: '#9C27B0',   // Purple/Violet
  saturn: '#607D8B',  // Blue-grey
  rahu: '#3F51B5',    // Indigo
  ketu: '#795548',    // Brown
};

// Planet karakas (significations)
export const PLANET_KARAKAS: Record<string, { en: string; hi: string }> = {
  sun: { en: 'Soul, father, authority, government', hi: 'आत्मा, पिता, अधिकार, सरकार' },
  moon: { en: 'Mind, mother, emotions, public', hi: 'मन, माता, भावनाएं, जनता' },
  mars: { en: 'Energy, siblings, property, courage', hi: 'ऊर्जा, भाई-बहन, संपत्ति, साहस' },
  mercury: { en: 'Intelligence, speech, business, communication', hi: 'बुद्धि, वाणी, व्यापार, संचार' },
  jupiter: { en: 'Wisdom, children, guru, fortune', hi: 'ज्ञान, संतान, गुरु, भाग्य' },
  venus: { en: 'Love, marriage, arts, luxury', hi: 'प्रेम, विवाह, कला, विलासिता' },
  saturn: { en: 'Longevity, karma, discipline, service', hi: 'आयु, कर्म, अनुशासन, सेवा' },
  rahu: { en: 'Obsession, foreigners, illusion, technology', hi: 'जुनून, विदेशी, माया, तकनीक' },
  ketu: { en: 'Spirituality, moksha, past karma, detachment', hi: 'आध्यात्मिकता, मोक्ष, पूर्व कर्म, वैराग्य' },
};

// Format degree to DMS
export function formatDegree(longitude: number): string {
  const normalizedLong = ((longitude % 30) + 30) % 30;
  const degrees = Math.floor(normalizedLong);
  const minutesDecimal = (normalizedLong - degrees) * 60;
  const minutes = Math.floor(minutesDecimal);
  const seconds = Math.round((minutesDecimal - minutes) * 60);
  return `${degrees}°${minutes}'${seconds}"`;
}

// Get retrograde status
export function getRetrograde(planetId: string, longitude: number, prevLongitude?: number): boolean {
  // Rahu and Ketu are always retrograde
  if (planetId === 'rahu' || planetId === 'ketu') return true;
  // For other planets, would need to compare with previous position
  return false;
}
