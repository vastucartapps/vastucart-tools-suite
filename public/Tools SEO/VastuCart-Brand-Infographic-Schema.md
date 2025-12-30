# VastuCart Brand & Infographic Schema Strategy
## Complete Guide to Brand, Logo, and Visual Content Markup

---

## Part 1: Brand Schema Implementation

### 1.1 Understanding Brand vs. Organization Schema

VastuCart requires a **two-layer schema approach**:

**Layer 1: Organization Schema** (the legal business entity)
- Represents the actual corporation/business
- Contains legal details, contact info, address
- Acts as the container for brand ownership

**Layer 2: Brand Schema** (the consumer-facing brand identity)
- Represents the brand name customers recognize
- Contains logo, slogan, brand description
- Linked to Organization via the `brand` property

### 1.2 VastuCart Brand Schema (Complete Implementation)

**Primary Brand: VastuCart**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": "https://vastucart.in#brand",
  "name": "VastuCart",
  "alternateName": "VastuCart Happy Homes",
  "description": "Premium Vedic astrology tools, numerology calculators, Vastu Shastra advisors, and handcrafted religious home decor products for spiritual wellness and home harmony.",
  "logo": {
    "@type": "ImageObject",
    "@id": "https://vastucart.in#logo",
    "url": "https://vastucart.in/images/vastucart-logo.png",
    "width": 500,
    "height": 500,
    "name": "VastuCart Logo",
    "description": "VastuCart brand logo - Vedic astrology and home decor"
  },
  "slogan": "Vedic Wisdom for Modern Homes",
  "sameAs": [
    "https://www.pinterest.com/vastucart",
    "https://www.facebook.com/vastucart",
    "https://www.instagram.com/vastucart",
    "https://www.youtube.com/vastucart",
    "https://www.threads.net/@vastucart",
    "https://www.amazon.in/stores/page/VastuCart",
    "https://www.etsy.com/shop/VastuCart"
  ],
  "url": "https://vastucart.in",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "[total user ratings]",
    "reviewCount": "[total reviews]"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "[Customer Name]"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "[Customer testimonial about VastuCart tools/products]"
    }
  ],
  "owner": {
    "@type": "Organization",
    "@id": "https://vastucart.in#organization"
  }
}
</script>
```

### 1.3 Linked Organization Schema (Updated)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://vastucart.in#organization",
  "name": "VastuCart",
  "legalName": "[Your Registered Legal Business Name]",
  "description": "VastuCart operates a premium platform offering 33 Vedic astrology and numerology tools, plus handcrafted religious home decor and puja essentials, delivering to customers worldwide.",
  "url": "https://vastucart.in",
  "logo": "https://vastucart.in/images/vastucart-logo.png",
  "brand": {
    "@type": "Brand",
    "@id": "https://vastucart.in#brand",
    "name": "VastuCart",
    "alternateName": "VastuCart Happy Homes"
  },
  "sameAs": [
    "https://www.pinterest.com/vastucart",
    "https://www.facebook.com/vastucart",
    "https://www.instagram.com/vastucart",
    "https://www.youtube.com/vastucart",
    "https://www.threads.net/@vastucart",
    "https://www.amazon.in/stores/page/VastuCart",
    "https://www.etsy.com/shop/VastuCart"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "support@vastucart.in",
    "telephone": "[Your Phone Number]"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Your Address]",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[Postal Code]",
    "addressCountry": "IN"
  },
  "areaServed": "Worldwide",
  "availableLanguage": ["en", "hi"],
  "foundingDate": "[YYYY-MM-DD]",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "[Number of Employees]"
  },
  "subOrganization": [
    {
      "@type": "Organization",
      "@id": "https://kundali.vastucart.in#organization",
      "name": "VastuCart Kundli",
      "url": "https://kundali.vastucart.in",
      "parentOrganization": {
        "@id": "https://vastucart.in#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://store.vastucart.in#organization",
      "name": "VastuCart Store",
      "url": "https://store.vastucart.in",
      "parentOrganization": {
        "@id": "https://vastucart.in#organization"
      }
    }
  ]
}
</script>
```

