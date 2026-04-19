#!/usr/bin/env node
/**
 * One-off migration: normalize frontmatter across all 138 concept drafts.
 * - Adds universal fields (devanagari, wikidata, description) where missing
 * - Normalizes category: koota → kuta per route-wiring spec
 * - Changes status to 'reviewed'
 * - Preserves category-specific fields
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'content/concepts/drafts';

// Devanagari for grahas and rashis (not in their existing frontmatter)
const DEVANAGARI = {
  surya: 'सूर्य', chandra: 'चन्द्र', mangala: 'मङ्गल', budha: 'बुध',
  brihaspati: 'बृहस्पति', shukra: 'शुक्र', shani: 'शनि', rahu: 'राहु', ketu: 'केतु',
  mesha: 'मेष', vrishabha: 'वृषभ', mithuna: 'मिथुन', karka: 'कर्कट',
  simha: 'सिंह', kanya: 'कन्या', tula: 'तुला', vrishchika: 'वृश्चिक',
  dhanu: 'धनुस्', makara: 'मकर', kumbha: 'कुम्भ', meena: 'मीन',
};

const DESCRIPTIONS = {
  // Grahas (9)
  surya: 'The first of the nine grahas; classical ātma-kāraka (significator of the soul), presiding over identity, authority, and vitality.',
  chandra: 'The second graha; classical mātṛ-kāraka (significator of the mother), presiding over manas — the feeling-mind and emotional register.',
  mangala: 'The third graha; classical bhrātṛ-kāraka (significator of siblings), presiding over courage, contest, and protective action.',
  budha: 'The fourth graha; classical vidyā-kāraka (significator of learning), presiding over intellect, speech, and mercantile register.',
  brihaspati: 'The fifth graha and classical guru; presiding force of wisdom, dharma, and the putra-kāraka significator of progeny.',
  shukra: 'The sixth graha and classical kalatra-kāraka (significator of spouse); presiding over refinement, aesthetics, marriage, and wealth.',
  shani: 'The seventh graha and classical karma-kāraka (significator of work); presiding over discipline, endurance, and long-duration responsibility.',
  rahu: 'The chāyā-graha of the ascending lunar node; classical register of boundary-crossing ambition and outward pull of desire.',
  ketu: 'The chāyā-graha of the descending lunar node; classical mokṣa-kāraka, register of renunciation, insight, and liberation.',

  // Rashis (12)
  mesha: 'The first rāśi (0°–30°), ruled by Mangala; sidereal Ram, fire-element, classical movable sign of initiating action.',
  vrishabha: 'The second rāśi (30°–60°), ruled by Śukra; sidereal Bull, earth-element, classical fixed sign of accumulation and enjoyment.',
  mithuna: 'The third rāśi (60°–90°), ruled by Budha; sidereal Twins, air-element, classical dual sign of communication and mental agility.',
  karka: 'The fourth rāśi (90°–120°), ruled by Chandra; sidereal Crab, water-element, classical movable sign of emotional depth and maternal register.',
  simha: 'The fifth rāśi (120°–150°), ruled by Sūrya; sidereal Lion, fire-element, classical fixed sign of royal bearing and creative authority.',
  kanya: 'The sixth rāśi (150°–180°), ruled by Budha; sidereal Maiden, earth-element, classical dual sign of service and analytical precision.',
  tula: 'The seventh rāśi (180°–210°), ruled by Śukra; sidereal Scales, air-element, classical movable sign of partnership and equity.',
  vrishchika: 'The eighth rāśi (210°–240°), ruled by Mangala; sidereal Scorpion, water-element, classical fixed sign of depth and transformation.',
  dhanu: 'The ninth rāśi (240°–270°), ruled by Guru; sidereal Archer, fire-element, classical dual sign of dharma and long-range aspiration.',
  makara: 'The tenth rāśi (270°–300°), ruled by Śani; sidereal Sea-Goat, earth-element, classical movable sign of endurance and authority.',
  kumbha: 'The eleventh rāśi (300°–330°), ruled by Śani; sidereal Water-Bearer, air-element, classical fixed sign of collective and humanitarian register.',
  meena: 'The twelfth rāśi (330°–360°), ruled by Guru; sidereal Fishes, water-element, classical dual sign of compassion and mokṣa-register.',

  // Nakshatras (27)
  ashwini: 'The first nakshatra (0°–13°20′ Meṣa), ruled by Ketu; presided by the Aśvinī Kumāras, classical register of initiating-speed and healing.',
  bharani: 'The second nakshatra (13°20′–26°40′ Meṣa), ruled by Śukra; presided by Yama, classical register of transformation and restraint.',
  krittika: 'The third nakshatra (26°40′ Meṣa–10° Vṛṣabha), ruled by Sūrya; presided by Agni, classical register of sharpness and purification.',
  rohini: 'The fourth nakshatra (10°–23°20′ Vṛṣabha), ruled by Chandra; presided by Prajāpati, classical register of growth, fertility, and beauty.',
  mrigashira: 'The fifth nakshatra (23°20′ Vṛṣabha–6°40′ Mithuna), ruled by Mangala; presided by Soma, classical register of searching and gentle pursuit.',
  ardra: 'The sixth nakshatra (6°40′–20° Mithuna), ruled by Rāhu; presided by Rudra, classical register of storm-register and transformative intensity.',
  punarvasu: 'The seventh nakshatra (20° Mithuna–3°20′ Karka), ruled by Guru; presided by Aditi, classical register of renewal and return.',
  pushya: 'The eighth nakshatra (3°20′–16°40′ Karka), ruled by Śani; presided by Bṛhaspati, classical register of nourishment and dharmic protection.',
  ashlesha: 'The ninth nakshatra (16°40′–30° Karka), ruled by Budha; presided by the Nāgas, classical register of serpentine wisdom and boundary-crossing.',
  magha: 'The tenth nakshatra (0°–13°20′ Siṃha), ruled by Ketu; presided by the Pitṛs, classical register of ancestral authority and lineage.',
  'purva-phalguni': 'The eleventh nakshatra (13°20′–26°40′ Siṃha), ruled by Śukra; presided by Bhaga, classical register of enjoyment and prosperity.',
  'uttara-phalguni': 'The twelfth nakshatra (26°40′ Siṃha–10° Kanyā), ruled by Sūrya; presided by Aryaman, classical register of patronage and friendship.',
  hasta: 'The thirteenth nakshatra (10°–23°20′ Kanyā), ruled by Chandra; presided by Savitṛ, classical register of skilled hand-work and dexterity.',
  chitra: 'The fourteenth nakshatra (23°20′ Kanyā–6°40′ Tulā), ruled by Mangala; presided by Tvaṣṭṛ, classical register of beautiful crafted form.',
  swati: 'The fifteenth nakshatra (6°40′–20° Tulā), ruled by Rāhu; presided by Vāyu, classical register of independent movement and self-directed growth.',
  vishakha: 'The sixteenth nakshatra (20° Tulā–3°20′ Vṛścika), ruled by Guru; presided by Indra-Agni, classical register of focused aspiration.',
  anuradha: 'The seventeenth nakshatra (3°20′–16°40′ Vṛścika), ruled by Śani; presided by Mitra, classical register of sustained friendship and devotion.',
  jyeshtha: 'The eighteenth nakshatra (16°40′–30° Vṛścika), ruled by Budha; presided by Indra, classical register of eldership and protective authority.',
  mula: 'The nineteenth nakshatra (0°–13°20′ Dhanu), ruled by Ketu; presided by Nirṛti, classical register of root-seeking and deep inquiry.',
  'purva-ashadha': 'The twentieth nakshatra (13°20′–26°40′ Dhanu), ruled by Śukra; presided by Āpas, classical register of invincible forward motion.',
  'uttara-ashadha': 'The twenty-first nakshatra (26°40′ Dhanu–10° Makara), ruled by Sūrya; presided by the Viśvedevas, classical register of enduring victory.',
  shravana: 'The twenty-second nakshatra (10°–23°20′ Makara), ruled by Chandra; presided by Viṣṇu, classical register of listening and transmitted knowledge.',
  dhanishta: 'The twenty-third nakshatra (23°20′ Makara–6°40′ Kumbha), ruled by Mangala; presided by the Vasus, classical register of wealth and rhythmic expression.',
  shatabhisha: 'The twenty-fourth nakshatra (6°40′–20° Kumbha), ruled by Rāhu; presided by Varuṇa, classical register of hundred-healers and veiled knowledge.',
  'purva-bhadrapada': 'The twenty-fifth nakshatra (20° Kumbha–3°20′ Meena), ruled by Guru; presided by Aja Ekapāda, classical register of ascetic intensity.',
  'uttara-bhadrapada': 'The twenty-sixth nakshatra (3°20′–16°40′ Meena), ruled by Śani; presided by Ahirbudhnya, classical register of deep stability and cosmic serpent.',
  revati: 'The twenty-seventh and last nakshatra (16°40′–30° Meena), ruled by Budha; presided by Pūṣan, classical register of safe passage and completion.',

  // Tithis (16)
  pratipada: 'The first tithi of each pakṣa; devatā Agni, Nandā-class, classical register of inauguration and first-step undertakings.',
  dwitiya: 'The second tithi; devatā Vidhātṛ (Brahmā), Bhadrā-class, classical register of consolidation and planned arrangement.',
  tritiya: 'The third tithi; primary devatā Gaurī (Viṣṇu in Kṛṣṇa-3), Jayā-class, classical register of victory-oriented and marital auspiciousness.',
  chaturthi: 'The fourth tithi; devatā Gaṇeśa, Riktā-class, classical register of obstacle-removal and release-oriented work.',
  panchami: 'The fifth tithi; devatā Nāga, Pūrṇā-class, classical register of healing and serpent-tradition.',
  shashthi: 'The sixth tithi; devatā Kārttikeya (Skanda), Nandā-class, classical register of youthful vigour and contest.',
  saptami: 'The seventh tithi; devatā Sūrya, Bhadrā-class, classical register of authority and solar undertakings.',
  ashtami: 'The eighth tithi; devatā Rudra (Durgā in Kṛṣṇa-8), Jayā-class, classical register of intensity and Janmāṣṭamī observance.',
  navami: 'The ninth tithi; devatā Durgā, Riktā-class, classical register of goddess-energy and Rāma-navamī observance.',
  dashami: 'The tenth tithi; devatā Yama (Dharma), Pūrṇā-class, classical register of righteous action and Vijayā-daśamī victory.',
  ekadashi: 'The eleventh tithi; devatā Viśvedevas, Nandā-class, classical register of fasting and Viṣṇu-devotion.',
  dwadashi: 'The twelfth tithi; devatā Viṣṇu (Hari), Bhadrā-class, classical register of fast-breaking and devotional register.',
  trayodashi: 'The thirteenth tithi; devatā Kāmadeva (Śiva in Kṛṣṇa-13, Pradoṣa), Jayā-class, classical register of passion and evening worship.',
  chaturdashi: 'The fourteenth tithi; primary devatā Śiva (Kālī in Kṛṣṇa-14), Riktā-class, classical register of intense transformation.',
  purnima: 'The fifteenth tithi of Śukla-pakṣa (full moon); devatā Chandra-Soma, Pūrṇā-class, classical register of completion and fullness.',
  amavasya: 'The fifteenth tithi of Kṛṣṇa-pakṣa (new moon); devatā the Pitṛs (class-plural), classical register of ancestral observance and inner-darkness.',

  // Bhavas (12)
  'tanu-bhava': 'The 1st bhāva (Lagna); classical tanu-sthāna, register of the body, self, and overall life-orientation.',
  'dhana-bhava': 'The 2nd bhāva; classical dhana-sthāna, register of accumulated wealth, speech, and immediate family.',
  'sahaja-bhava': 'The 3rd bhāva; classical sahaja-sthāna, register of siblings, courage, and short-duration initiatives.',
  'sukha-bhava': 'The 4th bhāva; classical sukha-sthāna, register of home, mother, conveyances, and formative comfort.',
  'putra-bhava': 'The 5th bhāva; classical putra-sthāna, register of progeny, creative intelligence, and pūrva-puṇya merit.',
  'ripu-bhava': 'The 6th bhāva; classical ṣaṣṭha dusthāna, register of adversaries, debts, disease, and service.',
  'kalatra-bhava': 'The 7th bhāva; classical kalatra-sthāna, register of spouse, partnership, and public engagement.',
  'ayush-bhava': 'The 8th bhāva; classical aṣṭama dusthāna, register of longevity, transformation, and inherited registers.',
  'dharma-bhava': 'The 9th bhāva; classical bhāgya-sthāna, register of dharma, fortune, father, and long-range pilgrimage.',
  'karma-bhava': 'The 10th bhāva; classical karma-sthāna, register of profession, authority, and public-register action.',
  'labha-bhava': 'The 11th bhāva; classical lābha-sthāna, register of gains, fulfilled desires, and elder-sibling register.',
  'vyaya-bhava': 'The 12th bhāva; classical dvādaśa dusthāna, register of expenditure, foreign lands, dissolution, and mokṣa.',

  // Doshas (6)
  'mangal-dosha': 'Classical dosha formed by Mangala in specific bhāvas counted from Lagna, Chandra, or Śukra; widely read in marital compatibility.',
  'kaal-sarp-dosha': 'Classical dosha arising when all seven tārā-grahas fall between Rāhu and Ketu; provenance acknowledged as debated across primary sources.',
  'pitra-dosha': 'Classical dosha indicating ancestral-register affliction; read through 9th bhāva, Sūrya, and Rāhu configurations.',
  'grahan-dosha': 'Classical dosha from Sūrya or Chandra affliction by Rāhu/Ketu; the eclipse-register as a natal configuration.',
  'nadi-dosha': 'Classical dosha from same-nāḍī nakshatra matching between prospective spouses; highest-penalty Aṣṭa-kūṭa configuration.',
  'sade-sati': 'The 7.5-year Śani transit through the three rāśis adjacent to natal Chandra; transit phenomenon, not a natal configuration.',

  // Yogas (11)
  'raj-yoga': 'Classical yoga-class produced by kendra-trikoṇa lord combinations; the foundational Rāja-yoga sovereignty register.',
  'dhana-yoga': 'Classical yoga-class from 2nd/11th and 5th/9th bhāva lord combinations; the wealth-register analog of Rāja-yoga.',
  'gaja-kesari-yoga': 'Classical yoga formed by Guru in a kendra from Chandra; the elephant-lion register of stable wisdom.',
  'pancha-mahapurusha-yoga': 'Umbrella of five classical yogas — Ruchaka, Bhadra, Haṃsa, Mālavya, Śaśa — formed by tārā-grahas in own/exalted rāśi in a kendra.',
  'ruchaka-yoga': 'Mangala Pañca-Mahāpuruṣa-yoga; Mangala in Meṣa, Vṛścika, or Makara in a kendra from Lagna.',
  'bhadra-yoga': 'Budha Pañca-Mahāpuruṣa-yoga; Budha in Mithuna or Kanyā in a kendra from Lagna.',
  'hamsa-yoga': 'Bṛhaspati Pañca-Mahāpuruṣa-yoga; Guru in Dhanu, Meena, or Karka in a kendra from Lagna.',
  'malavya-yoga': 'Śukra Pañca-Mahāpuruṣa-yoga; Śukra in Vṛṣabha, Tulā, or Meena in a kendra from Lagna.',
  'sasa-yoga': 'Śani Pañca-Mahāpuruṣa-yoga; Śani in Makara, Kumbha, or Tulā in a kendra from Lagna.',
  'neecha-bhanga-raja-yoga': 'Classical yoga from structural cancellation of a graha\'s debilitation; produces reversal into Rāja-yoga register.',
  'vipareeta-raja-yoga': 'Classical yoga from dusthāna-lord interaction producing reversal-of-affliction; three variants — Harṣa, Sarala, Vimala.',

  // Kootas (8)
  'varna-koota': 'First of the eight Aṣṭa-kūṭas (1 point); classical compatibility matching via Chandra-rāśi elemental varṇa classification.',
  'vashya-koota': 'Second Aṣṭa-kūṭa (2 points); classical compatibility via Chandra-rāśi vaśya-classification and natural dominance relationships.',
  'tara-koota': 'Third Aṣṭa-kūṭa (3 points); classical compatibility via mutual nakshatra-position in the 9-fold Tārā cycle.',
  'yoni-koota': 'Fourth Aṣṭa-kūṭa (4 points); classical compatibility via 14 animal-symbol yoni assignments to the 27 nakshatras.',
  'graha-maitri-koota': 'Fifth Aṣṭa-kūṭa (5 points); classical compatibility via naisargika-maitrī friendship between Chandra-rāśi lords.',
  'gana-koota': 'Sixth Aṣṭa-kūṭa (6 points); classical compatibility via three-fold gaṇa classification (deva, manuṣya, rākṣasa).',
  'bhakoot-koota': 'Seventh Aṣṭa-kūṭa (7 points); classical compatibility via mutual Chandra-rāśi position, with 2-12 and 6-8 axes penalised.',
  'nadi-koota': 'Eighth and highest-weighted Aṣṭa-kūṭa (8 points); classical compatibility via three-fold nāḍī (ādya/madhya/antya) physiological classification.',

  // Vargas (16)
  'rashi-d1': 'The foundational natal chart; D-1 of the Ṣoḍaśa-varga, base from which every supplementary varga is computed.',
  'hora-d2': 'The 2-division varga reading the dhana (wealth) register; divides each rāśi into Sūrya-horā and Chandra-horā halves.',
  'drekkana-d3': 'The 3-division varga reading the sahaja (siblings, courage) register; divides each rāśi into trine-element thirds.',
  'chaturthamsha-d4': 'The 4-division varga reading the sukha (fortune in residence, property) register; divides each rāśi into kendra-quarters.',
  'saptamsha-d7': 'The 7-division varga reading the putra-pautra (progeny) register; paired with Guru as classical putra-kāraka.',
  'navamsha-d9': 'The 9-division varga reading the dharma-kalatra (spouse, overall fortune) register; most-weighted supplementary varga after Rāśi.',
  'dashamsha-d10': 'The 10-division varga reading the karma (profession, career) register; paired with the 10th bhāva and Sūrya/Śani kāraka readings.',
  'dwadashamsha-d12': 'The 12-division varga reading the pitṛ-mātṛ (parents, ancestral) register; cross-referenced with Pitṛ-dośa analysis.',
  'shodashamsha-d16': 'The 16-division varga reading the vāhana-sukha (vehicles, acquired comforts) register.',
  'vimshamsha-d20': 'The 20-division varga reading the upāsanā (spiritual practice, iṣṭa-devatā) register.',
  'chaturvimshamsha-d24': 'The 24-division varga reading the vidyā (learning, scholarship) register; also called Siddhāṃśa.',
  'saptavimshamsha-d27': 'The 27-division varga reading the bala (strengths, weaknesses) register; also called Bhāṃśa or Nakshatrāṃśa.',
  'trimshamsha-d30': 'The 30-division varga reading the ariṣṭa (miseries, afflictions) register; uses classical non-uniform 5-5-8-7-5 division.',
  'khavedamsha-d40': 'The 40-division varga reading the śubha-aśubha (general auspiciousness) register.',
  'akshavedamsha-d45': 'The 45-division varga reading the sarva-sāmānya (all-matters general) register.',
  'shashtiamsha-d60': 'The 60-division varga reading the sarva-viśiṣṭa (fine-detail, past-karma) register; most birth-time-sensitive of classical vargas.',

  // Numerology (9)
  'life-path-number': 'The Indian Vedic mūlāṅka (and Western Life Path Number); the root single-digit number 1–9 derived from the native\'s day or full date of birth.',
  'destiny-number': 'The Indian Vedic bhāgyāṅka (destiny number); the single-digit number derived from the full date of birth.',
  'soul-urge-number': 'The Western Pythagorean vowel-derived register of the name; indicates the tradition-reported inner motivation register.',
  'expression-number': 'The Western Pythagorean full-name letter-value register; related to the Indian Vedic nāmāṅka (name number).',
  'birthday-number': 'The single-digit reduction of the day-of-birth; overlaps with mūlāṅka in Indian tradition, distinguished from full-date Life Path in Western.',
  'master-numbers': 'The modern Western numerology convention retaining 11, 22, 33 as unreduced master values; not adopted in Indian Vedic numerology.',
  'lo-shu-grid': 'The 3×3 Luo Shu magic square of ancient Chinese origin; adapted in modern Indian numerology as a diagnostic birth-date placement grid.',
  'chaldean-numerology': 'Western numerological system with 1–8 letter-value table (9 reserved); attributed to ancient Chaldean sources, popularised by Cheiro.',
  'pythagorean-numerology': 'Western numerological system with A=1, B=2 cycling through 1–9; most widely-used contemporary Western letter-value framework.',

  // Vastu (4)
  brahmasthana: 'The central zone of the Vāstu-puruṣa-maṇḍala; classical cosmic-axis register assigned to Brahmā, kept open in classical vāstu-prescription.',
  'eight-directions': 'The Aṣṭa-dik directional framework; eight cardinal and intercardinal directions each assigned a classical Dik-pāla deity.',
  'pancha-bhutas': 'The five classical Sanskrit elements — pṛthvī, ap/jala, tejas/agni, vāyu, ākāśa — and their vāstu-direction correspondences.',
  'vastu-purusha-mandala': 'The foundational structural diagram of classical vāstu-śāstra; 64-cell or 81-cell grid with the Vāstu-puruṣa superimposed.',

  // Tarot (8)
  'major-arcana': 'The 22 trump cards of the standard Western tarot deck, numbered 0 (The Fool) through XXI (The World); archetypal-register cards.',
  'minor-arcana': 'The 56 cards of the tarot deck across four suits; the everyday-life register complementing the Major Arcana\'s transformational themes.',
  'suit-of-wands': 'The fire-element suit of the Minor Arcana (Golden Dawn attribution); 14 cards reading the action, creativity, and initiating-energy register.',
  'suit-of-cups': 'The water-element suit of the Minor Arcana (Golden Dawn attribution); 14 cards reading the emotion, relationship, and intuition register.',
  'suit-of-swords': 'The air-element suit of the Minor Arcana (Golden Dawn attribution); 14 cards reading the thought, intellect, and conflict register.',
  'suit-of-pentacles': 'The earth-element suit of the Minor Arcana (Golden Dawn attribution); 14 cards reading the material, wealth, and physical-health register.',
  'court-cards': 'The 16 figure-cards of the Minor Arcana — Page, Knight, Queen, King in each of the four suits.',
  'rider-waite-deck': 'The 1909 Rider–Waite–Smith tarot deck; the most widely-used deck in English-speaking tradition, designed by A. E. Waite and illustrated by Pamela Colman Smith.',
};

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error('no frontmatter');
  const lines = m[1].split('\n');
  const fields = [];
  for (const line of lines) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (kv) fields.push([kv[1], kv[2]]);
  }
  return { fields, body: m[2] };
}

function emitFrontmatter(fieldsMap, universalOrder) {
  const emitted = [];
  const seen = new Set();
  for (const key of universalOrder) {
    if (fieldsMap.has(key)) {
      emitted.push(`${key}: ${fieldsMap.get(key)}`);
      seen.add(key);
    }
  }
  for (const [key, value] of fieldsMap) {
    if (!seen.has(key)) {
      emitted.push(`${key}: ${value}`);
    }
  }
  return emitted.join('\n');
}

function processFile(filepath) {
  const raw = fs.readFileSync(filepath, 'utf8');
  const { fields, body } = parseFrontmatter(raw);
  const fm = new Map(fields);

  const slug = fm.get('slug');
  if (!slug) throw new Error(`no slug: ${filepath}`);

  // Add missing devanagari
  if (!fm.has('devanagari')) {
    fm.set('devanagari', DEVANAGARI[slug] ?? '');
  } else if (fm.get('devanagari') === '—') {
    fm.set('devanagari', '');
  }

  // Add missing wikidata
  if (!fm.has('wikidata')) {
    fm.set('wikidata', '');
  }

  // Add description
  const desc = DESCRIPTIONS[slug];
  if (!desc) throw new Error(`no description for slug: ${slug}`);
  fm.set('description', desc);

  // Normalize category
  if (fm.get('category') === 'koota') {
    fm.set('category', 'kuta');
  }

  // Status → reviewed
  fm.set('status', 'reviewed');

  // Ensure target_word_count exists
  if (!fm.has('target_word_count')) {
    fm.set('target_word_count', '500-700');
  }

  const UNIVERSAL = ['slug', 'name', 'devanagari', 'category', 'description', 'wikidata', 'target_word_count', 'status'];
  const newFm = emitFrontmatter(fm, UNIVERSAL);
  const out = `---\n${newFm}\n---\n${body}`;
  fs.writeFileSync(filepath, out);
}

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.name.endsWith('.md')) yield full;
  }
}

let count = 0;
const missing = [];
for (const file of walk(ROOT)) {
  try {
    processFile(file);
    count++;
  } catch (e) {
    missing.push(`${file}: ${e.message}`);
  }
}
console.log(`Processed ${count} files`);
if (missing.length) {
  console.error('Errors:');
  for (const m of missing) console.error('  ' + m);
  process.exit(1);
}
if (count !== 138) {
  console.error(`Expected 138 files, processed ${count}`);
  process.exit(1);
}
console.log('OK: 138 concepts normalized');
