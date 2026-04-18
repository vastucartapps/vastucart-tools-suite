/**
 * Cross-subdomain @id integrity.
 *
 * Every `@id` that references a canonical entity owned by another subdomain
 * (or by this site) MUST match the strings declared in
 * `public/00-shared-contracts.md` sections 2.1–2.4 exactly. A typo in an
 * `@id` typechecks fine but silently breaks the cross-domain entity graph.
 *
 * This module hard-codes the canonical strings so drift is structurally
 * impossible. If the shared contract changes, this file changes too — and
 * the diff is the record of what was renamed.
 */

/** §2.1 Organization — owned by vastucart.in */
export const CANONICAL_ORG_ID = 'https://www.vastucart.in/#organization' as const;

/** §2.2 Persons — owned by blog.vastucart.in */
export const CANONICAL_PERSON_IDS = {
  ptRaghavSharma: 'https://blog.vastucart.in/authors/pt-raghav-sharma#person',
  vastucartEditorial: 'https://blog.vastucart.in/authors/vastucart-editorial#person',
} as const;

/** §2.3 Sub-brand @ids — each owned by its respective subdomain */
export const CANONICAL_BRAND_IDS = {
  kundali: 'https://kundali.vastucart.in/#brand',
  store: 'https://store.vastucart.in/#store',
  blog: 'https://blog.vastucart.in/#blog',
  panchang: 'https://panchang.vastucart.in/#brand',
  stotra: 'https://stotra.vastucart.in/#brand',
  horoscope: 'https://horoscope.vastucart.in/#brand',
  muhurta: 'https://muhurta.vastucart.in/#brand',
  wedding: 'https://wedding.vastucart.in/#brand',
  tarot: 'https://tarot.vastucart.in/#brand',
} as const;

/** §2.4 WebSite @ids — each owned by its respective subdomain */
export const CANONICAL_WEBSITE_IDS = {
  root: 'https://www.vastucart.in/#website',
  kundali: 'https://kundali.vastucart.in/#website',
  store: 'https://store.vastucart.in/#website',
  blog: 'https://blog.vastucart.in/#website',
  panchang: 'https://panchang.vastucart.in/#website',
  stotra: 'https://stotra.vastucart.in/#website',
  horoscope: 'https://horoscope.vastucart.in/#website',
  muhurta: 'https://muhurta.vastucart.in/#website',
  wedding: 'https://wedding.vastucart.in/#website',
  tarot: 'https://tarot.vastucart.in/#website',
} as const;

/** Host-prefix set for any `@id` this project is allowed to reference. */
const ALLOWED_HOSTS = new Set([
  'www.vastucart.in',
  'blog.vastucart.in',
  'kundali.vastucart.in',
  'store.vastucart.in',
  'panchang.vastucart.in',
  'stotra.vastucart.in',
  'horoscope.vastucart.in',
  'muhurta.vastucart.in',
  'wedding.vastucart.in',
  'tarot.vastucart.in',
]);

/** Every fully-qualified canonical string. Used for typo detection. */
const ALL_CANONICAL_IDS: readonly string[] = [
  CANONICAL_ORG_ID,
  ...Object.values(CANONICAL_PERSON_IDS),
  ...Object.values(CANONICAL_BRAND_IDS),
  ...Object.values(CANONICAL_WEBSITE_IDS),
];

/**
 * Walk a JSON-LD node (or array of nodes) and collect every `@id` string
 * encountered anywhere in the structure, including nested references.
 */
function collectIds(input: unknown, out: string[] = []): string[] {
  if (Array.isArray(input)) {
    for (const v of input) collectIds(v, out);
    return out;
  }
  if (input && typeof input === 'object') {
    const obj = input as Record<string, unknown>;
    if (typeof obj['@id'] === 'string') out.push(obj['@id']);
    for (const v of Object.values(obj)) collectIds(v, out);
  }
  return out;
}

/**
 * An `@id` is considered a *canonical reference* if it matches the regex
 * for a known well-known anchor — `#organization`, `#brand`, `#store`,
 * `#blog`, `#website`, or `#person` after the hostname — because those
 * anchors are the ones that fan out across the ecosystem.
 *
 * Page-level `@id`s like `.../tools/kundli#webpage` or `...#faq` are
 * page-scoped and therefore exempt from the canonical-match check.
 */
const CANONICAL_ANCHOR_RE =
  /^https:\/\/[^/]+\/(?:authors\/[a-z-]+)?#(?:organization|brand|store|blog|website|person)$/;

export type IdIssue = {
  severity: 'error' | 'warning';
  message: string;
};

/**
 * Check every `@id` in the given node (or array). Returns a list of issues:
 *  - error: `@id` looks canonical but doesn't match a known string
 *  - error: host is outside the ecosystem
 *  - error: URL shape is malformed (not https, contains `/en/`, has spaces)
 */
export function checkIdIntegrity(node: unknown): IdIssue[] {
  const issues: IdIssue[] = [];
  const ids = collectIds(node);
  for (const id of ids) {
    if (!id.startsWith('https://')) {
      issues.push({
        severity: 'error',
        message: `@id must be https://, got: ${id}`,
      });
      continue;
    }
    if (id.includes(' ')) {
      issues.push({
        severity: 'error',
        message: `@id contains whitespace: ${id}`,
      });
      continue;
    }
    if (id.includes('/en/') || id.endsWith('/en')) {
      issues.push({
        severity: 'error',
        message: `@id uses /en/ prefix (canonical form is bare): ${id}`,
      });
      continue;
    }
    let host: string;
    try {
      host = new URL(id).host;
    } catch {
      issues.push({
        severity: 'error',
        message: `@id is not a valid URL: ${id}`,
      });
      continue;
    }
    if (!ALLOWED_HOSTS.has(host)) {
      issues.push({
        severity: 'error',
        message: `@id host ${host} is outside the VastuCart ecosystem: ${id}`,
      });
      continue;
    }
    if (CANONICAL_ANCHOR_RE.test(id)) {
      if (!ALL_CANONICAL_IDS.includes(id)) {
        issues.push({
          severity: 'error',
          message: `@id looks canonical but doesn't match any known canonical string (typo?): ${id}`,
        });
      }
    }
  }
  return issues;
}