### 1.4 Knowledge Panel Optimization

To appear in Google's Knowledge Panel, implement:

1. **Complete Organization Schema** (on homepage)
2. **Brand Schema** (with logo, slogan, description)
3. **Wikipedia Entry** (if eligible - link via sameAs)
4. **Consistent Information Across Web**:
   - Website: vastucart.in
   - Google Business Profile: Claim and complete
   - Social Media: Ensure brand name/logo consistent
   - Directory Listings: Consistent NAP (Name, Address, Phone)

5. **E-E-A-T Signals**:
   - User reviews (aggregateRating property)
   - Author credentials on content
   - Backlinks from authority sites
   - Schema markup for topical expertise (tools, products)

---

## Part 2: ImageObject Schema for Infographics

### 2.1 Basic ImageObject Schema

Infographics, charts, and diagrams require ImageObject markup for optimal visibility:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": "https://vastucart.in/images/infographics/numerology-guide.png",
  "url": "https://vastucart.in/images/infographics/numerology-guide.png",
  "contentUrl": "https://vastucart.in/images/infographics/numerology-guide.png",
  "name": "Complete Numerology Guide: Life Path Numbers Explained",
  "description": "Comprehensive infographic showing all numerology life path numbers (1-9), their meanings, personality traits, career compatibility, and spiritual significance based on Vedic numerology principles.",
  "caption": "Numerology Guide: Life Path Number meanings and characteristics",
  "creditText": "VastuCart - Vedic Numerology",
  "author": {
    "@type": "Organization",
    "name": "VastuCart",
    "url": "https://vastucart.in"
  },
  "dateCreated": "[Date infographic was created - YYYY-MM-DD]",
  "dateModified": "[Date last updated - YYYY-MM-DD]",
  "datePublished": "[Date published - YYYY-MM-DD]",
  "width": 1200,
  "height": 1600,
  "representativeOfPage": true,
  "thumbnail": {
    "@type": "ImageObject",
    "url": "https://vastucart.in/images/infographics/numerology-guide-thumb.png",
    "width": 150,
    "height": 150
  },
  "isPartOf": {
    "@type": "Article",
    "@id": "https://vastucart.in/en/tools/numerology-guide"
  },
  "associatedArticle": {
    "@type": "Article",
    "url": "https://vastucart.in/en/tools/numerology-guide"
  }
}
</script>
```

### 2.2 Advanced ImageObject with Multiple Variants

For infographics available in multiple formats:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": "https://vastucart.in/images/infographics/kundli-chart-guide.png",
  "name": "Vedic Kundli Chart: Divisional Charts Guide (D1, D9, D10)",
  "description": "Detailed infographic explaining Vedic birth charts including D1 Rashi Chart, D9 Navamsha Chart, and D10 Dasamsha Chart with house meanings, planetary positions, and interpretation guidelines.",
  "url": "https://vastucart.in/images/infographics/kundli-chart-guide.png",
  "contentUrl": "https://vastucart.in/images/infographics/kundli-chart-guide.png",
  "caption": "Kundli Chart Types: D1, D9, and D10 Divisional Charts Explained",
  "creditText": "VastuCart Kundali - Vedic Astrology",
  "alternativeHeadline": "Vedic Birth Chart Divisional Charts Guide",
  "author": {
    "@type": "Organization",
    "name": "VastuCart",
    "url": "https://vastucart.in"
  },
  "image": [
    "https://vastucart.in/images/infographics/kundli-chart-guide-en.png",
    "https://vastucart.in/images/infographics/kundli-chart-guide-hi.png"
  ],
  "inLanguage": ["en", "hi"],
  "datePublished": "2024-01-15",
  "dateModified": "2025-12-30",
  "isPartOf": {
    "@type": "Article",
    "@id": "https://kundali.vastucart.in/en/tools/kundli"
  },
  "associatedArticle": [
    {
      "@type": "Article",
      "url": "https://kundali.vastucart.in/en/tools/kundli"
    },
    {
      "@type": "Article",
      "url": "https://kundali.vastucart.in/en/guides/kundli-understanding"
    }
  ],
  "width": 1400,
  "height": 1800,
  "thumbnail": "https://vastucart.in/images/infographics/kundli-chart-guide-thumb.png",
  "representativeOfPage": true,
  "hasPart": [
    {
      "@type": "ImageObject",
      "name": "D1 Rashi Chart",
      "description": "Birth chart showing planetary positions in signs",
      "url": "https://vastucart.in/images/infographics/d1-rashi-chart.png"
    },
    {
      "@type": "ImageObject",
      "name": "D9 Navamsha Chart",
      "description": "9-fold divisional chart showing marriage and partnership",
      "url": "https://vastucart.in/images/infographics/d9-navamsha-chart.png"
    },
    {
      "@type": "ImageObject",
      "name": "D10 Dasamsha Chart",
      "description": "10-fold divisional chart showing career and profession",
      "url": "https://vastucart.in/images/infographics/d10-dasamsha-chart.png"
    }
  ]
}
</script>
```

