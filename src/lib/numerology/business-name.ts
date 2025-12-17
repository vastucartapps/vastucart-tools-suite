/**
 * Business Name Generator & Analyzer
 *
 * Comprehensive business name numerology tool that:
 * 1. Generates business names based on owner's DOB
 * 2. Provides industry-specific name suggestions
 * 3. Creates English word distortions (Blinder → Blynder)
 * 4. Includes Sanskrit/Hindi word suggestions
 * 5. Filters by character length
 * 6. Calculates numerological compatibility
 */

// ============================================================================
// Types
// ============================================================================

export interface BilingualText {
  en: string;
  hi: string;
}

export interface IndustryInfo {
  id: string;
  name: BilingualText;
  icon: string;
  favorableNumbers: number[];
  keywords: string[];
  hindiKeywords: string[];
}

export interface GeneratedName {
  name: string;
  pythagoreanNumber: number;
  chaldeanNumber: number;
  compatibilityScore: number;
  category: 'english' | 'distortion' | 'sanskrit' | 'hindi' | 'fusion' | 'acronym';
  meaning: BilingualText;
  reasoning: BilingualText;
}

export interface NameGenerationOptions {
  ownerDOB: string;
  industry: string;
  customIndustry?: string;
  characterLengths: number[];
  includeEnglish: boolean;
  includeDistortions: boolean;
  includeSanskrit: boolean;
  includeHindi: boolean;
  includeFusion: boolean;
  baseKeywords?: string[];
}

export interface BrandEnergyProfile {
  number: number;
  name: BilingualText;
  strengths: BilingualText[];
  challenges: BilingualText[];
  bestFor: BilingualText[];
  planet: BilingualText;
  element: BilingualText;
  color: string;
  colorHex: string;
}

export interface BusinessNameResult {
  generatedNames: GeneratedName[];
  ownerLifePathNumber: number;
  ownerBirthDayNumber: number;
  targetNumbers: number[];
  selectedIndustry: IndustryInfo | null;
  brandEnergyProfiles: Record<number, BrandEnergyProfile>;
}

export interface AnalysisResult {
  name: string;
  pythagoreanNumber: number;
  chaldeanNumber: number;
  compatibilityScore: number;
  rating: 'excellent' | 'good' | 'moderate' | 'challenging';
  brandEnergy: BrandEnergyProfile;
  ownerLifePathNumber: number;
  ownerBirthDayNumber: number;
}

// Letter suggestion for existing business name optimization
export interface BusinessLetterSuggestion {
  letter: string;
  operation: 'add' | 'remove' | 'double';
  currentNumber: number;
  newNumber: number;
  alignmentChange: number; // positive = improvement
  whyThisWorks: BilingualText;
  letterValue: number;
}

export interface ExistingNameAnalysis {
  name: string;
  pythagoreanNumber: number;
  chaldeanNumber: number;
  currentAlignment: number;
  targetNumbers: number[];
  rating: 'excellent' | 'good' | 'moderate' | 'needs_optimization';
  brandEnergy: BrandEnergyProfile;
  letterSuggestions: BusinessLetterSuggestion[];
  ownerLifePathNumber: number;
  ownerBirthDayNumber: number;
}

// Letter pair for DIY name building
export interface LetterPair {
  letters: string;
  pythagoreanValue: number;
  chaldeanValue: number;
  energy: BilingualText;
  goodFor: string[];
}

// ============================================================================
// Constants - Letter Values
// ============================================================================

const PYTHAGOREAN_VALUES: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
};

const CHALDEAN_VALUES: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 8, G: 3, H: 5, I: 1,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 7, P: 8, Q: 1, R: 2,
  S: 3, T: 4, U: 6, V: 6, W: 6, X: 5, Y: 1, Z: 7,
};

// ============================================================================
// Industries Database
// ============================================================================

