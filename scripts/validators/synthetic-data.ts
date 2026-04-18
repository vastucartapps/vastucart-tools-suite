/**
 * Synthetic-data sniff.
 *
 * Flags patterns that technically pass the gate but are structurally
 * suspicious — the "gate passes mechanically but content is stub" failure
 * mode flagged during the Muhurta audit.
 *
 * Never blocks. Emits warnings only. The signal is quality, not correctness.
 */

export type SyntheticFlag = {
  severity: 'warning';
  message: string;
};

/**
 * Known template phrases that, if found in emitted content, indicate the
 * upstream data source is template-filled rather than authored.
 */
const STUB_PHRASES = [
  'lorem ipsum',
  'placeholder',
  'your text here',
  'todo:',
  'tbd',
  'xxx',
  'sample description',
  'sample name',
];

const BOILERPLATE_STEP_OPENERS = [
  'click the',
  'enter your',
  'select the',
  'fill in the',
  'choose your',
];

export function checkSynthetic(node: unknown): SyntheticFlag[] {
  const flags: SyntheticFlag[] = [];

  // 1. Stub phrase scan across every string value
  const strings: string[] = [];
  collectStrings(node, strings);
  for (const s of strings) {
    const lower = s.toLowerCase();
    for (const phrase of STUB_PHRASES) {
      if (lower.includes(phrase)) {
        flags.push({
          severity: 'warning',
          message: `Stub/placeholder phrase "${phrase}" detected in emitted string: "${s.slice(0, 80)}${s.length > 80 ? '…' : ''}"`,
        });
        break;
      }
    }
  }

  // 2. FAQ synthetic patterns
  if (isObject(node)) {
    const nodeAny = node as Record<string, unknown>;
    if (nodeAny['@type'] === 'FAQPage' && Array.isArray(nodeAny.mainEntity)) {
      const questions = (nodeAny.mainEntity as unknown[])
        .map((q) => (isObject(q) ? ((q as Record<string, unknown>).name as string) : null))
        .filter((q): q is string => typeof q === 'string');
      if (questions.length > 0) {
        const unique = new Set(questions);
        if (unique.size < questions.length) {
          flags.push({
            severity: 'warning',
            message: `FAQPage has duplicate question text across ${questions.length} entries — likely template-generated.`,
          });
        }
        // Flag if ALL questions start with the same word (template loop)
        const firstWords = questions.map((q) => q.split(/\s+/)[0]?.toLowerCase()).filter(Boolean);
        if (firstWords.length >= 3 && new Set(firstWords).size === 1) {
          flags.push({
            severity: 'warning',
            message: `FAQPage questions all start with "${firstWords[0]}" — suggests mechanical generation.`,
          });
        }
      }
    }

    // 3. HowTo step boilerplate detection
    if (nodeAny['@type'] === 'HowTo' && Array.isArray(nodeAny.step)) {
      const stepTexts = (nodeAny.step as unknown[])
        .map((s) => (isObject(s) ? ((s as Record<string, unknown>).text as string) : null))
        .filter((s): s is string => typeof s === 'string');
      const boilerplateCount = stepTexts.filter((t) =>
        BOILERPLATE_STEP_OPENERS.some((op) => t.toLowerCase().startsWith(op)),
      ).length;
      if (stepTexts.length >= 3 && boilerplateCount === stepTexts.length) {
        flags.push({
          severity: 'warning',
          message: `HowTo has ${stepTexts.length} steps all starting with boilerplate verbs — likely mechanical extraction, not authored.`,
        });
      }
    }

    // 4. ItemList with every item identical structure and no per-item description
    if (nodeAny['@type'] === 'ItemList' && Array.isArray(nodeAny.itemListElement)) {
      const items = nodeAny.itemListElement as unknown[];
      if (items.length >= 3) {
        const keyShapes = items
          .filter(isObject)
          .map((it) => Object.keys(it as Record<string, unknown>).sort().join(','));
        if (new Set(keyShapes).size === 1 && keyShapes[0] && !keyShapes[0].includes('description')) {
          flags.push({
            severity: 'warning',
            message: `ItemList of ${items.length} items has identical structure and no description field — may be a stub loop.`,
          });
        }
      }
    }
  }

  return flags;
}

function collectStrings(v: unknown, out: string[]): void {
  if (typeof v === 'string') {
    if (v.length > 0) out.push(v);
    return;
  }
  if (Array.isArray(v)) {
    for (const x of v) collectStrings(x, out);
    return;
  }
  if (v && typeof v === 'object') {
    for (const val of Object.values(v as Record<string, unknown>)) collectStrings(val, out);
  }
}

function isObject(v: unknown): v is object {
  return v !== null && typeof v === 'object' && !Array.isArray(v);
}
