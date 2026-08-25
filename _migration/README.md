# Blog migration — source material and the decision it needed

> **DECIDED 2026-08-25: the blog stays on WordPress.** No articles are migrated, none of the
> 56 rails-flagged posts need rewriting, and the ~98 article URLs keep serving from the
> existing install. See `../_redirects/ROUTING.md`.
>
> This archive is therefore **not** a migration queue. It is kept because it is a complete,
> structured capture of the blog as it stood on 2026-08-25 — useful if the decision is ever
> revisited, if individual posts are later rewritten to the rails, or simply as a content
> backup independent of the WordPress install. The analysis below stands as the reasoning
> behind the decision.

`blog-archive/` holds every live article from `marinmedicalaesthetics.com`, captured
2026-08-25. This is the raw material a migration needs, whichever route is taken. **No
pages have been added to the build** — see *Why this stopped here*.

## What was captured

98 live root-level articles, 97 with body text extracted. One
(`/members-only-holiday-gathering-dec-4-2023/`) yielded no body — it appears to be a gated
or empty event page. Two more (`/confident-natural-look/`, `/groundbreaking-women/`) are
40-50 words and read as promo panels rather than articles.

Each record carries `url`, `title`, `description`, `published`, `headings`, `paragraphs`,
`wordCount` and a per-article `rails` finding. `_index.json` lists all of them newest-first.

## What the corpus actually is

| | |
|---|---|
| Date range | 2019-05-21 → **2023-11-27** |
| Dormant | **~2.7 years** — nothing published since Nov 2023 |
| Body length | median **372 words**; 28 under 300; only 5 at 600+ |
| Rails-compliant | **42 of 98** |
| Need an edit first | **56 of 98** |

What trips the 56, against this build's own `client-rules.json`:

| Term | Articles |
|---|---|
| "the best" | 21 |
| guarantee / risk-free / painless / permanent-removal language | 17 |
| "anti-aging" | 13 |
| "clinic" | 6 |
| "cutting-edge" | 3 |
| "med spa", "#1", "girls" | 1 each |

These are not stylistic preferences — they are the banned-vocabulary and
outcome-claim rails the whole 59-page build was written under. Importing the archive
unfiltered would reintroduce, at scale, exactly the claims the build was built to exclude,
onto a real medical practice's site.

## Why this stopped here

New pages cannot be added inside the build tree. `verify-brief-consumed.mjs:12` states it
plainly: *"if `_handoff/briefs/` EXISTS but THIS page's brief is missing → fail-CLOSED (an
invented page in a spec'd site)."* This site has 59 briefs, and `_handoff/` is G-SEAM
protected — it must never be hand-edited.

So migrating articles as pages is a **prep-phase** operation, not a build one:

1. P4 — add them to the page inventory and sitemap · **owner-approval gate**
2. P6 — author a brief per article · **owner-approval gate**
3. P7 — re-seam the handoff
4. ⑥ BULK — build the pages

Both P4 and P6 carry owner sign-off by design, and the page list is described in the prep
skill as a *closed manifest* — "do not invent pages". Re-opening it for 98 pages is a
scope decision, not a mechanical step.

## The choice

- **Migrate all 98** — site goes 59 → 157 pages; 56 articles need rewriting to clear the
  rails first. Largest effort, recovers the most URLs.
- **Migrate a curated subset** — e.g. the 42 already rails-clean, or the strongest by
  search value, and 301 the rest to the nearest concern or treatment page.
- **Leave the blog on WordPress** — keep the existing install serving `/blog/` and the
  article URLs while the new site takes the rest. Nothing 404s, nothing needs rewriting.
  This is the common relaunch pattern and the cheapest safe answer.
- **Retire and redirect** — 301 all 98 to the closest concern/treatment page. Cleanest
  content position given a 2.7-year-dormant, median-372-word archive; forfeits whatever
  long-tail traffic the posts still earn.

Nothing above can be chosen from the data alone: it depends on what those 98 URLs are
actually worth in search, and no analytics or Search Console data has ever been supplied
to this build.
