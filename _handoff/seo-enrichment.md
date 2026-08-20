# P5 — SEO ENRICHMENT — Marin Medical Aesthetics

**Phase:** P5 — SEO enrichment · **Family:** `D-SEO` (one typed row per page + `D-SEO-301-PAIR` ordinance)
**Client:** Marin Medical Aesthetics, San Anselmo CA · Dr. Chris Bacchi, MD (she/her)
**Output path:** `Code/client-site-prep/marin-medical-aesthetics/_spec/seo-enrichment.md`
**Gate:** `verify-seo-complete.mjs` (G5) — `PreToolUse(Write)` on this file
**Precondition (verified this pass):** `page-inventory-manifest.json{ready_for_typing}` = `true`, `page_count` = 59.

**Regulated vertical.** Every title and meta below is bound by California medical advertising law
(Cal. B&P § 651), by `client-rules.json` `banned_vocab` / `banned_claims` / `voice`, and by the 32 HOLDS
rows in `content-bible.md`. Constraint F applies throughout: credentials describe the PROCESS (an
evaluation decides whether a treatment is appropriate at all), never a safety or outcome guarantee.
**F5 is OPEN** — four competing phone numbers exist and none is confirmed, so no title or meta in this
file carries a phone number. The single digit string in the entire set is `1993` in the `about` meta,
the verified UCSF School of Medicine class year.

## §5.0 — The positioning these rows express

The original "physician-led" wedge was FALSIFIED at P2 (a competitor publishes it more explicitly). The
approved wedge, locked at M§1.1–1.4, is **the evaluation’s REACH**: a physician health evaluation covering
FUNCTION as well as appearance, so pelvic-floor, urinary and sexual-function concerns sit alongside skin,
face and body. The site is CONCERN-LED — the reader starts from a concern, is routed to a physician
evaluation, and leaves with a written plan. It is not a device grid. Two rows state the wedge in plain
words (`areas-of-concern-urinary-incontinence`, `areas-of-concern-sexual-function-enhancement`), the
promoted hub row carries it, and the Treatments row enacts the device-index DEMOTION.

No row makes a uniqueness or superiority claim. The definite article is itself a uniqueness claim under
B&P § 651(b)(6), so every construction here is indefinite; there is no "only", "best", "premier",
"leading" or "#1" anywhere in the set.

---

## §5.1 — MASTER SEO TABLE (59 rows, one per page in the closed inventory)

**Slug-status legend** (the tag lives INSIDE the first cell): `[U]` unchanged · `[R]` rewritten ·
`[N]` net-new. Counts across this table: **52 [R] · 5 [U] · 2 [N] = 59**.

> **Two emit traps, both proven by execution rather than reasoning, recorded so the next author does not
> re-discover them.** (1) NO title, meta, keyword or intent cell may contain a pipe. The gate parses rows
> with `line.split()` on the pipe, so the estate’s house title style (Thing in San Anselmo, CA, pipe, Marin
> Medical Aesthetics) shatters a row into 6 cells: the title truncates, the keyword index goes to -1, and the
> row blocks. Backslash-escaping does not help — JavaScript `split` is literal. Every title below uses `-`.
> (2) The header’s first cell must be EXACTLY the word `slug`. Writing it as the column is DESCRIBED (slug
> followed by a bracketed pipe-separated U/R/N legend) puts two pipes inside the header, cell 0 becomes
> `slug [U`, the header-skip regex `/^slug$/i` fails, and the header is parsed as a data row that then
> blocks the phase. The legend therefore lives in prose above, never in the header.

