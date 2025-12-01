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
  { en: '1st House (Lagna)', hi: 'प्रथम भाव (लग्न)' },
  { en: '2nd House (Dhana)', hi: 'द्वितीय भाव (धन)' },
  { en: '3rd House (Sahaj)', hi: 'तृतीय भाव (सहज)' },
  { en: '4th House (Sukha)', hi: 'चतुर्थ भाव (सुख)' },
  { en: '5th House (Putra)', hi: 'पंचम भाव (पुत्र)' },
  { en: '6th House (Ripu)', hi: 'षष्ठ भाव (रिपु)' },
  { en: '7th House (Kalatra)', hi: 'सप्तम भाव (कलत्र)' },
  { en: '8th House (Ayu)', hi: 'अष्टम भाव (आयु)' },
  { en: '9th House (Dharma)', hi: 'नवम भाव (धर्म)' },
  { en: '10th House (Karma)', hi: 'दशम भाव (कर्म)' },
  { en: '11th House (Labha)', hi: 'एकादश भाव (लाभ)' },
  { en: '12th House (Vyaya)', hi: 'द्वादश भाव (व्यय)' },
];

export const HOUSE_SIGNIFICATIONS: { en: string; hi: string }[] = [
  { en: 'Self, personality, health, body', hi: 'स्वयं, व्यक्तित्व, स्वास्थ्य, शरीर' },
  { en: 'Wealth, family, speech, food', hi: 'धन, परिवार, वाणी, भोजन' },
  { en: 'Siblings, courage, short travels', hi: 'भाई-बहन, साहस, छोटी यात्राएं' },
  { en: 'Mother, home, vehicles, comfort', hi: 'माता, घर, वाहन, सुख' },
  { en: 'Children, intelligence, creativity', hi: 'संतान, बुद्धि, रचनात्मकता' },
  { en: 'Enemies, diseases, debts, service', hi: 'शत्रु, रोग, ऋण, सेवा' },
  { en: 'Marriage, partnerships, business', hi: 'विवाह, साझेदारी, व्यापार' },
  { en: 'Longevity, obstacles, inheritance', hi: 'आयु, बाधाएं, विरासत' },
  { en: 'Father, luck, religion, higher learning', hi: 'पिता, भाग्य, धर्म, उच्च शिक्षा' },
  { en: 'Career, fame, authority, government', hi: 'करियर, प्रसिद्धि, अधिकार, सरकार' },
  { en: 'Gains, income, elder siblings, desires', hi: 'लाभ, आय, बड़े भाई-बहन, इच्छाएं' },
  { en: 'Losses, expenses, foreign travel, moksha', hi: 'हानि, खर्च, विदेश यात्रा, मोक्ष' },
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
