/**
 * Panchang Data
 * Complete reference data for Tithis, Yogas, and Karanas
 */

// Tithi (Lunar Day) - 30 total (15 Shukla + 15 Krishna)
export interface TithiInfo {
  index: number;
  name: { en: string; hi: string };
  paksha: 'shukla' | 'krishna';
  deity: string;
  nature: 'auspicious' | 'inauspicious' | 'neutral';
}

export const TITHIS: TithiInfo[] = [
  // Shukla Paksha (Waxing Moon) - 0 to 14
  { index: 0, name: { en: 'Pratipada', hi: 'प्रतिपदा' }, paksha: 'shukla', deity: 'Agni', nature: 'neutral' },
  { index: 1, name: { en: 'Dwitiya', hi: 'द्वितीया' }, paksha: 'shukla', deity: 'Brahma', nature: 'auspicious' },
  { index: 2, name: { en: 'Tritiya', hi: 'तृतीया' }, paksha: 'shukla', deity: 'Gauri', nature: 'auspicious' },
  { index: 3, name: { en: 'Chaturthi', hi: 'चतुर्थी' }, paksha: 'shukla', deity: 'Ganesha', nature: 'inauspicious' }, // Rikta
  { index: 4, name: { en: 'Panchami', hi: 'पंचमी' }, paksha: 'shukla', deity: 'Naga', nature: 'auspicious' },
  { index: 5, name: { en: 'Shashthi', hi: 'षष्ठी' }, paksha: 'shukla', deity: 'Kartikeya', nature: 'auspicious' },
  { index: 6, name: { en: 'Saptami', hi: 'सप्तमी' }, paksha: 'shukla', deity: 'Surya', nature: 'auspicious' },
  { index: 7, name: { en: 'Ashtami', hi: 'अष्टमी' }, paksha: 'shukla', deity: 'Rudra', nature: 'inauspicious' }, // Rikta
  { index: 8, name: { en: 'Navami', hi: 'नवमी' }, paksha: 'shukla', deity: 'Durga', nature: 'inauspicious' }, // Rikta
  { index: 9, name: { en: 'Dashami', hi: 'दशमी' }, paksha: 'shukla', deity: 'Yama', nature: 'auspicious' },
  { index: 10, name: { en: 'Ekadashi', hi: 'एकादशी' }, paksha: 'shukla', deity: 'Vishnu', nature: 'auspicious' },
  { index: 11, name: { en: 'Dwadashi', hi: 'द्वादशी' }, paksha: 'shukla', deity: 'Vishnu', nature: 'auspicious' },
  { index: 12, name: { en: 'Trayodashi', hi: 'त्रयोदशी' }, paksha: 'shukla', deity: 'Kamadeva', nature: 'auspicious' },
  { index: 13, name: { en: 'Chaturdashi', hi: 'चतुर्दशी' }, paksha: 'shukla', deity: 'Shiva', nature: 'inauspicious' }, // Rikta
  { index: 14, name: { en: 'Purnima', hi: 'पूर्णिमा' }, paksha: 'shukla', deity: 'Chandra', nature: 'auspicious' },
  // Krishna Paksha (Waning Moon) - 15 to 29
  { index: 15, name: { en: 'Pratipada', hi: 'प्रतिपदा' }, paksha: 'krishna', deity: 'Agni', nature: 'neutral' },
  { index: 16, name: { en: 'Dwitiya', hi: 'द्वितीया' }, paksha: 'krishna', deity: 'Brahma', nature: 'auspicious' },
  { index: 17, name: { en: 'Tritiya', hi: 'तृतीया' }, paksha: 'krishna', deity: 'Gauri', nature: 'auspicious' },
  { index: 18, name: { en: 'Chaturthi', hi: 'चतुर्थी' }, paksha: 'krishna', deity: 'Ganesha', nature: 'inauspicious' },
  { index: 19, name: { en: 'Panchami', hi: 'पंचमी' }, paksha: 'krishna', deity: 'Naga', nature: 'auspicious' },
  { index: 20, name: { en: 'Shashthi', hi: 'षष्ठी' }, paksha: 'krishna', deity: 'Kartikeya', nature: 'auspicious' },
  { index: 21, name: { en: 'Saptami', hi: 'सप्तमी' }, paksha: 'krishna', deity: 'Surya', nature: 'auspicious' },
  { index: 22, name: { en: 'Ashtami', hi: 'अष्टमी' }, paksha: 'krishna', deity: 'Rudra', nature: 'inauspicious' },
  { index: 23, name: { en: 'Navami', hi: 'नवमी' }, paksha: 'krishna', deity: 'Durga', nature: 'inauspicious' },
  { index: 24, name: { en: 'Dashami', hi: 'दशमी' }, paksha: 'krishna', deity: 'Yama', nature: 'auspicious' },
  { index: 25, name: { en: 'Ekadashi', hi: 'एकादशी' }, paksha: 'krishna', deity: 'Vishnu', nature: 'auspicious' },
  { index: 26, name: { en: 'Dwadashi', hi: 'द्वादशी' }, paksha: 'krishna', deity: 'Vishnu', nature: 'auspicious' },
  { index: 27, name: { en: 'Trayodashi', hi: 'त्रयोदशी' }, paksha: 'krishna', deity: 'Kamadeva', nature: 'auspicious' },
  { index: 28, name: { en: 'Chaturdashi', hi: 'चतुर्दशी' }, paksha: 'krishna', deity: 'Shiva', nature: 'inauspicious' },
  { index: 29, name: { en: 'Amavasya', hi: 'अमावस्या' }, paksha: 'krishna', deity: 'Pitru', nature: 'inauspicious' },
];

