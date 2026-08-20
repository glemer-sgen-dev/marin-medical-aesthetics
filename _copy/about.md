# COPY - `about` (T-COMPANY, company_variant standard)

> Authored at the COPY phase from `_handoff/briefs/about.md`. Typed T-COMPANY, not T-MARQUEE, and the
> brief says why out loud: no `D-FOUNDER-*` id exists anywhere upstream, so a founder-weight page
> would have to be filled by invention on the most legally exposed page on the site.

## Locked SEO (quoted verbatim from the brief)

- **title:** `Dr. Chris Bacchi, MD - Medical Aesthetics in San Anselmo`
- **meta:** `Meet Dr. Chris Bacchi, MD. Internal Medicine, UCSF School of Medicine class of 1993, and the health evaluation that shapes each treatment plan.`

---

## §1 hero (S)

**H1:** Meet Dr. Chris Bacchi, MD

She is the physician who runs this practice in San Anselmo and the one who performs the evaluation
that every treatment plan starts from.

**Portrait slot:** ⚠OWNER, first-party photograph only. No portrait ships until the practice supplies
a real photograph of Dr. Bacchi. No generated likeness of a real, named physician is acceptable here
under any circumstances, and none has been produced. This page ships without its strongest visual
asset until that photograph arrives, and that is the correct trade.

---

## §2 the story, told only from what is documented (L)

**Section heading:** The record, as it can be published

Dr. Chris Bacchi is a physician. She holds an MD and graduated from **UCSF School of Medicine, class
of 1993**. Her sole taxonomy of record is **Internal Medicine**. Her California medical licence is
**A60805**.

⚠OWNER DECISION REQUIRED, and the reason this section is shorter than the brief intends. The brief
directs publishing "licensed to practise medicine in California since 1996", and `content-bible.md`
endorses that exact phrasing. But `client-rules.json` records `license_status` as **UNVERIFIED**: the
California licence lookup at `search.dca.ca.gov` was blocked by a bot check and the date was never
confirmed against the primary source. A licence tenure claim on a physician's own practice site is
regulatory copy. This copy therefore ships the licence NUMBER, which is on the record, and HOLDS the
since-1996 date until someone completes the manual lookup. The moment that check is done, the
sentence is one edit away.

**Hard bans observed in this section above all others:** no "board certified" in any phrasing, since
certification is not publicly verifiable and the certification field is empty on both name records.
No wording implying a dermatology board specialty, and never the word "dermatologist". The safe
words are physician, MD, Internal Medicine. No "a physician for over 25 years", which goes stale on
its own; a reader can do the arithmetic from a date. Nothing about Harvard or MGH, NIH, the UC
Berkeley master's, the Cambridge bioethics certificate, or the textbook chapter, all of which stay
omitted until documented. No award, no ranking.

⚠OWNER: the practice's founding is recorded upstream as a 2019-12-01 business start, but no founder
narrative was ever captured. This page ships no origin story rather than a paraphrase of one.

---

## §3 the why: an evaluation that reaches further than the mirror (M)

**Section heading:** Why an evaluation comes first

This practice is built around a health evaluation rather than a treatment menu, and the evaluation's
scope covers function as well as appearance. In the practice's own published words, carried in full:

> as part of any treatment, she does a comprehensive health evaluation to minimize side effects and
> teaches clients how their actions can maximize and sustain the benefits they achieve.

That is what the first appointment is for. It ends in a written plan you keep.

⚠OWNER-UNCONFIRMED: the sentence above is what the practice publishes, not an interview answer.
"She performs it herself" may not carry a headline until documented, and nothing is claimed here
about coverage when the physician is absent.

---

## §4 how she works with patients (M)

**Section heading:** How she works

The practice describes its own register this way: Dr. Bacchi welcomes clients in a comfortable,
gentle and affirming environment, collaborating with each one to bring their inner beauty to the
surface using highly individualised treatments.

That is the warm, plain register this practice actually has, and it is the most distinctive voice
anywhere in its existing material. It is worth keeping.

Build note, not page copy: the source line contains the grammatical error "bring each their", which
is verbatim from the source and is corrected in the rebuild, as the brief instructs.

⚠No exclamation marks and no emoji anywhere on this page. Avoid "med spa", "clinic" and "beauty" as
the primary frame, "anti-aging", "girls", "ladies", and any phrasing that implies surgery.

---

## §5 what this page will not claim (XS)

**Section heading:** What this page does not claim

An evaluation determines whether a treatment is appropriate at all. It is not a safety or outcome
guarantee.

That distinction is deliberate and it is the ceiling on everything above. A physician deciding
whether a treatment suits you is a judgement about suitability. It is not a promise about the
result, and a credential is never offered here as one: harm has occurred with both licensed and
unlicensed injectors, so no licence, degree or title is presented on this site as a safety
guarantee. No claim of professional superiority appears anywhere on this page, and the indefinite
article is used throughout for that reason.

---

## §6 closing CTA (XS)

**Heading:** Start with the evaluation

- **Book a consultation** (primary)
- **Explore local community support** (secondary)
- Call (415) 785-4604

---

## Outcome row

```
FEATURE: a named, licensed physician whose verifiable credential floor is published without embellishment
DO: check who is actually making the clinical decision before you book anything
MEANS: you can judge the practice on facts you are able to confirm, instead of on adjectives it awarded itself
```

## Authoring notes (not page copy)

- **D-OFFER-014** ships as its exact held-positioning line in §5, unparaphrased.
- **The since-1996 licence date is HELD, not dropped.** It is the one place this copy departs from its
  brief, and it does so because C3 marks the status UNVERIFIED while C2 and C4 direct publishing it.
  Fail closed on a regulated credential claim: publish the licence number that is on the record, hold
  the tenure date, and flag it. This is the same conflict still sitting unresolved in the BRAND-CARD
  and FEEL approval notes.
- No generated portrait of Dr. Bacchi. An imagery waiver covers rooms and textures, never a likeness
  of a real named person.
- The page is honest about being thinner than it should be: the founder story is the missing asset,
  and capturing it is on the owner shopping list.