export const INDUSTRIES: IndustryInfo[] = [
  {
    id: 'technology',
    name: { en: 'Technology & Software', hi: 'प्रौद्योगिकी और सॉफ्टवेयर' },
    icon: '💻',
    favorableNumbers: [1, 5, 7, 8],
    keywords: [
      'tech', 'code', 'digital', 'cyber', 'net', 'byte', 'bit', 'soft', 'logic', 'sync',
      'cloud', 'data', 'smart', 'nexus', 'quantum', 'pixel', 'stream', 'spark', 'nova', 'pulse',
      'apex', 'algo', 'app', 'arc', 'axis', 'base', 'binary', 'bolt', 'bridge', 'chip',
      'cipher', 'click', 'cog', 'compile', 'connect', 'core', 'cosmos', 'crypt', 'cube', 'dash',
      'decode', 'delta', 'dev', 'drive', 'echo', 'edge', 'electron', 'element', 'engine', 'ether',
      'fiber', 'flash', 'flex', 'flux', 'forge', 'frame', 'fusion', 'gate', 'grid', 'hack',
      'helix', 'hub', 'hyper', 'icon', 'info', 'intel', 'ion', 'iris', 'jet', 'kernel',
      'key', 'lab', 'laser', 'layer', 'leap', 'lens', 'light', 'link', 'lumen', 'lunar',
      'macro', 'matrix', 'mesh', 'meta', 'micro', 'mind', 'mode', 'module', 'morph', 'nano',
      'nerve', 'neural', 'node', 'omni', 'omega', 'onyx', 'orbit', 'origin', 'os', 'parse'
    ],
    hindiKeywords: ['तकनीक', 'विज्ञान', 'संगणक', 'डिजिटल', 'नेट', 'स्मार्ट', 'क्लाउड', 'डेटा'],
  },
  {
    id: 'retail',
    name: { en: 'Retail & E-commerce', hi: 'खुदरा और ई-कॉमर्स' },
    icon: '🛒',
    favorableNumbers: [3, 5, 6, 9],
    keywords: [
      'mart', 'shop', 'store', 'deal', 'buy', 'cart', 'bazaar', 'market', 'trade', 'hub',
      'mall', 'outlet', 'depot', 'express', 'swift', 'prime', 'choice', 'pick', 'select', 'best',
      'value', 'save', 'mega', 'super', 'ultra', 'maxi', 'plus', 'max', 'top', 'star',
      'gold', 'silver', 'diamond', 'pearl', 'crown', 'royal', 'elite', 'luxury', 'brand', 'trend',
      'style', 'mode', 'vogue', 'chic', 'smart', 'easy', 'quick', 'fast', 'rapid', 'instant',
      'click', 'snap', 'flash', 'zoom', 'rush', 'dash', 'zip', 'zoom', 'bolt', 'spark',
      'shine', 'glow', 'bright', 'fresh', 'new', 'now', 'today', 'daily', 'every', 'all',
      'one', 'first', 'next', 'more', 'extra', 'bonus', 'free', 'sale', 'offer', 'deal',
      'price', 'cost', 'rate', 'pay', 'cash', 'coin', 'credit', 'debit', 'wallet', 'pocket'
    ],
    hindiKeywords: ['बाजार', 'दुकान', 'व्यापार', 'मंडी', 'हाट', 'खरीद', 'बिक्री', 'सौदा'],
  },
  {
    id: 'finance',
    name: { en: 'Finance & Banking', hi: 'वित्त और बैंकिंग' },
    icon: '💰',
    favorableNumbers: [4, 6, 8],
    keywords: [
      'fin', 'wealth', 'capital', 'fund', 'pay', 'credit', 'invest', 'asset', 'vault', 'trust',
      'secure', 'prime', 'fortune', 'prosper', 'grow', 'gain', 'profit', 'return', 'yield', 'dividend',
      'stock', 'share', 'bond', 'equity', 'debt', 'loan', 'mortgage', 'lease', 'rent', 'save',
      'bank', 'mint', 'treasury', 'reserve', 'gold', 'silver', 'platinum', 'diamond', 'pearl', 'gem',
      'crown', 'royal', 'noble', 'elite', 'prime', 'apex', 'peak', 'summit', 'zenith', 'pinnacle',
      'horizon', 'vista', 'scope', 'range', 'span', 'reach', 'extend', 'expand', 'scale', 'grow',
      'rise', 'climb', 'soar', 'surge', 'boost', 'lift', 'push', 'drive', 'force', 'power',
      'shield', 'guard', 'protect', 'safe', 'sure', 'firm', 'solid', 'strong', 'stable', 'steady'
    ],
    hindiKeywords: ['धन', 'निधि', 'संपत्ति', 'वित्त', 'लाभ', 'समृद्धि', 'बचत', 'निवेश'],
  },
  {
    id: 'healthcare',
    name: { en: 'Healthcare & Wellness', hi: 'स्वास्थ्य सेवा और कल्याण' },
    icon: '🏥',
    favorableNumbers: [2, 6, 7, 9],
    keywords: [
      'health', 'care', 'med', 'life', 'cure', 'heal', 'vital', 'pure', 'well', 'fit',
      'zen', 'glow', 'bloom', 'nurture', 'thrive', 'grow', 'strong', 'power', 'energy', 'vigor',
      'active', 'fresh', 'clean', 'clear', 'bright', 'light', 'radiant', 'shine', 'spark', 'glow',
      'pulse', 'heart', 'soul', 'mind', 'body', 'spirit', 'breath', 'air', 'oxygen', 'flow',
      'balance', 'harmony', 'peace', 'calm', 'serene', 'tranquil', 'gentle', 'soft', 'warm', 'comfort',
      'relief', 'ease', 'rest', 'sleep', 'dream', 'wake', 'rise', 'renew', 'restore', 'revive',
      'rejuvenate', 'refresh', 'recharge', 'reset', 'restart', 'recover', 'repair', 'rebuild', 'regrow', 'rehab',
      'clinic', 'lab', 'pharma', 'bio', 'gene', 'cell', 'tissue', 'organ', 'system', 'immune'
    ],
    hindiKeywords: ['स्वास्थ्य', 'आरोग्य', 'चिकित्सा', 'जीवन', 'शक्ति', 'कल्याण', 'देखभाल', 'सेवा'],
  },
  {
    id: 'education',
    name: { en: 'Education & Training', hi: 'शिक्षा और प्रशिक्षण' },
    icon: '📚',
    favorableNumbers: [3, 5, 7, 9],
    keywords: [
      'learn', 'edu', 'skill', 'mind', 'brain', 'think', 'wise', 'know', 'quest', 'study',
      'academy', 'mentor', 'guide', 'bright', 'scholar', 'tutor', 'coach', 'train', 'teach', 'instruct',
      'class', 'course', 'lesson', 'lecture', 'seminar', 'workshop', 'lab', 'studio', 'center', 'institute',
      'school', 'college', 'varsity', 'campus', 'hall', 'room', 'space', 'zone', 'hub', 'nest',
      'genius', 'prodigy', 'master', 'expert', 'pro', 'ace', 'whiz', 'star', 'champ', 'hero',
      'pioneer', 'leader', 'chief', 'head', 'top', 'prime', 'first', 'best', 'elite', 'apex',
      'peak', 'summit', 'zenith', 'pinnacle', 'height', 'level', 'grade', 'rank', 'tier', 'step',
      'path', 'way', 'road', 'route', 'track', 'trail', 'journey', 'voyage', 'quest', 'mission'
    ],
    hindiKeywords: ['विद्या', 'ज्ञान', 'शिक्षा', 'गुरु', 'अध्ययन', 'बुद्धि', 'पाठ', 'कक्षा'],
  },
  {
    id: 'creative',
    name: { en: 'Creative & Media', hi: 'क्रिएटिव और मीडिया' },
    icon: '🎨',
    favorableNumbers: [3, 5, 6, 9],
    keywords: [
      'art', 'design', 'create', 'media', 'pixel', 'vision', 'studio', 'spark', 'muse', 'canvas',
      'frame', 'blend', 'craft', 'vivid', 'bold', 'bright', 'color', 'shade', 'tone', 'hue',
      'paint', 'draw', 'sketch', 'draft', 'plan', 'plot', 'map', 'chart', 'graph', 'grid',
      'form', 'shape', 'style', 'mode', 'trend', 'wave', 'flow', 'stream', 'pulse', 'beat',
      'rhythm', 'tune', 'note', 'chord', 'melody', 'harmony', 'symphony', 'opus', 'piece', 'work',
      'film', 'video', 'photo', 'image', 'snap', 'shot', 'scene', 'view', 'angle', 'lens',
      'focus', 'zoom', 'pan', 'tilt', 'roll', 'spin', 'twist', 'turn', 'flip', 'morph',
      'print', 'press', 'publish', 'post', 'share', 'cast', 'stream', 'broadcast', 'air', 'show'
    ],
    hindiKeywords: ['कला', 'सृजन', 'चित्र', 'रंग', 'रचना', 'शिल्प', 'डिज़ाइन', 'स्टूडियो'],
  },
  {
    id: 'food',
    name: { en: 'Food & Hospitality', hi: 'खाद्य और आतिथ्य' },
    icon: '🍽️',
    favorableNumbers: [3, 5, 6],
    keywords: [
      'food', 'taste', 'dine', 'bite', 'feast', 'spice', 'flavor', 'fresh', 'grill', 'brew',
      'chef', 'kitchen', 'table', 'serve', 'treat', 'eat', 'drink', 'sip', 'gulp', 'munch',
      'crunch', 'crisp', 'tender', 'juicy', 'savory', 'sweet', 'sour', 'tangy', 'zesty', 'rich',
      'cream', 'butter', 'honey', 'sugar', 'salt', 'pepper', 'herb', 'mint', 'basil', 'sage',
      'bake', 'roast', 'fry', 'steam', 'boil', 'simmer', 'stir', 'mix', 'blend', 'whip',
      'slice', 'dice', 'chop', 'mince', 'grind', 'crush', 'mash', 'puree', 'sauce', 'gravy',
      'bowl', 'plate', 'dish', 'cup', 'glass', 'mug', 'pot', 'pan', 'oven', 'stove',
      'cafe', 'bistro', 'deli', 'bar', 'pub', 'lounge', 'inn', 'lodge', 'resort', 'haven'
    ],
    hindiKeywords: ['भोजन', 'स्वाद', 'रसोई', 'मिष्ठान', 'आहार', 'पाक', 'खाना', 'पीना'],
  },
  {
    id: 'construction',
    name: { en: 'Construction & Real Estate', hi: 'निर्माण और रियल एस्टेट' },
    icon: '🏗️',
    favorableNumbers: [4, 6, 8],
    keywords: [
      'build', 'home', 'estate', 'brick', 'tower', 'rise', 'space', 'land', 'urban', 'metro',
      'realty', 'construct', 'prime', 'haven', 'nest', 'house', 'villa', 'manor', 'palace', 'castle',
      'fort', 'citadel', 'base', 'foundation', 'ground', 'floor', 'level', 'story', 'tier', 'layer',
      'wall', 'roof', 'door', 'gate', 'arch', 'beam', 'pillar', 'column', 'frame', 'structure',
      'design', 'plan', 'plot', 'site', 'zone', 'area', 'region', 'sector', 'block', 'complex',
      'park', 'garden', 'green', 'lawn', 'yard', 'court', 'plaza', 'square', 'circle', 'avenue',
      'street', 'road', 'lane', 'path', 'way', 'drive', 'boulevard', 'terrace', 'heights', 'view',
      'skyline', 'horizon', 'vista', 'panorama', 'scene', 'landscape', 'cityscape', 'township', 'colony', 'enclave'
    ],
    hindiKeywords: ['निर्माण', 'भवन', 'घर', 'नगर', 'आवास', 'स्थल', 'जमीन', 'संपत्ति'],
  },
  {
    id: 'consulting',
    name: { en: 'Consulting & Services', hi: 'परामर्श और सेवाएं' },
    icon: '📊',
    favorableNumbers: [1, 3, 7, 8],
    keywords: [
      'consult', 'solve', 'assist', 'guide', 'expert', 'pro', 'prime', 'edge', 'peak', 'apex',
      'insight', 'strategy', 'ally', 'trust', 'core', 'partner', 'team', 'group', 'crew', 'squad',
      'force', 'power', 'strength', 'might', 'vigor', 'drive', 'push', 'thrust', 'boost', 'lift',
      'rise', 'climb', 'scale', 'grow', 'expand', 'extend', 'reach', 'span', 'scope', 'range',
      'vision', 'view', 'sight', 'focus', 'lens', 'angle', 'perspective', 'outlook', 'horizon', 'vista',
      'path', 'way', 'road', 'route', 'track', 'trail', 'course', 'direction', 'bearing', 'heading',
      'plan', 'scheme', 'program', 'project', 'venture', 'endeavor', 'effort', 'mission', 'quest', 'pursuit',
      'goal', 'target', 'aim', 'objective', 'purpose', 'intent', 'motive', 'reason', 'cause', 'factor'
    ],
    hindiKeywords: ['परामर्श', 'सलाह', 'मार्गदर्शन', 'विशेषज्ञ', 'सहायता', 'सेवा', 'समाधान'],
  },
  {
    id: 'manufacturing',
    name: { en: 'Manufacturing & Industry', hi: 'विनिर्माण और उद्योग' },
    icon: '🏭',
    favorableNumbers: [4, 6, 8],
    keywords: [
      'make', 'forge', 'craft', 'build', 'work', 'steel', 'iron', 'power', 'machine', 'auto',
      'tech', 'factory', 'produce', 'engineer', 'fabricate', 'assemble', 'construct', 'create', 'design', 'develop',
      'manufacture', 'process', 'refine', 'polish', 'finish', 'complete', 'perfect', 'quality', 'grade', 'standard',
      'tool', 'gear', 'part', 'component', 'module', 'unit', 'system', 'assembly', 'line', 'plant',
      'mill', 'works', 'yard', 'shop', 'floor', 'bay', 'dock', 'port', 'terminal', 'hub',
      'motor', 'engine', 'drive', 'pump', 'valve', 'pipe', 'tube', 'wire', 'cable', 'circuit',
      'metal', 'alloy', 'bronze', 'copper', 'brass', 'aluminum', 'titanium', 'carbon', 'fiber', 'polymer',
      'precision', 'accuracy', 'tolerance', 'spec', 'standard', 'measure', 'gauge', 'meter', 'sensor', 'control'
    ],
    hindiKeywords: ['उद्योग', 'निर्माण', 'यंत्र', 'शक्ति', 'उत्पादन', 'कारखाना', 'संयंत्र'],
  },
  {
    id: 'transport',
    name: { en: 'Transport & Logistics', hi: 'परिवहन और लॉजिस्टिक्स' },
    icon: '🚚',
    favorableNumbers: [5, 7, 8],
    keywords: [
      'move', 'ship', 'swift', 'fast', 'go', 'trans', 'route', 'path', 'track', 'fleet',
      'cargo', 'express', 'rapid', 'flow', 'link', 'connect', 'bridge', 'gateway', 'portal', 'hub',
      'terminal', 'station', 'depot', 'dock', 'port', 'harbor', 'pier', 'wharf', 'jetty', 'quay',
      'road', 'highway', 'freeway', 'motorway', 'lane', 'avenue', 'boulevard', 'street', 'way', 'drive',
      'air', 'sky', 'jet', 'flight', 'wing', 'soar', 'glide', 'cruise', 'voyage', 'journey',
      'sea', 'ocean', 'wave', 'tide', 'current', 'stream', 'river', 'channel', 'strait', 'passage',
      'rail', 'train', 'metro', 'tram', 'subway', 'tube', 'line', 'network', 'grid', 'system',
      'truck', 'van', 'lorry', 'trailer', 'container', 'box', 'crate', 'pallet', 'pack', 'load'
    ],
    hindiKeywords: ['परिवहन', 'गति', 'मार्ग', 'यात्रा', 'वाहन', 'भेज', 'माल', 'लदान'],
  },
  {
    id: 'spiritual',
    name: { en: 'Spiritual & Wellness', hi: 'आध्यात्मिक और कल्याण' },
    icon: '🕉️',
    favorableNumbers: [7, 9, 2],
    keywords: [
      'soul', 'peace', 'zen', 'calm', 'divine', 'spirit', 'sacred', 'karma', 'dharma', 'om',
      'bliss', 'serenity', 'harmony', 'light', 'aura', 'energy', 'chakra', 'prana', 'shakti', 'kundalini',
      'yoga', 'meditation', 'mantra', 'tantra', 'sutra', 'veda', 'guru', 'master', 'sage', 'saint',
      'temple', 'shrine', 'altar', 'sanctuary', 'haven', 'retreat', 'ashram', 'hermitage', 'monastery', 'abbey',
      'prayer', 'worship', 'devotion', 'faith', 'belief', 'trust', 'hope', 'grace', 'blessing', 'gift',
      'cosmic', 'celestial', 'astral', 'ethereal', 'mystic', 'occult', 'esoteric', 'arcane', 'ancient', 'eternal',
      'infinity', 'beyond', 'transcend', 'ascend', 'elevate', 'uplift', 'enlighten', 'awaken', 'illuminate', 'radiate',
      'pure', 'clean', 'clear', 'white', 'golden', 'silver', 'crystal', 'diamond', 'lotus', 'moon'
    ],
    hindiKeywords: ['आत्मा', 'शांति', 'ध्यान', 'योग', 'मोक्ष', 'साधना', 'चेतना', 'ज्योति'],
  },
  {
    id: 'legal',
    name: { en: 'Legal Services', hi: 'कानूनी सेवाएं' },
    icon: '⚖️',
    favorableNumbers: [4, 7, 8],
    keywords: [
      'law', 'legal', 'justice', 'right', 'trust', 'firm', 'counsel', 'advocate', 'equity', 'fair',
      'shield', 'guard', 'defend', 'protect', 'secure', 'safe', 'sure', 'certain', 'solid', 'strong',
      'court', 'bench', 'bar', 'chamber', 'office', 'practice', 'case', 'matter', 'issue', 'claim',
      'suit', 'action', 'motion', 'plea', 'appeal', 'verdict', 'judgment', 'ruling', 'decree', 'order',
      'contract', 'agreement', 'pact', 'treaty', 'covenant', 'bond', 'deed', 'title', 'license', 'permit',
      'rights', 'liberty', 'freedom', 'choice', 'consent', 'approval', 'sanction', 'authority', 'power', 'control',
      'rule', 'regulation', 'statute', 'code', 'act', 'bill', 'law', 'policy', 'protocol', 'procedure',
      'ethics', 'integrity', 'honor', 'dignity', 'respect', 'principle', 'standard', 'norm', 'value', 'virtue'
    ],
    hindiKeywords: ['न्याय', 'कानून', 'विधि', 'अधिकार', 'वकील', 'न्यायालय', 'संविधान'],
  },
  {
    id: 'beauty',
    name: { en: 'Beauty & Fashion', hi: 'सौंदर्य और फैशन' },
    icon: '💄',
    favorableNumbers: [3, 6, 9],
    keywords: [
      'beauty', 'glow', 'style', 'chic', 'glam', 'luxe', 'belle', 'vogue', 'trend', 'aura',
      'radiant', 'bloom', 'charm', 'grace', 'shine', 'sparkle', 'glitter', 'shimmer', 'gleam', 'flash',
      'dazzle', 'brilliant', 'luminous', 'bright', 'vivid', 'vibrant', 'colorful', 'rich', 'deep', 'intense',
      'soft', 'gentle', 'smooth', 'silky', 'satin', 'velvet', 'lace', 'silk', 'cotton', 'linen',
      'fashion', 'mode', 'design', 'create', 'craft', 'art', 'couture', 'haute', 'elite', 'premier',
      'royal', 'regal', 'noble', 'classy', 'elegant', 'refined', 'polished', 'sophisticated', 'cultured', 'chic',
      'modern', 'contemporary', 'trendy', 'hip', 'cool', 'hot', 'fresh', 'new', 'now', 'today',
      'skin', 'hair', 'nail', 'face', 'body', 'spa', 'salon', 'studio', 'boutique', 'atelier'
    ],
    hindiKeywords: ['सौंदर्य', 'रूप', 'श्रृंगार', 'शोभा', 'कांति', 'लावण्य', 'फैशन', 'स्टाइल'],
  },
  {
    id: 'agriculture',
    name: { en: 'Agriculture & Farming', hi: 'कृषि और खेती' },
    icon: '🌾',
    favorableNumbers: [4, 6, 2],
    keywords: [
      'farm', 'grow', 'green', 'field', 'harvest', 'seed', 'crop', 'nature', 'earth', 'organic',
      'fresh', 'root', 'bloom', 'fertile', 'agro', 'soil', 'land', 'terrain', 'ground', 'plot',
      'plant', 'tree', 'shrub', 'bush', 'vine', 'herb', 'grass', 'grain', 'wheat', 'rice',
      'corn', 'maize', 'millet', 'barley', 'oats', 'pulse', 'bean', 'lentil', 'pea', 'nut',
      'fruit', 'apple', 'mango', 'orange', 'banana', 'grape', 'berry', 'melon', 'citrus', 'tropical',
      'vegetable', 'tomato', 'potato', 'onion', 'carrot', 'cabbage', 'spinach', 'lettuce', 'pepper', 'chili',
      'dairy', 'milk', 'cream', 'butter', 'cheese', 'yogurt', 'egg', 'poultry', 'cattle', 'livestock',
      'natural', 'pure', 'clean', 'healthy', 'nutritious', 'wholesome', 'local', 'native', 'indigenous', 'heritage'
    ],
    hindiKeywords: ['कृषि', 'खेत', 'फसल', 'हरित', 'भूमि', 'अन्न', 'बीज', 'किसान'],
  },
];

