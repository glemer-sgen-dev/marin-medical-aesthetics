# COPY - `store` (T-INDEX, terminal utility inside Patient Resources)

> Authored at the COPY phase from `_handoff/briefs/store.md`. This page sits in the Patient Resources
> group, not in primary nav. It is a terminal utility, not an entry point.

## Locked SEO (quoted verbatim from the brief)

- **title:** `Shop Skincare Products - Marin Medical Aesthetics`

---

## §1 hero-filter (XS)

**H1:** Skincare products

One line: products the practice actually stocks, filterable by category.

**Filter toolbar fields (exactly the declared set, nothing more):** category, tags.

Build note, not page copy: a control with no backing field is inert and must not ship. The toolbar
exposes `category` and `tags` only.

---

## §2 featured-pinned (S)

⚠OWNER: **omit this block.** One pinned item may sit above the grid, but it has to be a REAL item.
No product line qualifies from the crawled what-is-offered record, and the brief is explicit that an
unqualified block is omitted rather than filled with a placeholder. Supply the stocked list and the
pinned item ships.

---

## §3 list-grid (S, repeating template declared once)

**Item template fields:** name, category, tags, short description, and an action.

Each item carries its `category` and `tags` values as `data-*` attributes so the toolbar binds to
real values rather than to decoration.

**⚠EMPTY STATE, flagged explicitly and not hidden:**

> **Nothing is listed here yet.**
> The product list has not been supplied. Rather than show an empty filter or invent items, this page
> says so plainly. To ask what the practice stocks, call (415) 785-4604 or book a consultation.

Build note, not page copy: no fabricated item, date, outlet, rating or logo. A filter must never ship
with zero items silently; the empty state above is the required explicit flag.

---

## §4 category-routing (XS)

**Section heading:** Looking for something else?

Start with the concern rather than the product. The concern layer is the front door of this site, and
the treatment index sits behind it for readers who already know the device name.

- **Explore areas of concern** (primary route)
- **Browse treatments** (secondary route)

---

## §5 closing-cta (XS)

**Heading:** One quiet action

**What does it cost?** Quote-only. During your consultation, we will build a customized treatment
plan with packaged pricing.

- **Book a consultation**
- Call (415) 785-4604

---

## Outcome row

```
FEATURE: a product list that is either real or openly empty, with a filter bound to actual fields
DO: see what the practice stocks without being sold a page of invented items
MEANS: an empty shelf is stated, not disguised, so what is listed here can be trusted
```

## Authoring notes (not page copy)

- **D-OFFER-008** ships as its verbatim question in §5. Its canonical is
  `⚠OWNER-PLACEHOLDER - NO REAL PRICE DATA EXISTS. DO NOT PUBLISH.`, so the QUESTION is published and
  the answer is the practice's own quote-only line. No figure, no "from $X", no package price.
- No fabricated products. The featured block is omitted per the brief rather than filled.
- No "free", no guarantee, no superiority claim.
