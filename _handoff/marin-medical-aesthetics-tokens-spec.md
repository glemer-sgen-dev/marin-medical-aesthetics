# C6 — EXISTING BRAND CARD — marin-medical-aesthetics

> **RECORD, NOT DESIGN.** This file is a faithful log of the brand as it ALREADY EXISTS, measured from
> the live flagship on **2026-08-13**. Prep has zero design governance: no roles, no scales, no tints,
> no radius/shadow/spacing system, no type-scale, no dark-surface system are assigned here. The build's
> **P8** overhauls/upgrades this card and designs the token system from it.
> Source of every value: `intake-brief.md` §D (D-BRAND-RAILS-*), which cites the crawl it came from.

**Brand supplied:** YES — the practice has an existing, coherent visual identity in market.
**Site of record measured:** `marinmedicalaesthetics.com` (the 103-file flagship).

---

## 1 — Logo (D-BRAND-RAILS-001) `[CRAWLED]`

- **Asset on disk:** `_audit/marinmedicalaesthetics/assets/www.marinmedicalaesthetics.com_wp-content_uploads_2019_08_MarinMedicalLogo-Horizontal.png`
- **Lockup as it exists:** horizontal — a navy square containing a plum double-helix-and-figures mark,
  a plum vertical rule, then "Marin Medical Aesthetics" set in a navy serif.
- **Variants:** a stacked variant exists on the retiring microsite.
- ⚠**OWNER — RASTER PNG ONLY.** No SVG or vector source was found across all 622 flagship assets.
  A vector master is an owner-supplied item (it is on the P7 shopping list); the build cannot
  manufacture one faithfully from a raster.

## 2 — Existing colours (D-BRAND-RAILS-002) `[CRAWLED]`

Sampled **by frequency** from the live homepage. These are RECORDED VALUES, not assigned roles —
which colour becomes ground, ink or accent is the build's P8 decision, not prep's.

| hex | colour as it reads | observed uses on the live homepage |
|---|---|---|
| `#073772` | navy | 138 — the most-used colour, and it matches the logo |
| `#9e7299` | plum / orchid | 38 |
| `#c4ad67` | gold | 22 |
| `#5f5842` | olive / brown | 11 |
| `#efede1` | cream | 3 |
| `#ffffff` | white | ground |

**Measured canvas (independent verification, 2026-08-19):** an area-weighted raster of the live
homepage (68 samples down its real 6,714px height) found **zero** dark bands — the painted grounds are
`#ffffff` (36.8%), `#efede1` cream (22.1%), `#f2ebd6` (19.1%), `#e4e2ed` (11.8%) and two further pale
tints. The brand's existing canvas is **light**, and `brand-visual-signature.json` records
`surface_dominance: "light"`, `dark_ratio: 0`.

> **Not carried forward:** the retiring microsite runs an unrelated stock tan/cream theme
> (`#a28869` / `#f7f4f0`) that fights this same navy logo. It is NOT part of the brand.

## 3 — Existing typefaces (D-BRAND-RAILS-003) `[CRAWLED]`

- **Playfair Display** — display / serif
- **Poppins** — body / sans
- **Great Vibes** — script accent
- All three are loaded from Google Fonts on the live flagship.

Font NAMES only — no sizes, weights, line-heights or scale are recorded here; the build designs those.

> **Not carried forward:** the retiring microsite used Marcellus / Karla / Roboto — no overlap.

## 4 — Layout signature (D-BRAND-RAILS-017)

*Deliberately blank.* Layout signature is a DESIGN decision owned by the build's P8.

---

## 5 — Voice (D-BRAND-RAILS-004/005) ⚠OWNER-DERIVED

**Register:** hybrid — **warm-humanist + clinically precise**.

**Why this one:** the estate currently runs four incompatible registers — warm-humanist (the bio),
textbook-technical (treatment mechanics), corporate-superlative ("Most Trusted" / "Award Winning") and
shouty-promotional ("WE ARE NOW OPEN!!!"). Warm-humanist is the only **distinctive and ownable** one,
and it is independently corroborated by patients' own words: *"approachable, kind, warm, & professional"*.
The clinical precision is required by the vertical. The other two registers retire with the microsites
and the banned-claims list.