// ============================================================================
// Brand Energy Profiles (Numbers 1-9)
// ============================================================================

const BRAND_ENERGY_PROFILES: Record<number, BrandEnergyProfile> = {
  1: {
    number: 1,
    name: { en: 'The Pioneer', hi: 'अग्रणी' },
    strengths: [
      { en: 'Strong leadership presence', hi: 'मजबूत नेतृत्व उपस्थिति' },
      { en: 'Innovation and originality', hi: 'नवाचार और मौलिकता' },
      { en: 'Independent brand identity', hi: 'स्वतंत्र ब्रांड पहचान' },
    ],
    challenges: [
      { en: 'May appear too aggressive', hi: 'बहुत आक्रामक दिख सकता है' },
    ],
    bestFor: [
      { en: 'Startups', hi: 'स्टार्टअप' },
      { en: 'Tech companies', hi: 'टेक कंपनियां' },
    ],
    planet: { en: 'Sun', hi: 'सूर्य' },
    element: { en: 'Fire', hi: 'अग्नि' },
    color: 'Gold',
    colorHex: '#FFD700',
  },
  2: {
    number: 2,
    name: { en: 'The Diplomat', hi: 'कूटनीतिज्ञ' },
    strengths: [
      { en: 'Excellent customer relations', hi: 'उत्कृष्ट ग्राहक संबंध' },
      { en: 'Partnership harmony', hi: 'साझेदारी सामंजस्य' },
    ],
    challenges: [
      { en: 'May lack assertiveness', hi: 'दृढ़ता की कमी हो सकती है' },
    ],
    bestFor: [
      { en: 'Service businesses', hi: 'सेवा व्यवसाय' },
      { en: 'Healthcare', hi: 'स्वास्थ्य सेवा' },
    ],
    planet: { en: 'Moon', hi: 'चंद्रमा' },
    element: { en: 'Water', hi: 'जल' },
    color: 'Silver',
    colorHex: '#C0C0C0',
  },
  3: {
    number: 3,
    name: { en: 'The Creator', hi: 'निर्माता' },
    strengths: [
      { en: 'High creativity', hi: 'उच्च रचनात्मकता' },
      { en: 'Excellent communication', hi: 'उत्कृष्ट संचार' },
    ],
    challenges: [
      { en: 'May scatter focus', hi: 'ध्यान बिखर सकता है' },
    ],
    bestFor: [
      { en: 'Creative agencies', hi: 'क्रिएटिव एजेंसियां' },
      { en: 'Entertainment', hi: 'मनोरंजन' },
    ],
    planet: { en: 'Jupiter', hi: 'बृहस्पति' },
    element: { en: 'Fire', hi: 'अग्नि' },
    color: 'Yellow',
    colorHex: '#FFD700',
  },
  4: {
    number: 4,
    name: { en: 'The Builder', hi: 'निर्माणकर्ता' },
    strengths: [
      { en: 'Rock-solid reliability', hi: 'ठोस विश्वसनीयता' },
      { en: 'Strong foundation', hi: 'मजबूत नींव' },
    ],
    challenges: [
      { en: 'May seem rigid', hi: 'कठोर लग सकता है' },
    ],
    bestFor: [
      { en: 'Construction', hi: 'निर्माण' },
      { en: 'Manufacturing', hi: 'विनिर्माण' },
    ],
    planet: { en: 'Rahu', hi: 'राहु' },
    element: { en: 'Earth', hi: 'पृथ्वी' },
    color: 'Brown',
    colorHex: '#8B4513',
  },
  5: {
    number: 5,
    name: { en: 'The Communicator', hi: 'संवाददाता' },
    strengths: [
      { en: 'Adaptable and versatile', hi: 'अनुकूलनीय और बहुमुखी' },
      { en: 'Mass appeal', hi: 'जन आकर्षण' },
    ],
    challenges: [
      { en: 'May lack depth', hi: 'गहराई की कमी हो सकती है' },
    ],
    bestFor: [
      { en: 'Media companies', hi: 'मीडिया कंपनियां' },
      { en: 'E-commerce', hi: 'ई-कॉमर्स' },
    ],
    planet: { en: 'Mercury', hi: 'बुध' },
    element: { en: 'Air', hi: 'वायु' },
    color: 'Green',
    colorHex: '#228B22',
  },
  6: {
    number: 6,
    name: { en: 'The Nurturer', hi: 'पोषक' },
    strengths: [
      { en: 'Strong customer loyalty', hi: 'मजबूत ग्राहक निष्ठा' },
      { en: 'Aesthetic excellence', hi: 'सौंदर्य उत्कृष्टता' },
    ],
    challenges: [
      { en: 'May over-commit', hi: 'अधिक प्रतिबद्ध हो सकता है' },
    ],
    bestFor: [
      { en: 'Food & hospitality', hi: 'खाद्य और आतिथ्य' },
      { en: 'Beauty & wellness', hi: 'सौंदर्य और कल्याण' },
    ],
    planet: { en: 'Venus', hi: 'शुक्र' },
    element: { en: 'Earth', hi: 'पृथ्वी' },
    color: 'Pink',
    colorHex: '#FF69B4',
  },
  7: {
    number: 7,
    name: { en: 'The Analyst', hi: 'विश्लेषक' },
    strengths: [
      { en: 'Deep expertise', hi: 'गहरी विशेषज्ञता' },
      { en: 'Niche dominance', hi: 'विशिष्ट वर्चस्व' },
    ],
    challenges: [
      { en: 'Limited mass appeal', hi: 'सीमित जन आकर्षण' },
    ],
    bestFor: [
      { en: 'Research firms', hi: 'अनुसंधान फर्म' },
      { en: 'Technology R&D', hi: 'प्रौद्योगिकी R&D' },
    ],
    planet: { en: 'Ketu', hi: 'केतु' },
    element: { en: 'Water', hi: 'जल' },
    color: 'Purple',
    colorHex: '#800080',
  },
  8: {
    number: 8,
    name: { en: 'The Powerhouse', hi: 'शक्तिकेंद्र' },
    strengths: [
      { en: 'Authority and credibility', hi: 'अधिकार और विश्वसनीयता' },
      { en: 'Financial success', hi: 'वित्तीय सफलता' },
    ],
    challenges: [
      { en: 'May face karma cycles', hi: 'कर्म चक्र का सामना' },
    ],
    bestFor: [
      { en: 'Finance & banking', hi: 'वित्त और बैंकिंग' },
      { en: 'Real estate', hi: 'रियल एस्टेट' },
    ],
    planet: { en: 'Saturn', hi: 'शनि' },
    element: { en: 'Earth', hi: 'पृथ्वी' },
    color: 'Black',
    colorHex: '#000000',
  },
  9: {
    number: 9,
    name: { en: 'The Humanitarian', hi: 'मानवतावादी' },
    strengths: [
      { en: 'Global appeal', hi: 'वैश्विक आकर्षण' },
      { en: 'Strong brand values', hi: 'मजबूत ब्रांड मूल्य' },
    ],
    challenges: [
      { en: 'May struggle with profitability', hi: 'लाभप्रदता से जूझ सकता है' },
    ],
    bestFor: [
      { en: 'NGOs', hi: 'NGO' },
      { en: 'International trade', hi: 'अंतर्राष्ट्रीय व्यापार' },
    ],
    planet: { en: 'Mars', hi: 'मंगल' },
    element: { en: 'Fire', hi: 'अग्नि' },
    color: 'Red',
    colorHex: '#DC143C',
  },
};

// ============================================================================
// Number Friendships (for compatibility)
// ============================================================================

const NUMBER_FRIENDSHIPS: Record<number, { friendly: number[]; neutral: number[]; unfriendly: number[] }> = {
  1: { friendly: [1, 2, 3, 9], neutral: [5, 6], unfriendly: [4, 7, 8] },
  2: { friendly: [1, 2, 7, 9], neutral: [3, 4], unfriendly: [5, 6, 8] },
  3: { friendly: [1, 3, 6, 9], neutral: [2, 5], unfriendly: [4, 7, 8] },
  4: { friendly: [4, 5, 6, 7], neutral: [2, 8], unfriendly: [1, 3, 9] },
  5: { friendly: [1, 4, 5, 6, 7], neutral: [3, 9], unfriendly: [2, 8] },
  6: { friendly: [3, 4, 5, 6, 9], neutral: [1, 8], unfriendly: [2, 7] },
  7: { friendly: [2, 4, 5, 7], neutral: [8, 9], unfriendly: [1, 3, 6] },
  8: { friendly: [4, 5, 6, 8], neutral: [2, 7], unfriendly: [1, 3, 9] },
  9: { friendly: [1, 2, 3, 6, 9], neutral: [5, 7], unfriendly: [4, 8] },
};

// ============================================================================
// Sanskrit/Hindi Business Name Roots
// ============================================================================

