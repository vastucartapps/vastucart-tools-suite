'use client';

import React from 'react';
import Link from 'next/link';
import {
  Heart,
  Calculator,
  Users,
  Star,
  Sparkles,
  Lightbulb,
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Target,
  Zap,
  MessageCircle,
  Palette,
  Calendar,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  StatsCard
} from '../blog-content';

interface LoveCompatibilityPostProps {
  locale: string;
}

export default function LoveCompatibilityPost({ locale }: LoveCompatibilityPostProps) {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Introduction */}
      <div className="bg-gradient-to-br from-deepteal-50 to-warmaccent-50 rounded-2xl p-8 mb-12 border border-deepteal-100">
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          <strong className="text-deepteal-800">&quot;Are we meant to be together? Will this relationship work?&quot;</strong>
        </p>
        <p className="text-gray-700 mb-6">
          Here&apos;s what lovers rarely know: <strong className="text-deepteal-700">Your compatibility with another person can be predicted through numerology with surprising accuracy.</strong>
        </p>

        <div className="bg-white/80 rounded-xl p-5 border border-deepteal-100 mb-6">
          <h4 className="font-bold text-deepteal-800 mb-3">Your Love Compatibility is calculated by comparing:</h4>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-deepteal-500" />
              Life Path Numbers (core personality)
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-deepteal-500" />
              Expression Numbers (how you express love)
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-deepteal-500" />
              Soul Urge Numbers (what you truly desire)
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-deepteal-500" />
              Combined relationship vibration
            </div>
          </div>
        </div>

        <HighlightBox type="tip">
          <p className="font-bold text-deepteal-800 mb-2">The Power of Compatibility</p>
          <p className="text-gray-700">Understanding your compatibility helps you navigate relationship challenges, strengthen bonds, and determine if this person is truly your match.</p>
        </HighlightBox>
      </div>

      <StatsCard
        stats={[
          { label: 'Accuracy', value: '85%+' },
          { label: 'Factors', value: '3+' },
          { label: 'Analysis', value: 'Instant' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* What is Love Compatibility */}
      <section id="what-is-compatibility" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Heart className="w-5 h-5" />
          </span>
          What is Love Compatibility?
        </h2>

        <p className="text-gray-700 mb-6">
          Your <Link href={`/${locale}/tools/love-compatibility-numerology`} className="text-warmaccent-600 hover:underline font-semibold">Love Compatibility</Link> measures how well two people&apos;s numerological vibrations align.
        </p>

        <BlogImage
          src="/images/blog/love-compatibility-numerology/hero.webp"
          alt="Love Compatibility Numerology - Find Your Perfect Match"
          caption="Discover your relationship destiny through numerology"
        />

        <InfoCard title="How It Works" variant="deepteal">
          <p className="text-gray-700 mb-4">Numerology compares multiple numbers:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-deepteal-500 text-white text-xs font-bold flex-shrink-0">1</span>
              <span><strong>Life Path Numbers</strong> - Core personality match</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-deepteal-500 text-white text-xs font-bold flex-shrink-0">2</span>
              <span><strong>Expression Numbers</strong> - Communication style match</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-deepteal-500 text-white text-xs font-bold flex-shrink-0">3</span>
              <span><strong>Soul Urge Numbers</strong> - Desire/motivation match</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-deepteal-500 text-white text-xs font-bold flex-shrink-0">4</span>
              <span><strong>Combined Number</strong> - Relationship destiny</span>
            </li>
          </ol>
          <p className="text-deepteal-700 mt-4 font-medium">Together, these create compatibility score (0-100%).</p>
        </InfoCard>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Natural Harmonizers
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>1 + 3:</strong> Leader + Creator (excellent)</li>
              <li><strong>2 + 6:</strong> Sensitivity + Care (natural harmony)</li>
              <li><strong>3 + 3:</strong> Joy + Joy (mutual creativity)</li>
              <li><strong>4 + 8:</strong> Foundation + Power (balanced)</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Requires Work
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>1 + 2:</strong> Leader + Follower (power dynamic)</li>
              <li><strong>5 + 7:</strong> Change + Stability (opposing)</li>
              <li><strong>3 + 9:</strong> Scattered + Wisdom (different paces)</li>
            </ul>
          </div>
        </div>

        <HighlightBox type="note">
          <p className="font-bold text-deepteal-800 mb-2">समझें हिंदी में</p>
          <p className="text-gray-700 italic">&quot;Love compatibility matlab dono partners ki numerology kitni well-aligned hai. Agar numbers complement hote hain toh relationship smooth rehti hai, understanding easy hoti hai. Agar conflicting numbers hote hain toh constant adjustment zaroori hota hai.&quot;</p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* How to Calculate Numbers */}
      <section id="how-to-calculate" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate Compatibility Numbers
        </h2>

        <BlogImage
          src="/images/blog/love-compatibility-numerology/concept.webp"
          alt="Love Compatibility Calculation Concept"
          caption="Understanding the three key numbers for compatibility analysis"
        />

        <div className="space-y-6 my-8">
          {/* Step 1 */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-6 border border-deepteal-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-deepteal-500 text-white font-bold flex-shrink-0">1</span>
              <div className="flex-1">
                <h4 className="font-bold text-deepteal-800 mb-2">Calculate Both Life Path Numbers</h4>
                <p className="text-gray-700 text-sm mb-3">Formula: Birth month + Birth day + Birth year</p>
                <div className="bg-white/80 rounded-lg p-4 font-mono text-sm">
                  <p className="text-gray-600 mb-2"><strong>Example - March 15, 1990:</strong></p>
                  <p className="text-gray-700">Month: 3</p>
                  <p className="text-gray-700">Day: 15 = 1 + 5 = 6</p>
                  <p className="text-gray-700">Year: 1990 = 1+9+9+0 = 19 = 1+9 = 10 = 1</p>
                  <p className="text-deepteal-700 font-bold mt-2">Total: 3 + 6 + 1 = 10 = 1 (Life Path = 1)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white font-bold flex-shrink-0">2</span>
              <div className="flex-1">
                <h4 className="font-bold text-amber-800 mb-2">Calculate Expression Numbers</h4>
                <p className="text-gray-700 text-sm mb-3">Formula: Full name converted to numbers (A=1... Z=26)</p>
                <div className="bg-white/80 rounded-lg p-4 font-mono text-sm">
                  <p className="text-gray-600 mb-2"><strong>Example - &quot;JOHN SMITH&quot;:</strong></p>
                  <p className="text-gray-700">JOHN = J(1) + O(6) + H(8) + N(5) = 20 = 2</p>
                  <p className="text-gray-700">SMITH = S(1) + M(4) + I(9) + T(2) + H(8) = 24 = 6</p>
                  <p className="text-amber-700 font-bold mt-2">Total = 2 + 6 = 8 (Expression = 8)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-6 border border-warmaccent-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-500 text-white font-bold flex-shrink-0">3</span>
              <div className="flex-1">
                <h4 className="font-bold text-warmaccent-800 mb-2">Calculate Soul Urge Numbers</h4>
                <p className="text-gray-700 text-sm mb-3">Formula: Vowels in full name (A=1, E=5, I=9, O=6, U=3)</p>
                <div className="bg-white/80 rounded-lg p-4 font-mono text-sm">
                  <p className="text-gray-600 mb-2"><strong>Example - &quot;JOHN SMITH&quot;:</strong></p>
                  <p className="text-gray-700">Vowels: O(6) + I(9) = 15 = 1+5</p>
                  <p className="text-warmaccent-700 font-bold mt-2">Soul Urge = 6</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white font-bold flex-shrink-0">4</span>
              <div className="flex-1">
                <h4 className="font-bold text-green-800 mb-2">Analyze Compatibility</h4>
                <p className="text-gray-700 mb-3">Compare both partners&apos; Life Path, Expression, and Soul Urge numbers to calculate overall compatibility score.</p>
                <p className="text-green-700 font-medium">Use our calculator for instant compatibility score.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-deepteal-600 to-warmaccent-500 rounded-2xl p-8 text-center my-8">
          <h3 className="text-2xl font-bold text-white mb-3">Calculate Your Love Compatibility</h3>
          <p className="text-deepteal-50 mb-6">Discover your relationship destiny through numerology</p>
          <Link
            href={`/${locale}/tools/love-compatibility-numerology`}
            className="inline-flex items-center gap-2 bg-white text-deepteal-700 px-8 py-3 rounded-xl font-bold hover:bg-cream-50 transition-colors shadow-lg"
          >
            Check Compatibility Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Compatibility Numbers */}
      <section id="compatibility-numbers" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Users className="w-5 h-5" />
          </span>
          Compatibility Number Pairings
        </h2>

        <BlogImage
          src="/images/blog/love-compatibility-numerology/matrix.webp"
          alt="Love Compatibility Matrix"
          caption="Complete compatibility matrix for all number pairings"
        />

        <div className="grid md:grid-cols-2 gap-4 my-8">
          {/* 1 + 3 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-green-800">1 + 3: Leader + Creator</h4>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">90%</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Excellent dynamic</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Mutual support</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Growth together</li>
            </ul>
          </div>

          {/* 1 + 5 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-green-800">1 + 5: Leader + Freedom</h4>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">85%</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Exciting relationship</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Adventure together</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Independence respected</li>
            </ul>
          </div>

          {/* 2 + 4 */}
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-5 border-2 border-green-400 relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">BEST</div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-green-800">2 + 4: Sensitive + Stable</h4>
              <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">95%</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><Star className="w-4 h-4 text-green-600 fill-green-600" /> Perfect balance</li>
              <li className="flex items-center gap-2"><Star className="w-4 h-4 text-green-600 fill-green-600" /> Emotional + Grounded</li>
              <li className="flex items-center gap-2"><Star className="w-4 h-4 text-green-600 fill-green-600" /> Mutual support</li>
            </ul>
          </div>

          {/* 2 + 6 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-green-800">2 + 6: Sensitive + Caring</h4>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">92%</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Deep compassion</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Nurturing bond</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Emotional harmony</li>
            </ul>
          </div>

          {/* 3 + 6 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-green-800">3 + 6: Creator + Caregiver</h4>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">88%</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Creative + Supportive</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Joy + Responsibility</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Great combination</li>
            </ul>
          </div>

          {/* 4 + 8 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-green-800">4 + 8: Foundation + Power</h4>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">87%</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Stability + Ambition</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Building together</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Complementary goals</li>
            </ul>
          </div>

          {/* 6 + 6 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-green-800">6 + 6: Caring + Caring</h4>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">89%</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Mutual support</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Deep understanding</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Family-focused</li>
            </ul>
          </div>

          {/* 8 + 8 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-green-800">8 + 8: Power Couple</h4>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">86%</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Ambitious together</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Success partners</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Shared vision</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Perfect Matches */}
      <section id="perfect-matches" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <Star className="w-5 h-5" />
          </span>
          Perfect Matches (High Compatibility)
        </h2>

        <BlogImage
          src="/images/blog/love-compatibility-numerology/analysis.webp"
          alt="Perfect Match Analysis"
          caption="In-depth analysis of the most compatible pairings"
        />

        <div className="space-y-6 my-8">
          {/* 2 + 4: The Dream Couple */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-400">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-green-800 text-xl">2 + 4: The Dream Couple</h3>
              <span className="bg-green-500 text-white font-bold px-4 py-2 rounded-full">95%</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-green-800 mb-2">Why it works:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 2 (sensitive) needs stability → 4 provides it</li>
                  <li>• 4 (grounded) needs softness → 2 provides it</li>
                  <li>• Natural balance & mutual completion</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-green-800 mb-2">Relationship style:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Emotional depth + Practical support</li>
                  <li>• Caring + Reliable</li>
                  <li>• Harmony + Structure</li>
                </ul>
              </div>
            </div>
            <p className="text-green-700 mt-4 font-medium">Challenges: None major (both work well together)</p>
          </div>

          {/* 3 + 6: Creative & Nurturing */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-2xl p-6 border-2 border-warmaccent-400">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-warmaccent-800 text-xl">3 + 6: Creative & Nurturing</h3>
              <span className="bg-warmaccent-500 text-white font-bold px-4 py-2 rounded-full">88%</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-warmaccent-800 mb-2">Why it works:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 3 (creative) needs support → 6 provides it</li>
                  <li>• 6 (caring) needs joy → 3 provides it</li>
                  <li>• Creativity flourishes with care</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-warmaccent-800 mb-2">Relationship style:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Fun + Responsibility</li>
                  <li>• Creative + Supportive</li>
                  <li>• Playful + Grounded</li>
                </ul>
              </div>
            </div>
            <p className="text-warmaccent-700 mt-4 font-medium">Challenges: Minor (3 can scatter, 6 can worry)</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Challenging Matches */}
      <section id="challenging-matches" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <AlertTriangle className="w-5 h-5" />
          </span>
          Challenging Matches (Work Required)
        </h2>

        <HighlightBox type="warning">
          <p className="font-bold text-amber-800 mb-2">Not Doomed - Just Needs Effort</p>
          <p className="text-gray-700">These pairings can absolutely work. They just require more conscious effort, communication, and understanding than naturally harmonious pairs.</p>
        </HighlightBox>

        <div className="space-y-6 my-8">
          {/* 1 + 2 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-amber-800 text-lg">1 + 2: Leader + Follower</h3>
              <span className="bg-amber-500 text-white font-bold px-3 py-1 rounded-full text-sm">65%</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-amber-800 mb-2">Why it&apos;s challenging:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 1 (independent) may dominate</li>
                  <li>• 2 (sensitive) may become submissive</li>
                  <li>• Power imbalance possible</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-green-700 mb-2">How to make it work:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 1 must respect 2&apos;s sensitivity</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 2 must assert boundaries</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Open communication essential</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3 + 5 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-orange-800 text-lg">3 + 5: Scattered + Restless</h3>
              <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-sm">60%</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Why it&apos;s challenging:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Both scattered and changeable</li>
                  <li>• Lack of grounding together</li>
                  <li>• Difficulty with commitment</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-green-700 mb-2">How to make it work:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Find stability through structure</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Create anchoring practices</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Commit to shared goals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5 + 7 */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-red-800 text-lg">5 + 7: Freedom + Isolation</h3>
              <span className="bg-red-400 text-white font-bold px-3 py-1 rounded-full text-sm">68%</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-red-800 mb-2">Why it&apos;s challenging:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 5 wants variety and excitement</li>
                  <li>• 7 wants depth and solitude</li>
                  <li>• Conflicting social needs</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="font-semibold text-green-700 mb-2">How to make it work:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 5 respects 7&apos;s need for space</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 7 joins 5&apos;s adventures sometimes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Schedule quality time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Strengthening Your Relationship */}
      <section id="strengthen" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Lightbulb className="w-5 h-5" />
          </span>
          Strengthening Your Relationship
        </h2>

        <BlogImage
          src="/images/blog/love-compatibility-numerology/remedy.webp"
          alt="Relationship Strengthening Strategies"
          caption="Four proven strategies to strengthen your bond"
        />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          {/* Strategy 1 */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-6 border border-deepteal-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-deepteal-500 text-white">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-deepteal-800">Understand Differences</h4>
            </div>
            <p className="text-gray-700 text-sm mb-3">Your numbers reveal natural differences. Accept them, appreciate them, use them as strengths.</p>
            <div className="bg-white/80 rounded-lg p-3 text-sm">
              <p className="text-gray-600"><strong>Example 1 + 2:</strong></p>
              <p className="text-gray-600">• 1 provides direction</p>
              <p className="text-gray-600">• 2 provides emotional depth</p>
              <p className="text-deepteal-700 font-medium">Together = balance</p>
            </div>
          </div>

          {/* Strategy 2 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-amber-800">Communicate Numerologically</h4>
            </div>
            <p className="text-gray-700 text-sm mb-3">Use numbers to understand conflicts:</p>
            <div className="bg-white/80 rounded-lg p-3 text-sm">
              <p className="text-gray-600"><strong>Conflict:</strong> &quot;You&apos;re too controlling!&quot;</p>
              <p className="text-amber-700 mt-2"><strong>Insight:</strong> &quot;1 naturally leads (gift). 2 is sensitive (gift). Let 1 lead in some areas, 2 nurture in others.&quot;</p>
            </div>
          </div>

          {/* Strategy 3 */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-6 border border-warmaccent-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-500 text-white">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-warmaccent-800">Create Rituals Together</h4>
            </div>
            <p className="text-gray-700 text-sm mb-3">Based on your numbers:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>1 + 3:</strong> Create something new monthly</li>
              <li><strong>2 + 6:</strong> Monthly nurturing rituals</li>
              <li><strong>4 + 8:</strong> Financial planning sessions</li>
              <li><strong>6 + 6:</strong> Family bonding rituals</li>
            </ul>
          </div>

          {/* Strategy 4 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white">
                <Palette className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-green-800">Use Complementary Colors</h4>
            </div>
            <p className="text-gray-700 text-sm mb-3">Strengthen connection through color:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Both wear colors that strengthen each number</li>
              <li>• Creates energetic alignment</li>
              <li>• Subconscious harmony</li>
            </ul>
            <Link href={`/${locale}/tools/lucky-color`} className="text-green-700 text-sm font-medium hover:underline mt-2 inline-block">
              → Find your lucky colors
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Section */}
      <section id="faqs" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <HelpCircle className="w-5 h-5" />
          </span>
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <InfoCard title="If compatibility is low, should we break up?" variant="deepteal">
            <p className="text-gray-700 mb-3">No. Low compatibility just means you need to work harder:</p>
            <FeatureList
              items={[
                'Understand differences',
                'Respect unique qualities',
                'Build bridges',
                'Remember: Love is choice + numerology'
              ]}
              variant="check"
            />
            <p className="text-deepteal-700 mt-3 font-medium">True love transcends numbers.</p>
          </InfoCard>

          <InfoCard title="Does destiny matter or is it just choice?" variant="amber">
            <p className="text-gray-700 mb-3">Both:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Numerology:</strong> Shows natural compatibility (destiny)</li>
              <li><strong>Free will:</strong> Your choices determine outcome</li>
              <li><strong>High compatibility:</strong> Makes it easier</li>
              <li><strong>Low compatibility:</strong> Needs more effort</li>
            </ul>
            <p className="text-amber-700 mt-3 font-medium">Both can succeed with intention.</p>
          </InfoCard>

          <InfoCard title="If I'm incompatible, can I change my name?" variant="highlight">
            <p className="text-gray-700 mb-3">Technically yes, but it&apos;s about changing yourself, not forcing compatibility.</p>
            <p className="text-deepteal-700 font-medium">Better approach: Work on understanding differences, strengthen communication, deepen love.</p>
          </InfoCard>

          <InfoCard title="Are soulmates real according to numerology?" variant="deepteal">
            <p className="text-gray-700 mb-3">Yes and no:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Perfect matches exist (high compatibility)</li>
              <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" /> But you can build soulmate connection with anyone</li>
            </ul>
            <p className="text-deepteal-700 mt-3 font-medium">Numerology shows potential. Love creates destiny.</p>
          </InfoCard>

          <InfoCard title="What if our numbers change with name changes?" variant="amber">
            <p className="text-gray-700 mb-3">Important distinction:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Life Path (birth):</strong> Never changes - this is core</li>
              <li><strong>Expression (name):</strong> Can change with name change</li>
            </ul>
            <p className="text-gray-600 mt-3 text-sm italic">If you change your name, Expression number changes, affecting compatibility slightly. But core (Life Path) remains.</p>
          </InfoCard>
        </div>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion" className="mb-16 scroll-mt-24">
        <div className="bg-gradient-to-br from-deepteal-600 to-warmaccent-500 rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Sparkles className="w-8 h-8" />
            Destiny & Choice
          </h2>

          <p className="text-deepteal-50 mb-6 text-lg">
            <strong className="text-white">Numerology shows compatibility potential. Love is a choice.</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <p className="font-bold text-white mb-2">Numerologically Destined Couples:</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-warmaccent-300" /> Natural harmony</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-warmaccent-300" /> Effortless understanding</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-warmaccent-300" /> Mutual growth</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <p className="font-bold text-white mb-2">Building Destiny Together:</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-warmaccent-300" /> Conscious effort</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-warmaccent-300" /> Deep understanding</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-warmaccent-300" /> Chosen love</li>
              </ul>
            </div>
          </div>

          <p className="text-deepteal-50 mb-6">
            The best relationships combine: <strong className="text-white">Compatible numbers</strong> (aligned vibration) + <strong className="text-white">Real effort</strong> (conscious work) + <strong className="text-white">Genuine love</strong> (heart commitment)
          </p>

          <div className="text-center">
            <Link
              href={`/${locale}/tools/love-compatibility-numerology`}
              className="inline-flex items-center gap-2 bg-white text-deepteal-700 px-8 py-4 rounded-xl font-bold hover:bg-cream-50 transition-colors shadow-lg text-lg"
            >
              <Heart className="w-6 h-6" />
              Check Your Love Compatibility
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-deepteal-800 mb-4">Related Numerology Tools</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href={`/${locale}/tools/life-path-number`} className="block bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-4 border border-deepteal-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-deepteal-800 mb-1">Life Path Number</h4>
            <p className="text-sm text-gray-600">Discover your core personality</p>
          </Link>
          <Link href={`/${locale}/tools/destiny-number`} className="block bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-amber-800 mb-1">Destiny Number</h4>
            <p className="text-sm text-gray-600">Calculate your life path</p>
          </Link>
          <Link href={`/${locale}/tools/lucky-color`} className="block bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-4 border border-warmaccent-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-warmaccent-800 mb-1">Lucky Color Calculator</h4>
            <p className="text-sm text-gray-600">Find colors that strengthen your bond</p>
          </Link>
          <Link href={`/${locale}/tools/marriage-matching`} className="block bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-green-800 mb-1">Kundli Matching</h4>
            <p className="text-sm text-gray-600">Vedic marriage compatibility</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
