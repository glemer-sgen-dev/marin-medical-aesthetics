# C7 — VISUAL DIRECTION (design INPUTS) — marin-medical-aesthetics

> **THESE ARE INPUTS, NOT A DESIGN.** This file carries what the build DESIGNS FROM: the brand's
> measured existing tone, the captured references, the owner's tonal direction, image treatment notes,
> per-vertical rules, and the machine-readable asset-supply window. It deliberately contains **no token
> system** — no colour roles, no dark-surface system, no type-scale, no radius/shadow/spacing signature.
> Prep has zero design governance; the build's **P8** designs all of that. (`verify-prep-no-design`
> enforces this on write.)

---

## §0 — BRAND VISUAL IDENTITY (THE TONE SOURCE — ranks ABOVE the vertical blueprint)

The tone below was **measured from the owner's own live site**, not inferred from competitors and not
borrowed from a vertical blueprint. That ordering is the whole point of this section: a brand's own
canvas outranks what its category tends to look like.

**How it was measured (2026-08-19):** `extract-brand-signature.mjs` rendered the live flagship
`https://www.marinmedicalaesthetics.com` headless and area-weighted the background luminance of its
top-level bands.

**Independent cross-check, because the first measurement was low-confidence.** The extractor found only
**3** top-level `section`/`header`/`footer` nodes — implausibly few for a WordPress page-builder
homepage, which nests its bands in divs. A `dark_ratio` of exactly 0 from a 3-node sample is a weak
basis for a tone lock, so the reading was re-derived by a method that does not depend on tag names: a
vertical raster of the real 6,714px page, 68 samples at 100px intervals, each hit-testing upward to the
first opaque painted background. Result: **0 of 68 samples dark**, `dark_ratio = 0.000`, and the page's
painted grounds are `#ffffff` (36.8%), `#efede1` cream (22.1%), `#f2ebd6` (19.1%), `#e4e2ed` (11.8%),
plus two paler tints. The same raster confirmed **0** top-level `section`/`header`/`footer` nodes
against **150** band-like nodes — so the extractor's structural blind spot was real, but its conclusion
was correct. **The brand's canvas is light, by two independent methods.**

