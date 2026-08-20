# P6 brief — `disclaimer` (T3 · legal terminal)

**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Tier:** T3 legal terminal · **Trace:** D-IA-026

> ## ⚠ THE SHARPEST LEGAL DEFECT IN THE ESTATE
>
> This page currently publishes **wrong-vertical copy, verbatim** — disclaimer text written for a
> **chiropractic** practice, live on TWO of the three owned properties **including the site of
> record**. The retiring properties' disclaimers are 301'd HERE, so the redirect does not fix the
> defect — **it concentrates it**. The rewrite must land **before or with** the redirect.
> **Nothing from the existing disclaimer body is carried forward.**

## Locked SEO (P5 — quote verbatim into the build; do not re-write)

- **title:** `Disclaimer - Marin Medical Aesthetics`
- **meta:** `Review the disclaimer and important information regarding treatments, results, and services provided by Marin Medical Aesthetics.`
- **primary_keyword:** `Disclaimer` · **intent:** `informational`

## Machine-block (§6.0 handoff contract)

```yaml
slug: disclaimer
type: T-LEGAL
legal_variant: document
bespoke: false
funnel_role: chrome-only
terminal: true
section_seq: [title-effective-date, anchored-toc, document-body, contact-request-line]
required_ids: [D-IA-026, D-SEO-301-PAIR, D-OFFER-023, D-OFFER-006]
links_to: [contact, consultation, privacy-policy, accessibility, before-after-photos]
links_from: [index, contact, privacy-policy, accessibility, before-after-photos, success-stories]
```

**No `legal_draft:` field is declared — deliberately.** The registry default applies: the document
body ships as a **`⚠OWNER` placeholder for counsel to complete**, not as an adapted draft. This is a
regulated medical vertical where a §651 violation is a misdemeanour and independently good cause to
suspend a physician's licence; a best-effort draft is the wrong default here. **Fail closed.**

## Outcome row (§6.1)

```
FEATURE: a disclaimer written for medical aesthetics rather than inherited from another profession  →  DO: read terms that actually describe the treatments this practice performs  →  MEANS: the page stops telling you about chiropractic care, and the two retiring properties' visitors land on something true
```

## §1 title and effective date — XS

H1 "Disclaimer". Effective date and last-updated date, both `⚠OWNER` until counsel signs off — no
date is invented. States which entity the document covers: Marin Medical Aesthetics, San Anselmo,
CA. Required data: **D-IA-026** — T3 legal/utility/commerce terminal; /disclaimer/ is one of its
members and the site of record's canonical disclaimer.

## §2 anchored contents — XS

An anchored table of contents over the clause inventory the finished document must cover, because
this URL is the single destination for the disclaimers of both retiring properties and must contain
at least what they contained. Clause inventory to cover: general information only, not medical
advice · no doctor-patient relationship formed by the site · results and individual variation ·
treatment risks and suitability · photography and testimonials · third-party links · promotional
terms · changes to the document. Required data: **D-SEO-301-PAIR** — the P5 301 ordinance under
which the retiring properties' legal set collapses into the site of record.
⚠CONDITIONAL ON F4: domain ownership of the retiring properties is UNRESOLVED, so the redirect half
is a proposal. **The rewrite half is not conditional** — this page must be correct regardless.

## §3 document body — XL

**⚠OWNER PLACEHOLDER — FOR COUNSEL.** The body ships as a structured placeholder carrying the
clause headings from §2 and nothing asserted as binding legal text. Two things are nevertheless
FIXED by upstream decisions and must appear in whatever counsel returns: (a) **not one word of the
chiropractic template survives** — the phrase "chiropractic healthcare advice" and every sentence
around it is deleted, not edited; (b) the results language is the practice's own honest ceiling —
*results are not guaranteed and may vary from person to person*, and *an evaluation determines
whether a treatment is appropriate at all, which is a decision about suitability rather than a
safety guarantee*. Required data: **D-OFFER-023** — offer-level banned claims and their safe
versions.
⚠BANNED IN THIS DOCUMENT AS EVERYWHERE: outcome guarantees, `board certified`, any dermatology
specialty implication, unqualified absolutes ("zero downtime", "painless", "no risk", "works on any
skin type"), and any superiority or definite-article uniqueness construction.
⚠The `$500 OFF` promotion published on a retiring property has restrictions that live on a SEPARATE
disclaimer page. It either retires with the domain or republishes with its terms adjacent and
legible. Do not lift the promotion onto this site without them — `⚠OWNER`, coupled to F4.

## §4 how to ask about this document — XS

A single line naming the route for questions about the disclaimer: the contact page. Terminal page —
no conversion CTA is chased from here. Required data: **D-OFFER-006** — the primary conversion goal;
/consultation/ remains the site's single conversion endpoint, but this page routes to `contact`
rather than selling.
⚠The only publishable number is (415) 785-4604 (F5 resolved 2026-08-19); no mailing address other than 100 Sir Francis Drake Blvd, San Anselmo, CA 94960. The stale 807 D Street, San Rafael address must never appear.

## Content-depth floor (§6.3 — T-LEGAL `document`)

- doc body present per variant: yes — §3, as an `⚠OWNER` placeholder with a fixed clause inventory.
- no unverified cert badges: none specified anywhere on this page.
- document variant: body carries an `⚠OWNER` placeholder rather than asserting legal text as
  binding or verified fact: yes — §3 is explicitly a placeholder for counsel, and `legal_draft:` is
  deliberately not declared.
- FEATURE-DO-MEANS row present: yes (§6.1).

## Sign-off

**Filled by:** P6 authoring lane (foundation)
**Filled on:** 2026-08-18
**TYPE window verified against registry JSON:** YES — counted 4 §-sections, T-LEGAL
`legal_variant: document` window 3-5, terminal variant with `terminal: true`.
