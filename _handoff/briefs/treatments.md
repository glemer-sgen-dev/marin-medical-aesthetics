# P6 brief — `treatments` (T1 · device index, KEPT and DEMOTED)

**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Tier:** T1 hub · **Trace:** D-IA-002 · D-IA-024 · **Slug KEPT** at /treatments/.

## Locked SEO (P5 — quote verbatim into the build; do not re-write)

- **title:** `Aesthetic Treatments in San Anselmo, CA - Marin County`
- **meta:** `The devices and services Dr. Bacchi uses, from injectables and lasers to Emsella. Which one suits you is decided at your consultation, not before.`
- **primary_keyword:** `Aesthetic Treatments in San Anselmo` · **intent:** `commercial`

**MUST FIX carried from P4:** today this page shows Emsella as a **picture with no page behind it**.
Every device tile on the rebuilt index must resolve to a real treatment leaf or it does not ship.

## Machine-block (§6.0 handoff contract)

```yaml
slug: treatments
type: T-HUB
bespoke: false
funnel_role: F1
primary_cta: consultation
cta_secondary: areas-of-concern
section_seq: [hero-category-outcome, why-this-area-wedge, sub-area-injectables, sub-area-skin-aesthetics, sub-area-body-function, sub-area-wellness, routing-band, closing-cta]
required_ids: [D-IA-002, D-OFFER-017, D-IA-014, D-IA-015, D-IA-016, D-IA-017, D-IA-022, D-OFFER-018, D-OFFER-006]
links_to: [treatments-botox-dysport, treatments-clearsilk, treatments-halo-laser-treatment, treatments-forever-young-bbl, treatments-forever-clear-acne, treatments-clear-v, treatments-scarlet-rf, treatments-microneedling, treatments-emface, treatments-exion-by-btl, treatments-medical-facial, treatments-obagi-skintrinsiq, treatments-vanquish-me, treatments-emtone, treatments-emsella, treatments-emsculpt-neo, treatments-braintap-sessions, treatments-lightstim-red-light-therapy, treatments-lymphatic-drainage-massage, mommy-makeover, areas-of-concern, consultation]
links_from: [index, areas-of-concern, consultation]
```

## Outcome row (§6.1)

```
FEATURE: an index of the devices and services this practice actually operates, grouped by what they act on  →  DO: read what a treatment is for without being asked to choose one  →  MEANS: the index informs your consultation instead of substituting for it, and every tile leads to a real page rather than a photograph
```

## §1 hero: the index, and what it is for — S

H1 naming aesthetic treatments in San Anselmo. One sentence establishing the demotion honestly: this
is a reference list; which treatment suits you is decided at the consultation, not here. Required
data: **D-IA-002** — Treatments kept at /treatments/ but DEMOTED below the concern layer.

## §2 how to read this index — M

The framing block: a device is the OUTPUT of an evaluation, not the entry to one. States that the
list below is the practice's real capability set and nothing else. Required data: **D-OFFER-017** —
the what's-included list, crawled from the live treatment pages.
⚠The service menu may be stale (§G-8). Confirm every line with the owner at P7 before publishing the
list; drop any device the owner says is retired rather than shipping it.

## §3 Injectables — S

Sub-area block: Botox and Dysport, the practice's core injectable service. One line of plain
description, linking to its leaf. Required data: **D-IA-014** — Treatments > Injectables.
⚠No "doctor-led therefore safe" construction anywhere near an injectable. The permitted claim is
that an evaluation decides whether the treatment is appropriate at all.

## §4 Skin and aesthetics — S

Sub-area block routing to ClearSilk · Halo · Forever Young BBL · Forever Clear BBL · Clear V ·
Scarlet RF · SkinPen microneedling · EmFace · EXION by BTL · medical facial · Obagi Skintrinsiq.
Scarlet RF and SkinPen are DISTINCT leaves and must be presented as two entries, not one. Required
data: **D-IA-015** — Treatments > Skin & Aesthetics.

## §5 Body and function — S

Sub-area block routing to Emsculpt NEO · Vanquish ME · Emtone · **Emsella** · Non-Surgical Mommy
Makeover. This is the group that carries the wedge: it is the only group spanning body and pelvic
floor. Required data: **D-IA-016** — Treatments > Body & Function.
⚠`treatments-emsella` and `treatments-emsculpt-neo` are NEW pages that do not exist yet — the index
must not link to them until they are authored. The bundle is ALWAYS labelled **Non-Surgical Mommy
Makeover**; the bare label is banned, and "NO SIDE EFFECTS", "NO DOWNTIME" and "SNAP BACK & GET
SNATCHED" do not survive from the existing page.

## §6 Wellness — S

Sub-area block routing to BrainTap sessions · LightStim red and infrared bed · lymphatic drainage
massage. Required data: **D-IA-017** — Treatments > Wellness.

## §7 one page per head term, and what is not offered — XS

Two mechanical facts the index must express. First, the four-way "skin tightening" cannibalisation
collapses to a single device leaf at its existing slug, so the index carries EXION once and links
the laxity head terms to their concern leaves instead. Second, a plain scope line: surgery,
medical/surgical dermatology, skin-cancer treatment, laser hair removal, laser tattoo removal and
CoolSculpting are not offered here. Required data: **D-IA-022** — the 4-way cluster collapses to ONE
device leaf at the EXISTING slug; **D-OFFER-018** — the explicitly-not-offered list.
⚠Do not explain why a service is not offered, and never imply surgery.

## §8 closing CTA — XS

`Book a consultation` primary; `Explore areas of concern` secondary. Required data: **D-OFFER-006** —
the primary conversion goal. Phone number: (415) 785-4604 (F5 resolved 2026-08-19).

## Content-depth floor (§6.3 — T-HUB)

- >=1 sub-area block per routed leaf: met — 4 group blocks (§3-§6) covering all 19 surviving or new
  device/service leaves plus the package leaf, every one named and individually linked.
- >=1 proof element: met at §2 — the capability set is cited to the crawled treatment pages, not
  asserted. No metric, price or outcome figure appears on this page.
- every sub-area block links to its deep page: yes; all 20 leaf slugs are listed in `links_to` and
  every one resolves to a row in `page-inventory.md`.
- FEATURE-DO-MEANS row present: yes (§6.1).

## Sign-off

**Filled by:** P6 authoring lane (foundation)
**Filled on:** 2026-08-18
**TYPE window verified against registry JSON:** YES — counted 8 §-sections, T-HUB window 5-9.
