# P6 brief — `contact` (T1 · NAP + terminal lead capture)

**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Tier:** T1 hub · **Trace:** D-IA-005 · D-IA-024

> ## ⚠ F5 LANDS HARDEST HERE
>
> **F5 RESOLVED 2026-08-19 — the canonical number is (415) 785-4604.** This brief specifies the phone
> affordance goes and what it is labelled; it **does not and may not name a number**. Ship the
> flagged placeholder `0000000000` with a `⚠OWNER` marker and put the real value on the owner
> shopping list — per the T-CONTACT floor that is a DEGRADE, never a blocker.
> **Four competing sets of opening hours** exist too: hours ship as `⚠OWNER` placeholder.
> **The stale mailing address `807 D Street, San Rafael` must never appear**, nor the broken hybrid
> the flagship currently publishes (`807 D Street, San Anselmo, CA 94901` — 94901 is San Rafael's
> ZIP). That hybrid is the defect that seeded the whole city conflict.

## Locked SEO (P5 — quote verbatim into the build; do not re-write)

- **title:** `Contact Marin Medical Aesthetics - San Anselmo, CA`
- **meta:** `Reach Marin Medical Aesthetics in San Anselmo, CA. Send a message or book a consultation with Dr. Chris Bacchi, MD for a health evaluation first.`
- **primary_keyword:** `Contact Marin Medical Aesthetics` · **intent:** `navigational`

## Machine-block (§6.0 handoff contract)

```yaml
slug: contact
type: T-CONTACT
bespoke: false
funnel_role: F2
terminal: true
section_seq: [hero, form, routing-block, trust-response-line]
required_ids: [D-IA-005, D-OFFER-006, D-BRAND-RAILS-009, D-BRAND-RAILS-016, D-OFFER-014]
links_to: [consultation, about, local-community-support]
links_from: [index, consultation, about, local-community-support, accessibility, privacy-policy]
```

## Outcome row (§6.1)

```
FEATURE: one message form and one set of contact details, on one page, for a practice that currently publishes several  →  DO: reach the practice without having to guess which of its published numbers or addresses is current  →  MEANS: you get an answer from the right place, and the site stops contradicting itself about where it is
```

## §1 hero — XS

H1 naming the practice and San Anselmo. One line: send a message here, or book a consultation
directly. No image slot required. Required data: **D-IA-005** — the About nav group; `contact` is
member 3 of it.

## §2 the message form — S

The page's job. Fields: name · email · phone (optional) · what you would like help with (free text,
prompting a concern rather than a device) · preferred contact method. Submitting is the terminal
action — this page has no downstream CTA to chase. Required data: **D-OFFER-006** — the primary
conversion goal; the live estate's only conversion actions are /consultation/, the retired
/book-an-appointment/, and phone.
⚠MIGRATION OBLIGATION, raised not buried: the estate's existing lead-capture forms are vendor-hosted
third-party embeds and the leads land in that third party's system. Consolidation is not only DNS
and 301s — the form endpoint must be migrated deliberately, and the privacy policy must describe
whatever processor ends up handling it.

## §3 where the practice is, and how to reach it — S

The routing block: street address in San Anselmo, opening hours, email, and a labelled phone
affordance. The CTA verb set is fixed — `Book` for the consultation, `Call` for the phone line.
Required data: **D-BRAND-RAILS-009** — CTA verb convention by intent, carrying the explicit
`F5 RESOLVED 2026-08-19` — the contact page publishes (415) 785-4604 and 100 Sir Francis Drake Blvd, San Anselmo, CA 94960. ⚠HOURS remain an OWNER PLACEHOLDER: four sets circulate and two conflict, so no hour-set may be invented; **D-BRAND-RAILS-016** — the
live baseline capture, which is where the competing addresses, hours and numbers were measured.
⚠Placeholders, all flagged `⚠OWNER`: phone `0000000000`; hours `[hours on file]`; any map embed
pinned only after the address is owner-confirmed. One canonical address, one canonical number, one
canonical hour set — chosen by the owner, not inferred here.

## §4 what happens after you send it — XS

The trust line: what the practice does with the message and what the next step is — a consultation
whose output is a written plan. Sets expectation without promising a response time nobody has
confirmed. Required data: **D-OFFER-014** — held positioning, verbatim + sourced; the evaluation is
what the visitor is actually being routed toward.
⚠`⚠OWNER` on any response-time SLA — none is documented anywhere upstream, so none is published.
No guarantee of any outcome, and no "complimentary"/"free" consultation wording until confirmed.

## Content-depth floor (§6.3 — T-CONTACT)

- form + routing-block present: yes — §2 (form) and §3 (routing block).
- terminal: exempt from the CTA-pair requirement — `terminal: true` is set in the machine-block.
- contact-channel fields expected-with-placeholder: phone, hours and response-time all ship as
  flagged `⚠OWNER` placeholders (F5 unresolved); the San Anselmo street address ships from
  client-rules and the stale San Rafael address is explicitly excluded. **DEGRADES, not a blocker.**
- FEATURE-DO-MEANS row present: yes (§6.1).

## Sign-off

**Filled by:** P6 authoring lane (foundation)
**Filled on:** 2026-08-18
**TYPE window verified against registry JSON:** YES — counted 4 §-sections, T-CONTACT window 3-5,
terminal TYPE with `terminal: true` in place of a primary CTA.
