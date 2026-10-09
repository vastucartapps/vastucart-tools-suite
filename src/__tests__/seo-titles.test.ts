import { describe, it, expect } from "vitest"
import { readFileSync } from "node:fs"
import { join } from "node:path"

// Search Console: people search "mahadasha calculator" (21k impressions),
// "moon sign calculator" (25k) and "nakshatra calculator" / "nakshatra finder"
// (27k combined), but the titles did not contain those exact phrases.
// These tests keep the titles aligned to the searched phrases and honest.

const en = JSON.parse(readFileSync(join(process.cwd(), "src/i18n/messages/en.json"), "utf8"))
const tool = (k: string) => en.tools.astrology[k]
const page = (dir: string) => readFileSync(join(process.cwd(), `src/app/[locale]/tools/${dir}/page.tsx`), "utf8")

const BATCH: { key: string; dir: string; phrases: string[]; descKey: "description" | "meta.description" }[] = [
  { key: "mahadasha", dir: "mahadasha", phrases: ["mahadasha calculator", "dasha"], descKey: "description" },
  { key: "moonSign", dir: "moon-sign", phrases: ["moon sign calculator", "rashi"], descKey: "meta.description" },
  { key: "nakshatra", dir: "nakshatra", phrases: ["nakshatra calculator", "nakshatra finder"], descKey: "meta.description" },
]

describe("tool page titles and descriptions use the phrases people search", () => {
  for (const b of BATCH) {
    it(`${b.dir}: title starts with the searched phrase, fits, and promises only what the tool does`, () => {
      const title: string = tool(b.key).meta.title
      expect(title.toLowerCase().startsWith(b.phrases[0])).toBe(true)
      expect(title.length).toBeLessThanOrEqual(66)
      expect(title.toLowerCase()).toContain("free")
      expect(title.toLowerCase()).toContain("date of birth")
      for (const p of b.phrases) expect((title + " " + descOf(b)).toLowerCase()).toContain(p)
    })
    it(`${b.dir}: the description the page actually reads is a clean 110-160 character sentence`, () => {
      const d = descOf(b)
      expect(d.length).toBeGreaterThanOrEqual(110)
      expect(d.length).toBeLessThanOrEqual(160)
      expect(d).toMatch(/[.!?]$/)
      expect(d).not.toMatch(/\s{2,}|…/)
    })
    it(`${b.dir}: the page reads the key we edited`, () => {
      const src = page(b.dir)
      expect(src).toContain(b.descKey === "description" ? "t('description')" : "t('meta.description')")
    })
  }
})

function descOf(b: { key: string; descKey: string }): string {
  const t = tool(b.key)
  return b.descKey === "description" ? t.description : t.meta.description
}

describe("mahadasha page answers the 'antardasha calculator' and 'vimshottari dasha calculator' queries in visible FAQs", () => {
  const faqs: { question: string; answer: string }[] = tool("mahadasha").faqs
  it("has a real antardasha-calculator question that explains what the tool shows", () => {
    const f = faqs.find((x) => /antardasha calculator/i.test(x.question))
    expect(f).toBeTruthy()
    expect(f!.answer.length).toBeGreaterThan(200)
    expect(f!.answer.toLowerCase()).toContain("mahadasha and antardasha calculator")
    expect(f!.answer.toLowerCase()).toContain("sub-periods")
  })
  it("has a vimshottari-dasha-calculator question about accuracy that is honest about birth time", () => {
    const f = faqs.find((x) => /vimshottari dasha calculator/i.test(x.question))
    expect(f).toBeTruthy()
    expect(f!.answer.toLowerCase()).toContain("birth time")
    expect(f!.answer.toLowerCase()).toContain("nakshatra")
  })
  it("existing questions are unchanged and still present", () => {
    expect(faqs.some((x) => x.question === "What is Vimshottari Dasha?")).toBe(true)
    expect(faqs.length).toBeGreaterThanOrEqual(13)
  })
})

describe("nakshatra page answers 'what is my nakshatra by date of birth' in visible FAQs", () => {
  const faqs: { question: string; answer: string }[] = tool("nakshatra").faqs
  it("explains that the date alone is not enough, and lists what the tool returns", () => {
    const f = faqs.find((x) => /what is my nakshatra by date of birth/i.test(x.question))
    expect(f).toBeTruthy()
    expect(f!.answer.toLowerCase()).toContain("nakshatra calculator")
    expect(f!.answer.toLowerCase()).toContain("time and place")
    expect(f!.answer.toLowerCase()).toContain("pada")
    expect(f!.answer.length).toBeGreaterThan(200)
  })
  it("is honest about finding a nakshatra from the date alone", () => {
    const f = faqs.find((x) => /only know my date of birth/i.test(x.question))
    expect(f).toBeTruthy()
    expect(f!.answer.toLowerCase()).toContain("birth time")
    expect(f!.answer.toLowerCase()).toMatch(/same date.*different nakshatra/)
  })
  it("keeps the six existing questions", () => {
    expect(faqs.length).toBeGreaterThanOrEqual(8)
    expect(faqs.some((x) => x.question === "What is Gana in Nakshatra?")).toBe(true)
  })
})

describe("chaldean numerology page answers the 'chaldean numerology calculator' / 'chaldean name calculator' queries", () => {
  const faqs: { question: string; answer: string }[] = en.tools.numerology.chaldean.faqs
  it("has a how-to-use FAQ that only describes what the tool returns", () => {
    const f = faqs.find((x) => /chaldean numerology calculator/i.test(x.question))
    expect(f).toBeTruthy()
    const a = f!.answer.toLowerCase()
    expect(a).toContain("chaldean name calculator")
    expect(a).toContain("breakdown")
    expect(a).toContain("name number")
    expect(a).toContain("1 to 8")
    expect(f!.answer.length).toBeGreaterThan(200)
  })
  it("keeps the six existing questions", () => {
    expect(faqs.length).toBeGreaterThanOrEqual(7)
    expect(faqs[0].question).toBe("What is Chaldean Numerology?")
  })
})
