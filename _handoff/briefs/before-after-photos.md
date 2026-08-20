# P6 brief — `before-after-photos` (T1 · Real Results, HARD-GATED)

**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Tier:** T1 hub · **Trace:** D-IA-004 · D-IA-024

> ## ⚠ HARD GATE — DO NOT BUILD OR SHIP UNTIL RELEASED
>
> **No patient image ships from this page under any circumstance until BOTH land:**
> **(1)** waiver **F7** — documented patient releases for every image, and
> **(2)** the **Cal. B&P §651(b)(3)(B)** model disclosure and **§651(b)(3)(C)** "the same results may
> not occur for all patients" statement, adjacent and legible to each pair.
>
> Until then this page ships as an **honest empty state** that explains the standard, and **zero
> image binaries are specified, requested, or transferred to the build.** The four live
> "COMPARE PATIENT RESULTS" blocks across all three owned properties are third-party manufacturer
> imagery presented as this practice's patient results — **DO NOT MIGRATE THEM UNDER ANY
> CIRCUMSTANCE.** Consolidation is the moment they are removed by not carrying them.

## Locked SEO (P5 — quote verbatim into the build; do not re-write)

- **title:** `Before and After Photos - San Anselmo, CA`
- **meta:** `Before and after photography is published with a documented patient release. The same results may not occur for all patients. Book a consultation.`
- **primary_keyword:** `Before and After Photos` · **intent:** `commercial`

## Machine-block (§6.0 handoff contract)

```yaml
slug: before-after-photos
type: T-HUB
bespoke: false
funnel_role: F4
primary_cta: consultation
cta_secondary: success-stories
section_seq: [hero-category-outcome, why-this-area-wedge, proof-data-point, sub-area-blocks, routing-band, closing-cta]
required_ids: [D-IA-004, D-OFFER-020, D-INCUMBENT-009, D-OFFER-023, D-IA-024, D-OFFER-006]
links_to: [success-stories, consultation, areas-of-concern, treatments, disclaimer]
links_from: [index, success-stories, consultation, treatments]
```

## Outcome row (§6.1)

```
FEATURE: a results gallery that publishes only this practice's own patients, under a documented release  →  DO: know exactly whose face you are looking at and under what terms it was published  →  MEANS: what you see is evidence about this practice rather than a manufacturer's brochure, and the page says so even while it is empty
```

## §1 hero: what this page publishes, and what it does not — S

H1 naming before and after photos in San Anselmo. Immediately beneath it, the standard in one
sentence: photography here is of this practice's own patients, published with a documented release.
No image slot is specified while the gate is closed. Required data: **D-IA-004** — Real Results, the
proof hub over /before-after-photos/ + /success-stories/, HARD-GATED on F7 releases AND Cal. B&P
§651(b)(3)(B)/(C) disclosures.

## §2 the standard every published pair has to meet — M

The page's substantive block while the gate is closed, and its permanent preamble afterwards: only
first-party photography of actual patients of this practice; comparable views, poses and lighting;
a documented release on file for each; otherwise **no image**. Required data: **D-OFFER-020** — proof
strategy `real-only`, which covers before/after photography explicitly.
⚠F2 declines the fabricated-fallback default deliberately. There is no placeholder-image escape on
this page: an empty gallery ships instead.

## §3 what the law requires alongside each pair — S

The two statutory requirements, stated in plain language and rendered adjacent to any future pair,
not buried in a footer: the model disclosure where the person shown is anyone other than an actual
patient of this practice who underwent the advertised procedure, and the "the same results may not
occur for all patients" statement. Required data: **D-INCUMBENT-009** — verified receipts; V23 (B&P
§651(b)(3)(B)) and V24 (B&P §651(b)(3)(C)).
⚠A §651 violation is a misdemeanour and independently good cause to suspend a physician's licence.
This section is a legal control, not a style preference.

## §4 what must never appear here — S

The exclusion list, kept in the brief so the build cannot re-import it: no manufacturer, stock or
third-party imagery presented as this practice's results; no pair without the results statement; no
non-comparable poses or lighting; no outcome guarantee; no "typical results" framing. Required data:
**D-OFFER-023** — offer-level banned claims and their safe versions.
⚠The burned-in third-party credit on the existing microsite images is UNVERIFIED and was never
resolved — the exposure exists regardless. Do not attempt to clear it; do not carry the images.

## §5 what ships while the gate is closed — XS

The honest interim state and its routing: a short statement that releases are being documented, a
route to written patient stories on `success-stories` (subject to the same gate), and a route into
`consultation`. Required data: **D-IA-024** — T1 hubs; this page is one of the two members of the
Real Results slot and must still route rather than dead-end.

## §6 closing CTA — XS

`Book a consultation` primary; `Read patient stories` secondary. Required data: **D-OFFER-006** —
the primary conversion goal. Phone number: (415) 785-4604 (F5 resolved 2026-08-19).

## Content-depth floor (§6.3 — T-HUB)

- >=1 sub-area block per routed leaf: met — the Real Results slot has exactly two members and §5
  routes to the other one (`success-stories`) explicitly.
- >=1 proof element: met at §3 — the statutory requirements themselves, cited to the verified
  receipts. **No patient proof element ships until F7 clears.**
- every sub-area block links to its deep page: yes; all `links_to` slugs resolve in
  `page-inventory.md`.
- FEATURE-DO-MEANS row present: yes (§6.1).

## Sign-off

**Filled by:** P6 authoring lane (foundation)
**Filled on:** 2026-08-18
**TYPE window verified against registry JSON:** YES — counted 6 §-sections, T-HUB window 5-9.
