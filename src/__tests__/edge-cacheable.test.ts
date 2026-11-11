import { describe, it, expect } from "vitest"
import { readFileSync } from "node:fs"
import { join } from "node:path"

/**
 * Nothing may stop this site being cached.
 *
 * Every page here builds as static HTML, and every page was still being rendered by a serverless function
 * on every single request: Vercel reported `x-vercel-cache: MISS` on all of them. That is what reaches the
 * plan's limits, and it is not traffic, it is configuration.
 *
 * Two causes, both in the middleware. It wrote a NEXT_LOCALE cookie on every response, and a response
 * carrying Set-Cookie belongs to one person, so no shared cache will store it. And locale detection was
 * on, so the same URL answered differently depending on the visitor's Accept-Language header: one request
 * for /tools/mahadasha returned the page, another returned a redirect to /hi/tools/mahadasha. A single
 * cached copy cannot be right for both.
 *
 * Neither was needed. The language is in the path, the header carries a switcher, and hreflang tells
 * Google about both versions, which is what it asks for instead of redirecting by header.
 */

const middleware = readFileSync(join(process.cwd(), "src/middleware.ts"), "utf8")

describe("the middleware does not make every page uncacheable", () => {
  it("writes no locale cookie", () => {
    expect(middleware).toMatch(/localeCookie:\s*false/)
  })

  it("does not answer the same URL differently per visitor", () => {
    // With detection on, Accept-Language decides whether a URL returns a page or a redirect.
    expect(middleware).toMatch(/localeDetection:\s*false/)
  })

  it("keeps the language in the path, which is what makes one cached copy correct", () => {
    expect(middleware).toMatch(/localePrefix:\s*'as-needed'/)
  })

})

describe("the pages carry a cache header a shared cache can act on", () => {
  // Removing the cookie was not enough. Next marks any response produced through a middleware rewrite as
  // private and no-store, whether or not the page behind it was prebuilt, and next-intl rewrites every
  // request here. Every route builds as static HTML and the build reports zero dynamic routes, so that
  // header is wrong rather than cautious. Setting it on the middleware response does not survive the
  // render; at the config layer it does.
  const config = readFileSync(join(process.cwd(), "next.config.ts"), "utf8")

  it("sets a shared-cache lifetime for pages", () => {
    expect(config).toMatch(/s-maxage=3600/)
    expect(config).toMatch(/stale-while-revalidate=86400/)
  })

  it("leaves the browser revalidating, so a change is never held in front of a reader", () => {
    expect(config).toMatch(/max-age=0/)
  })

  it("excludes API routes, which must never be shared between visitors", () => {
    expect(config).toMatch(/\(\?!api\//)
  })
})

describe("visitors can still reach the other language", () => {
  it("the header carries a switcher, so turning off the redirect strands nobody", () => {
    const header = readFileSync(join(process.cwd(), "src/components/layout/header.tsx"), "utf8")
    expect(header).toMatch(/locale === 'en' \? 'hi' : 'en'/)
    expect(header).toMatch(/aria-label="Toggle language"/)
  })

  it("every page still declares both versions to search engines", () => {
    const page = readFileSync(join(process.cwd(), "src/app/[locale]/tools/mahadasha/page.tsx"), "utf8")
    expect(page).toMatch(/languages:/)
    expect(page).toMatch(/'x-default'/)
  })
})

describe("nothing else sets a cookie on a page response", () => {
  it("no route handler or page writes one", () => {
    const { readdirSync, statSync } = require("node:fs") as typeof import("node:fs")
    const offenders: string[] = []
    const walk = (dir: string) => {
      for (const entry of readdirSync(dir)) {
        const p = join(dir, entry)
        if (statSync(p).isDirectory()) walk(p)
        else if (/\.tsx?$/.test(entry) && !p.includes("__tests__")) {
          const src = readFileSync(p, "utf8")
          if (/cookies\(\)\.set\(|['"]Set-Cookie['"]/i.test(src)) offenders.push(p.replace(process.cwd() + "/", ""))
        }
      }
    }
    walk(join(process.cwd(), "src/app"))
    expect(offenders, `these set a cookie, which makes their page uncacheable:\n  ${offenders.join("\n  ")}`).toEqual([])
  })
})
