# LIRN Website — Production Readiness Tracker

Last updated: 2026-04-26

---

## A. IMMEDIATE BUGS

- [x] **A2 — Quantity field on general inquiry**: Hidden when no equipment context. *(fixed 2026-04-26)*
- [x] **A3 — Spec dropdown formatting**: Added `formatOption()` for proper capitalization. *(fixed 2026-04-26)*
- [ ] **A4 — Hero modal rendering weirdly**: Hero page "Send Inquiry" modal displays differently from product page modals — something is off about positioning/sizing specifically on the hero page. Product page modals work fine (render above body + header). Needs investigation.
- [ ] **A5 — "Request a Callback" banner on hero modal is wrong**: The "Unsure about specs or dimensions?" + "Request a Callback" banner makes no sense in a general inquiry context (no equipment selected). Should be hidden or reworded when no equipment is passed.
- [ ] **A6 — Spec options starting with "or"**: Some spec values use "X or Y" format (not comma-separated) and the split is producing options like "or XXXXX" as a dropdown choice. Need to handle `or`-separated values properly — strip leading "or" from options, or use a different detection strategy.

---

## B. CTA STRATEGY & CONSISTENCY

- [ ] **B1 — Hero/CTABand "Send Inquiry" is contextless**: Clicking "Send Inquiry" from hero or CTA band launches a generic form with no equipment. Should either: (a) redirect to /fabrications (equipment browse), (b) show a choice — "equipment inquiry" vs "process consultation", or (c) go to /estimate callback page.
- [ ] **B2 — Inconsistent CTA destinations**: Some CTAs open mailto (InquiryModal), some go to WhatsApp, some go to /contact form, some go to /estimate. Need a clear CTA hierarchy:
  - **Equipment inquiry** → InquiryModal (with specs)
  - **General / unsure** → /estimate (Request a Callback)
  - **Quick chat** → WhatsApp
  - **Formal contact** → /contact
- [ ] **B3 — Solutions page CTA**: Only has "Message Us on WhatsApp" — needs a proper inquiry/callback CTA consistent with the rest of the site.
- [ ] **B4 — "Request Estimate" still needed**: Users who know their requirements should be able to request a formal estimate (cost, timeline, delivery). Currently /estimate is "Request a Callback" only. Need either a separate estimate form or a mode toggle.
- [ ] **B5 — Process engineering CTAs**: Solutions section pages need streamlined CTAs — currently just WhatsApp link at bottom.

---

## C. CONTENT & COPY

- [ ] **C1 — About page: Uma Rajeshwari Fabricators era correction**: Page says "started in 2012" but actual history is 1998–2018 as Uma Rajeshwari Fabricators, then resumed as LIRN Group. Needs a dedicated section or timeline for that legacy era — adds credibility.
- [ ] **C2 — About page general revamp**: Tone and narrative need improvement. Should sound more authoritative and less like a blog post.
- [ ] **C3 — Process engineering content**: Solutions page service descriptions need richer, more credible content.
- [ ] **C4 — Credibility without founder details**: Site needs to look credible (client logos, certifications, project stats, equipment photos) without revealing personal founder information yet.

---

## D. VISUAL & MEDIA

- [ ] **D1 — Generate images**: Need hero images, equipment photos, process diagrams, or placeholder visuals for sections across the site (currently text-heavy).
- [ ] **D2 — Visual credibility**: Consider adding: project counters, client industry badges, certification logos, ISO/ASME references, before/after project photos.

---

## E. TECHNICAL / SEO

- [ ] **E1 — SEO audit**: Test how well the site would perform in this industry. Check meta tags, structured data, keyword density, page speed, mobile responsiveness.
- [ ] **E2 — Reachability testing**: Simulate search queries an industrial buyer would use and evaluate ranking potential.

---

## F. SPEC DATA QUALITY

- [ ] **F1 — Spec value separator**: Comma separation in `data/products.ts` is used both as "list of options" (for dropdowns) and "range descriptions." Consider using `|` or another delimiter for dropdown options vs descriptive text.
- [ ] **F2 — Dropdown option formatting**: Each option after split needs: trim whitespace, proper title-case capitalization, no trailing commas.

---

## COMPLETED (this session & prior)

- [x] Header logo size increase (20→28px LIRN, GROUP alignment)
- [x] CTA ambient glow/pulse animations on all CTA buttons
- [x] Reusable InquiryModal component with prefilled specs
- [x] Smart spec dropdowns (comma-separated → `<select>`)
- [x] Fabrications page combobox search
- [x] "Send Inquiry" as primary CTA everywhere
- [x] /estimate rewritten as "Request a Callback"
- [x] Specs added to `data/products.ts` for all 13 products
- [x] CTA band background color fix (#eee8d8)
- [x] "Not sure?" banner in modal linking to callback
- [x] Footer CTA text updated
