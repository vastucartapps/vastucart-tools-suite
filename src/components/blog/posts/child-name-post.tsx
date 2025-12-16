'use client';

import React from 'react';
import Link from 'next/link';
import {
  Baby,
  Heart,
  Star,
  Crown,
  Sparkles,
  Calculator,
  Users,
  Lightbulb,
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Target,
  Palette,
  Shield,
  Compass,
  BookOpen,
  Brain,
  Zap,
  Gift
} from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  StatsCard
} from '../blog-content';

interface ChildNamePostProps {
  locale: string;
}

export default function ChildNamePost({ locale }: ChildNamePostProps) {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Introduction */}
      <div className="bg-gradient-to-br from-teal-50 to-saffron-50 rounded-2xl p-8 mb-12 border border-teal-100">
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          <strong className="text-teal-800">&quot;What&apos;s the perfect name for my baby? Will it affect their future?&quot;</strong>
        </p>
        <p className="text-gray-700 mb-6">
          Here&apos;s what parents rarely consider: <strong className="text-teal-700">Your child&apos;s name carries numerological vibration that directly influences their personality, career, relationships, and life success.</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Lucky Names Attract
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Success and confidence</li>
              <li>Natural opportunities</li>
              <li>Achievement and growth</li>
              <li>Life advantages</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Challenging Names Create
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Obstacles and struggle</li>
              <li>Self-doubt issues</li>
              <li>Limitation patterns</li>
              <li>Misaligned paths</li>
            </ul>
          </div>
        </div>

        <HighlightBox type="tip">
          <p className="font-bold text-teal-800 mb-2">The Power of a Lucky Name</p>
          <p className="text-gray-700">Choosing a lucky name for your child sets them up for success, confidence, and aligned opportunities throughout their life.</p>
        </HighlightBox>
      </div>

      <StatsCard
        stats={[
          { label: 'Impact', value: 'Lifetime' },
          { label: 'Numbers', value: '1-9' },
          { label: 'Analysis', value: 'Instant' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Why Baby Names Matter */}
      <section id="why-matter" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Baby className="w-5 h-5" />
          </span>
          Why Baby Names Matter
        </h2>

        <p className="text-gray-700 mb-6">
          Your child&apos;s name influences their entire life. Use our <Link href={`/${locale}/tools/child-name-suggester`} className="text-saffron-600 hover:underline font-semibold">Child Name Suggester</Link> to find the perfect lucky name.
        </p>

        <BlogImage
          src="/images/blog/child-name/hero.webp"
          alt="Child Name Numerology - Lucky Names for Your Baby"
          caption="Your child's name shapes their personality, destiny, and life path"
        />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <InfoCard title="The Numerology Science" variant="teal">
            <p className="text-gray-700 mb-3">Numerology connects letters to numbers (A=1, B=2... Z=26). Your child&apos;s name reduces to a single number (1-9) that represents:</p>
            <FeatureList
              items={[
                'Life Path (destiny)',
                'Personality traits',
                'Natural talents',
                'Life challenges',
                'Career alignment'
              ]}
              variant="check"
            />
          </InfoCard>

          <InfoCard title="The Psychology Effect" variant="amber">
            <p className="text-gray-700 mb-3">Psychology shows names influence:</p>
            <FeatureList
              items={[
                'Self-perception and confidence',
                'How others perceive the child',
                'Career prospects',
                'Relationship patterns'
              ]}
              variant="check"
            />
            <p className="text-teal-700 mt-3 font-medium">Combined effect: Name shapes child&apos;s entire life trajectory.</p>
          </InfoCard>
        </div>

        <HighlightBox type="note">
          <p className="font-bold text-teal-800 mb-2">समझें हिंदी में</p>
          <p className="text-gray-700 italic">&quot;Baby ka naam matlab unka personality aur destiny. Agar naam lucky hai toh naturally confident rehte hain, opportunities naturally aate hain, success easier milti hai. Agar naam challenging hai toh struggle zyada hoti hai.&quot;</p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* How Names Influence Personality */}
      <section id="personality" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Brain className="w-5 h-5" />
          </span>
          How Names Influence Personality
        </h2>

        <p className="text-gray-700 mb-6">
          Each number (1-9) creates specific personality traits in children.
        </p>

        <BlogImage
          src="/images/blog/child-name/concept.webp"
          alt="Name Numbers and Child Personality"
          caption="How each number shapes your child's personality and life path"
        />

        <div className="grid md:grid-cols-3 gap-4 my-8">
          {/* Number 1 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white font-bold mb-3">1</div>
            <h4 className="font-bold text-amber-800 mb-2">Number 1</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Natural leaders</li>
              <li>• Independent thinkers</li>
              <li>• Ambitious achievers</li>
              <li>• Courageous personalities</li>
            </ul>
          </div>

          {/* Number 2 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white font-bold mb-3">2</div>
            <h4 className="font-bold text-teal-800 mb-2">Number 2</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Sensitive, artistic</li>
              <li>• Team players</li>
              <li>• Diplomatic minded</li>
              <li>• Relationship-focused</li>
            </ul>
          </div>

          {/* Number 3 */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-5 border border-saffron-200">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-500 text-white font-bold mb-3">3</div>
            <h4 className="font-bold text-saffron-800 mb-2">Number 3</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Creative, expressive</li>
              <li>• Outgoing, social</li>
              <li>• Communicative</li>
              <li>• Joyful nature</li>
            </ul>
          </div>

          {/* Number 4 */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 text-white font-bold mb-3">4</div>
            <h4 className="font-bold text-gray-800 mb-2">Number 4</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Practical, grounded</li>
              <li>• Responsible, reliable</li>
              <li>• Organized minded</li>
              <li>• Hardworking nature</li>
            </ul>
          </div>

          {/* Number 5 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border border-orange-200">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold mb-3">5</div>
            <h4 className="font-bold text-orange-800 mb-2">Number 5</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Adventurous, flexible</li>
              <li>• Freedom-loving</li>
              <li>• Curious, explorative</li>
              <li>• Variable interests</li>
            </ul>
          </div>

          {/* Number 6 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white font-bold mb-3">6</div>
            <h4 className="font-bold text-teal-800 mb-2">Number 6</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Nurturing, caring</li>
              <li>• Family-focused</li>
              <li>• Responsible helpers</li>
              <li>• Harmony seekers</li>
            </ul>
          </div>

          {/* Number 7 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white font-bold mb-3">7</div>
            <h4 className="font-bold text-amber-800 mb-2">Number 7</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Spiritual, analytical</li>
              <li>• Deep thinkers</li>
              <li>• Introspective</li>
              <li>• Wisdom-focused</li>
            </ul>
          </div>

          {/* Number 8 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white font-bold mb-3">8</div>
            <h4 className="font-bold text-green-800 mb-2">Number 8</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Ambitious, powerful</li>
              <li>• Natural leaders</li>
              <li>• Success-driven</li>
              <li>• Confident personalities</li>
            </ul>
          </div>

          {/* Number 9 */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border border-red-200">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold mb-3">9</div>
            <h4 className="font-bold text-red-800 mb-2">Number 9</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Compassionate, wise</li>
              <li>• Universal thinkers</li>
              <li>• Idealistic</li>
              <li>• Service-oriented</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Lucky Numbers for Children */}
      <section id="lucky-numbers" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Star className="w-5 h-5" />
          </span>
          Lucky Numbers for Children
        </h2>

        <p className="text-gray-700 mb-6">
          Not all numbers are ideal for children. Here&apos;s the ranking based on their influence on a child&apos;s life.
        </p>

        <BlogImage
          src="/images/blog/child-name/reference.webp"
          alt="Lucky Numbers Reference for Children"
          caption="Best and challenging numbers for naming your child"
        />

        {/* Best Numbers */}
        <h3 className="text-xl font-bold text-green-800 mb-4 mt-8">Best Numbers for Children</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Rank 1 */}
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 border-2 border-green-400 relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              RANK #1
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500 text-white text-xl font-bold">1</div>
              <div>
                <h4 className="font-bold text-green-800">Number 1: Leadership</h4>
                <p className="text-xs text-green-600">HIGHLY RECOMMENDED</p>
              </div>
            </div>
            <FeatureList
              items={[
                'Natural leadership',
                'Confidence and courage',
                'Success attraction',
                'Achievement focus'
              ]}
              variant="star"
            />
            <p className="text-sm text-green-700 mt-3 italic font-medium">Ideal for: Children you want naturally confident and successful</p>
          </div>

          {/* Rank 2 */}
          <div className="bg-gradient-to-br from-saffron-100 to-saffron-200 rounded-2xl p-6 border-2 border-saffron-400 relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-saffron-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              RANK #2
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-saffron-500 text-white text-xl font-bold">3</div>
              <div>
                <h4 className="font-bold text-saffron-800">Number 3: Creativity</h4>
                <p className="text-xs text-saffron-600">RECOMMENDED</p>
              </div>
            </div>
            <FeatureList
              items={[
                'Creativity and joy',
                'Social confidence',
                'Communication skills',
                'Fun-loving nature'
              ]}
              variant="star"
            />
            <p className="text-sm text-saffron-700 mt-3 italic font-medium">Ideal for: Creative children, extroverts</p>
          </div>

          {/* Rank 3 */}
          <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-6 border-2 border-teal-400 relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              RANK #3
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500 text-white text-xl font-bold">6</div>
              <div>
                <h4 className="font-bold text-teal-800">Number 6: Harmony</h4>
                <p className="text-xs text-teal-600">RECOMMENDED</p>
              </div>
            </div>
            <FeatureList
              items={[
                'Family bonding',
                'Caring nature',
                'Responsibility',
                'Emotional intelligence'
              ]}
              variant="star"
            />
            <p className="text-sm text-teal-700 mt-3 italic font-medium">Ideal for: Family-focused children</p>
          </div>

          {/* Rank 4 */}
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-6 border-2 border-amber-400 relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              RANK #4
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-500 text-white text-xl font-bold">8</div>
              <div>
                <h4 className="font-bold text-amber-800">Number 8: Power</h4>
                <p className="text-xs text-amber-600">RECOMMENDED</p>
              </div>
            </div>
            <FeatureList
              items={[
                'Ambition and power',
                'Success attraction',
                'Confidence',
                'Achievement drive'
              ]}
              variant="star"
            />
            <p className="text-sm text-amber-700 mt-3 italic font-medium">Ideal for: Children destined for success</p>
          </div>
        </div>

        {/* Neutral Numbers */}
        <h3 className="text-xl font-bold text-gray-700 mb-4">Neutral Numbers</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 text-white font-bold">4</div>
              <h4 className="font-bold text-gray-800">Number 4: Practical, grounded</h4>
            </div>
            <p className="text-sm text-gray-600">Good for stability and reliability</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 text-white font-bold">7</div>
              <h4 className="font-bold text-gray-800">Number 7: Spiritual, thoughtful</h4>
            </div>
            <p className="text-sm text-gray-600">Good for wisdom and analysis</p>
          </div>
        </div>

        {/* Challenging Numbers */}
        <h3 className="text-xl font-bold text-red-700 mb-4">Challenging Numbers</h3>
        <HighlightBox type="warning">
          <p className="font-bold text-amber-800 mb-2">Proceed With Caution</p>
          <p className="text-gray-700 mb-3">These numbers aren&apos;t bad but may create specific challenges:</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/80 rounded-lg p-3">
              <span className="font-bold text-amber-800">Number 2:</span>
              <p className="text-sm text-gray-600">Very sensitive, may struggle with confidence</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <span className="font-bold text-amber-800">Number 5:</span>
              <p className="text-sm text-gray-600">Too much change, may lack focus</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <span className="font-bold text-amber-800">Number 9:</span>
              <p className="text-sm text-gray-600">Completion energy, may feel transient</p>
            </div>
          </div>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Best Boys Names */}
      <section id="boys-names" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <Crown className="w-5 h-5" />
          </span>
          Best Boys Names by Number
        </h2>

        <p className="text-gray-700 mb-6">
          Lucky boys names organized by their numerological value.
        </p>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white font-bold">1</div>
              <div>
                <h4 className="font-bold text-amber-800">Number 1: Leadership Names</h4>
                <p className="text-xs text-amber-600">Natural leaders, confident, ambitious</p>
              </div>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-gray-700 font-medium">Arjun, Aditya, Amar, Arnav, Aryan, Akshay, Aarav</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-5 border border-saffron-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-500 text-white font-bold">3</div>
              <div>
                <h4 className="font-bold text-saffron-800">Number 3: Creativity Names</h4>
                <p className="text-xs text-saffron-600">Creative, communicative, social</p>
              </div>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-gray-700 font-medium">Rohan, Ravi, Ritesh, Rajesh, Raghav, Rohit, Rahul</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 text-white font-bold">4</div>
              <div>
                <h4 className="font-bold text-gray-800">Number 4: Stability Names</h4>
                <p className="text-xs text-gray-600">Grounded, responsible, reliable</p>
              </div>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-gray-700 font-medium">Vikas, Vihaan, Viraj, Vinay, Vivek, Vikram, Varun</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white font-bold">6</div>
              <div>
                <h4 className="font-bold text-teal-800">Number 6: Harmony Names</h4>
                <p className="text-xs text-teal-600">Caring, responsible, harmonious</p>
              </div>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-gray-700 font-medium">Nishant, Nikhil, Naveen, Nirmal, Naresh, Nirav, Navraj</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white font-bold">8</div>
              <div>
                <h4 className="font-bold text-green-800">Number 8: Power Names</h4>
                <p className="text-xs text-green-600">Ambitious, confident, successful</p>
              </div>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-gray-700 font-medium">Harsh, Harshit, Hemang, Hemant, Hari, Hardik, Hitesh</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Best Girls Names */}
      <section id="girls-names" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Heart className="w-5 h-5" />
          </span>
          Best Girls Names by Number
        </h2>

        <p className="text-gray-700 mb-6">
          Lucky girls names organized by their numerological value.
        </p>

        <BlogImage
          src="/images/blog/child-name/process.webp"
          alt="Girls Name Selection Process"
          caption="How to select the perfect lucky name for your daughter"
        />

        <div className="space-y-4 my-8">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white font-bold">1</div>
              <div>
                <h4 className="font-bold text-amber-800">Number 1: Leadership Names</h4>
                <p className="text-xs text-amber-600">Confident, independent, ambitious</p>
              </div>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-gray-700 font-medium">Avni, Anjali, Aanya, Alisha, Arpita, Aishwarya, Ashika</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-5 border border-saffron-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-500 text-white font-bold">3</div>
              <div>
                <h4 className="font-bold text-saffron-800">Number 3: Creativity Names</h4>
                <p className="text-xs text-saffron-600">Creative, expressive, joyful</p>
              </div>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-gray-700 font-medium">Riddhi, Riya, Richa, Rhea, Ragini, Rajni, Rohini</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 text-white font-bold">4</div>
              <div>
                <h4 className="font-bold text-gray-800">Number 4: Stability Names</h4>
                <p className="text-xs text-gray-600">Grounded, responsible, reliable</p>
              </div>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-gray-700 font-medium">Medha, Meera, Maitri, Minal, Megha, Malini, Medhavi</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white font-bold">6</div>
              <div>
                <h4 className="font-bold text-teal-800">Number 6: Harmony Names</h4>
                <p className="text-xs text-teal-600">Caring, harmonious, family-focused</p>
              </div>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-gray-700 font-medium">Priya, Pooja, Padma, Pallavi, Poonam, Piya, Pramila</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white font-bold">8</div>
              <div>
                <h4 className="font-bold text-green-800">Number 8: Power Names</h4>
                <p className="text-xs text-green-600">Confident, ambitious, successful</p>
              </div>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-gray-700 font-medium">Shreya, Shilpa, Shweta, Shailey, Shubhra, Shashwati, Sheela</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-saffron-500 rounded-2xl p-8 text-center my-8">
          <h3 className="text-2xl font-bold text-white mb-3">Find Lucky Names for Your Baby</h3>
          <p className="text-teal-50 mb-6">Get personalized lucky name suggestions for boys and girls</p>
          <Link
            href={`/${locale}/tools/child-name-suggester`}
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3 rounded-xl font-bold hover:bg-cream-50 transition-colors shadow-lg"
          >
            Get Lucky Baby Names
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Name Selection Strategy */}
      <section id="strategy" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Lightbulb className="w-5 h-5" />
          </span>
          Name Selection Strategy
        </h2>

        <BlogImage
          src="/images/blog/child-name/ritual.webp"
          alt="Baby Naming Ceremony and Strategy"
          caption="A 5-step strategy to choose the perfect lucky name for your child"
        />

        <div className="space-y-6 my-8">
          {/* Step 1 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border border-teal-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white font-bold flex-shrink-0">1</span>
              <div>
                <h4 className="font-bold text-teal-800 mb-2">Decide Your Goal for Child</h4>
                <p className="text-gray-700 mb-3">What do you want your child to naturally embody?</p>
                <div className="bg-white/80 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                    <span className="text-gray-700">Confidence & leadership? → Choose <strong>1 or 8</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                    <span className="text-gray-700">Creativity & joy? → Choose <strong>3</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                    <span className="text-gray-700">Responsibility & caring? → Choose <strong>6</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                    <span className="text-gray-700">Stability & groundedness? → Choose <strong>4</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                    <span className="text-gray-700">Wisdom & depth? → Choose <strong>7</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white font-bold flex-shrink-0">2</span>
              <div>
                <h4 className="font-bold text-amber-800 mb-2">Create Shortlist</h4>
                <p className="text-gray-700 mb-3">List potential names matching desired number.</p>
                <div className="bg-white/80 rounded-lg p-3">
                  <p className="text-sm text-gray-600"><strong>Example:</strong> If you want leadership (1), shortlist: Arjun, Aditya, Amar, Aarav</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-6 border border-saffron-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-500 text-white font-bold flex-shrink-0">3</span>
              <div>
                <h4 className="font-bold text-saffron-800 mb-2">Calculate Name Numbers</h4>
                <p className="text-gray-700 mb-3">Verify each name reduces to desired number:</p>
                <div className="bg-white/80 rounded-lg p-3 font-mono text-sm">
                  <p className="text-gray-700">ARJUN: A(1) + R(9) + J(1) + U(3) + N(5) = 19 = 1+9 = <strong className="text-saffron-700">1 ✓</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white font-bold flex-shrink-0">4</span>
              <div>
                <h4 className="font-bold text-green-800 mb-2">Test With Family</h4>
                <p className="text-gray-700 mb-3">Say each name aloud with last name. Feel which name fits best energetically.</p>
                <p className="text-teal-700 font-medium">Your intuition knows which frequency resonates.</p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border border-teal-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white font-bold flex-shrink-0">5</span>
              <div>
                <h4 className="font-bold text-teal-800 mb-2">Verify Across Systems</h4>
                <p className="text-gray-700 mb-3">Some parents cross-check:</p>
                <FeatureList
                  items={[
                    'Vedic numerology',
                    'Western numerology',
                    'Astrological compatibility',
                    'Family traditions'
                  ]}
                  variant="check"
                />
                <p className="text-teal-700 mt-3 font-medium">Choose name that aligns with multiple systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Section */}
      <section id="faqs" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <HelpCircle className="w-5 h-5" />
          </span>
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <InfoCard title="Can I use middle names or nicknames?" variant="teal">
            <p className="text-gray-700 mb-3">Both affect numerology:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Full name (legal):</strong> Determines core vibration</li>
              <li><strong>Nickname:</strong> Used frequently matters too</li>
              <li><strong>Middle name:</strong> Adds secondary influence</li>
            </ul>
            <p className="text-teal-700 mt-3 font-medium">For maximum luck, ensure all reduce to supportive numbers.</p>
          </InfoCard>

          <InfoCard title="What if I want to name after a family member?" variant="amber">
            <p className="text-gray-700 mb-3">Honor tradition AND luck:</p>
            <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
              <li>Calculate family member&apos;s name number</li>
              <li>If lucky (1, 3, 4, 6, 8), use it</li>
              <li>If not lucky, use as middle name</li>
              <li>Give child lucky first name</li>
            </ol>
          </InfoCard>

          <InfoCard title="Can I change an unlucky name later?" variant="highlight">
            <p className="text-gray-700 mb-3">Partially. After age 12-14:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Core personality is formed</li>
              <li>• Changing to lucky name helps future path</li>
              <li>• Legally possible in most places</li>
            </ul>
            <p className="text-teal-700 mt-3 font-medium">Best to choose lucky name from start.</p>
          </InfoCard>

          <InfoCard title="Does birth time/date affect name choice?" variant="teal">
            <p className="text-gray-700 mb-3">Somewhat. Some parents consider:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Astrological chart:</strong> Suggests compatible names</li>
              <li><strong>Numerology:</strong> Adds reinforcement</li>
              <li><strong>Your intuition:</strong> Most important</li>
            </ul>
            <p className="text-teal-700 mt-3 font-medium">Use astrology + numerology together for best results.</p>
          </InfoCard>

          <InfoCard title="What about unique/modern names?" variant="amber">
            <p className="text-gray-700 mb-3">Calculate modern names through the same system:</p>
            <div className="bg-white/80 rounded-lg p-3 font-mono text-sm">
              <p className="text-gray-700">AVANI: A(1) + V(4) + A(1) + N(5) + I(9) = 20 = 2</p>
            </div>
            <p className="text-teal-700 mt-3 font-medium">If it reduces to a lucky number (1, 3, 4, 6, 8), it works beautifully.</p>
          </InfoCard>
        </div>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion" className="mb-16 scroll-mt-24">
        <div className="bg-gradient-to-br from-teal-600 to-saffron-500 rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Gift className="w-8 h-8" />
            Your Child&apos;s First Gift
          </h2>

          <p className="text-teal-50 mb-6 text-lg">
            <strong className="text-white">Your child&apos;s name is their first gift. Make it powerful.</strong>
          </p>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <p className="text-white mb-4">When you choose a lucky name, you&apos;re giving them:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-saffron-300" />
                <span>Natural confidence</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-saffron-300" />
                <span>Personality alignment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-saffron-300" />
                <span>Success attraction</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-saffron-300" />
                <span>Life advantages</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-saffron-300" />
                <span>Aligned opportunities</span>
              </li>
            </ul>
          </div>

          <p className="text-teal-50 mb-6">
            Children with lucky names believe in themselves naturally, attract supportive people, pursue aligned paths, and achieve their potential.
          </p>

          <p className="text-white font-medium mb-6">
            Take time to choose. This decision shapes their life.
          </p>

          <div className="text-center">
            <Link
              href={`/${locale}/tools/child-name-suggester`}
              className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-xl font-bold hover:bg-cream-50 transition-colors shadow-lg text-lg"
            >
              <Baby className="w-6 h-6" />
              Get Lucky Baby Names
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-teal-800 mb-4">Related Numerology Tools</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href={`/${locale}/tools/name-correction`} className="block bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-4 border border-saffron-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-saffron-800 mb-1">Name Correction Tool</h4>
            <p className="text-sm text-gray-600">Optimize existing names for better luck</p>
          </Link>
          <Link href={`/${locale}/tools/life-path-number`} className="block bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-teal-800 mb-1">Life Path Number</h4>
            <p className="text-sm text-gray-600">Discover your child&apos;s life purpose</p>
          </Link>
          <Link href={`/${locale}/tools/destiny-number`} className="block bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-amber-800 mb-1">Destiny Number</h4>
            <p className="text-sm text-gray-600">Calculate life destiny from name</p>
          </Link>
          <Link href={`/${locale}/tools/nakshatra`} className="block bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-green-800 mb-1">Nakshatra Calculator</h4>
            <p className="text-sm text-gray-600">Find birth star for name selection</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
