# COPY - `local-community-support` (T-COMPANY, company_variant standard)

> Authored at the COPY phase from `_handoff/briefs/local-community-support.md`.

## Locked SEO (quoted verbatim from the brief)

- **title:** `Local Community Support in Marin County, CA`
- **meta:** `How Marin Medical Aesthetics supports local organizations across Marin County, including RotaCare volunteering. Based in San Anselmo, CA.`

---

## §1 hero (S)

**H1:** Local community support in Marin County

The practice supports a number of local organisations, and Dr. Bacchi volunteers with RotaCare. This
page lists what that actually consists of.

**Image slot:** ⚠OWNER, first-party only. No stock photograph of unrelated volunteers is used here.
A generic image of strangers doing charity work would misrepresent the page's own subject.

---

## §2 the organisations supported (L)

**Section heading:** Who the practice supports

**RotaCare.** Dr. Bacchi volunteers with RotaCare, the free clinic network serving patients without
insurance coverage.

**⚠OWNER PLACEHOLDER, and a genuine seam gap, not an authoring shortcut.** The brief records that the
existing page names **nine local organisations** in addition to RotaCare, captured in the live
baseline on 2026-08-13. Those names live in the prep tree at `EXISTING-A-MODEL.md` §9, and that file
did **not** travel across the handoff seam. The build reads only from `_handoff/`, where RotaCare is
the sole organisation named anywhere. Rather than guess at nine local charity names on a medical
practice's site, this section ships RotaCare plus this placeholder. Supply the list, or carry
`EXISTING-A-MODEL.md` §9 across the seam, and the block fills immediately.

Each entry, when it lands, names the organisation and, where it is documented, what the support
actually consists of.

⚠REAL-ONLY, binding on whoever fills this: publish an organisation only if it is on the captured list
or the owner supplies it. No logo, no endorsement wording, no partnership language, and no dollar
figure that is not documented. An organisation's logo appears only with that organisation's
permission. Otherwise it is named in text, which is both safer and more honest.

---

## §3 the why (M)

**Section heading:** Why a single-physician practice publishes this

Because it is checkable, and because it is true. A practice this size does not have a corporate
giving programme; it has a physician who volunteers at a free clinic and a short list of local
organisations it puts something behind. Saying that plainly is worth more than a page of language
about community and giving back.

It is also the register the practice actually has. Warm, specific, unshowy. That voice is the one
thing in the existing material that is genuinely its own, and it is corroborated by the way patients
describe her in their own reviews.

---

## §4 the register this page has to hold (M)

**Section heading:** How the practice conducts itself

Written as conduct rather than as adjectives:

- **Every organisation named here is one the practice actually supports.** Nothing is listed for
  appearances.
- **Nothing on this page is an award, a rating or an affiliation you cannot check.** Where support
  consists of volunteering, it says volunteering. Where it consists of something else, it says what.
- **The physician performs the evaluation and makes the clinical decision.** That does not change
  because a practice is small, and it is the same commitment on this page as on every other.
- **No claim is made here about what other practices in Marin do or do not do.** This page is about
  this one.

---

## §5 what makes this page checkable (XS)

**Section heading:** How to check any of this

Every organisation named above is named because the practice supports it, and each one can be
contacted independently. Nothing here is an award, a ranking, a certification or an affiliation that
exists only as a logo on a website.

---

## §6 closing CTA (XS)

**Heading:** Start with the evaluation

- **Book a consultation** (primary)
- **Meet Dr. Bacchi** (secondary)
- Call (415) 785-4604

---

## Outcome row

```
FEATURE: a community page naming only organisations the practice actually supports, with no logos it has no permission for
DO: verify any claim on this page by contacting the organisation itself
MEANS: a short honest list is worth more than a long one you cannot check
```

## Authoring notes (not page copy)

- **BANNED and observed:** "Most Trusted", "Award Winning" (no award is named anywhere in the estate),
  "the best", "#1", "world-class", "cutting-edge", "anti-aging", any unqualified absolute, and any
  definite-article uniqueness construction. No exclamation marks, no emoji.
- **No market-wide negative.** It is not written that no other practice does this. A 3 to 7 page crawl
  cannot support that claim, so it is not made.
- **SEAM GAP TO RAISE UPSTREAM:** C2 cites a capture (`D-BRAND-RAILS-016` row 7, nine named
  organisations) whose actual content is not in `_handoff/`. Either the names belong in the handoff or
  the brief should not direct a build to publish them. This is the same class as the missing
  `D-FOUNDER-*` on `about`.
