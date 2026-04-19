#!/usr/bin/env node
/**
 * Rewrites the Related Concepts section of Jyotish-core drafts from prose
 * to markdown-link bullet syntax. Run per-category via CLI arg.
 *
 * Usage: node scripts/convert-crossrefs.mjs <category>
 * Categories: graha rashi nakshatra tithi bhava dosha yoga kuta varga
 */
import fs from 'node:fs';
import path from 'node:path';

const category = process.argv[2];
if (!category) {
  console.error('Usage: node convert-crossrefs.mjs <category>');
  process.exit(1);
}

// Display titles for all 138 concepts
const TITLES = {
  // Grahas
  surya: 'Sūrya', chandra: 'Chandra', mangala: 'Mangala', budha: 'Budha',
  brihaspati: 'Bṛhaspati', shukra: 'Śukra', shani: 'Śani', rahu: 'Rāhu', ketu: 'Ketu',
  // Rashis
  mesha: 'Meṣa', vrishabha: 'Vṛṣabha', mithuna: 'Mithuna', karka: 'Karka',
  simha: 'Siṃha', kanya: 'Kanyā', tula: 'Tulā', vrishchika: 'Vṛścika',
  dhanu: 'Dhanu', makara: 'Makara', kumbha: 'Kumbha', meena: 'Meena',
  // Nakshatras
  ashwini: 'Aśvinī', bharani: 'Bharaṇī', krittika: 'Kṛttikā', rohini: 'Rohiṇī',
  mrigashira: 'Mṛgaśīrṣā', ardra: 'Ārdrā', punarvasu: 'Punarvasu', pushya: 'Puṣya',
  ashlesha: 'Aśleṣā', magha: 'Maghā', 'purva-phalguni': 'Pūrva-Phalgunī',
  'uttara-phalguni': 'Uttara-Phalgunī', hasta: 'Hasta', chitra: 'Chitra',
  swati: 'Svātī', vishakha: 'Viśākhā', anuradha: 'Anurādhā', jyeshtha: 'Jyeṣṭhā',
  mula: 'Mūla', 'purva-ashadha': 'Pūrva-Āṣāḍhā', 'uttara-ashadha': 'Uttara-Āṣāḍhā',
  shravana: 'Śravaṇa', dhanishta: 'Dhaniṣṭhā', shatabhisha: 'Śatabhiṣā',
  'purva-bhadrapada': 'Pūrva-Bhādrapadā', 'uttara-bhadrapada': 'Uttara-Bhādrapadā',
  revati: 'Revatī',
  // Tithis
  pratipada: 'Pratipadā', dwitiya: 'Dvitīyā', tritiya: 'Tṛtīyā', chaturthi: 'Caturthī',
  panchami: 'Pañcamī', shashthi: 'Ṣaṣṭhī', saptami: 'Saptamī', ashtami: 'Aṣṭamī',
  navami: 'Navamī', dashami: 'Daśamī', ekadashi: 'Ekādaśī', dwadashi: 'Dvādaśī',
  trayodashi: 'Trayodaśī', chaturdashi: 'Caturdaśī', purnima: 'Pūrṇimā', amavasya: 'Amāvāsyā',
  // Bhavas
  'tanu-bhava': 'Tanu-bhāva (1st)', 'dhana-bhava': 'Dhana-bhāva (2nd)',
  'sahaja-bhava': 'Sahaja-bhāva (3rd)', 'sukha-bhava': 'Sukha-bhāva (4th)',
  'putra-bhava': 'Putra-bhāva (5th)', 'ripu-bhava': 'Ripu-bhāva (6th)',
  'kalatra-bhava': 'Kalatra-bhāva (7th)', 'ayush-bhava': 'Āyus-bhāva (8th)',
  'dharma-bhava': 'Dharma-bhāva (9th)', 'karma-bhava': 'Karma-bhāva (10th)',
  'labha-bhava': 'Lābha-bhāva (11th)', 'vyaya-bhava': 'Vyaya-bhāva (12th)',
  // Doshas
  'mangal-dosha': 'Maṅgala-dośa', 'kaal-sarp-dosha': 'Kāla-sarpa-dośa',
  'pitra-dosha': 'Pitṛ-dośa', 'grahan-dosha': 'Grahaṇa-dośa',
  'nadi-dosha': 'Nāḍī-dośa', 'sade-sati': 'Sāḍe-Sātī',
  // Yogas
  'raj-yoga': 'Rāja-yoga', 'dhana-yoga': 'Dhana-yoga', 'gaja-kesari-yoga': 'Gaja-Kesarī-yoga',
  'pancha-mahapurusha-yoga': 'Pañca-Mahāpuruṣa-yoga', 'ruchaka-yoga': 'Ruchaka-yoga',
  'bhadra-yoga': 'Bhadra-yoga', 'hamsa-yoga': 'Haṃsa-yoga',
  'malavya-yoga': 'Mālavya-yoga', 'sasa-yoga': 'Śaśa-yoga',
  'neecha-bhanga-raja-yoga': 'Nīca-bhaṅga Rāja-yoga', 'vipareeta-raja-yoga': 'Vipareeta Rāja-yoga',
  // Kūṭas
  'varna-koota': 'Varṇa-kūṭa', 'vashya-koota': 'Vaśya-kūṭa', 'tara-koota': 'Tārā-kūṭa',
  'yoni-koota': 'Yoni-kūṭa', 'graha-maitri-koota': 'Graha-maitrī-kūṭa',
  'gana-koota': 'Gaṇa-kūṭa', 'bhakoot-koota': 'Bhakūṭa-kūṭa', 'nadi-koota': 'Nāḍī-kūṭa',
  // Vargas
  'rashi-d1': 'Rāśi (D-1)', 'hora-d2': 'Horā (D-2)', 'drekkana-d3': 'Drekkāṇa (D-3)',
  'chaturthamsha-d4': 'Caturthāṃśa (D-4)', 'saptamsha-d7': 'Saptāṃśa (D-7)',
  'navamsha-d9': 'Navāṃśa (D-9)', 'dashamsha-d10': 'Daśāṃśa (D-10)',
  'dwadashamsha-d12': 'Dvādaśāṃśa (D-12)', 'shodashamsha-d16': 'Ṣoḍaśāṃśa (D-16)',
  'vimshamsha-d20': 'Vimśāṃśa (D-20)', 'chaturvimshamsha-d24': 'Caturviṃśāṃśa (D-24)',
  'saptavimshamsha-d27': 'Saptaviṃśāṃśa (D-27)', 'trimshamsha-d30': 'Triṃśāṃśa (D-30)',
  'khavedamsha-d40': 'Khavedāṃśa (D-40)', 'akshavedamsha-d45': 'Akṣavedāṃśa (D-45)',
  'shashtiamsha-d60': 'Ṣaṣṭiāṃśa (D-60)',
  // Numerology, Vastu, Tarot — already linked, not processed here
};