### 2.3 Infographic Within Article Schema

**Most powerful implementation**: Nest ImageObject inside Article schema (on your tool pages):

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://vastucart.in/en/tools/life-path-number",
  "headline": "Life Path Number Calculator & Meaning Guide",
  "description": "Discover your Life Path Number and its profound meaning using Pythagorean numerology. Calculate free, get interpretations, and understand your life's purpose.",
  "articleBody": "[Full article text content]",
  "image": [
    {
      "@type": "ImageObject",
      "@id": "https://vastucart.in/images/infographics/life-path-numbers.png",
      "url": "https://vastucart.in/images/infographics/life-path-numbers.png",
      "contentUrl": "https://vastucart.in/images/infographics/life-path-numbers.png",
      "name": "Life Path Numbers 1-9 Guide",
      "description": "Visual guide showing all 9 life path numbers, their meanings, personality traits, career paths, and spiritual significance.",
      "caption": "Complete Life Path Number Guide",
      "creditText": "VastuCart Numerology",
      "representativeOfPage": true,
      "width": 1200,
      "height": 1400
    },
    {
      "@type": "ImageObject",
      "url": "https://vastucart.in/images/tools/life-path-calculator-interface.png",
      "name": "Life Path Number Calculator Interface",
      "description": "Screenshot of the interactive calculator interface",
      "width": 1000,
      "height": 600
    }
  ],
  "datePublished": "2024-01-10",
  "dateModified": "2025-12-30",
  "author": {
    "@type": "Organization",
    "name": "VastuCart",
    "url": "https://vastucart.in"
  },
  "publisher": {
    "@type": "Organization",
    "name": "VastuCart",
    "logo": {
      "@type": "ImageObject",
      "url": "https://vastucart.in/images/vastucart-logo.png",
      "width": 500,
      "height": 500
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://vastucart.in/en/tools/life-path-number"
  }
}
</script>
```

---

## Part 3: Logo & Brand Image Optimization

### 3.1 Logo ImageObject Schema (Detailed)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": "https://vastucart.in#logo-image",
  "url": "https://vastucart.in/images/vastucart-logo-full.png",
  "name": "VastuCart Logo",
  "description": "Official VastuCart brand logo - representing Vedic astrology tools and spiritual home decor",
  "contentUrl": "https://vastucart.in/images/vastucart-logo-full.png",
  "width": 500,
  "height": 500,
  "representativeOfPage": false,
  "creditText": "VastuCart",
  "isPartOf": {
    "@type": "Brand",
    "@id": "https://vastucart.in#brand"
  }
}
</script>
```

