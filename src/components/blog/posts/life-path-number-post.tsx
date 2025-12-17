'use client';

import Link from 'next/link';
import { Calculator, Target, Star, Briefcase, TrendingUp, Users, Heart, Shield, Sparkles, CheckCircle, Award } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  RelatedToolCard,
  StatsCard,
} from '../blog-content';

interface LifePathNumberPostProps {
  locale: string;
}

export default function LifePathNumberPost({ locale }: LifePathNumberPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Truth */}
      <HighlightBox type="important">
        <p className="text-lg font-bold text-deepteal-800 mb-2">Your Soul's Blueprint</p>
        <p className="text-gray-700">
          9 out of 10 people are living someone else's life instead of their own. They follow what parents want, what society expects, what seems "safe"—but they're ignoring their Life Path Number, which holds the coordinates to their true destiny.
        </p>
      </HighlightBox>

      {/* StatsCard */}
      <StatsCard
        stats={[
          { label: 'Life Paths', value: '9 Types' },
          { label: 'Calculation', value: 'Birth Date' },
          { label: 'Accuracy', value: '99%' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Section 1: What Is Life Path Number */}
      <section id="what-is-lifepath">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Target className="w-5 h-5" />
          </span>
          What is Life Path Number?
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Your <strong className="text-deepteal-700">Life Path Number</strong> is the most important number in{' '}
          <a href="https://en.wikipedia.org/wiki/Numerology" target="_blank" rel="nofollow noopener noreferrer" className="text-deepteal-600 hover:underline">numerology</a>.
          It's calculated from your birth date and reveals your soul's primary purpose, core personality, natural talents, and life destiny. This concept has roots in ancient{' '}
          <a href="https://www.britannica.com/topic/Pythagoreanism" target="_blank" rel="nofollow noopener noreferrer" className="text-deepteal-600 hover:underline">Pythagorean teachings</a>.
        </p>

        <BlogImage
          src="/images/blog/life-path-number/concept.webp"
          alt="Life Path Number Concept and Calculation"
          caption="Understanding the numerological blueprint: How your birth date reveals your soul's purpose and life mission"
        />

        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm mt-6">
          <h3 className="font-bold text-deepteal-800 text-lg mb-4">How It Works</h3>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-3">
            <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Step 1:</strong> Add all digits of month + day + year</p>
            <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Step 2:</strong> Reduce to single digit (1-9)</p>
            <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Result:</strong> Your Life Path Number</p>

            <div className="bg-warmaccent-50 rounded-lg p-4 mt-4">
              <p className="text-sm font-bold text-warmaccent-800 mb-2">Example: Born July 15, 1990</p>
              <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                <li>7 + 1 + 5 + 1 + 9 + 9 + 0 = 32</li>
                <li>3 + 2 = 5</li>
                <li><strong>Life Path Number = 5</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-2xl p-5 border border-warmaccent-200 shadow-sm">
            <h4 className="font-bold text-warmaccent-800 mb-3">Why It Matters</h4>
            <FeatureList
              items={[
                'Your soul\'s primary purpose',
                'Your core personality traits',
                'Your natural talents and gifts',
                'Your life lessons to master',
                'Your destiny unfolds through this number',
              ]}
              variant="check"
            />
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <h4 className="font-bold text-amber-800 mb-3">The 9-Year Cycle</h4>
            <p className="text-sm text-gray-700 mb-2">Numerology operates in 9-year cycles. Each cycle teaches different lessons.</p>
            <p className="text-sm text-amber-700 italic font-medium">Understanding your Life Path helps you navigate these cycles consciously instead of randomly.</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: How to Calculate */}
      <section id="how-to-calculate">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate Your Number
        </h2>

        <div className="bg-gradient-to-br from-deepteal-500 to-deepteal-600 rounded-2xl p-8 text-center shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-white mb-3">🔮 Calculate Your Life Path Number</h3>
          <p className="text-deepteal-50 mb-6">
            Discover your soul's purpose and life blueprint instantly
          </p>
          <Link
            href={`/${locale}/tools/life-path-number`}
            className="inline-block bg-white text-deepteal-700 px-8 py-3 rounded-lg font-bold hover:bg-deepteal-50 transition-colors shadow-md"
          >
            Calculate Your Life Path Number →
          </Link>
        </div>

        <BlogImage
          src="/images/blog/life-path-number/guide.webp"
          alt="Life Path Number Calculation Guide"
          caption="Step-by-step guide: Calculate your Life Path Number from your birth date and understand your soul's contract"
        />

        <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-2xl p-6 border border-warmaccent-200 shadow-sm mt-6">
          <h3 className="font-bold text-warmaccent-800 text-lg mb-3">Master Numbers (11, 22, 33)</h3>
          <p className="text-sm text-gray-700">
            If your reduced number is 11, 22, or 33, you have a <strong className="text-warmaccent-700">Master Number</strong>.
            Master Numbers carry higher spiritual vibrations and greater challenges. They appear in only ~1% of the population.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: The 9 Life Path Numbers */}
      <section id="nine-numbers">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Star className="w-5 h-5" />
          </span>
          The 9 Life Path Numbers Explained
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Each number represents a distinct soul journey with unique purpose, gifts, and challenges.
        </p>

        <BlogImage
          src="/images/blog/life-path-number/reference.webp"
          alt="9 Life Path Numbers Reference Guide"
          caption="Complete reference: All 9 Life Path Numbers with their core purposes, personalities, gifts, and life lessons"
        />

        <div className="grid md:grid-cols-1 gap-4 mt-6">
          {/* Life Path 1 */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white font-bold text-2xl flex-shrink-0 shadow-md">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg mb-2">Life Path 1: The Leader</h3>
                <p className="text-xs text-deepteal-600 mb-3 italic font-medium">Core Purpose: Initiate, innovate, lead</p>
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-deepteal-100">
                    <p className="text-xs font-bold text-deepteal-700 mb-2">Personality</p>
                    <p className="text-xs text-gray-700">Independent, ambitious, determined. Natural pioneers and trailblazers.</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-deepteal-100">
                    <p className="text-xs font-bold text-green-700 mb-2">Gifts</p>
                    <p className="text-xs text-gray-700">Leadership ability, courage, originality and vision</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-deepteal-100">
                    <p className="text-xs font-bold text-red-700 mb-2">Challenge</p>
                    <p className="text-xs text-gray-700">Self-doubt, stubbornness, loneliness from independence</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-deepteal-100">
                    <p className="text-xs font-bold text-amber-700 mb-2">Best Careers</p>
                    <p className="text-xs text-gray-700">Entrepreneur, CEO, Manager, Innovator, Military Officer</p>
                  </div>
                </div>
                <p className="text-xs text-deepteal-600 italic font-medium">Life Lesson: Learn to trust yourself and take the first step</p>
              </div>
            </div>
          </div>

          {/* Life Path 2 */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-2xl p-6 border border-warmaccent-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-warmaccent-500 to-warmaccent-600 text-white font-bold text-2xl flex-shrink-0 shadow-md">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-warmaccent-800 text-lg mb-2">Life Path 2: The Peacemaker</h3>
                <p className="text-xs text-warmaccent-600 mb-3 italic font-medium">Core Purpose: Cooperate, balance, harmonize</p>
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-warmaccent-100">
                    <p className="text-xs font-bold text-warmaccent-700 mb-2">Personality</p>
                    <p className="text-xs text-gray-700">Diplomatic, sensitive, intuitive. Natural healers and counselors.</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-warmaccent-100">
                    <p className="text-xs font-bold text-green-700 mb-2">Gifts</p>
                    <p className="text-xs text-gray-700">Diplomacy and tact, intuition and empathy, mediation</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-warmaccent-100">
                    <p className="text-xs font-bold text-red-700 mb-2">Challenge</p>
                    <p className="text-xs text-gray-700">Overly dependent, difficulty deciding, emotional sensitivity</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-warmaccent-100">
                    <p className="text-xs font-bold text-amber-700 mb-2">Best Careers</p>
                    <p className="text-xs text-gray-700">Counselor, Therapist, HR, Teacher, Mediator, Artist</p>
                  </div>
                </div>
                <p className="text-xs text-warmaccent-600 italic font-medium">Life Lesson: Assert yourself while maintaining harmony</p>
              </div>
            </div>
          </div>

          {/* Life Path 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold text-2xl flex-shrink-0 shadow-md">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Life Path 3: The Creative</h3>
                <p className="text-xs text-amber-600 mb-3 italic font-medium">Core Purpose: Create, express, inspire</p>
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-amber-100">
                    <p className="text-xs font-bold text-amber-700 mb-2">Personality</p>
                    <p className="text-xs text-gray-700">Creative, communicative, optimistic. Natural artists.</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-amber-100">
                    <p className="text-xs font-bold text-green-700 mb-2">Gifts</p>
                    <p className="text-xs text-gray-700">Artistic talent, communication skills, charisma</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-amber-100">
                    <p className="text-xs font-bold text-red-700 mb-2">Challenge</p>
                    <p className="text-xs text-gray-700">Lack of focus, scattered energy, inconsistency</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-amber-100">
                    <p className="text-xs font-bold text-amber-700 mb-2">Best Careers</p>
                    <p className="text-xs text-gray-700">Artist, Writer, Speaker, Entertainer, Designer</p>
                  </div>
                </div>
                <p className="text-xs text-amber-600 italic font-medium">Life Lesson: Channel creativity into tangible results</p>
              </div>
            </div>
          </div>

          {/* Life Paths 4-9 in condensed grid format */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Path 4 */}
            <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-4 border border-deepteal-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-deepteal-600 text-white font-bold text-xl mb-3 shadow-md">4</div>
              <h4 className="font-bold text-deepteal-800 mb-1">The Builder</h4>
              <p className="text-xs text-deepteal-600 mb-2 italic">Build, stabilize, organize</p>
              <p className="text-xs text-gray-700 mb-2">Practical, reliable, stable. Natural systems thinkers.</p>
              <p className="text-xs text-gray-600"><strong>Careers:</strong> Engineer, Architect, Accountant</p>
            </div>

            {/* Path 5 */}
            <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-4 border border-warmaccent-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-warmaccent-600 text-white font-bold text-xl mb-3 shadow-md">5</div>
              <h4 className="font-bold text-warmaccent-800 mb-1">The Freedom Seeker</h4>
              <p className="text-xs text-warmaccent-600 mb-2 italic">Experience, explore, adapt</p>
              <p className="text-xs text-gray-700 mb-2">Adventurous, curious, adaptable. Crave variety.</p>
              <p className="text-xs text-gray-600"><strong>Careers:</strong> Travel, Sales, Marketing, Journalist</p>
            </div>

            {/* Path 6 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-600 text-white font-bold text-xl mb-3 shadow-md">6</div>
              <h4 className="font-bold text-amber-800 mb-1">The Nurturer</h4>
              <p className="text-xs text-amber-600 mb-2 italic">Care, nurture, serve</p>
              <p className="text-xs text-gray-700 mb-2">Loving, responsible, nurturing. Natural caregivers.</p>
              <p className="text-xs text-gray-600"><strong>Careers:</strong> Nurse, Counselor, Teacher, Chef</p>
            </div>

            {/* Path 7 */}
            <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-4 border border-deepteal-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-deepteal-600 text-white font-bold text-xl mb-3 shadow-md">7</div>
              <h4 className="font-bold text-deepteal-800 mb-1">The Seeker</h4>
              <p className="text-xs text-deepteal-600 mb-2 italic">Seek, analyze, understand</p>
              <p className="text-xs text-gray-700 mb-2">Introspective, analytical, spiritual. Philosophers.</p>
              <p className="text-xs text-gray-600"><strong>Careers:</strong> Researcher, Philosopher, Therapist</p>
            </div>

            {/* Path 8 */}
            <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-4 border border-warmaccent-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-warmaccent-600 text-white font-bold text-xl mb-3 shadow-md">8</div>
              <h4 className="font-bold text-warmaccent-800 mb-1">The Achiever</h4>
              <p className="text-xs text-warmaccent-600 mb-2 italic">Succeed, manifest, lead</p>
              <p className="text-xs text-gray-700 mb-2">Ambitious, powerful, magnetic. Born leaders.</p>
              <p className="text-xs text-gray-600"><strong>Careers:</strong> Executive, Entrepreneur, Banker</p>
            </div>

            {/* Path 9 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-600 text-white font-bold text-xl mb-3 shadow-md">9</div>
              <h4 className="font-bold text-amber-800 mb-1">The Humanitarian</h4>
              <p className="text-xs text-amber-600 mb-2 italic">Serve, heal, transcend</p>
              <p className="text-xs text-gray-700 mb-2">Compassionate, idealistic. Natural healers.</p>
              <p className="text-xs text-gray-600"><strong>Careers:</strong> Healer, Therapist, Social Activist</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Career Alignment */}
      <section id="career">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Briefcase className="w-5 h-5" />
          </span>
          Career Alignment by Life Path
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Your ideal career matches your Life Path Number. Taking a wrong job is like wearing shoes on the wrong feet—possible but uncomfortable.
        </p>

        <BlogImage
          src="/images/blog/life-path-number/matrix.webp"
          alt="Life Path Career Alignment Matrix"
          caption="Career alignment guide: Match your Life Path Number with ideal professions and avoid misalignment traps"
        />

        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm mt-6">
          <h3 className="font-bold text-deepteal-800 text-lg mb-4">The Magic of Alignment</h3>
          <p className="text-sm text-gray-700 mb-4">
            Most people ignore their natural gifts because society pushes them toward different careers, parents wanted different paths, or insecurity made them doubt their abilities.
          </p>
          <p className="text-sm text-deepteal-700 font-medium italic">
            The magic happens when you align your career with your natural gifts. A Life Path 3 (creative) will struggle as an accountant but thrive as a designer. A Life Path 8 (achiever) will be bored as a teacher but excel as an entrepreneur.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Embrace Your Destiny
        </h2>

        <div className="bg-gradient-to-br from-deepteal-50 to-warmaccent-50 rounded-2xl p-8 border border-deepteal-200 shadow-md mb-6">
          <p className="text-lg font-bold text-deepteal-800 mb-4">The Ultimate Truth</p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Your Life Path Number is your soul's <strong>contract with itself</strong>. Before you incarnated, your soul chose this path. This number. This purpose.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-sm font-bold text-green-800 mb-2">When You Live Aligned:</p>
              <FeatureList
                items={[
                  'Everything flows effortlessly',
                  'You feel fulfilled and purposeful',
                  'Opportunities appear spontaneously',
                  'You attract your "tribe"',
                  'You make a unique impact',
                ]}
                variant="check"
              />
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <p className="text-sm font-bold text-red-800 mb-2">When You Ignore Your Number:</p>
              <ul className="text-xs text-gray-700 space-y-1 ml-4">
                <li>✗ Everything feels forced</li>
                <li>✗ You feel lost and confused</li>
                <li>✗ Opportunities are scarce</li>
                <li>✗ Relationships feel misaligned</li>
                <li>✗ Your potential remains dormant</li>
              </ul>
            </div>
          </div>
        </div>

        <HighlightBox type="tip">
          <p className="text-lg font-bold text-green-800 mb-2">The Choice Is Yours</p>
          <p className="text-gray-700">
            The goal of your life isn't success or wealth—it's <strong>fulfilling your Life Path Number</strong>. Stop living by accident. Start living by design. Your Life Path is calling. Will you answer?
          </p>
        </HighlightBox>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-br from-deepteal-500 to-deepteal-600 rounded-2xl p-8 text-center shadow-lg mt-8">
          <h3 className="text-2xl font-bold text-white mb-3">🔮 Discover Your Soul's Blueprint</h3>
          <p className="text-deepteal-50 mb-6">
            Calculate your Life Path Number and align with your true purpose
          </p>
          <Link
            href={`/${locale}/tools/life-path-number`}
            className="inline-block bg-white text-deepteal-700 px-8 py-3 rounded-lg font-bold hover:bg-deepteal-50 transition-colors shadow-md"
          >
            Calculate Your Life Path Number →
          </Link>
        </div>
      </section>

      {/* Related Tools */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <RelatedToolCard
          title="Destiny Number Calculator"
          description="Discover your name's destiny and how it complements your Life Path"
          href={`/${locale}/tools/destiny-number`}
        />
        <RelatedToolCard
          title="Lucky Number Finder"
          description="Find your personal power numbers for success and manifestation"
          href={`/${locale}/tools/lucky-number`}
        />
        <RelatedToolCard
          title="Bhagyodaya Year Calculator"
          description="Understand this year's personal energy and life cycle phase"
          href={`/${locale}/tools/bhagyodaya-year`}
        />
        <RelatedToolCard
          title="Love Compatibility Calculator"
          description="Check Life Path compatibility with your partner for relationship alignment"
          href={`/${locale}/tools/love-compatibility-numerology`}
        />
      </div>
    </div>
  );
}
