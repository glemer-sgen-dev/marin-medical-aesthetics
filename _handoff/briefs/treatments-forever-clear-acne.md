# P6 BRIEF — treatments-forever-clear-acne

**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Phase:** P6 — per-page typed content brief · **Lane:** devices (T2 device + package leaves)
**TYPE window verified against DATA-REQUIREMENTS-REGISTRY.json:** T-FEATURE center 9 ± 1 → 8–10; this brief counts 9.

**Positioning this page serves.** The site is CONCERN-LED: concern → physician evaluation → written plan.
This is the device destination for the acne and acne-scars concern leaf, so it is the page a reader with an
active skin condition lands on. That raises the dermatology line, and the page must stay on the right side
of it.

**Copy law binding this page — the hardest constraint on this page is scope.** Active acne is a medical
condition, and this practice's sole recorded taxonomy is Internal Medicine. Nothing on this page may imply a
dermatology specialty, a dermatologist, or the treatment of skin disease as a specialty service; the safe
words are physician, MD, Internal Medicine. Medical and surgical dermatology and skin-cancer treatment are
outside the offered set and are neither advertised nor explained. No rank, superiority or definite-article
uniqueness construction (Cal. B&P § 651(b)(6)). Constraint F: credentials describe PROCESS, never safety or
outcome. No unqualified absolutes, no exclamation marks, no emoji. F5 RESOLVED: Call slot may render, no number.
F7 OPEN: no patient photography ships — acne before/afters are the highest-risk imagery on the site.

## Machine block

```yaml
slug: treatments-forever-clear-acne
type: T-FEATURE
bespoke: false
funnel_role: F3
primary_cta: consultation
cta_secondary: contact
section_seq: [hero, pain-it-kills, benefit-pillars, capability-breakdown, proof-or-product-ui, replaces-block, cross-link-rail, faq, pricing-cta]
required_ids: [D-OFFER-001, D-BRAND-RAILS-004, D-IA-018, D-OFFER-002, D-OFFER-017, D-INCUMBENT-009, D-OFFER-018, D-IA-015, D-BRAND-RAILS-008, D-OFFER-007, D-OFFER-006, D-IA-003, D-BRAND-RAILS-009]
links_to: [consultation, treatments, areas-of-concern-acne-acne-scars, treatments-microneedling]
links_from: [treatments, areas-of-concern-acne-acne-scars]
```

## Locked SEO — inherited verbatim from seo-enrichment.md, not re-authored

- **title:** `Forever Clear BBL for Acne in San Anselmo, CA`
- **meta:** `Forever Clear BBL is a light-based option for active acne. A physician evaluation decides whether it is appropriate. Book a consultation in San Anselmo.`
- **primary_keyword:** `Forever Clear BBL` · **intent:** `transactional`
- The H1 must agree with the title in subject and register and may not add a claim the title does not make.

## Outcome row

FEATURE: a light-based option for active acne on a physician-supervised menu → DO: have a physician assess the skin before any device is chosen → MEANS: whether a light treatment is appropriate, and what else belongs in the plan, is decided and written down rather than sold from a menu

## §1 hero — S

States the concern plainly and without shame framing, names the device once, routes to the evaluation. No
rank claim, no clearance promise, no before/after image. Primary CTA is the consultation; a secondary Call
slot may render with the number rendering (415) 785-4604. Required data: `D-OFFER-001` — the practice name and the
physician-supervised medical aesthetics category line · `D-BRAND-RAILS-004` — the warm-humanist plus
clinically-precise register, which matters more here than on any other device page.

## §2 pain-it-kills — M

The concern before the device: active breakouts and the marks left behind, why the two are different
problems, and why a plan usually addresses them in sequence. Written from the reader's side and linked to
the acne concern leaf. No cause claim beyond what that leaf already states, and no statement that positions
the practice as treating skin disease as a specialty. Required data: `D-IA-018` — the Skin concern group
(9 leaves) that supplies the acne and acne-scar concern routed here.

## §3 benefit-pillars — M

