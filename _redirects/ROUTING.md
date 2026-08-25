# Routing at cutover — the blog stays on WordPress

Owner decision, 2026-08-25: the ~98 published articles remain on the existing WordPress
install at their current URLs. Nothing is migrated, nothing is rewritten, nothing 404s.

This is the cheapest safe answer, and the numbers back it: of the **203** live URLs that
would otherwise have 404'd at cutover, **202 are resolved by this decision alone**.

## What each side serves

**WordPress keeps 202 URLs.** Four pattern rules cover 104 of them; the remaining 98 are
root-level article paths with no shared prefix and are listed individually in
`wordpress-retained-paths.txt`.

| Rule | URLs |
|---|---|
| `/tag/*` | 70 |
| `/category/*` | 15 |
| `/author/*` | 10 |
| `/blog/*` | 9 |
| explicit article paths | 98 |

**The new build serves its 58 pages** — the home, concerns, treatments, company, legal and
utility pages. Its `sitemap.xml` lists exactly those 58 and deliberately omits `/blog/`.

**There are zero exact path collisions** between the two sets. That was checked, not
assumed.

## The one URL outside the blog decision — resolved

`/areas-of-concern/pigmented-lesions/` is live and is not a blog URL, so the decision above
does not cover it. It is handled by a **301 to `/areas-of-concern/age-spots/`**.

It was briefly treated as a missing page. It is not: `page-inventory.md` records the
age-spots leaf as *"Age spots / sun-induced pigmented lesions"*, so the prep phase
consolidated the two concerns deliberately, and the build's age-spots page covers the ground
across nine sections. Minting a 60th page would have re-created exactly the cannibalisation
the 301 ordinance spends four rows resolving elsewhere. The redirect honours the recorded
decision and keeps the URL's equity.

## The blog namespace — decided

**Owner decision 2026-08-25: `/blog/` routes to WordPress.** The build's blog page is not
served in production; WordPress's real archive answers that address, so the footer's
"Articles" link — present on all 59 pages — lands on the ~98 live articles. No markup change
was needed: the footer already points at `/blog/`, which is now unambiguously WordPress's.

`/blog/` is listed explicitly in `wordpress-retained-paths.txt` rather than left to the
`/blog/*` glob, because that pattern matches `/blog/page/2/` but not necessarily the bare
`/blog/` — and the bare one is exactly what this decision is about. WordPress therefore
serves **203** paths, not 202.

The build's `blog.html` still exists in the tree and is harmless once routing is in place.
Dropping it outright would be cleaner but changes the closed page list, which is a
prep-phase edit behind an owner gate — not worth it for a file production never serves.

## Background: why the choice was needed

The build ships a `blog.html` that reads *"No posts yet — nothing has been published here"*,
and the footer utility rail links to it from **all 59 pages**. WordPress serves a real blog
index with ~98 articles at `/blog/`.

Both want the same address. Production routing must send `/blog/` to **WordPress**, so that
the footer's "Articles" link lands on the real archive rather than on a page announcing that
nothing exists. Two options, both fine:

- **Route `/blog/` to WordPress** and leave the build's blog page unserved. No markup change
  — the footer already points at `/blog/`, which is the correct destination either way.
- **Drop `blog.html` from the build** so the placeholder cannot be served at all. Cleaner,
  but it changes the closed page list, which is a prep-phase edit behind an owner gate.

Doing neither is the bad outcome: a site telling every visitor that nothing is published,
on the same domain as 98 live articles.

Note the preview behaves differently by necessity. On `glemer-sgen-dev.github.io` the flat
`blog.html` is a real file and does serve the empty page, because there is no WordPress
behind it. That is a preview artifact, not the production intent.

## Implementing the split

Both sides serve from the same root namespace — the articles are at `/why-do-i-have-dark-
circles-san-anselmo/`, not under a `/blog/` prefix — so this cannot be a simple path-prefix
split at the edge. Whoever configures it needs the explicit list, which is why
`wordpress-retained-paths.txt` enumerates all 98 rather than hand-waving a pattern.

The practical shapes are: keep WordPress as the origin and serve the new pages from it, or
put the new site at the root and proxy the 202 listed paths back to WordPress. That is a
hosting decision, not one this build can make.
