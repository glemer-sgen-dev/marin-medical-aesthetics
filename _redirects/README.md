# 301 redirects — marinmedicalaesthetics.com

Implementation of the P5 301 ordinance (`_handoff/seo-enrichment.md` §5.2, 17 rows).
Authored 2026-08-25. **Nothing here has been applied to production** — see *Where this
gets applied* below.

## What production actually is

Verified from live response headers on 2026-08-25:

| | |
|---|---|
| Server | nginx |
| Stack | PHP 8.3.33, WordPress, Plesk |
| Existing redirects | done by WordPress (`X-Redirect-By: WordPress`), not server config |

So an `.htaccess` would be **inert**. Two equivalent artifacts are provided:
`redirects.csv` (WordPress layer, matches how the live redirects already work) and
`nginx-redirects.conf` (server layer). Apply one, not both.

## The 17 ordinance rows, as implemented

**8 cross-domain rows — WITHDRAWN, not authored.** F4 was waived (B1): ownership of
`marinskinrejuvenation.com` and `marinbodysculpt.com` is unestablished, and the ordinance
states plainly that no redirect may be authored against either domain.
`marinincontinencetherapy.com` is a deliberate recorded blank — a fourth domain outside
the stated 3-domain scope, which the estate itself treats as external. None of these is a
defect to fix; they are a decision to respect.

**4 rows READY to apply** — all same-domain, none F4-gated, none commercial:

| Source | → | Type |
|---|---|---|
| `/exion-skin-tightening-in-the-bay-area/` | `/treatments/exion-by-btl/` | 301 |
| `/skin-tightening/` | `/areas-of-concern/loose-skin/` | 301 |
| `/non-surgical-neck-skin-tightening-in-san-anselmo/` | `/areas-of-concern/turkey-neck/` | 301 |
| `/dt_mega_menus/megamenu-3/` | — | **410** |

**2 rows ALREADY IN FORCE** — verified live, no action needed:
`/treatments/vanquish/` and `/braintap-sessions/` both return 301 to their
treatments-prefixed destinations.

**3 rows NOT IMPLEMENTED — owner decisions:**

- `/book-an-appointment/` → `/consultation/`. The ordinance flags this as *recommended, not
  asserted*. Both pages self-canonical, so the site asserts no winner; the internal signal
  favouring the source (62 files vs 8) measures nav-template repetition, not equity, and no
  backlink or Ads data was ever captured.
- `/emsculpt-neo-special/` and its `//` variant → `/treatments/emsculpt-neo/`. Commercial,
  not an IA call: this is a live promo page, and its `tel:` CTA is conversion-tracked to the
  retiring microsite's number — the tracked conversion path and the redirect plan already
  contradict each other.

## Three corrections to the ordinance's own status codes

Every source and destination was probed live on 2026-08-25 rather than trusted from the
capture, which changed three rows:

1. `/treatments/vanquish/` is recorded as *"NOT `[LIVE]`: both URLs still serve 200"*. It is
   now a live 301. The record is stale.
2. `/braintap-sessions/` is confirmed live, matching the prose correction already in §5.2.
3. `/dt_mega_menus/megamenu-3/` currently returns **301 → `/`**, which is exactly the merge
   the ordinance rejects (*"a 301 would merge a duplicate into the page it duplicates"*).
   Applying the 410 rule **changes** existing behaviour rather than adding to it.

## Verification

All four READY destinations return 200: `/treatments/exion-by-btl/`,
`/areas-of-concern/loose-skin/`, `/areas-of-concern/turkey-neck/`. All three
owner-decision destinations also return 200, so nothing is blocked on a missing page.
No rule here points at a URL that does not resolve.

## Where this gets applied

Production is a live WordPress site this build has no access to, and applying redirects to
a real medical practice's site is an owner action. Apply `redirects.csv` through the
existing redirect plugin, or hand `nginx-redirects.conf` to whoever manages the Plesk
vhost. Re-run the probes above afterwards to confirm each source returns 301 (or 410) and
each destination still returns 200.
