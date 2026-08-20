# P6 brief — `local-community-support` (T0 · the uncontested asset)

**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Tier:** T0 foundation · **Trace:** D-IA-005 · D-IA-023

## Locked SEO (P5 — quote verbatim into the build; do not re-write)

- **title:** `Local Community Support in Marin County, CA`
- **meta:** `How Marin Medical Aesthetics supports local organizations across Marin County, including RotaCare volunteering. Based in San Anselmo, CA.`
- **primary_keyword:** `Local Community Support` · **intent:** `informational`

## TYPE decision — stated out loud, not buried

Intake F3 lists `community` in the bespoke set and directs P6 to type it `T-MARQUEE`. **This brief
does not, and says why.** `T-MARQUEE` carries a homepage-class floor of >= 12 distinct sourced
sections. The captured asset is a 292-word page listing named local organisations plus RotaCare
volunteering — genuinely differentiated (no captured competitor page-map publishes a
community-facing page at all, per D-IA-005) but nowhere near twelve sections deep. Inflating it
would mean inventing affiliations on a page whose entire value is that every name on it is real.
Typed `T-COMPANY` / `company_variant: standard`, `bespoke: false`.
**⚠OWNER / P7 SHOPPING LIST:** if the owner supplies dates, hours, amounts or named contacts for the
supported organisations, this page can carry real marquee weight later. Nothing is invented now.

## Machine-block (§6.0 handoff contract)

```yaml
slug: local-community-support
type: T-COMPANY
company_variant: standard
bespoke: false
funnel_role: F4
primary_cta: consultation
cta_secondary: about
section_seq: [hero, company-story, the-why, team-values, proof-logos, cta]
required_ids: [D-IA-005, D-BRAND-RAILS-016, D-BRAND-RAILS-005, D-BRAND-RAILS-008, D-OFFER-020, D-OFFER-006]
links_to: [about, consultation, contact, index, category-events]
links_from: [index, about, contact]
```

## Outcome row (§6.1)

```
FEATURE: a named, checkable list of the Marin organisations this practice actually supports  →  DO: see where a local practice puts its time before you decide where to spend yours  →  MEANS: the claim is verifiable by you rather than by us, which is the only kind of community claim worth publishing
```

## §1 hero — S

H1 naming local community support in Marin County. One sentence, no self-congratulation, no
superlative. One image slot, first-party only. Required data: **D-IA-005** — the About nav group,
which exists partly because this page has no captured competitor precedent.

## §2 the organisations supported — L

The substance of the page: the named local organisations the practice supports, plus the RotaCare
volunteering, as captured in the live baseline. Each entry names the organisation and, where
documented, what the support consists of. Required data: **D-BRAND-RAILS-016** — the live baseline
section-by-section capture (row 7 records nine named local organisations plus RotaCare
volunteering on the existing 292-word page).
⚠REAL-ONLY: publish an organisation only if it is on the captured list or the owner supplies it.
Do not add a logo, an endorsement, a partnership word, or a dollar figure that is not documented.
An organisation's logo may only appear with permission — otherwise name it in text.

## §3 the why — M

Why a single-physician practice publishes this at all, written in the register that is the practice's
own: plain, warm, specific, and free of the corporate-superlative and shouty-promotional registers
being retired with the microsites. Required data: **D-BRAND-RAILS-005** — voice-register
justification: warm-humanist is the only distinctive and ownable register in the estate, and it is
corroborated by patients' own words.

## §4 the register this page has to hold — M

The values block, written as conduct rather than as adjectives. Concrete commitments only. Required
data: **D-BRAND-RAILS-008** — banned superlatives and phrasings.
⚠BANNED HERE: "Most Trusted", "Award Winning" (no award is named anywhere in the estate), "the
best", "#1", "world-class", "cutting-edge", "anti-aging", any unqualified absolute, and any
definite-article uniqueness construction ("the only practice in Marin that…"). No exclamation marks,
no emoji.

## §5 what makes this page checkable — XS

The proof posture, published as a line rather than assumed: every organisation named here is named
because the practice actually supports it, and nothing on this page is an award, a rating or an
affiliation the reader cannot verify. Required data: **D-OFFER-020** — proof strategy `real-only`,
covering affiliations explicitly.
⚠No market-wide negative. Do not write that no other practice does this — a 3-7 page crawl cannot
support that, and it is not published.

## §6 closing CTA — XS

`Book a consultation` primary; `Meet Dr. Bacchi` secondary to `about`. Required data:
**D-OFFER-006** — the primary conversion goal; /consultation/ is the single conversion endpoint.
Phone number: (415) 785-4604 (F5 resolved 2026-08-19).

## Content-depth floor (§6.3 — T-COMPANY `standard`)

- standard: story + the-why + team all present: §2 (the roster — the story this page tells) · §3
  (the why) · §4 (values/conduct in place of a team block; this is a single-physician practice and
  no staff is invented).
- standard: founding facts OWNER: **⚠OWNER** — no founding narrative is captured upstream; none is
  paraphrased here.
- FEATURE-DO-MEANS row present: yes (§6.1).

## Sign-off

**Filled by:** P6 authoring lane (foundation)
**Filled on:** 2026-08-18
**TYPE window verified against registry JSON:** YES — counted 6 §-sections, T-COMPANY
`company_variant: standard` window 5-7.
