#!/usr/bin/env node
/**
 * Schema validation runner.
 *
 * Runs per shared contracts §5.6. Gates CI on new/modified JSON-LD builder
 * emissions. Existing site schema is out of scope for the gate — it's only
 * surfaced as diagnostic output when `--full` is passed.
 *
 * Usage:
 *   npm run validate:schema                 # diff-scope, exits 1 on errors
 *   npm run validate:schema -- --full       # full-scope diagnostic, same exit rules
 *
 * Environment:
 *   CI=1  → emit GitHub Actions Job Summary alongside terminal table
 */

import { execSync } from 'node:child_process';
import { appendFileSync, writeFileSync, existsSync } from 'node:fs';
import { relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { FIXTURES, type BuilderFixture } from './fixtures';
import { CONCEPT_FIXTURES } from './fixtures/concept';
import { CONCEPT_HUB_FIXTURE } from './fixtures/concept-hub';
import { checkIdIntegrity } from './validators/id-integrity';
import { checkUrlShape } from './validators/url-shape';
import { checkGate } from './validators/gated-emission';
import { checkSynthetic } from './validators/synthetic-data';

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const argv = process.argv.slice(2);
const fullScope = argv.includes('--full');
const githubSummaryFile = process.env.GITHUB_STEP_SUMMARY;

// ---------------------------------------------------------------------------
// Scope: which builders to validate
// ---------------------------------------------------------------------------

function changedFiles(): Set<string> {
  try {
    const out = execSync('git diff --name-only origin/main...HEAD', {
      encoding: 'utf8',
    });
    return new Set(out.split('\n').filter(Boolean));
  } catch {
    // origin/main may not exist locally (shallow clone, detached) — fall back
    // to comparing against HEAD~1.
    try {
      const out = execSync('git diff --name-only HEAD~1...HEAD', { encoding: 'utf8' });
      return new Set(out.split('\n').filter(Boolean));
    } catch {
      return new Set();
    }
  }
}

function shouldValidate(fixture: BuilderFixture, changed: Set<string>): boolean {
  if (fullScope) return true;
  return changed.has(fixture.sourceFile);
}

// ---------------------------------------------------------------------------
// Builder resolution
// ---------------------------------------------------------------------------

type BuilderFn = (input?: unknown) => unknown;

async function resolveBuilder(fixture: BuilderFixture): Promise<BuilderFn | null> {
  // Current location. When Bundle B migrates builders to `lib/schema/*.ts`,
  // this resolver grows a second lookup branch.
  if (fixture.sourceFile === 'src/components/seo/entity-graph.tsx') {
    const mod = await import('@/components/seo/entity-graph');
    const fn = (mod as unknown as Record<string, unknown>)[fixture.builderName];
    if (typeof fn === 'function') return fn as BuilderFn;
    return null;
  }
  if (fixture.sourceFile.startsWith('src/lib/schema/')) {
    // Dynamic import for future Bundle B relocation. Example path:
    // src/lib/schema/organization.ts → @/lib/schema/organization
    const modulePath = fixture.sourceFile
      .replace(/^src\//, '@/')
      .replace(/\.tsx?$/, '');
    const mod = await import(modulePath);
    const fn = (mod as unknown as Record<string, unknown>)[fixture.builderName];
    if (typeof fn === 'function') return fn as BuilderFn;
    return null;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Validation pipeline for a single builder
// ---------------------------------------------------------------------------

interface ValidationRow {
  file: string;
  builder: string;
  nodeType: string;
  errors: string[];
  warnings: string[];
  synthetic: string[];
}

async function validateFixture(fixture: BuilderFixture): Promise<ValidationRow> {
  const row: ValidationRow = {
    file: fixture.sourceFile,
    builder: fixture.builderName,
    nodeType: fixture.nodeType,
    errors: [],
    warnings: [],
    synthetic: [],
  };

  const builder = await resolveBuilder(fixture);
  if (!builder) {
    row.errors.push(`Builder ${fixture.builderName} not found in ${fixture.sourceFile}`);
    return row;
  }

  // --- FULL FIXTURE ---
  let fullResult: unknown = null;
  try {
    fullResult = fixture.full.input === undefined
      ? (builder as () => unknown)()
      : (builder as (x: unknown) => unknown)(fixture.full.input);
  } catch (e) {
    row.errors.push(`Builder threw on full fixture: ${(e as Error).message}`);
    return row;
  }

  // Gated-emission check (full)
  for (const issue of checkGate(fixture.nodeType, 'full', fullResult)) {
    if (issue.severity === 'error') row.errors.push(`[gate/full] ${issue.message}`);
    else row.warnings.push(`[gate/full] ${issue.message}`);
  }

  if (fullResult !== null && fullResult !== undefined) {
    // @id integrity
    for (const issue of checkIdIntegrity(fullResult)) {
      if (issue.severity === 'error') row.errors.push(`[id] ${issue.message}`);
      else row.warnings.push(`[id] ${issue.message}`);
    }
    // URL shape
    for (const issue of checkUrlShape(fullResult)) {
      if (issue.severity === 'error') row.errors.push(`[url] ${issue.message}`);
      else row.warnings.push(`[url] ${issue.message}`);
    }
    // Synthetic-data sniff
    for (const flag of checkSynthetic(fullResult)) {
      row.synthetic.push(flag.message);
    }
  }

  // --- MISSING-REQUIRED FIXTURE ---
  if (fixture.missingRequired !== undefined) {
    let mrResult: unknown = null;
    try {
      mrResult = fixture.missingRequired.input === undefined
        ? (builder as () => unknown)()
        : (builder as (x: unknown) => unknown)(fixture.missingRequired.input);
    } catch (e) {
      // Some builders will throw on bad input — that's acceptable for gated types
      // as long as production callers are gated upstream. Don't flag.
      mrResult = null;
    }

    // For gated types: must return null. For always-emit types: empty fields flagged.
    for (const issue of checkGate(fixture.nodeType, 'missing-required', mrResult)) {
      if (issue.severity === 'error') row.errors.push(`[gate/missing] ${issue.message}`);
      else row.warnings.push(`[gate/missing] ${issue.message}`);
    }
  }

  return row;
}

// ---------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------

function renderTable(rows: ValidationRow[]): string {
  const lines: string[] = [];
  lines.push(
    '| File | Builder | Node type | Errors | Warnings | Synthetic flags |',
  );
  lines.push(
    '|------|---------|-----------|--------|----------|------------------|',
  );
  for (const r of rows) {
    const f = r.file;
    const b = r.builder;
    const t = r.nodeType;
    const e = r.errors.length === 0 ? '—' : `**${r.errors.length}** — ${r.errors.map(x => x.replace(/\|/g, '\\|')).join('<br>')}`;
    const w = r.warnings.length === 0 ? '—' : `${r.warnings.length} — ${r.warnings.map(x => x.replace(/\|/g, '\\|')).join('<br>')}`;
    const s = r.synthetic.length === 0 ? '—' : `${r.synthetic.length} — ${r.synthetic.map(x => x.replace(/\|/g, '\\|')).join('<br>')}`;
    lines.push(`| \`${f}\` | \`${b}\` | ${t} | ${e} | ${w} | ${s} |`);
  }
  return lines.join('\n');
}

function renderTerminal(rows: ValidationRow[]): string {
  const lines: string[] = [];
  for (const r of rows) {
    const statusIcon = r.errors.length > 0 ? '✗' : r.warnings.length > 0 ? '!' : '✓';
    lines.push(`${statusIcon} ${r.builder} (${r.nodeType}) — ${r.file}`);
    for (const e of r.errors) lines.push(`    ERROR: ${e}`);
    for (const w of r.warnings) lines.push(`    WARN:  ${w}`);
    for (const s of r.synthetic) lines.push(`    SYNTH: ${s}`);
  }
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const CONCEPT_TRIGGER_FILES = [
  'src/components/seo/concept-graph.tsx',
  'src/lib/concept-ids.ts',
  'src/lib/concepts.ts',
];

function shouldValidateConcepts(changed: Set<string>): boolean {
  if (fullScope) return true;
  for (const f of changed) {
    if (f.startsWith('content/concepts/')) return true;
    if (CONCEPT_TRIGGER_FILES.includes(f)) return true;
  }
  return false;
}

async function validateHubFixture(): Promise<ValidationRow> {
  const row: ValidationRow = {
    file: 'src/components/seo/concept-graph.tsx',
    builder: 'buildHubGraphNodes',
    nodeType: 'ConceptsHub',
    errors: [],
    warnings: [],
    synthetic: [],
  };

  const { buildHubGraphNodes } = await import('@/components/seo/concept-graph');
  const { loadAllConcepts, CATEGORY_ORDER, getConceptsByCategoryOrdered } = await import(
    '@/lib/concepts'
  );

  // Assemble in the same category-then-canonical order the page uses
  const ordered = CATEGORY_ORDER.flatMap((cat: string) =>
    getConceptsByCategoryOrdered(cat as Parameters<typeof getConceptsByCategoryOrdered>[0]),
  );
  const all = loadAllConcepts();

  if (all.length !== CONCEPT_HUB_FIXTURE.expectedTotalConcepts) {
    row.errors.push(
      `Concept corpus size ${all.length} ≠ expected ${CONCEPT_HUB_FIXTURE.expectedTotalConcepts}`,
    );
  }

  let nodes: Array<Record<string, unknown>> = [];
  try {
    nodes = buildHubGraphNodes(ordered, 'en');
  } catch (e) {
    row.errors.push(`buildHubGraphNodes threw: ${(e as Error).message}`);
    return row;
  }

  const byType = (t: string) => nodes.find((n) => n['@type'] === t);
  const collection = byType('CollectionPage');
  const itemList = byType('ItemList');

  if (!collection) {
    row.errors.push('No CollectionPage emitted');
  } else {
    if (collection['@id'] !== CONCEPT_HUB_FIXTURE.expectedCollectionPageId) {
      row.errors.push(
        `CollectionPage @id ${collection['@id']} ≠ expected ${CONCEPT_HUB_FIXTURE.expectedCollectionPageId}`,
      );
    }
    const author = collection['author'] as { '@id'?: string } | undefined;
    if (author?.['@id'] !== CONCEPT_HUB_FIXTURE.expectedAuthorId) {
      row.errors.push(
        `CollectionPage.author @id ${author?.['@id']} ≠ expected ${CONCEPT_HUB_FIXTURE.expectedAuthorId} ` +
          `(hub is editorial per §2.2)`,
      );
    }
    if (collection['url'] !== CONCEPT_HUB_FIXTURE.expectedPageUrl) {
      row.errors.push(
        `CollectionPage.url ${collection['url']} ≠ expected ${CONCEPT_HUB_FIXTURE.expectedPageUrl}`,
      );
    }
  }

  if (!itemList) {
    row.errors.push('No ItemList emitted');
  } else {
    if (itemList['@id'] !== CONCEPT_HUB_FIXTURE.expectedItemListId) {
      row.errors.push(
        `ItemList @id ${itemList['@id']} ≠ expected ${CONCEPT_HUB_FIXTURE.expectedItemListId}`,
      );
    }
    const items = (itemList['itemListElement'] as Array<Record<string, unknown>>) ?? [];
    if (itemList['numberOfItems'] !== CONCEPT_HUB_FIXTURE.expectedTotalConcepts) {
      row.errors.push(
        `ItemList.numberOfItems ${itemList['numberOfItems']} ≠ expected ${CONCEPT_HUB_FIXTURE.expectedTotalConcepts}`,
      );
    }
    if (items.length !== CONCEPT_HUB_FIXTURE.expectedTotalConcepts) {
      row.errors.push(
        `ItemList.itemListElement length ${items.length} ≠ expected ${CONCEPT_HUB_FIXTURE.expectedTotalConcepts}`,
      );
    }
    // URL-shape tally — 16 nested, 122 flat
    let flat = 0;
    let nested = 0;
    for (const it of items) {
      const url = String(it['url'] ?? '');
      if (url.includes('/concepts/tithi/')) nested++;
      else if (url.startsWith('https://www.vastucart.in/concepts/')) flat++;
      else row.errors.push(`ListItem with out-of-shape url: ${url}`);
      const innerItemRef = (it['item'] as { '@id'?: string } | undefined)?.['@id'];
      if (!innerItemRef || !innerItemRef.endsWith('#entity')) {
        row.errors.push(`ListItem.item missing #entity @id ref: ${JSON.stringify(it['item'])}`);
      }
    }
    if (flat !== CONCEPT_HUB_FIXTURE.expectedFlatConcepts) {
      row.errors.push(
        `Flat-path ListItem count ${flat} ≠ expected ${CONCEPT_HUB_FIXTURE.expectedFlatConcepts}`,
      );
    }
    if (nested !== CONCEPT_HUB_FIXTURE.expectedNestedConcepts) {
      row.errors.push(
        `Nested-path ListItem count ${nested} ≠ expected ${CONCEPT_HUB_FIXTURE.expectedNestedConcepts}`,
      );
    }
  }

  // DefinedTermSet nodes — both nakshatra-set and tithi-set must be emitted
  const termSets = nodes.filter((n) => n['@type'] === 'DefinedTermSet');
  const nakshatraSet = termSets.find(
    (n) => n['@id'] === CONCEPT_HUB_FIXTURE.expectedNakshatraSetId,
  );
  const tithiSet = termSets.find((n) => n['@id'] === CONCEPT_HUB_FIXTURE.expectedTithiSetId);
  if (!nakshatraSet) {
    row.errors.push(
      `No DefinedTermSet emitted for nakshatra-set (${CONCEPT_HUB_FIXTURE.expectedNakshatraSetId})`,
    );
  } else {
    const members = (nakshatraSet['hasDefinedTerm'] as Array<Record<string, unknown>>) ?? [];
    if (members.length !== CONCEPT_HUB_FIXTURE.expectedNakshatraMembers) {
      row.errors.push(
        `nakshatra-set hasDefinedTerm count ${members.length} ≠ expected ${CONCEPT_HUB_FIXTURE.expectedNakshatraMembers}`,
      );
    }
  }
  if (!tithiSet) {
    row.errors.push(
      `No DefinedTermSet emitted for tithi-set (${CONCEPT_HUB_FIXTURE.expectedTithiSetId})`,
    );
  } else {
    const members = (tithiSet['hasDefinedTerm'] as Array<Record<string, unknown>>) ?? [];
    if (members.length !== CONCEPT_HUB_FIXTURE.expectedTithiMembers) {
      row.errors.push(
        `tithi-set hasDefinedTerm count ${members.length} ≠ expected ${CONCEPT_HUB_FIXTURE.expectedTithiMembers}`,
      );
    }
  }

  // Structural validators on the whole graph
  const payload = { '@context': 'https://schema.org', '@graph': nodes };
  for (const issue of checkIdIntegrity(payload)) {
    if (issue.severity === 'error') row.errors.push(`[id] ${issue.message}`);
    else row.warnings.push(`[id] ${issue.message}`);
  }
  for (const issue of checkUrlShape(payload)) {
    if (issue.severity === 'error') row.errors.push(`[url] ${issue.message}`);
    else row.warnings.push(`[url] ${issue.message}`);
  }

  return row;
}

async function validateConceptFixtures(): Promise<ValidationRow[]> {
  const { buildConceptGraphNodes } = await import('@/components/seo/concept-graph');
  const { loadConcept } = await import('@/lib/concepts');

  const rows: ValidationRow[] = [];
  for (const fixture of CONCEPT_FIXTURES) {
    const row: ValidationRow = {
      file: 'src/components/seo/concept-graph.tsx',
      builder: `buildConceptGraphNodes[${fixture.category}]`,
      nodeType: 'ConceptGraph',
      errors: [],
      warnings: [],
      synthetic: [],
    };

    const concept = loadConcept(fixture.slug);
    if (!concept) {
      row.errors.push(`loadConcept('${fixture.slug}') returned null`);
      rows.push(row);
      continue;
    }
    if (concept.category !== fixture.category) {
      row.errors.push(
        `Concept '${fixture.slug}' has category '${concept.category}', expected '${fixture.category}'`,
      );
    }

    let nodes: Array<Record<string, unknown>> = [];
    try {
      // buildConceptGraphNodes may include null entries for nodes that
      // are conditionally emitted (e.g., FAQPage only for rashi/nakshatra).
      // Strip nulls before validating @id resolution.
      const raw = buildConceptGraphNodes(concept, 'en');
      nodes = raw.filter((n): n is Record<string, unknown> => Boolean(n));
    } catch (e) {
      row.errors.push(`buildConceptGraphNodes threw: ${(e as Error).message}`);
      rows.push(row);
      continue;
    }

    // Verify expected @id resolution
    const definedTerm = nodes.find((n) => n['@type'] === 'DefinedTerm');
    if (!definedTerm) {
      row.errors.push('No DefinedTerm node emitted');
    } else {
      if (definedTerm['@id'] !== fixture.expectedEntityId) {
        row.errors.push(
          `DefinedTerm @id ${definedTerm['@id']} ≠ expected ${fixture.expectedEntityId}`,
        );
      }
      const expectedTermSet = fixture.expectedTermSetId;
      const actualTermSet = definedTerm['inDefinedTermSet'];
      if (expectedTermSet !== null && actualTermSet !== expectedTermSet) {
        row.errors.push(
          `DefinedTerm.inDefinedTermSet ${JSON.stringify(actualTermSet)} ≠ expected ${expectedTermSet}`,
        );
      }
      if (expectedTermSet === null && actualTermSet !== undefined) {
        row.errors.push(
          `DefinedTerm emitted unexpected inDefinedTermSet ${JSON.stringify(actualTermSet)}`,
        );
      }
    }

    const webPage = nodes.find((n) => n['@type'] === 'WebPage');
    if (!webPage) {
      row.errors.push('No WebPage node emitted');
    } else {
      if (webPage['url'] !== fixture.expectedPageUrl) {
        row.errors.push(
          `WebPage.url ${webPage['url']} ≠ expected ${fixture.expectedPageUrl}`,
        );
      }
      const author = webPage['author'] as { '@id'?: string } | undefined;
      if (author?.['@id'] !== fixture.expectedAuthorId) {
        row.errors.push(
          `WebPage.author @id ${author?.['@id']} ≠ expected ${fixture.expectedAuthorId} ` +
            `(category ${fixture.category} → author-assignment rule §2.2)`,
        );
      }
    }

    // Run structural validators on the whole graph
    const payload = { '@context': 'https://schema.org', '@graph': nodes };
    for (const issue of checkIdIntegrity(payload)) {
      if (issue.severity === 'error') row.errors.push(`[id] ${issue.message}`);
      else row.warnings.push(`[id] ${issue.message}`);
    }
    for (const issue of checkUrlShape(payload)) {
      if (issue.severity === 'error') row.errors.push(`[url] ${issue.message}`);
      else row.warnings.push(`[url] ${issue.message}`);
    }

    rows.push(row);
  }
  return rows;
}

async function main(): Promise<number> {
  const changed = changedFiles();

  const targets = FIXTURES.filter((f) => shouldValidate(f, changed));
  const runConcepts = shouldValidateConcepts(changed);

  if (targets.length === 0 && !runConcepts) {
    console.log(
      fullScope
        ? 'No fixtures registered.'
        : 'No builders in scope (no changes to builder source files vs origin/main).',
    );
    return 0;
  }

  console.log(
    `Validating ${targets.length} builder${targets.length === 1 ? '' : 's'}` +
      (runConcepts ? ` + ${CONCEPT_FIXTURES.length} concept fixture(s) + 1 hub fixture` : '') +
      (fullScope ? ' (full scope)' : ' (diff scope)'),
  );

  const rows: ValidationRow[] = [];
  for (const fixture of targets) {
    rows.push(await validateFixture(fixture));
  }
  if (runConcepts) {
    rows.push(...(await validateConceptFixtures()));
    rows.push(await validateHubFixture());
  }

  const totalErrors = rows.reduce((n, r) => n + r.errors.length, 0);
  const totalWarnings = rows.reduce((n, r) => n + r.warnings.length, 0);
  const totalSynthetic = rows.reduce((n, r) => n + r.synthetic.length, 0);

  const summary =
    `\nTotals: ${totalErrors} error(s), ${totalWarnings} warning(s), ${totalSynthetic} synthetic flag(s) across ${targets.length} builder(s).\n`;

  console.log('\n' + renderTerminal(rows));
  console.log(summary);

  // GitHub Actions Job Summary
  if (githubSummaryFile) {
    const md =
      `# Schema Validation\n\n` +
      `**Scope:** ${fullScope ? 'full' : 'diff (origin/main...HEAD)'}\n\n` +
      `**Totals:** ${totalErrors} error(s), ${totalWarnings} warning(s), ${totalSynthetic} synthetic flag(s)\n\n` +
      renderTable(rows) +
      '\n';
    try {
      appendFileSync(githubSummaryFile, md);
    } catch (e) {
      console.warn('Could not write GitHub summary:', (e as Error).message);
    }
  }

  return totalErrors > 0 ? 1 : 0;
}

main()
  .then((code) => process.exit(code))
  .catch((e) => {
    console.error(e);
    process.exit(2);
  });
