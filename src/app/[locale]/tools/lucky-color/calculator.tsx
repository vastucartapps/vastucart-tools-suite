'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import {
  calculateLuckyColors,
  LuckyColorResult,
  ColorInfo,
} from '@/lib/numerology/lucky-color';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

// Color Swatch Component with hex display
function ColorSwatch({
  color,
  locale,
  showDetails = false,
}: {
  color: ColorInfo;
  locale: 'en' | 'hi';
  showDetails?: boolean;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div
        className="group cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div
          className="w-12 h-12 rounded-lg shadow-md border-2 border-white group-hover:border-deepteal-300 transition-colors"
          style={{ backgroundColor: color.hex }}
        />
        <p className="text-xs text-center mt-1 font-medium text-gray-700">
          {color.name[locale]}
        </p>
        {showDetails && (
          <p className="text-xs text-center text-gray-500">{color.hex}</p>
        )}
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white rounded-lg shadow-xl border animate-fade-in-up"
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-8 h-8 rounded-md shadow"
              style={{ backgroundColor: color.hex }}
            />
            <div>
              <p className="font-semibold text-gray-800">
                {color.name[locale]}
              </p>
              <p className="text-xs text-gray-500">
                {color.hex} | RGB({color.rgb})
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mb-2">{color.meaning[locale]}</p>
          <p className="text-xs text-deepteal-600">{color.chakra[locale]}</p>
        </div>
      )}
    </div>
  );
}

