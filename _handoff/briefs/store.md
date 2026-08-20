# store — P6 typed content brief

**Client:** Marin Medical Aesthetics, San Anselmo CA (Dr. Bacchi, she/her) · **Phase:** P6 · **Family:** `D-BRIEF`
**Page TYPE:** T-INDEX — registry window 4–6 counted `## §N` sections; this brief declares **5**.
**Group:** Patient Resources · **Tier:** T3 terminal, kept OUT of primary nav.

## Locked SEO — inherited verbatim from P5 `seo-enrichment.md`; the build does NOT rewrite these

- **title:** `Shop Skincare Products - Marin Medical Aesthetics`
- **meta description:** `Shop professional skincare products from Marin Medical Aesthetics. Find advanced skincare solutions to support healthy, radiant-looking skin.`
- **primary keyword:** `Shop Skincare Products`
- **search intent:** `transactional`

## Machine-block — parsed by G6 (this skill) and GW (client-site-build)

```yaml
slug: store
type: T-INDEX
bespoke: false
funnel_role: F4
primary_cta: consultation
cta_secondary: contact
filter_fields: category, tags
sort: category, name
section_seq: [hero-filter, featured-pinned, list-grid, category-routing, closing-cta]
required_ids: [D-IA-006, D-IA-026, D-OFFER-017, D-BRAND-RAILS-018, D-BRAND-RAILS-013, D-OFFER-010, D-IA-001, D-IA-002, D-IA-003, D-OFFER-006, D-BRAND-RAILS-009]
links_to: [treatments, consultation]
links_from: [index]
```

> **Filter-field set (registry check 2c).** `filter_fields: category, tags` — `category` and `tags` are always required (they bind to `data-cat` / `data-tags`). The sort deliberately offers NO price ordering. `D-OFFER-008` is a non-publishable placeholder and waiver F1 is open, so there is no price data to bind — a price sort would ship styled-but-inert. Add it only when a real ladder exists.

## Outcome row (required)

FEATURE: the retail medical-skincare range the practice actually stocks, listed honestly and filterable on fields that carry real values  →  DO: browse what genuinely exists rather than a styled grid  →  MEANS: the filter returns real items, and an empty state says so instead of pretending.

## Copy law inherited by every section below (page-wide, non-negotiable)

- **Banned (`D-OFFER-023`, `D-BRAND-RAILS-008`):** "The Most Trusted", "Award Winning", "board certified", "the best", "#1", "world-class", "cutting-edge", "anti-aging", "results are guaranteed".
- **Cal. B&P §651(b)(6):** no professional-superiority claim. **The definite article is itself a uniqueness claim** — never "the … practice in Marin".
- **No dermatology specialty implication.** Sole NPPES taxonomy is Internal Medicine. Safe words: "physician", "MD", "Internal Medicine".
- **CONSTRAINT F (the brake):** FDA records harm with BOTH licensed and unlicensed injectors — credentials may NEVER be framed as a safety guarantee. Write PROCESS, never outcome.
- **No unqualified absolutes.** Never "a physician for over 25 years" (stale — licence dates from 1996).
- **Voice `D-BRAND-RAILS-004`:** warm-humanist plus clinically precise. **No exclamation marks (`D-BRAND-RAILS-006`), no emoji (`D-BRAND-RAILS-007`).**
- **Never name, rank or characterise a competitor.**
- **F5 RESOLVED 2026-08-19:** the phone CTA carries (415) 785-4604 — read from the practice own Google Business Profile and owner-confirmed. It is the only publishable number; the two microsite numbers retire with their domains.
- **F7 OPEN:** no before/after imagery until releases plus Cal. B&P §651(b)(3)(B)/(C) are in hand.

> **PAGE CAUTION.** Retail must not read as the practice's primary frame. `D-BRAND-RAILS-019` avoids "beauty" as a primary frame, and the positioning is evaluation-first — the store is downstream of a plan, never the entry point.

## §1 hero-filter — XS

Required data: `D-IA-006` (Patient Resources group — this page sits inside it, not in primary nav) · `D-IA-026` (T3 terminal tier).

Slim title band plus the filter toolbar. The toolbar exposes exactly the fields declared in `filter_fields` above and nothing more — a control with no backing field is inert and must not ship.

## §2 featured-pinned — S

Required data: `D-OFFER-017` (the crawled what-is-actually-offered list — the only permitted source for anything named here) · `D-BRAND-RAILS-018` (register words to mirror).

One pinned item above the grid. It must be a REAL item; if none qualifies, omit the block rather than promote a placeholder.

## §3 list-grid — S (repeating template, counted once)

Required data: `D-BRAND-RAILS-013` (`real-only` for ALL proof) · `D-OFFER-010` (no guarantee exists on any owned property).

The repeating item template, declared ONCE — item count is a build-time concern and is not gated. Each item carries the `filter_fields` values as `data-*` attributes so the toolbar binds to real values. **No fabricated item, date, outlet, rating or logo.** Registry floor: never ship a filter with zero items — flag the empty state explicitly.

## §4 category-routing — XS

Required data: `D-IA-001` (the `/areas-of-concern/` hub — the concern-led entry layer) · `D-IA-002` (the Treatments index, demoted below the concern layer).

Route out of the list and back into the site's actual funnel: the concern layer first per `D-IA-001`, the device index second per `D-IA-002`. This page is a terminal utility, not an entry point.

## §5 closing-cta — XS

Required data: `D-IA-003` (Consultation endpoint) · `D-OFFER-006` (primary conversion goal) · `D-BRAND-RAILS-009` (CTA verbs: Book / Call / Explore / Read / Shop).

One quiet action: **Book a consultation**. **F5 RESOLVED 2026-08-19 — use (415) 785-4604.**

## Content-depth floor (T-INDEX registry floor)

- **item-template field set declared:** yes — `filter_fields: category, tags`.
- **≥1 featured + the repeating list:** yes — §2 pinned item plus the §3 repeating template.
- **never ship a filter with 0 items:** stated explicitly in §3 as a FLAG-empty requirement.
- **FEATURE → DO → MEANS row present:** yes.

## Sign-off

**Filled by:** operator, completing the 22 briefs the P6 authoring lanes did not reach (lane 2 died 3×, lane 3 2×, lane 4 1×)
**Filled on:** 2026-08-19
**TYPE window verified against registry JSON:** YES — 5 `## §N` sections; T-INDEX window 4–6.
**Section id-map verified:** 3 content sections with disjoint id sets; hero-filter and closing-cta are the exempt bookends.
