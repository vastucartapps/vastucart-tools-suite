# Technical Architecture: Flagship Implementation Guide

## Project Structure

```
astro-tools/
├── .github/
│   └── workflows/
│       ├── ci.yml                 # Continuous integration
│       └── deploy.yml             # Vercel deployment
├── public/
│   ├── fonts/                     # Custom fonts (Noto Sans for Hindi)
│   ├── icons/                     # Tool icons (SVG)
│   ├── images/                    # Static images
│   └── locales/                   # Translation files
│       ├── en/
│       │   ├── common.json
│       │   ├── numerology.json
│       │   ├── astrology.json
│       │   └── vastu.json
│       └── hi/
│           ├── common.json
│           ├── numerology.json
│           ├── astrology.json
│           └── vastu.json
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx           # Homepage
│   │   │   ├── tools/
│   │   │   │   ├── page.tsx       # Tools index
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx   # Dynamic tool pages
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── store/
│   │   │   │   └── page.tsx
│   │   │   └── blog/
│   │   │       ├── page.tsx
│   │   │       └── [slug]/
│   │   │           └── page.tsx
│   │   ├── api/
│   │   │   ├── calculate/
│   │   │   │   └── route.ts       # Calculation API
│   │   │   └── og/
│   │   │       └── route.tsx      # Dynamic OG images
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                    # Base UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── accordion.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── navigation.tsx
│   │   │   └── language-toggle.tsx
│   │   ├── tools/
│   │   │   ├── tool-layout.tsx    # Reusable tool wrapper
│   │   │   ├── input-form.tsx     # Dynamic form builder
│   │   │   ├── result-card.tsx    # Result display
│   │   │   ├── logic-display.tsx  # Calculation steps
│   │   │   ├── share-card.tsx     # Social sharing
│   │   │   ├── faq-section.tsx    # Schema-marked FAQ
│   │   │   └── related-tools.tsx  # Internal linking
│   │   ├── charts/
│   │   │   ├── kundli-chart.tsx   # Birth chart visualization
│   │   │   ├── loshu-grid.tsx     # Lo Shu grid component
│   │   │   ├── dasha-timeline.tsx # Dasha visualization
│   │   │   └── vastu-compass.tsx  # Vastu direction chart
│   │   └── seo/
│   │       ├── meta-tags.tsx
│   │       ├── json-ld.tsx
│   │       └── breadcrumbs.tsx
│   ├── lib/
│   │   ├── numerology/
│   │   │   ├── index.ts
│   │   │   ├── chaldean.ts
│   │   │   ├── pythagorean.ts
│   │   │   ├── loshu.ts
│   │   │   ├── life-path.ts
│   │   │   ├── destiny.ts
│   │   │   ├── name-correction.ts
│   │   │   └── types.ts
│   │   ├── astrology/
│   │   │   ├── index.ts
│   │   │   ├── ephemeris/
│   │   │   │   ├── swiss-eph.ts   # Swiss Ephemeris wrapper
│   │   │   │   ├── planets.ts
│   │   │   │   └── houses.ts
│   │   │   ├── calculations/
│   │   │   │   ├── kundli.ts
│   │   │   │   ├── navamsa.ts
│   │   │   │   ├── dasha.ts
│   │   │   │   ├── yogas.ts
│   │   │   │   ├── doshas.ts
│   │   │   │   └── matching.ts
│   │   │   └── types.ts
│   │   ├── vastu/
│   │   │   ├── index.ts
│   │   │   ├── directions.ts
│   │   │   ├── elements.ts
│   │   │   ├── rooms.ts
│   │   │   ├── remedies.ts
│   │   │   └── types.ts
│   │   ├── utils/
│   │   │   ├── date.ts
│   │   │   ├── timezone.ts
│   │   │   ├── transliterate.ts
│   │   │   └── validation.ts
│   │   └── constants/
│   │       ├── numerology-tables.ts
│   │       ├── planetary-data.ts
│   │       ├── nakshatra-data.ts
│   │       ├── yoga-definitions.ts
│   │       └── vastu-rules.ts
│   ├── hooks/
│   │   ├── use-calculator.ts
│   │   ├── use-locale.ts
│   │   └── use-share.ts
│   ├── store/
│   │   └── calculation-store.ts   # Zustand store
│   ├── data/
│   │   └── tools/
│   │       ├── numerology/
│   │       │   ├── life-path.json
│   │       │   ├── chaldean.json
│   │       │   └── ...
│   │       ├── astrology/
│   │       │   ├── kundli.json
│   │       │   └── ...
│   │       └── vastu/
│   │           └── ...
│   └── types/
│       └── index.ts
├── tests/
│   ├── numerology/
│   │   ├── chaldean.test.ts
│   │   ├── life-path.test.ts
│   │   └── loshu.test.ts
│   └── astrology/
│       ├── dasha.test.ts
│       └── yogas.test.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Core Calculation Engines

### Numerology Engine

```typescript
// src/lib/numerology/chaldean.ts

