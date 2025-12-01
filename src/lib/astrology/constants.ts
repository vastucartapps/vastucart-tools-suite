/**
 * Astrology Constants
 * Core constants used across all astrology calculations
 */

// Zodiac Signs (Rashis)
export const ZODIAC_SIGNS = [
  { index: 0, name: { en: 'Aries', hi: 'मेष' }, symbol: '♈', element: 'fire', lord: 'Mars' },
  { index: 1, name: { en: 'Taurus', hi: 'वृषभ' }, symbol: '♉', element: 'earth', lord: 'Venus' },
  { index: 2, name: { en: 'Gemini', hi: 'मिथुन' }, symbol: '♊', element: 'air', lord: 'Mercury' },
  { index: 3, name: { en: 'Cancer', hi: 'कर्क' }, symbol: '♋', element: 'water', lord: 'Moon' },
  { index: 4, name: { en: 'Leo', hi: 'सिंह' }, symbol: '♌', element: 'fire', lord: 'Sun' },
  { index: 5, name: { en: 'Virgo', hi: 'कन्या' }, symbol: '♍', element: 'earth', lord: 'Mercury' },
  { index: 6, name: { en: 'Libra', hi: 'तुला' }, symbol: '♎', element: 'air', lord: 'Venus' },
  { index: 7, name: { en: 'Scorpio', hi: 'वृश्चिक' }, symbol: '♏', element: 'water', lord: 'Mars' },
  { index: 8, name: { en: 'Sagittarius', hi: 'धनु' }, symbol: '♐', element: 'fire', lord: 'Jupiter' },
  { index: 9, name: { en: 'Capricorn', hi: 'मकर' }, symbol: '♑', element: 'earth', lord: 'Saturn' },
  { index: 10, name: { en: 'Aquarius', hi: 'कुंभ' }, symbol: '♒', element: 'air', lord: 'Saturn' },
  { index: 11, name: { en: 'Pisces', hi: 'मीन' }, symbol: '♓', element: 'water', lord: 'Jupiter' },
] as const;

// Planets (Grahas)
export const PLANETS = {
  SUN: { id: 'sun', name: { en: 'Sun', hi: 'सूर्य' }, symbol: '☉', color: '#F97316', vimshottariYears: 6 },
  MOON: { id: 'moon', name: { en: 'Moon', hi: 'चंद्र' }, symbol: '☽', color: '#E5E7EB', vimshottariYears: 10 },
  MARS: { id: 'mars', name: { en: 'Mars', hi: 'मंगल' }, symbol: '♂', color: '#EF4444', vimshottariYears: 7 },
  MERCURY: { id: 'mercury', name: { en: 'Mercury', hi: 'बुध' }, symbol: '☿', color: '#22C55E', vimshottariYears: 17 },
  JUPITER: { id: 'jupiter', name: { en: 'Jupiter', hi: 'गुरु' }, symbol: '♃', color: '#EAB308', vimshottariYears: 16 },
  VENUS: { id: 'venus', name: { en: 'Venus', hi: 'शुक्र' }, symbol: '♀', color: '#EC4899', vimshottariYears: 20 },
  SATURN: { id: 'saturn', name: { en: 'Saturn', hi: 'शनि' }, symbol: '♄', color: '#3B82F6', vimshottariYears: 19 },
  RAHU: { id: 'rahu', name: { en: 'Rahu', hi: 'राहु' }, symbol: '☊', color: '#6B7280', vimshottariYears: 18 },
  KETU: { id: 'ketu', name: { en: 'Ketu', hi: 'केतु' }, symbol: '☋', color: '#92400E', vimshottariYears: 7 },
} as const;

// Planet order for Vimshottari Dasha
export const VIMSHOTTARI_ORDER = [
  PLANETS.KETU,
  PLANETS.VENUS,
  PLANETS.SUN,
  PLANETS.MOON,
  PLANETS.MARS,
  PLANETS.RAHU,
  PLANETS.JUPITER,
  PLANETS.SATURN,
  PLANETS.MERCURY,
] as const;

// Total Vimshottari cycle = 120 years
export const VIMSHOTTARI_TOTAL_YEARS = 120;