const SANSKRIT_ROOTS: { word: string; meaning: BilingualText; goodFor: string[] }[] = [
  // Original 26 roots
  { word: 'Shakti', meaning: { en: 'Power/Energy', hi: 'शक्ति' }, goodFor: ['technology', 'manufacturing', 'consulting'] },
  { word: 'Pragati', meaning: { en: 'Progress', hi: 'प्रगति' }, goodFor: ['education', 'consulting', 'finance'] },
  { word: 'Vijay', meaning: { en: 'Victory', hi: 'विजय' }, goodFor: ['consulting', 'legal', 'finance'] },
  { word: 'Anand', meaning: { en: 'Bliss/Joy', hi: 'आनंद' }, goodFor: ['spiritual', 'healthcare', 'food'] },
  { word: 'Shubh', meaning: { en: 'Auspicious', hi: 'शुभ' }, goodFor: ['spiritual', 'retail', 'beauty'] },
  { word: 'Nirmaan', meaning: { en: 'Creation/Build', hi: 'निर्माण' }, goodFor: ['construction', 'manufacturing', 'creative'] },
  { word: 'Vriddhi', meaning: { en: 'Growth', hi: 'वृद्धि' }, goodFor: ['finance', 'agriculture', 'education'] },
  { word: 'Saral', meaning: { en: 'Simple/Easy', hi: 'सरल' }, goodFor: ['technology', 'retail', 'education'] },
  { word: 'Urja', meaning: { en: 'Energy', hi: 'ऊर्जा' }, goodFor: ['healthcare', 'technology', 'spiritual'] },
  { word: 'Netra', meaning: { en: 'Eye/Vision', hi: 'नेत्र' }, goodFor: ['creative', 'consulting', 'healthcare'] },
  { word: 'Dhruv', meaning: { en: 'Constant/Pole Star', hi: 'ध्रुव' }, goodFor: ['finance', 'consulting', 'technology'] },
  { word: 'Akash', meaning: { en: 'Sky', hi: 'आकाश' }, goodFor: ['transport', 'technology', 'creative'] },
  { word: 'Priya', meaning: { en: 'Beloved', hi: 'प्रिय' }, goodFor: ['beauty', 'retail', 'food'] },
  { word: 'Nidhi', meaning: { en: 'Treasure', hi: 'निधि' }, goodFor: ['finance', 'retail', 'beauty'] },
  { word: 'Vayu', meaning: { en: 'Wind/Air', hi: 'वायु' }, goodFor: ['transport', 'healthcare', 'technology'] },
  { word: 'Agni', meaning: { en: 'Fire', hi: 'अग्नि' }, goodFor: ['manufacturing', 'food', 'creative'] },
  { word: 'Jal', meaning: { en: 'Water', hi: 'जल' }, goodFor: ['healthcare', 'agriculture', 'spiritual'] },
  { word: 'Bhumi', meaning: { en: 'Earth', hi: 'भूमि' }, goodFor: ['agriculture', 'construction', 'retail'] },
  { word: 'Siddhi', meaning: { en: 'Achievement', hi: 'सिद्धि' }, goodFor: ['consulting', 'education', 'spiritual'] },
  { word: 'Lakshya', meaning: { en: 'Goal/Target', hi: 'लक्ष्य' }, goodFor: ['consulting', 'education', 'finance'] },
  { word: 'Samridhi', meaning: { en: 'Prosperity', hi: 'समृद्धि' }, goodFor: ['finance', 'retail', 'agriculture'] },
  { word: 'Tantra', meaning: { en: 'System/Technique', hi: 'तंत्र' }, goodFor: ['technology', 'consulting', 'manufacturing'] },
  { word: 'Yantra', meaning: { en: 'Instrument', hi: 'यंत्र' }, goodFor: ['technology', 'manufacturing', 'healthcare'] },
  { word: 'Mantra', meaning: { en: 'Sacred Word', hi: 'मंत्र' }, goodFor: ['spiritual', 'education', 'creative'] },
  { word: 'Sutra', meaning: { en: 'Thread/Formula', hi: 'सूत्र' }, goodFor: ['education', 'consulting', 'technology'] },
  // Wealth & Prosperity roots
  { word: 'Lakshmi', meaning: { en: 'Goddess of Wealth', hi: 'लक्ष्मी' }, goodFor: ['finance', 'retail', 'beauty'] },
  { word: 'Dhan', meaning: { en: 'Wealth', hi: 'धन' }, goodFor: ['finance', 'consulting', 'retail'] },
  { word: 'Ratna', meaning: { en: 'Gem/Jewel', hi: 'रत्न' }, goodFor: ['beauty', 'retail', 'creative'] },
  { word: 'Sona', meaning: { en: 'Gold', hi: 'सोना' }, goodFor: ['finance', 'beauty', 'retail'] },
  { word: 'Sampada', meaning: { en: 'Assets/Wealth', hi: 'संपदा' }, goodFor: ['finance', 'consulting', 'retail'] },
  { word: 'Aishwarya', meaning: { en: 'Prosperity', hi: 'ऐश्वर्य' }, goodFor: ['beauty', 'finance', 'retail'] },
  { word: 'Subodh', meaning: { en: 'Good Wisdom', hi: 'सुबोध' }, goodFor: ['education', 'consulting', 'finance'] },
  // Knowledge & Wisdom roots
  { word: 'Vidya', meaning: { en: 'Knowledge', hi: 'विद्या' }, goodFor: ['education', 'technology', 'consulting'] },
  { word: 'Gyan', meaning: { en: 'Wisdom', hi: 'ज्ञान' }, goodFor: ['education', 'spiritual', 'consulting'] },
  { word: 'Bodhi', meaning: { en: 'Enlightenment', hi: 'बोधि' }, goodFor: ['spiritual', 'education', 'healthcare'] },
  { word: 'Prabodh', meaning: { en: 'Awakening', hi: 'प्रबोध' }, goodFor: ['education', 'spiritual', 'healthcare'] },
  { word: 'Medha', meaning: { en: 'Intelligence', hi: 'मेधा' }, goodFor: ['education', 'technology', 'consulting'] },
  { word: 'Buddhi', meaning: { en: 'Intellect', hi: 'बुद्धि' }, goodFor: ['education', 'consulting', 'technology'] },
  { word: 'Shiksha', meaning: { en: 'Education', hi: 'शिक्षा' }, goodFor: ['education', 'consulting', 'creative'] },
  { word: 'Guru', meaning: { en: 'Teacher/Master', hi: 'गुरु' }, goodFor: ['education', 'spiritual', 'consulting'] },
  // Success & Achievement roots
  { word: 'Safal', meaning: { en: 'Successful', hi: 'सफल' }, goodFor: ['consulting', 'education', 'finance'] },
  { word: 'Jeet', meaning: { en: 'Win', hi: 'जीत' }, goodFor: ['consulting', 'finance', 'technology'] },
  { word: 'Uday', meaning: { en: 'Rise/Dawn', hi: 'उदय' }, goodFor: ['technology', 'creative', 'consulting'] },
  { word: 'Unnati', meaning: { en: 'Progress', hi: 'उन्नति' }, goodFor: ['education', 'consulting', 'finance'] },
  { word: 'Utkarsh', meaning: { en: 'Excellence', hi: 'उत्कर्ष' }, goodFor: ['education', 'consulting', 'technology'] },
  { word: 'Pratham', meaning: { en: 'First', hi: 'प्रथम' }, goodFor: ['consulting', 'technology', 'education'] },
  { word: 'Shresth', meaning: { en: 'Best/Superior', hi: 'श्रेष्ठ' }, goodFor: ['consulting', 'manufacturing', 'retail'] },
  { word: 'Uttam', meaning: { en: 'Excellent', hi: 'उत्तम' }, goodFor: ['retail', 'manufacturing', 'food'] },
  // Nature & Elements roots
  { word: 'Surya', meaning: { en: 'Sun', hi: 'सूर्य' }, goodFor: ['technology', 'healthcare', 'creative'] },
  { word: 'Chandra', meaning: { en: 'Moon', hi: 'चंद्र' }, goodFor: ['beauty', 'creative', 'spiritual'] },
  { word: 'Tara', meaning: { en: 'Star', hi: 'तारा' }, goodFor: ['creative', 'beauty', 'technology'] },
  { word: 'Prithvi', meaning: { en: 'Earth', hi: 'पृथ्वी' }, goodFor: ['agriculture', 'construction', 'retail'] },
  { word: 'Sagar', meaning: { en: 'Ocean', hi: 'सागर' }, goodFor: ['transport', 'food', 'creative'] },
  { word: 'Parvat', meaning: { en: 'Mountain', hi: 'पर्वत' }, goodFor: ['construction', 'consulting', 'finance'] },
  { word: 'Vriksha', meaning: { en: 'Tree', hi: 'वृक्ष' }, goodFor: ['agriculture', 'healthcare', 'spiritual'] },
  { word: 'Pushp', meaning: { en: 'Flower', hi: 'पुष्प' }, goodFor: ['beauty', 'retail', 'creative'] },
  { word: 'Megha', meaning: { en: 'Cloud', hi: 'मेघ' }, goodFor: ['technology', 'creative', 'transport'] },
  { word: 'Nadi', meaning: { en: 'River', hi: 'नदी' }, goodFor: ['healthcare', 'transport', 'agriculture'] },
  // Positive Qualities roots
  { word: 'Satya', meaning: { en: 'Truth', hi: 'सत्य' }, goodFor: ['consulting', 'education', 'spiritual'] },
  { word: 'Dharma', meaning: { en: 'Righteousness', hi: 'धर्म' }, goodFor: ['spiritual', 'consulting', 'legal'] },
  { word: 'Seva', meaning: { en: 'Service', hi: 'सेवा' }, goodFor: ['healthcare', 'consulting', 'spiritual'] },
  { word: 'Karuna', meaning: { en: 'Compassion', hi: 'करुणा' }, goodFor: ['healthcare', 'spiritual', 'education'] },
  { word: 'Shanti', meaning: { en: 'Peace', hi: 'शांति' }, goodFor: ['spiritual', 'healthcare', 'beauty'] },
  { word: 'Prem', meaning: { en: 'Love', hi: 'प्रेम' }, goodFor: ['beauty', 'food', 'creative'] },
  { word: 'Sneha', meaning: { en: 'Affection', hi: 'स्नेह' }, goodFor: ['beauty', 'healthcare', 'food'] },
  { word: 'Sahaj', meaning: { en: 'Natural/Easy', hi: 'सहज' }, goodFor: ['technology', 'retail', 'healthcare'] },
  { word: 'Nishtha', meaning: { en: 'Dedication', hi: 'निष्ठा' }, goodFor: ['consulting', 'education', 'manufacturing'] },
  { word: 'Shraddha', meaning: { en: 'Faith', hi: 'श्रद्धा' }, goodFor: ['spiritual', 'education', 'consulting'] },
  // Technology & Innovation roots
  { word: 'Navya', meaning: { en: 'New/Novel', hi: 'नव्य' }, goodFor: ['technology', 'creative', 'manufacturing'] },
  { word: 'Adbhut', meaning: { en: 'Wonderful', hi: 'अद्भुत' }, goodFor: ['creative', 'technology', 'retail'] },
  { word: 'Vismay', meaning: { en: 'Wonder', hi: 'विस्मय' }, goodFor: ['creative', 'technology', 'education'] },
  { word: 'Taknik', meaning: { en: 'Technical', hi: 'तकनीक' }, goodFor: ['technology', 'manufacturing', 'consulting'] },
  { word: 'Drishtikon', meaning: { en: 'Perspective', hi: 'दृष्टिकोण' }, goodFor: ['consulting', 'creative', 'education'] },
  { word: 'Sanchar', meaning: { en: 'Communication', hi: 'संचार' }, goodFor: ['technology', 'creative', 'consulting'] },
  { word: 'Gati', meaning: { en: 'Speed/Motion', hi: 'गति' }, goodFor: ['transport', 'technology', 'consulting'] },
  // Health & Wellness roots
  { word: 'Arogya', meaning: { en: 'Health', hi: 'आरोग्य' }, goodFor: ['healthcare', 'food', 'spiritual'] },
  { word: 'Swasth', meaning: { en: 'Healthy', hi: 'स्वस्थ' }, goodFor: ['healthcare', 'food', 'retail'] },
  { word: 'Ayush', meaning: { en: 'Life/Longevity', hi: 'आयुष' }, goodFor: ['healthcare', 'spiritual', 'food'] },
  { word: 'Prana', meaning: { en: 'Life Force', hi: 'प्राण' }, goodFor: ['healthcare', 'spiritual', 'creative'] },
  { word: 'Chikitsa', meaning: { en: 'Treatment', hi: 'चिकित्सा' }, goodFor: ['healthcare', 'consulting', 'spiritual'] },
  { word: 'Aushadhi', meaning: { en: 'Medicine', hi: 'औषधि' }, goodFor: ['healthcare', 'agriculture', 'retail'] },
  // Business & Commerce roots
  { word: 'Vyapar', meaning: { en: 'Business', hi: 'व्यापार' }, goodFor: ['retail', 'consulting', 'finance'] },
  { word: 'Vanijya', meaning: { en: 'Commerce', hi: 'वाणिज्य' }, goodFor: ['retail', 'finance', 'consulting'] },
  { word: 'Vikas', meaning: { en: 'Development', hi: 'विकास' }, goodFor: ['construction', 'consulting', 'technology'] },
  { word: 'Nirman', meaning: { en: 'Construction', hi: 'निर्माण' }, goodFor: ['construction', 'manufacturing', 'technology'] },
  { word: 'Udyog', meaning: { en: 'Industry', hi: 'उद्योग' }, goodFor: ['manufacturing', 'consulting', 'technology'] },
  { word: 'Karobar', meaning: { en: 'Trade', hi: 'कारोबार' }, goodFor: ['retail', 'finance', 'consulting'] },
  // Creative & Arts roots
  { word: 'Kala', meaning: { en: 'Art', hi: 'कला' }, goodFor: ['creative', 'education', 'beauty'] },
  { word: 'Ranga', meaning: { en: 'Color/Stage', hi: 'रंग' }, goodFor: ['creative', 'beauty', 'retail'] },
  { word: 'Sangeet', meaning: { en: 'Music', hi: 'संगीत' }, goodFor: ['creative', 'education', 'spiritual'] },
  { word: 'Nritya', meaning: { en: 'Dance', hi: 'नृत्य' }, goodFor: ['creative', 'education', 'beauty'] },
  { word: 'Chittra', meaning: { en: 'Picture', hi: 'चित्र' }, goodFor: ['creative', 'technology', 'retail'] },
  { word: 'Rachna', meaning: { en: 'Creation', hi: 'रचना' }, goodFor: ['creative', 'technology', 'construction'] },
  { word: 'Kavya', meaning: { en: 'Poetry', hi: 'काव्य' }, goodFor: ['creative', 'education', 'spiritual'] },
  // Divine & Spiritual roots
  { word: 'Divya', meaning: { en: 'Divine', hi: 'दिव्य' }, goodFor: ['spiritual', 'beauty', 'creative'] },
  { word: 'Mukti', meaning: { en: 'Liberation', hi: 'मुक्ति' }, goodFor: ['spiritual', 'healthcare', 'education'] },
  { word: 'Moksha', meaning: { en: 'Salvation', hi: 'मोक्ष' }, goodFor: ['spiritual', 'education', 'healthcare'] },
  { word: 'Param', meaning: { en: 'Supreme', hi: 'परम' }, goodFor: ['spiritual', 'consulting', 'education'] },
  { word: 'Pavitra', meaning: { en: 'Sacred/Pure', hi: 'पवित्र' }, goodFor: ['spiritual', 'food', 'healthcare'] },
  { word: 'Amrit', meaning: { en: 'Nectar/Immortality', hi: 'अमृत' }, goodFor: ['healthcare', 'food', 'spiritual'] },
  { word: 'Ananta', meaning: { en: 'Infinite', hi: 'अनंत' }, goodFor: ['technology', 'spiritual', 'creative'] },
  { word: 'Shiv', meaning: { en: 'Auspicious/Lord', hi: 'शिव' }, goodFor: ['spiritual', 'healthcare', 'construction'] },
  // Beauty & Fashion roots
  { word: 'Sundara', meaning: { en: 'Beautiful', hi: 'सुंदर' }, goodFor: ['beauty', 'creative', 'retail'] },
  { word: 'Sobha', meaning: { en: 'Grace/Beauty', hi: 'शोभा' }, goodFor: ['beauty', 'retail', 'creative'] },
  { word: 'Lavanya', meaning: { en: 'Elegance', hi: 'लावण्य' }, goodFor: ['beauty', 'retail', 'creative'] },
  { word: 'Roop', meaning: { en: 'Form/Beauty', hi: 'रूप' }, goodFor: ['beauty', 'creative', 'retail'] },
  { word: 'Kanti', meaning: { en: 'Radiance', hi: 'कांति' }, goodFor: ['beauty', 'healthcare', 'retail'] },
  // Food & Agriculture roots
  { word: 'Anna', meaning: { en: 'Food/Grain', hi: 'अन्न' }, goodFor: ['food', 'agriculture', 'retail'] },
  { word: 'Krishi', meaning: { en: 'Agriculture', hi: 'कृषि' }, goodFor: ['agriculture', 'food', 'retail'] },
  { word: 'Phal', meaning: { en: 'Fruit', hi: 'फल' }, goodFor: ['food', 'agriculture', 'retail'] },
  { word: 'Swadu', meaning: { en: 'Tasty', hi: 'स्वादु' }, goodFor: ['food', 'retail', 'creative'] },
  { word: 'Rasoi', meaning: { en: 'Kitchen', hi: 'रसोई' }, goodFor: ['food', 'retail', 'manufacturing'] },
  // Additional Modern Business roots
  { word: 'Vishwa', meaning: { en: 'World/Universe', hi: 'विश्व' }, goodFor: ['technology', 'consulting', 'creative'] },
  { word: 'Yatra', meaning: { en: 'Journey', hi: 'यात्रा' }, goodFor: ['transport', 'spiritual', 'creative'] },
  { word: 'Mitra', meaning: { en: 'Friend', hi: 'मित्र' }, goodFor: ['consulting', 'retail', 'technology'] },
  { word: 'Sahyog', meaning: { en: 'Cooperation', hi: 'सहयोग' }, goodFor: ['consulting', 'finance', 'manufacturing'] },
  { word: 'Ekta', meaning: { en: 'Unity', hi: 'एकता' }, goodFor: ['consulting', 'education', 'spiritual'] },
  { word: 'Vishesh', meaning: { en: 'Special', hi: 'विशेष' }, goodFor: ['retail', 'consulting', 'creative'] },
  { word: 'Nutan', meaning: { en: 'New/Fresh', hi: 'नूतन' }, goodFor: ['technology', 'creative', 'retail'] },
  { word: 'Saksham', meaning: { en: 'Capable', hi: 'सक्षम' }, goodFor: ['consulting', 'education', 'technology'] },
  { word: 'Gambhir', meaning: { en: 'Profound', hi: 'गंभीर' }, goodFor: ['consulting', 'finance', 'education'] },
  { word: 'Tejas', meaning: { en: 'Brilliance', hi: 'तेजस' }, goodFor: ['technology', 'creative', 'consulting'] },
  { word: 'Ojas', meaning: { en: 'Vitality', hi: 'ओजस' }, goodFor: ['healthcare', 'food', 'spiritual'] },
  { word: 'Yukti', meaning: { en: 'Strategy/Skill', hi: 'युक्ति' }, goodFor: ['consulting', 'technology', 'education'] },
  { word: 'Chetna', meaning: { en: 'Consciousness', hi: 'चेतना' }, goodFor: ['spiritual', 'healthcare', 'education'] },
  { word: 'Spandan', meaning: { en: 'Vibration', hi: 'स्पंदन' }, goodFor: ['creative', 'healthcare', 'spiritual'] },
  { word: 'Tarang', meaning: { en: 'Wave', hi: 'तरंग' }, goodFor: ['technology', 'creative', 'transport'] },
  { word: 'Bindu', meaning: { en: 'Point/Dot', hi: 'बिंदु' }, goodFor: ['technology', 'creative', 'education'] },
];