export const CHALDEAN_VALUES: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8,
};

export interface ChaldeanResult {
  name: string;
  letterBreakdown: Array<{
    letter: string;
    value: number;
  }>;
  totalSum: number;
  reductionSteps: number[];
  finalNumber: number;
  isMasterNumber: boolean;
  meaning: {
    en: string;
    hi: string;
  };
}

export function calculateChaldean(name: string): ChaldeanResult {
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');

  const letterBreakdown = cleanName.split('').map(letter => ({
    letter,
    value: CHALDEAN_VALUES[letter] || 0,
  }));

  const totalSum = letterBreakdown.reduce((sum, item) => sum + item.value, 0);

  const { reductionSteps, finalNumber, isMasterNumber } = reduceToSingleDigit(totalSum);

  return {
    name,
    letterBreakdown,
    totalSum,
    reductionSteps,
    finalNumber,
    isMasterNumber,
    meaning: getChaldeanMeaning(finalNumber, isMasterNumber),
  };
}

function reduceToSingleDigit(num: number): {
  reductionSteps: number[];
  finalNumber: number;
  isMasterNumber: boolean;
} {
  const reductionSteps: number[] = [num];
  let current = num;

  while (current > 9) {
    // Check for master numbers
    if (current === 11 || current === 22 || current === 33) {
      return {
        reductionSteps,
        finalNumber: current,
        isMasterNumber: true,
      };
    }

    current = current
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);

    reductionSteps.push(current);
  }

  return {
    reductionSteps,
    finalNumber: current,
    isMasterNumber: false,
  };
}
```

### Life Path Calculator

```typescript
// src/lib/numerology/life-path.ts

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
  traits: {
    positive: string[];
    negative: string[];
    career: string[];
    relationships: string[];
  };
  compatibility: number[];
  celebrities: Array<{ name: string; profession: string }>;
}

export function calculateLifePath(
  day: number,
  month: number,
  year: number
): LifePathResult {
  // Reduce day
  const dayReduction = reduceNumber(day);

  // Reduce month
  const monthReduction = reduceNumber(month);

  // Reduce year
  const yearReduction = reduceNumber(year);

  // Sum and reduce final
  const totalSum = dayReduction.reduced + monthReduction.reduced + yearReduction.reduced;
  const finalReduction = reduceNumber(totalSum);

  return {
    dateOfBirth: `${day}/${month}/${year}`,
    dayNumber: dayReduction.reduced,
    monthNumber: monthReduction.reduced,
    yearNumber: yearReduction.reduced,
    calculationSteps: {
      day: { original: day, ...dayReduction },
      month: { original: month, ...monthReduction },
      year: { original: year, ...yearReduction },
      final: { sum: totalSum, ...finalReduction },
    },
    lifePathNumber: finalReduction.reduced,
    isMasterNumber: [11, 22, 33].includes(finalReduction.reduced),
    traits: getLifePathTraits(finalReduction.reduced),
    compatibility: getCompatibleNumbers(finalReduction.reduced),
    celebrities: getCelebritiesWithNumber(finalReduction.reduced),
  };
}
```

### Lo Shu Grid Calculator

```typescript
// src/lib/numerology/loshu.ts