| slug | title | meta | primary_keyword | intent |
|------|-------|------|-----------------|--------|
| index [R] | Medical Aesthetics in San Anselmo - Physician Evaluation | Concerns come first at Marin Medical Aesthetics in San Anselmo: a physician health evaluation covering function as well as appearance, then your plan. | Medical Aesthetics in San Anselmo | commercial |
| consultation [R] | Medical Aesthetics Consultation in San Anselmo, CA | Book a consultation with Dr. Chris Bacchi, MD. A comprehensive health evaluation decides whether a treatment is appropriate at all, and what the plan is. | Medical Aesthetics Consultation | transactional |
| about [R] | Dr. Chris Bacchi, MD - Medical Aesthetics in San Anselmo | Meet Dr. Chris Bacchi, MD. Internal Medicine, UCSF School of Medicine class of 1993, and the health evaluation that shapes each treatment plan. | Dr. Chris Bacchi | informational |
| local-community-support [R] | Local Community Support in Marin County, CA | How Marin Medical Aesthetics supports local organizations across Marin County, including RotaCare volunteering. Based in San Anselmo, CA. | Local Community Support | informational |
| areas-of-concern [R] | Areas of Concern in San Anselmo - Skin, Body & Function | Start with the concern, not the device. Skin, face, body, and pelvic-floor or urinary function concerns, each routed to a physician evaluation. | Areas of Concern | commercial |
| treatments [R] | Aesthetic Treatments in San Anselmo, CA - Marin County | The devices and services Dr. Bacchi uses, from injectables and lasers to Emsella. Which one suits you is decided at your consultation, not before. | Aesthetic Treatments in San Anselmo | commercial |
| before-after-photos [R] | Before and After Photos - San Anselmo, CA | Before and after photography is published with a documented patient release. The same results may not occur for all patients. Book a consultation. | Before and After Photos | commercial |
| success-stories [R] | Patient Reviews and Testimonials - San Anselmo, CA | Patient stories from Marin Medical Aesthetics in San Anselmo, published with permission and unedited. Individual experiences vary. | Patient Reviews | commercial |
| contact [R] | Contact Marin Medical Aesthetics - San Anselmo, CA | Reach Marin Medical Aesthetics in San Anselmo, CA. Send a message or book a consultation with Dr. Chris Bacchi, MD for a health evaluation first. | Contact Marin Medical Aesthetics | navigational |
| areas-of-concern-acne-acne-scars [R] | Acne and Acne Scar Treatment in San Anselmo, CA | What drives active acne and acne scarring, and which treatments Dr. Bacchi uses for each. A physician evaluation first, then a written plan. San Anselmo. | Acne and Acne Scar | commercial |
| areas-of-concern-age-spots [R] | Age Spots Treatment in San Anselmo, CA - Marin County | Sun-induced age spots explained, with the treatments used for them at our San Anselmo practice. Start with a physician evaluation and a written plan. | Age Spots | commercial |
| areas-of-concern-hyperpigmentation [R] | Hyperpigmentation Treatment in San Anselmo, CA | Uneven tone and dark patches have different causes. A physician evaluation in San Anselmo sorts out which, then sets a written treatment plan. | Hyperpigmentation | commercial |
| areas-of-concern-melasma [R] | Melasma Treatment in San Anselmo, CA - Marin County | Melasma behaves differently from ordinary pigmentation. See how a physician evaluation in San Anselmo decides what is appropriate, and what is not. | Melasma | commercial |
| areas-of-concern-sun-damage [R] | Sun Damage Treatment in San Anselmo, CA - Marin | Cumulative sun damage shows up as tone, texture and spots. A physician evaluation in San Anselmo decides which treatments suit your skin. | Sun Damage | commercial |
| areas-of-concern-uneven-skin-texture [R] | Uneven Skin Texture Treatment in San Anselmo, CA | Rough texture and visible pores, explained plainly, with the treatments used for them in San Anselmo. Your evaluation ends in a written plan. | Uneven Skin Texture | commercial |
| areas-of-concern-rosacea [R] | Rosacea Treatment in San Anselmo, CA - Marin County | Persistent facial redness and rosacea, what causes flare-ups, and which treatments are used in San Anselmo. A physician evaluation sets the plan. | Rosacea | commercial |
| areas-of-concern-broken-capillaries [R] | Broken Capillaries Treatment in San Anselmo, CA | Facial vascular lesions and broken capillaries, and how the Clear V laser is used for them in San Anselmo. A physician evaluation decides suitability. | Broken Capillaries | commercial |
| areas-of-concern-spider-veins [R] | Spider Vein Treatment in San Anselmo, CA - Marin | Spider veins, what causes them, and the Clear V laser used for them in San Anselmo. A physician evaluation decides whether treatment is appropriate. | Spider Vein | commercial |
| areas-of-concern-fine-lines [R] | Fine Lines Treatment in San Anselmo, CA - Marin | Fine lines around the eyes and mouth, and the treatments used for them in San Anselmo. A physician evaluation first, then a written plan you keep. | Fine Lines | commercial |
| areas-of-concern-wrinkles [R] | Wrinkle Treatment in San Anselmo, CA - Marin County | Dynamic and static wrinkles are not the same, and are not treated the same. A physician evaluation in San Anselmo sets the plan. Book a consultation. | Wrinkle | commercial |
| areas-of-concern-jowls [R] | Jowls Treatment in San Anselmo, CA - Marin County | Lower-face laxity and jowls, what causes them, and the treatments used in San Anselmo. A physician evaluation decides what is appropriate for you. | Jowls | commercial |
| areas-of-concern-turkey-neck [R] | Turkey Neck Treatment in San Anselmo, CA - Marin | Neck laxity, often called turkey neck: what causes it and which treatments are used in San Anselmo. A physician evaluation sets the written plan. | Turkey Neck | commercial |
| areas-of-concern-double-chin [R] | Double Chin Treatment in San Anselmo, CA - Marin | Submental fullness under the chin, and the non-surgical treatments used for it in San Anselmo. A physician evaluation decides suitability first. | Double Chin | commercial |
| areas-of-concern-loose-skin [R] | Loose Skin and Skin Laxity in San Anselmo, CA | Skin laxity on the face, neck and body, explained. A physician evaluation in San Anselmo decides which non-surgical treatments are appropriate. | Loose Skin | commercial |
| areas-of-concern-cellulite [R] | Cellulite Treatment in San Anselmo, CA - Marin County | Cellulite, what it actually is, and how Emtone is used for it at our San Anselmo practice. A physician evaluation comes first. Book a consultation. | Cellulite | commercial |
| areas-of-concern-stubborn-fat [R] | Stubborn Fat Treatment in San Anselmo, CA - Marin | Fat that resists diet and exercise, and the non-surgical treatments used for it in San Anselmo. A physician evaluation decides what is appropriate. | Stubborn Fat | commercial |
| areas-of-concern-core-strength [R] | Core Strength and Abdominal Tone in San Anselmo, CA | Core strength and abdominal tone, and how Emsculpt NEO is used for them in San Anselmo. A physician evaluation comes first, then a written plan. | Core Strength | commercial |
| areas-of-concern-muscle-development [R] | Muscle Development and Tone in San Anselmo, CA | Muscle definition and development, and how Emsculpt NEO is used for it at our San Anselmo practice. Your physician evaluation sets the written plan. | Muscle Development | commercial |
| areas-of-concern-urinary-incontinence [R] | Urinary Incontinence Treatment in San Anselmo, CA | Urinary leakage and pelvic-floor weakness are health concerns, not just cosmetic ones. A physician evaluation in San Anselmo, then Emsella if suitable. | Urinary Incontinence | commercial |
| areas-of-concern-sexual-function-enhancement [R] | Sexual Function Enhancement in San Anselmo, CA | Sexual function is part of a physician health evaluation here, alongside skin, face and body. San Anselmo and Marin County. Book a private consultation. | Sexual Function Enhancement | commercial |
| treatments-botox-dysport [R] | Botox and Dysport Treatment in San Anselmo, CA | Botox and Dysport for frown lines and crow's feet, planned around a physician evaluation. Book a consultation in San Anselmo, Marin County. | Botox | transactional |
| treatments-clearsilk [R] | ClearSilk Laser Treatment in San Anselmo, CA | ClearSilk laser addresses skin tone, redness and texture. A physician evaluation decides whether it suits your skin. Book a consultation in San Anselmo. | ClearSilk | transactional |
| treatments-halo-laser-treatment [R] | Halo Laser Resurfacing in San Anselmo, CA | Halo hybrid fractional laser resurfacing for sun damage and texture, chosen through a physician evaluation. Book a consultation in San Anselmo, Marin. | Halo Laser | transactional |
| treatments-forever-young-bbl [R] | Forever Young BBL Treatment in San Anselmo | Forever Young BBL uses broadband light for sun damage, redness and uneven tone. Your evaluation comes first. Book a consultation in San Anselmo. | Forever Young BBL | transactional |
| treatments-forever-clear-acne [R] | Forever Clear BBL for Acne in San Anselmo, CA | Forever Clear BBL is a light-based option for active acne. A physician evaluation decides whether it is appropriate. Book a consultation in San Anselmo. | Forever Clear BBL | transactional |
| treatments-clear-v [R] | Clear V Laser for Veins in San Anselmo, CA | Clear V laser addresses spider veins, broken capillaries and visible vessels. A physician evaluation comes first. Book a consultation in San Anselmo. | Clear V | transactional |
| treatments-scarlet-rf [R] | Scarlet RF Microneedling in San Anselmo, CA | Scarlet RF pairs microneedling with radiofrequency for skin firmness and texture. Your evaluation comes first. Book a consultation in San Anselmo. | Scarlet RF | transactional |
| treatments-microneedling [R] | SkinPen Microneedling in San Anselmo, CA | SkinPen microneedling for skin texture and scarring, with a physician evaluation deciding whether it is right for you. Book a consultation in San Anselmo. | SkinPen | transactional |
| treatments-emface [R] | EmFace Treatment in San Anselmo, CA | EmFace is a non-invasive treatment addressing facial skin and muscle together. A physician evaluation decides if it fits your plan. Book a consultation. | EmFace | transactional |
| treatments-exion-by-btl [R] | EXION Skin Tightening in San Anselmo, CA | EXION by BTL uses radiofrequency and ultrasound for skin tightening and texture, planned by physician evaluation. Book a consultation in San Anselmo. | EXION Skin Tightening | transactional |
| treatments-medical-facial [R] | Medical Facial Treatment in San Anselmo, CA | A medical facial for cleansing, exfoliation and skin health, matched to your skin by a physician evaluation. Book a consultation in San Anselmo. | Medical Facial | transactional |
| treatments-obagi-skintrinsiq [R] | Obagi Skintrinsiq Facial in San Anselmo, CA | Obagi Skintrinsiq pairs a device-led facial with Obagi skincare, selected during a physician evaluation. Book a consultation in San Anselmo, Marin. | Obagi Skintrinsiq | transactional |
| treatments-vanquish-me [R] | Vanquish ME Body Contouring in San Anselmo | Vanquish ME is a non-contact treatment for the abdomen and thighs. A physician evaluation decides whether it is appropriate. Book a consultation. | Vanquish ME | transactional |
| treatments-emtone [R] | Emtone Cellulite Treatment in San Anselmo, CA | Emtone addresses cellulite and skin texture on the body. A physician evaluation decides whether it is appropriate for you. Book a consultation. | Emtone | transactional |
| treatments-emsella [N] | Emsella Pelvic Floor Treatment in San Anselmo | Emsella is a seated treatment for pelvic floor and bladder concerns. Your physician evaluation covers function as well as appearance. Book a consultation. | Emsella | transactional |
| treatments-emsculpt-neo [N] | Emsculpt NEO Body Treatment in San Anselmo, CA | Emsculpt NEO addresses muscle and fat together, planned through a physician evaluation. Book a consultation in San Anselmo, Marin County. | Emsculpt NEO | transactional |
| treatments-braintap-sessions [R] | BrainTap Sessions in San Anselmo, CA | BrainTap uses a guided light and sound headset for stress, sleep and focus. Ask about it at your physician evaluation. Book a consultation in San Anselmo. | BrainTap | transactional |
| treatments-lightstim-red-light-therapy [R] | LightStim Red Light Therapy in San Anselmo, CA | LightStim red and infrared bed sessions for skin and recovery, reviewed in your physician evaluation. Book a consultation in San Anselmo, Marin County. | LightStim | transactional |
| treatments-lymphatic-drainage-massage [R] | Lymphatic Drainage Massage in San Anselmo, CA | Lymphatic drainage massage supports circulation and recovery. Ask whether it belongs in your plan at your physician evaluation. Book a consultation. | Lymphatic Drainage Massage | transactional |
| mommy-makeover [R] | Non-Surgical Mommy Makeover in San Anselmo, CA | A non-surgical mommy makeover combining body and pelvic floor treatments, with the plan set by a physician evaluation. Book a consultation in San Anselmo. | Non-Surgical Mommy Makeover | commercial |
| disclaimer [U] | Disclaimer - Marin Medical Aesthetics | Review the disclaimer and important information regarding treatments, results, and services provided by Marin Medical Aesthetics. | Disclaimer | informational |
| privacy-policy [R] | Privacy Policy - Marin Medical Aesthetics | How Marin Medical Aesthetics collects, uses, and protects your personal and health information, and the choices you have about it. | Privacy Policy | informational |
| accessibility [U] | Accessibility Statement - Marin Medical Aesthetics | Learn about Marin Medical Aesthetics' commitment to website accessibility. Contact us if you need assistance accessing our website or services. | Accessibility Statement | informational |
| store [U] | Shop Skincare Products - Marin Medical Aesthetics | Shop professional skincare products from Marin Medical Aesthetics. Find advanced skincare solutions to support healthy, radiant-looking skin. | Shop Skincare Products | transactional |
| blog [R] | Aesthetic & Skincare Blog - Marin Medical Aesthetics | Skincare and treatment articles from Marin Medical Aesthetics in San Anselmo, CA, written to help you arrive at a consultation with better questions. | Aesthetic & Skincare Blog | informational |
| media [R] | In the Media - Marin Medical Aesthetics | Press coverage and media features about Marin Medical Aesthetics and Dr. Chris Bacchi, MD, in San Anselmo, CA. | In the Media | informational |
| category-events [U] | Events - Marin Medical Aesthetics | Explore upcoming events, wellness workshops, and educational experiences at Marin Medical Aesthetics in Marin County. Join us for community events. | Events | informational |
| download-app [U] | Download the Marin Medical Aesthetics App - Stay Connected | Download the Marin Medical Aesthetics app to easily access appointments, updates, and personalized services from Marin Medical Aesthetics anytime. | Download the Marin Medical Aesthetics App | transactional |
| what-to-expect-during-your-med-spa-consultation-in-san-anselmo [R] | What to Expect at Your Consultation in San Anselmo | What happens at a consultation with Dr. Chris Bacchi, MD in San Anselmo: the health evaluation, the questions asked, and the plan that comes from it. | What to Expect at Your Consultation | informational |

