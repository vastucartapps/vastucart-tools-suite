/**
 * URL-shape checks applied to every URL-bearing field encountered in a
 * JSON-LD node. These are structural issues that wouldn't fail a pure
 * schema.org validator but *would* break Google Rich Results, break
 * cache keys, or introduce indexation ambiguity.
 *
 * Scope rules (agreed with user):
 *
 *   @id values
 *     - Must be absolute https://
 *     - No trailing slash (bare `/` on root domain is allowed)
 *     - No stray `#` except a valid fragment identifier (e.g.
 *       `#organization`, `#faq-0`)
 *     - Host must be inside our ecosystem (checked in id-integrity.ts,
 *       not here — this module stays focused on shape)
 *
 *   URLs on domains we control (vastucart.in + subdomains)
 *     - Same rules as @id
 *
 *   External URLs in `sameAs`
 *     - Must be absolute https://
 *     - Trailing-slash rule does NOT apply — foreign platforms
 *       (Instagram, Pinterest, etc.) publish their own canonical form
 *       with trailing slashes, and stripping would 301-redirect
 *     - Still check whitespace / malformed URL
 *
 * Owned host set matches id-integrity.ts's ALLOWED_HOSTS.
 */

const OWNED_HOSTS = new Set([
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

/** Keys whose string values are URLs we should shape-check. */
const URL_FIELDS = new Set([
  'url',
  'contentUrl',
  'item',
  'logo',
  'image',
  'thumbnailUrl',
  'sameAs',
  'mainEntityOfPage',
  'isPartOf',
  'target',
  'urlTemplate',
]);

export type UrlIssue = {
  severity: 'error' | 'warning';
  message: string;
};

function isOwned(host: string): boolean {
  return OWNED_HOSTS.has(host);
}

/**
 * Check a URL string. `fieldPath` is used for error messages and also
 * drives one scoping decision: `sameAs` on external hosts skips the
 * trailing-slash rule.
 */
function checkUrl(value: string, fieldPath: string): UrlIssue[] {
  const out: UrlIssue[] = [];
  if (typeof value !== 'string' || value.length === 0) return out;

  // 1. Protocol check — must be absolute https://
  if (!/^https?:\/\//.test(value)) {
    out.push({
      severity: 'error',
      message: `${fieldPath} is not an absolute URL: ${value}`,
    });
    return out;
  }
  if (value.startsWith('http://')) {
    out.push({
      severity: 'error',
      message: `${fieldPath} uses http:// (not https): ${value}`,
    });
    return out;
  }

  // 2. Whitespace check — always
  if (/\s/.test(value)) {
    out.push({
      severity: 'error',
      message: `${fieldPath} contains whitespace: ${value}`,
    });
    return out;
  }

  // 3. Parseable URL check
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    out.push({
      severity: 'error',
      message: `${fieldPath} is not a valid URL: ${value}`,
    });
    return out;
  }
  const host = parsed.host;
  const owned = isOwned(host);

  // 4. /en/ prefix check — applies to internal URLs only (foreign platforms
  //    are free to have paths that happen to contain "/en/").
  if (owned) {
    const pathname = parsed.pathname;
    if (pathname === '/en' || pathname.startsWith('/en/')) {
      out.push({
        severity: 'error',
        message: `${fieldPath} contains /en/ prefix on owned domain (canonical form is bare): ${value}`,
      });
    }
  }

  // 5. Trailing-slash check — applies ONLY to owned domains, and we allow
  //    bare `/` on the root (e.g. `https://www.vastucart.in/` is fine).
  //    sameAs on external platforms is exempt by design.
  const isSameAs = fieldPath === 'sameAs' || fieldPath.endsWith('.sameAs') || fieldPath.includes('.sameAs[');
  if (owned && !isSameAs) {
    const isRootOnly = /^https:\/\/[^/]+\/$/.test(value);
    if (value.endsWith('/') && !isRootOnly) {
      out.push({
        severity: 'warning',
        message: `${fieldPath} ends with trailing slash on owned domain: ${value}`,
      });
    }
  }

  return out;
}

/**
 * @id values have the same shape rules as owned-domain URLs, plus one
 * extra: no stray `#` except a valid fragment identifier.
 */
function checkIdShape(id: string, fieldPath: string = '@id'): UrlIssue[] {
  const out: UrlIssue[] = [];
  if (typeof id !== 'string' || id.length === 0) return out;

  // Reuse URL checks
  out.push(...checkUrl(id, fieldPath));

  // Extra: fragment must be valid if present.
  try {
    const parsed = new URL(id);
    if (parsed.hash) {
      // Valid fragment: `#` followed by URL-safe chars (letters, digits,
      // `-`, `_`, `.`, `/`). Reject things like a bare trailing `#` or
      // `#` followed by whitespace.
      if (!/^#[A-Za-z0-9._\-\/]+$/.test(parsed.hash)) {
        out.push({
          severity: 'error',
          message: `${fieldPath} fragment is malformed: ${id}`,
        });
      }
    }
    // Trailing `/` immediately before a fragment on a deep PATH is
    // suspicious — `.../tools/#foo` vs `.../tools#foo`. But on a bare
    // root URL, `https://host/#fragment` IS the canonical form (matches
    // shared contracts §2.1–§2.4 exactly, e.g.
    // `https://www.vastucart.in/#organization`). Only flag when the
    // path before `#` is deeper than a single `/`.
    if (/^https:\/\/[^/]+\/[^#?]+\/(#[^/]+)$/.test(id)) {
      out.push({
        severity: 'warning',
        message: `${fieldPath} has trailing slash before fragment on a deep path: ${id}`,
      });
    }
  } catch {
    // Already flagged by checkUrl.
  }

  return out;
}

export function checkUrlShape(node: unknown): UrlIssue[] {
  const issues: UrlIssue[] = [];
  const walk = (v: unknown, path: string[]): void => {
    if (typeof v === 'string') {
      // The @id special-cases through checkIdShape; other URL-bearing
      // fields go through checkUrl.
      const last = path[path.length - 1];
      if (!last) return;
      if (last === '@id') {
        issues.push(...checkIdShape(v, path.join('.')));
      } else if (URL_FIELDS.has(last)) {
        issues.push(...checkUrl(v, path.join('.')));
      }
      return;
    }
    if (Array.isArray(v)) {
      v.forEach((item, i) => walk(item, [...path.slice(0, -1), `${path[path.length - 1] ?? ''}[${i}]`]));
      return;
    }
    if (v && typeof v === 'object') {
      for (const [k, val] of Object.entries(v as Record<string, unknown>)) {
        walk(val, [...path, k]);
      }
    }
  };
  walk(node, []);
  return issues;
}