// Yoga (27 types) - Formed by Sun + Moon longitude
export interface YogaInfo {
  index: number;
  name: { en: string; hi: string };
  nature: 'auspicious' | 'inauspicious' | 'neutral';
  meaning: { en: string; hi: string };
}

export const YOGAS: YogaInfo[] = [
  { index: 0, name: { en: 'Vishkumbha', hi: 'विष्कुम्भ' }, nature: 'inauspicious', meaning: { en: 'Obstacle', hi: 'बाधा' } },
  { index: 1, name: { en: 'Priti', hi: 'प्रीति' }, nature: 'auspicious', meaning: { en: 'Love', hi: 'प्रेम' } },
  { index: 2, name: { en: 'Ayushman', hi: 'आयुष्मान' }, nature: 'auspicious', meaning: { en: 'Long life', hi: 'दीर्घायु' } },
  { index: 3, name: { en: 'Saubhagya', hi: 'सौभाग्य' }, nature: 'auspicious', meaning: { en: 'Fortune', hi: 'सौभाग्य' } },
  { index: 4, name: { en: 'Shobhana', hi: 'शोभन' }, nature: 'auspicious', meaning: { en: 'Splendor', hi: 'शोभा' } },
  { index: 5, name: { en: 'Atiganda', hi: 'अतिगण्ड' }, nature: 'inauspicious', meaning: { en: 'Danger', hi: 'खतरा' } },
  { index: 6, name: { en: 'Sukarma', hi: 'सुकर्मा' }, nature: 'auspicious', meaning: { en: 'Good deeds', hi: 'शुभ कर्म' } },
  { index: 7, name: { en: 'Dhriti', hi: 'धृति' }, nature: 'auspicious', meaning: { en: 'Patience', hi: 'धैर्य' } },
  { index: 8, name: { en: 'Shoola', hi: 'शूल' }, nature: 'inauspicious', meaning: { en: 'Pain', hi: 'पीड़ा' } },
  { index: 9, name: { en: 'Ganda', hi: 'गण्ड' }, nature: 'inauspicious', meaning: { en: 'Danger', hi: 'खतरा' } },
  { index: 10, name: { en: 'Vriddhi', hi: 'वृद्धि' }, nature: 'auspicious', meaning: { en: 'Growth', hi: 'वृद्धि' } },
  { index: 11, name: { en: 'Dhruva', hi: 'ध्रुव' }, nature: 'auspicious', meaning: { en: 'Stability', hi: 'स्थिरता' } },
  { index: 12, name: { en: 'Vyaghata', hi: 'व्याघात' }, nature: 'inauspicious', meaning: { en: 'Calamity', hi: 'आपदा' } },
  { index: 13, name: { en: 'Harshana', hi: 'हर्षण' }, nature: 'auspicious', meaning: { en: 'Joy', hi: 'हर्ष' } },
  { index: 14, name: { en: 'Vajra', hi: 'वज्र' }, nature: 'neutral', meaning: { en: 'Diamond', hi: 'वज्र' } },
  { index: 15, name: { en: 'Siddhi', hi: 'सिद्धि' }, nature: 'auspicious', meaning: { en: 'Success', hi: 'सिद्धि' } },
  { index: 16, name: { en: 'Vyatipata', hi: 'व्यतीपात' }, nature: 'inauspicious', meaning: { en: 'Misfortune', hi: 'दुर्भाग्य' } },
  { index: 17, name: { en: 'Variyan', hi: 'वरीयान' }, nature: 'auspicious', meaning: { en: 'Excellence', hi: 'श्रेष्ठता' } },
  { index: 18, name: { en: 'Parigha', hi: 'परिघ' }, nature: 'inauspicious', meaning: { en: 'Obstacle', hi: 'बाधा' } },
  { index: 19, name: { en: 'Shiva', hi: 'शिव' }, nature: 'auspicious', meaning: { en: 'Auspicious', hi: 'शुभ' } },
  { index: 20, name: { en: 'Siddha', hi: 'सिद्ध' }, nature: 'auspicious', meaning: { en: 'Accomplished', hi: 'सिद्ध' } },
  { index: 21, name: { en: 'Sadhya', hi: 'साध्य' }, nature: 'auspicious', meaning: { en: 'Achievable', hi: 'साध्य' } },
  { index: 22, name: { en: 'Shubha', hi: 'शुभ' }, nature: 'auspicious', meaning: { en: 'Auspicious', hi: 'शुभ' } },
  { index: 23, name: { en: 'Shukla', hi: 'शुक्ल' }, nature: 'auspicious', meaning: { en: 'Bright', hi: 'उज्ज्वल' } },
  { index: 24, name: { en: 'Brahma', hi: 'ब्रह्म' }, nature: 'auspicious', meaning: { en: 'Divine', hi: 'दिव्य' } },
  { index: 25, name: { en: 'Indra', hi: 'इन्द्र' }, nature: 'auspicious', meaning: { en: 'Lordly', hi: 'प्रभुत्व' } },
  { index: 26, name: { en: 'Vaidhriti', hi: 'वैधृति' }, nature: 'inauspicious', meaning: { en: 'Discord', hi: 'कलह' } },
];