<!-- Row count: 59 rows == page_count 59 from page-inventory-manifest.json. -->

### Status-call basis (audited against `_audit/_research/page-inventory.json`, not assumed)

- **`[N]` × 2** — `treatments-emsella` and `treatments-emsculpt-neo` are EXACTLY the two slugs with no
  estate record. Both are confirmed net-new pages, not renames.
- **`[U]` × 5** — `disclaimer`, `accessibility`, `store`, `category-events`, `download-app`. Each passes all
  six gate checks on the ESTATE’s own strings. Four are byte-identical to the estate after separator
  normalization with meta lengths matching exactly; `accessibility` differs by -5 chars purely because the
  source stores the apostrophe as the HTML entity `&#039;` (6 bytes) which decodes to one byte. The text is
  identical — the raw tag was read to confirm it, so `[U]` holds honestly.
- **`[R]` × 52** — 41 of these genuinely break the 60-char title cap or the 160-char meta cap on the estate.
  The other 11 (`before-after-photos`, `contact`, `areas-of-concern-acne-acne-scars`,
  `areas-of-concern-jowls`, `treatments-halo-laser-treatment`, `treatments-forever-young-bbl`,
  `treatments-scarlet-rf`, `treatments-microneedling`, `treatments-obagi-skintrinsiq`,
  `treatments-lymphatic-drainage-massage`, `blog`) mechanically PASSED as they stand; each is marked `[R]`
  as a disclosed editorial or copy-law call, never on a false claim that the estate version failed.
  For the record: the `areas-of-concern-jowls` estate title is exactly 60 chars, and `mommy-makeover`’s is
  31 — the dangling-separator string — with zero H1.

