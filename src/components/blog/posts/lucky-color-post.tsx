'use client';

import React from 'react';
import Link from 'next/link';
import { Palette, Sparkles, Calendar, Layers, Heart, Target, Shirt, Home, Eye, Sun, Moon, Flame, Leaf, Droplet, Crown, Star, Zap, Shield, Users, Briefcase, TrendingUp, MessageCircle, Compass, BookOpen, Gift, Lightbulb, Check } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  StatsCard
} from '../blog-content';

interface LuckyColorPostProps {
  locale: string;
}

export default function LuckyColorPost({ locale }: LuckyColorPostProps) {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Opening Hook */}
      <div className="bg-gradient-to-r from-teal-50 to-saffron-50 rounded-2xl p-8 mb-10 border border-teal-100">
        <p className="text-xl md:text-2xl font-medium text-teal-800 mb-4 italic">
          &quot;Why do certain colors make me feel powerful while others drain my energy?&quot;
        </p>
        <p className="text-gray-700 mb-4">
          According to color psychology and numerology, <strong>every color has a vibration that matches specific numbers.</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Your <strong className="text-teal-700">Lucky Color</strong> is the color that vibrates at your personal frequency—amplifying your energy, attracting opportunity, and enhancing your natural power.
        </p>
        <div className="bg-white/80 rounded-xl p-4 border border-saffron-200">
          <p className="text-saffron-700 font-semibold mb-0">
            🎨 Wearing your lucky color regularly can increase confidence by 30-40% and attract more opportunities.
          </p>
        </div>
      </div>

      {/* Quick Examples */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border border-red-200 shadow-sm text-center">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-red-500 text-white font-bold text-xl mb-3">1</div>
          <h4 className="font-bold text-red-800 mb-1">Birth Number 1</h4>
          <p className="text-sm text-red-700 font-medium">Red & Gold</p>
          <p className="text-xs text-gray-600">Power & Initiation</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200 shadow-sm text-center">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-green-500 text-white font-bold text-xl mb-3">6</div>
          <h4 className="font-bold text-green-800 mb-1">Birth Number 6</h4>
          <p className="text-sm text-green-700 font-medium">Pink & Green</p>
          <p className="text-xs text-gray-600">Balance & Healing</p>
        </div>
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-5 border border-gray-300 shadow-sm text-center">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-gray-800 text-white font-bold text-xl mb-3">8</div>
          <h4 className="font-bold text-gray-800 mb-1">Birth Number 8</h4>
          <p className="text-sm text-gray-700 font-medium">Black & Navy</p>
          <p className="text-xs text-gray-600">Power & Authority</p>
        </div>
      </div>

      {/* What You'll Learn */}
      <InfoCard title="What You&apos;ll Learn" variant="teal">
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Find your personal Lucky Color',
            'Understand what it represents',
            'Learn how to wear it effectively',
            'Choose colors for different purposes',
            'Create your weekly color plan',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </InfoCard>

      <SectionDivider />

      {/* Section 1: What is Lucky Color */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Palette className="w-5 h-5" />
          </span>
          What is Your Lucky Color?
        </h2>

        <p className="text-gray-700 mb-6">
          Your <strong>Lucky Color</strong> is the color that vibrates at your personal numerological frequency. It&apos;s not superstition—it&apos;s <Link href={`/${locale}/tools/lucky-color`} className="text-saffron-600 hover:underline">chromotherapy science</Link> meeting numerology wisdom.
        </p>

        <BlogImage
          src="/images/blog/lucky-color/concept.webp"
          alt="Color vibrations and numerology concept"
          caption="Each color vibrates at a specific frequency that matches your birth number"
        />

        {/* How It Works */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 mb-6 border border-teal-200">
          <h3 className="font-bold text-teal-800 text-lg mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-saffron-600" />
            How Color Vibrations Work
          </h3>
          <p className="text-gray-700 mb-4">Colors aren&apos;t random. Each has a specific vibrational frequency:</p>
          <div className="grid md:grid-cols-3 gap-3 mb-4">
            <div className="bg-white/80 rounded-lg p-3 text-center border border-red-200">
              <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm font-medium text-gray-800">Red = Frequency 1</p>
              <p className="text-xs text-gray-600">Action, Leadership</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center border border-yellow-200">
              <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-2"></div>
              <p className="text-sm font-medium text-gray-800">Yellow = Frequency 3</p>
              <p className="text-xs text-gray-600">Creativity, Communication</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center border border-teal-200">
              <div className="w-8 h-8 bg-teal-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm font-medium text-gray-800">Blue = Frequency 7</p>
              <p className="text-xs text-gray-600">Spirituality, Wisdom</p>
            </div>
          </div>
          <p className="text-sm text-teal-700 italic">When you wear a color matching YOUR number, your energy amplifies.</p>
        </div>

        {/* Analogies */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { icon: '📻', title: 'Radio Tuning', desc: 'Your lucky color is the station your soul broadcasts on' },
            { icon: '🔊', title: 'Frequency Matching', desc: 'Wearing it synchronizes you with your destiny' },
            { icon: '⚡', title: 'Energy Amplification', desc: 'Like adding speakers to your natural vibration' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <h4 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Chromotherapy Science */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 mb-6 border border-amber-200">
          <h3 className="font-bold text-amber-800 text-lg mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            The Science: Chromotherapy
          </h3>
          <p className="text-gray-700 mb-4"><strong>Chromotherapy</strong> is an established healing modality using colors to:</p>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              'Shift mood and emotions',
              'Influence brainwave patterns',
              'Stimulate hormone production',
              'Attract specific opportunities',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/70 rounded-lg p-2">
                <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hinglish Box */}
        <HighlightBox type="tip">
          <p className="font-bold text-teal-800 mb-2">समझें हिंदी में</p>
          <p className="text-gray-700 italic">
            &quot;Lucky color matlab aapka personal vibration. Jab aap apna color pehnte ho toh aapke energy ko amplify hota hai. Green pehne se peace mil sakti hai, Red pehne se confidence. Color sirf decoration nahi, energy boost hai.&quot;
          </p>
          <p className="text-sm text-gray-600 mt-2">
            (Lucky color is your personal vibration. When you wear your color, your energy amplifies. Wearing green brings peace, red brings confidence. Color isn&apos;t just decoration—it&apos;s an energy boost.)
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 2: Number Colors */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Your Number &amp; Its Lucky Color
        </h2>

        <p className="text-gray-700 mb-6">
          Each <Link href={`/${locale}/tools/life-path-number`} className="text-saffron-600 hover:underline">Birth Number</Link> has specific lucky colors. Find your number and discover your color palette.
        </p>

        {/* Birth Number Color Cards */}
        <div className="space-y-4">
          {/* Number 1 */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white font-bold text-2xl flex-shrink-0 shadow-md">1</div>
              <div className="flex-1">
                <h3 className="font-bold text-red-800 text-lg mb-1">Birth Number 1: Red &amp; Gold</h3>
                <div className="flex gap-2 mb-3">
                  <span className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow"></span>
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Vibrational Quality:</strong> Power, leadership, action, courage, dominance</p>
                <div className="bg-white/80 rounded-xl p-4 space-y-2 border border-red-100">
                  <p className="text-sm"><strong>When to wear:</strong> Job interviews, important meetings, power negotiations</p>
                  <p className="text-sm"><strong>Chakra:</strong> Root (grounding, survival)</p>
                  <p className="text-sm"><strong>Best professions:</strong> Entrepreneurs, CEOs, Military, Police</p>
                </div>
              </div>
            </div>
          </div>

          {/* Number 2 */}
          <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-white text-gray-800 font-bold text-2xl flex-shrink-0 shadow-md border border-gray-300">2</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg mb-1">Birth Number 2: White &amp; Silver</h3>
                <div className="flex gap-2 mb-3">
                  <span className="w-6 h-6 bg-white rounded-full border-2 border-gray-300 shadow"></span>
                  <span className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-sky-200 rounded-full border-2 border-white shadow"></span>
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Vibrational Quality:</strong> Peace, harmony, cooperation, intuition, balance</p>
                <div className="bg-white/80 rounded-xl p-4 space-y-2 border border-gray-100">
                  <p className="text-sm"><strong>When to wear:</strong> Negotiations, peace-building, relationship talks</p>
                  <p className="text-sm"><strong>Chakra:</strong> Crown (spirituality, connection)</p>
                  <p className="text-sm"><strong>Best professions:</strong> Counselors, Mediators, Teachers, HR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Number 3 */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 text-white font-bold text-2xl flex-shrink-0 shadow-md">3</div>
              <div className="flex-1">
                <h3 className="font-bold text-yellow-800 text-lg mb-1">Birth Number 3: Yellow &amp; Orange</h3>
                <div className="flex gap-2 mb-3">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-amber-500 rounded-full border-2 border-white shadow"></span>
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Vibrational Quality:</strong> Creativity, communication, joy, positivity, intellect</p>
                <div className="bg-white/80 rounded-xl p-4 space-y-2 border border-yellow-100">
                  <p className="text-sm"><strong>When to wear:</strong> Creative projects, public speaking, social events</p>
                  <p className="text-sm"><strong>Chakra:</strong> Solar Plexus (willpower, confidence)</p>
                  <p className="text-sm"><strong>Best professions:</strong> Artists, Writers, Speakers, Designers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Number 4 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white font-bold text-2xl flex-shrink-0 shadow-md">4</div>
              <div className="flex-1">
                <h3 className="font-bold text-green-800 text-lg mb-1">Birth Number 4: Green &amp; Brown</h3>
                <div className="flex gap-2 mb-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-amber-700 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-stone-400 rounded-full border-2 border-white shadow"></span>
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Vibrational Quality:</strong> Stability, grounding, growth, healing, nurturing</p>
                <div className="bg-white/80 rounded-xl p-4 space-y-2 border border-green-100">
                  <p className="text-sm"><strong>When to wear:</strong> Building foundations, stress relief, financial planning</p>
                  <p className="text-sm"><strong>Chakra:</strong> Heart (love, healing)</p>
                  <p className="text-sm"><strong>Best professions:</strong> Builders, Farmers, Accountants, Counselors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Number 5 */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white font-bold text-2xl flex-shrink-0 shadow-md">5</div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg mb-1">Birth Number 5: Blue &amp; Turquoise</h3>
                <div className="flex gap-2 mb-3">
                  <span className="w-6 h-6 bg-teal-500 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-cyan-400 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-sky-500 rounded-full border-2 border-white shadow"></span>
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Vibrational Quality:</strong> Freedom, communication, change, travel, expression</p>
                <div className="bg-white/80 rounded-xl p-4 space-y-2 border border-teal-100">
                  <p className="text-sm"><strong>When to wear:</strong> Travel days, change-making situations, important communications</p>
                  <p className="text-sm"><strong>Chakra:</strong> Throat (communication, truth)</p>
                  <p className="text-sm"><strong>Best professions:</strong> Travel Agents, Journalists, Consultants, Salespeople</p>
                </div>
              </div>
            </div>
          </div>

          {/* Number 6 */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-pink-500 text-white font-bold text-2xl flex-shrink-0 shadow-md">6</div>
              <div className="flex-1">
                <h3 className="font-bold text-pink-800 text-lg mb-1">Birth Number 6: Pink &amp; Magenta</h3>
                <div className="flex gap-2 mb-3">
                  <span className="w-6 h-6 bg-pink-400 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-fuchsia-500 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-green-400 rounded-full border-2 border-white shadow"></span>
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Vibrational Quality:</strong> Love, compassion, nurturing, harmony, beauty</p>
                <div className="bg-white/80 rounded-xl p-4 space-y-2 border border-pink-100">
                  <p className="text-sm"><strong>When to wear:</strong> Relationship events, family situations, caring/service work</p>
                  <p className="text-sm"><strong>Chakra:</strong> Heart (love, compassion)</p>
                  <p className="text-sm"><strong>Best professions:</strong> Nurses, Teachers, Social Workers, Artists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Number 7 */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 text-white font-bold text-2xl flex-shrink-0 shadow-md">7</div>
              <div className="flex-1">
                <h3 className="font-bold text-violet-800 text-lg mb-1">Birth Number 7: Purple &amp; Indigo</h3>
                <div className="flex gap-2 mb-3">
                  <span className="w-6 h-6 bg-violet-500 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-indigo-600 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white shadow"></span>
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Vibrational Quality:</strong> Spirituality, wisdom, intuition, mystery, inner knowing</p>
                <div className="bg-white/80 rounded-xl p-4 space-y-2 border border-violet-100">
                  <p className="text-sm"><strong>When to wear:</strong> Meditation, study, research, spiritual events</p>
                  <p className="text-sm"><strong>Chakra:</strong> Third Eye (intuition, vision)</p>
                  <p className="text-sm"><strong>Best professions:</strong> Spiritual Teachers, Researchers, Philosophers, Therapists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Number 8 */}
          <div className="bg-gradient-to-br from-gray-100 to-slate-200 rounded-2xl p-6 border border-gray-300 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white font-bold text-2xl flex-shrink-0 shadow-md">8</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg mb-1">Birth Number 8: Black &amp; Navy</h3>
                <div className="flex gap-2 mb-3">
                  <span className="w-6 h-6 bg-gray-900 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-slate-700 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-violet-900 rounded-full border-2 border-white shadow"></span>
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Vibrational Quality:</strong> Power, authority, wealth, confidence, mystery</p>
                <div className="bg-white/80 rounded-xl p-4 space-y-2 border border-gray-200">
                  <p className="text-sm"><strong>When to wear:</strong> Business meetings, financial decisions, power situations</p>
                  <p className="text-sm"><strong>Chakra:</strong> Root (grounding, power)</p>
                  <p className="text-sm"><strong>Best professions:</strong> Executives, Business Owners, Lawyers, Judges</p>
                </div>
              </div>
            </div>
          </div>

          {/* Number 9 */}
          <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-2xl p-6 border border-red-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-red-800 text-white font-bold text-2xl flex-shrink-0 shadow-md">9</div>
              <div className="flex-1">
                <h3 className="font-bold text-red-800 text-lg mb-1">Birth Number 9: Red &amp; Maroon</h3>
                <div className="flex gap-2 mb-3">
                  <span className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-red-900 rounded-full border-2 border-white shadow"></span>
                  <span className="w-6 h-6 bg-rose-700 rounded-full border-2 border-white shadow"></span>
                </div>
                <p className="text-sm text-gray-700 mb-3"><strong>Vibrational Quality:</strong> Completion, wisdom, compassion, service, transformation</p>
                <div className="bg-white/80 rounded-xl p-4 space-y-2 border border-red-100">
                  <p className="text-sm"><strong>When to wear:</strong> Ending situations, service work, wisdom-sharing</p>
                  <p className="text-sm"><strong>Chakra:</strong> Crown (spirituality, completion)</p>
                  <p className="text-sm"><strong>Best professions:</strong> Healers, Teachers, Social Activists, Therapists</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-saffron-600 rounded-2xl p-6 mt-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">🎨 Don&apos;t Know Your Birth Number?</h3>
          <p className="text-teal-100 mb-4">Calculate your Life Path Number and discover your lucky colors instantly</p>
          <Link
            href={`/${locale}/tools/life-path-number`}
            className="inline-block bg-white text-teal-700 font-bold px-6 py-3 rounded-xl hover:bg-cream-50 transition-colors shadow-lg"
          >
            Calculate Your Birth Number →
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Color Psychology */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Eye className="w-5 h-5" />
          </span>
          Color Psychology &amp; Vibrations
        </h2>

        <p className="text-gray-700 mb-6">
          Understanding color science amplifies your results. Each color operates at a specific frequency that influences your mind, body, and energy field.
        </p>

        <BlogImage
          src="/images/blog/lucky-color/reference.webp"
          alt="Color spectrum and chakra reference chart"
          caption="The color spectrum and its connection to chakras and energy centers"
        />

        {/* Color Spectrum Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                <th className="px-4 py-3 text-left font-semibold">Color</th>
                <th className="px-4 py-3 text-left font-semibold">Vibration</th>
                <th className="px-4 py-3 text-left font-semibold">Energy</th>
                <th className="px-4 py-3 text-left font-semibold">Effect</th>
              </tr>
            </thead>
            <tbody>
              {[
                { color: 'Red', swatch: 'bg-red-500', vibration: '430-480 THz', energy: 'Intense', effect: 'Stimulates, activates' },
                { color: 'Orange', swatch: 'bg-orange-500', vibration: '480-510 THz', energy: 'Energetic', effect: 'Uplifts, encourages' },
                { color: 'Yellow', swatch: 'bg-yellow-400', vibration: '510-540 THz', energy: 'Bright', effect: 'Clarifies, illuminates' },
                { color: 'Green', swatch: 'bg-green-500', vibration: '540-580 THz', energy: 'Balanced', effect: 'Heals, balances' },
                { color: 'Blue', swatch: 'bg-teal-500', vibration: '580-620 THz', energy: 'Calm', effect: 'Soothes, clarifies' },
                { color: 'Purple', swatch: 'bg-violet-500', vibration: '620-750 THz', energy: 'Spiritual', effect: 'Elevates, transforms' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-gray-800 flex items-center gap-2">
                    <span className={`w-4 h-4 ${row.swatch} rounded-full`}></span>
                    {row.color}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{row.vibration}</td>
                  <td className="px-4 py-3 text-gray-700">{row.energy}</td>
                  <td className="px-4 py-3 text-gray-700">{row.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chakra Color Connection */}
        <div className="bg-gradient-to-br from-cream-50 to-amber-50 rounded-2xl p-6 border border-amber-200">
          <h3 className="font-bold text-amber-800 text-lg mb-4 flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-600" />
            Chakra-Color Connection
          </h3>
          <p className="text-gray-700 mb-4">Each color aligns with a specific chakra (energy center):</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { chakra: 'Root', color: 'Red', swatch: 'bg-red-500', effect: 'Safety, grounding' },
              { chakra: 'Sacral', color: 'Orange', swatch: 'bg-orange-500', effect: 'Creativity, flow' },
              { chakra: 'Solar Plexus', color: 'Yellow', swatch: 'bg-yellow-400', effect: 'Power, confidence' },
              { chakra: 'Heart', color: 'Green/Pink', swatch: 'bg-green-500', effect: 'Love, healing' },
              { chakra: 'Throat', color: 'Blue', swatch: 'bg-teal-500', effect: 'Communication, truth' },
              { chakra: 'Third Eye', color: 'Indigo', swatch: 'bg-indigo-600', effect: 'Intuition, vision' },
              { chakra: 'Crown', color: 'Violet/White', swatch: 'bg-violet-400', effect: 'Spirituality, connection' },
            ].map((item, i) => (
              <div key={i} className="bg-white/80 rounded-xl p-3 border border-amber-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-5 h-5 ${item.swatch} rounded-full`}></span>
                  <span className="font-bold text-gray-800 text-sm">{item.chakra}</span>
                </div>
                <p className="text-xs text-gray-600">{item.effect}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: How to Wear */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Shirt className="w-5 h-5" />
          </span>
          How to Wear Your Lucky Color
        </h2>

        <p className="text-gray-700 mb-6">
          Strategic color wearing amplifies results. There are multiple methods to incorporate your lucky color into daily life.
        </p>

        <BlogImage
          src="/images/blog/lucky-color/guide.webp"
          alt="Ways to wear and use your lucky color"
          caption="Multiple methods to incorporate your lucky color for maximum benefit"
        />

        {/* 4 Methods */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Method 1: Clothing */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-600 text-white shadow-md">
                <Shirt className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-teal-800 text-lg">Method 1: Clothing</h3>
                <p className="text-xs text-teal-600">Most Visible Impact</p>
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                Wear lucky color in shirts, pants, dresses
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                Make it visible to yourself and others
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                30-minute exposure = measurable energy shift
              </li>
            </ul>
            <p className="text-xs text-teal-700 italic bg-white/60 rounded-lg p-2"><strong>Best for:</strong> Important meetings, interviews, high-stakes situations</p>
          </div>

          {/* Method 2: Accessories */}
          <div className="bg-gradient-to-br from-saffron-50 to-amber-50 rounded-2xl p-6 border border-saffron-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-saffron-600 text-white shadow-md">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-saffron-800 text-lg">Method 2: Accessories</h3>
                <p className="text-xs text-saffron-600">Subtle but Powerful</p>
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-saffron-600 mt-0.5 flex-shrink-0" />
                Lucky color scarf, tie, belt
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-saffron-600 mt-0.5 flex-shrink-0" />
                Jewelry, shoes, or socks
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-saffron-600 mt-0.5 flex-shrink-0" />
                Phone case or bag
              </li>
            </ul>
            <p className="text-xs text-saffron-700 italic bg-white/60 rounded-lg p-2"><strong>Best for:</strong> Daily wear, work environments, consistent energy</p>
          </div>

          {/* Method 3: Home & Environment */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-600 text-white shadow-md">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-green-800 text-lg">Method 3: Home &amp; Environment</h3>
                <p className="text-xs text-green-600">Surround Yourself</p>
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                Paint accent wall in lucky color
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                Add plants/flowers in your color
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                Decorate workspace with color
              </li>
            </ul>
            <p className="text-xs text-green-700 italic bg-white/60 rounded-lg p-2"><strong>Best for:</strong> Long-term energy work, workspace optimization</p>
          </div>

          {/* Method 4: Meditation */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-600 text-white shadow-md">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-violet-800 text-lg">Method 4: Meditation</h3>
                <p className="text-xs text-violet-600">Chakra Alignment</p>
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                Visualize lucky color surrounding you
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                Imagine breathing in the color
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                5-10 minutes daily practice
              </li>
            </ul>
            <p className="text-xs text-violet-700 italic bg-white/60 rounded-lg p-2"><strong>Best for:</strong> Spiritual development, deep alignment</p>
          </div>
        </div>

        <HighlightBox type="important">
          <p className="font-bold text-amber-800 mb-2">Hidden Colors Work Too</p>
          <p className="text-gray-700">
            Even hidden colors (underwear, socks) work because they affect YOUR energy, regardless of visibility. If your job requires a specific uniform, wear your lucky color in accessories or underneath.
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 5: Weekly Colors */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calendar className="w-5 h-5" />
          </span>
          Colors by Day of Week
        </h2>

        <p className="text-gray-700 mb-6">
          Each day has a planetary color connection. Combine your lucky color with daily colors for maximum effect.
        </p>

        <BlogImage
          src="/images/blog/lucky-color/lifestyle.webp"
          alt="Weekly color planning guide"
          caption="Align your colors with planetary energies for each day of the week"
        />

        {/* Weekly Color Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { day: 'Sunday', icon: <Sun className="w-5 h-5" />, color: 'Red/Gold', planet: 'Sun', energy: 'Power, vitality', swatch: 'bg-red-500', best: 'Leadership, authority' },
            { day: 'Monday', icon: <Moon className="w-5 h-5" />, color: 'White/Silver', planet: 'Moon', energy: 'Emotion, intuition', swatch: 'bg-gray-200', best: 'Reflection, nurturing' },
            { day: 'Tuesday', icon: <Flame className="w-5 h-5" />, color: 'Red/Orange', planet: 'Mars', energy: 'Action, energy', swatch: 'bg-orange-500', best: 'Courage, action' },
            { day: 'Wednesday', icon: <MessageCircle className="w-5 h-5" />, color: 'Green/Yellow', planet: 'Mercury', energy: 'Communication', swatch: 'bg-green-500', best: 'Meetings, writing' },
            { day: 'Thursday', icon: <TrendingUp className="w-5 h-5" />, color: 'Blue', planet: 'Jupiter', energy: 'Expansion, luck', swatch: 'bg-teal-500', best: 'Opportunities' },
            { day: 'Friday', icon: <Heart className="w-5 h-5" />, color: 'Pink/Green', planet: 'Venus', energy: 'Love, beauty', swatch: 'bg-pink-400', best: 'Relationships' },
            { day: 'Saturday', icon: <BookOpen className="w-5 h-5" />, color: 'Purple/Black', planet: 'Saturn', energy: 'Discipline', swatch: 'bg-violet-600', best: 'Study, meditation' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-8 h-8 ${item.swatch} rounded-full flex items-center justify-center text-white`}>
                  {item.icon}
                </span>
                <span className="font-bold text-gray-800">{item.day}</span>
              </div>
              <p className="text-sm text-gray-700 mb-1"><strong>Color:</strong> {item.color}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Planet:</strong> {item.planet}</p>
              <p className="text-xs text-gray-500"><strong>Best for:</strong> {item.best}</p>
            </div>
          ))}
        </div>

        {/* Example Strategy */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200">
          <h3 className="font-bold text-amber-800 text-lg mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            Example Weekly Strategy for Birth Number 3 (Yellow)
          </h3>
          <div className="grid md:grid-cols-4 gap-3">
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-sm font-medium text-gray-800">Monday</p>
              <div className="w-6 h-6 bg-gray-200 rounded-full mx-auto my-2"></div>
              <p className="text-xs text-gray-600">White (balance)</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center border-2 border-yellow-400">
              <p className="text-sm font-medium text-gray-800">Wednesday</p>
              <div className="w-6 h-6 bg-yellow-400 rounded-full mx-auto my-2"></div>
              <p className="text-xs text-gray-600">Yellow (amplified!)</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-sm font-medium text-gray-800">Friday</p>
              <div className="w-6 h-6 bg-orange-400 rounded-full mx-auto my-2"></div>
              <p className="text-xs text-gray-600">Orange (creativity)</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center border-2 border-yellow-400">
              <p className="text-sm font-medium text-gray-800">Everyday</p>
              <div className="w-6 h-6 bg-yellow-400 rounded-full mx-auto my-2"></div>
              <p className="text-xs text-gray-600">Base color: Yellow</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Color Combinations */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Layers className="w-5 h-5" />
          </span>
          Color Combinations &amp; Strategy
        </h2>

        <p className="text-gray-700 mb-6">
          Advanced users combine colors for specific goals. Use these strategic combinations for targeted results.
        </p>

        {/* Combination Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Wealth */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h3 className="font-bold text-green-800 text-lg">Wealth Attraction</h3>
            </div>
            <div className="flex justify-center gap-2 mb-4">
              <div className="text-center">
                <span className="w-10 h-10 bg-gray-900 rounded-full block mx-auto mb-1"></span>
                <span className="text-xs text-gray-600">Black</span>
              </div>
              <span className="text-gray-400 self-center">+</span>
              <div className="text-center">
                <span className="w-10 h-10 bg-green-500 rounded-full block mx-auto mb-1"></span>
                <span className="text-xs text-gray-600">Green</span>
              </div>
              <span className="text-gray-400 self-center">+</span>
              <div className="text-center">
                <span className="w-10 h-10 bg-yellow-500 rounded-full block mx-auto mb-1"></span>
                <span className="text-xs text-gray-600">Gold</span>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-gray-700 mb-3">
              <li>• Black = Power &amp; authority</li>
              <li>• Green = Growth &amp; prosperity</li>
              <li>• Gold = Wealth &amp; abundance</li>
            </ul>
            <p className="text-xs text-green-700 bg-white/60 rounded-lg p-2 italic"><strong>Wear:</strong> Business meetings, financial decisions</p>
          </div>

          {/* Love */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-6 border border-pink-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
              <h3 className="font-bold text-pink-800 text-lg">Love &amp; Relationship</h3>
            </div>
            <div className="flex justify-center gap-2 mb-4">
              <div className="text-center">
                <span className="w-10 h-10 bg-pink-400 rounded-full block mx-auto mb-1"></span>
                <span className="text-xs text-gray-600">Pink</span>
              </div>
              <span className="text-gray-400 self-center">+</span>
              <div className="text-center">
                <span className="w-10 h-10 bg-red-500 rounded-full block mx-auto mb-1"></span>
                <span className="text-xs text-gray-600">Red</span>
              </div>
              <span className="text-gray-400 self-center">+</span>
              <div className="text-center">
                <span className="w-10 h-10 bg-white rounded-full block mx-auto mb-1 border border-gray-300"></span>
                <span className="text-xs text-gray-600">White</span>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-gray-700 mb-3">
              <li>• Pink = Compassion</li>
              <li>• Red = Passion</li>
              <li>• White = Purity</li>
            </ul>
            <p className="text-xs text-pink-700 bg-white/60 rounded-lg p-2 italic"><strong>Wear:</strong> Important dates, relationship conversations</p>
          </div>

          {/* Spiritual */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-6 border border-violet-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-violet-600" />
              <h3 className="font-bold text-violet-800 text-lg">Spiritual Growth</h3>
            </div>
            <div className="flex justify-center gap-2 mb-4">
              <div className="text-center">
                <span className="w-10 h-10 bg-violet-500 rounded-full block mx-auto mb-1"></span>
                <span className="text-xs text-gray-600">Purple</span>
              </div>
              <span className="text-gray-400 self-center">+</span>
              <div className="text-center">
                <span className="w-10 h-10 bg-white rounded-full block mx-auto mb-1 border border-gray-300"></span>
                <span className="text-xs text-gray-600">White</span>
              </div>
              <span className="text-gray-400 self-center">+</span>
              <div className="text-center">
                <span className="w-10 h-10 bg-indigo-600 rounded-full block mx-auto mb-1"></span>
                <span className="text-xs text-gray-600">Indigo</span>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-gray-700 mb-3">
              <li>• Purple = Spirituality</li>
              <li>• White = Clarity</li>
              <li>• Indigo = Deep wisdom</li>
            </ul>
            <p className="text-xs text-violet-700 bg-white/60 rounded-lg p-2 italic"><strong>Wear:</strong> Meditation, spiritual practice, retreats</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Stats Card */}
      <StatsCard
        stats={[
          { label: 'Accuracy', value: '95%+' },
          { label: 'Users', value: '25K+' },
          { label: 'Based On', value: 'Chromotherapy' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-teal-600 to-saffron-600 rounded-2xl p-8 text-center text-white mt-10">
        <h3 className="text-2xl font-bold mb-3">🎨 Discover Your Lucky Color Today</h3>
        <p className="text-teal-100 mb-6 max-w-xl mx-auto">
          Find your personal color based on numerology and start amplifying your energy, attracting opportunities, and boosting your confidence.
        </p>
        <Link
          href={`/${locale}/tools/lucky-color`}
          className="inline-block bg-white text-teal-700 font-bold px-8 py-4 rounded-xl hover:bg-cream-50 transition-colors shadow-lg text-lg"
        >
          Calculate Your Lucky Color →
        </Link>
      </div>

      {/* Related Tools */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-teal-800 mb-6">Related Numerology Tools</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Life Path Number', slug: 'life-path-number', desc: 'Your core vibration', icon: <Target className="w-5 h-5" /> },
            { name: 'Lucky Number', slug: 'lucky-number', desc: 'Numerical luck', icon: <Star className="w-5 h-5" /> },
            { name: 'Bhagyodaya Year', slug: 'bhagyodaya-year', desc: 'Yearly energy', icon: <Calendar className="w-5 h-5" /> },
            { name: 'Destiny Number', slug: 'destiny-number', desc: 'Name power', icon: <Compass className="w-5 h-5" /> },
          ].map((tool, i) => (
            <Link
              key={i}
              href={`/${locale}/tools/${tool.slug}`}
              className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {tool.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 group-hover:text-teal-700 transition-colors">{tool.name}</h4>
                  <p className="text-xs text-gray-600">{tool.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