// ============================================================================
// English Word Distortion Rules
// ============================================================================

const DISTORTION_RULES: { from: string | RegExp; to: string; position?: 'start' | 'middle' | 'end' }[] = [
  { from: /i/g, to: 'y' },
  { from: /y/g, to: 'i' },
  { from: /er$/g, to: 'r' },
  { from: /er$/g, to: 'a' },
  { from: /a$/g, to: 'ah' },
  { from: /e$/g, to: 'ee' },
  { from: /ck/g, to: 'k' },
  { from: /ee/g, to: 'i' },
  { from: /oo/g, to: 'u' },
  { from: /ph/g, to: 'f' },
  { from: /qu/g, to: 'kw' },
  { from: /x/g, to: 'ks' },
  { from: /c(?=[ei])/g, to: 's' },
  { from: /c(?=[aou])/g, to: 'k' },
  { from: /tion$/g, to: 'shun' },
  { from: /ous$/g, to: 'us' },
  { from: /le$/g, to: 'l' },
  { from: /re$/g, to: 'r' },
  { from: /ight/g, to: 'yt' },
  { from: /ould/g, to: 'ud' },
];

// ============================================================================
// Portmanteau Word Roots (for creative fusion names)
// Examples: Decocracy (decor + democracy), VastuCart (vastu + cart), Appming (app + mingle)
// ============================================================================

const PORTMANTEAU_SUFFIXES: { suffix: string; meaning: BilingualText; blendPoint: number }[] = [
  // Original suffixes
  { suffix: 'cracy', meaning: { en: 'rule/power (democracy style)', hi: 'शासन/शक्ति' }, blendPoint: 3 },
  { suffix: 'ify', meaning: { en: 'to make/transform', hi: 'बनाना' }, blendPoint: 2 },
  { suffix: 'ology', meaning: { en: 'study/science of', hi: 'विज्ञान' }, blendPoint: 3 },
  { suffix: 'ista', meaning: { en: 'enthusiast/expert', hi: 'विशेषज्ञ' }, blendPoint: 2 },
  { suffix: 'verse', meaning: { en: 'universe/world', hi: 'विश्व' }, blendPoint: 3 },
  { suffix: 'scape', meaning: { en: 'landscape/view', hi: 'दृश्य' }, blendPoint: 3 },
  { suffix: 'sphere', meaning: { en: 'realm/domain', hi: 'क्षेत्र' }, blendPoint: 3 },
  { suffix: 'nomics', meaning: { en: 'economics/system', hi: 'व्यवस्था' }, blendPoint: 3 },
  { suffix: 'topia', meaning: { en: 'ideal place', hi: 'आदर्श स्थान' }, blendPoint: 3 },
  { suffix: 'gram', meaning: { en: 'written/message', hi: 'संदेश' }, blendPoint: 2 },
  { suffix: 'hub', meaning: { en: 'center/hub', hi: 'केंद्र' }, blendPoint: 2 },
  { suffix: 'nest', meaning: { en: 'home/place', hi: 'घर' }, blendPoint: 2 },
  { suffix: 'mint', meaning: { en: 'fresh/new', hi: 'ताज़ा' }, blendPoint: 2 },
  { suffix: 'labs', meaning: { en: 'laboratory/research', hi: 'प्रयोगशाला' }, blendPoint: 2 },
  { suffix: 'box', meaning: { en: 'container/collection', hi: 'संग्रह' }, blendPoint: 2 },
  // New tech-inspired suffixes
  { suffix: 'sync', meaning: { en: 'synchronize/connect', hi: 'सिंक्रोनाइज़' }, blendPoint: 2 },
  { suffix: 'cloud', meaning: { en: 'cloud computing', hi: 'क्लाउड' }, blendPoint: 3 },
  { suffix: 'flow', meaning: { en: 'flow/movement', hi: 'प्रवाह' }, blendPoint: 2 },
  { suffix: 'wave', meaning: { en: 'wave/trend', hi: 'लहर' }, blendPoint: 2 },
  { suffix: 'stack', meaning: { en: 'stack/pile', hi: 'स्टैक' }, blendPoint: 3 },
  { suffix: 'base', meaning: { en: 'foundation/base', hi: 'आधार' }, blendPoint: 2 },
  { suffix: 'works', meaning: { en: 'works/factory', hi: 'वर्क्स' }, blendPoint: 3 },
  { suffix: 'logic', meaning: { en: 'logic/reasoning', hi: 'तर्क' }, blendPoint: 3 },
  { suffix: 'wise', meaning: { en: 'wise/smart', hi: 'बुद्धिमान' }, blendPoint: 2 },
  { suffix: 'matrix', meaning: { en: 'matrix/grid', hi: 'मैट्रिक्स' }, blendPoint: 3 },
  // Business & commerce suffixes
  { suffix: 'mart', meaning: { en: 'market/store', hi: 'मार्ट' }, blendPoint: 2 },
  { suffix: 'cart', meaning: { en: 'shopping cart', hi: 'कार्ट' }, blendPoint: 2 },
  { suffix: 'trade', meaning: { en: 'trade/commerce', hi: 'व्यापार' }, blendPoint: 3 },
  { suffix: 'corp', meaning: { en: 'corporation', hi: 'कॉर्प' }, blendPoint: 2 },
  { suffix: 'group', meaning: { en: 'group/team', hi: 'समूह' }, blendPoint: 3 },
  // Nature & wellness suffixes
  { suffix: 'green', meaning: { en: 'eco-friendly', hi: 'हरित' }, blendPoint: 3 },
  { suffix: 'life', meaning: { en: 'life/living', hi: 'जीवन' }, blendPoint: 2 },
  { suffix: 'pure', meaning: { en: 'pure/clean', hi: 'शुद्ध' }, blendPoint: 2 },
  { suffix: 'zen', meaning: { en: 'calm/peaceful', hi: 'शांत' }, blendPoint: 2 },
  { suffix: 'vibe', meaning: { en: 'vibe/energy', hi: 'वाइब' }, blendPoint: 2 },
  // Creative & trendy suffixes
  { suffix: 'nova', meaning: { en: 'new/star', hi: 'नोवा' }, blendPoint: 2 },
  { suffix: 'lux', meaning: { en: 'luxury', hi: 'लक्स' }, blendPoint: 2 },
  { suffix: 'prime', meaning: { en: 'prime/best', hi: 'प्राइम' }, blendPoint: 3 },
  { suffix: 'elite', meaning: { en: 'elite/top', hi: 'एलीट' }, blendPoint: 3 },
  { suffix: 'pro', meaning: { en: 'professional', hi: 'प्रो' }, blendPoint: 2 },
  { suffix: 'max', meaning: { en: 'maximum', hi: 'मैक्स' }, blendPoint: 2 },
  { suffix: 'plus', meaning: { en: 'plus/extra', hi: 'प्लस' }, blendPoint: 2 },
];