// 27 Nakshatras
export const NAKSHATRAS = [
  { index: 0, name: { en: 'Ashwini', hi: 'अश्विनी' }, lord: 'Ketu', deity: 'Ashwini Kumaras', symbol: 'Horse head', startDegree: 0 },
  { index: 1, name: { en: 'Bharani', hi: 'भरणी' }, lord: 'Venus', deity: 'Yama', symbol: 'Yoni', startDegree: 13.333333 },
  { index: 2, name: { en: 'Krittika', hi: 'कृत्तिका' }, lord: 'Sun', deity: 'Agni', symbol: 'Razor', startDegree: 26.666667 },
  { index: 3, name: { en: 'Rohini', hi: 'रोहिणी' }, lord: 'Moon', deity: 'Brahma', symbol: 'Chariot', startDegree: 40 },
  { index: 4, name: { en: 'Mrigashira', hi: 'मृगशिरा' }, lord: 'Mars', deity: 'Soma', symbol: 'Deer head', startDegree: 53.333333 },
  { index: 5, name: { en: 'Ardra', hi: 'आर्द्रा' }, lord: 'Rahu', deity: 'Rudra', symbol: 'Teardrop', startDegree: 66.666667 },
  { index: 6, name: { en: 'Punarvasu', hi: 'पुनर्वसु' }, lord: 'Jupiter', deity: 'Aditi', symbol: 'Bow', startDegree: 80 },
  { index: 7, name: { en: 'Pushya', hi: 'पुष्य' }, lord: 'Saturn', deity: 'Brihaspati', symbol: 'Flower', startDegree: 93.333333 },
  { index: 8, name: { en: 'Ashlesha', hi: 'आश्लेषा' }, lord: 'Mercury', deity: 'Nagas', symbol: 'Serpent', startDegree: 106.666667 },
  { index: 9, name: { en: 'Magha', hi: 'मघा' }, lord: 'Ketu', deity: 'Pitris', symbol: 'Throne', startDegree: 120 },
  { index: 10, name: { en: 'Purva Phalguni', hi: 'पूर्व फाल्गुनी' }, lord: 'Venus', deity: 'Bhaga', symbol: 'Hammock', startDegree: 133.333333 },
  { index: 11, name: { en: 'Uttara Phalguni', hi: 'उत्तर फाल्गुनी' }, lord: 'Sun', deity: 'Aryaman', symbol: 'Bed', startDegree: 146.666667 },
  { index: 12, name: { en: 'Hasta', hi: 'हस्त' }, lord: 'Moon', deity: 'Savitar', symbol: 'Hand', startDegree: 160 },
  { index: 13, name: { en: 'Chitra', hi: 'चित्रा' }, lord: 'Mars', deity: 'Vishwakarma', symbol: 'Pearl', startDegree: 173.333333 },
  { index: 14, name: { en: 'Swati', hi: 'स्वाति' }, lord: 'Rahu', deity: 'Vayu', symbol: 'Coral', startDegree: 186.666667 },
  { index: 15, name: { en: 'Vishakha', hi: 'विशाखा' }, lord: 'Jupiter', deity: 'Indra-Agni', symbol: 'Archway', startDegree: 200 },
  { index: 16, name: { en: 'Anuradha', hi: 'अनुराधा' }, lord: 'Saturn', deity: 'Mitra', symbol: 'Lotus', startDegree: 213.333333 },
  { index: 17, name: { en: 'Jyeshtha', hi: 'ज्येष्ठा' }, lord: 'Mercury', deity: 'Indra', symbol: 'Earring', startDegree: 226.666667 },
  { index: 18, name: { en: 'Mula', hi: 'मूल' }, lord: 'Ketu', deity: 'Nirriti', symbol: 'Root', startDegree: 240 },
  { index: 19, name: { en: 'Purva Ashadha', hi: 'पूर्वाषाढ़ा' }, lord: 'Venus', deity: 'Apas', symbol: 'Fan', startDegree: 253.333333 },
  { index: 20, name: { en: 'Uttara Ashadha', hi: 'उत्तराषाढ़ा' }, lord: 'Sun', deity: 'Vishvedevas', symbol: 'Tusk', startDegree: 266.666667 },
  { index: 21, name: { en: 'Shravana', hi: 'श्रवण' }, lord: 'Moon', deity: 'Vishnu', symbol: 'Ear', startDegree: 280 },
  { index: 22, name: { en: 'Dhanishta', hi: 'धनिष्ठा' }, lord: 'Mars', deity: 'Vasus', symbol: 'Drum', startDegree: 293.333333 },
  { index: 23, name: { en: 'Shatabhisha', hi: 'शतभिषा' }, lord: 'Rahu', deity: 'Varuna', symbol: 'Circle', startDegree: 306.666667 },
  { index: 24, name: { en: 'Purva Bhadrapada', hi: 'पूर्व भाद्रपद' }, lord: 'Jupiter', deity: 'Aja Ekapada', symbol: 'Sword', startDegree: 320 },
  { index: 25, name: { en: 'Uttara Bhadrapada', hi: 'उत्तर भाद्रपद' }, lord: 'Saturn', deity: 'Ahir Budhnya', symbol: 'Twins', startDegree: 333.333333 },
  { index: 26, name: { en: 'Revati', hi: 'रेवती' }, lord: 'Mercury', deity: 'Pushan', symbol: 'Fish', startDegree: 346.666667 },
] as const;

