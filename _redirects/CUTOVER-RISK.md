# Cutover risk — 203 live URLs have no destination

> **RESOLVED 2026-08-25 — all 203.** The owner decided the blog stays on WordPress, so every
> article, tag, category, author and pagination URL below keeps serving from the existing
> install (202 URLs — nothing migrated, nothing 404s). The remaining one,
> `/areas-of-concern/pigmented-lesions/`, is not a blog URL and is handled by a 301 to
> `/areas-of-concern/age-spots/`: the prep page inventory folded that concern into the
> age-spots leaf, so the URL has a home rather than needing a 60th page. See `ROUTING.md`
> for the split, `wordpress-retained-paths.txt` for the 202 paths, and `redirects.csv` for
> the rule.
>
> **Nothing is applied to production yet** — `verify-redirects.mjs` reports 5 READY rules
> outstanding.
>
> The measurement below is left intact as the record of what was at stake.

Measured 2026-08-25 against `https://www.marinmedicalaesthetics.com`. Every number below
is a **full census**, not a sample: all 212 candidate URLs were probed individually.

## The headline

The new site is 59 pages. Production is a WordPress estate whose own sitemap lists 259
URLs, of which **47** map to a page in this build. Of the remaining 212:

| Result | Count |
|---|---|
| **Live (200) — will 404 at cutover** | **203** |
| Already 404 (stale sitemap entries) | 8 |
| Already redirecting | 1 |

The 17-row 301 ordinance covers **none** of these 203. It addresses domain consolidation
and a cannibalisation cluster — a different problem from estate coverage.

**203 is a floor, not a ceiling.** That production sitemap is dated 2023-12-14 and is
demonstrably incomplete: `/consultation/` serves 200 and is absent from it. The true
number is higher; a fresh crawl would establish it.

## What the 203 are

| Kind | Live | Note |
|---|---|---|
| Root-level pages and articles | 98 | The practice's blog archive, plus promo pages |
| `/tag/` archives | 70 | WordPress taxonomy |
| `/category/` archives | 15 | WordPress taxonomy |
| `/author/` archives | 10 | WordPress taxonomy |
| `/blog/` pagination | 9 | `/blog/page/2/` … |
| `/areas-of-concern/` leaf | 1 | See below — this one is different |

## Three findings, in order of severity

**1. The blog archive has nowhere to go — 98 live articles.**
This build ships `blog.html` as an index that reads *"No posts yet — nothing has been
published here"*, and exactly one real article
(`what-to-expect-during-your-med-spa-consultation-in-san-anselmo`). Production has ~98
live articles on subjects like sunscreen, double cleansing, dark circles and Emsculpt
safety — years of accumulated content and whatever search equity it carries. At cutover
every one of them 404s and the page that replaces them says nothing is published.
This is a content-migration decision, not a redirect decision, and it is the largest
single risk in the relaunch.

**2. 104 WordPress taxonomy URLs disappear** (70 tag + 15 category + 10 author + 9
pagination). These are lower value and are commonly noindexed anyway, but they are live
and indexable today. They need a deliberate call — most cleanly a 410, or a 301 to the
nearest real hub — rather than being left to 404 silently.

**3. One genuinely missing service page: `/areas-of-concern/pigmented-lesions/`.**
Verified live, 200, ~7,400 words, titled *"Pigmented Lesion Treatment in San Anselmo, CA"*.
It appears in **neither** the handoff **nor** the prep spec — searched both, zero
references. So it was never inventoried and never recorded as dropped; it is absent from
the closed page list rather than excluded from it. Either it becomes the 60th page or it
gets a 301 to the nearest concern, but that is an owner call.

*Correction of record:* four `/treatments/` leaves and one other `/areas-of-concern/` leaf
initially looked like the same gap. They are not — `nanolaserpeel`, `agnes`, `skin-tyte`,
`exilis-ultra` and `lipoma` all return **404 in production today**. They are stale entries
in the 2023 sitemap, not missing pages. Only `pigmented-lesions` is real.

## What this does not cover

Nothing here is a redirect rule yet. Writing 203 rules is not the answer either — the 98
articles need a migrate-or-retire decision first, and the 104 taxonomy URLs need a single
policy rather than 104 individual pairs. Once those two decisions exist, the rules follow
mechanically and `verify-redirects.mjs` can be extended to cover them.
