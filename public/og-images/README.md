# OpenGraph Images Directory

This directory contains OG (OpenGraph) images for all tools and blog posts. These images are displayed when sharing links on social media platforms (Facebook, Twitter, WhatsApp, LinkedIn, etc.).

## Image Specifications

- **Size**: 1200 x 630 pixels (required for optimal display)
- **Format**: JPG (preferred for file size) or PNG
- **Aspect Ratio**: 1.91:1
- **File Size**: Keep under 1MB for fast loading

## Required Images

### Tool OG Images (28 images needed):

#### Numerology Tools (14):
- [ ] life-path-number.jpg
- [ ] destiny-number.jpg
- [ ] chaldean-numerology.jpg
- [ ] lo-shu-grid.jpg
- [ ] lucky-number.jpg
- [ ] name-correction.jpg
- [ ] business-name.jpg
- [ ] lucky-color.jpg
- [ ] lucky-mobile-number.jpg
- [ ] lucky-vehicle-number.jpg
- [ ] lucky-bank-account-number.jpg
- [ ] love-compatibility-numerology.jpg
- [ ] child-name.jpg
- [ ] bhagyodaya-year.jpg

#### Astrology Tools (10):
- [ ] kundli.jpg
- [ ] nakshatra.jpg
- [ ] moon-sign.jpg
- [ ] lagna.jpg
- [ ] mahadasha.jpg
- [ ] manglik.jpg
- [ ] sade-sati.jpg
- [ ] pitra-dosha.jpg
- [ ] kalsarp-dosha.jpg
- [ ] raj-yoga.jpg

#### Other Tools (4):
- [ ] wealth-money-predictor.jpg
- [ ] gemstone-recommender.jpg
- [ ] room-advisor.jpg
- [ ] muhurat-finder.jpg

### Blog Post OG Images (32 images needed):

You can reuse the tool OG images for related blog posts as suggested by the user. Blog posts are already configured to use their own hero images, but you can create dedicated OG images if needed.

## Design Guidelines

### Visual Elements to Include:
1. **Tool Name** - Clear, readable text (40-60px font size)
2. **VastuCart Branding** - Logo or name (top-right corner)
3. **Tool Icon** - Relevant emoji or graphic (left side)
4. **Background** - Use brand colors (cream, deep teal, warm accent)
5. **Tagline/Description** - Brief benefit statement (optional)

### Brand Colors:
- **Cream**: #FFF8F0
- **Deep Teal**: #1E5F5D
- **Warm Accent**: #D97757

### Example Design Layout:
```
┌─────────────────────────────────────────┐
│  🔢                    VastuCart       │
│                                         │
│        Life Path Number                │
│        Calculator                       │
│                                         │
│    Discover Your Soul's Purpose        │
│                                         │
└─────────────────────────────────────────┘
```

## How to Create OG Images

### Option 1: Automated Generation (Recommended)
Use tools like:
- **Canva** - canva.com (has OG image templates)
- **Figma** - figma.com (design once, duplicate for all)
- **OG Image Generator** - vercel.com/docs/concepts/functions/edge-functions/og-image-generation

### Option 2: Manual Design
1. Create template in Photoshop/Figma/Canva
2. Duplicate template for each tool
3. Update text/icons for each tool
4. Export as JPG at 1200x630px

### Option 3: Programmatic Generation
Use the Next.js OG Image generation API:
- Create `/api/og-image/[slug]` route
- Generate images dynamically using Vercel OG
- Export static images during build

## Testing OG Images

After adding images, test with:
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

## File Naming Convention

- Use lowercase
- Use hyphens for spaces
- Match the tool slug exactly
- Examples: `life-path-number.jpg`, `kundli.jpg`

## Current Status

- ✅ All 28 tool pages configured to reference OG images
- ✅ Blog pages configured to use hero images
- ⏳ OG image files need to be created and uploaded
- ⏳ Test OG tags after images are added

## Priority Order

1. **High Priority** - Top 10 most visited tools
2. **Medium Priority** - Remaining numerology tools
3. **Low Priority** - Specialized astrology tools
4. **Blog Images** - Can use existing blog hero images or create dedicated ones

## Notes

- Until images are created, social media platforms will use default metadata
- You can start with placeholder images and update them later
- Blog posts already have hero images that can serve as OG images
- The user suggested reusing blog feature images for tools where applicable