const CREATIVE_BLENDS: { base: string; blend: string; meaning: BilingualText }[] = [
  // Original blends
  { base: 'app', blend: 'ming', meaning: { en: 'apps + mingling', hi: 'ऐप्स + मिलन' } },
  { base: 'tech', blend: 'nova', meaning: { en: 'tech + innovation', hi: 'टेक + नवाचार' } },
  { base: 'digi', blend: 'zen', meaning: { en: 'digital + zen calm', hi: 'डिजिटल + शांति' } },
  { base: 'eco', blend: 'sphere', meaning: { en: 'eco + biosphere', hi: 'इको + जीवमंडल' } },
  { base: 'fin', blend: 'nova', meaning: { en: 'finance + nova', hi: 'वित्त + नोवा' } },
  { base: 'health', blend: 'ify', meaning: { en: 'health + simplify', hi: 'स्वास्थ्य + सरल' } },
  { base: 'smart', blend: 'ify', meaning: { en: 'smart + simplify', hi: 'स्मार्ट + सरल' } },
  { base: 'cloud', blend: 'nest', meaning: { en: 'cloud + nest', hi: 'क्लाउड + घोंसला' } },
  { base: 'data', blend: 'verse', meaning: { en: 'data + universe', hi: 'डेटा + विश्व' } },
  { base: 'mind', blend: 'scape', meaning: { en: 'mind + landscape', hi: 'मन + परिदृश्य' } },
  // Tech-focused blends
  { base: 'cyber', blend: 'link', meaning: { en: 'cyber + link', hi: 'साइबर + लिंक' } },
  { base: 'net', blend: 'wave', meaning: { en: 'network + wave', hi: 'नेटवर्क + लहर' } },
  { base: 'code', blend: 'craft', meaning: { en: 'code + craft', hi: 'कोड + शिल्प' } },
  { base: 'pixel', blend: 'art', meaning: { en: 'pixel + art', hi: 'पिक्सेल + कला' } },
  { base: 'logic', blend: 'flow', meaning: { en: 'logic + flow', hi: 'तर्क + प्रवाह' } },
  { base: 'sync', blend: 'wave', meaning: { en: 'sync + wave', hi: 'सिंक + लहर' } },
  { base: 'byte', blend: 'craft', meaning: { en: 'byte + craft', hi: 'बाइट + शिल्प' } },
  // Business-focused blends
  { base: 'trade', blend: 'mark', meaning: { en: 'trade + mark', hi: 'व्यापार + चिह्न' } },
  { base: 'deal', blend: 'hub', meaning: { en: 'deal + hub', hi: 'डील + हब' } },
  { base: 'cash', blend: 'flow', meaning: { en: 'cash + flow', hi: 'कैश + प्रवाह' } },
  { base: 'brand', blend: 'nova', meaning: { en: 'brand + nova', hi: 'ब्रांड + नोवा' } },
  { base: 'wealth', blend: 'wise', meaning: { en: 'wealth + wise', hi: 'धन + बुद्धि' } },
  // Creative blends
  { base: 'art', blend: 'flow', meaning: { en: 'art + flow', hi: 'कला + प्रवाह' } },
  { base: 'design', blend: 'hub', meaning: { en: 'design + hub', hi: 'डिज़ाइन + हब' } },
  { base: 'style', blend: 'lux', meaning: { en: 'style + luxury', hi: 'स्टाइल + लक्स' } },
  { base: 'color', blend: 'wave', meaning: { en: 'color + wave', hi: 'रंग + लहर' } },
  { base: 'media', blend: 'mint', meaning: { en: 'media + mint', hi: 'मीडिया + मिंट' } },
  // Wellness blends
  { base: 'vita', blend: 'pure', meaning: { en: 'vita + pure', hi: 'विटा + शुद्ध' } },
  { base: 'zen', blend: 'life', meaning: { en: 'zen + life', hi: 'ज़ेन + जीवन' } },
  { base: 'soul', blend: 'scape', meaning: { en: 'soul + scape', hi: 'आत्मा + दृश्य' } },
  { base: 'calm', blend: 'wave', meaning: { en: 'calm + wave', hi: 'शांत + लहर' } },
  { base: 'fit', blend: 'zone', meaning: { en: 'fit + zone', hi: 'फिट + ज़ोन' } },
  // Modern startup blends
  { base: 'insta', blend: 'cart', meaning: { en: 'instant + cart', hi: 'इंस्टैंट + कार्ट' } },
  { base: 'snap', blend: 'deal', meaning: { en: 'snap + deal', hi: 'स्नैप + डील' } },
  { base: 'quick', blend: 'buy', meaning: { en: 'quick + buy', hi: 'क्विक + बाय' } },
  { base: 'flash', blend: 'mart', meaning: { en: 'flash + mart', hi: 'फ्लैश + मार्ट' } },
  { base: 'rapid', blend: 'go', meaning: { en: 'rapid + go', hi: 'रैपिड + गो' } },
];

// ============================================================================
// Letter Pairs for DIY Name Building
// ============================================================================

export const FAVORABLE_LETTER_PAIRS: LetterPair[] = [
  // High energy pairs (Pythagorean 1)
  { letters: 'AJ', pythagoreanValue: 2, chaldeanValue: 2, energy: { en: 'Leadership & Initiative', hi: 'नेतृत्व और पहल' }, goodFor: ['technology', 'consulting'] },
  { letters: 'AS', pythagoreanValue: 2, chaldeanValue: 4, energy: { en: 'Authority & Success', hi: 'अधिकार और सफलता' }, goodFor: ['consulting', 'finance'] },
  { letters: 'SK', pythagoreanValue: 3, chaldeanValue: 5, energy: { en: 'Creative Expression', hi: 'रचनात्मक अभिव्यक्ति' }, goodFor: ['creative', 'education'] },
  { letters: 'PR', pythagoreanValue: 7, chaldeanValue: 10, energy: { en: 'Progress & Research', hi: 'प्रगति और शोध' }, goodFor: ['technology', 'healthcare'] },
  { letters: 'VR', pythagoreanValue: 4, chaldeanValue: 8, energy: { en: 'Vision & Reality', hi: 'दृष्टि और वास्तविकता' }, goodFor: ['creative', 'construction'] },
  // Balanced pairs
  { letters: 'SH', pythagoreanValue: 9, chaldeanValue: 8, energy: { en: 'Spiritual Harmony', hi: 'आध्यात्मिक सामंजस्य' }, goodFor: ['spiritual', 'healthcare'] },
  { letters: 'MA', pythagoreanValue: 5, chaldeanValue: 5, energy: { en: 'Maternal Care', hi: 'मातृत्व देखभाल' }, goodFor: ['healthcare', 'food'] },
  { letters: 'RI', pythagoreanValue: 9, chaldeanValue: 3, energy: { en: 'Rising Energy', hi: 'उभरती ऊर्जा' }, goodFor: ['retail', 'transport'] },
  { letters: 'NE', pythagoreanValue: 1, chaldeanValue: 10, energy: { en: 'New Beginnings', hi: 'नई शुरुआत' }, goodFor: ['technology', 'education'] },
  { letters: 'OM', pythagoreanValue: 1, chaldeanValue: 11, energy: { en: 'Universal Sound', hi: 'सार्वभौमिक ध्वनि' }, goodFor: ['spiritual', 'healthcare'] },
  // Prosperity pairs
  { letters: 'LX', pythagoreanValue: 9, chaldeanValue: 8, energy: { en: 'Luxury & Excellence', hi: 'विलासिता और उत्कृष्टता' }, goodFor: ['retail', 'beauty'] },
  { letters: 'GO', pythagoreanValue: 4, chaldeanValue: 10, energy: { en: 'Growth & Opportunity', hi: 'विकास और अवसर' }, goodFor: ['finance', 'agriculture'] },
  { letters: 'TR', pythagoreanValue: 2, chaldeanValue: 6, energy: { en: 'Trust & Reliability', hi: 'विश्वास और विश्वसनीयता' }, goodFor: ['finance', 'legal'] },
  { letters: 'ZE', pythagoreanValue: 4, chaldeanValue: 12, energy: { en: 'Zeal & Energy', hi: 'उत्साह और ऊर्जा' }, goodFor: ['healthcare', 'food'] },
  { letters: 'EX', pythagoreanValue: 2, chaldeanValue: 10, energy: { en: 'Excellence & Expertise', hi: 'उत्कृष्टता और विशेषज्ञता' }, goodFor: ['consulting', 'education'] },
  // Tech-friendly pairs
  { letters: 'IX', pythagoreanValue: 6, chaldeanValue: 6, energy: { en: 'Innovation Index', hi: 'नवाचार सूचकांक' }, goodFor: ['technology', 'finance'] },
  { letters: 'AI', pythagoreanValue: 1, chaldeanValue: 2, energy: { en: 'Artificial Intelligence', hi: 'कृत्रिम बुद्धिमत्ता' }, goodFor: ['technology', 'consulting'] },
  { letters: 'LO', pythagoreanValue: 9, chaldeanValue: 10, energy: { en: 'Logic & Order', hi: 'तर्क और क्रम' }, goodFor: ['technology', 'legal'] },
  { letters: 'BY', pythagoreanValue: 9, chaldeanValue: 3, energy: { en: 'Byte & Binary', hi: 'बाइट और बाइनरी' }, goodFor: ['technology', 'education'] },
  { letters: 'QU', pythagoreanValue: 2, chaldeanValue: 7, energy: { en: 'Quality & Quest', hi: 'गुणवत्ता और खोज' }, goodFor: ['manufacturing', 'consulting'] },
];

// ============================================================================
// Utility Functions
// ============================================================================

// Fisher-Yates shuffle for randomization
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ============================================================================
// Calculation Functions
// ============================================================================

function reduceToSingleDigit(num: number, preserveMaster = false): number {
  if (preserveMaster && [11, 22, 33].includes(num)) {
    return num;
  }
  while (num > 9) {
    num = String(num)
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
}

function calculatePythagoreanNumber(name: string): number {
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const letter of cleanName) {
    sum += PYTHAGOREAN_VALUES[letter] || 0;
  }
  return reduceToSingleDigit(sum);
}

function calculateChaldeanNumber(name: string): number {
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const letter of cleanName) {
    sum += CHALDEAN_VALUES[letter] || 0;
  }
  return reduceToSingleDigit(sum);
}

function calculateLifePathNumber(dateOfBirth: string): number {
  const [year, month, day] = dateOfBirth.split('-').map(Number);
  const sum = reduceToSingleDigit(day) + reduceToSingleDigit(month) + reduceToSingleDigit(year);
  return reduceToSingleDigit(sum);
}

function calculateBirthDayNumber(dateOfBirth: string): number {
  const day = parseInt(dateOfBirth.split('-')[2]);
  return reduceToSingleDigit(day);
}

function calculateCompatibilityScore(
  nameNumber: number,
  birthDayNumber: number,
  lifePathNumber: number,
  industryFavorable: number[]
): number {
  let score = 50;
  const friendships = NUMBER_FRIENDSHIPS[nameNumber];

  if (friendships) {
    if (friendships.friendly.includes(birthDayNumber)) score += 20;
    else if (friendships.unfriendly.includes(birthDayNumber)) score -= 15;

    if (friendships.friendly.includes(lifePathNumber)) score += 15;
    else if (friendships.unfriendly.includes(lifePathNumber)) score -= 10;
  }

  if (industryFavorable.includes(nameNumber)) score += 20;

  if (nameNumber === birthDayNumber) score += 10;
  if (nameNumber === lifePathNumber) score += 10;

  return Math.min(100, Math.max(0, score));
}

function getTargetNumbers(birthDayNumber: number, lifePathNumber: number): number[] {
  const targets = new Set<number>();
  const birthFriends = NUMBER_FRIENDSHIPS[birthDayNumber];
  const lifeFriends = NUMBER_FRIENDSHIPS[lifePathNumber];

  // Add friendly numbers (high priority)
  if (birthFriends) birthFriends.friendly.forEach((n) => targets.add(n));
  if (lifeFriends) lifeFriends.friendly.forEach((n) => targets.add(n));

  // Add neutral numbers (medium priority) - EXPANDED for more results
  if (birthFriends) birthFriends.neutral.forEach((n) => targets.add(n));
  if (lifeFriends) lifeFriends.neutral.forEach((n) => targets.add(n));

  targets.add(birthDayNumber);
  targets.add(lifePathNumber);

  return Array.from(targets);
}