function pathFor(slug) {
  // Tithis use nested /concepts/tithi/{slug}
  const TITHI_SLUGS = new Set(['pratipada', 'dwitiya', 'tritiya', 'chaturthi', 'panchami', 'shashthi', 'saptami', 'ashtami', 'navami', 'dashami', 'ekadashi', 'dwadashi', 'trayodashi', 'chaturdashi', 'purnima', 'amavasya']);
  if (TITHI_SLUGS.has(slug)) return `/concepts/tithi/${slug}`;
  return `/concepts/${slug}`;
}

function link(slug) {
  const title = TITLES[slug];
  if (!title) throw new Error(`No title for slug: ${slug}`);
  return `[${title}](${pathFor(slug)})`;
}

// Cross-reference maps per category. Each slug → [[targetSlug, note], ...]
const CROSSREFS = {
  graha: {
    surya: [
      ['chandra', 'counterpart *jyoti* in the classical Sūrya-Chandra pair of lights'],
      ['simha', 'rāśi ruled by Sūrya; mūla-trikoṇa in early Siṃha'],
      ['mesha', 'rāśi of Sūrya\'s classical exaltation'],
      ['tula', 'rāśi of Sūrya\'s classical debilitation'],
      ['tanu-bhava', '1st bhāva, where Sūrya\'s *ātma-kāraka* register is primary'],
      ['dharma-bhava', '9th bhāva, classical register of father and dharma'],
      ['karma-bhava', '10th bhāva, register of authority and public action'],
      ['krittika', 'nakshatra ruled by Sūrya in the Vimśottarī scheme'],
      ['uttara-phalguni', 'nakshatra ruled by Sūrya'],
      ['uttara-ashadha', 'nakshatra ruled by Sūrya'],
      ['grahan-dosha', 'classical eclipse-register dośa involving Sūrya or Chandra'],
    ],
    chandra: [
      ['surya', 'counterpart *jyoti* in the classical Sūrya-Chandra pair'],
      ['karka', 'rāśi ruled by Chandra'],
      ['vrishabha', 'rāśi of Chandra\'s classical exaltation'],
      ['vrishchika', 'rāśi of Chandra\'s classical debilitation'],
      ['sukha-bhava', '4th bhāva, classical mātṛ-sthāna where Chandra is natural kāraka'],
      ['rohini', 'nakshatra ruled by Chandra in the Vimśottarī scheme'],
      ['hasta', 'nakshatra ruled by Chandra'],
      ['shravana', 'nakshatra ruled by Chandra'],
      ['sade-sati', '7.5-year Śani transit pattern calculated from natal Chandra-rāśi'],
      ['gaja-kesari-yoga', 'classical Guru-in-kendra-from-Chandra yoga'],
    ],
    mangala: [
      ['mesha', 'rāśi ruled by Mangala; mūla-trikoṇa in early Meṣa'],
      ['vrishchika', 'rāśi ruled by Mangala'],
      ['makara', 'rāśi of Mangala\'s classical exaltation'],
      ['karka', 'rāśi of Mangala\'s classical debilitation'],
      ['sahaja-bhava', '3rd bhāva, classical sahaja-kāraka register'],
      ['mrigashira', 'nakshatra ruled by Mangala'],
      ['chitra', 'nakshatra ruled by Mangala'],
      ['dhanishta', 'nakshatra ruled by Mangala'],
      ['mangal-dosha', 'classical dośa formed by Mangala in specific bhāvas'],
      ['ruchaka-yoga', 'Mangala Pañca-Mahāpuruṣa-yoga'],
    ],
    budha: [
      ['mithuna', 'rāśi ruled by Budha'],
      ['kanya', 'rāśi ruled by Budha; exaltation and mūla-trikoṇa in Kanyā'],
      ['meena', 'rāśi of Budha\'s classical debilitation'],
      ['dhana-bhava', '2nd bhāva, classical *vidyā* and speech register'],
      ['sahaja-bhava', '3rd bhāva, communication register'],
      ['ashlesha', 'nakshatra ruled by Budha'],
      ['jyeshtha', 'nakshatra ruled by Budha'],
      ['revati', 'nakshatra ruled by Budha'],
      ['bhadra-yoga', 'Budha Pañca-Mahāpuruṣa-yoga'],
    ],
    brihaspati: [
      ['dhanu', 'rāśi ruled by Guru; mūla-trikoṇa in Dhanu'],
      ['meena', 'rāśi ruled by Guru'],
      ['karka', 'rāśi of Guru\'s classical exaltation'],
      ['makara', 'rāśi of Guru\'s classical debilitation'],
      ['putra-bhava', '5th bhāva, classical *putra-kāraka* register'],
      ['dharma-bhava', '9th bhāva, classical dharma-kāraka register'],
      ['punarvasu', 'nakshatra ruled by Guru'],
      ['vishakha', 'nakshatra ruled by Guru'],
      ['purva-bhadrapada', 'nakshatra ruled by Guru'],
      ['gaja-kesari-yoga', 'Guru-in-kendra-from-Chandra yoga'],
      ['hamsa-yoga', 'Guru Pañca-Mahāpuruṣa-yoga'],
    ],
    shukra: [
      ['vrishabha', 'rāśi ruled by Śukra'],
      ['tula', 'rāśi ruled by Śukra; mūla-trikoṇa in early Tulā'],
      ['meena', 'rāśi of Śukra\'s classical exaltation'],
      ['kanya', 'rāśi of Śukra\'s classical debilitation'],
      ['kalatra-bhava', '7th bhāva, classical *kalatra-kāraka* register'],
      ['bharani', 'nakshatra ruled by Śukra'],
      ['purva-phalguni', 'nakshatra ruled by Śukra'],
      ['purva-ashadha', 'nakshatra ruled by Śukra'],
      ['malavya-yoga', 'Śukra Pañca-Mahāpuruṣa-yoga'],
    ],
    shani: [
      ['makara', 'rāśi ruled by Śani'],
      ['kumbha', 'rāśi ruled by Śani; mūla-trikoṇa in early Kumbha'],
      ['tula', 'rāśi of Śani\'s classical exaltation'],
      ['mesha', 'rāśi of Śani\'s classical debilitation'],
      ['karma-bhava', '10th bhāva, classical *karma-kāraka* register'],
      ['pushya', 'nakshatra ruled by Śani'],
      ['anuradha', 'nakshatra ruled by Śani'],
      ['uttara-bhadrapada', 'nakshatra ruled by Śani'],
      ['sade-sati', '7.5-year Śani transit through three rāśis adjacent to Chandra'],
      ['sasa-yoga', 'Śani Pañca-Mahāpuruṣa-yoga'],
    ],
    rahu: [
      ['ketu', 'counterpart *chāyā-graha* at the descending lunar node'],
      ['kaal-sarp-dosha', 'classical dośa with all grahas between Rāhu and Ketu'],
      ['grahan-dosha', 'eclipse-register dośa involving Rāhu-Ketu affliction of luminaries'],
      ['pitra-dosha', 'ancestral-register dośa cross-referenced via Rāhu configurations'],
      ['ardra', 'nakshatra ruled by Rāhu'],
      ['swati', 'nakshatra ruled by Rāhu'],
      ['shatabhisha', 'nakshatra ruled by Rāhu'],
    ],
    ketu: [
      ['rahu', 'counterpart *chāyā-graha* at the ascending lunar node'],
      ['kaal-sarp-dosha', 'classical dośa with all grahas between Rāhu and Ketu'],
      ['grahan-dosha', 'eclipse-register dośa involving Ketu-Rāhu affliction of luminaries'],
      ['vyaya-bhava', '12th bhāva, register of *mokṣa* where Ketu\'s classical register operates'],
      ['ashwini', 'nakshatra ruled by Ketu'],
      ['magha', 'nakshatra ruled by Ketu'],
      ['mula', 'nakshatra ruled by Ketu'],
    ],
  },

  rashi: {
    mesha: [
      ['mangala', 'rāśi-lord of Meṣa'],
      ['surya', 'classical exaltation in Meṣa'],
      ['shani', 'classical debilitation in Meṣa'],
      ['ashwini', 'nakshatra occupying 0°–13°20′ Meṣa'],
      ['bharani', 'nakshatra occupying 13°20′–26°40′ Meṣa'],
      ['krittika', 'nakshatra spanning Meṣa 26°40′ to Vṛṣabha 10° (first pāda in Meṣa)'],
    ],
    vrishabha: [
      ['shukra', 'rāśi-lord of Vṛṣabha'],
      ['chandra', 'classical exaltation in Vṛṣabha'],
      ['krittika', 'nakshatra spanning Meṣa-Vṛṣabha boundary (pādas 2-4 in Vṛṣabha)'],
      ['rohini', 'nakshatra occupying 10°–23°20′ Vṛṣabha'],
      ['mrigashira', 'nakshatra spanning Vṛṣabha-Mithuna boundary (first half in Vṛṣabha)'],
    ],
    mithuna: [
      ['budha', 'rāśi-lord of Mithuna'],
      ['mrigashira', 'nakshatra spanning Vṛṣabha-Mithuna boundary (pādas 3-4 in Mithuna)'],
      ['ardra', 'nakshatra occupying 6°40′–20° Mithuna'],
      ['punarvasu', 'nakshatra spanning Mithuna-Karka boundary (first three pādas in Mithuna)'],
    ],
    karka: [
      ['chandra', 'rāśi-lord of Karka'],
      ['brihaspati', 'classical exaltation in Karka'],
      ['mangala', 'classical debilitation in Karka'],
      ['punarvasu', 'nakshatra spanning Mithuna-Karka boundary (pāda 4 in Karka)'],
      ['pushya', 'nakshatra occupying 3°20′–16°40′ Karka'],
      ['ashlesha', 'nakshatra occupying 16°40′–30° Karka'],
    ],
    simha: [
      ['surya', 'rāśi-lord of Siṃha; mūla-trikoṇa in early Siṃha'],
      ['magha', 'nakshatra occupying 0°–13°20′ Siṃha'],
      ['purva-phalguni', 'nakshatra occupying 13°20′–26°40′ Siṃha'],
      ['uttara-phalguni', 'nakshatra spanning Siṃha-Kanyā boundary (first pāda in Siṃha)'],
    ],
    kanya: [
      ['budha', 'rāśi-lord of Kanyā; rare triple-dignity (own, exalted, mūla-trikoṇa)'],
      ['shukra', 'classical debilitation in Kanyā'],
      ['uttara-phalguni', 'nakshatra spanning Siṃha-Kanyā boundary (pādas 2-4 in Kanyā)'],
      ['hasta', 'nakshatra occupying 10°–23°20′ Kanyā'],
      ['chitra', 'nakshatra spanning Kanyā-Tulā boundary (first half in Kanyā)'],
    ],
    tula: [
      ['shukra', 'rāśi-lord of Tulā; mūla-trikoṇa in early Tulā'],
      ['shani', 'classical exaltation in Tulā'],
      ['surya', 'classical debilitation in Tulā'],
      ['chitra', 'nakshatra spanning Kanyā-Tulā boundary (pādas 3-4 in Tulā)'],
      ['swati', 'nakshatra occupying 6°40′–20° Tulā'],
      ['vishakha', 'nakshatra spanning Tulā-Vṛścika boundary (first three pādas in Tulā)'],
    ],
    vrishchika: [
      ['mangala', 'rāśi-lord of Vṛścika'],
      ['ketu', 'classical co-ruler of Vṛścika in some traditions'],
      ['chandra', 'classical debilitation in Vṛścika'],
      ['vishakha', 'nakshatra spanning Tulā-Vṛścika boundary (pāda 4 in Vṛścika)'],
      ['anuradha', 'nakshatra occupying 3°20′–16°40′ Vṛścika'],
      ['jyeshtha', 'nakshatra occupying 16°40′–30° Vṛścika'],
    ],
    dhanu: [
      ['brihaspati', 'rāśi-lord of Dhanu; mūla-trikoṇa in Dhanu'],
      ['mula', 'nakshatra occupying 0°–13°20′ Dhanu'],
      ['purva-ashadha', 'nakshatra occupying 13°20′–26°40′ Dhanu'],
      ['uttara-ashadha', 'nakshatra spanning Dhanu-Makara boundary (first pāda in Dhanu)'],
    ],
    makara: [
      ['shani', 'rāśi-lord of Makara'],
      ['mangala', 'classical exaltation in Makara'],
      ['brihaspati', 'classical debilitation in Makara'],
      ['uttara-ashadha', 'nakshatra spanning Dhanu-Makara boundary (pādas 2-4 in Makara)'],
      ['shravana', 'nakshatra occupying 10°–23°20′ Makara'],
      ['dhanishta', 'nakshatra spanning Makara-Kumbha boundary (first half in Makara)'],
    ],
    kumbha: [
      ['shani', 'rāśi-lord of Kumbha; mūla-trikoṇa in early Kumbha'],
      ['rahu', 'classical co-ruler of Kumbha in some traditions'],
      ['dhanishta', 'nakshatra spanning Makara-Kumbha boundary (pādas 3-4 in Kumbha)'],
      ['shatabhisha', 'nakshatra occupying 6°40′–20° Kumbha'],
      ['purva-bhadrapada', 'nakshatra spanning Kumbha-Meena boundary (first three pādas in Kumbha)'],
    ],
    meena: [
      ['brihaspati', 'rāśi-lord of Meena'],
      ['shukra', 'classical exaltation in Meena'],
      ['budha', 'classical debilitation in Meena'],
      ['purva-bhadrapada', 'nakshatra spanning Kumbha-Meena boundary (pāda 4 in Meena)'],
      ['uttara-bhadrapada', 'nakshatra occupying 3°20′–16°40′ Meena'],
      ['revati', 'nakshatra occupying 16°40′–30° Meena'],
    ],
  },

  nakshatra: (() => {
    // Generate nakshatra crossrefs from a compact definition
    // Each nakshatra: [rulingGraha, primaryRashi, secondaryRashi (if boundary)]
    const NAK = {
      ashwini: ['ketu', 'mesha'],
      bharani: ['shukra', 'mesha'],
      krittika: ['surya', 'mesha', 'vrishabha'],
      rohini: ['chandra', 'vrishabha'],
      mrigashira: ['mangala', 'vrishabha', 'mithuna'],
      ardra: ['rahu', 'mithuna'],
      punarvasu: ['brihaspati', 'mithuna', 'karka'],
      pushya: ['shani', 'karka'],
      ashlesha: ['budha', 'karka'],
      magha: ['ketu', 'simha'],
      'purva-phalguni': ['shukra', 'simha'],
      'uttara-phalguni': ['surya', 'simha', 'kanya'],
      hasta: ['chandra', 'kanya'],
      chitra: ['mangala', 'kanya', 'tula'],
      swati: ['rahu', 'tula'],
      vishakha: ['brihaspati', 'tula', 'vrishchika'],
      anuradha: ['shani', 'vrishchika'],
      jyeshtha: ['budha', 'vrishchika'],
      mula: ['ketu', 'dhanu'],
      'purva-ashadha': ['shukra', 'dhanu'],
      'uttara-ashadha': ['surya', 'dhanu', 'makara'],
      shravana: ['chandra', 'makara'],
      dhanishta: ['mangala', 'makara', 'kumbha'],
      shatabhisha: ['rahu', 'kumbha'],
      'purva-bhadrapada': ['brihaspati', 'kumbha', 'meena'],
      'uttara-bhadrapada': ['shani', 'meena'],
      revati: ['budha', 'meena'],
    };
    const result = {};
    for (const [slug, [lord, ...rashis]] of Object.entries(NAK)) {
      const crossrefs = [
        [lord, 'ruling graha in the Vimśottarī scheme'],
      ];
      for (const r of rashis) {
        crossrefs.push([r, 'rāśi occupied (fully or partially) by this nakshatra']);
      }
      crossrefs.push(['nadi-koota', 'Aṣṭa-kūṭa compatibility via nāḍī classification']);
      crossrefs.push(['yoni-koota', 'Aṣṭa-kūṭa compatibility via yoni classification']);
      crossrefs.push(['gana-koota', 'Aṣṭa-kūṭa compatibility via gaṇa classification']);
      crossrefs.push(['tara-koota', 'Aṣṭa-kūṭa compatibility via nakshatra Tārā cycle']);
      result[slug] = crossrefs;
    }
    return result;
  })(),

  tithi: (() => {
    // Each tithi cross-references its devatā-associated grahas/concepts and pakṣa-partners
    const common = [
      ['purnima', 'classical full-moon tithi, completion of Śukla-pakṣa'],
      ['amavasya', 'classical new-moon tithi, close of Kṛṣṇa-pakṣa'],
    ];
    const result = {
      pratipada: [
        ['krittika', 'nakshatra sharing the devatā Agni with Pratipadā'],
        ['chaturthi', 'Caturthī observances pair with Pratipadā in classical vrata calendar'],
        ['purnima', 'classical Śukla-Pratipadā opens the month; Pūrṇimā closes it'],
      ],
      dwitiya: [
        ['saptami', 'Sūrya-ruled tithi'],
        ['dwadashi', 'Viṣṇu-ruled tithi'],
        ['purnima', 'classical completion register'],
      ],
      tritiya: [
        ['shukra', 'classical Śukra-kāraka for marital register (Gaurī-related)'],
        ['navami', 'Durgā-related tithi'],
        ['chaturthi', 'Gaṇeśa-invocation often precedes Tṛtīyā observances'],
      ],
      chaturthi: [
        ['pratipada', 'pakṣa-opening tithi invoking Agni'],
        ['navami', 'Riktā-class sibling of Caturthī'],
        ['chaturdashi', 'Riktā-class sibling of Caturthī'],
      ],
      panchami: [
        ['ashwini', 'nakshatra associated with Nāga-register healing'],
        ['shashthi', 'pair tithi in classical vrata calendar'],
      ],
      shashthi: [
        ['mangala', 'Kārttikeya\'s father-register; Mangala-association in classical reading'],
        ['panchami', 'pair tithi in classical vrata calendar'],
      ],
      saptami: [
        ['surya', 'presiding devatā Sūrya'],
        ['simha', 'Sūrya\'s rāśi'],
        ['uttara-ashadha', 'Sūrya-ruled nakshatra'],
      ],
      ashtami: [
        ['navami', 'Durgā-register tithi'],
        ['chaturdashi', 'Rudra-Kālī register tithi'],
      ],
      navami: [
        ['ashtami', 'Durgā-register pair'],
        ['dashami', 'victory-register tithi'],
        ['chaturthi', 'Riktā-class sibling'],
      ],
      dashami: [
        ['navami', 'victory-register pair; Durgā-Rāma sequence'],
        ['dwadashi', 'classical Viṣṇu-devotion tithi'],
      ],
      ekadashi: [
        ['dwadashi', 'fast-breaking tithi paired with Ekādaśī'],
        ['brihaspati', 'Viṣvedevas association via Guru-dharmic register'],
      ],
      dwadashi: [
        ['ekadashi', 'fasting tithi preceding Dvādaśī'],
        ['trayodashi', 'following tithi in Hari-Hara sequence'],
      ],
      trayodashi: [
        ['shani', 'classical Śani-Pradoṣa tithi register'],
        ['chaturdashi', 'Śiva-register pair tithi'],
      ],
      chaturdashi: [
        ['trayodashi', 'Śiva-register pair'],
        ['amavasya', 'Pitṛ-register adjacent tithi'],
      ],
      purnima: [
        ['chandra', 'classical presiding graha of the full moon'],
        ['amavasya', 'counterpart tithi — new moon closing Kṛṣṇa-pakṣa'],
        ['pratipada', 'opening tithi of Śukla-pakṣa following Amāvāsyā'],
      ],
      amavasya: [
        ['purnima', 'counterpart tithi — full moon closing Śukla-pakṣa'],
        ['pitra-dosha', 'Pitṛ-register observance register'],
        ['chaturdashi', 'preceding tithi in classical Kṛṣṇa-pakṣa sequence'],
      ],
    };
    return result;
  })(),

  bhava: {
    'tanu-bhava': [
      ['surya', 'natural kāraka of the 1st bhāva'],
      ['mesha', 'rāśi corresponding to 1st bhāva in the kāla-puruṣa'],
      ['putra-bhava', 'trikoṇa partner (5th bhāva)'],
      ['dharma-bhava', 'trikoṇa partner (9th bhāva)'],
      ['raj-yoga', 'classical kendra-trikoṇa lord yoga involving Lagna-lord'],
    ],
    'dhana-bhava': [
      ['brihaspati', 'classical *dhana-kāraka*'],
      ['vrishabha', 'rāśi corresponding to 2nd bhāva in kāla-puruṣa'],
      ['labha-bhava', '11th bhāva, paired wealth-register'],
      ['dhana-yoga', 'classical yoga-class from 2nd/11th lord combinations'],
    ],
    'sahaja-bhava': [
      ['mangala', 'classical *sahaja-kāraka*'],
      ['mithuna', 'rāśi corresponding to 3rd bhāva in kāla-puruṣa'],
      ['drekkana-d3', 'D-3 varga reading the sahaja register'],
    ],
    'sukha-bhava': [
      ['chandra', 'classical *mātṛ-kāraka* and general sukha-kāraka'],
      ['karka', 'rāśi corresponding to 4th bhāva in kāla-puruṣa'],
      ['chaturthamsha-d4', 'D-4 varga reading the sukha register'],
    ],
    'putra-bhava': [
      ['brihaspati', 'classical *putra-kāraka*'],
      ['simha', 'rāśi corresponding to 5th bhāva in kāla-puruṣa'],
      ['saptamsha-d7', 'D-7 varga reading the progeny register'],
      ['tanu-bhava', 'trikoṇa partner (1st bhāva)'],
      ['dharma-bhava', 'trikoṇa partner (9th bhāva)'],
    ],
    'ripu-bhava': [
      ['shani', 'classical *roga-kāraka*'],
      ['kanya', 'rāśi corresponding to 6th bhāva in kāla-puruṣa'],
      ['ayush-bhava', 'dusthāna companion (8th bhāva)'],
      ['vyaya-bhava', 'dusthāna companion (12th bhāva)'],
      ['vipareeta-raja-yoga', 'classical yoga from dusthāna-lord interaction'],
    ],
    'kalatra-bhava': [
      ['shukra', 'classical *kalatra-kāraka*'],
      ['tula', 'rāśi corresponding to 7th bhāva in kāla-puruṣa'],
      ['navamsha-d9', 'D-9 varga reading the spouse register'],
      ['mangal-dosha', 'dośa involving Mangala in the 7th bhāva'],
    ],
    'ayush-bhava': [
      ['shani', 'classical *āyus-kāraka*'],
      ['vrishchika', 'rāśi corresponding to 8th bhāva in kāla-puruṣa'],
      ['ripu-bhava', 'dusthāna companion (6th bhāva)'],
      ['vyaya-bhava', 'dusthāna companion (12th bhāva)'],
      ['vipareeta-raja-yoga', 'classical dusthāna-reversal yoga'],
    ],
    'dharma-bhava': [
      ['brihaspati', 'classical *dharma-kāraka*'],
      ['surya', 'classical *pitṛ-kāraka* (father register)'],
      ['dhanu', 'rāśi corresponding to 9th bhāva in kāla-puruṣa'],
      ['tanu-bhava', 'trikoṇa partner (1st bhāva)'],
      ['putra-bhava', 'trikoṇa partner (5th bhāva)'],
    ],
    'karma-bhava': [
      ['shani', 'classical *karma-kāraka*'],
      ['surya', 'classical *rājya-kāraka* (authority register)'],
      ['makara', 'rāśi corresponding to 10th bhāva in kāla-puruṣa'],
      ['dashamsha-d10', 'D-10 varga reading the karma register'],
    ],
    'labha-bhava': [
      ['brihaspati', 'classical general *lābha-kāraka*'],
      ['kumbha', 'rāśi corresponding to 11th bhāva in kāla-puruṣa'],
      ['dhana-bhava', '2nd bhāva, paired wealth register'],
      ['dhana-yoga', 'yoga-class involving 2nd/11th lord combinations'],
    ],
    'vyaya-bhava': [
      ['shani', 'classical loss-register graha'],
      ['ketu', 'classical *mokṣa-kāraka*'],
      ['meena', 'rāśi corresponding to 12th bhāva in kāla-puruṣa'],
      ['ripu-bhava', 'dusthāna companion (6th bhāva)'],
      ['ayush-bhava', 'dusthāna companion (8th bhāva)'],
    ],
  },

  dosha: {
    'mangal-dosha': [
      ['mangala', 'graha forming the dośa'],
      ['kalatra-bhava', '7th bhāva, primary marital register'],
      ['chandra', 'secondary reference-point for dośa calculation'],
      ['shukra', 'secondary reference-point (*kalatra-kāraka*)'],
      ['nadi-koota', 'Aṣṭa-kūṭa compatibility alongside marital assessment'],
    ],
    'kaal-sarp-dosha': [
      ['rahu', 'ascending node; one end of the graha-enclosure'],
      ['ketu', 'descending node; other end of the graha-enclosure'],
      ['grahan-dosha', 'related classical node-register dośa'],
    ],
    'pitra-dosha': [
      ['surya', 'classical *pitṛ-kāraka*'],
      ['rahu', 'classical node whose affliction of Sūrya figures in Pitṛ-dośa'],
      ['dharma-bhava', '9th bhāva, classical father-register'],
      ['dwadashamsha-d12', 'D-12 varga reading the parent register'],
      ['amavasya', 'classical ancestral-observance tithi'],
    ],
    'grahan-dosha': [
      ['surya', 'luminary afflicted in solar-eclipse register'],
      ['chandra', 'luminary afflicted in lunar-eclipse register'],
      ['rahu', 'node producing eclipse affliction'],
      ['ketu', 'node producing eclipse affliction'],
    ],
    'nadi-dosha': [
      ['nadi-koota', 'Aṣṭa-kūṭa kūṭa where same-nāḍī matching produces this dośa'],
      ['ashwini', 'ādya-nāḍī nakshatra'],
      ['bharani', 'madhya-nāḍī nakshatra'],
      ['krittika', 'antya-nāḍī nakshatra'],
    ],
    'sade-sati': [
      ['shani', 'graha whose transit produces Sāḍe-Sātī'],
      ['chandra', 'reference-point rāśi for the 7.5-year transit'],
      ['sasa-yoga', 'Śani Pañca-Mahāpuruṣa-yoga informing Śani-strength reading'],
      ['vrishchika', 'rāśi where Jyeṣṭhā Chandra falls'],
    ],
  },

  yoga: {
    'raj-yoga': [
      ['pancha-mahapurusha-yoga', 'individual-graha Rāja-yoga set'],
      ['neecha-bhanga-raja-yoga', 'debilitation-cancellation Rāja-yoga'],
      ['dhana-yoga', 'wealth-register analog'],
      ['vipareeta-raja-yoga', 'dusthāna-reversal analog'],
      ['tanu-bhava', '1st bhāva — Lagna-lord Rāja-yoga'],
      ['putra-bhava', '5th bhāva — trikoṇa contributor'],
      ['dharma-bhava', '9th bhāva — trikoṇa contributor'],
      ['karma-bhava', '10th bhāva — kendra contributor'],
    ],
    'dhana-yoga': [
      ['raj-yoga', 'structural analog in the authority register'],
      ['brihaspati', 'classical *dhana-kāraka*'],
      ['dhana-bhava', '2nd bhāva — primary wealth register'],
      ['labha-bhava', '11th bhāva — gains register'],
      ['putra-bhava', '5th bhāva — pūrva-puṇya wealth register'],
      ['dharma-bhava', '9th bhāva — dharmic wealth register'],
    ],
    'gaja-kesari-yoga': [
      ['brihaspati', 'Guru whose kendra-from-Chandra placement forms the yoga'],
      ['chandra', 'reference-point for the kendra measurement'],
      ['hamsa-yoga', 'Guru Pañca-Mahāpuruṣa-yoga (distinct formation)'],
      ['raj-yoga', 'Rāja-yoga-class to which Gaja-Kesarī belongs'],
    ],
    'pancha-mahapurusha-yoga': [
      ['ruchaka-yoga', 'Mangala PMP'],
      ['bhadra-yoga', 'Budha PMP'],
      ['hamsa-yoga', 'Bṛhaspati PMP'],
      ['malavya-yoga', 'Śukra PMP'],
      ['sasa-yoga', 'Śani PMP'],
      ['raj-yoga', 'Rāja-yoga-class to which PMP yogas belong'],
      ['gaja-kesari-yoga', 'parallel Chandra-Guru kendra yoga'],
    ],
    'ruchaka-yoga': [
      ['mangala', 'graha forming the yoga'],
      ['pancha-mahapurusha-yoga', 'umbrella category'],
      ['mesha', 'own rāśi of Mangala'],
      ['vrishchika', 'own rāśi of Mangala'],
      ['makara', 'exaltation rāśi of Mangala'],
      ['karma-bhava', '10th bhāva — strongest kendra for Ruchaka'],
      ['mangal-dosha', 'cross-reference for Mangala-related readings'],
    ],
    'bhadra-yoga': [
      ['budha', 'graha forming the yoga'],
      ['pancha-mahapurusha-yoga', 'umbrella category'],
      ['mithuna', 'own rāśi of Budha'],
      ['kanya', 'own and exaltation rāśi of Budha'],
      ['tanu-bhava', '1st bhāva — strongest kendra for Bhadra'],
      ['karma-bhava', '10th bhāva — secondary strong kendra'],
    ],
    'hamsa-yoga': [
      ['brihaspati', 'graha forming the yoga'],
      ['pancha-mahapurusha-yoga', 'umbrella category'],
      ['dhanu', 'own and mūla-trikoṇa rāśi of Guru'],
      ['meena', 'own rāśi of Guru'],
      ['karka', 'exaltation rāśi of Guru'],
      ['tanu-bhava', '1st bhāva — strongest kendra for Haṃsa'],
      ['gaja-kesari-yoga', 'parallel Chandra-Guru yoga'],
    ],
    'malavya-yoga': [
      ['shukra', 'graha forming the yoga'],
      ['pancha-mahapurusha-yoga', 'umbrella category'],
      ['vrishabha', 'own rāśi of Śukra'],
      ['tula', 'own and mūla-trikoṇa rāśi of Śukra'],
      ['meena', 'exaltation rāśi of Śukra'],
      ['sukha-bhava', '4th bhāva — strongest kendra for Mālavya'],
      ['kalatra-bhava', '7th bhāva — relationship register'],
    ],
    'sasa-yoga': [
      ['shani', 'graha forming the yoga'],
      ['pancha-mahapurusha-yoga', 'umbrella category'],
      ['makara', 'own rāśi of Śani'],
      ['kumbha', 'own and mūla-trikoṇa rāśi of Śani'],
      ['tula', 'exaltation rāśi of Śani'],
      ['kalatra-bhava', '7th bhāva — strongest kendra for Śaśa'],
      ['karma-bhava', '10th bhāva — secondary strong kendra'],
      ['sade-sati', 'Śani-transit phenomenon'],
    ],
    'neecha-bhanga-raja-yoga': [
      ['raj-yoga', 'Rāja-yoga-class to which Nīca-bhaṅga belongs when active'],
      ['vipareeta-raja-yoga', 'other major reversal-based yoga'],
    ],
    'vipareeta-raja-yoga': [
      ['ripu-bhava', '6th bhāva — locus of Harṣa variant'],
      ['ayush-bhava', '8th bhāva — locus of Sarala variant'],
      ['vyaya-bhava', '12th bhāva — locus of Vimala variant'],
      ['raj-yoga', 'structural analog in the authority register'],
      ['neecha-bhanga-raja-yoga', 'other major reversal-based yoga'],
    ],
  },

  kuta: {
    'varna-koota': [
      ['vashya-koota', 'Aṣṭa-kūṭa 2'],
      ['tara-koota', 'Aṣṭa-kūṭa 3'],
      ['yoni-koota', 'Aṣṭa-kūṭa 4'],
      ['graha-maitri-koota', 'Aṣṭa-kūṭa 5'],
      ['gana-koota', 'Aṣṭa-kūṭa 6'],
      ['bhakoot-koota', 'Aṣṭa-kūṭa 7'],
      ['nadi-koota', 'Aṣṭa-kūṭa 8'],
    ],
    'vashya-koota': [
      ['varna-koota', 'Aṣṭa-kūṭa 1'],
      ['tara-koota', 'Aṣṭa-kūṭa 3'],
      ['yoni-koota', 'Aṣṭa-kūṭa 4'],
      ['graha-maitri-koota', 'Aṣṭa-kūṭa 5'],
      ['gana-koota', 'Aṣṭa-kūṭa 6'],
      ['bhakoot-koota', 'Aṣṭa-kūṭa 7'],
      ['nadi-koota', 'Aṣṭa-kūṭa 8'],
    ],
    'tara-koota': [
      ['varna-koota', 'Aṣṭa-kūṭa 1'],
      ['vashya-koota', 'Aṣṭa-kūṭa 2'],
      ['yoni-koota', 'Aṣṭa-kūṭa 4'],
      ['graha-maitri-koota', 'Aṣṭa-kūṭa 5'],
      ['gana-koota', 'Aṣṭa-kūṭa 6'],
      ['bhakoot-koota', 'Aṣṭa-kūṭa 7'],
      ['nadi-koota', 'Aṣṭa-kūṭa 8'],
    ],
    'yoni-koota': [
      ['varna-koota', 'Aṣṭa-kūṭa 1'],
      ['vashya-koota', 'Aṣṭa-kūṭa 2'],
      ['tara-koota', 'Aṣṭa-kūṭa 3'],
      ['graha-maitri-koota', 'Aṣṭa-kūṭa 5'],
      ['gana-koota', 'Aṣṭa-kūṭa 6'],
      ['bhakoot-koota', 'Aṣṭa-kūṭa 7'],
      ['nadi-koota', 'Aṣṭa-kūṭa 8'],
    ],
    'graha-maitri-koota': [
      ['varna-koota', 'Aṣṭa-kūṭa 1'],
      ['vashya-koota', 'Aṣṭa-kūṭa 2'],
      ['tara-koota', 'Aṣṭa-kūṭa 3'],
      ['yoni-koota', 'Aṣṭa-kūṭa 4'],
      ['gana-koota', 'Aṣṭa-kūṭa 6'],
      ['bhakoot-koota', 'Aṣṭa-kūṭa 7'],
      ['nadi-koota', 'Aṣṭa-kūṭa 8'],
    ],
    'gana-koota': [
      ['varna-koota', 'Aṣṭa-kūṭa 1'],
      ['vashya-koota', 'Aṣṭa-kūṭa 2'],
      ['tara-koota', 'Aṣṭa-kūṭa 3'],
      ['yoni-koota', 'Aṣṭa-kūṭa 4'],
      ['graha-maitri-koota', 'Aṣṭa-kūṭa 5'],
      ['bhakoot-koota', 'Aṣṭa-kūṭa 7'],
      ['nadi-koota', 'Aṣṭa-kūṭa 8'],
    ],
    'bhakoot-koota': [
      ['varna-koota', 'Aṣṭa-kūṭa 1'],
      ['vashya-koota', 'Aṣṭa-kūṭa 2'],
      ['tara-koota', 'Aṣṭa-kūṭa 3'],
      ['yoni-koota', 'Aṣṭa-kūṭa 4'],
      ['graha-maitri-koota', 'Aṣṭa-kūṭa 5 — feeds Bhakūṭa cancellation rules'],
      ['gana-koota', 'Aṣṭa-kūṭa 6'],
      ['nadi-koota', 'Aṣṭa-kūṭa 8'],
    ],
    'nadi-koota': [
      ['varna-koota', 'Aṣṭa-kūṭa 1'],
      ['vashya-koota', 'Aṣṭa-kūṭa 2'],
      ['tara-koota', 'Aṣṭa-kūṭa 3'],
      ['yoni-koota', 'Aṣṭa-kūṭa 4'],
      ['graha-maitri-koota', 'Aṣṭa-kūṭa 5'],
      ['gana-koota', 'Aṣṭa-kūṭa 6'],
      ['bhakoot-koota', 'Aṣṭa-kūṭa 7'],
      ['nadi-dosha', 'same-nāḍī matching produces this dośa'],
    ],
  },

  varga: {
    'rashi-d1': [
      ['hora-d2', 'D-2 — wealth register'],
      ['drekkana-d3', 'D-3 — siblings register'],
      ['chaturthamsha-d4', 'D-4 — residence register'],
      ['saptamsha-d7', 'D-7 — progeny register'],
      ['navamsha-d9', 'D-9 — spouse / dharma register'],
      ['dashamsha-d10', 'D-10 — career register'],
      ['dwadashamsha-d12', 'D-12 — parents register'],
      ['shodashamsha-d16', 'D-16 — vehicles / comforts'],
      ['vimshamsha-d20', 'D-20 — spiritual practice'],
      ['chaturvimshamsha-d24', 'D-24 — learning register'],
      ['saptavimshamsha-d27', 'D-27 — strengths register'],
      ['trimshamsha-d30', 'D-30 — miseries register'],
      ['khavedamsha-d40', 'D-40 — general auspiciousness'],
      ['akshavedamsha-d45', 'D-45 — all matters general'],
      ['shashtiamsha-d60', 'D-60 — fine detail / past karma'],
    ],
    'hora-d2': [
      ['rashi-d1', 'primary chart'],
      ['surya', 'presides over one of the two horās'],
      ['chandra', 'presides over the other horā'],
      ['dhana-bhava', '2nd bhāva — underlying dhana register'],
      ['labha-bhava', '11th bhāva — paired lābha register'],
      ['dhana-yoga', 'wealth-yoga class'],
    ],
    'drekkana-d3': [
      ['rashi-d1', 'primary chart'],
      ['sahaja-bhava', '3rd bhāva — sahaja register'],
      ['mangala', 'classical *sahaja-kāraka*'],
    ],
    'chaturthamsha-d4': [
      ['rashi-d1', 'primary chart'],
      ['sukha-bhava', '4th bhāva — sukha register'],
      ['chandra', 'classical *mātṛ-kāraka* / sukha-kāraka'],
      ['dashamsha-d10', 'paired sukha-karma reading'],
    ],
    'saptamsha-d7': [
      ['rashi-d1', 'primary chart'],
      ['putra-bhava', '5th bhāva — progeny register'],
      ['brihaspati', 'classical *putra-kāraka*'],
    ],
    'navamsha-d9': [
      ['rashi-d1', 'primary chart'],
      ['kalatra-bhava', '7th bhāva — kalatra register'],
      ['dharma-bhava', '9th bhāva — dharma-bhāgya register'],
      ['shukra', 'classical *kalatra-kāraka*'],
      ['neecha-bhanga-raja-yoga', 'classical debilitation-cancellation yoga involves D-9'],
    ],
    'dashamsha-d10': [
      ['rashi-d1', 'primary chart'],
      ['karma-bhava', '10th bhāva — karma register'],
      ['surya', '*rājya-kāraka* for authority register'],
      ['shani', '*karma-kāraka* for work register'],
      ['budha', '*vyavahāra-kāraka* for transaction register'],
      ['chaturthamsha-d4', 'paired sukha-karma reading'],
    ],
    'dwadashamsha-d12': [
      ['rashi-d1', 'primary chart'],
      ['sukha-bhava', '4th bhāva — mother register'],
      ['dharma-bhava', '9th bhāva — father register'],
      ['surya', 'classical *pitṛ-kāraka*'],
      ['chandra', 'classical *mātṛ-kāraka*'],
      ['pitra-dosha', 'ancestral-register dośa'],
    ],
    'shodashamsha-d16': [
      ['rashi-d1', 'primary chart'],
      ['sukha-bhava', '4th bhāva — underlying sukha register'],
      ['chaturthamsha-d4', 'paired residence-comfort reading'],
      ['shukra', 'classical *bhoga-kāraka*'],
      ['mangala', 'classical *vāhana-kāraka* in some classical readings'],
    ],
    'vimshamsha-d20': [
      ['rashi-d1', 'primary chart'],
      ['dharma-bhava', '9th bhāva — dharma register'],
      ['vyaya-bhava', '12th bhāva — mokṣa register'],
      ['brihaspati', 'classical *dharma-kāraka*'],
      ['ketu', 'classical *mokṣa-kāraka*'],
      ['chaturvimshamsha-d24', 'paired learning-register reading'],
    ],
    'chaturvimshamsha-d24': [
      ['rashi-d1', 'primary chart'],
      ['dhana-bhava', '2nd bhāva — primary learning register'],
      ['sukha-bhava', '4th bhāva — formative education'],
      ['putra-bhava', '5th bhāva — higher learning'],
      ['dharma-bhava', '9th bhāva — scholarly dharma register'],
      ['budha', 'classical *vidyā-kāraka*'],
      ['brihaspati', 'classical *jñāna-kāraka*'],
      ['vimshamsha-d20', 'paired upāsanā-vidyā reading'],
    ],
    'saptavimshamsha-d27': [
      ['rashi-d1', 'primary chart'],
      ['tanu-bhava', '1st bhāva — vitality register'],
      ['ripu-bhava', '6th bhāva — health register'],
      ['ayush-bhava', '8th bhāva — longevity register'],
      ['shashtiamsha-d60', 'paired fine-strength reading'],
    ],
    'trimshamsha-d30': [
      ['rashi-d1', 'primary chart'],
      ['ripu-bhava', '6th bhāva — part of dusthāna triad'],
      ['ayush-bhava', '8th bhāva — part of dusthāna triad'],
      ['vyaya-bhava', '12th bhāva — part of dusthāna triad'],
      ['mangala', 'one of the five tārā-grahas owning D-30 divisions'],
      ['shani', 'one of the five tārā-grahas owning D-30 divisions'],
      ['brihaspati', 'one of the five tārā-grahas owning D-30 divisions'],
      ['budha', 'one of the five tārā-grahas owning D-30 divisions'],
      ['shukra', 'one of the five tārā-grahas owning D-30 divisions'],
      ['vipareeta-raja-yoga', 'classical reversal-of-affliction framework'],
    ],
    'khavedamsha-d40': [
      ['rashi-d1', 'primary chart'],
      ['chandra', 'classical *mātṛ-kāraka* for maternal-lineage expansion'],
      ['dwadashamsha-d12', 'paired parent-register reading'],
      ['akshavedamsha-d45', 'paired classical general-register'],
    ],
    'akshavedamsha-d45': [
      ['rashi-d1', 'primary chart'],
      ['surya', 'classical *pitṛ-kāraka* for paternal-lineage expansion'],
      ['dwadashamsha-d12', 'paired parent-register reading'],
      ['khavedamsha-d40', 'paired classical general-register'],
      ['shashtiamsha-d60', 'following varga in Ṣoḍaśa order'],
    ],
    'shashtiamsha-d60': [
      ['rashi-d1', 'primary chart'],
      ['ayush-bhava', '8th bhāva — *pūrva-janma-karma* register'],
      ['vyaya-bhava', '12th bhāva — mokṣa and completion register'],
      ['saptavimshamsha-d27', 'paired strength register'],
    ],
  },
};

