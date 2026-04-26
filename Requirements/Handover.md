I'm building the LIRN Group website — a Next.js 14 business site for a process engineering and industrial fabrication firm based in Hyderabad, India. Here's the complete context to continue development.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT LOCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
C:\Git\LIRN\website
Run: npm run dev → localhost:3000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Next.js 14.2.5 (App Router)
- TypeScript
- Tailwind CSS
- @next/mdx + gray-matter (NO Contentlayer — incompatible)
- Resend (email forms, Phase 1 only — no Supabase yet)
- Framer Motion (subtle animations only)
- No Supabase in Phase 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOUR PALETTE — LOCKED, DO NOT CHANGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hero/dark sections:  #1a3325  (dark hunter green)
Footer/stats:        #0d1f14  (deep forest)
Body background:     #f7f2ea  (warm ivory)
Card surfaces:       #eee8d8  (deeper cream)
Gold accent/CTA:     #c4a96b  (classic gold)
Primary text:        #1a2e1a
Muted text:          #5a6e58
Border:              #c8bfa8
WhatsApp green:      #25a244

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Headings: Georgia, serif
Body: Inter, sans-serif
Technical/specs/eyebrows: JetBrains Mono, monospace

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOLDER STRUCTURE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
data/         → static arrays (products, divisions, case studies, services)
lib/          → utility functions, config, API clients (utils.ts, config.ts)
content/      → MDX long-form pages (products, services, case studies)
components/
  layout/     → Header, Footer (WhatsAppFAB pending)
  sections/   → Homepage sections
  cards/      → Reusable card components
  ui/         → shadcn primitives only

RULE: No hardcoded content arrays inside component files.
All data lives in data/ files. Components only import and render.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT IS BUILT AND WORKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
lib/utils.ts                           ✓
lib/config.ts                          ✓ (siteConfig — phone, email, whatsapp)
data/products.ts                       ✓ (12 products with types)
data/divisions.ts                      ✓ (3 divisions with types)
data/case-studies.ts                   ✓ (featured flag, anonymization)
app/globals.css                        ✓ (Tailwind + responsive CSS classes)
app/layout.tsx                         ✓ (Header + Footer imported)
app/page.tsx                           ✓ (all homepage sections)
components/layout/Header.tsx           ✓ (sticky, mobile hamburger menu)
components/layout/Footer.tsx           ✓ (dark forest, 4-col)
components/sections/Hero.tsx           ✓ (dark hunter, fade-up, stats)
components/sections/DivisionGrid.tsx   ✓ (3 cards, data-driven)
components/sections/ProductsGrid.tsx   ✓ (12 cards, 4-col → 2-col mobile)
components/sections/CaseStudyTeaser.tsx ✓ (featured, anonymized notice)
components/sections/CTABand.tsx        ✓ (cream bg, gold CTA, WhatsApp)

lib/markdown.ts                        ✓ (custom markdown parser)
data/services.ts                        ✓ (consulting services array)
app/about/page.tsx                      ✓
app/fabrications/page.tsx               ✓ (category listing)
app/fabrications/[category]/page.tsx    ✓
app/fabrications/[category]/[slug]/page.tsx ✓
app/solutions/page.tsx                  ✓
app/solutions/[slug]/page.tsx           ✓
app/case-studies/page.tsx               ✓
app/case-studies/[slug]/page.tsx        ✓
app/clay-tech/page.tsx                  ✓ (coming soon + email capture)
app/estimate/page.tsx                   ✓ (multi-step form)
app/contact/page.tsx                    ✓
app/api/contact/route.ts                ✓
app/api/estimate/route.ts               ✓
components/layout/WhatsAppFAB.tsx       ✓ (disabled)
sitemap.xml                             ✓
robots.txt                              ✓
JSON-LD schemas                         ✓

