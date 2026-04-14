/**
 * Legacy stub — most of what used to live here has migrated to
 * `src/components/seo/entity-graph.tsx`, which emits a single `@graph` per
 * page instead of many individual `<script>` tags.
 *
 * The only thing left here is `SameAsLinks`, which renders hidden cross-site
 * anchor tags that reinforce the brand entity for search crawlers. It is
 * rendered once from the locale layout and is not related to JSON-LD.
 */

import { BRAND_CONFIG } from '@/config/seo';

/**
 * Hidden semantic links for search engines. Reinforces sameAs relationships
 * visible on the Organization graph node.
 */
export function SameAsLinks() {
  return (
    <div className="hidden" aria-hidden="true">
      {BRAND_CONFIG.sameAs.map((link) => (
        <a key={link} href={link} rel="me nofollow" />
      ))}
    </div>
  );
}
