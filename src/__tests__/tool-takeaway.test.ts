import { describe, it, expect } from "vitest"
import { readFileSync, readdirSync, statSync } from "node:fs"
import { join } from "node:path"
import { TOOL_TAKEAWAYS, getTakeaway } from "../lib/tools/takeaway"

/**
 * The short answer on every calculator page.
 *
 * Someone arrives from a search with one question. The calculator answers it only after they have found
 * their birth time and typed it in, and a reader who wanted to know what a mahadasha is leaves without an
 * answer. Search engines and AI assistants have the same problem: a page that is mostly a form has nothing
 * to quote, so it gets ranked but not cited.
 *
 * So every tool page carries a short block that answers its own question in plain words, visible to
 * everyone, identical in the HTML for every visitor, and repeated in the structured data. These tests hold
 * the parts of that which can be checked mechanically: that it exists everywhere, that it is written rather
 * than generated, that it uses the words people actually search where those words honestly fit, and that
 * nothing is shown to a crawler that is not shown to a reader.
 */

const TOOLS_DIR = join(process.cwd(), "src/app/[locale]/tools")
const NOT_CALCULATORS = new Set(["category", "[slug]"])

function calculatorSlugs(): string[] {
  return readdirSync(TOOLS_DIR)
    .filter((n) => !NOT_CALCULATORS.has(n) && statSync(join(TOOLS_DIR, n)).isDirectory())
    .filter((n) => {
      try { return statSync(join(TOOLS_DIR, n, "page.tsx")).isFile() } catch { return false }
    })
    .sort()
}

const pageSource = (slug: string) => readFileSync(join(TOOLS_DIR, slug, "page.tsx"), "utf8")