export interface LoShuGrid {
  grid: (number | null)[][];
  presentNumbers: number[];
  missingNumbers: number[];
  repeatingNumbers: Array<{ number: number; count: number }>;
  arrows: {
    present: Arrow[];
    missing: Arrow[];
  };
  planes: {
    mental: PlaneAnalysis;
    emotional: PlaneAnalysis;
    practical: PlaneAnalysis;
    thought: PlaneAnalysis;
    will: PlaneAnalysis;
    action: PlaneAnalysis;
  };
  remedies: Remedy[];
}

export interface Arrow {
  name: string;
  numbers: number[];
  meaning: { en: string; hi: string };
  type: 'strength' | 'weakness';
}

const LOSHU_POSITIONS: Record<number, [number, number]> = {
  4: [0, 0], 9: [0, 1], 2: [0, 2],
  3: [1, 0], 5: [1, 1], 7: [1, 2],
  8: [2, 0], 1: [2, 1], 6: [2, 2],
};

const ARROWS = {
  determination: { numbers: [1, 5, 9], name: 'Arrow of Determination' },
  spirituality: { numbers: [3, 5, 7], name: 'Arrow of Spirituality' },
  intellect: { numbers: [4, 5, 6], name: 'Arrow of Intellect' },
  emotionalBalance: { numbers: [2, 5, 8], name: 'Arrow of Emotional Balance' },
  planners: { numbers: [4, 9, 2], name: 'Arrow of Planners' },
  willPower: { numbers: [3, 5, 7], name: 'Arrow of Will Power' },
  activity: { numbers: [8, 1, 6], name: 'Arrow of Activity' },
  prosperity: { numbers: [4, 3, 8], name: 'Arrow of Prosperity' },
  actionIntellect: { numbers: [2, 7, 6], name: 'Arrow of Action/Intellect' },
};

export function calculateLoShuGrid(dateOfBirth: Date): LoShuGrid {
  const dateString = formatDateToDigits(dateOfBirth);
  const digitCounts = countDigits(dateString);

  // Build the grid
  const grid = buildGrid(digitCounts);

  // Analyze arrows
  const arrows = analyzeArrows(digitCounts);

  // Analyze planes
  const planes = analyzePlanes(digitCounts);

  // Generate remedies
  const remedies = generateRemedies(digitCounts);

  return {
    grid,
    presentNumbers: Object.keys(digitCounts).map(Number).filter(n => n > 0),
    missingNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => !digitCounts[n]),
    repeatingNumbers: Object.entries(digitCounts)
      .filter(([_, count]) => count > 1)
      .map(([num, count]) => ({ number: Number(num), count })),
    arrows,
    planes,
    remedies,
  };
}
```

---

## Astrology Engine

### Swiss Ephemeris Integration

```typescript
// src/lib/astrology/ephemeris/swiss-eph.ts

// Using sweph-wasm for browser-compatible Swiss Ephemeris
import init, { calculate_planets } from 'sweph-wasm';

export interface PlanetPosition {
  planet: Planet;
  longitude: number;
  latitude: number;
  distance: number;
  speedLongitude: number;
  sign: ZodiacSign;
  signDegree: number;
  nakshatra: Nakshatra;
  nakshatraPada: number;
  isRetrograde: boolean;
}

