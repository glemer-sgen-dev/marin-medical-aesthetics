# P6 brief — `success-stories` (T1 · Real Results, testimonial half)

**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Tier:** T1 hub · **Trace:** D-IA-004 · D-IA-024

> ## ⚠ GATE — anything outcome-bearing is HARD-GATED
>
> A written patient story is still patient material. **No story, quote, photograph or video that
> asserts a result ships until waiver F7 (documented patient releases) clears**, and any pair of
> images that ever appears here inherits the **Cal. B&P §651(b)(3)(B)** model disclosure and
> **§651(b)(3)(C)** "the same results may not occur for all patients" statement. The third-party
> review corpus (Google, Yelp) is a DIFFERENT class of proof and is not F7-gated — but it ships
> under **16 C.F.R. Part 465**, unedited, with the platform named.

## Locked SEO (P5 — quote verbatim into the build; do not re-write)

- **title:** `Patient Reviews and Testimonials - San Anselmo, CA`
- **meta:** `Patient stories from Marin Medical Aesthetics in San Anselmo, published with permission and unedited. Individual experiences vary.`
- **primary_keyword:** `Patient Reviews` · **intent:** `commercial`

## Machine-block (§6.0 handoff contract)

```yaml
slug: success-stories
type: T-HUB
bespoke: false
funnel_role: F4
primary_cta: consultation
cta_secondary: before-after-photos
section_seq: [hero-category-outcome, proof-data-point, why-this-area-wedge, sub-area-blocks, routing-band, closing-cta]
required_ids: [D-IA-004, D-OFFER-019, D-INCUMBENT-009, D-BRAND-RAILS-018, D-OFFER-020, D-OFFER-006]
links_to: [before-after-photos, consultation, about, areas-of-concern, treatments]
links_from: [index, before-after-photos, consultation, about]
```

## Outcome row (§6.1)

```
FEATURE: the practice's real third-party review corpus surfaced as it stands, unedited and unrounded  →  DO: read what actual patients wrote, on platforms you can go and check yourself  →  MEANS: the proof is auditable by you, and nothing has been curated into a shape the raw source would not support
```

## §1 hero: real words, named sources — S

H1 naming patient reviews and testimonials in San Anselmo. One sentence stating the standard:
published with permission, unedited, individual experiences vary. Required data: **D-IA-004** — Real
Results, the proof hub over /before-after-photos/ + /success-stories/.

## §2 the review corpus as it actually stands — M

The substantive proof block: **4.8 across 96 Google reviews**, platform named and the rating **not
rounded up**, linked out so the reader can verify. This corpus already exists and is near-invisible on
the current site; surfacing it is the objective. Required data: **D-OFFER-019** — the numbered build
objectives (19.2 — the real review corpus is under-surfaced).

**RE-VERIFIED 2026-08-19.** The rating 4.8 was read on the **Google Business Profile itself** (the
`g.page` share link hard-coded in the client's own site, resolving to the Maps place page, DOM
`aria-label "4.8 stars"`) — which **closes the standing audit flag** at `EXISTING-A-MODEL.md` line 214
that the GBP had never been read. The count 96 was read live on the Google-sourced mirror, which
renders its own source breakdown as Google (96) / Birdeye (0), with the distribution 5★=90 · 4★=0 ·
3★=0 · 2★=2 · 1★=4. That sums to exactly 96 and means 458/96 = 4.7708, which displays as 4.8 at one
decimal place — internally consistent.
⚠The COUNT remains mirror-sourced: the signed-out GBP render exposes the rating but not a review count.
⚠**Re-verify by LIVE PAGE READ only, never a search snippet.** The search index still serves the stale
"82 reviews" title for the very same mirror URL that live-reads "96 reviews". A SERP snippet is not
verification, and this exact trap is already documented at `EXISTING-A-MODEL.md` line 123.
⚠Sentiment is **verified NOT uniformly positive** — this is now fact, not inference: **6 of the 96
reviews sit at 2★ or below** (2× 2★, 4× 1★, with zero 3★ and zero 4★). It may not be represented as
uniformly positive, and no review may be suppressed or selectively gated.

