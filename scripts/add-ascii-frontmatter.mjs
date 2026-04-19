#!/usr/bin/env node
/**
 * Migration: add `ascii` field to the frontmatter of all 138 concept drafts.
 *
 * Source of truth for the ASCII form, in priority order:
 *   1. The "(Devanagari, also written X)" parenthetical in the body's
 *      opening paragraph — the ASCII form we've used in prose throughout
 *      the corpus.
 *   2. Explicit fallback map for drafts whose body opening doesn't follow
 *      that pattern (rashi-d1 Varga, Numerology/Vāstu/Tarot concepts with
 *      already-ASCII names or non-standard openings).
 *   3. IAST-to-popular-English transliteration of the `name` field.
 *
 * The output ASCII is used by the H1 renderer directly, replacing the
 * naive NFD-strip function that mangled ś→s and ṣ→s.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'content/concepts/drafts';

// IAST-to-popular-English fallback transliteration
const TRANSLITERATE_MAP = [
  // Multi-char (order-sensitive before single-char)
  ['ṭh', 'th'], ['ḍh', 'dh'], ['ṇ', 'n'],
  // Single-char Sanskrit diacritics
  ['ś', 'sh'], ['ṣ', 'sh'], ['ṛ', 'ri'], ['ṝ', 'ri'],
  ['ḷ', 'l'], ['ṅ', 'n'], ['ñ', 'n'],
  ['ṭ', 't'], ['ḍ', 'd'], ['ṃ', 'm'], ['ḥ', 'h'],
  ['ā', 'a'], ['ī', 'i'], ['ū', 'u'], ['ē', 'e'], ['ō', 'o'],
  // Uppercase counterparts
  ['Ṭh', 'Th'], ['Ḍh', 'Dh'],
  ['Ś', 'Sh'], ['Ṣ', 'Sh'], ['Ṛ', 'Ri'], ['Ṝ', 'Ri'],
  ['Ḷ', 'L'], ['Ṅ', 'N'], ['Ñ', 'N'],
  ['Ṭ', 'T'], ['Ḍ', 'D'], ['Ṇ', 'N'], ['Ṃ', 'M'], ['Ḥ', 'H'],
  ['Ā', 'A'], ['Ī', 'I'], ['Ū', 'U'], ['Ē', 'E'], ['Ō', 'O'],
];

function transliterate(s) {
  let out = s;
  for (const [from, to] of TRANSLITERATE_MAP) {
    out = out.replaceAll(from, to);
  }
  return out;
}

// Explicit overrides for drafts whose body doesn't carry an "also written"
// form and where the transliteration would otherwise produce an awkward ASCII.
// Key: slug. Value: canonical popular-English ASCII form.
const ASCII_OVERRIDES = {
  'rashi-d1': 'Rashi (D-1)',
  // Numerology compound names — keep the English portion, transliterate Sanskrit
  'life-path-number': 'Life Path Number (Moolanka)',
  'destiny-number': 'Destiny Number (Bhagyanka)',
  // Vastu — names where body opens without "also written"
  'pancha-bhutas': 'Pancha-bhutas',
  'vastu-purusha-mandala': 'Vastu-purusha-mandala',
  'eight-directions': 'Eight Directions (Ashta-dik)',
  // Tarot — names are already ASCII; ascii = name
  'major-arcana': 'Major Arcana',
  'minor-arcana': 'Minor Arcana',
  'suit-of-wands': 'Suit of Wands',
  'suit-of-cups': 'Suit of Cups',
  'suit-of-swords': 'Suit of Swords',
  'suit-of-pentacles': 'Suit of Pentacles',
  'court-cards': 'Court Cards',
  'rider-waite-deck': 'Rider-Waite-Smith Deck',
  // Numerology — already ASCII names
  'soul-urge-number': 'Soul Urge Number',
  'expression-number': 'Expression Number',
  'birthday-number': 'Birthday Number (Janma-dinanka)',
  'master-numbers': 'Master Numbers',
  'lo-shu-grid': 'Lo Shu Grid (Luo Shu Magic Square)',
  'chaldean-numerology': 'Chaldean Numerology',
  'pythagorean-numerology': 'Pythagorean Numerology',
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
  return { fields, body: m[2], rawFm: m[1] };
}

function cleanExtracted(raw) {
  // Normalize newlines to spaces, collapse whitespace
  let s = raw.replace(/\s+/g, ' ').trim();
  // Cut at first comma — we want only the primary form, not secondary variants
  s = s.split(',')[0].trim();
  // Cut at " or " — we want only the primary form, not alternates
  const orIdx = s.indexOf(' or ');
  if (orIdx > 0) s = s.slice(0, orIdx).trim();
  // Reject if italic markers remain (means we captured Sanskrit variants)
  if (s.includes('*')) return null;
  // Reject if non-ASCII remains — fall back to transliteration
  if (/[^\x20-\x7e]/.test(s)) return null;
  if (!s) return null;
  return s;
}

function extractAsciiFromBody(body) {
  // Pattern: "(Devanagari, also written X)" anywhere in the body. The
  // parenthetical may span multiple lines; we clean the capture afterwards
  // to strip secondary variants, commas, "or X" forms, and italic markers.
  const m1 = body.match(/\([^,()]+,\s*also written ([^)]+)\)/);
  if (!m1) return null;
  return cleanExtracted(m1[1]);
}

function getAsciiForSlug(slug, name, body) {
  if (slug in ASCII_OVERRIDES) return ASCII_OVERRIDES[slug];
  const fromBody = extractAsciiFromBody(body);
  if (fromBody) return fromBody;
  // Final fallback: transliterate the name
  return transliterate(name);
}

function emitFrontmatter(fields) {
  return fields.map(([k, v]) => `${k}: ${v}`).join('\n');
}

function processFile(filepath) {
  const raw = fs.readFileSync(filepath, 'utf8');
  const { fields, body } = parseFrontmatter(raw);
  const fmMap = new Map(fields);
  const slug = fmMap.get('slug');
  const name = fmMap.get('name');
  if (!slug || !name) throw new Error(`missing slug/name in ${filepath}`);

  const ascii = getAsciiForSlug(slug, name, body);

  // Insert `ascii` right after `devanagari` (or after `name` if no devanagari)
  const out = [];
  let inserted = false;
  for (const [k, v] of fields) {
    if (k === 'ascii') continue; // strip any existing ascii field to reinsert
    out.push([k, v]);
    if (!inserted && k === 'devanagari') {
      out.push(['ascii', ascii]);
      inserted = true;
    }
  }
  if (!inserted) {
    // no devanagari line — insert after name
    const idx = out.findIndex(([k]) => k === 'name');
    if (idx >= 0) out.splice(idx + 1, 0, ['ascii', ascii]);
    else out.push(['ascii', ascii]);
  }

  const newContent = `---\n${emitFrontmatter(out)}\n---\n${body}`;
  fs.writeFileSync(filepath, newContent);
  return { slug, name, ascii };
}

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.name.endsWith('.md')) yield full;
  }
}

const report = [];
let count = 0;
for (const file of walk(ROOT)) {
  const result = processFile(file);
  report.push(result);
  count++;
}
console.log(`Processed ${count} drafts\n`);
console.log('slug → name → ascii');
console.log('─'.repeat(80));
for (const { slug, name, ascii } of report) {
  const marker = name === ascii ? ' ' : '*';
  console.log(`${marker} ${slug.padEnd(30)} ${name.padEnd(28)} ${ascii}`);
}
if (count !== 138) {
  console.error(`\nEXPECTED 138 FILES, PROCESSED ${count}`);
  process.exit(1);
}