### 5.1 — Policies

| policy | value | basis |
|---|---|---|
| exclamation points | **disallowed** | the retiring microsite's "WE ARE NOW OPEN!!!" reads directly against a physician-led positioning |
| emoji (website) | **disallowed** | the practice's Instagram bio uses them, which is fine for social and out of scope here |

### 5.2 — CTA verb convention, by intent (D-BRAND-RAILS-009)

`Book` (consultation — primary) · `Call` (phone — secondary) · `Explore` (treatment/concern hub
navigation) · `Read` (blog/story) · `Shop` (retail store).

⚠**BLOCKED DATA:** the phone number inside every "Call" CTA **cannot be written** until F5 resolves
which published number is canonical. Four numbers circulate across the estate and none is confirmed.

### 5.3 — Banned superlatives / phrasings (D-BRAND-RAILS-008)

"Most Trusted" · "Award Winning" (unnamed) · "the best" · "#1" · "world-class" · "cutting-edge" ·
"anti-aging" · any unqualified absolute — "works on **any** skin type", "**zero** downtime" (both
currently live on the retiring microsite).

### 5.4 — Words to MIRROR (D-BRAND-RAILS-018) `real_only` `[RESEARCHED]`

Real patient language: *"approachable"*, *"kind"*, *"warm"*, *"professional"* (Instagram, practice's own
caption, 2024-09-30) · *"excellent knowledge"* (Google review, Brian Ruthruff, 5★) · *"state of the art
equipment"*, *"such a lovely manner about her"* (Alignable recommendation) · *"THE BEST MED SPA EVER"*
(Google review, Esme S., 5★ — **as an attributed quotation only, never as site voice**).

### 5.5 — Words to AVOID (D-BRAND-RAILS-019)

"med spa" as the primary self-description *(it flattens the physician differentiator and is the exact
category the leaders own)* · "clinic" *(cold)* · "beauty" as the primary frame · "anti-aging" ·
"girls" / "ladies" · any phrasing implying surgery.

---

## 6 — Voice samples, verbatim + cited (D-BRAND-RAILS-010/011) `real_only`

> *"Dr. Bacchi welcomes clients in a comfortable, gentle, and affirming environment, collaborating with
> each one to bring each their inner beauty to the surface using highly individualized treatments."*
> — `https://www.marinskinrejuvenation.com/` (fetched 2026-08-13).
> *(The grammatical error "bring each their" is verbatim from source and must be corrected in the rebuild.)*

> *"Beauty isn't in the eye of the beholder—it's in the soul of the beheld."*
> — same source, fetched 2026-08-13, attributed to Dr. Bacchi.

> *"She collaborates with clients to achieve and exceed their goals for prevention, intervention, and
> maintenance—celebrating the beauty we all carry within us but might not have yet seen."*
> — same source, fetched 2026-08-13.

> *"Discover physician-supervised skin care, injectables, lasers, and body sculpting in Marin serving the
> SF Bay Area. Book a consultation in San Anselmo."*
> — `https://www.marinmedicalaesthetics.com/` meta description, fetched 2026-08-13.

> *"The ClearSilk™ treatment works by placing heat energy deep within the dermis, where it targets
> chromophores…"* — `https://www.marinskinrejuvenation.com/`, fetched 2026-08-13 —
> **the technical register, retained for treatment mechanics only.**

---

## 7 — Standing legal constraints that bind any use of this brand card

These are not style preferences. They were established upstream and they bind the build:

1. The client may **NOT** claim "board certified" in any phrasing — the NPPES taxonomy of record is
   Internal Medicine.
2. Credentials may **NEVER** be framed as a safety guarantee. The FDA states harm occurred with **both**
   licensed and unlicensed injectors, so "licensed, therefore safe" is an unsupportable construction.
3. Competitor-teardown language from the market-intel phase must **NEVER** become site copy
   (defamation / UDAP exposure).
4. No phone digits in any title, meta or CTA until F5 resolves (see 5.2).

---

**Sign-off:** this card RECORDS the existing brand. It designs nothing. The build's P8 owns the token
system, the surface roles, and any overhaul of the identity above.
