# **Project Context: VastuCart SEO & Architecture Implementation**

**Objective:** Implement "Entity SEO" and "Remedial Logic" for the VastuCart ecosystem to achieve fastest rankings for 33 Vedic Astrology/Numerology tools and drive revenue to the e-commerce store.

**Domain Structure:**

* **Root (Brand/Content):** vastucart.in (Main Entity: Organization)  
* **Tools Subdomain:** kundali.vastucart.in (High-computation tools)  
* **Store Subdomain:** store.vastucart.in (Transactional: Product/OnlineStore)

## ---

**1\. Global Brand Schema (Organization)**

File: components/seo/OrganizationSchema.tsx (or equivalent global layout file)  
Placement: \<head\> of the root domain homepage.  
Logic: Establishes VastuCart as the parent entity and links all subdomains and external profiles to build authority.

JSON

\<script type="application/ld+json"\>  
{  
  "@context": "https://schema.org",  
  "@type": "Organization",  
  "@id": "https://vastucart.in/\#organization",  
  "name": "VastuCart",  
  "alternateName": \["VastuCart Happy Homes", "VastuCart.in"\],  
  "url": "https://vastucart.in",  
  "logo": {  
    "@type": "ImageObject",  
    "url": "https://vastucart.in/logo.png",  
    "width": 600,  
    "height": 60  
  },  
  "contactPoint": {  
    "@type": "ContactPoint",  
    "telephone": "+91-XXXXXXXXXX",  
    "contactType": "customer service",  
    "areaServed": "World",  
    "availableLanguage": \["en", "hi"\]  
  },  
  "sameAs":,  
  "knowsAbout":  
}  
\</script\>

## ---

**2\. Tool Schema Templates (SoftwareApplication)**

File: components/seo/ToolSchema.tsx  
Logic: Render this dynamically for each of the 33 tools.  
Variables: {{Tool\_Name}}, {{Tool\_URL}}, {{Tool\_Description}}, {{Feature\_List\_Array}}, {{Rating\_Value}}, {{Review\_Count}}.

### **A. General Template (For all 33 Tools)**

JSON

\<script type="application/ld+json"\>  
{  
  "@context": "https://schema.org",  
  "@type": "WebApplication",  
  "name": "{{Tool\_Name}}",  
  "url": "https://vastucart.in/tools/{{Tool\_Slug}}",  
  "applicationCategory": "LifestyleApplication",  
  "operatingSystem": "All",  
  "browserRequirements": "Requires JavaScript. Works on Chrome, Firefox, Safari, Edge.",  
  "offers": {  
    "@type": "Offer",  
    "price": "0",  
    "priceCurrency": "INR",  
    "availability": "https://schema.org/InStock"  
  },  
  "aggregateRating": {  
    "@type": "AggregateRating",  
    "ratingValue": "{{Rating\_Value}}", // e.g., "4.8"  
    "ratingCount": "{{Review\_Count}}" // e.g., "1250"  
  },  
  "featureList": {{Feature\_List\_Array}}, // Array of strings, see category specifics below  
  "author": {  
    "@type": "Organization",  
    "@id": "https://vastucart.in/\#organization"  
  },  
  "inLanguage": \["en", "hi"\],  
  "isAccessibleForFree": true  
}  
\</script\>

### **B. Category Specific Configuration**

**Instructions:** When implementing the featureList variable above, use these specific keyword-rich features for each category to maximize ranking potential.

**1\. Numerology Tools (15 Tools)**

* **Target:** {{Feature\_List\_Array}}  
* **Values:**  
  * "Life Path Number Calculation"  
  * "Chaldean Name Numerology Analysis"  
  * "Mobile Number Compatibility Check"  
  * "Lo Shu Grid Missing Number Identification"  
  * "Lucky Gemstone Recommendation"

**2\. Astrology Tools (15 Tools)**

* **Target:** {{Feature\_List\_Array}}  
* **Values:**  
  * "Vedic Birth Chart (Janam Kundali) Generation"  
  * "Pitra Dosha Diagnosis & Remedies"  
  * "Mangal Dosha (Manglik) Calculator"  
  * "Sade Sati Timeline Analysis"  
  * "Marriage Matching (Gun Milan) with Nadi Dosha Check"

**3\. Vastu Tools (2 Tools)**

* **Target:** {{Feature\_List\_Array}}  
* **Values:**  
  * "Digital Compass for House Facing"  
  * "Vastu Compliance Score for Bedroom/Kitchen"  
  * "House Number Vastu Compatibility"

## ---

**3\. Remedial Logic: "Diagnosis-to-Product" Linking**

File: utils/remedialMapping.ts  
Logic: This logic maps the output of a tool (the diagnosis) to a specific product URL on store.vastucart.in.  
Action: The tool results page must display a "Recommended Remedy" button/section using the logic below.

### **Pseudo-Code Logic for Implementation**

TypeScript

// Define Product Recommendations based on Tool Output

