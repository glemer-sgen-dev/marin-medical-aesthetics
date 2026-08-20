# P6 brief — `accessibility` (T3 · accessibility statement)

**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Tier:** T3 legal terminal row · **Trace:** D-IA-026

> ## ⚠ THIS PAGE CARRIES THE ADDRESS DEFECT
>
> The existing accessibility statement publishes the stale `807 D STREET, SAN RAFAEL` mailing
> address — the value that seeded the whole city conflict and propagated into third-party citations.
> **It does not survive the rebuild.** The only address that ships anywhere on this site is the
> owner-confirmed San Anselmo one.

## Locked SEO (P5 — quote verbatim into the build; do not re-write)

- **title:** `Accessibility Statement - Marin Medical Aesthetics`
- **meta:** `Learn about Marin Medical Aesthetics' commitment to website accessibility. Contact us if you need assistance accessing our website or services.`
- **primary_keyword:** `Accessibility Statement` · **intent:** `informational`

## Machine-block (§6.0 handoff contract)

```yaml
slug: accessibility
type: T-LEGAL
legal_variant: accessibility
bespoke: false
funnel_role: chrome-only
primary_cta: contact
section_seq: [hero, native-accessibility-feature, standard-targeted, contact-for-issues]
required_ids: [D-IA-026, D-BRAND-RAILS-002, D-OFFER-020, D-BRAND-RAILS-016, D-BRAND-RAILS-009]
links_to: [contact, consultation, privacy-policy, disclaimer]
links_from: [index, contact, privacy-policy, disclaimer]
```

`legal_variant: accessibility` is **not** a terminal variant — only `document` is — so this page
keeps a primary CTA and real outbound links.

## Outcome row (§6.1)

```
FEATURE: an accessibility statement that describes what the rebuilt site actually does, plus a real route for reporting a barrier  →  DO: tell the practice when something on the site blocks you, and get a human answer  →  MEANS: the statement is a commitment you can test rather than a badge, and it stops publishing an address the practice does not use
```

## §1 hero: what this page is for — S

H1 "Accessibility Statement". One sentence: the practice intends the site to be usable by everyone,
and this page says how to reach it when it is not. Required data: **D-IA-026** — T3
legal/utility/commerce terminal; /accessibility/ is one of its members.

## §2 what the rebuilt site does — M

The substantive block, and the only one that may make factual assertions: colour contrast tested
against the brand palette rather than assumed, keyboard-operable navigation, visible focus states,
alternative text on meaningful images, text that resizes without loss of content, forms with
programmatic labels, and captions on any published video. Every item listed here must be true of
the built page — the build's own visual verification gate tests contrast and tap targets, so this
list is checkable, not aspirational. Required data: **D-BRAND-RAILS-002** — the primary palette
(navy `#073772`, plum `#9e7299`, gold `#c4ad67`, cream `#efede1`, olive `#5f5842`, white), which is
what any contrast assertion is measured against.
⚠Do not list a feature the built site does not have. Delete the line instead.

## §3 the standard being worked toward — S

States WCAG 2.1 Level AA as the standard the site is measured against, described honestly as a
target and an ongoing effort — **not** as a certification, a conformance claim, or a completed
audit. Required data: **D-OFFER-020** — proof strategy `real-only`, which covers certifications and
affiliations explicitly.
⚠NO accessibility badge, seal, certification mark, third-party audit claim, remediation-vendor logo
or "fully compliant" statement. None is verified, so none ships. `⚠OWNER` if the owner later
commissions a real audit — then name the auditor and the date, or say nothing.

## §4 reporting a barrier, and how to reach the practice — XS

The route: a plain instruction to contact the practice if any part of the site or its services is
inaccessible, with what to include and where it goes. Names the San Anselmo address only. Required
data: **D-BRAND-RAILS-016** — the live baseline capture, which is where the stale San Rafael mailing
address on this very page was measured; **D-BRAND-RAILS-009** — CTA verb convention, carrying the
`⚠BLOCKED DATA` note on every phone affordance.
Phone number: (415) 785-4604 (F5 resolved 2026-08-19). Email ships as an `⚠OWNER` placeholder until confirmed. Response time is
`⚠OWNER` — no SLA is documented upstream, so none is published.

## Content-depth floor (§6.3 — T-LEGAL `accessibility`)

- doc body present per variant: yes — §2 (features) and §3 (standard) are the accessibility
  variant's body.
- no unverified cert badges: enforced explicitly at §3 — zero badges, seals or conformance claims.
- FEATURE-DO-MEANS row present: yes (§6.1).

## Sign-off

**Filled by:** P6 authoring lane (foundation)
**Filled on:** 2026-08-18
**TYPE window verified against registry JSON:** YES — counted 4 §-sections, T-LEGAL
`legal_variant: accessibility` window 3-5; non-terminal variant, so a primary CTA and `links_to`
are both present.
