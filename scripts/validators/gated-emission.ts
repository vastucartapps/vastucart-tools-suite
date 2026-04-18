/**
 * Gated-emission check.
 *
 * Shared contracts §5.1 requires some schema types to be skipped entirely
 * (builder returns null) when the underlying data is incomplete — no
 * empty arrays, no placeholder strings, no stub objects.
 *
 * Per shared contracts §5.1, the types that MUST gate are:
 *   Recipe, PodcastEpisode, AudioObject, Product, AggregateRating, Review,
 *   Event, LiveBlogPosting, Dataset, ClaimReview, Course, LearningResource.
 *
 * Types that must always emit (never gate):
 *   Organization, WebSite, WebPage, BreadcrumbList, CollectionPage, Brand.
 *
 * For each builder fixture pair:
 *   - `full`: builder must return non-null with non-empty required fields.
 *   - `missing-required`: for gated types, builder must return null.
 *                          for always-emit types, this case is N/A.
 */

export type GateIssue = {
  severity: 'error' | 'warning';
  message: string;
};

const MUST_GATE = new Set([
  'Recipe',
  'PodcastEpisode',
  'AudioObject',
  'Product',
  'AggregateRating',
  'Review',
  'Event',
  'LiveBlogPosting',
  'Dataset',
  'ClaimReview',
  'Course',
  'LearningResource',
  'FAQPage',
]);

const MUST_ALWAYS_EMIT = new Set([
  'Organization',
  'WebSite',
  'WebPage',
  'BreadcrumbList',
  'CollectionPage',
  'Brand',
]);

function extractType(node: unknown): string | null {
  if (!node || typeof node !== 'object') return null;
  const t = (node as Record<string, unknown>)['@type'];
  if (typeof t === 'string') return t;
  if (Array.isArray(t) && typeof t[0] === 'string') return t[0];
  return null;
}

export function checkGate(
  nodeType: string | null,
  fixtureKind: 'full' | 'missing-required',
  result: unknown,
): GateIssue[] {
  const issues: GateIssue[] = [];
  if (fixtureKind === 'full') {
    if (result === null || result === undefined) {
      issues.push({
        severity: 'error',
        message: `Builder returned null on a "full" fixture — required fields should all be present.`,
      });
      return issues;
    }
    // Empty-string / empty-array detection within the emitted node
    const emptyFields = findEmptyRequiredFields(result);
    if (emptyFields.length > 0) {
      for (const f of emptyFields) {
        issues.push({
          severity: 'error',
          message: `Emitted node has empty or placeholder value at: ${f}`,
        });
      }
    }
    return issues;
  }

  // fixtureKind === 'missing-required'
  const type = nodeType ?? extractType(result);
  if (!type) return issues;

  if (MUST_GATE.has(type)) {
    if (result !== null && result !== undefined) {
      issues.push({
        severity: 'error',
        message: `Type "${type}" must return null when required data is missing (shared contracts §5.1), but builder emitted a node.`,
      });
    }
  }
  if (MUST_ALWAYS_EMIT.has(type)) {
    if (result === null || result === undefined) {
      issues.push({
        severity: 'error',
        message: `Type "${type}" must always emit (shared contracts §5.1) — builder returned null.`,
      });
    }
  }
  return issues;
}

function findEmptyRequiredFields(node: unknown, path: string = ''): string[] {
  const out: string[] = [];
  if (Array.isArray(node)) {
    node.forEach((v, i) => out.push(...findEmptyRequiredFields(v, `${path}[${i}]`)));
    return out;
  }
  if (!node || typeof node !== 'object') return out;
  for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
    const p = path ? `${path}.${k}` : k;
    if (typeof v === 'string' && v.trim().length === 0) {
      out.push(`${p} (empty string)`);
      continue;
    }
    if (Array.isArray(v) && v.length === 0 && isRequiredArrayField(k)) {
      out.push(`${p} (empty array)`);
      continue;
    }
    out.push(...findEmptyRequiredFields(v, p));
  }
  return out;
}

function isRequiredArrayField(key: string): boolean {
  // These fields are considered required-non-empty when present in a node.
  // mainEntity, itemListElement, sameAs (when emitted) — empty arrays are
  // either a gating failure or a content bug.
  return ['mainEntity', 'itemListElement', 'hasDefinedTerm', 'step'].includes(key);
}