// Color Card with full details
function ColorCard({
  color,
  locale,
  label,
}: {
  color: ColorInfo;
  locale: 'en' | 'hi';
  label?: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div
          className="w-16 h-16 rounded-lg shadow-md flex-shrink-0"
          style={{ backgroundColor: color.hex }}
        />
        <div className="flex-1 min-w-0">
          {label && (
            <p className="text-xs text-deepteal-600 font-medium mb-1">{label}</p>
          )}
          <h4 className="font-semibold text-gray-800">{color.name[locale]}</h4>
          <p className="text-xs text-gray-500 mb-2">
            {color.hex} | RGB({color.rgb})
          </p>
          <p className="text-sm text-gray-600 line-clamp-2">
            {color.meaning[locale]}
          </p>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-xs text-deepteal-600 mb-2">{color.chakra[locale]}</p>
        <div className="flex flex-wrap gap-1">
          {color.occasions.slice(0, 3).map((occasion, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
            >
              {occasion[locale]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Color palette display
function ColorPalette({
  colors,
  locale,
  title,
  description,
}: {
  colors: ColorInfo[];
  locale: 'en' | 'hi';
  title: string;
  description?: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5">
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      )}
      <div className="flex flex-wrap gap-4">
        {colors.map((color, idx) => (
          <ColorSwatch key={idx} color={color} locale={locale} showDetails />
        ))}
      </div>
    </div>
  );
}

export default function LuckyColorCalculator() {
  const locale = useLocale() as 'en' | 'hi';
  const t = useTranslations('tools.numerology.luckyColor');

  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [fullName, setFullName] = useState('');
  const [result, setResult] = useState<LuckyColorResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  // Labels for the form
  const dateOfBirthLabel = locale === 'en' ? 'Date of Birth' : 'जन्म तिथि';
  const fullNameLabel = locale === 'en' ? 'Full Name' : 'पूरा नाम';
  const calculateLabel = locale === 'en' ? 'Find Lucky Colors' : 'शुभ रंग खोजें';
  const placeholderName = locale === 'en' ? 'Enter your full name' : 'अपना पूरा नाम दर्ज करें';
  const placeholderDate = locale === 'en' ? 'Select your birth date' : 'अपनी जन्म तिथि चुनें';

  const labels = {
    yourNumbers: locale === 'en' ? 'Your Numbers' : 'आपके अंक',
    birthDay: locale === 'en' ? 'Birth Day' : 'जन्म दिन',
    lifePath: locale === 'en' ? 'Life Path' : 'जीवन पथ',
    nameName: locale === 'en' ? 'Name Number' : 'नाम अंक',
    rulingPlanet: locale === 'en' ? 'Ruling Planet' : 'शासक ग्रह',
    primaryColors: locale === 'en' ? 'Primary Lucky Colors' : 'प्राथमिक शुभ रंग',
    primaryDesc:
      locale === 'en'
        ? 'These colors are most harmonious with your energy'
        : 'ये रंग आपकी ऊर्जा के साथ सबसे अधिक सामंजस्यपूर्ण हैं',
    secondaryColors: locale === 'en' ? 'Secondary Lucky Colors' : 'द्वितीयक शुभ रंग',
    secondaryDesc:
      locale === 'en'
        ? 'Good alternative colors that support your planetary energy'
        : 'अच्छे वैकल्पिक रंग जो आपकी ग्रह ऊर्जा का समर्थन करते हैं',
    colorsToAvoid: locale === 'en' ? 'Colors to Avoid' : 'परहेज योग्य रंग',
    avoidDesc:
      locale === 'en'
        ? 'These colors may clash with your planetary energy'
        : 'ये रंग आपकी ग्रह ऊर्जा से टकरा सकते हैं',
    colorsForLife: locale === 'en' ? 'Colors for Life Areas' : 'जीवन क्षेत्रों के लिए रंग',
    success: locale === 'en' ? 'Success & Career' : 'सफलता और करियर',
    health: locale === 'en' ? 'Health & Vitality' : 'स्वास्थ्य और जीवन शक्ति',
    wealth: locale === 'en' ? 'Wealth & Prosperity' : 'धन और समृद्धि',
    relationships: locale === 'en' ? 'Love & Relationships' : 'प्रेम और संबंध',
    weekdayColors: locale === 'en' ? 'Weekday Colors' : 'सप्ताह के दिनों के रंग',
    weekdayDesc:
      locale === 'en'
        ? 'Best colors to wear each day based on planetary rulership'
        : 'ग्रह शासन के आधार पर प्रतिदिन पहनने के लिए सर्वोत्तम रंग',
    auspicious: locale === 'en' ? 'Auspicious' : 'शुभ',
    seasonalColors: locale === 'en' ? 'Seasonal Colors' : 'मौसमी रंग',
    seasonalDesc:
      locale === 'en'
        ? 'Recommended colors for each season'
        : 'प्रत्येक मौसम के लिए अनुशंसित रंग',
    homeDecor: locale === 'en' ? 'Home Decor Colors' : 'घर की सजावट के रंग',
    homeDesc:
      locale === 'en'
        ? 'Best colors for your living space'
        : 'आपके रहने की जगह के लिए सर्वोत्तम रंग',
    workwear: locale === 'en' ? 'Professional Attire' : 'पेशेवर पहनावा',
    workDesc:
      locale === 'en'
        ? 'Colors for workplace success'
        : 'कार्यस्थल की सफलता के लिए रंग',
    currentYear: locale === 'en' ? `Your ${new Date().getFullYear()} Power Color` : `आपका ${new Date().getFullYear()} पावर रंग`,
    guidance: locale === 'en' ? 'Personal Color Guidance' : 'व्यक्तिगत रंग मार्गदर्शन',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!birthDate) {
      setError(locale === 'en' ? 'Please select your birth date' : 'कृपया अपनी जन्म तिथि चुनें');
      return;
    }

    if (!fullName.trim()) {
      setError(locale === 'en' ? 'Please enter your name' : 'कृपया अपना नाम दर्ज करें');
      return;
    }

    // Convert Date to string in YYYY-MM-DD format
    const dateString = birthDate.toISOString().split('T')[0];
    const colorResult = calculateLuckyColors(dateString, fullName.trim());
    setResult(colorResult);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Input Form */}
      <div
        className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100 animate-fade-in-up"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="max-w-sm">
              <BirthDatePicker
                label={dateOfBirthLabel}
                value={birthDate}
                onChange={setBirthDate}
                locale={locale}
                minYear={1900}
                maxYear={new Date().getFullYear()}
                required
                error={error && !birthDate ? error : undefined}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {fullNameLabel}
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-deepteal-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-deepteal-500 to-deepteal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-deepteal-600 hover:to-deepteal-700 transition-colors shadow-lg hover:shadow-xl"
          >
            {calculateLabel}
          </button>
        </form>
      </div>

      {/* Educational Section */}
      {!result && (
        <EducationalSection
          title={educational.title}
          content={educational.content}
          blogLink={`/${locale}/blog/lucky-color-numerology-chromotherapy`}
          blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
        />
      )}

      {/* Results */}
      {result && (
        <div
          className="space-y-6 animate-fade-in-up"
        >
          {/* Numbers Overview */}
          <div className="bg-gradient-to-br from-deepteal-50 to-emerald-50 rounded-2xl shadow-lg p-6 border border-deepteal-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {labels.yourNumbers}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow">
                <p className="text-3xl font-bold text-deepteal-600">
                  {result.birthDayNumber}
                </p>
                <p className="text-sm text-gray-600">{labels.birthDay}</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow">
                <p className="text-3xl font-bold text-emerald-600">
                  {result.lifePathNumber}
                </p>
                <p className="text-sm text-gray-600">{labels.lifePath}</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow">
                <p className="text-3xl font-bold text-cyan-600">
                  {result.nameNumber}
                </p>
                <p className="text-sm text-gray-600">{labels.nameName}</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow">
                <p className="text-lg font-bold text-deepteal-600">
                  {result.rulingPlanet[locale]}
                </p>
                <p className="text-sm text-gray-600">{labels.rulingPlanet}</p>
              </div>
            </div>
          </div>

          {/* Primary Lucky Colors */}
          <ColorPalette
            colors={result.primaryLuckyColors}
            locale={locale}
            title={labels.primaryColors}
            description={labels.primaryDesc}
          />

          {/* Secondary Lucky Colors */}
          <ColorPalette
            colors={result.secondaryLuckyColors}
            locale={locale}
            title={labels.secondaryColors}
            description={labels.secondaryDesc}
          />

          {/* Related Tools Section */}
          <RelatedToolsSection
            tools={relatedTools}
            locale={locale as 'en' | 'hi'}
          />

          {/* Colors for Life Areas */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              {labels.colorsForLife}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Success */}
              <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-4 border border-amber-100">
                <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                   {labels.success}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {result.colorsForSuccess.map((color, idx) => (
                    <ColorSwatch key={idx} color={color} locale={locale} />
                  ))}
                </div>
              </div>

              {/* Health */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                   {labels.health}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {result.colorsForHealth.map((color, idx) => (
                    <ColorSwatch key={idx} color={color} locale={locale} />
                  ))}
                </div>
              </div>

              {/* Wealth */}
              <div className="bg-gradient-to-br from-emerald-50 to-deepteal-50 rounded-xl p-4 border border-emerald-100">
                <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                   {labels.wealth}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {result.colorsForWealth.map((color, idx) => (
                    <ColorSwatch key={idx} color={color} locale={locale} />
                  ))}
                </div>
              </div>

              {/* Relationships */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-100">
                <h3 className="font-semibold text-pink-800 mb-3 flex items-center gap-2">
                   {labels.relationships}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {result.colorsForRelationships.map((color, idx) => (
                    <ColorSwatch key={idx} color={color} locale={locale} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Weekday Colors */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {labels.weekdayColors}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{labels.weekdayDesc}</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
              {result.weekdayColors.map((day, idx) => (
                <div
                  key={idx}
                  className={`text-center p-3 rounded-xl ${
                    day.isAuspicious
                      ? 'bg-gradient-to-b from-green-50 to-emerald-50 border-2 border-green-200'
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <p className="text-xs font-medium text-gray-600 mb-2">
                    {day.day[locale]}
                  </p>
                  <div
                    className="w-10 h-10 rounded-lg mx-auto shadow-md border-2 border-white"
                    style={{ backgroundColor: day.color.hex }}
                  />
                  <p className="text-xs mt-1 text-gray-700">
                    {day.color.name[locale]}
                  </p>
                  {day.isAuspicious && (
                    <span className="text-xs text-green-600 font-medium">
                       {labels.auspicious}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Seasonal Colors */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {labels.seasonalColors}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{labels.seasonalDesc}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {result.seasonalColors.map((season, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-4 border border-gray-200"
                >
                  <h3 className="font-medium text-gray-800 mb-3">
                    {season.season[locale]}
                  </h3>
                  <div className="flex gap-2">
                    {season.colors.map((color, cidx) => (
                      <div
                        key={cidx}
                        className="w-8 h-8 rounded-md shadow border border-white"
                        style={{ backgroundColor: color.hex }}
                        title={color.name[locale]}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Home & Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Home Decor */}
            <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-5 border border-amber-100">
              <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                 {labels.homeDecor}
              </h3>
              <p className="text-sm text-amber-700 mb-4">{labels.homeDesc}</p>
              <div className="flex flex-wrap gap-3">
                {result.homeDecorColors.map((color, idx) => (
                  <ColorSwatch key={idx} color={color} locale={locale} />
                ))}
              </div>
            </div>

            {/* Workwear */}
            <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-50 rounded-xl p-5 border border-deepteal-100">
              <h3 className="font-semibold text-deepteal-800 mb-2 flex items-center gap-2">
                 {labels.workwear}
              </h3>
              <p className="text-sm text-deepteal-700 mb-4">{labels.workDesc}</p>
              <div className="flex flex-wrap gap-3">
                {result.workwearColors.map((color, idx) => (
                  <ColorSwatch key={idx} color={color} locale={locale} />
                ))}
              </div>
            </div>
          </div>

          {/* Current Year Power Color */}
          <div className="bg-gradient-to-r from-deepteal-500 to-deepteal-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center gap-6">
              <div
                className="w-20 h-20 rounded-xl shadow-lg border-4 border-white/30"
                style={{ backgroundColor: result.currentYearColor.hex }}
              />
              <div>
                <h2 className="text-xl font-bold mb-1">{labels.currentYear}</h2>
                <p className="text-2xl font-bold">
                  {result.currentYearColor.name[locale]}
                </p>
                <p className="text-sm text-white/80 mt-1">
                  {result.currentYearColor.meaning[locale]}
                </p>
              </div>
            </div>
          </div>

          {/* Colors to Avoid */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl shadow-lg p-6 border border-red-100">
            <h2 className="text-xl font-bold text-red-800 mb-2 flex items-center gap-2">
              <span></span> {labels.colorsToAvoid}
            </h2>
            <p className="text-sm text-red-700 mb-4">{labels.avoidDesc}</p>
            <div className="flex flex-wrap gap-4">
              {result.colorsToAvoid.map((color, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="w-12 h-12 rounded-lg shadow-md border-2 border-red-200 opacity-70"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="text-xs text-red-700 mt-1">
                    {color.name[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Guidance */}
          <div className="bg-gradient-to-br from-deepteal-50 to-cyan-50 rounded-2xl shadow-lg p-6 border border-deepteal-100">
            <h2 className="text-xl font-bold text-deepteal-800 mb-4 flex items-center gap-2">
              <span></span> {labels.guidance}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {result.personalGuidance[locale]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
