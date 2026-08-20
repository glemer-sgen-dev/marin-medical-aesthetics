# P6 brief — `areas-of-concern` (T1 · the concern hub, PROMOTED above Treatments)

**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Tier:** T1 hub · **Trace:** D-IA-001 · D-IA-024 · **Slug UNCHANGED** (the /concerns/ rename was
refused on anti-churn grounds).

## Locked SEO (P5 — quote verbatim into the build; do not re-write)

- **title:** `Areas of Concern in San Anselmo - Skin, Body & Function`
- **meta:** `Start with the concern, not the device. Skin, face, body, and pelvic-floor or urinary function concerns, each routed to a physician evaluation.`
- **primary_keyword:** `Areas of Concern` · **intent:** `commercial`

## Machine-block (§6.0 handoff contract)

```yaml
slug: areas-of-concern
type: T-HUB
bespoke: false
funnel_role: F1
primary_cta: consultation
cta_secondary: treatments
section_seq: [hero-category-outcome, why-this-area-wedge, sub-area-skin, sub-area-face-structure, sub-area-body, sub-area-function, routing-band, closing-cta]
required_ids: [D-IA-001, D-OFFER-014, D-IA-018, D-IA-019, D-IA-020, D-IA-021, D-IA-024, D-OFFER-006]
links_to: [areas-of-concern-acne-acne-scars, areas-of-concern-age-spots, areas-of-concern-hyperpigmentation, areas-of-concern-melasma, areas-of-concern-sun-damage, areas-of-concern-uneven-skin-texture, areas-of-concern-rosacea, areas-of-concern-broken-capillaries, areas-of-concern-spider-veins, areas-of-concern-fine-lines, areas-of-concern-wrinkles, areas-of-concern-jowls, areas-of-concern-turkey-neck, areas-of-concern-double-chin, areas-of-concern-loose-skin, areas-of-concern-cellulite, areas-of-concern-stubborn-fat, areas-of-concern-core-strength, areas-of-concern-muscle-development, areas-of-concern-urinary-incontinence, areas-of-concern-sexual-function-enhancement, consultation, treatments]
links_from: [index, treatments, consultation, contact]
```

## Outcome row (§6.1)

```
FEATURE: twenty-one concerns grouped by what they actually are - skin, face and structure, body, function  →  DO: find your own concern in plain language and follow it to a physician evaluation  →  MEANS: you are not asked to diagnose yourself with a device name before anyone has examined you
```

## §1 hero: start from the concern — S

H1 naming areas of concern in San Anselmo. One sentence establishing the page's job: this is the
entry layer of the site, and it comes before the treatment index. Required data: **D-IA-001** —
Areas of Concern is the concern-led entry layer, slug unchanged, PROMOTED above Treatments.

## §2 why the concern comes before the device — M

The wedge, stated affirmatively and without reference to any other practice: the visitor names a
concern, a physician evaluation decides what is appropriate, and the output is a written plan. Ship
the practice's own published sentence **in full, never excerpted**: *"as part of any treatment, she
does a comprehensive health evaluation to minimize side effects and teaches clients how their
actions can maximize and sustain the benefits they achieve."* Required data: **D-OFFER-014** — held
positioning, verbatim + sourced.
⚠No market-wide negative ("most places just hand you a menu" is banned). State our own architecture
and stop.

## §3 Skin — S

Sub-area block routing to the 9 skin leaves: acne and acne scars · age spots · hyperpigmentation ·
melasma · sun damage · uneven skin texture · rosacea · broken capillaries · spider veins. Each entry
is one line of plain description plus a link to its own leaf. Required data: **D-IA-018** — Concern
group: Skin, 9 leaves.

## §4 Face and structure — S

Sub-area block routing to the 6 face-and-structure leaves: fine lines · wrinkles · jowls · turkey
neck · double chin · loose skin. Required data: **D-IA-019** — Concern group: Face & structure, 6
leaves.
⚠`loose-skin` and `turkey-neck` are also the 301 destinations for two retired "skin tightening"
URLs, so both must exist and be linked from here before those redirects land.

## §5 Body — S

Sub-area block routing to the 4 body leaves: cellulite · stubborn fat · core strength · muscle
development. Required data: **D-IA-020** — Concern group: Body, 4 leaves.
⚠`stubborn-fat` must not name or imply CoolSculpting — it is on the not-offered list.

## §6 Function — S

The sub-area block that carries the wedge: urinary incontinence and sexual function enhancement,
presented in the same register and at the same visual weight as skin, face and body. Written
plainly, privately, without euphemism. Required data: **D-IA-021** — Concern group: Function, 2
leaves.
⚠These two leaves route ON-DOMAIN to the new Emsella treatment leaf. Say nothing about
`marinincontinencetherapy.com` — ownership is UNCONFIRMED under F4.

## §7 routing band: concern to evaluation to plan — XS

The one-line explanation of the site's flow, with a route into `consultation` and a secondary route
into `treatments` for readers who already know the device name. Required data: **D-IA-024** — T1
hubs; this page is the parent of the 21 concern leaves.

## §8 closing CTA — XS

`Book a consultation` primary; `Explore treatments` secondary. Required data: **D-OFFER-006** — the
primary conversion goal. Phone number: (415) 785-4604 (F5 resolved 2026-08-19).

## Content-depth floor (§6.3 — T-HUB)

- >=1 sub-area block per routed leaf: met — 4 group blocks (§3-§6) covering all 21 leaves, every
  leaf named and individually linked.
- >=1 proof element: met at §2 — the practice's own published evaluation sentence, cited, in full.
- every sub-area block links to its deep page: yes; all 21 slugs are listed in `links_to` and every
  one resolves to a row in `page-inventory.md`.
- FEATURE-DO-MEANS row present: yes (§6.1).

## Sign-off

**Filled by:** P6 authoring lane (foundation)
**Filled on:** 2026-08-18
**TYPE window verified against registry JSON:** YES — counted 8 §-sections, T-HUB window 5-9.
