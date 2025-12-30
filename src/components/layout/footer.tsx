'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Heart, Facebook, Instagram } from 'lucide-react';

// Custom SVG icons for social platforms not in lucide-react
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.812-.674 1.928-1.077 3.23-1.166.93-.064 1.83-.009 2.678.158-.09-.468-.264-.878-.52-1.227-.487-.663-1.308-1.013-2.442-1.042h-.068c-.888.013-1.633.272-2.214.771l-1.35-1.52c.864-.766 2.063-1.187 3.523-1.244l.084-.001c1.72.028 3.058.593 3.975 1.68.824.98 1.275 2.283 1.343 3.872l.004.136c.793.31 1.478.732 2.041 1.265.996.945 1.594 2.206 1.779 3.748.21 1.76-.167 3.652-1.123 5.328-1.168 2.046-3.073 3.4-5.506 3.916-1.14.241-2.412.324-3.76.245zm1.166-7.994c-.247-.005-.483.002-.706.022-.87.06-1.54.295-1.994.697-.39.346-.588.8-.556 1.279.03.438.248.835.615 1.12.418.325 1.023.493 1.749.483 1.098-.016 1.947-.375 2.527-1.066.382-.455.653-1.054.808-1.775-.717-.255-1.516-.614-2.443-.76z"/>
  </svg>
);

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

const AmazonIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.493.13.116.18.076.356-.122.533-.04.036-.08.07-.118.104l-.05.044c-.577.472-1.32.876-2.228 1.214-1.57.586-3.202 1.012-4.895 1.276C12.67 22.853 10.964 23 9.285 23c-2.037 0-4.03-.226-5.982-.68-.088-.02-.22-.062-.395-.124-.14-.05-.228-.08-.26-.094-.05-.02-.136-.06-.256-.127-.12-.068-.22-.124-.292-.168-.036-.016-.09-.046-.162-.092-.072-.044-.136-.086-.188-.124s-.108-.076-.168-.118c-.06-.04-.116-.08-.168-.118l-.064-.048c-.048-.036-.084-.066-.106-.088-.08-.072-.106-.148-.08-.228l-.008.004zm23.946-5.612c.124.044.188.11.188.2l-.004.02c0 .02-.004.04-.012.06-.008.02-.02.044-.036.068-.016.024-.04.06-.072.096-.044.048-.096.096-.16.148l-.092.084c-.12.096-.24.188-.364.274-.392.276-.864.536-1.416.78a10.46 10.46 0 01-1.596.56c-.716.188-1.448.3-2.196.34-.748.04-1.476.02-2.188-.06-.356-.04-.716-.1-1.08-.18l-.02-.008c-.172-.032-.212-.076-.12-.132.088-.056.2-.088.34-.096.14-.012.244-.02.312-.024.596 0 1.164-.056 1.704-.168.54-.112 1.044-.268 1.512-.468.468-.2.896-.428 1.284-.684.388-.256.72-.532.996-.828a9.8 9.8 0 00.684-.876c.192-.284.352-.564.48-.84.1-.216.188-.44.264-.668.076-.228.136-.44.18-.636.044-.196.076-.372.096-.528.02-.156.032-.288.036-.396.004-.108.004-.188 0-.24a.418.418 0 00-.02-.116c-.024-.064-.076-.108-.156-.132a.592.592 0 00-.244-.032c-.172.008-.372.048-.6.12-.228.072-.44.16-.636.264a5.6 5.6 0 00-.52.312c-.168.12-.324.244-.468.372a4.79 4.79 0 00-.38.388 4.46 4.46 0 00-.296.372 3.8 3.8 0 00-.212.324 2.76 2.76 0 00-.14.256 1.58 1.58 0 00-.076.18c-.008.032-.016.056-.024.076a.1.1 0 01-.016.04.08.08 0 01-.028.02c-.016.004-.048.004-.092 0a.312.312 0 01-.12-.036.39.39 0 01-.1-.068.26.26 0 01-.064-.084.146.146 0 01-.012-.08l.016-.06.032-.12c.016-.048.04-.116.076-.204.036-.088.08-.188.136-.304.056-.116.124-.244.204-.384.08-.14.176-.284.288-.432.112-.148.236-.296.376-.444.14-.148.296-.292.468-.432.172-.14.36-.276.564-.408.204-.132.424-.248.66-.352.236-.104.488-.192.756-.264.268-.072.552-.12.852-.144.3-.024.588-.012.864.036s.56.14.84.276c.28.136.516.34.704.612.188.272.32.604.396.996.076.392.084.832.024 1.32a5.6 5.6 0 01-.34 1.308 7.38 7.38 0 01-.608 1.148c-.16.24-.34.468-.54.684-.2.216-.42.416-.66.6s-.488.348-.744.492c-.256.144-.524.272-.804.384-.28.112-.568.208-.864.288-.296.08-.592.144-.888.192-.296.048-.58.08-.852.096-.272.016-.528.016-.768 0a4.54 4.54 0 01-.608-.076 3.09 3.09 0 01-.44-.12 2.05 2.05 0 01-.276-.12c-.068-.036-.124-.076-.168-.12a.34.34 0 01-.084-.12c-.016-.044-.016-.096 0-.156.016-.06.048-.128.096-.204a.72.72 0 01.168-.204c.072-.064.152-.12.24-.168l.06-.032.02-.012c.06-.028.14-.028.24 0 .1.028.176.068.228.12a.49.49 0 01.116.188c.024.072.04.144.048.216.008.072.02.136.036.192.016.056.044.1.084.132.04.032.1.048.18.048.108 0 .236-.028.384-.084.148-.056.3-.128.456-.216.156-.088.3-.188.432-.3.132-.112.244-.228.336-.348.092-.12.156-.24.192-.36a.52.52 0 00-.016-.352 1.06 1.06 0 00-.22-.312 2.35 2.35 0 00-.36-.296c-.14-.096-.292-.18-.456-.252a5.23 5.23 0 00-.492-.192 6.52 6.52 0 00-.48-.132c-.14-.036-.264-.06-.372-.076a1.73 1.73 0 00-.228-.024c-.044 0-.08-.008-.108-.024-.028-.016-.036-.04-.024-.072.012-.032.048-.068.108-.108.06-.04.14-.076.24-.108.1-.032.212-.056.336-.072s.26-.02.408-.012c.148.008.3.028.456.06.156.032.304.076.444.132.14.056.268.12.384.192s.208.148.276.228c.068.08.116.164.144.252.028.088.036.176.024.264a1.06 1.06 0 01-.144.36 2.03 2.03 0 01-.288.348c-.116.116-.248.224-.396.324-.148.1-.3.192-.456.276-.156.084-.308.16-.456.228-.148.068-.28.128-.396.18l-.14.064c-.02.008-.04.016-.064.024-.036.016-.048.052-.036.108.012.056.06.1.144.132l.14.048c.32.096.672.136 1.056.12a4.33 4.33 0 001.092-.192c.368-.1.716-.236 1.044-.408a4.92 4.92 0 00.888-.576 5.51 5.51 0 00.72-.696c.208-.252.388-.516.54-.792.152-.276.276-.56.372-.852.096-.292.164-.584.204-.876a4.3 4.3 0 00.012-.8 2.93 2.93 0 00-.132-.652 1.76 1.76 0 00-.288-.504 1.44 1.44 0 00-.444-.36 1.79 1.79 0 00-.552-.2 2.8 2.8 0 00-.6-.06c-.204.004-.396.024-.576.06a3.81 3.81 0 00-.492.12c-.148.048-.28.1-.396.156a2.4 2.4 0 00-.288.168 1.42 1.42 0 00-.18.144c-.044.044-.076.08-.096.108a.25.25 0 00-.036.084c0 .02.004.04.012.06.008.02.028.044.06.072.032.028.084.06.156.096.072.036.172.076.3.12.128.044.292.088.492.132.2.044.448.084.744.12l.132.016c.036.004.064.02.084.048.02.028.02.064 0 .108-.02.044-.056.088-.108.132a.6.6 0 01-.18.108c-.076.032-.16.056-.252.072a1.23 1.23 0 01-.288.024 2.19 2.19 0 01-.612-.084c-.2-.056-.392-.128-.576-.216a3.64 3.64 0 01-.504-.3 3.94 3.94 0 01-.408-.348 3.2 3.2 0 01-.288-.36 2.23 2.23 0 01-.168-.336 1.23 1.23 0 01-.06-.276.73.73 0 01.036-.204c.028-.068.076-.132.144-.192.068-.06.164-.108.288-.144.124-.036.284-.056.48-.06a4.6 4.6 0 01.672.024c.244.028.5.076.768.144.268.068.528.156.78.264.252.108.48.236.684.384.204.148.376.312.516.492.14.18.244.376.312.588.068.212.096.44.084.684a2.51 2.51 0 01-.168.744 3.86 3.86 0 01-.384.696c-.16.224-.348.436-.564.636-.216.2-.456.384-.72.552a6.96 6.96 0 01-.852.456c-.3.136-.616.252-.948.348-.332.096-.676.172-1.032.228-.356.056-.72.088-1.092.096-.372.008-.748-.008-1.128-.048a5.67 5.67 0 01-1.092-.204 4.2 4.2 0 01-.924-.372 3.1 3.1 0 01-.708-.528 2.38 2.38 0 01-.456-.66 2.04 2.04 0 01-.168-.768c0-.284.056-.556.168-.816.112-.26.276-.5.492-.72.216-.22.48-.412.792-.576.312-.164.668-.292 1.068-.384a7.53 7.53 0 011.308-.18c.46-.032.944-.02 1.452.036h.004z"/>
  </svg>
);