// Karana (Half-Tithi) - 11 total (4 fixed + 7 repeating)
export interface KaranaInfo {
  index: number;
  name: { en: string; hi: string };
  nature: 'auspicious' | 'inauspicious' | 'neutral';
  type: 'fixed' | 'movable';
}

export const KARANAS: KaranaInfo[] = [
  // Fixed Karanas (occur once per lunar month)
  { index: 0, name: { en: 'Kimstughna', hi: 'किंस्तुघ्न' }, nature: 'auspicious', type: 'fixed' },
  { index: 1, name: { en: 'Shakuni', hi: 'शकुनि' }, nature: 'inauspicious', type: 'fixed' },
  { index: 2, name: { en: 'Chatushpada', hi: 'चतुष्पद' }, nature: 'inauspicious', type: 'fixed' },
  { index: 3, name: { en: 'Naga', hi: 'नाग' }, nature: 'inauspicious', type: 'fixed' },
  // Movable Karanas (repeat 8 times per lunar month)
  { index: 4, name: { en: 'Bava', hi: 'बव' }, nature: 'auspicious', type: 'movable' },
  { index: 5, name: { en: 'Balava', hi: 'बालव' }, nature: 'auspicious', type: 'movable' },
  { index: 6, name: { en: 'Kaulava', hi: 'कौलव' }, nature: 'auspicious', type: 'movable' },
  { index: 7, name: { en: 'Taitila', hi: 'तैतिल' }, nature: 'auspicious', type: 'movable' },
  { index: 8, name: { en: 'Gara', hi: 'गर' }, nature: 'auspicious', type: 'movable' },
  { index: 9, name: { en: 'Vanija', hi: 'वणिज' }, nature: 'auspicious', type: 'movable' },
  { index: 10, name: { en: 'Vishti', hi: 'विष्टि' }, nature: 'inauspicious', type: 'movable' }, // Also called Bhadra
];