### Copy-law sweep result

Zero `banned_vocab` tokens across 59 titles and 59 metas. Zero occurrences of "board certified", any
dermatology-board implication, "zero downtime", "painless", "no risk", "no side effects", "guarantee" or
"a physician for over 25 years". Zero exclamation marks, zero emoji, zero prices, awards, ratings or
invented statistics. No service the practice does not offer is named or implied (no surgery, no medical or
surgical dermatology, no skin-cancer treatment, no laser hair removal, no laser tattoo removal, no
CoolSculpting); "Mommy Makeover" always reads "Non-Surgical Mommy Makeover". The phrase the voice rules
bar as a self-description is removed from the `what-to-expect...` TITLE, while its slug is deliberately
left alone, since P4 authorises no redirect for that page.

**Three live estate claims were deliberately NOT carried into any meta. The build beat must also strip them
from body copy:** `treatments-vanquish-me` publishes "the world’s most advanced system" (a B&P § 651(b)(6)
superiority claim); `treatments-braintap-sessions` publishes "cutting-edge" (`banned_vocab`);
`treatments-emface` publishes "No recovery time required" (an unqualified absolute).

---

## §5.2 — 301 ORDINANCE (17 pairs, every one status-coded)

**Status counts: 0 `[LIVE]` · 15 `[planned⚠]` · 2 `[existing]`.** Zero pairs are marked `[LIVE]`, and that
is a finding, not an omission: NO redirect in this map is in force today. Every 301 source in the capture
still serves a 200 HTML document, and the marinskinrejuvenation.com root self-canonicals. Claiming
`[LIVE]` anywhere would be a false statement about production state.