export async function getPlanetaryPositions(
  julianDay: number,
  ayanamsa: Ayanamsa = 'LAHIRI'
): Promise<PlanetPosition[]> {
  await init();

  const planets: Planet[] = [
    'SUN', 'MOON', 'MARS', 'MERCURY', 'JUPITER',
    'VENUS', 'SATURN', 'RAHU', 'KETU'
  ];

  const ayanamsaValue = getAyanamsaValue(julianDay, ayanamsa);

  return planets.map(planet => {
    const position = calculate_planets(julianDay, getPlanetId(planet));
    const siderealLongitude = normalizeDegree(position.longitude - ayanamsaValue);

    return {
      planet,
      longitude: siderealLongitude,
      latitude: position.latitude,
      distance: position.distance,
      speedLongitude: position.speedLongitude,
      sign: getSignFromDegree(siderealLongitude),
      signDegree: siderealLongitude % 30,
      nakshatra: getNakshatraFromDegree(siderealLongitude),
      nakshatraPada: getNakshatraPada(siderealLongitude),
      isRetrograde: position.speedLongitude < 0,
    };
  });
}
```

### Kundli Generator

```typescript
// src/lib/astrology/calculations/kundli.ts

export interface Kundli {
  birthDetails: BirthDetails;
  planetaryPositions: PlanetPosition[];
  housePositions: HousePosition[];
  ascendant: {
    sign: ZodiacSign;
    degree: number;
    nakshatra: Nakshatra;
  };
  charts: {
    rasi: Chart;      // D1
    navamsa: Chart;   // D9
    // ... other divisional charts
  };
  dashas: DashaPeriod[];
  yogas: Yoga[];
  doshas: Dosha[];
  ashtakavarga: AshtakavargaData;
  summary: {
    en: string;
    hi: string;
  };
}

export async function generateKundli(
  birthDetails: BirthDetails,
  options: KundliOptions = {}
): Promise<Kundli> {
  const {
    ayanamsa = 'LAHIRI',
    houseSystem = 'EQUAL',
    includeDivisionalCharts = false,
  } = options;

  // Convert birth time to Julian Day
  const julianDay = dateToJulianDay(
    birthDetails.date,
    birthDetails.time,
    birthDetails.timezone
  );

  // Get planetary positions
  const planetaryPositions = await getPlanetaryPositions(julianDay, ayanamsa);

  // Calculate houses
  const { ascendant, houses } = calculateHouses(
    julianDay,
    birthDetails.latitude,
    birthDetails.longitude,
    houseSystem,
    ayanamsa
  );

  // Generate Rasi chart
  const rasiChart = generateRasiChart(ascendant, planetaryPositions);

  // Generate Navamsa chart
  const navamsaChart = generateNavamsaChart(planetaryPositions);

  // Calculate Vimshottari Dasha
  const moonPosition = planetaryPositions.find(p => p.planet === 'MOON')!;
  const dashas = calculateVimshottariDasha(
    moonPosition.nakshatra,
    moonPosition.nakshatraPada,
    birthDetails.date
  );

  // Detect Yogas
  const yogas = detectYogas(planetaryPositions, houses, ascendant);

  // Check Doshas
  const doshas = checkDoshas(planetaryPositions, houses, ascendant);

  // Calculate Ashtakavarga
  const ashtakavarga = calculateAshtakavarga(planetaryPositions);

  return {
    birthDetails,
    planetaryPositions,
    housePositions: houses,
    ascendant,
    charts: {
      rasi: rasiChart,
      navamsa: navamsaChart,
    },
    dashas,
    yogas,
    doshas,
    ashtakavarga,
    summary: generateSummary(planetaryPositions, yogas, doshas),
  };
}
```

### Yoga Detection

```typescript
// src/lib/astrology/calculations/yogas.ts

export interface Yoga {
  name: string;
  type: 'raj' | 'dhan' | 'arishta' | 'other';
  planets: Planet[];
  houses: number[];
  strength: number; // 0-100
  description: {
    en: string;
    hi: string;
  };
  effects: {
    en: string[];
    hi: string[];
  };
  activationPeriod?: string;
}