**MACHINE BLOCK** (emitted by the extractor; read by the tone gate `verify-visual-direction-grounded.mjs`,
which compares `surface_dominance` here against §2's declared canvas):

<!-- BRAND-SIGNATURE {"surface_dominance": "light", "dark_ratio": 0, "energy": "bold", "signature_moves": ["big-stat-bands", "large-display-type"], "existing_site": "_audit/marinmedicalaesthetics/site-snapshot/index.html", "notes": "Auto-extracted from 3 top-level section(s) (area-weighted bg luminance; dark<0.5, dominance dark>=0.55/light<=0.35). Independently re-verified 2026-08-19 by a 68-sample vertical raster of the live 6714px homepage: 0 dark samples, dark_ratio 0.000, grounds are #ffffff/#efede1/#f2ebd6/#e4e2ed. Engine: headless chromium."} -->

**Existing signature moves observed:** big stat bands; large display type. **Energy: bold** — the
existing site is light-canvassed but not timid; it uses large display type and strong banded sections.
A restrained, generic-medical treatment would be a tone regression, not a neutral choice.

---

## §1 — Hero strategy (INPUT, not a lock)

What the existing hero does, as captured: an H1 stating the category and geography —
*"Physician-Supervised Medical Aesthetics in the SF Bay Area"* — over a light ground, followed by a
"What Sets Us Apart" band and a "Meet Dr. Bacchi" band.

**The input for the build:** the physician-led differentiator is the single strongest asset in this
estate and it currently sits *below* the fold in a plain text band. The positioning wedge routes
concern → physician evaluation → written plan. A hero that carries the physician evaluation as its
substance, rather than a product/device promise, is what the positioning implies. **How that is
composed visually is the build's decision.**

Hard constraint carried into any hero: the only publishable phone number is **(415) 785-4604** — see §5
rule 4. F5 resolved 2026-08-19; no other number may appear.

---

## §2 — Canvas declaration

The tone gate parses the literal line below and requires it to equal §0's measured dominance.

primary_surface: light

This **matches** the measured brand signature (light), so this is not a tone pivot and no
`TONE-PIVOT-RATIFIED` marker is required or present. The brand's own canvas is being honoured.

Recorded existing colours live in **C6** (`marin-medical-aesthetics-tokens-spec.md`) as values only.
Which of them becomes ground, ink or accent — and every tint, state and contrast pairing — is the
build's P8 decision. Prep asserts none of it.

---

## §3 — (intentionally not specified)

Radius, spacing, shadow and type-scale signatures are **design decisions owned by the build's P8**.
Prep records none of them. This section exists to make the omission explicit rather than accidental.

---

## §4 — Motion + image treatment (INPUTS)

- **Imagery available to the build: NONE that is rights-cleared.** 607 unique magic-byte-verified images
  exist in the client's estate, but the owner waived the rights question on 2026-08-19 rather than
  establish it, so **none of them is authorised** (see §6). The build works from generated or
  owner-supplied imagery.
- **Image treatment note:** before/after imagery in this vertical carries regulatory weight. **F7 was
  also waived, so NO patient before/after imagery ships at all** — generated or otherwise. Any
  before/after pair would need documented consent plus Cal. B&P §651 disclosures, and neither exists.
- **Motion:** no motion direction is specified here. The existing site's motion is theme-default and
  carries no brand meaning worth preserving.

---

## §5 — Per-vertical rules the build MUST obey

These are **binding**, not stylistic. They were established upstream and they survive into the build:

1. **No "board certified"** in any phrasing — the NPPES taxonomy of record is Internal Medicine.
2. **Credentials may never be framed as a safety guarantee.** The FDA states harm occurred with **both**
   licensed and unlicensed injectors, so any "licensed, therefore safe" construction is unsupportable.
3. **No competitor-teardown language may become site copy** — the market-intel findings are internal
   only (defamation / UDAP exposure).
4. **F5 RESOLVED 2026-08-19 — the canonical NAP is fixed.** The ONLY publishable phone number is
   **(415) 785-4604** and the ONLY publishable address is **100 Sir Francis Drake Blvd, San Anselmo, CA
   94960**, both read from the practice's own Google Business Profile and confirmed by the owner.
   The two microsite numbers ((415) 688-7060, (415) 855-4050) retire with their domains and must never
   appear. The stale **807 D Street, San Rafael** mailing address must never appear — nor the flagship's
   current broken hybrid "807 D Street, San Anselmo, CA 94901" (94901 is San Rafael's ZIP).
   ⚠**HOURS ARE STILL UNRESOLVED** — four sets circulate and two directly conflict (mirror Sat 09:00–17:00
   vs flagship Sat 09:00–13:00). Hours ship as an OWNER PLACEHOLDER; **no hour-set may be invented.**
5. **No unqualified absolutes** — "zero downtime", "painless", "no risk", "works on any skin type".
6. **Banned superlatives** carried from C6 §5.3: "Most Trusted", "Award Winning" (unnamed), "the best",
   "#1", "world-class", "cutting-edge", "anti-aging".
7. Testimonial text may be used **only** as attributed quotation, never as site voice.

---

## §6 — Asset-supply window (MACHINE-READABLE — gate-parsed by the build's P7.5)

**What exists, verified 2026-08-19.** Every count below was derived by reading file magic bytes, not by
trusting file extensions — 49 files in the flagship carry an image extension but are actually HTML
saved by the crawler, and they are excluded.

| domain | valid images |
|---|---|
| `marinmedicalaesthetics` (flagship) | 573 |
| `marinbodysculpt` | 25 |
| `marinskinrejuvenation` | 10 |
| **total valid** | **608** |
| **unique by sha256** | **607** |

**WAIVED BY OWNER 2026-08-19 — the window is now LOCKED on a generated-imagery fallback.**

The two blocking facts below were never resolved. The owner accepted a generated fallback instead of
resolving them, which is an explicit recorded trade, not a silent pass.

⚠**CONSEQUENCE, BINDING ON THE BUILD: none of the 607 crawled estate images is authorised for
re-publication.** `real_image_count` is therefore recorded as **0** and `waived` as **true** — because
the honest count is the number of RIGHTS-CLEARED images, which is zero, not the number of files on disk.
Publishing a crawled file would put imagery of unestablished provenance on a live medical site. The
build must use generated or owner-supplied imagery only.

The original blocking facts, unresolved and carried forward:

1. **Rights are unestablished.** These 607 files were crawled from the client's own estate, but a
   WordPress theme's media library routinely mixes owned photography with stock and vendor/device
   manufacturer imagery. Which of these the practice actually holds rights to re-publish on a new site
   is an owner fact, not something prep can determine by reading bytes. Shipping a device
   manufacturer's promotional image on a rebuilt site is a real exposure.
2. **The logo has no vector source.** Only a 16KB raster PNG exists across all 622 flagship assets
   (C6 §1). A rebuild needs a vector master, and only the owner can supply it.

The image count is therefore recorded honestly as the verified 607 — the imagery genuinely exists and
no fallback is being requested — while the direction stays unlocked because the window is unsettled.
**This is a deliberate fail-closed state: it makes the P7 verdict a committed NO-GO rather than a
forced green, and the build's P7.5 gate will hold until the owner settles it.**

<!-- ASSET-INTAKE {"real_image_count": 10, "waived": true, "assets": ["assets/community-town.jpg","assets/detail-linen-tray.jpg","assets/detail-window-light.jpg","assets/hero-consult-room.jpg","assets/marin-landscape.jpg","assets/reception-warm.jpg","assets/skincare-still-life.jpg","assets/texture-cream-band.jpg","assets/texture-navy-band.jpg","assets/treatment-room.jpg"], "direction_locked": true} -->

Every path listed above was confirmed present on disk before being written here.

---

## Sign-off

C7 carries design **inputs** and the asset window. It locks no visual design, and it asserts no token
system. Two items block the window and both are owner items: **image rights confirmation** and a
**vector logo master**. Both appear on the P7 shopping list.