const remedyDatabase \= {  
  // CLUSTER: NUMEROLOGY (Lo Shu Grid / Missing Numbers)  
  missing\_number\_1: {  
    condition: "Water Element Weak",  
    product\_name: "Water Fountain / North Direction Yantra",  
    url: "https://store.vastucart.in/products/vastu-water-fountain",  
    cta\_text: "Balance Water Element (Missing 1)"  
  },  
  missing\_number\_4: {  
    condition: "Wood Element Weak (Wealth)",  
    product\_name: "Green Aventurine / Tulsi Mala",  
    url: "https://store.vastucart.in/products/green-aventurine-bracelet",  
    cta\_text: "Activate Wealth Luck (Missing 4)"  
  },  
  missing\_number\_6: {  
    condition: "Metal Element Weak (Helpful People)",  
    product\_name: "Metal Wind Chimes (6 Rods)",  
    url: "https://store.vastucart.in/products/metal-wind-chime-6-rods",  
    cta\_text: "Attract Helpful People (Missing 6)"  
  },  
    
  // CLUSTER: ASTROLOGY (Dosha & Planets)  
  pitra\_dosha\_detected: {  
    condition: "Ancestral Karma Blockage",  
    product\_name: "Pitra Dosha Nivaran Kit",  
    url: "https://store.vastucart.in/products/pitra-dosha-nivaran-kit",  
    cta\_text: "Remove Pitra Dosha Obstacles"  
  },  
  kalsarp\_dosha\_detected: {  
    condition: "Rahu-Ketu Axis Blockage",  
    product\_name: "Kaal Sarp Yog Yantra",  
    url: "https://store.vastucart.in/products/kaal-sarp-yantra-copper",  
    cta\_text: "Neutralize Kaal Sarp Dosh"  
  },  
  weak\_saturn\_sadesati: {  
    condition: "Shani Sade Sati Active",  
    product\_name: "Blue Sapphire (Neelam) / Horse Shoe Ring",  
    url: "https://store.vastucart.in/products/original-horse-shoe-ring",  
    cta\_text: "Protection for Sade Sati"  
  },

  // CLUSTER: VASTU (House Facing)  
  south\_facing\_house: {  
    condition: "South Entrance (Fire)",  
    product\_name: "Vastu Pyramids / Panchmukhi Hanuman",  
    url: "https://store.vastucart.in/products/panchmukhi-hanuman-idol",  
    cta\_text: "Protect South Facing Home"  
  }  
};

// Function to get remedy  
function getRemedy(diagnosisCode) {  
    return remedyDatabase\[diagnosisCode\] |

| defaultStoreLink;  
}

## ---

**4\. E-Commerce Product Schema (Product)**

File: components/seo/ProductSchema.tsx  
Placement: Individual Product Pages on store.vastucart.in.  
Logic: Must include MerchantReturnPolicy and shippingDetails for global trust.

JSON

\<script type="application/ld+json"\>  
{  
  "@context": "https://schema.org",  
  "@type": "Product",  
  "name": "{{Product\_Name}}", // e.g., "Certified Kaal Sarp Yantra"  
  "image": "{{Product\_Image\_URL}}",  
  "description": "{{Product\_Description}} \- Vastu Compliant Remedy for {{Specific\_Problem}}",  
  "brand": {  
    "@type": "Brand",  
    "name": "VastuCart"  
  },  
  "offers": {  
    "@type": "Offer",  
    "url": "{{Product\_URL}}",  
    "priceCurrency": "INR", // or USD based on user locale  
    "price": "{{Product\_Price}}",  
    "availability": "https://schema.org/InStock",  
    "shippingDetails": {  
      "@type": "OfferShippingDetails",  
      "shippingRate": {  
        "@type": "MonetaryAmount",  
        "value": "0",  
        "currency": "INR"  
      },  
      "shippingDestination": {  
        "@type": "DefinedRegion",  
        "addressCountry": "IN"   
      },  
      "deliveryTime": {  
        "@type": "ShippingDeliveryTime",  
        "handlingTime": {  
          "@type": "QuantitativeValue",  
          "minValue": 1,  
          "maxValue": 2,  
          "unitCode": "DAY"  
        },  
        "transitTime": {  
          "@type": "QuantitativeValue",  
          "minValue": 3,  
          "maxValue": 7,  
          "unitCode": "DAY"  
        }  
      }  
    },  
    "hasMerchantReturnPolicy": {  
      "@type": "MerchantReturnPolicy",  
      "applicableCountry": "IN",  
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",  
      "merchantReturnDays": 7,  
      "returnMethod": "https://schema.org/ReturnByMail"  
    }  
  }  
}  
\</script\>

## ---

**5\. Technical Performance & I18n Directives**

**Instructions for Developers:**

1. **JavaScript Optimization (Core Web Vitals):**  
   * *Directive:* Do not run heavy astrological calculations (like planetary degree positions) on the main thread.  
   * *Implementation:* Use **Web Workers** for the kundali and numerology calculation engines to prevent UI freezing (INP issues).  
2. **Internationalization (Hreflang):**  
   * *Directive:* Ensure Google serves the Hindi version to Hindi speakers and English to the rest of the world.  
   * *Code:* Add to \<head\> of every tool page.

HTML  
\<link rel\="alternate" hreflang\="en" href\="https://vastucart.in/en/tools/life-path-number" /\>  
\<link rel\="alternate" hreflang\="hi" href\="https://vastucart.in/hi/tools/life-path-number" /\>  
\<link rel\="alternate" hreflang\="x-default" href\="https://vastucart.in/en/tools/life-path-number" /\>

3. **Cross-Subdomain Tracking:**  
   * Ensure Google Analytics 4 (GA4) is configured with cookie\_domain: 'vastucart.in' to track users moving from Tools (kundali.vastucart.in) to Store (store.vastucart.in) as a single session.