// Extended target numbers including all non-unfriendly numbers
function getExtendedTargetNumbers(birthDayNumber: number, lifePathNumber: number): number[] {
  const targets = new Set<number>();
  const birthFriends = NUMBER_FRIENDSHIPS[birthDayNumber];
  const lifeFriends = NUMBER_FRIENDSHIPS[lifePathNumber];

  // Add all numbers except unfriendly ones
  for (let i = 1; i <= 9; i++) {
    const isUnfriendly =
      (birthFriends?.unfriendly.includes(i) && lifeFriends?.unfriendly.includes(i));
    if (!isUnfriendly) {
      targets.add(i);
    }
  }

  return Array.from(targets);
}

// ============================================================================
// Name Generation Functions
// ============================================================================

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function applyDistortion(word: string): string[] {
  const results: string[] = [];
  for (const rule of DISTORTION_RULES) {
    const newWord = word.replace(rule.from, rule.to);
    if (newWord !== word && newWord.length >= 3) {
      results.push(capitalizeFirst(newWord));
    }
  }
  return [...new Set(results)];
}

function generateEnglishNames(
  keywords: string[],
  targetNumbers: number[],
  characterLengths: number[],
  industryFavorable: number[],
  birthDayNumber: number,
  lifePathNumber: number
): GeneratedName[] {
  const names: GeneratedName[] = [];

  for (const keyword of keywords) {
    const name = capitalizeFirst(keyword);
    const pythNum = calculatePythagoreanNumber(name);

    if (
      targetNumbers.includes(pythNum) &&
      (characterLengths.length === 0 || characterLengths.includes(name.length))
    ) {
      names.push({
        name,
        pythagoreanNumber: pythNum,
        chaldeanNumber: calculateChaldeanNumber(name),
        compatibilityScore: calculateCompatibilityScore(pythNum, birthDayNumber, lifePathNumber, industryFavorable),
        category: 'english',
        meaning: { en: `Modern English business name`, hi: `आधुनिक अंग्रेजी व्यापार नाम` },
        reasoning: {
          en: `Clean, professional English word with number ${pythNum}`,
          hi: `साफ, पेशेवर अंग्रेजी शब्द जिसका अंक ${pythNum} है`,
        },
      });
    }
  }

  return names;
}

function generateDistortedNames(
  keywords: string[],
  targetNumbers: number[],
  characterLengths: number[],
  industryFavorable: number[],
  birthDayNumber: number,
  lifePathNumber: number
): GeneratedName[] {
  const names: GeneratedName[] = [];

  for (const keyword of keywords) {
    const distortions = applyDistortion(keyword);
    for (const distorted of distortions) {
      const pythNum = calculatePythagoreanNumber(distorted);

      if (
        targetNumbers.includes(pythNum) &&
        (characterLengths.length === 0 || characterLengths.includes(distorted.length))
      ) {
        names.push({
          name: distorted,
          pythagoreanNumber: pythNum,
          chaldeanNumber: calculateChaldeanNumber(distorted),
          compatibilityScore: calculateCompatibilityScore(pythNum, birthDayNumber, lifePathNumber, industryFavorable),
          category: 'distortion',
          meaning: {
            en: `Creative spelling variation of "${keyword}"`,
            hi: `"${keyword}" का रचनात्मक वर्तनी रूपांतर`,
          },
          reasoning: {
            en: `Unique, memorable spelling with favorable number ${pythNum}`,
            hi: `अद्वितीय, यादगार वर्तनी जिसका अनुकूल अंक ${pythNum} है`,
          },
        });
      }
    }
  }

  return names;
}

function generateSanskritNames(
  industryId: string,
  targetNumbers: number[],
  characterLengths: number[],
  industryFavorable: number[],
  birthDayNumber: number,
  lifePathNumber: number
): GeneratedName[] {
  const names: GeneratedName[] = [];
  // Filter and shuffle roots for variety
  const relevantRoots = shuffleArray(
    SANSKRIT_ROOTS.filter((root) => root.goodFor.includes(industryId) || industryId === 'other')
  );

  for (const root of relevantRoots) {
    const pythNum = calculatePythagoreanNumber(root.word);

    if (
      targetNumbers.includes(pythNum) &&
      (characterLengths.length === 0 || characterLengths.includes(root.word.length))
    ) {
      names.push({
        name: root.word,
        pythagoreanNumber: pythNum,
        chaldeanNumber: calculateChaldeanNumber(root.word),
        compatibilityScore: calculateCompatibilityScore(pythNum, birthDayNumber, lifePathNumber, industryFavorable),
        category: 'sanskrit',
        meaning: root.meaning,
        reasoning: {
          en: `Sanskrit word meaning "${root.meaning.en}" with number ${pythNum}`,
          hi: `संस्कृत शब्द जिसका अर्थ "${root.meaning.hi}" और अंक ${pythNum} है`,
        },
      });
    }

    // Generate combinations
    const suffixes = ['a', 'i', 'an', 'ya', 'ika'];
    for (const suffix of suffixes) {
      const combined = root.word + suffix;
      const combPythNum = calculatePythagoreanNumber(combined);

      if (
        targetNumbers.includes(combPythNum) &&
        (characterLengths.length === 0 || characterLengths.includes(combined.length))
      ) {
        names.push({
          name: capitalizeFirst(combined),
          pythagoreanNumber: combPythNum,
          chaldeanNumber: calculateChaldeanNumber(combined),
          compatibilityScore: calculateCompatibilityScore(combPythNum, birthDayNumber, lifePathNumber, industryFavorable),
          category: 'sanskrit',
          meaning: {
            en: `Derived from "${root.meaning.en}"`,
            hi: `"${root.meaning.hi}" से व्युत्पन्न`,
          },
          reasoning: {
            en: `Sanskrit-derived name with elegant sound and number ${combPythNum}`,
            hi: `सुंदर ध्वनि और अंक ${combPythNum} वाला संस्कृत-व्युत्पन्न नाम`,
          },
        });
      }
    }
  }

  return names;
}

function generateFusionNames(
  keywords: string[],
  industryId: string,
  targetNumbers: number[],
  characterLengths: number[],
  industryFavorable: number[],
  birthDayNumber: number,
  lifePathNumber: number
): GeneratedName[] {
  const names: GeneratedName[] = [];
  // Shuffle roots for variety
  const relevantRoots = shuffleArray(
    SANSKRIT_ROOTS.filter((root) => root.goodFor.includes(industryId) || industryId === 'other')
  );
  // Shuffle suffixes for variety
  const shuffledSuffixes = shuffleArray([...PORTMANTEAU_SUFFIXES]);

  // 1. Portmanteau-style names (like Decocracy, Healthify) - INCREASED from 8 to 25
  for (const keyword of keywords.slice(0, 25)) {
    for (const suffix of shuffledSuffixes) {
      // Take first N letters of keyword + suffix (where N = suffix.blendPoint)
      const baseLen = Math.min(keyword.length, 4 + Math.floor(Math.random() * 2));
      const portmanteau = capitalizeFirst(keyword.slice(0, baseLen) + suffix.suffix);
      const pythNum = calculatePythagoreanNumber(portmanteau);

      if (
        targetNumbers.includes(pythNum) &&
        portmanteau.length >= 5 &&
        portmanteau.length <= 12 &&
        (characterLengths.length === 0 || characterLengths.some(l => l >= 8 ? portmanteau.length >= 8 : portmanteau.length === l))
      ) {
        names.push({
          name: portmanteau,
          pythagoreanNumber: pythNum,
          chaldeanNumber: calculateChaldeanNumber(portmanteau),
          compatibilityScore: calculateCompatibilityScore(pythNum, birthDayNumber, lifePathNumber, industryFavorable),
          category: 'fusion',
          meaning: {
            en: `${capitalizeFirst(keyword)} + ${suffix.meaning.en}`,
            hi: `${capitalizeFirst(keyword)} + ${suffix.meaning.hi}`,
          },
          reasoning: {
            en: `Portmanteau style (like "Democracy") with number ${pythNum}`,
            hi: `पोर्टमैंटीयू शैली ("डेमोक्रेसी" जैसा) अंक ${pythNum} के साथ`,
          },
        });
      }
    }
  }

  // 2. Word + Word fusion (like VastuCart, CloudNest) - EXPANDED list and more keywords
  const fuseWords = shuffleArray([
    'cart', 'hub', 'nest', 'mint', 'wave', 'flow', 'spark', 'zone', 'core', 'edge',
    'peak', 'labs', 'box', 'link', 'sync', 'mart', 'path', 'gate', 'deck', 'bay',
    'pier', 'dock', 'port', 'node', 'grid', 'mesh', 'web', 'net', 'tap', 'pod',
    'bit', 'byte', 'spot', 'mark', 'sign', 'point', 'base', 'stack', 'vault', 'keep'
  ]);
  for (const keyword of keywords.slice(0, 20)) {
    for (const fuse of fuseWords) {
      const combo = capitalizeFirst(keyword) + capitalizeFirst(fuse);
      const pythNum = calculatePythagoreanNumber(combo);

      if (
        targetNumbers.includes(pythNum) &&
        combo.length >= 6 &&
        combo.length <= 12 &&
        (characterLengths.length === 0 || characterLengths.some(l => l >= 8 ? combo.length >= 8 : combo.length === l))
      ) {
        names.push({
          name: combo,
          pythagoreanNumber: pythNum,
          chaldeanNumber: calculateChaldeanNumber(combo),
          compatibilityScore: calculateCompatibilityScore(pythNum, birthDayNumber, lifePathNumber, industryFavorable),
          category: 'fusion',
          meaning: {
            en: `${capitalizeFirst(keyword)} + ${capitalizeFirst(fuse)} fusion`,
            hi: `${capitalizeFirst(keyword)} + ${capitalizeFirst(fuse)} का संयोजन`,
          },
          reasoning: {
            en: `Modern compound name with strong brand energy ${pythNum}`,
            hi: `मजबूत ब्रांड ऊर्जा ${pythNum} वाला आधुनिक संयुक्त नाम`,
          },
        });
      }
    }
  }

  // 3. Creative blends from predefined patterns (like Appming)
  for (const blend of CREATIVE_BLENDS) {
    const name = capitalizeFirst(blend.base + blend.blend);
    const pythNum = calculatePythagoreanNumber(name);

    if (
      targetNumbers.includes(pythNum) &&
      (characterLengths.length === 0 || characterLengths.some(l => l >= 8 ? name.length >= 8 : name.length === l))
    ) {
      names.push({
        name,
        pythagoreanNumber: pythNum,
        chaldeanNumber: calculateChaldeanNumber(name),
        compatibilityScore: calculateCompatibilityScore(pythNum, birthDayNumber, lifePathNumber, industryFavorable),
        category: 'fusion',
        meaning: blend.meaning,
        reasoning: {
          en: `Creative blend word with trendy appeal and number ${pythNum}`,
          hi: `ट्रेंडी आकर्षण वाला रचनात्मक मिश्रित शब्द, अंक ${pythNum}`,
        },
      });
    }
  }

  // 4. Sanskrit + Modern fusion (original logic enhanced) - INCREASED from 4x4 to 15x15
  for (const keyword of keywords.slice(0, 15)) {
    for (const root of relevantRoots.slice(0, 15)) {
      // Try different blend patterns
      const fusions = [
        capitalizeFirst(keyword.slice(0, 3) + root.word.slice(2)),
        capitalizeFirst(root.word.slice(0, 3) + keyword.slice(1)),
        capitalizeFirst(keyword.slice(0, 4) + root.word.slice(-2)),
        capitalizeFirst(root.word + keyword.slice(-2)),
      ];

      for (const fusion of fusions) {
        const pythNum = calculatePythagoreanNumber(fusion);

        if (
          targetNumbers.includes(pythNum) &&
          fusion.length >= 5 &&
          fusion.length <= 10 &&
          (characterLengths.length === 0 || characterLengths.includes(fusion.length))
        ) {
          names.push({
            name: fusion,
            pythagoreanNumber: pythNum,
            chaldeanNumber: calculateChaldeanNumber(fusion),
            compatibilityScore: calculateCompatibilityScore(pythNum, birthDayNumber, lifePathNumber, industryFavorable),
            category: 'fusion',
            meaning: {
              en: `Blend of ${root.meaning.en} + modern`,
              hi: `${root.meaning.hi} + आधुनिक का मिश्रण`,
            },
            reasoning: {
              en: `Sanskrit-English fusion with meaningful roots, number ${pythNum}`,
              hi: `अर्थपूर्ण जड़ों के साथ संस्कृत-अंग्रेजी मिश्रण, अंक ${pythNum}`,
            },
          });
        }
      }
    }
  }

  return names;
}

