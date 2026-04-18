/**
 * Fixture registry — one entry per builder in src/components/seo/entity-graph.tsx
 * (current location) or src/lib/schema/*.ts (future canonical location per
 * shared contracts §5.5). Future builders land in this registry alongside
 * a fixture file.
 */

import { organizationFixture } from './organization';
import { websiteFixture } from './website';
import { webpageFixture } from './webpage';
import { breadcrumbListFixture } from './breadcrumb-list';
import { imageObjectFixture } from './image-object';
import { speakableFixture } from './speakable';
import { authorFixture } from './author';
import { webApplicationFixture } from './web-application';
import { faqPageFixture } from './faq-page';
import { blogPostingFixture } from './blog-posting';
import { articleFixture } from './article';
import { itemListFixture } from './item-list';

export interface BuilderFixture {
  builderName: string;
  nodeType: string;
  alwaysEmits: boolean;
  /** Source file (absolute from repo root) that exports this builder. */
  sourceFile: string;
  full: { input: unknown };
  missingRequired?: { input: unknown };
}

export const FIXTURES: BuilderFixture[] = [
  { ...organizationFixture, sourceFile: 'src/components/seo/entity-graph.tsx' },
  { ...websiteFixture, sourceFile: 'src/components/seo/entity-graph.tsx' },
  { ...webpageFixture, sourceFile: 'src/components/seo/entity-graph.tsx' },
  { ...breadcrumbListFixture, sourceFile: 'src/components/seo/entity-graph.tsx' },
  { ...imageObjectFixture, sourceFile: 'src/components/seo/entity-graph.tsx' },
  { ...speakableFixture, sourceFile: 'src/components/seo/entity-graph.tsx' },
  { ...authorFixture, sourceFile: 'src/components/seo/entity-graph.tsx' },
  { ...webApplicationFixture, sourceFile: 'src/components/seo/entity-graph.tsx' },
  { ...faqPageFixture, sourceFile: 'src/components/seo/entity-graph.tsx' },
  { ...blogPostingFixture, sourceFile: 'src/components/seo/entity-graph.tsx' },
  { ...articleFixture, sourceFile: 'src/components/seo/entity-graph.tsx' },
  { ...itemListFixture, sourceFile: 'src/components/seo/entity-graph.tsx' },
];