> **HOLD — NO YELP FIGURE SHIPS.** The `68 Yelp reviews` figure (captured 2026-08-13) could **not** be
> re-verified on 2026-08-19: `yelp.com`, `m.yelp.com` and `m.yelp.ca` all returned **HTTP 403**, a text
> proxy returned a CAPTCHA, and the paid SERP API returned **40100 not authorized**. The only surviving
> evidence is a search-index title — the same evidence class **proven stale this very pass** for the
> mirror. The Yelp **star rating** has never been verified at all.
> ⚠**Possible DUPLICATE listing:** two Yelp slugs are in circulation —
> `/biz/marin-medical-aesthetics-san-anselmo` and `/biz/marin-medical-aesthetics-san-rafael` — which is
> consistent with the known stale "807 D Street, San Rafael" citation propagation. If both exist, the
> review corpus is **SPLIT** and no single Yelp number is publishable at all.
> **No Yelp count or rating ships until read from Yelp directly and the duplicate is resolved.**
> Publishing Google alone is fully compliant: the FTC rule requires that figures shown be genuine and
> unedited, not that every platform be shown.

## §3 the rules every published testimonial ships under — S

The standard, published rather than assumed: no fake, insider, incentivised, employee-written or
selectively-gated review; nothing solicited in exchange for anything of value; negative reviews not
suppressed. Required data: **D-INCUMBENT-009** — verified receipts; V26 (16 C.F.R. Part 465,
effective 2024-10-21, a trade regulation rule).
⚠V26 correction carried intact: civil penalties are NOT automatic — the FTC must prove actual or
fairly-implied knowledge, and the figure quoted in secondary coverage is a ceiling, not a
per-violation certainty. Do not publish a penalty figure on the site at all.

## §4 patients' own words, and the line between quoting and adopting — S

How real patient language may be used: mirrored in the site's own register where it is ordinary
description, and quoted with attribution where it is a claim. *"THE BEST MED SPA EVER"* (Google, Esme
S., 5 stars) is usable **only** as a clearly attributed customer quotation inside a review block —
never as a heading, a pull-quote styled as our claim, or site voice. Required data:
**D-BRAND-RAILS-018** — words and phrases to mirror, `real_only`, each with its source.
⚠Adopting a customer's superlative as our own is our superiority claim under Cal. B&P §651(b)(6).
The mirrorable words are the ordinary ones: approachable, kind, warm, professional.

## §5 written stories, and why the gallery is still empty — XS

The interim state and the routing: written patient stories publish only under a documented release
(F7); until then the page carries the third-party corpus and an honest statement of the standard,
plus a route to `before-after-photos` and into `consultation`. Required data: **D-OFFER-020** — proof
strategy `real-only` across testimonials, reviews, photography, credentials, awards, metrics and
affiliations.
⚠No invented patient, quote, name, initial, city or star rating. Not one.

## §6 closing CTA — XS

`Book a consultation` primary; `See before and after photos` secondary. Required data:
**D-OFFER-006** — the primary conversion goal. Phone number: (415) 785-4604 (F5 resolved 2026-08-19).

## Content-depth floor (§6.3 — T-HUB)

- >=1 sub-area block per routed leaf: met — §5 routes to the other member of the Real Results slot
  (`before-after-photos`) explicitly.
- >=1 proof element: met at §2 — the genuine third-party corpus, platform-named, unrounded, with its
  verification limits stated on the page's own terms.
- every sub-area block links to its deep page: yes; all `links_to` slugs resolve in
  `page-inventory.md`.
- FEATURE-DO-MEANS row present: yes (§6.1).

## Sign-off

**Filled by:** P6 authoring lane (foundation)
**Filled on:** 2026-08-18
**TYPE window verified against registry JSON:** YES — counted 6 §-sections, T-HUB window 5-9.