// Weekday data for Raahu Kaal and other calculations
export interface WeekdayInfo {
  index: number;
  name: { en: string; hi: string };
  lord: string;
  raahuKaalSlot: number; // Which 1.5 hour slot (0-7) is Raahu Kaal
  yamagandaSlot: number;
  gulikaSlot: number;
}

export const WEEKDAYS: WeekdayInfo[] = [
  { index: 0, name: { en: 'Sunday', hi: 'रविवार' }, lord: 'Sun', raahuKaalSlot: 7, yamagandaSlot: 4, gulikaSlot: 6 },
  { index: 1, name: { en: 'Monday', hi: 'सोमवार' }, lord: 'Moon', raahuKaalSlot: 1, yamagandaSlot: 3, gulikaSlot: 5 },
  { index: 2, name: { en: 'Tuesday', hi: 'मंगलवार' }, lord: 'Mars', raahuKaalSlot: 6, yamagandaSlot: 2, gulikaSlot: 4 },
  { index: 3, name: { en: 'Wednesday', hi: 'बुधवार' }, lord: 'Mercury', raahuKaalSlot: 4, yamagandaSlot: 1, gulikaSlot: 3 },
  { index: 4, name: { en: 'Thursday', hi: 'गुरुवार' }, lord: 'Jupiter', raahuKaalSlot: 5, yamagandaSlot: 0, gulikaSlot: 2 },
  { index: 5, name: { en: 'Friday', hi: 'शुक्रवार' }, lord: 'Venus', raahuKaalSlot: 3, yamagandaSlot: 6, gulikaSlot: 1 },
  { index: 6, name: { en: 'Saturday', hi: 'शनिवार' }, lord: 'Saturn', raahuKaalSlot: 2, yamagandaSlot: 5, gulikaSlot: 0 },
];

// Planetary Hora sequence (hour lords)
export const HORA_SEQUENCE = ['Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars'];

// Helper function to get Tithi display name
export function getTithiDisplayName(index: number, locale: 'en' | 'hi'): string {
  const tithi = TITHIS[index];
  if (!tithi) return '';
  const pakshaName = tithi.paksha === 'shukla'
    ? (locale === 'en' ? 'Shukla' : 'शुक्ल')
    : (locale === 'en' ? 'Krishna' : 'कृष्ण');
  return `${pakshaName} ${tithi.name[locale]}`;
}

// Helper function to get simplified Tithi index (0-14)
export function getSimplifiedTithiIndex(index: number): number {
  return index % 15;
}

// Auspicious Tithis for general activities
export const AUSPICIOUS_TITHIS = [1, 2, 4, 5, 6, 9, 10, 11, 12, 16, 17, 19, 20, 21, 24, 25, 26, 27];

// Inauspicious Tithis (Rikta Tithis)
export const RIKTA_TITHIS = [3, 7, 8, 13, 18, 22, 23, 28, 29];

// Auspicious Yogas
export const AUSPICIOUS_YOGAS = [1, 2, 3, 4, 6, 7, 10, 11, 13, 15, 17, 19, 20, 21, 22, 23, 24, 25];

// Inauspicious Yogas
export const INAUSPICIOUS_YOGAS = [0, 5, 8, 9, 12, 16, 18, 26];

// Auspicious Karanas (movable ones)
export const AUSPICIOUS_KARANAS = [0, 4, 5, 6, 7, 8, 9];

// Inauspicious Karanas
export const INAUSPICIOUS_KARANAS = [1, 2, 3, 10]; // Shakuni, Chatushpada, Naga, Vishti/Bhadra