> ⚠**RECONCILED 2026-08-19 — F4 WAIVED (B1), so the CROSS-DOMAIN pairs are WITHDRAWN.** Ownership of
> `marinskinrejuvenation.com` and `marinbodysculpt.com` is UNESTABLISHED and the owner waived rather
> than establish it, so **no redirect may be authored against either domain.** Every pair in this
> ordinance whose SOURCE is one of those two hosts is withdrawn and must not be implemented; the
> microsites keep running and their equity is not recovered.
> **The SAME-DOMAIN pairs are UNAFFECTED and still stand** — any pair whose source begins with `/` is
> `marinmedicalaesthetics.com` → `marinmedicalaesthetics.com`, and domain ownership has no bearing on
> it. That includes the 4-way cannibalisation cluster and the `/dt_mega_menus/` 410. The waiver is
> narrow; do not over-apply it. See `architecture.md` §4 for the row-level partition.
>
> One correction of record: the braintap same-domain pair is **already in force in production**
> (verified 2026-08-19 by raw header dump: `301` with `X-Redirect-By: WordPress`, destination returning
> `200`), so the "0 `[LIVE]`" count above is stale by one. Its row in the ordinance below should read
> `[LIVE]`, not `[planned⚠]`. Stated as prose rather than as a pair here, because a second arrow-form
> pair in this note would be parsed as an unstatus-coded 301 row by G5 — which is exactly what it did
> on the first attempt.

