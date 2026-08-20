# COPY - `contact` (T-CONTACT, terminal lead capture)

> Authored at the COPY phase from `_handoff/briefs/contact.md`. Prose only. The brief is the
> directive; this file is the finished text the template pours in. Voice per `content-bible.md`;
> microcopy per `_MICROCOPY-VOICE.md`. The verb set is fixed: **Book** for the consultation, **Call**
> for the phone line.

## Locked SEO (quoted verbatim from the brief, not re-written)

- **title:** `Contact Marin Medical Aesthetics - San Anselmo, CA`
- **meta:** `Reach Marin Medical Aesthetics in San Anselmo, CA. Send a message or book a consultation with Dr. Chris Bacchi, MD for a health evaluation first.`

---

## §1 hero (XS)

**H1:** Contact Marin Medical Aesthetics in San Anselmo

Send a message here, or book a consultation directly. Either one reaches the same practice, and the
same physician reads what you write.

---

## §2 the message form (S)

**Section heading:** Send a message

**Intro line:** Tell us what you would like help with. You do not need to know which treatment you
want, or whether one applies to you at all. That is what the evaluation is for.

**Fields:**

| field | label | helper text |
|---|---|---|
| name | Your name | |
| email | Email | Where a reply should go. |
| phone | Phone (optional) | Only if you would rather be called than emailed. |
| message | What would you like help with? | Describe the concern in your own words. A symptom, an area, or a question is enough. |
| preferred | Preferred contact method | Email or phone. |

**Submit button:** Send message

**Under the button:** Sending this does not book an appointment. It starts a conversation.

⚠OWNER, carried from the brief and not resolved here: the existing lead-capture forms in the estate
are vendor-hosted third-party embeds, and leads currently land in that third party's system.
Consolidation is not only DNS and redirects. The form endpoint has to be migrated deliberately, and
whatever processor ends up handling it must be named in the privacy policy.

---

## §3 where the practice is, and how to reach it (S)

**Section heading:** Where to find us

**Address**
100 Sir Francis Drake Blvd
San Anselmo, CA 94960

**Phone**
(415) 785-4604 · **Call**

**Consultation**
**Book a consultation**

**Hours**
⚠OWNER PLACEHOLDER: `[hours on file]`. Four different sets of opening hours are in circulation
across the practice's own properties and two of them directly conflict, so no hour set is published
here and none has been invented. The owner picks the canonical set and it ships.

⚠OWNER: a map embed is pinned only after the address is owner-confirmed.

**Note for the build, not for the page:** one canonical address, one canonical number, one canonical
hour set. The stale mailing address at 807 D Street, San Rafael must never appear, and neither must
the broken hybrid the flagship currently publishes (807 D Street, San Anselmo, CA 94901, where 94901
is San Rafael's ZIP). That hybrid is the defect that seeded the whole city conflict.

---

## §4 what happens after you send it (XS)

**Section heading:** What happens next

Your message is read by the practice and routed to a consultation, which is where a plan actually
gets made. The consultation is a physician health evaluation covering function as well as
appearance, and it ends in a written plan you keep.

An evaluation determines whether a treatment is appropriate at all. It is not a safety or outcome
guarantee.

⚠OWNER: no response-time commitment is published. None is documented anywhere upstream, so none is
promised here. Supply one and it ships.

---

## Outcome row (carried from the brief)

```
FEATURE: one message form and one set of contact details, on one page, for a practice that currently publishes several
DO: reach the practice without having to guess which of its published numbers or addresses is current
MEANS: you get an answer from the right place, and the site stops contradicting itself about where it is
```

## Authoring notes (not page copy)

- **D-OFFER-014** ships as its exact held-positioning line in §4, unparaphrased.
- **No pricing language of any kind**, and specifically no "free" or "complimentary" consultation
  wording. The brief bans it outright until the owner confirms, and `client-rules.json` records
  `real_price_data_available: false`.
- No response-time SLA, no outcome guarantee, no superiority claim.
- **Discrepancy inside the brief, flagged rather than silently resolved:** its F5 banner still says
  the page "does not and may not name a number" and directs the `0000000000` placeholder, but §3 of
  the same brief carries `F5 RESOLVED 2026-08-19` and names (415) 785-4604 and the San Anselmo
  address. The banner is the stale half. This copy follows the RESOLVED state, which also matches C7
  §5 rule 4 and the locked chrome. Worth correcting upstream so both halves of the brief agree.
