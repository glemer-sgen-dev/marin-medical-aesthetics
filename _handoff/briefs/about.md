# P6 brief — `about` (T0 · Dr. Bacchi)

**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Tier:** T0 foundation · **Trace:** D-IA-005 · D-IA-023

## Locked SEO (P5 — quote verbatim into the build; do not re-write)

- **title:** `Dr. Chris Bacchi, MD - Medical Aesthetics in San Anselmo`
- **meta:** `Meet Dr. Chris Bacchi, MD. Internal Medicine, UCSF School of Medicine class of 1993, and the health evaluation that shapes each treatment plan.`
- **primary_keyword:** `Dr. Chris Bacchi` · **intent:** `informational`

## TYPE decision — stated out loud, not buried

Intake F3 lists `about` in the bespoke set and directs P6 to type it `T-MARQUEE` so `bespoke: true`
is accepted. **This brief deliberately does not do that, and here is the reason.** A `T-MARQUEE`
homepage-weight page needs >= 12 distinct sourced sections; a founder-led `T-COMPANY` needs a
`D-FOUNDER-*` id. **No `D-FOUNDER-*` id exists anywhere upstream** — the founder story was never
captured, and every rich biographical item that would fill those sections (Harvard/MGH, NIH, UC
Berkeley, Cambridge, the textbook chapter) is HELD under F6 as unverified. Typing this page for
weight it cannot honestly carry would force invention on the most legally exposed page on the site.
It is therefore `T-COMPANY` / `company_variant: standard`, `bespoke: false`.
**⚠OWNER / P7 SHOPPING LIST:** capture the real founder story and mint `D-FOUNDER-*`, then this page
can be re-typed founder-led without inventing a word.

## Machine-block (§6.0 handoff contract)

```yaml
slug: about
type: T-COMPANY
company_variant: standard
bespoke: false
funnel_role: F4
primary_cta: consultation
cta_secondary: local-community-support
section_seq: [hero, company-story, the-why, team-values, proof-logos, cta]
required_ids: [D-IA-005, D-OFFER-023, D-OFFER-014, D-BRAND-RAILS-010, D-INCUMBENT-009, D-OFFER-006]
links_to: [consultation, local-community-support, contact, areas-of-concern, treatments, success-stories]
links_from: [index, consultation, contact, local-community-support]
```

## Outcome row (§6.1)

```
FEATURE: a named, licensed physician whose verifiable credential floor is published without embellishment  →  DO: check who is actually making the clinical decision before you book anything  →  MEANS: you can judge the practice on facts you are able to confirm, instead of on adjectives it awarded itself
```

## §1 hero — S

H1 "Meet Dr. Chris Bacchi, MD". One portrait slot, first-party only. A single sentence placing her
inside the practice and its About group. Required data: **D-IA-005** — the About nav group
(/about/ · /local-community-support/ · /contact/).

## §2 the story, told only from what is documented — L

The biography as it can be published today: physician, MD, **UCSF School of Medicine class of
1993**, California licence A60805, **licensed to practise medicine in California since 1996**, sole
NPPES taxonomy **Internal Medicine**. Nursing-to-medicine arc may be told only as far as the
documented record reaches. Required data: **D-OFFER-023** — offer-level banned claims and their safe
versions.
⚠HARD BANS, this section above all others: `board certified` in any phrasing (F6 — certification is
not publicly verifiable; Doximity's certification field is empty on both name records); any wording
implying a **dermatology** board specialty or the word "dermatologist" — the safe words are
`physician`, `MD`, `Internal Medicine`; "a physician for over 25 years" (stale — let the reader do
the arithmetic from 1996); Harvard/MGH dermatology training, NIH Bethesda, the UC Berkeley master's,
the Cambridge bioethics certificate, and the Fitzpatrick topical-steroids chapter — **all omitted
until F6 documents them**. No award, no ranking, no "Most Trusted", no "Award Winning".

## §3 the why: an evaluation that reaches further than the mirror — M

Why the practice is built around a health evaluation, and why its scope includes function as well as
appearance. Ships the practice's own published sentence **in full, never excerpted**: *"as part of
any treatment, she does a comprehensive health evaluation to minimize side effects and teaches
clients how their actions can maximize and sustain the benefits they achieve."* Required data:
**D-OFFER-014** — held positioning, verbatim + sourced.
⚠OWNER-UNCONFIRMED: this is what the practice publishes, not an interview answer. *"She performs it
herself"* may not carry a headline until F6, and no claim may be made about coverage when the
physician is absent.

## §4 how she works with patients — M

The register block: the practice's own words about collaboration, in the warm-humanist voice that is
the only distinctive one in the estate. The verbatim source line is *"Dr. Bacchi welcomes clients in
a comfortable, gentle, and affirming environment, collaborating with each one to bring each their
inner beauty to the surface using highly individualized treatments."* — **the grammatical error
"bring each their" is verbatim from source and must be corrected in the rebuild.** Required data:
**D-BRAND-RAILS-010** — the cited voice sample.
⚠No exclamation marks, no emoji. Avoid `med spa`, `clinic`, `beauty` as the primary frame,
`anti-aging`, `girls`, `ladies`, and any phrasing implying surgery.

## §5 what this page will not claim — XS

A short, plainly-written limit published as part of the page rather than hidden in a disclaimer: an
evaluation determines whether a treatment is appropriate at all; it is not a safety or outcome
guarantee. No superiority claim of professional standing appears anywhere — indefinite article only.
Required data: **D-INCUMBENT-009** — verified receipts; V21 (Cal. B&P §651(b)(6): a claim of
professional superiority must be substantiable with objective scientific evidence), V22, V13.
⚠V13 is the internal ceiling: harm has occurred with BOTH licensed and unlicensed injectors, so no
credential may ever be framed as a safety guarantee. The counterfeit-product fact pattern stays off
the site.

## §6 closing CTA — XS

`Book a consultation` primary; `Explore local community support` secondary. Required data:
**D-OFFER-006** — the primary conversion goal; /consultation/ is the single conversion endpoint.
Phone number: (415) 785-4604 (F5 resolved 2026-08-19).

## Content-depth floor (§6.3 — T-COMPANY `standard`)

- standard: story + the-why + team all present: §2 (story) · §3 (the why) · §4 (how she works —
  the single-physician equivalent of the team block, stated as such, no staff invented).
- standard: founding facts OWNER: **⚠OWNER** — the practice's founding (BBB records a 2019-12-01
  business start) is recorded upstream but no founder narrative was ever captured; the page ships no
  origin story and carries an owner placeholder instead of a paraphrase.
- FEATURE-DO-MEANS row present: yes (§6.1).

## Sign-off

**Filled by:** P6 authoring lane (foundation)
**Filled on:** 2026-08-18
**TYPE window verified against registry JSON:** YES — counted 6 §-sections, T-COMPANY
`company_variant: standard` window 5-7.