// Machine-generated prose has tells. These are the ones that would make the block read as filler
// rather than as an answer, and the dashes are a house rule for every piece of UI copy on the site.
const FILLER = /\b(unlock|elevate|seamless|harness the power|delve|robust solution|in today's world|look no further)\b/i
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/u
const DASHES = /[–—]/

describe("every calculator page has a short answer", () => {
  it("covers every calculator, with nothing left over", () => {
    const slugs = calculatorSlugs()
    expect(slugs.length).toBeGreaterThan(25)
    const missing = slugs.filter((s) => !TOOL_TAKEAWAYS[s])
    expect(missing, `these calculators have no short answer written for them: ${missing.join(", ")}`).toEqual([])
    const orphans = Object.keys(TOOL_TAKEAWAYS).filter((s) => !slugs.includes(s))
    expect(orphans, `these have a short answer but no page: ${orphans.join(", ")}`).toEqual([])
  })

  it("renders on every calculator page, from the page itself", () => {
    const notWired = calculatorSlugs().filter((s) => !/<ToolTakeaway\b/.test(pageSource(s)))
    expect(notWired, `these pages do not render it: ${notWired.join(", ")}`).toEqual([])
  })

  it("is server-rendered, so the text is in the HTML for every visitor and every crawler", () => {
    const src = readFileSync(join(process.cwd(), "src/components/tools/tool-takeaway.tsx"), "utf8")
    expect(src).not.toMatch(/^\s*['"]use client['"]/m)
    expect(src).not.toMatch(/useState|useEffect|new Date\(\)/)
  })
})

describe("the copy is written, not padded", () => {
  for (const [slug, entry] of Object.entries(TOOL_TAKEAWAYS)) {
    for (const locale of ["en", "hi"] as const) {
      it(`${slug} (${locale}): a real lead sentence and three facts`, () => {
        const t = entry[locale]
        expect(t.lead.length, `lead is ${t.lead.length} characters`).toBeGreaterThanOrEqual(80)
        expect(t.lead.length).toBeLessThanOrEqual(340)
        expect(t.lead.trim()).toMatch(/[.?।]$/)
        expect(t.lead).not.toMatch(/\s{2,}/)
        expect(t.facts).toHaveLength(3)
        for (const f of t.facts) {
          expect(f.label.trim().length).toBeGreaterThan(2)
          expect(f.value.trim().length).toBeGreaterThan(8)
          expect(f.value.length).toBeLessThanOrEqual(130)
        }
      })

      it(`${slug} (${locale}): no emoji, no dashes, no filler`, () => {
        const all = [t_(entry, locale).lead, ...t_(entry, locale).facts.flatMap((f) => [f.label, f.value])].join(" ")
        expect(EMOJI.test(all), "contains an emoji").toBe(false)
        expect(DASHES.test(all), "contains an em or en dash").toBe(false)
        expect(FILLER.test(all), `contains filler: ${all.match(FILLER)?.[0]}`).toBe(false)
      })
    }

    it(`${slug}: the Hindi is Hindi, and not a copy of the English`, () => {
      expect(entry.hi.lead).not.toBe(entry.en.lead)
      expect(entry.hi.lead, "no Devanagari in the Hindi lead").toMatch(/[ऀ-ॿ]/)
      for (const f of entry.hi.facts) expect(f.label).toMatch(/[ऀ-ॿ]/)
    })

    it(`${slug}: uses the phrase people actually search, where one honestly fits`, () => {
      if (!entry.searchedPhrase) return // no query in the export truthfully describes this tool
      const hay = [entry.en.lead, ...entry.en.facts.map((f) => f.value)].join(" ").toLowerCase()
      expect(hay, `"${entry.searchedPhrase}" appears nowhere in the English copy`).toContain(
        entry.searchedPhrase.toLowerCase()
      )
    })

    it(`${slug}: says the phrase once, not three times`, () => {
      if (!entry.searchedPhrase) return
      const hay = [entry.en.lead, ...entry.en.facts.map((f) => f.value)].join(" ").toLowerCase()
      const times = hay.split(entry.searchedPhrase.toLowerCase()).length - 1
      expect(times, `"${entry.searchedPhrase}" repeated ${times} times`).toBeLessThanOrEqual(2)
    })
  }
})

describe("what the crawler is given matches what the reader is shown", () => {
  it("the structured data carries the same lead text, under a name built for machines", () => {
    const graph = readFileSync(join(process.cwd(), "src/components/seo/entity-graph.tsx"), "utf8")
    expect(graph).toMatch(/buildTldrNode/)
    expect(graph).toMatch(/#tldr/)
  })

  it("the spoken-answer hint points at an element that now exists on the page", () => {
    const graph = readFileSync(join(process.cwd(), "src/components/seo/entity-graph.tsx"), "utf8")
    const block = graph.slice(graph.indexOf("export function ToolPageEntityGraph"))
    const call = block.slice(block.indexOf("buildSpeakableNode"))
    const speakable = call.slice(0, call.indexOf("}),") + 3)
    expect(speakable).toContain("cssSelectors")
    expect(speakable, "the speakable hint does not mention the short-answer block").toContain("'#tldr'")
  })

  it("getTakeaway falls back to English rather than showing a reader nothing", () => {
    const slug = Object.keys(TOOL_TAKEAWAYS)[0]
    expect(getTakeaway(slug, "hi")).toBe(TOOL_TAKEAWAYS[slug].hi)
    expect(getTakeaway(slug, "mr" as "en")).toBe(TOOL_TAKEAWAYS[slug].en)
    expect(getTakeaway("not-a-tool", "en")).toBeNull()
  })
})

function t_(entry: (typeof TOOL_TAKEAWAYS)[string], locale: "en" | "hi") {
  return entry[locale]
}

/**
 * The same words in the snippet as on the page.
 *
 * A search result is a title and two lines of description, and if the phrase somebody typed appears in
 * neither, the result reads as not quite what they asked for and they scroll past it. This checks that
 * every tool with a real searched phrase carries it where a searcher can see it, in the title or the
 * description, and not only in the body of the page.
 *
 * It reads the same values the page reads: the message file for pages whose metadata comes from
 * translations, and the page source for the few that hard-code it.
 */
describe("the search snippet carries the phrase people typed", () => {
  const en = JSON.parse(readFileSync(join(process.cwd(), "src/i18n/messages/en.json"), "utf8"))

  const dig = (root: unknown, path: string) =>
    path.split(".").reduce<unknown>((cur, seg) => (cur && typeof cur === "object" ? (cur as Record<string, unknown>)[seg] : undefined), root)

  function snippetTextFor(slug: string): string {
    const src = pageSource(slug)
    const parts: string[] = []
    for (const ns of src.match(/namespace:\s*['"]([^'"]+)['"]/g) ?? []) {
      const name = ns.replace(/.*['"]([^'"]+)['"].*/, "$1")
      const node = dig(en, name) as Record<string, unknown> | undefined
      if (!node) continue
      // Only the keys this page actually reads. Including the others made the test pass for pages
      // whose unused `description` held the phrase while the `meta.description` they really emit did
      // not, which is a test agreeing with itself rather than with the page.
      for (const key of ["meta.title", "meta.description", "description", "metaDescription"]) {
        if (!new RegExp(`t\\(\\s*['"]${key.replace(".", "\\.")}['"]`).test(src)) continue
        const v = dig(node, key)
        if (typeof v === "string") parts.push(v)
      }
    }
    // Pages that hard-code their metadata rather than translating it.
    for (const m of src.matchAll(/^\s*(?:const\s+)?(?:title|description)\s*[:=][\s\S]{0,400}?;/gm)) parts.push(m[0])
    return parts.join(" ").toLowerCase()
  }

  for (const [slug, entry] of Object.entries(TOOL_TAKEAWAYS)) {
    if (!entry.searchedPhrase) continue
    it(`${slug}: "${entry.searchedPhrase}" appears in the title or description`, () => {
      expect(snippetTextFor(slug)).toContain(entry.searchedPhrase!.toLowerCase())
    })
  }
})