### 3.2 Brand Profile Images (Multiple Variants)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": "https://vastucart.in#brand",
  "name": "VastuCart",
  "logo": [
    {
      "@type": "ImageObject",
      "url": "https://vastucart.in/images/logo/vastucart-logo-primary.png",
      "name": "Primary Logo",
      "width": 500,
      "height": 500
    },
    {
      "@type": "ImageObject",
      "url": "https://vastucart.in/images/logo/vastucart-logo-icon.png",
      "name": "Icon Logo",
      "width": 200,
      "height": 200
    },
    {
      "@type": "ImageObject",
      "url": "https://vastucart.in/images/logo/vastucart-logo-horizontal.png",
      "name": "Horizontal Logo",
      "width": 800,
      "height": 200
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://vastucart.in/images/brand/vastucart-brand-image.jpg",
      "name": "VastuCart Brand Image",
      "description": "Brand hero image representing VastuCart's offerings",
      "width": 1600,
      "height": 900
    }
  ],
  "slogan": "Vedic Wisdom for Modern Homes"
}
</script>
```

---

## Part 4: Infographic Best Practices for SEO

### 4.1 Image Optimization Checklist

- **File Size**: Compress to <300KB without quality loss
- **Format**: PNG (for charts/diagrams), JPG (for photography)
- **Resolution**: 1200px minimum width, 72+ DPI
- **Alt Text**: Descriptive alt attribute (separate from schema caption)
- **Filename**: Use descriptive slug (e.g., `life-path-numbers-guide.png`)
- **Captions**: Appear visually on page AND in schema markup

### 4.2 Image Placement Strategy

1. **Above the Fold**: Place primary infographic near top of page
2. **Context**: Immediately before or after relevant text
3. **Captions**: Add visible caption below image
4. **Links**: Make infographics clickable to full-size versions
5. **Downloadable**: Offer high-res version for sharing/pins

### 4.3 Infographic Promotion Channels

- **Pinterest**: Share high-quality vertical infographics (optimal for pinning)
- **Instagram**: Create carousel posts with infographic sections
- **Facebook**: Share as educational content with link
- **YouTube**: Create video infographics (with VideoObject schema)
- **Blog**: Embed in relevant tool guide posts
- **Social Sharing**: Enable Pinterest/Social meta tags

### 4.4 Google Images & Rich Results Eligibility

ImageObject schema enables:
- **Google Images**: Enhanced infographic visibility
- **Google Lens**: AI can analyze and understand visual content
- **AI Overview**: Images may appear in Google's AI-generated results
- **Featured Snippets**: Infographics can win visual snippets
- **Pinterest Rich Pins**: Better visibility on Pinterest

---

## Part 5: Implementation Roadmap

### Phase 1: Brand Schema (Week 1)
- [ ] Create Brand schema with logo, slogan, description
- [ ] Update Organization schema with `brand` property
- [ ] Link to all social media profiles via `sameAs`
- [ ] Test with Rich Results Test
- [ ] Deploy to homepage + About page

### Phase 2: Logo & Images (Week 1-2)
- [ ] Create ImageObject schema for primary logo
- [ ] Optimize logo files (multiple sizes)
- [ ] Add ImageObject schema for brand hero image
- [ ] Ensure logos linked to Brand schema
- [ ] Test logo display in rich results

### Phase 3: Infographics (Week 2-3)
- [ ] Identify top 10 tool pages for infographics
- [ ] Create high-quality infographics for:
  - Numerology hub: Life Path numbers guide
  - Astrology hub: Kundli chart guide
  - Vastu hub: Room planning guide
  - Muhurat hub: Auspicious timing calendar
- [ ] Add ImageObject schema to each infographic
- [ ] Nest within Article schema on tool pages
- [ ] Optimize for Pinterest sharing

### Phase 4: Content Updates (Week 3-4)
- [ ] Add infographic captions to all tool pages
- [ ] Create downloadable infographic PDFs
- [ ] Set up visual content promotion on Pinterest/Instagram
- [ ] Build internal links to infographic content
- [ ] Update sitemap with image URLs

### Phase 5: Monitoring (Ongoing)
- [ ] Track Google Images visibility
- [ ] Monitor Rich Results Test for status
- [ ] Measure infographic click-through rates
- [ ] Track Pinterest pins/engagements
- [ ] Analyze Google Analytics for image traffic

---

## Part 6: Knowledge Panel Checklist for VastuCart

### To Qualify for Google Knowledge Panel:

**Must-Have**:
- [ ] Complete Organization schema on homepage
- [ ] Brand schema with logo and slogan
- [ ] Consistent NAP (Name, Address, Phone) across web
- [ ] All social media profiles linked (sameAs property)
- [ ] Regular content updates (blog/news)
- [ ] High-quality backlinks from authority sites

**Highly Recommended**:
- [ ] Wikipedia page (if eligible)
- [ ] Google Business Profile (claimed & verified)
- [ ] LinkedIn company page (complete)
- [ ] Crunchbase profile (if startup/investor visibility needed)
- [ ] User reviews & ratings (aggregateRating schema)
- [ ] Professional photos/images
- [ ] Comprehensive About page

**Emerging Signals** (2025):
- [ ] Topic/topical authority (via content clusters)
- [ ] E-E-A-T signals (author credentials, site reputation)
- [ ] Rich snippet coverage (FAQ, ratings, reviews)
- [ ] Semantic relationships (Tool pages linked to Brand)

---

## Part 7: Visual Content Strategy for AI Era

### Why Infographics Matter in 2025:

1. **AI Search**: Google AI Overview needs visual content to summarize
2. **Image Recognition**: Google Lens can analyze and explain infographics
3. **Featured Snippets**: Infographics compete for visual snippet positions
4. **Mobile-First**: 70% of searches now on mobile; visuals beat text
5. **Social Sharing**: Infographics get 3x more shares than other content
6. **Long-form Content**: Visuals break up lengthy tool explanations

### Infographic Priority for VastuCart:

**High Priority** (Create ASAP):
1. Life Path Numbers 1-9 guide
2. Kundli Chart types (D1, D9, D10) explained
3. Numerology Life Path compatibility chart
4. Marriage Dosha quick reference guide
5. Vastu Shastra room placement guide

**Medium Priority** (Next 30 days):
6. Gemstone recommendations chart
7. Mahadasha timeline template
8. Lucky numbers by business type
9. Sade Sati effects timeline
10. Career prediction flowchart

**Low Priority** (Build out over time):
11. Manglik dosha resolution methods
12. Auspicious colors by life path
13. Yoga Calculator benefit matrix
14. Pitra Dosha remedies guide

---

## Part 8: Validation & Testing

### Before Deployment:

1. **Brand Schema Test**:
   - Go to https://search.google.com/test/rich-results
   - Paste Brand schema code
   - Verify no errors

2. **ImageObject Test**:
   - Validate each infographic's ImageObject schema
   - Check that `representativeOfPage` is correct
   - Verify image URLs are accessible

3. **Article + Image Test**:
   - Test complete Article schema with nested images
   - Ensure all image properties validate
   - Check for caption/credit text presence

4. **Organization + Brand Test**:
   - Validate parent Organization schema
   - Verify Brand schema links correctly
   - Check subOrganization relationships

5. **Knowledge Panel Readiness**:
   - Use Brand Center (if applicable)
   - Verify information matches across web
   - Check competitor knowledge panels for format

---

## Conclusion

VastuCart's success in Google's evolving knowledge graph depends on three factors:

1. **Brand Identity**: Clear, consistent Brand schema with logo and positioning
2. **Visual Content**: High-quality infographics with proper ImageObject markup
3. **Semantic Authority**: Topical authority through interconnected content

Implement this strategy across all three domains (vastucart.in, kundali.vastucart.in, store.vastucart.in) for maximum knowledge panel visibility and organic ranking power.

---

**Document Version**: 1.0  
**Last Updated**: December 30, 2025  
**Prepared for**: VastuCart  
**Focus**: Brand Schema + Infographic Implementation