The two `[existing]` rows are earned, not assumed — the `rel=canonical` was read out of all four files and
both pairs already point the same way, so the redirect merely ratifies the site’s own assertion. The
tempting third candidate was CHECKED AND REJECTED: `/book-an-appointment/` and `/consultation/` each
self-canonical, so the site asserts no winner there and that row is NOT `[existing]`.

The schema permits only three status values, so on-domain proposals that are not F4-gated also carry
`[planned⚠]`; each note below states explicitly whether the row is F4-gated or merely not-yet-in-force, so
the distinction is not lost. `architecture.md` §4’s grouped rows (the MSR legal set, the MBS legal set, the
promo-page pair) are split here into one row per URL, giving 17 rows from §4’s 13. Nothing was dropped and
nothing was invented.

```
- https://www.marinskinrejuvenation.com/ -> /treatments/clearsilk/ [planned⚠]
- https://www.marinskinrejuvenation.com/accessibility/ -> /accessibility/ [planned⚠]
- https://www.marinskinrejuvenation.com/disclaimer/ -> /disclaimer/ [planned⚠]
- https://www.marinskinrejuvenation.com/privacy-policy/ -> /privacy-policy/ [planned⚠]
- https://www.marinbodysculpt.com/ -> /treatments/emsculpt-neo/ [planned⚠]
- https://www.marinbodysculpt.com/disclaimer.html -> /disclaimer/ [planned⚠]
- https://www.marinbodysculpt.com/privacy-policy.html -> /privacy-policy/ [planned⚠]
- https://www.marinincontinencetherapy.com (ALL paths) -> (NONE - deliberately unspecified) [planned⚠]
- /treatments/vanquish/ -> /treatments/vanquish-me/ [existing]
- /braintap-sessions/ -> /treatments/braintap-sessions/ [existing]
- /book-an-appointment/ -> /consultation/ [planned⚠]
- /exion-skin-tightening-in-the-bay-area/ -> /treatments/exion-by-btl/ [planned⚠]
- /skin-tightening/ -> /areas-of-concern/loose-skin/ [planned⚠]
- /non-surgical-neck-skin-tightening-in-san-anselmo/ -> /areas-of-concern/turkey-neck/ [planned⚠]
- /emsculpt-neo-special/ -> /treatments/emsculpt-neo/ [planned⚠]
- /emsculpt-neo-special// -> /treatments/emsculpt-neo/ [planned⚠]
- /dt_mega_menus/megamenu-3/ -> 410 GONE (not a 301) + noindex the CPT [planned⚠]
```

### Ordinance notes (one per pair, same order)

