# P6 brief — `privacy-policy` (T3 · legal terminal)

**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Tier:** T3 legal terminal · **Trace:** D-IA-026

## Locked SEO (P5 — quote verbatim into the build; do not re-write)

- **title:** `Privacy Policy - Marin Medical Aesthetics`
- **meta:** `How Marin Medical Aesthetics collects, uses, and protects your personal and health information, and the choices you have about it.`
- **primary_keyword:** `Privacy Policy` · **intent:** `informational`

**Estate defect carried:** the existing page has **no meta description** (one of only four such
pages estate-wide). The meta above is net-new and must ship.

## Machine-block (§6.0 handoff contract)

```yaml
slug: privacy-policy
type: T-LEGAL
legal_variant: document
bespoke: false
funnel_role: chrome-only
terminal: true
section_seq: [title-effective-date, anchored-toc, document-body, contact-request-line]
required_ids: [D-IA-026, D-SEO-301-PAIR, D-OFFER-006, D-BRAND-RAILS-009]
links_to: [contact, disclaimer, accessibility, consultation]
links_from: [index, contact, disclaimer, accessibility, store, download-app]
```

**No `legal_draft:` field is declared — deliberately.** The registry default applies: the document
body ships as a **`⚠OWNER` placeholder for counsel to complete**. A privacy policy on a medical
practice's site describes handling of health-adjacent personal information; nothing about that may
be asserted as verified fact by this brief. **Fail closed.**

## Outcome row (§6.1)

```
FEATURE: one privacy policy of record, describing the forms and processors this site actually uses  →  DO: find out what a message you send this practice is collected into, and who else touches it  →  MEANS: the three properties stop publishing three different answers, and the one that survives matches the site as rebuilt
```

## §1 title and effective date — XS

H1 "Privacy Policy". Effective date and last-updated date, both `⚠OWNER` until counsel signs off —
no date is invented. Names the entity the policy covers and the single site it applies to. Required
data: **D-IA-026** — T3 legal/utility/commerce terminal; /privacy-policy/ is one of its members and
the surviving policy of record.

## §2 anchored contents — XS

An anchored table of contents over the clause inventory, sized to absorb what the retiring
properties' policies covered, since those URLs collapse into this one. Clause inventory to cover:
what is collected · how it is collected (forms, analytics, cookies) · why · who it is shared with,
including third-party processors · retention · your choices and requests · children · security ·
changes · how to contact us. Required data: **D-SEO-301-PAIR** — the P5 301 ordinance collapsing the
retiring properties' legal set into the site of record.
⚠CONDITIONAL ON F4 for the redirect half only. The policy itself must be correct regardless.

## §3 document body — XL

**⚠OWNER PLACEHOLDER — FOR COUNSEL.** Structured placeholder carrying the §2 clause headings.
Three build-side facts the finished policy MUST reflect, because they are decided upstream rather
than by counsel: (a) the site's data-collection surface is the consultation/contact request form —
that is where personal information enters, and the policy must describe those fields; (b) the
estate's existing lead-capture forms are **vendor-hosted third-party embeds** and leads land in that
third party's system, so a processor disclosure is required and the migration decision must be made
before the policy is finalised; (c) the loyalty-app download page routes to a third-party app with
its own data handling, which the policy must either cover or explicitly exclude. Required data:
**D-OFFER-006** — the primary conversion goal, which identifies the form as the collection surface.
⚠No compliance badge, certification, seal or framework claim is specified anywhere on this page.
None is verified, so none ships.

## §4 how to make a request or ask a question — XS

A single line naming the route for privacy requests and questions: the contact page, plus an email
address once owner-confirmed. Terminal page — no conversion CTA is chased from here. Required data:
**D-BRAND-RAILS-009** — CTA verb convention, carrying the `⚠BLOCKED DATA` note on every phone
affordance.
Phone number: (415) 785-4604 (F5 resolved 2026-08-19). The contact email ships as an `⚠OWNER` placeholder until confirmed; no
mailing address other than the owner-confirmed San Anselmo one — the stale `807 D Street, San
Rafael` address must never appear.

## Content-depth floor (§6.3 — T-LEGAL `document`)

- doc body present per variant: yes — §3, as an `⚠OWNER` placeholder with a fixed clause inventory
  plus the three build-side facts it must reflect.
- no unverified cert badges: none specified; stated explicitly at §3.
- document variant: body carries an `⚠OWNER` placeholder rather than asserting legal text as
  binding or verified fact: yes — `legal_draft:` is deliberately not declared.
- FEATURE-DO-MEANS row present: yes (§6.1).

## Sign-off

**Filled by:** P6 authoring lane (foundation)
**Filled on:** 2026-08-18
**TYPE window verified against registry JSON:** YES — counted 4 §-sections, T-LEGAL
`legal_variant: document` window 3-5, terminal variant with `terminal: true`.