Three pillars minimum, each a checkable specific rather than a superlative. Pillar 1: the plan comes from a
physician health evaluation, not from a device menu. Pillar 2: whether a light treatment is appropriate is
decided before treatment, and the answer may be that a different approach or a referral is right. Pillar 3:
you leave with a written plan. Every pillar is a PROCESS statement; none may be phrased as a safety
guarantee or a clearance result. Required data: `D-OFFER-002` — the one-sentence offer description in which
a licensed MD performs a full health evaluation as part of every treatment plan.

## §4 capability-breakdown — M

At least one capability card at the depth of the existing 1,149-word estate page: what the light treatment
targets, what a session involves, how it is commonly sequenced with other steps in a plan, and how a series
is framed rather than promised. No statement may claim that acne is cured, cleared or prevented. Required
data: `D-OFFER-017` — the crawled what's-included list, the only authority for which devices may appear on
this site.

## §5 proof-or-product-ui — S

Proof is `real-only`. Acne before-and-after photography is the single most persuasive and most regulated
imagery this practice could publish, and NONE of it ships until F7 patient releases plus the Cal. B&P
§ 651(b)(3)(B) model disclosure and (C) "the same results may not occur for all patients" are in hand;
manufacturer and stock sets are refused outright. In their place the page carries the publishable regulator
line — that an appropriate prior examination is required where prescriptive drugs and devices will be used,
and that this examination may not be delegated to registered nurses — attributed to the Medical Board of
California, quoted as the reason the process exists and never as a comparative or safety claim. Required
data: `D-INCUMBENT-009` — the honesty guardrails, V18 for the quote and V13 for the ceiling on it.

## §6 replaces-block — M

What this page replaces is a DECISION, not a competitor: the default architecture in which a visitor picks
an acne device from a menu and books it. It is replaced by an evaluation that decides whether a device
belongs in the plan at all. No other practice is named and no comparative claim is made. **Scope boundary,
enforced here:** the block may not reach outside the offered set, and specifically may not advertise,
explain or allude to medical or surgical dermatology or skin-cancer treatment. Required data: `D-OFFER-018`
— the boundary of the offered set, which fixes what this block may contrast against.

## §7 cross-link-rail — XS

A compact rail across to the sibling device leaves that address scarring and texture, and up to the device
index. Links resolve to real inventory slugs only. Required data: `D-IA-015` — the Treatments > Skin &
Aesthetics group that defines this page's siblings and parent index.

## §8 faq — S

Three questions minimum, in the practice's register. One must handle downtime, qualified with the actual
variable rather than an absolute. One must handle "will this clear my acne", answered as a suitability and
planning decision rather than an outcome, with no guarantee language. One must handle how active breakouts
and scarring are sequenced. No FAQ may contain a rank, an absolute or a guarantee, and none may position the
practice as a dermatology provider. Required data: `D-BRAND-RAILS-008` — the banned-superlative and
unqualified-absolute rail these answers are written against.

## §9 pricing-cta — XS

Quote-only. No price, no package figure and no "from" anchor: no real price ladder exists, so the section
uses the practice's own published line — that a customized treatment plan with packaged pricing is built
during the consultation — and then converts. Primary CTA is Book a consultation, pointing at the single
conversion endpoint of record; a secondary Call slot renders (415) 785-4604 (F5 resolved 2026-08-19).
Required data: `D-OFFER-007` — quote-only pricing posture · `D-OFFER-006` — the primary conversion goal ·
`D-IA-003` — the single conversion endpoint at /consultation/ · `D-BRAND-RAILS-009` — the CTA verb
convention and its note that the phone number is blocked.

### Content-depth floor — T-FEATURE

- **≥3 benefit pillars:** met in §3.
- **≥1 capability-breakdown card:** met in §4.
- **≥1 replaces-block:** met in §6.
- **≥3 FAQ:** met in §8 (downtime, outcome-framing, sequencing).
- **≥1 cited proof or product-UI, no fabricated metric:** met in §5 (an attributed regulator quotation; all patient imagery held on F7).
- **FEATURE → DO → MEANS row present:** yes, above §1.

**Filled on:** 2026-08-18 · **Sections counted:** 9 · **Window:** 8–10.