// Each nakshatra spans 13°20' (13.333... degrees)
export const NAKSHATRA_SPAN = 360 / 27; // 13.333...

// Each pada spans 3°20' (3.333... degrees)
export const PADA_SPAN = NAKSHATRA_SPAN / 4; // 3.333...

// House Names
export const HOUSES = [
  { number: 1, name: { en: 'First House (Lagna)', hi: 'प्रथम भाव (लग्न)' }, signifies: 'Self, personality, appearance' },
  { number: 2, name: { en: 'Second House', hi: 'द्वितीय भाव' }, signifies: 'Wealth, family, speech' },
  { number: 3, name: { en: 'Third House', hi: 'तृतीय भाव' }, signifies: 'Siblings, courage, communication' },
  { number: 4, name: { en: 'Fourth House', hi: 'चतुर्थ भाव' }, signifies: 'Mother, home, happiness' },
  { number: 5, name: { en: 'Fifth House', hi: 'पंचम भाव' }, signifies: 'Children, intelligence, creativity' },
  { number: 6, name: { en: 'Sixth House', hi: 'षष्ठ भाव' }, signifies: 'Enemies, health, service' },
  { number: 7, name: { en: 'Seventh House', hi: 'सप्तम भाव' }, signifies: 'Marriage, partnerships, business' },
  { number: 8, name: { en: 'Eighth House', hi: 'अष्टम भाव' }, signifies: 'Longevity, transformation, occult' },
  { number: 9, name: { en: 'Ninth House', hi: 'नवम भाव' }, signifies: 'Fortune, dharma, father' },
  { number: 10, name: { en: 'Tenth House', hi: 'दशम भाव' }, signifies: 'Career, status, karma' },
  { number: 11, name: { en: 'Eleventh House', hi: 'एकादश भाव' }, signifies: 'Gains, friends, aspirations' },
  { number: 12, name: { en: 'Twelfth House', hi: 'द्वादश भाव' }, signifies: 'Losses, moksha, foreign lands' },
] as const;

// Ayanamsa value for Lahiri (Chitrapaksha) - standard for Vedic astrology
// This is the precession correction to convert tropical to sidereal
// Value changes by approximately 50.29" per year
// Reference: 23°51'11" on Jan 1, 2000 (J2000.0)
export const LAHIRI_AYANAMSA_J2000 = 23.85305556; // degrees
export const AYANAMSA_ANNUAL_MOTION = 50.29 / 3600; // degrees per year

// Julian Day for J2000.0 epoch
export const J2000 = 2451545.0;

// Astronomical constants
export const DEG_TO_RAD = Math.PI / 180;
export const RAD_TO_DEG = 180 / Math.PI;
export const DAYS_PER_CENTURY = 36525;
