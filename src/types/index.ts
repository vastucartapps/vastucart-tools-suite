// ============================================
// COMMON TYPES
// ============================================

export type Locale = 'en' | 'hi';

export interface BilingualText {
  en: string;
  hi: string;
}

// ============================================
// TOOL TYPES
// ============================================

export type ToolCategory = 'numerology' | 'astrology' | 'vastu';

export interface ToolMeta {
  slug: string;
  category: ToolCategory;
  isPremium: boolean;
  icon: string;
  order: number;
}

export interface ToolContent {
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  keywords?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ToolConfig {
  meta: ToolMeta;
  content: Record<Locale, ToolContent>;
  faqs: Record<Locale, FAQ[]>;
}

// ============================================
// NUMEROLOGY TYPES
// ============================================

export interface LetterBreakdown {
  letter: string;
  value: number;
}

export interface ReductionResult {
  steps: number[];
  finalNumber: number;
  isMasterNumber: boolean;
}

// Life Path Number
export interface LifePathResult {
  dateOfBirth: string;
  dayNumber: number;
  monthNumber: number;
  yearNumber: number;
  calculationSteps: {
    day: { original: number; reduced: number; steps: number[] };
    month: { original: number; reduced: number; steps: number[] };
    year: { original: number; reduced: number; steps: number[] };
    final: { sum: number; reduced: number; steps: number[] };
  };
  lifePathNumber: number;
  isMasterNumber: boolean;
}

export interface LifePathMeaning {
  number: number;
  title: BilingualText;
  overview: BilingualText;
  positiveTraits: BilingualText[];
  negativeTraits: BilingualText[];
  careers: BilingualText[];
  compatibleNumbers: number[];
  celebrities: Array<{ name: string; profession: string }>;
  lifePhases?: {
    youth: BilingualText;    // 0-28 years
    adult: BilingualText;    // 29-56 years
    mature: BilingualText;   // 57+ years
  };
  loveRelationships?: BilingualText;
  moneyWork?: BilingualText;
}

// Chaldean Numerology
export interface ChaldeanResult {
  name: string;
  cleanName: string;
  letterBreakdown: LetterBreakdown[];
  totalSum: number;
  reductionSteps: number[];
  finalNumber: number;
  isMasterNumber: boolean;
}

export interface ChaldeanMeaning {
  number: number;
  title: BilingualText;
  overview: BilingualText;
  characteristics: BilingualText[];
  advice: BilingualText;
}

// Lo Shu Grid
export interface LoShuGrid {
  grid: (number[])[][];
  dateDigits: number[];
  presentNumbers: number[];
  missingNumbers: number[];
  repeatingNumbers: Array<{ number: number; count: number }>;
}

export interface LoShuArrow {
  id: string;
  name: BilingualText;
  numbers: number[];
  type: 'strength' | 'weakness';
  description: BilingualText;
}

export interface LoShuPlane {
  name: BilingualText;
  numbers: number[];
  present: number[];
  missing: number[];
  strength: number; // 0-100
  description: BilingualText;
}

export interface LoShuRemedy {
  number: number;
  remedies: BilingualText[];
  colors: string[];
  elements: string[];
}

export interface LoShuResult {
  grid: LoShuGrid;
  arrows: {
    present: LoShuArrow[];
    missing: LoShuArrow[];
  };
  planes: {
    mental: LoShuPlane;
    emotional: LoShuPlane;
    practical: LoShuPlane;
  };
  remedies: LoShuRemedy[];
}

// ============================================
// ASTROLOGY TYPES
// ============================================

export type Planet =
  | 'SUN'
  | 'MOON'
  | 'MARS'
  | 'MERCURY'
  | 'JUPITER'
  | 'VENUS'
  | 'SATURN'
  | 'RAHU'
  | 'KETU';

export type ZodiacSign =
  | 'ARIES'
  | 'TAURUS'
  | 'GEMINI'
  | 'CANCER'
  | 'LEO'
  | 'VIRGO'
  | 'LIBRA'
  | 'SCORPIO'
  | 'SAGITTARIUS'
  | 'CAPRICORN'
  | 'AQUARIUS'
  | 'PISCES';

export type Nakshatra =
  | 'ASHWINI'
  | 'BHARANI'
  | 'KRITTIKA'
  | 'ROHINI'
  | 'MRIGASHIRA'
  | 'ARDRA'
  | 'PUNARVASU'
  | 'PUSHYA'
  | 'ASHLESHA'
  | 'MAGHA'
  | 'PURVA_PHALGUNI'
  | 'UTTARA_PHALGUNI'
  | 'HASTA'
  | 'CHITRA'
  | 'SWATI'
  | 'VISHAKHA'
  | 'ANURADHA'
  | 'JYESHTHA'
  | 'MULA'
  | 'PURVA_ASHADHA'
  | 'UTTARA_ASHADHA'
  | 'SHRAVANA'
  | 'DHANISHTA'
  | 'SHATABHISHA'
  | 'PURVA_BHADRAPADA'
  | 'UTTARA_BHADRAPADA'
  | 'REVATI';

export type Ayanamsa = 'LAHIRI' | 'KP' | 'RAMAN' | 'CHITRAPAKSHA';

export interface BirthDetails {
  date: Date;
  time: string; // HH:MM format
  place: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface PlanetPosition {
  planet: Planet;
  longitude: number;
  sign: ZodiacSign;
  signDegree: number;
  nakshatra: Nakshatra;
  nakshatraPada: number;
  isRetrograde: boolean;
  house: number;
}

export interface HousePosition {
  house: number;
  sign: ZodiacSign;
  degree: number;
  planets: Planet[];
}

// ============================================
// VASTU TYPES
// ============================================

export type Direction =
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'CENTER';

export type Element = 'EARTH' | 'WATER' | 'FIRE' | 'AIR' | 'SPACE';

export type RoomType =
  | 'BEDROOM'
  | 'KITCHEN'
  | 'LIVING_ROOM'
  | 'BATHROOM'
  | 'POOJA_ROOM'
  | 'STUDY'
  | 'DINING'
  | 'ENTRANCE';

export interface VastuRecommendation {
  direction: Direction;
  element: Element;
  isAuspicious: boolean;
  recommendation: BilingualText;
  remedies?: BilingualText[];
}

export interface HouseNumberResult {
  number: string;
  totalValue: number;
  reducedValue: number;
  isAuspicious: boolean;
  meaning: BilingualText;
  recommendations: BilingualText[];
  remedies: BilingualText[];
}

// ============================================
// UI TYPES
// ============================================

export interface InputField {
  name: string;
  type: 'text' | 'number' | 'date' | 'select' | 'time';
  label: BilingualText;
  placeholder?: BilingualText;
  required?: boolean;
  min?: number;
  max?: number;
  options?: Array<{ value: string; label: BilingualText }>;
  validation?: {
    pattern?: RegExp;
    message?: BilingualText;
  };
}

export interface CalculationStep {
  step: number;
  description: BilingualText;
  calculation: string;
  result: string | number;
}

export interface ShareData {
  title: string;
  text: string;
  url: string;
  image?: string;
}
