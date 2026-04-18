/**
 * URL-shape checks applied to every `url`, `contentUrl`, `item`, and
 * `sameAs` string encountered in a JSON-LD node. These are structural
 * issues that wouldn't fail a schema.org validator but *would* break
 * Google Rich Results or create indexation ambiguity.
 */

export type UrlIssue = {
  severity: 'error' | 'warning';
  message: string;
};

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

function isUrlLike(key: string): boolean {
  return URL_FIELDS.has(key);
}

function check(value: string, field: string): UrlIssue[] {
  const out: UrlIssue[] = [];
  if (!value.startsWith('https://') && !value.startsWith('http://')) {
    // Relative URLs are disallowed in JSON-LD @ids and canonical URL fields.
    out.push({
      severity: 'error',
      message: `${field} is not absolute https:// URL: ${value}`,
    });
    return out;
  }
  if (value.startsWith('http://')) {
    out.push({
      severity: 'error',
      message: `${field} uses http:// (not https): ${value}`,
    });
  }
  if (value.includes('/en/') || /\/en(\/?|#|\?)/.test(new URL(value).pathname)) {
    // The /en prefix is not canonical for this project (English is bare).
    out.push({
      severity: 'error',
      message: `${field} contains /en/ prefix (canonical form is bare): ${value}`,
    });
  }
  if (/\s/.test(value)) {
    out.push({ severity: 'error', message: `${field} contains whitespace: ${value}` });
  }
  if (value.endsWith('/#') || value.endsWith('/')) {
    // Not strictly wrong, but inconsistent with canonical form — surface as warning.
    if (!value.endsWith('.in/') && !value.endsWith('.com/') && !value.endsWith('.org/')) {
      // allow root-domain trailing slash; warn on path trailing slash
      if (!/^https:\/\/[^/]+\/$/.test(value)) {
        out.push({
          severity: 'warning',
          message: `${field} ends with trailing slash or stray '#': ${value}`,
        });
      }
    }
  }
  return out;
}

export function checkUrlShape(node: unknown): UrlIssue[] {
  const issues: UrlIssue[] = [];
  const walk = (v: unknown, parentKey: string | null): void => {
    if (typeof v === 'string' && parentKey && isUrlLike(parentKey)) {
      issues.push(...check(v, parentKey));
      return;
    }
    if (Array.isArray(v)) {
      for (const item of v) walk(item, parentKey);
      return;
    }
    if (v && typeof v === 'object') {
      for (const [k, val] of Object.entries(v as Record<string, unknown>)) {
        if (k === '@id' && typeof val === 'string') {
          // @id is URL-checked separately in id-integrity.ts; skip here.
          continue;
        }
        walk(val, k);
      }
    }
  };
  walk(node, null);
  return issues;
}