// ============================================================================
// Main Functions
// ============================================================================

export function generateBusinessNames(options: NameGenerationOptions): BusinessNameResult {
  const {
    ownerDOB,
    industry,
    customIndustry,
    characterLengths,
    includeEnglish,
    includeDistortions,
    includeSanskrit,
    includeFusion,
    baseKeywords = [],
  } = options;

  const lifePathNumber = calculateLifePathNumber(ownerDOB);
  const birthDayNumber = calculateBirthDayNumber(ownerDOB);
  const targetNumbers = getTargetNumbers(birthDayNumber, lifePathNumber);
  const extendedTargets = getExtendedTargetNumbers(birthDayNumber, lifePathNumber);

  const selectedIndustry = INDUSTRIES.find((i) => i.id === industry) || null;
  const industryFavorable = selectedIndustry?.favorableNumbers || [1, 5, 6, 8, 9];

  // Combine industry keywords with user-provided keywords
  let keywords = [...(selectedIndustry?.keywords || []), ...baseKeywords];
  if (customIndustry) {
    // Add custom industry terms as keywords
    keywords = [...keywords, ...customIndustry.toLowerCase().split(/\s+/)];
  }
  keywords = [...new Set(keywords)]; // Remove duplicates

  // SHUFFLE keywords for randomization - different results each time
  keywords = shuffleArray(keywords);

  const allNames: GeneratedName[] = [];

  // Generate names using EXTENDED targets from the start for more variety
  // Extended targets include all numbers except doubly-unfriendly ones
  // The compatibility score will properly rank better matches higher
  if (includeEnglish) {
    allNames.push(
      ...generateEnglishNames(keywords, extendedTargets, characterLengths, industryFavorable, birthDayNumber, lifePathNumber)
    );
  }

  if (includeDistortions) {
    allNames.push(
      ...generateDistortedNames(keywords, extendedTargets, characterLengths, industryFavorable, birthDayNumber, lifePathNumber)
    );
  }

  if (includeSanskrit) {
    allNames.push(
      ...generateSanskritNames(industry, extendedTargets, characterLengths, industryFavorable, birthDayNumber, lifePathNumber)
    );
  }

  if (includeFusion) {
    allNames.push(
      ...generateFusionNames(keywords, industry, extendedTargets, characterLengths, industryFavorable, birthDayNumber, lifePathNumber)
    );
  }

  // Sort by compatibility score and remove duplicates
  const seen = new Set<string>();
  const uniqueNames = allNames
    .filter((name) => {
      const key = name.name.toUpperCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => b.compatibilityScore - a.compatibilityScore)
    .slice(0, 150); // Increased from 50 to 150

  return {
    generatedNames: uniqueNames,
    ownerLifePathNumber: lifePathNumber,
    ownerBirthDayNumber: birthDayNumber,
    targetNumbers,
    selectedIndustry,
    brandEnergyProfiles: BRAND_ENERGY_PROFILES,
  };
}

export function analyzeBusinessName(name: string, ownerDOB: string, industryId?: string): AnalysisResult {
  const lifePathNumber = calculateLifePathNumber(ownerDOB);
  const birthDayNumber = calculateBirthDayNumber(ownerDOB);
  const pythagoreanNumber = calculatePythagoreanNumber(name);
  const chaldeanNumber = calculateChaldeanNumber(name);

  const selectedIndustry = industryId ? INDUSTRIES.find((i) => i.id === industryId) : null;
  const industryFavorable = selectedIndustry?.favorableNumbers || [1, 5, 6, 8, 9];

  const compatibilityScore = calculateCompatibilityScore(
    pythagoreanNumber,
    birthDayNumber,
    lifePathNumber,
    industryFavorable
  );

  let rating: 'excellent' | 'good' | 'moderate' | 'challenging';
  if (compatibilityScore >= 85) rating = 'excellent';
  else if (compatibilityScore >= 70) rating = 'good';
  else if (compatibilityScore >= 55) rating = 'moderate';
  else rating = 'challenging';

  return {
    name,
    pythagoreanNumber,
    chaldeanNumber,
    compatibilityScore,
    rating,
    brandEnergy: BRAND_ENERGY_PROFILES[pythagoreanNumber],
    ownerLifePathNumber: lifePathNumber,
    ownerBirthDayNumber: birthDayNumber,
  };
}

// ============================================================================
// Existing Business Name Validation with Letter Suggestions
// ============================================================================

function getPlanetForNumber(num: number): BilingualText {
  const planets: Record<number, BilingualText> = {
    1: { en: 'Sun', hi: 'सूर्य' },
    2: { en: 'Moon', hi: 'चंद्र' },
    3: { en: 'Jupiter', hi: 'बृहस्पति' },
    4: { en: 'Rahu', hi: 'राहु' },
    5: { en: 'Mercury', hi: 'बुध' },
    6: { en: 'Venus', hi: 'शुक्र' },
    7: { en: 'Ketu', hi: 'केतु' },
    8: { en: 'Saturn', hi: 'शनि' },
    9: { en: 'Mars', hi: 'मंगल' },
  };
  return planets[num] || { en: 'Unknown', hi: 'अज्ञात' };
}

function generateBusinessLetterSuggestions(
  name: string,
  currentNumber: number,
  targetNumbers: number[],
  industryFavorable: number[],
  birthDayNumber: number,
  lifePathNumber: number
): BusinessLetterSuggestion[] {
  const suggestions: BusinessLetterSuggestion[] = [];
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');

  // Calculate current alignment
  const currentAlignment = calculateCompatibilityScore(currentNumber, birthDayNumber, lifePathNumber, industryFavorable);

  // Get letters sorted by their value (prioritize single-digit outcomes)
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Strategy 1: Add a letter to reach target number
  for (const letter of letters) {
    const letterValue = PYTHAGOREAN_VALUES[letter];
    const newSum = cleanName.split('').reduce((sum, l) => sum + (PYTHAGOREAN_VALUES[l] || 0), 0) + letterValue;
    const newNumber = reduceToSingleDigit(newSum);

    if (targetNumbers.includes(newNumber) && newNumber !== currentNumber) {
      const newAlignment = calculateCompatibilityScore(newNumber, birthDayNumber, lifePathNumber, industryFavorable);
      const alignmentChange = newAlignment - currentAlignment;

      if (alignmentChange > 0) {
        suggestions.push({
          letter,
          operation: 'add',
          currentNumber,
          newNumber,
          alignmentChange,
          letterValue,
          whyThisWorks: {
            en: `Adding "${letter}" (value ${letterValue}) shifts energy from ${getPlanetForNumber(currentNumber).en} to ${getPlanetForNumber(newNumber).en}, improving alignment by ${alignmentChange}%`,
            hi: `"${letter}" (मान ${letterValue}) जोड़ने से ऊर्जा ${getPlanetForNumber(currentNumber).hi} से ${getPlanetForNumber(newNumber).hi} में बदलती है, संरेखण ${alignmentChange}% बेहतर होता है`,
          },
        });
      }
    }
  }

  // Strategy 2: Double an existing letter
  const uniqueLetters = [...new Set(cleanName.split(''))];
  for (const letter of uniqueLetters) {
    const letterValue = PYTHAGOREAN_VALUES[letter];
    const newSum = cleanName.split('').reduce((sum, l) => sum + (PYTHAGOREAN_VALUES[l] || 0), 0) + letterValue;
    const newNumber = reduceToSingleDigit(newSum);

    if (targetNumbers.includes(newNumber) && newNumber !== currentNumber) {
      const newAlignment = calculateCompatibilityScore(newNumber, birthDayNumber, lifePathNumber, industryFavorable);
      const alignmentChange = newAlignment - currentAlignment;

      if (alignmentChange > 0) {
        suggestions.push({
          letter,
          operation: 'double',
          currentNumber,
          newNumber,
          alignmentChange,
          letterValue,
          whyThisWorks: {
            en: `Doubling "${letter}" (e.g., ${letter}${letter}) adds ${letterValue} to total, shifting to lucky number ${newNumber}`,
            hi: `"${letter}" को दोगुना करने से (जैसे ${letter}${letter}) कुल में ${letterValue} जुड़ता है, शुभ अंक ${newNumber} पर जाता है`,
          },
        });
      }
    }
  }

  // Strategy 3: Remove a letter (if name has enough letters)
  if (cleanName.length > 3) {
    for (const letter of uniqueLetters) {
      const letterValue = PYTHAGOREAN_VALUES[letter];
      const newSum = cleanName.split('').reduce((sum, l) => sum + (PYTHAGOREAN_VALUES[l] || 0), 0) - letterValue;
      const newNumber = reduceToSingleDigit(newSum);

      if (targetNumbers.includes(newNumber) && newNumber !== currentNumber && newSum > 0) {
        const newAlignment = calculateCompatibilityScore(newNumber, birthDayNumber, lifePathNumber, industryFavorable);
        const alignmentChange = newAlignment - currentAlignment;

        if (alignmentChange > 0) {
          suggestions.push({
            letter,
            operation: 'remove',
            currentNumber,
            newNumber,
            alignmentChange,
            letterValue,
            whyThisWorks: {
              en: `Removing one "${letter}" (value ${letterValue}) reduces total, achieving favorable number ${newNumber}`,
              hi: `एक "${letter}" (मान ${letterValue}) हटाने से कुल घटता है, अनुकूल अंक ${newNumber} प्राप्त होता है`,
            },
          });
        }
      }
    }
  }

  // Sort by alignment change (highest first) and take top 8
  return suggestions
    .sort((a, b) => b.alignmentChange - a.alignmentChange)
    .slice(0, 8);
}

export function analyzeExistingBusinessName(
  name: string,
  ownerDOB: string,
  industryId?: string
): ExistingNameAnalysis {
  const lifePathNumber = calculateLifePathNumber(ownerDOB);
  const birthDayNumber = calculateBirthDayNumber(ownerDOB);
  const pythagoreanNumber = calculatePythagoreanNumber(name);
  const chaldeanNumber = calculateChaldeanNumber(name);
  const targetNumbers = getTargetNumbers(birthDayNumber, lifePathNumber);

  const selectedIndustry = industryId ? INDUSTRIES.find((i) => i.id === industryId) : null;
  const industryFavorable = selectedIndustry?.favorableNumbers || [1, 5, 6, 8, 9];

  const currentAlignment = calculateCompatibilityScore(
    pythagoreanNumber,
    birthDayNumber,
    lifePathNumber,
    industryFavorable
  );

  let rating: 'excellent' | 'good' | 'moderate' | 'needs_optimization';
  if (currentAlignment >= 85) rating = 'excellent';
  else if (currentAlignment >= 70) rating = 'good';
  else if (currentAlignment >= 55) rating = 'moderate';
  else rating = 'needs_optimization';

  const letterSuggestions = generateBusinessLetterSuggestions(
    name,
    pythagoreanNumber,
    targetNumbers,
    industryFavorable,
    birthDayNumber,
    lifePathNumber
  );

  return {
    name,
    pythagoreanNumber,
    chaldeanNumber,
    currentAlignment,
    targetNumbers,
    rating,
    brandEnergy: BRAND_ENERGY_PROFILES[pythagoreanNumber],
    letterSuggestions,
    ownerLifePathNumber: lifePathNumber,
    ownerBirthDayNumber: birthDayNumber,
  };
}

export function getLetterPairsForIndustry(industryId: string): LetterPair[] {
  if (!industryId || industryId === 'other') {
    return FAVORABLE_LETTER_PAIRS;
  }
  return FAVORABLE_LETTER_PAIRS.filter(
    pair => pair.goodFor.includes(industryId) || pair.goodFor.length === 0
  );
}

export function getIndustryById(id: string): IndustryInfo | null {
  return INDUSTRIES.find((i) => i.id === id) || null;
}

export { BRAND_ENERGY_PROFILES };