const YOGA_DEFINITIONS: YogaDefinition[] = [
  {
    name: 'Gaja Kesari Yoga',
    type: 'raj',
    check: (positions, houses) => {
      const moon = positions.find(p => p.planet === 'MOON');
      const jupiter = positions.find(p => p.planet === 'JUPITER');

      if (!moon || !jupiter) return null;

      const moonHouse = getHouseNumber(moon.longitude, houses);
      const jupiterHouse = getHouseNumber(jupiter.longitude, houses);

      const angularHouses = [1, 4, 7, 10];
      const isJupiterAngular = angularHouses.includes(jupiterHouse);
      const isMoonAngular = angularHouses.includes(moonHouse);

      if (isJupiterAngular && isMoonAngular) {
        return {
          strength: calculateYogaStrength(moon, jupiter),
          planets: ['MOON', 'JUPITER'],
          houses: [moonHouse, jupiterHouse],
        };
      }

      return null;
    },
    description: {
      en: 'Jupiter in Kendra from Moon creates Gaja Kesari Yoga, bestowing wisdom, wealth, and fame.',
      hi: 'चंद्रमा से केंद्र में बृहस्पति गजकेसरी योग बनाता है, जो ज्ञान, धन और यश प्रदान करता है।',
    },
  },
  // ... more yoga definitions
];

export function detectYogas(
  positions: PlanetPosition[],
  houses: HousePosition[],
  ascendant: Ascendant
): Yoga[] {
  const detectedYogas: Yoga[] = [];

  for (const definition of YOGA_DEFINITIONS) {
    const result = definition.check(positions, houses, ascendant);

    if (result) {
      detectedYogas.push({
        name: definition.name,
        type: definition.type,
        planets: result.planets,
        houses: result.houses,
        strength: result.strength,
        description: definition.description,
        effects: definition.effects,
        activationPeriod: calculateActivationPeriod(result, positions),
      });
    }
  }

  return detectedYogas.sort((a, b) => b.strength - a.strength);
}
```

---

## Tool Component Pattern

```typescript
// src/components/tools/tool-layout.tsx

import { ToolConfig } from '@/types';
import { InputForm } from './input-form';
import { ResultCard } from './result-card';
import { LogicDisplay } from './logic-display';
import { FAQSection } from './faq-section';
import { RelatedTools } from './related-tools';
import { ShareCard } from './share-card';
import { JsonLd } from '../seo/json-ld';

interface ToolLayoutProps {
  config: ToolConfig;
  locale: string;
}

export function ToolLayout({ config, locale }: ToolLayoutProps) {
  const [result, setResult] = useState<any>(null);
  const [showLogic, setShowLogic] = useState(false);

  const content = config.content[locale];

  return (
    <>
      <JsonLd
        type="WebApplication"
        name={content.title}
        description={content.description}
        category={config.category}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-saffron-500 mb-4">
            <config.icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content.description}
          </p>
        </header>

        {/* Input Form */}
        <section className="mb-8">
          <InputForm
            fields={config.inputFields}
            onSubmit={async (values) => {
              const result = await config.calculate(values);
              setResult(result);
            }}
            locale={locale}
          />
        </section>

        {/* Results */}
        {result && (
          <>
            <section className="mb-8">
              <ResultCard
                result={result}
                template={config.resultTemplate}
                locale={locale}
              />
            </section>

            {/* Calculation Logic */}
            <section className="mb-8">
              <button
                onClick={() => setShowLogic(!showLogic)}
                className="flex items-center gap-2 text-teal-600 hover:text-teal-700"
              >
                <span>{showLogic ? 'Hide' : 'Show'} Calculation Steps</span>
                <ChevronIcon direction={showLogic ? 'up' : 'down'} />
              </button>

              {showLogic && (
                <LogicDisplay
                  steps={result.calculationSteps}
                  locale={locale}
                />
              )}
            </section>

            {/* Share Card */}
            <section className="mb-8">
              <ShareCard
                result={result}
                toolName={content.title}
                toolUrl={config.slug}
              />
            </section>
          </>
        )}

        {/* FAQ Section */}
        <section className="mb-8">
          <FAQSection
            faqs={content.faqs}
            toolName={content.title}
          />
        </section>

        {/* Related Tools */}
        <section>
          <RelatedTools
            currentTool={config.slug}
            category={config.category}
            locale={locale}
          />
        </section>
      </article>
    </>
  );
}
```

---

## Design System

### Colors

```typescript
// tailwind.config.ts