export function Footer() {
  const t = useTranslations('footer');
  const tTools = useTranslations('tools');
  const locale = useLocale();
  // Use a fixed year for SSR to avoid hydration mismatch, then update on client
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { label: 'Home', href: `/${locale}` },
    { label: 'All Tools', href: `/${locale}/tools` },
    { label: 'Blog', href: `/${locale}/blog` },
    { label: 'About Us', href: `/${locale}/about` },
  ];

  const popularTools = [
    {
      label: locale === 'en' ? 'Life Path Calculator' : 'मूलांक कैलकुलेटर',
      href: `/${locale}/tools/life-path-number`,
    },
    {
      label: locale === 'en' ? 'Name Numerology' : 'नाम अंकशास्त्र',
      href: `/${locale}/tools/chaldean-numerology`,
    },
    {
      label: locale === 'en' ? 'Lo Shu Grid' : 'लो शू ग्रिड',
      href: `/${locale}/tools/lo-shu-grid`,
    },
    {
      label: locale === 'en' ? 'Kundli Milan' : 'कुंडली मिलान',
      href: `/${locale}/tools/marriage-matching`,
    },
  ];

  const legalLinks = [
    { label: t('privacy'), href: `/${locale}/privacy` },
    { label: t('terms'), href: `/${locale}/terms` },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/vastucartindia/', icon: Facebook, color: 'hover:text-[#1877F2]' },
    { name: 'Instagram', href: 'https://www.instagram.com/vastucart/', icon: Instagram, color: 'hover:text-[#E4405F]' },
    { name: 'Threads', href: 'https://www.threads.com/@vastucart', icon: ThreadsIcon, color: 'hover:text-white' },
    { name: 'Pinterest', href: 'https://in.pinterest.com/vastucart/', icon: PinterestIcon, color: 'hover:text-[#E60023]' },
    { name: 'Amazon', href: 'https://www.amazon.in/s?k=vastucart', icon: AmazonIcon, color: 'hover:text-[#FF9900]' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Link href={`/${locale}`}>
                <img
                  src="/logo.png"
                  alt="VastuCart"
                  className="w-10 h-10 rounded-xl"
                />
              </Link>
              <div className="flex flex-col">
                <Link href={`/${locale}`} className="font-bold text-xl text-white hover:text-deepteal-400 transition-colors">
                  VastuCart
                </Link>
                <span className="text-xs text-gray-400">
                  Divinely Perfect
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              {locale === 'en'
                ? 'Free, authentic Vedic astrology and numerology calculators. Discover your life path, check compatibility, find auspicious dates, and more — all based on ancient Indian wisdom.'
                : 'मुफ्त, प्रामाणिक वैदिक ज्योतिष और अंकशास्त्र कैलकुलेटर। अपना जीवन पथ खोजें, अनुकूलता जांचें, शुभ तिथियां खोजें — सब कुछ प्राचीन भारतीय ज्ञान पर आधारित।'}
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-deepteal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {locale === 'en' ? 'Popular Tools' : 'लोकप्रिय टूल्स'}
            </h3>
            <ul className="space-y-2">
              {popularTools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-deepteal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-deepteal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Store Link */}
            <div className="mt-6">
              <a
                href="https://vastucart.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-warmaccent-500 to-warmaccent-600 text-white rounded-lg text-sm font-medium hover:from-warmaccent-600 hover:to-warmaccent-700 transition-colors"
              >
                {locale === 'en' ? 'Visit Store' : 'स्टोर देखें'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Disclaimer */}
          <div className="text-gray-400 text-xs text-center mb-4 px-4 py-2 bg-gray-800/50 rounded-lg max-w-2xl mx-auto">
            {locale === 'en'
              ? 'For entertainment and educational purposes only. Not professional advice.'
              : 'केवल मनोरंजन और शैक्षिक उद्देश्यों के लिए। पेशेवर सलाह नहीं।'}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              © {currentYear} VastuCart®. {t('copyright')}
            </div>
            <div className="text-gray-500 text-sm flex items-center gap-1">
              {locale === 'en' ? 'Made with' : 'बनाया गया'}{' '}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />{' '}
              {locale === 'en' ? 'in India' : 'भारत में'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
