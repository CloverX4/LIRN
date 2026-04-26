Build a complete, production-ready business website for LIRN Group.
Domain: lirn.co.in | Hyderabad, India.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRAND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Family-founded process engineering and industrial fabrication firm.
Our principals previously operated as Uma Rajeshwari Fabricators —
decades of hands-on delivery across equipment fabrication, plant design,
and process engineering. LIRN is the evolution of that into a full
engineering group with consulting, fabrication, and product divisions.

First LIRN engagement: RCA for a 10 TPH calcium bentonite kiln bag
filter system — diagnosed furnace backfire from undersized ductwork.

Tone: Technical, direct, no fluff. Like engineers wrote it.

Colors:
  #0e0e0e  background
  #161616  surface / cards
  #f2ede6  warm white text
  #bf6c1f  amber accent (primary CTA color)
  #2a2a2a  secondary surface
  #888888  muted text

Typography:
  Display: Bebas Neue (large headings, numbers)
  Body: Inter
  Specs/Data: JetBrains Mono

Logo: LIRN wordmark — Bebas Neue, all caps, with amber horizontal
rule separator and "GROUP" in Inter Light below.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Next.js 14 App Router (hybrid SSG + API routes)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Contentlayer + MDX (content management — Git is the CMS)
- Resend (form email notifications — swap-friendly, no lock-in)
- Framer Motion (subtle scroll animations only)
- Vercel deployment

No Supabase in Phase 1 — forms submit via API route → Resend email.
Supabase added in Phase 2 when order management is needed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DIVISIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. LIRN Fabrications — Equipment Manufacturing
2. LIRN Solutions — Process Engineering & Consulting
3. LIRN Clay Tech — Bleaching Earth (Coming Soon)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
URL STRUCTURE (SEO-hierarchical)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/
/about
/fabrications                              category index
/fabrications/conveyors                    subcategory
/fabrications/conveyors/belt-conveyor      product
/fabrications/conveyors/screw-conveyor
/fabrications/conveyors/chain-conveyor
/fabrications/conveyors/bucket-elevator
/fabrications/thermal
/fabrications/thermal/rotary-kiln
/fabrications/thermal/rotary-dryer
/fabrications/dust-collection
/fabrications/dust-collection/bag-filter-house
/fabrications/dust-collection/industrial-ducts
/fabrications/cyclones
/fabrications/cyclones/[slug]
/fabrications/crushers
/fabrications/crushers/hammer-crusher
/fabrications/trusses
/fabrications/trusses/[slug]
/fabrications/storage-tanks
/solutions
/solutions/[slug]
/case-studies
/case-studies/[slug]
/clay-tech
/estimate
/contact

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOLDER STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
lirn/
├── app/
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── fabrications/
│   │   ├── page.tsx
│   │   ├── [category]/page.tsx
│   │   └── [category]/[slug]/page.tsx
│   ├── solutions/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── case-studies/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── clay-tech/page.tsx
│   ├── estimate/page.tsx
│   ├── contact/page.tsx
│   └── api/
│       ├── contact/route.ts
│       └── estimate/route.ts
├── content/
│   ├── products/
│   │   ├── conveyors/belt-conveyor.mdx
│   │   ├── conveyors/screw-conveyor.mdx
│   │   ├── conveyors/chain-conveyor.mdx
│   │   ├── conveyors/bucket-elevator.mdx
│   │   ├── thermal/rotary-kiln.mdx
│   │   ├── thermal/rotary-dryer.mdx
│   │   ├── dust-collection/bag-filter-house.mdx
│   │   ├── dust-collection/industrial-ducts.mdx
│   │   ├── cyclones/cyclone-separator.mdx
│   │   ├── crushers/hammer-crusher.mdx
│   │   ├── trusses/industrial-shed-truss.mdx
│   │   └── storage-tanks/storage-tank.mdx
│   ├── services/
│   │   ├── root-cause-analysis.mdx
│   │   ├── pressure-loss-budget.mdx
│   │   ├── duct-sizing.mdx
│   │   ├── system-documentation.mdx
│   │   └── bleaching-earth-consultancy.mdx
│   └── case-studies/
│       ├── uma-rajeshwari-era/
│       │   └── [anonymized-projects].mdx
│       └── lirn-era/
│           └── bajaj-earths-kiln-bag-filter.mdx
├── components/
│   ├── ui/                  shadcn only
│   ├── layout/              Header, Footer, Nav, WhatsAppFAB
│   ├── sections/            Hero, DivisionGrid, CaseStudyTeaser, etc.
│   └── cards/               ProductCard, ServiceCard, CaseStudyCard
├── lib/
│   ├── contentlayer.ts
│   └── resend.ts
└── public/images/

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANIMATIONS (Framer Motion, subtle only)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Hero text: staggered word fade-up on mount
- Cards: fade + translateY(8px) on scroll entry
- CTA buttons: amber underline slide on hover
- Stats/numbers: count-up on viewport entry
- WhatsApp FAB: pulse ring animation (subtle, 3s loop)
- No parallax. No heavy 3D. Performance first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CTA STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Primary channel: WhatsApp (floating button, always visible)
  → wa.me/[WHATSAPP_NUMBER] with pre-filled context message

Per page:
  Homepage:      "Request an Estimate" → /estimate
  Product pages: "Get a Quote" → /contact?product=[slug]
  Service pages: "Discuss Your Requirement" → WhatsApp deep link
  Case studies:  "We Can Do This For You" → /contact

Forms: multi-step flow (not flat HTML forms)
  Step indicator at top, one field group per step,
  amber progress bar, JetBrains Mono for technical inputs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT FORM API (Resend only, no DB)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/api/contact:
  Fields: name, company, phone, email, division, message
  → Resend email to [LIRN_NOTIFY_EMAIL]

/api/estimate:
  Fields: name, company, phone, email, equipment_type,
  capacity, material, parameters, notes
  → Resend email to [LIRN_NOTIFY_EMAIL]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CASE STUDY — BAJAJ EARTHS (write fully)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10 TPH calcium bentonite plant, Karnataka.
Problem: Cyclic furnace backfire every 2-3 min + visible stack emissions.
Root cause: Two 600mm ducts consuming 85% of ID fan draft (190mm WG).
Duct restriction: 75% cross-section reduction vs upstream connections.
Flow deficit: 27,000 m³/h generated vs 23,000 m³/h max throughput.
Secondary: 60s pulse timer stripping dust cake prematurely → bare bags
passing fines to stack.
Fix: Enlarge to 1000-1200mm. DP-triggered pulse at 120-130mm WG.
Reduce ID fan 47Hz → 25-32Hz post-fix.
Result: Backfire eliminated. Emissions cleared. 74% fan energy saving.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Every page: title, meta description, OG image, canonical, JSON-LD.
Homepage: LocalBusiness schema.
Product pages: Product schema.
Service pages: Service schema.
Case studies: Article schema.
Auto-generated sitemap.xml and robots.txt.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full working codebase. Every page. Every component. Every API route.
All MDX content files — written with real technical copy, not lorem ipsum.
README: setup, Resend config, how to add content via MDX.
.env.example with all variables.
No placeholder copy anywhere.