const colors = {
  // Primary palette
  cream: {
    50: '#FFFDF7',
    100: '#FFF9E6',
    200: '#FFF3CC',
  },
  teal: {
    500: '#0D9488',
    600: '#0F766E',
    700: '#115E59',
  },
  saffron: {
    400: '#FB923C',
    500: '#F97316',
    600: '#EA580C',
  },
  // Semantic colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
};
```

### Typography

```css
/* globals.css */

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');

:root {
  --font-sans: 'Noto Sans', sans-serif;
  --font-hindi: 'Noto Sans Devanagari', sans-serif;
}

[lang="hi"] {
  font-family: var(--font-hindi);
}
```

---

## SEO Implementation

### Dynamic Meta Tags

```typescript
// src/app/[locale]/tools/[slug]/page.tsx

import { Metadata } from 'next';
import { getToolConfig } from '@/data/tools';

export async function generateMetadata({ params }): Promise<Metadata> {
  const tool = await getToolConfig(params.slug);
  const content = tool.content[params.locale];

  return {
    title: `${content.title} | VastuTools`,
    description: content.metaDescription,
    keywords: content.keywords.join(', '),
    alternates: {
      canonical: `https://tools.vastucart.in/${params.locale}/tools/${params.slug}`,
      languages: {
        'en': `https://tools.vastucart.in/en/tools/${params.slug}`,
        'hi': `https://tools.vastucart.in/hi/tools/${params.slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      type: 'website',
      locale: params.locale === 'hi' ? 'hi_IN' : 'en_US',
      images: [`/api/og?tool=${params.slug}&locale=${params.locale}`],
    },
  };
}
```

### JSON-LD Schema

```typescript
// src/components/seo/json-ld.tsx

export function ToolJsonLd({ tool, locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.content[locale].title,
    description: tool.content[locale].description,
    url: `https://tools.vastucart.in/${locale}/tools/${tool.slug}`,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: tool.isPremium ? '399' : '0',
      priceCurrency: 'INR',
    },
    inLanguage: locale === 'hi' ? 'hi' : 'en',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ faqs }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

---

## Testing Strategy

```typescript
// tests/numerology/chaldean.test.ts

import { calculateChaldean } from '@/lib/numerology/chaldean';

describe('Chaldean Numerology Calculator', () => {
  test('calculates correct value for "PRASHANT"', () => {
    const result = calculateChaldean('PRASHANT');

    expect(result.letterBreakdown).toEqual([
      { letter: 'P', value: 8 },
      { letter: 'R', value: 2 },
      { letter: 'A', value: 1 },
      { letter: 'S', value: 3 },
      { letter: 'H', value: 5 },
      { letter: 'A', value: 1 },
      { letter: 'N', value: 5 },
      { letter: 'T', value: 4 },
    ]);

    expect(result.totalSum).toBe(29);
    expect(result.finalNumber).toBe(11);
    expect(result.isMasterNumber).toBe(true);
  });

  test('handles master numbers correctly', () => {
    // Test names that result in 11, 22, 33
    const result11 = calculateChaldean('TEST11'); // Hypothetical
    expect(result11.isMasterNumber).toBe(true);
  });

  test('ignores non-alphabetic characters', () => {
    const result = calculateChaldean('John-123 Doe');
    expect(result.letterBreakdown.length).toBe(7); // JOHNDOE
  });
});
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.0s |
| Largest Contentful Paint | < 2.0s |
| Time to Interactive | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Lighthouse Score | > 95 |

---

This architecture is designed for:
- **Scalability**: Easy to add new tools
- **Maintainability**: Clear separation of concerns
- **Performance**: SSG where possible, lazy loading for heavy components
- **SEO Excellence**: Every page optimized
- **Developer Experience**: TypeScript, clear patterns, comprehensive tests