function emitRelatedConcepts(slug, crossrefs) {
  const lines = ['## Related Concepts', ''];
  for (const [target, note] of crossrefs) {
    lines.push(`- ${link(target)} — ${note}`);
  }
  return lines.join('\n') + '\n';
}

function processFile(filepath, slug) {
  const crossrefs = CROSSREFS[category]?.[slug];
  if (!crossrefs) throw new Error(`No crossref mapping for ${category}/${slug}`);

  const raw = fs.readFileSync(filepath, 'utf8');
  // Find "## Related concepts" or "## Related Concepts" and replace from there to EOF
  const m = raw.match(/^([\s\S]*?)(## Related [cC]oncepts[\s\S]*)$/);
  if (!m) throw new Error(`No Related section in ${filepath}`);

  const out = m[1] + emitRelatedConcepts(slug, crossrefs);
  fs.writeFileSync(filepath, out);
}

// Directory resolution per category
const DIRS = {
  graha: { dir: 'content/concepts/drafts', slugs: ['surya','chandra','mangala','budha','brihaspati','shukra','shani','rahu','ketu'] },
  rashi: { dir: 'content/concepts/drafts', slugs: ['mesha','vrishabha','mithuna','karka','simha','kanya','tula','vrishchika','dhanu','makara','kumbha','meena'] },
  nakshatra: { dir: 'content/concepts/drafts/nakshatra', slugs: null },
  tithi: { dir: 'content/concepts/drafts/tithi', slugs: null },
  bhava: { dir: 'content/concepts/drafts/bhava', slugs: null },
  dosha: { dir: 'content/concepts/drafts/dosha', slugs: null },
  yoga: { dir: 'content/concepts/drafts/yoga', slugs: null },
  kuta: { dir: 'content/concepts/drafts/koota', slugs: null },
  varga: { dir: 'content/concepts/drafts/varga', slugs: null },
};

const config = DIRS[category];
if (!config) {
  console.error(`Unknown category: ${category}`);
  process.exit(1);
}

const slugs = config.slugs || fs.readdirSync(config.dir)
  .filter(f => f.endsWith('.md'))
  .map(f => f.replace(/\.md$/, ''));

let count = 0;
for (const slug of slugs) {
  const filepath = config.slugs
    ? path.join(config.dir, slug + '.md')
    : path.join(config.dir, slug + '.md');
  processFile(filepath, slug);
  count++;
}
console.log(`Processed ${count} ${category} drafts`);