Homepage section order:
Hero → DivisionGrid → ProductsGrid → CaseStudyTeaser → CTABand → Footer

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE CLASSES IN globals.css
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
These CSS classes handle mobile breakpoints.
Apply them as className on the relevant container divs:
  .desktop-nav        → hides on mobile
  .mobile-menu-btn    → shows on mobile
  .hero-stats         → stays 3-col on mobile
  .division-grid      → 3-col desktop → 1-col mobile
  .products-grid      → 4-col desktop → 2-col mobile
  .case-study-grid    → 2-col desktop → 1-col mobile
  .cta-band-inner     → row desktop → column mobile
  .footer-grid        → 4-col desktop → 2-col → 1-col mobile

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KNOWN ISSUES / RESOLVED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WhatsAppFAB — built and functional, currently disabled per user request.
   Fixed bottom-right green circle linking to wa.me/[number].
   'use client' at top, no template literals.

2. WhatsApp number placeholder: 919999999999
   Update in lib/config.ts when real number is available.

3. CTABand colour was debated — settled on cream #f7f2ea background
   with gold Request Estimate button and green WhatsApp button.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAGES BUILT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All pages listed previously are now built and functional.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DATA FILES CREATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All data files are created and functional.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MDX CONTENT FILES WRITTEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All product, service, and case study MDX files are created and revamped:
- Concise, action-oriented copy (not verbose)
- Engineering specs prominently featured
- Applications listed for context
- Image placeholders and ASCII diagrams included
- Character-efficient but information-rich (improves page performance)

MDX frontmatter format to use:
---
title: ''
category: ''
slug: ''
description: ''
specs:
  - label: ''
    value: ''
applications: []
---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BUSINESS CONTEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Family-founded firm. Previously operated as Uma Rajeshwari Fabricators.
First LIRN engagement: RCA for 10 TPH calcium bentonite kiln bag filter
system in Karnataka — diagnosed furnace backfire from undersized ductwork.

Three divisions:
1. LIRN Fabrications — equipment manufacturing
2. LIRN Solutions — process engineering consulting
3. LIRN Clay Tech — bleaching earth supply (coming soon)

Tone: Technical, direct, no fluff. Engineers wrote it.
Target clients: Plant operators, procurement managers, industrial plant owners.
Primary contact channel: WhatsApp (Indian industrial B2B reality).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECURITY NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
When building API routes (contact, estimate):
- Add rate limiting to prevent form spam
- Sanitize all form inputs before passing to Resend
- Never expose RESEND_API_KEY client-side
- Add honeypot field to forms (hidden field bots fill, humans don't)
- .env.local must never be committed to git

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENV VARIABLES NEEDED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESEND_API_KEY=
LIRN_NOTIFY_EMAIL=info@lirn.co.in
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WRITING STYLE FOR ALL COPY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Technical but readable
- No "we are a leading company" filler
- Use real specs and numbers wherever possible
- Short sentences, direct claims
- Eyebrow labels in JetBrains Mono uppercase
- Section headers in Georgia serif
- No lorem ipsum anywhere

SUGGESTED NEXT STEPS IN ORDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Phase 1 Complete: Content production, all pages, API routes, MDX framework done.

Phase 2: International Credibility & Reach
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Client Testimonials — Add testimonials section with client quotes and logos on case studies and homepage
2. Certifications & Accreditations — Display ISO 9001, safety certs, industry accreditations prominently
3. Team Profiles — /team page with founder/engineer bios, credentials, specializations
4. Company Timeline — Partnership milestones, project count, years of operation badges
5. Professional Imagery — High-quality product photos, facility images, installation shots (currently using line figures)
6. Trust Indicators — SSL badges, warranty details, secure payment info, confidentiality clause
7. Legal Pages — Privacy policy, terms of service, GDPR/data protection compliance, cookie policy
8. Contact Expansion — Phone callback requests, live chat widget, multiple contact methods beyond WhatsApp
9. Multi-language Support — English + Hindi or regional languages for broader regional reach
10. Advanced Analytics — Track form submissions, page views, user behavior for optimization
11. Email Newsletter — Subscribe form and follow-up sequence for leads
12. PDF Capabilities — Downloadable brochures, spec sheets, case study reports
13. SEO Enhancements — Meta tags optimization, schema markup expansion, sitemap priority tuning
14. Performance Optimization — Image optimization, lazy loading, Core Web Vitals tuning
15. Social Media Integration — LinkedIn, YouTube embeds, testimonial wall
16. Supabase Integration — Order management system for Clay Tech pre-launch