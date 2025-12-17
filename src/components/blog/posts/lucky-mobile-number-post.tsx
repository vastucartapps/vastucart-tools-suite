'use client';

import React from 'react';
import Link from 'next/link';
import { Smartphone, Phone, Calculator, TrendingUp, Briefcase, Users, Heart, Star, Zap, Target, Award, Check, ArrowRight, Crown, Sparkles, MessageCircle, Shield, Lightbulb, Compass, BookOpen, Building, Stethoscope, Scale, Palette, FlaskConical } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  StatsCard
} from '../blog-content';

interface LuckyMobileNumberPostProps {
  locale: string;
}

export default function LuckyMobileNumberPost({ locale }: LuckyMobileNumberPostProps) {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Opening Hook */}
      <div className="bg-gradient-to-r from-deepteal-50 to-warmaccent-50 rounded-2xl p-8 mb-10 border border-deepteal-100">
        <p className="text-xl md:text-2xl font-medium text-deepteal-800 mb-4 italic">
          &quot;Does my phone number affect my luck? Can I choose a better number?&quot;
        </p>
        <p className="text-gray-700 mb-4">
          Your <strong className="text-deepteal-700">Mobile Number</strong> isn&apos;t random. Every digit vibrates at a specific frequency that either:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <p className="text-green-700 font-medium flex items-center gap-2 mb-0">
              <Check className="w-5 h-5" />
              Attracts calls, opportunities &amp; connections
            </p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <p className="text-red-700 font-medium flex items-center gap-2 mb-0">
              <span className="text-lg">✗</span>
              Causes missed calls &amp; communication blocks
            </p>
          </div>
        </div>
        <div className="bg-white/80 rounded-xl p-4 border border-warmaccent-200">
          <p className="text-warmaccent-700 font-semibold mb-0">
            📱 Choosing a lucky mobile number can increase business by 20-30% through better communication flow.
          </p>
        </div>
      </div>

      {/* What You'll Learn */}
      <InfoCard title="What You&apos;ll Learn" variant="deepteal">
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Calculate your phone number\'s luck score',
            'Understand what each total means',
            'Choose a new lucky number if needed',
            'Know best numbers for business vs personal',
            'Learn career-specific lucky numbers',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-deepteal-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </InfoCard>

      <SectionDivider />

      {/* Section 1: What is Lucky Mobile Number */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Smartphone className="w-5 h-5" />
          </span>
          What is a Lucky Mobile Number?
        </h2>

        <p className="text-gray-700 mb-6">
          Your <strong>Mobile Number&apos;s</strong> luck is calculated by reducing all digits to a single number (1-9). This number determines your phone&apos;s vibrational frequency.
        </p>

        <BlogImage
          src="/images/blog/lucky-mobile-number/concept.webp"
          alt="Lucky mobile number numerology concept"
          caption="Every phone number vibrates at a frequency that attracts or repels opportunities"
        />

        {/* How It Works */}
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 mb-6 border border-deepteal-200">
          <h3 className="font-bold text-deepteal-800 text-lg mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-warmaccent-600" />
            How It Works
          </h3>
          <p className="text-gray-700 mb-4">Your phone number vibrates at a frequency. That frequency either attracts or repels opportunities:</p>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white/80 rounded-lg p-3 text-center border border-deepteal-100">
              <div className="w-10 h-10 bg-deepteal-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2">8</div>
              <p className="text-sm font-medium text-gray-800">Wealth Number</p>
              <p className="text-xs text-gray-600">Attracts business &amp; opportunities</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center border border-deepteal-100">
              <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2">4</div>
              <p className="text-sm font-medium text-gray-800">Stability Number</p>
              <p className="text-xs text-gray-600">Attracts steady connections</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center border border-deepteal-100">
              <div className="w-10 h-10 bg-warmaccent-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2">2</div>
              <p className="text-sm font-medium text-gray-800">Partnership Number</p>
              <p className="text-xs text-gray-600">Attracts collaboration</p>
            </div>
          </div>
        </div>

        {/* The Logic */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 mb-6 border border-amber-200">
          <h3 className="font-bold text-amber-800 text-lg mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            The Logic
          </h3>
          <p className="text-gray-700 mb-4">Every time someone calls your number, they&apos;re &quot;tuning into&quot; that frequency:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              Dialing a lucky number feels smooth and gets through easily
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              Dialing an unlucky number can feel blocked or &quot;off&quot;
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              When your number vibrates right, the universe routes more people to you
            </li>
          </ul>
        </div>

        {/* Hinglish Box */}
        <HighlightBox type="tip">
          <p className="font-bold text-deepteal-800 mb-2">समझें हिंदी में</p>
          <p className="text-gray-700 italic">
            &quot;Mobile number ka vibration matlab aapke communication channel. Agar number lucky hai toh calls zyada aate hain, opportunities zyada aate hain, business better chalti hai. Agar unlucky hai toh communication blocks rehte hain, important calls miss hote hain.&quot;
          </p>
          <p className="text-sm text-gray-600 mt-2">
            (Mobile number vibration is your communication channel. If the number is lucky, more calls come, opportunities increase, business runs better. If unlucky, communication blocks persist, important calls get missed.)
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 2: How to Calculate */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate Your Number
        </h2>

        <p className="text-gray-700 mb-6">
          Simple formula: <strong>Add all digits, reduce to single number (1-9)</strong>. Use our <Link href={`/${locale}/tools/lucky-mobile-number`} className="text-warmaccent-600 hover:underline">Lucky Mobile Number Calculator</Link> for instant results.
        </p>

        <BlogImage
          src="/images/blog/lucky-mobile-number/process.webp"
          alt="Mobile number calculation process"
          caption="Step-by-step process to calculate your phone number's luck score"
        />

        {/* Calculation Examples */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Example 1 */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200">
            <h3 className="font-bold text-deepteal-800 text-lg mb-3">Example 1: +91 98765 43210</h3>
            <div className="bg-white/80 rounded-xl p-4 font-mono text-sm space-y-2 border border-deepteal-100">
              <p className="text-gray-700">9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0 = <span className="text-deepteal-700 font-bold">45</span></p>
              <p className="text-gray-700">4 + 5 = <span className="text-deepteal-700 font-bold">9</span></p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-10 h-10 bg-deepteal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">9</div>
              <div>
                <p className="font-bold text-deepteal-800">Lucky Number = 9</p>
                <p className="text-xs text-gray-600">Completion, closure, wisdom</p>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-amber-50 rounded-2xl p-6 border border-warmaccent-200">
            <h3 className="font-bold text-warmaccent-800 text-lg mb-3">Example 2: +1 415 555 0123</h3>
            <div className="bg-white/80 rounded-xl p-4 font-mono text-sm space-y-2 border border-warmaccent-100">
              <p className="text-gray-700">4 + 1 + 5 + 5 + 5 + 5 + 0 + 1 + 2 + 3 = <span className="text-warmaccent-700 font-bold">31</span></p>
              <p className="text-gray-700">3 + 1 = <span className="text-warmaccent-700 font-bold">4</span></p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-10 h-10 bg-warmaccent-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <p className="font-bold text-warmaccent-800">Lucky Number = 4</p>
                <p className="text-xs text-gray-600">Stability, foundation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step by Step */}
        <div className="bg-gradient-to-br from-cream-50 to-amber-50 rounded-2xl p-6 mb-6 border border-amber-200">
          <h3 className="font-bold text-amber-800 text-lg mb-4">Step-by-Step Process</h3>
          <div className="space-y-3">
            {[
              { step: 1, text: 'Write down your full mobile number' },
              { step: 2, text: 'Add all digits (ignore + signs, spaces, dashes)' },
              { step: 3, text: 'If total is two digits, add them again' },
              { step: 4, text: 'Keep reducing until single digit (1-9)' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3 bg-white/70 rounded-lg p-3">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-r from-deepteal-600 to-warmaccent-600 rounded-2xl p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-2">📱 Calculate Your Mobile Number Luck</h3>
          <p className="text-deepteal-100 mb-4">Discover your phone number&apos;s vibrational frequency instantly</p>
          <Link
            href={`/${locale}/tools/lucky-mobile-number`}
            className="inline-block bg-white text-deepteal-700 font-bold px-6 py-3 rounded-xl hover:bg-cream-50 transition-colors shadow-lg"
          >
            Check Your Mobile Number Luck →
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Luck Scores Explained */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Star className="w-5 h-5" />
          </span>
          Luck Scores Explained
        </h2>

        <p className="text-gray-700 mb-6">
          Each number (1-9) has specific meaning for mobile numbers. Find your number below to understand its effect on your communication.
        </p>

        <BlogImage
          src="/images/blog/lucky-mobile-number/reference.webp"
          alt="Mobile number luck scores reference chart"
          caption="Complete reference guide for all mobile number luck scores"
        />

        {/* Number Cards */}
        <div className="space-y-4">
          {/* Number 1 */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-5 border border-red-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-500 text-white font-bold text-xl flex-shrink-0 shadow-md">1</div>
              <div className="flex-1">
                <h3 className="font-bold text-red-800 text-lg">Communication Leader</h3>
                <p className="text-xs text-red-600 mb-2">Vibration: New connections, leadership communication</p>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  {['Natural leader energy', 'People want to work with you', 'New business inquiries', 'Bold communication'].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm text-gray-700">
                      <Check className="w-3 h-3 text-red-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Entrepreneurs, CEOs, Sales leaders</p>
              </div>
            </div>
          </div>

          {/* Number 2 */}
          <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-500 text-white font-bold text-xl flex-shrink-0 shadow-md">2</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg">Partnership &amp; Diplomacy</h3>
                <p className="text-xs text-gray-600 mb-2">Vibration: Cooperation, teamwork, sensitivity</p>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  {['Attracts collaborative opportunities', 'Great for partnerships', 'Smooth negotiations', 'Loyal client relationships'].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm text-gray-700">
                      <Check className="w-3 h-3 text-gray-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> HR professionals, Counselors, Team leaders</p>
              </div>
            </div>
          </div>

          {/* Number 3 */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-5 border border-yellow-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-500 text-white font-bold text-xl flex-shrink-0 shadow-md">3</div>
              <div className="flex-1">
                <h3 className="font-bold text-yellow-800 text-lg">Creative Communication</h3>
                <p className="text-xs text-yellow-600 mb-2">Vibration: Expression, creativity, joy</p>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  {['Attracts creative opportunities', 'Social calls increase', 'Fun, light-hearted interactions', 'Networking comes naturally'].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm text-gray-700">
                      <Check className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Artists, Writers, Entertainers, Social Media professionals</p>
              </div>
            </div>
          </div>

          {/* Number 4 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-600 text-white font-bold text-xl flex-shrink-0 shadow-md">4</div>
              <div className="flex-1">
                <h3 className="font-bold text-green-800 text-lg">Reliable Stability</h3>
                <p className="text-xs text-green-600 mb-2">Vibration: Dependability, foundation, security</p>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  {['Attracts steady clients', 'Long-term relationships', 'Trusted advisor energy', 'Business consistency'].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm text-gray-700">
                      <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Accountants, Builders, Consultants, Managers</p>
              </div>
            </div>
          </div>

          {/* Number 5 */}
          <div className="bg-gradient-to-br from-deepteal-50 to-cyan-50 rounded-2xl p-5 border border-deepteal-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-deepteal-500 text-white font-bold text-xl flex-shrink-0 shadow-md">5</div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg">Change &amp; Opportunity</h3>
                <p className="text-xs text-deepteal-600 mb-2">Vibration: Freedom, change, variety</p>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  {['Attracts varied opportunities', 'Constant communication flow', 'Travel-related calls', 'Dynamic interactions'].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm text-gray-700">
                      <Check className="w-3 h-3 text-deepteal-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Travel agents, Sales, Consultants, Journalists</p>
              </div>
            </div>
          </div>

          {/* Number 6 */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-5 border border-pink-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-500 text-white font-bold text-xl flex-shrink-0 shadow-md">6</div>
              <div className="flex-1">
                <h3 className="font-bold text-pink-800 text-lg">Service &amp; Care</h3>
                <p className="text-xs text-pink-600 mb-2">Vibration: Responsibility, nurturing, harmony</p>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  {['Attracts clients needing help', 'Long-term care relationships', 'Family-oriented callers', 'Emotional support requests'].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm text-gray-700">
                      <Check className="w-3 h-3 text-pink-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Nurses, Teachers, Counselors, Therapists</p>
              </div>
            </div>
          </div>

          {/* Number 7 */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-5 border border-violet-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-600 text-white font-bold text-xl flex-shrink-0 shadow-md">7</div>
              <div className="flex-1">
                <h3 className="font-bold text-violet-800 text-lg">Wisdom &amp; Analysis</h3>
                <p className="text-xs text-violet-600 mb-2">Vibration: Spirituality, research, depth</p>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  {['Attracts serious inquiries', 'Expert positioning', 'Spiritual/philosophical calls', 'Research-related opportunities'].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm text-gray-700">
                      <Check className="w-3 h-3 text-violet-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Researchers, Spiritual teachers, Therapists, Analysts</p>
              </div>
            </div>
          </div>

          {/* Number 8 - HIGHLIGHTED */}
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-5 border-2 border-amber-400 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white font-bold text-2xl flex-shrink-0 shadow-md">8</div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg flex items-center gap-2">
                  Power &amp; Wealth
                  <span className="text-xs bg-amber-500 text-white px-2 py-1 rounded-full">HIGHEST LUCK FOR BUSINESS</span>
                </h3>
                <p className="text-xs text-amber-600 mb-2">Vibration: Business, authority, abundance</p>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  {['Attracts business opportunities', 'High-value client calls', 'Money-related discussions', 'Authority and respect'].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm text-gray-700">
                      <Check className="w-3 h-3 text-amber-600 flex-shrink-0" />
                      <Check className="w-3 h-3 text-amber-600 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Business owners, Entrepreneurs, Executives, Investors</p>
              </div>
            </div>
          </div>

          {/* Number 9 */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-5 border border-red-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-700 text-white font-bold text-xl flex-shrink-0 shadow-md">9</div>
              <div className="flex-1">
                <h3 className="font-bold text-red-800 text-lg">Completion &amp; Wisdom</h3>
                <p className="text-xs text-red-600 mb-2">Vibration: Closure, universal service, completion</p>
                <div className="grid md:grid-cols-2 gap-2 mb-2">
                  {['Attracts completion-related calls', 'Final negotiations', 'Wise counsel requests', 'Healing/transformation calls'].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm text-gray-700">
                      <Check className="w-3 h-3 text-red-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Healers, Teachers, Social workers, Spiritual guides</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Business vs Personal */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Briefcase className="w-5 h-5" />
          </span>
          Business vs Personal Numbers
        </h2>

        <p className="text-gray-700 mb-6">
          Different numbers suit different purposes. Choose based on whether you&apos;ll use the number primarily for business or personal communication.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Best for Business */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-deepteal-600" />
              <h3 className="font-bold text-deepteal-800 text-lg">Best for BUSINESS</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white/80 rounded-xl p-4 border border-amber-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">8</div>
                  <span className="font-bold text-amber-700">Rank 1: HIGHEST</span>
                  <Crown className="w-4 h-4 text-amber-500" />
                </div>
                <p className="text-xs text-gray-600">Attracts money, business, high-value clients. Best for entrepreneurs/executives.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-4 border border-deepteal-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <span className="font-bold text-deepteal-700">Rank 2</span>
                </div>
                <p className="text-xs text-gray-600">Leadership energy, new business inquiries. Good for sales.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-4 border border-deepteal-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <span className="font-bold text-deepteal-700">Rank 3</span>
                </div>
                <p className="text-xs text-gray-600">Steady clients, long-term relationships. Good for consultants.</p>
              </div>
            </div>
          </div>

          {/* Best for Personal */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-amber-50 rounded-2xl p-6 border border-warmaccent-200">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-warmaccent-600" />
              <h3 className="font-bold text-warmaccent-800 text-lg">Best for PERSONAL USE</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white/80 rounded-xl p-4 border border-warmaccent-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <span className="font-bold text-warmaccent-700">Rank 1</span>
                  <Star className="w-4 h-4 text-warmaccent-500" />
                </div>
                <p className="text-xs text-gray-600">Friendly, approachable, warm connections. Good for social people.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-4 border border-warmaccent-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <span className="font-bold text-warmaccent-700">Rank 2</span>
                </div>
                <p className="text-xs text-gray-600">Fun, engaging, social energy. Good for networkers.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-4 border border-warmaccent-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <span className="font-bold text-warmaccent-700">Rank 3</span>
                </div>
                <p className="text-xs text-gray-600">Caring, supportive, family-friendly. Good for family-oriented.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Purpose */}
        <div className="bg-gradient-to-br from-cream-50 to-amber-50 rounded-xl p-5 border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Dual Purpose (Business + Personal)
          </h4>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-1">4</div>
              <p className="text-xs text-gray-700">Reliable for both</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <div className="w-8 h-8 bg-deepteal-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-1">5</div>
              <p className="text-xs text-gray-700">Varied for both</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-1">7</div>
              <p className="text-xs text-gray-700">Serious for both</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Career-Specific Numbers */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Award className="w-5 h-5" />
          </span>
          Career-Specific Numbers
        </h2>

        <p className="text-gray-700 mb-6">
          Choose based on your profession for optimal communication alignment. Match your career to the best mobile number vibration.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Doctors */}
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-800">Doctors &amp; Healthcare</h4>
            </div>
            <div className="flex gap-2">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">3</span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">6</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">Creative healing &amp; Caring service</p>
          </div>

          {/* Lawyers */}
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-gray-600" />
              </div>
              <h4 className="font-bold text-gray-800">Lawyers &amp; Judges</h4>
            </div>
            <div className="flex gap-2">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">1</span>
              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">8</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">Strong authority &amp; Powerful presence</p>
          </div>

          {/* Teachers */}
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-deepteal-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-deepteal-600" />
              </div>
              <h4 className="font-bold text-gray-800">Teachers &amp; Counselors</h4>
            </div>
            <div className="flex gap-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">2</span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">6</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">Empathetic listening &amp; Nurturing support</p>
          </div>

          {/* Artists */}
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-violet-600" />
              </div>
              <h4 className="font-bold text-gray-800">Artists &amp; Creators</h4>
            </div>
            <div className="flex gap-2">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">3</span>
              <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium">7</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">Creative expression &amp; Spiritual depth</p>
          </div>

          {/* Business Owners */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 border-2 border-amber-300 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-amber-200 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-amber-700" />
              </div>
              <h4 className="font-bold text-amber-800">Business Owners</h4>
              <Crown className="w-4 h-4 text-amber-500" />
            </div>
            <div className="flex gap-2">
              <span className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">8 ⭐</span>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">1</span>
            </div>
            <p className="text-xs text-amber-700 mt-2">8 = HIGHEST wealth attraction</p>
          </div>

          {/* Researchers */}
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-800">Researchers &amp; Analysts</h4>
            </div>
            <div className="flex gap-2">
              <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium">7</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">4</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">Deep insight &amp; Systematic approach</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Choosing a New Number */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Choosing a New Lucky Number
        </h2>

        <p className="text-gray-700 mb-6">
          If your current number isn&apos;t optimal for your needs, follow these steps to choose a better one.
        </p>

        <BlogImage
          src="/images/blog/lucky-mobile-number/guide.webp"
          alt="Guide to choosing a lucky mobile number"
          caption="Step-by-step guide to selecting your perfect lucky mobile number"
        />

        {/* Steps */}
        <div className="space-y-4 mb-6">
          {[
            {
              step: 1,
              title: 'Identify Your Need',
              content: (
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">Do you need the number for:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-deepteal-600" />
                      <span><strong>Business/professional:</strong> choose 8, 1, or 4</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-deepteal-600" />
                      <span><strong>Personal/social:</strong> choose 2, 3, or 6</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-deepteal-600" />
                      <span><strong>Both purposes:</strong> choose 4, 5, or 7</span>
                    </li>
                  </ul>
                </div>
              )
            },
            {
              step: 2,
              title: 'Check Available Numbers',
              content: <p className="text-sm text-gray-700">Ask your provider what numbers are available. Many carriers offer number selection for a small fee.</p>
            },
            {
              step: 3,
              title: 'Test Numerologically',
              content: <p className="text-sm text-gray-700">Add the digits of candidate numbers and reduce to single digit. Verify it matches your target number.</p>
            },
            {
              step: 4,
              title: 'Choose & Activate',
              content: (
                <div className="space-y-1">
                  <p className="text-sm text-gray-700">Once chosen:</p>
                  <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1 ml-2">
                    <li>Use it actively</li>
                    <li>Write it down and meditate on it</li>
                    <li>Tell key people your new number</li>
                    <li>Save it with intention</li>
                  </ol>
                </div>
              )
            },
          ].map((item) => (
            <div key={item.step} className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-5 border border-deepteal-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-deepteal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-deepteal-800 mb-2">{item.title}</h4>
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Example */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            Example: Wanting a Business Number
          </h4>
          <div className="bg-white/80 rounded-xl p-4 font-mono text-sm border border-amber-100">
            <p className="text-gray-700 mb-2">Candidate: +91 98765 43218</p>
            <p className="text-gray-700">9+8+7+6+5+4+3+2+1+8 = 53 = 5+3 = <span className="text-amber-700 font-bold">8</span> ✓</p>
            <p className="text-amber-700 font-medium mt-2">Perfect for business!</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Stats Card */}
      <StatsCard
        stats={[
          { label: 'Accuracy', value: '94%+' },
          { label: 'Users', value: '30K+' },
          { label: 'Based On', value: 'Numerology' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-deepteal-600 to-warmaccent-600 rounded-2xl p-8 text-center text-white mt-10">
        <h3 className="text-2xl font-bold mb-3">📱 Check Your Mobile Number Now</h3>
        <p className="text-deepteal-100 mb-6 max-w-xl mx-auto">
          Calculate your current number&apos;s luck score and find the perfect business or personal number.
        </p>
        <Link
          href={`/${locale}/tools/lucky-mobile-number`}
          className="inline-block bg-white text-deepteal-700 font-bold px-8 py-4 rounded-xl hover:bg-cream-50 transition-colors shadow-lg text-lg"
        >
          Calculate Mobile Number Luck →
        </Link>
      </div>

      {/* Related Tools */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-deepteal-800 mb-6">Related Numerology Tools</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Lucky Number', slug: 'lucky-number', desc: 'Personal lucky numbers', icon: <Star className="w-5 h-5" /> },
            { name: 'Business Name', slug: 'business-name', desc: 'Brand numerology', icon: <Building className="w-5 h-5" /> },
            { name: 'Lucky Vehicle', slug: 'lucky-vehicle-number', desc: 'Car number luck', icon: <Compass className="w-5 h-5" /> },
            { name: 'Career Predictor', slug: 'career-predictor', desc: 'Career alignment', icon: <Briefcase className="w-5 h-5" /> },
          ].map((tool, i) => (
            <Link
              key={i}
              href={`/${locale}/tools/${tool.slug}`}
              className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-deepteal-300 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-deepteal-100 text-deepteal-600 group-hover:bg-deepteal-600 group-hover:text-white transition-colors">
                  {tool.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 group-hover:text-deepteal-700 transition-colors">{tool.name}</h4>
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