1. **https://www.marinskinrejuvenation.com/** — F4-GATED (cross-domain). The MSR index declares rel=canonical to its OWN root, so this is a genuine NEW assertion, not a ratification. Matches client-rules consolidation.retiring[0].redirect_to exactly.
2. **https://www.marinskinrejuvenation.com/accessibility/** — F4-GATED. Legal-set collapse to the site of record. Source file verified present in the MSR capture (accessibility.html).
3. **https://www.marinskinrejuvenation.com/disclaimer/** — F4-GATED. The DESTINATION itself carries the wrong-vertical 'chiropractic healthcare advice' copy, so this 301 does not fix the defect, it CONCENTRATES it. The body rewrite must land before or with the redirect.
4. **https://www.marinskinrejuvenation.com/privacy-policy/** — F4-GATED. Legal-set collapse. Source file verified present in the MSR capture (privacy-policy.html).
5. **https://www.marinbodysculpt.com/** — F4-GATED. Destination is a NEW page that MUST EXIST FIRST. marinbodysculpt.com index.html today declares rel=canonical to the emsculpt-neo-special page, so this row CHANGES a live cross-domain assertion.
6. **https://www.marinbodysculpt.com/disclaimer.html** — F4-GATED. The .html extension is real; MBS is a static HTML site. Captured as disclaimer.html.html, a crawler artifact, not a second URL.
7. **https://www.marinbodysculpt.com/privacy-policy.html** — F4-GATED. As above. F-EST-2 records MBS as an estate ORPHAN with zero inbound references, so only EXTERNAL equity is at stake here.
8. **https://www.marinincontinencetherapy.com (ALL paths)** — NOT A PLAN, A SCOPE QUESTION. A FOURTH domain outside client-rules' stated 3-domain scope, linked from the site-wide nav with target=_blank rel=noopener on 63 of 103 flagship files, i.e. the estate itself treats it as EXTERNAL. Ownership is established by NO capture and none may be guessed. The row exists so the deliberate blank is RECORDED rather than later 'discovered'. No redirect is proposed. What IS specified without touching it: the on-domain Emsella treatment leaf and repointing the nav slot to it, both same-domain acts, NOT F4-gated.
9. **/treatments/vanquish/** — VERIFIED by reading both files: BOTH declare rel=canonical to the vanquish-me URL, so the 301 only RATIFIES the site's own assertion. Byte-identical pair (md5 4286437c...). CHURN WARNING: the nav links the LOSER under the WINNER's label on 62 files vs 7 for the winner, so 62 pages of nav must repoint. NOT [LIVE]: both URLs still serve 200 in the capture, so no redirect is in force.
10. **/braintap-sessions/** — VERIFIED by reading both files: BOTH declare rel=canonical to the treatments-prefixed URL, so the 301 ratifies the site's own assertion. Byte-identical pair (md5 158cadaa...). INVERT IF the live check confirms the ROOT is the nav destination (62 files vs 5): the site's canonical and the site's nav DISAGREE, and P5's live check decides. NOT [LIVE]: both URLs still serve 200.
11. **/book-an-appointment/** — ON-DOMAIN, NOT F4-gated, but RECOMMENDED NOT ASSERTED, flagged rather than stated. Each page SELF-canonicals, so the site asserts NO winner; this is explicitly NOT [existing], unlike the vanquish and braintap rows. It reverses the dominant internal signal (62 files vs 8), but that measures NAV-TEMPLATE REPETITION, not external equity, and NO backlink or Ads data was ever captured. The rejected third URL /book-a-consultation/ is NOT minted.
12. **/exion-skin-tightening-in-the-bay-area/** — ON-DOMAIN, not F4-gated. Cannibalisation loser 1 of 3. Source has NO meta description (one of the 4 F-EST-9 pages), and as a 301 SOURCE it is owed no P5 row. The survivor alone keeps the 'skin tightening' head term; the losers are NOT re-targeted.
13. **/skin-tightening/** — ON-DOMAIN, not F4-gated. Cannibalisation loser 2 of 3 and the weakest: 0 H1 AND the dangling-separator title 'Skin Tightening San Anselmo CA - ' (the only member failing both). Under a concern-led IA the bare head term is a CONCERN, not a device. Retiring it removes TWO nav slots (it is published under both 'Skin Care & Aesthetics' and 'Body Sculpting').
14. **/non-surgical-neck-skin-tightening-in-san-anselmo/** — ON-DOMAIN, not F4-gated. Cannibalisation loser 3 of 3. Source has NO meta description, and as a 301 SOURCE it is owed no P5 row. The 4-way collapses to ONE device page plus TWO pre-existing concern pages: ZERO new pages created.
15. **/emsculpt-neo-special/** — ON-DOMAIN but an OWNER DECISION, not an IA call; killing a live promo page is commercial. Source has 0 H1 and the estate's longest meta (190 chars). It self-canonicals AND is the target of marinbodysculpt.com's live cross-domain canonical, so retiring that domain leaves this page holding a dangling equivalence. Its tel: CTA is conversion-TRACKED to the RETIRING microsite's number, so the tracked conversion path and the redirect plan already contradict each other TODAY.
16. **/emsculpt-neo-special//** — ON-DOMAIN. The malformed double-slash variant, published in the footer on 2 files. It needs its own 301 or it survives the parent's retirement.
17. **/dt_mega_menus/megamenu-3/** — ON-DOMAIN, and NOT A REDIRECT; listed here so it cannot be lost. A WordPress mega-menu custom post type published as a live indexable URL, linked as the top-level 'Resources' nav item from 62 of 103 files. md5-identical to index.html (whole file). It carries rel=canonical to the site root, so per F-EST-7 severity is MITIGATED: a crawlable duplicate, not a canonical conflict. 410 is chosen over 301 because a 301 would merge a duplicate into the page it duplicates; the URL should simply stop existing.

> **`[R]` does not imply a redirect here.** In this estate the `[R]` tag marks a REWRITTEN title and meta on
> a slug that is being KEPT; it is not a slug change. Every slug in §5.1 is the page’s existing (or, for the
> two `[N]` rows, its net-new) address, so no §5.1 row is owed a 301 pair. The pairs above come from
> `architecture.md` §4 and §5 — domain consolidation, the resolved cannibalisation cluster, and the retired
> duplicates — and are listed independently of the typing table.

---

## §5.3 — Estate SEO defects this phase FIXES (F-EST-9 reconciliation)

### CLOSED by this file

**1. Missing meta descriptions — 4 named pages, 2 fixed, 2 correctly owed nothing.**

- `privacy-policy` — estate meta length 0. Meta newly authored here, hence `[R]`.
- `what-to-expect-during-your-med-spa-consultation-in-san-anselmo` — estate meta length 0 AND an 89-char
  title. Both authored here.
- `exion-skin-tightening-in-the-bay-area` — a 301 SOURCE, not a surviving page. Owed no P5 row, and none was
  written.
- `non-surgical-neck-skin-tightening-in-san-anselmo` — likewise a 301 SOURCE. Owed no row.

**2. Metas over 160 chars — all 10 confirmed against `page-inventory.json` and rewritten.**

- `consultation` 163 · `local-community-support` 162 · `areas-of-concern-uneven-skin-texture` 167 ·
  `areas-of-concern-muscle-development` 172 · `areas-of-concern-urinary-incontinence` 162 ·
  `treatments-emface` 163 · `treatments-medical-facial` 174 · `treatments-exion-by-btl` 181 · `media` 167.
- The tenth is the estate’s longest, `emsculpt-neo-special` at 190 chars, superseded by the new
  `treatments-emsculpt-neo` page rather than edited in place. Its exclamation-mark and offer framing is not
  carried.
- Longest meta in this file: 154 chars. Cap 160.

**3. Dangling-separator titles — 2 found, 1 fixed, 1 retired.**

- `mommy-makeover` — the estate title is a 31-char fragment ending in a bare separator. Replaced, with the
  mandatory D-IA-011 "Non-Surgical" relabel applied.
- `/skin-tightening/` — the estate title likewise ends in a bare separator. This page is a 301 source, so it
  is RETIRED rather than fixed.

**4. The 4-way "skin tightening" cannibalisation** was resolved STRUCTURALLY at P3 and is not reopened here.
Three URLs redirect away and `/treatments/exion-by-btl/` survives; it alone carries the head term in its
title. The losers are deliberately NOT re-targeted.

### NOT closed — a title and a meta cannot reach these

- **4 pages with no H1** (`blog`, `emsculpt-neo-special`, `mommy-makeover`, `skin-tightening`) and `store`’s
  MULTI-H1(5). These are body-structure defects for the build beat.
- **21 thin concern leaves** (399–494 words).
- **`disclaimer` carries wrong-vertical body copy** ("chiropractic healthcare advice"). This one matters for
  SEQUENCING: the legal-set redirect CONCENTRATES the defect onto the destination, so the body rewrite must
  land before or with that redirect.

### Carried OPEN — not resolved by this phase

1. `before-after-photos` and `success-stories` are TYPED here but remain HARD-GATED on F7 plus
   Cal. B&P § 651(b)(3)(B) and (C). This file does not release them.
2. F4 is unresolved, so 8 of the 17 ordinance pairs are not executable unilaterally, and the existence of
   `treatments-emsculpt-neo` is conditional on it.
3. `treatments-braintap-sessions` carries P4’s unresolved canonical-vs-nav inversion. If the live check
   inverts it the SLUG changes; the title, meta, keyword and intent stand either way.
4. `emsculpt-neo-special` and `download-app` are open OWNER decisions. `download-app` is verified
   nav-orphaned and was deliberately left `[U]` rather than reinvested in.
5. `mommy-makeover`’s canonical has no trailing slash, and whether the slug should become
   `non-surgical-mommy-makeover` is an open owner question. The row is written against the EXISTING slug and
   no redirect is minted.
6. **A FIFTH phone number, (628) 285-3344, was found on the mommy-makeover page**, plus a live "GET 40% OFF"
   promo. F5 is documented as FOUR competing numbers, so its scope is wider than currently recorded, and the
   offer disposition is an owner call. Nothing of this reaches any row here — the set is digit-free apart
   from the 1993 class year.
7. `owner_intake_reviewed` is still false. Dr. Bacchi has seen none of this, so all 59 rows are
   operator-approved on her behalf, not owner-confirmed.

---

## §5.4 — Completion

`seo-manifest.json` is written alongside this file with `ready_for_briefs: true`, which is the precondition
`verify-brief-complete.mjs` (G6) checks before any brief write. P6 may begin.

## Sign-off

**Filled by:** client-site-prep P5 EMIT beat (operator: Glemer)
**Filled on:** 2026-08-18
**Row count vs page_count reconciled:** YES — 59 rows == 59 pages
**Owner review:** NOT DONE — `owner_intake_reviewed` is false; these rows are operator-approved, not
owner-confirmed.
