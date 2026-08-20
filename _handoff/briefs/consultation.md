# P6 brief — `consultation` (T0 · the single conversion endpoint of record)

**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Tier:** T0 foundation · **Trace:** D-IA-003 · D-IA-023

## Locked SEO (P5 — quote verbatim into the build; do not re-write)

- **title:** `Medical Aesthetics Consultation in San Anselmo, CA`
- **meta:** `Book a consultation with Dr. Chris Bacchi, MD. A comprehensive health evaluation decides whether a treatment is appropriate at all, and what the plan is.`
- **primary_keyword:** `Medical Aesthetics Consultation` · **intent:** `transactional`

**MANDATORY REWRITE carried from P4/P5:** this page's own `<title>` and H1 must both read as a
consultation, not "Book An Appointment". `/book-an-appointment/` folds into this URL; this is the
one conversion endpoint every page in the inventory terminates at.

## Machine-block (§6.0 handoff contract)

```yaml
slug: consultation
type: T-FEATURE
bespoke: false
funnel_role: F2
primary_cta: consultation-request-form
cta_secondary: contact
section_seq: [hero, pain-it-kills, benefit-pillars, capability-breakdown, proof-or-product-ui, replaces-block, cross-link-rail, faq, pricing-cta]
required_ids: [D-IA-003, D-OFFER-014, D-INCUMBENT-009, D-OFFER-002, D-IA-021, D-OFFER-018, D-OFFER-007, D-OFFER-009, D-BRAND-RAILS-009]
links_to: [areas-of-concern, treatments, about, contact, what-to-expect-during-your-med-spa-consultation-in-san-anselmo, treatments-emsella]
links_from: [index, areas-of-concern, treatments, about, contact, blog]
```

## Outcome row (§6.1)

```
FEATURE: a comprehensive physician health evaluation booked as one appointment  →  DO: bring a concern - cosmetic or functional - and have a doctor decide what, if anything, is appropriate  →  MEANS: you leave with a written plan you can act on or decline, not a device you were sold in the room
```

## §1 hero — S

H1 naming the consultation and the place. One-sentence promise of the mechanism: the evaluation
decides whether a treatment is appropriate at all, and what the plan is. Form visible above the
fold or one scroll from it. Required data: **D-IA-003** — Consultation is the single conversion
endpoint of record at /consultation/, promoted to a top-level nav slot.
**F5 RESOLVED 2026-08-19 — the canonical number is (415) 785-4604, read from the practice's own Google Business Profile and owner-confirmed. It is the only publishable number.** The `Call` affordance carries (415) 785-4604.

## §2 what the evaluation actually is — M

The section that removes the visitor's main uncertainty: what is asked, what is examined, what is
discussed. Ships the practice's own published sentence **in full and unexcerpted**: *"as part of any
treatment, she does a comprehensive health evaluation to minimize side effects and teaches clients
how their actions can maximize and sustain the benefits they achieve."* Required data:
**D-OFFER-014** — held positioning, verbatim + sourced.
⚠OWNER-UNCONFIRMED: this is what the practice publishes, not an interview answer. No claim about
who performs the evaluation, or about coverage when the physician is absent, until F6.
⚠F-BRAKE: the phrase "to minimize side effects" may only appear inside its full sentence — promoted
to a headline it drifts from process toward an outcome claim.

## §3 why an examination comes before a device — M

Three benefit pillars, each written as PROCESS. Carry the two publishable regulator quotations,
quoted and linked to mbc.ca.gov, never paraphrased. Required data: **D-INCUMBENT-009** — verified
receipts; V18 CONFIRMED (an appropriate prior examination is required and may not be delegated to
registered nurses) and V14 CONFIRMED.
⚠HARD CEILING (V13, internal authority): harm has occurred with BOTH licensed and unlicensed
injectors. No "doctor-led therefore safe", no "peace of mind because a physician is involved". The
permitted construction is: *a physician evaluates whether a treatment is appropriate at all — that
is a decision about suitability, not a safety guarantee.*

## §4 what you leave with: the written plan — M

The capability breakdown: the plan is the deliverable. What it contains, that it is written, that
declining it is a normal outcome. Required data: **D-OFFER-002** — the one-sentence offer
description: physician-supervised, non-surgical skin, face and body treatments in San Anselmo where
a licensed MD performs a full health evaluation as part of every treatment plan.

## §5 the evaluation covers function, not only appearance — S

The wedge, stated affirmatively on the conversion page: pelvic-floor, urinary and sexual-function
concerns are inside the scope of this appointment and can be raised here. Private, plain, no
euphemism, no comparison to any other practice. Required data: **D-IA-021** — Concern group:
Function, 2 leaves.

## §6 what this practice does and does not do — M

The replaces-block, written as scope rather than as a negative about anyone: name the actual
capability set, and state plainly that surgery, medical/surgical dermatology, skin-cancer
treatment, laser hair removal, laser tattoo removal and CoolSculpting are not offered here.
Required data: **D-OFFER-018** — the explicitly-not-offered list.
⚠Do not "explain" why a service is not offered, and never imply surgery. Where a bundle is named it
is always **Non-Surgical Mommy Makeover**, never the bare label.

## §7 how pricing works — S

Quote-only, consultation-led: the plan and its packaged pricing are built at the consultation. Use
the practice's own published sentence. Required data: **D-OFFER-007** — no price is published on any
owned property; quote-only is the model.
⚠No price, no "from $X" anchor, no package figure, no competitor-count statistic — ever.

## §8 questions people ask before booking — S

Minimum 3 FAQ, answered as process: what happens at the appointment · what it costs and why the
answer is "it depends on the plan" · whether a treatment is guaranteed (it is not) · whether a
functional concern can be raised here (it can). Required data: **D-OFFER-009** — the consultation is
the entry offer.
⚠"complimentary" / "free" is an UNVERIFIED placeholder — do not publish either word until the owner
confirms. Never write "results are guaranteed" or any outcome guarantee.

## §9 booking band and closing CTA — XS

The form repeated, plus the alternate routes to reach a person. `Book a consultation` is the primary
verb; `Call` is secondary and its target is the practice line. Required data: **D-BRAND-RAILS-009** —
CTA verb convention by intent (Book · Call · Explore · Read · Shop).
**F5 RESOLVED 2026-08-19 — the canonical number is (415) 785-4604, read from the practice's own Google Business Profile and owner-confirmed. It is the only publishable number.** Every `Call` CTA carries (415) 785-4604. The two microsite numbers retire with their domains and must never appear.

## Content-depth floor (§6.3 — T-FEATURE)

- >=3 benefit pillars: met at §3 (3 pillars).
- >=1 capability-breakdown card: met at §4 (the written plan) and §6 (scope in/out).
- >=1 replaces-block: met at §6 — replaces the device-menu entry point, not a named competitor.
- >=3 FAQ: met at §8 (4 specified).
- FEATURE-DO-MEANS row present: yes (§6.1).
- >=1 cited proof, no fabricated metric: met at §3 (regulator quotations, linked to source). No
  invented statistic, award, credential, price or patient quote appears anywhere on this page.

## Sign-off

**Filled by:** P6 authoring lane (foundation)
**Filled on:** 2026-08-18
**TYPE window verified against registry JSON:** YES — counted 9 §-sections, T-FEATURE window 8-10.
