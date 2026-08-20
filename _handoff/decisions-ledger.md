# C5 — DECISIONS LEDGER — marin-medical-aesthetics

> The consequential decisions made across P0–P6, with who decided and on what basis. Reconstructed
> from the artifacts on disk (`intake-brief.md` §F, `client-rules.json`, `architecture.md`,
> `positioning-plan.md`, `page-inventory.md`, `content-bible.md`, the briefs). Nothing here is invented:
> where the artifacts do not show an owner deciding, `decided_by` is **agent-derived** or **mechanical**.
> Generated 2026-08-19.

**Provenance caveat carried from `client-rules.json`:** *"AGENT-DERIVED from 3 first-party crawls +
a 5-of-7-lane off-site sweep. **NOT owner-confirmed.** Operator-approved on the practice's behalf
2026-08-13."* That caveat governs this whole ledger — most of what follows was derived and
operator-approved, not decided by the practice.

---

## §1 — The owner-only decisions (intake §F)

| id | decision | status | decided_by | resolution / waiver |
|---|---|---|---|---|
| **F1** | Pricing model / presentation | RESOLVED | operator (on owner's behalf) | Consultation-led, with a published "from" anchor on high-intent treatment pages **once the owner supplies a real ladder**; no full public price table. Rationale: quote-only matches the verified Marin norm (only 2 of ~20 competitors publish), but a competitor publishes "laser facials from $100" in the client's own SEO title-city, so total opacity concedes the price-shopper. **The presentation decision is resolved; the price DATA is missing** (D-OFFER-008). |
| **F2** | Proof strategy | RESOLVED | operator (on owner's behalf) | **`real-only` for ALL proof** — testimonials, reviews, before/after, credentials, awards, metrics, affiliations. Representative copy permitted for **non-proof narrative only**, visibly marked swappable. **This deliberately DECLINES the skill's F2 "fabricated-fallback" default** because the vertical is regulated and the estate already carries a live misattribution defect (third-party manufacturer before/afters headed "COMPARE PATIENT RESULTS"). |
| **F3** | Bespoke / marquee page set | RESOLVED, **PARTIALLY IMPLEMENTED** | operator | Set to `[index, about, community]`, with the instruction that P6 type `about` and `community` as T-MARQUEE. **P6 deviated:** `about` and `local-community-support` shipped as **T-COMPANY / bespoke:false**. See §4-D1 — the deviation is documented in the brief itself, not silent. |
| **F4** | Domain ownership of the two retiring microsites | **WAIVED for P1 · deadline "before P3" · STILL UNRESOLVED** | operator waiver | whois registrant for `marinskinrejuvenation.com` is **privacy-shielded**; whether the practice or the agency holds the domains is unknown. Flagged in the brief as *"Highest-risk open item."* **P3 is complete and this was never resolved.** |
| **F5** | Canonical NAP — which phone, which city | **WAIVED for P1 · deadline "before P5" · STILL UNRESOLVED** | operator waiver | Multiple phone numbers published across owned domains, and two cities in circulation (San Anselmo clinic vs a stale San Rafael mailing address that has propagated into ≥4 third-party citations). The Google Business Profile could not be read. **P5 is complete and this was never resolved.** |
| **F6** | Credential substantiation | **WAIVED for P1 · deadline "before P6" · STILL UNRESOLVED** | operator waiver | Board certification not publicly verifiable; Harvard/MGH, NIH, Cambridge, UC Berkeley credentials self-reported only; CA Medical Board primary-source verification blocked by a Cloudflare challenge. **Mitigated:** the banned list governs and only the safe version ships. |
| **F7** | Patient before/after releases | **WAIVED for P1 · deadline "before P6" · STILL UNRESOLVED** | operator waiver | No released first-party before/after photography supplied; the only such images found are third-party manufacturer stock. The brief itself names this *"a P7.5 asset-intake blocker for the build."* |

**The single most important fact in this ledger:** F4, F5, F6 and F7 were each waived *for P1 only*,
each with an explicit hard deadline tied to a later phase. **All four deadlines have now passed** —
P3, P5 and P6 are complete — and **none of the four was resolved.** They are not stale notes; they are
live, breached commitments, and they drive the P7 verdict.

---

## §2 — Positioning decisions (P2)

| id | decision | decided_by | basis |
|---|---|---|---|
| D2-1 | Category self-description is **NOT** "med spa" | agent-derived | "med spa" flattens the physician differentiator and is the exact category the market leaders own. Recorded at D-BRAND-RAILS-019. |
| D2-2 | The wedge is **concern → physician health evaluation → written plan** | agent-derived | Derived from cited competitor receipts; the evaluation covering *function as well as appearance* is the ownable, process-based claim that survives real-only. |
| D2-3 | Voice register: **warm-humanist + clinically precise** | agent-derived | The estate ran four incompatible registers; warm-humanist is the only distinctive and ownable one, corroborated by real patient language. |
| D2-4 | Retire the corporate-superlative and shouty-promotional registers | agent-derived | Both produce banned claims ("Most Trusted", "Award Winning", "WE ARE NOW OPEN!!!"). |

## §3 — Architecture / IA decisions (P3)

| id | decision | decided_by | basis |
|---|---|---|---|
| D3-1 | **REMOVE** the nav group "Physician Supervised Medical Weight Loss" | mechanical | Verified on 62 of 103 flagship files; its entire body is the text "COMING SOON", it carries ZERO child links, no page exists anywhere in the estate, and the service appears in neither the offered nor the explicitly-not-offered list. |
| D3-2 | **REMOVE** the top-level "Resources" slot pointing at a mega-menu URL | mechanical | On 62 of 103 flagship files it resolves to a WordPress mega-menu custom-post-type published as a live, indexable URL that is a BYTE-IDENTICAL copy of the homepage — a duplicate URL promoted in the site's own primary nav. Marked 410 GONE. |
| D3-3 | Emsella / pelvic-floor: repoint the EXISTING nav slot **on-domain** to `/treatments/emsella/` | agent-derived | 0 of 46 competitor snapshot files return pelvic/incontinence/urinary terms at word boundary — an uncontested territory (wedge M§1.1) — while the client's own nav sends that visitor OFF-DOMAIN from 63 of 103 flagship files. |
| D3-4 | "Mommy Makeover" → **RELABEL** "Non-Surgical Mommy Makeover", single nav placement | agent-derived | The bare label is published in TWO mega-menu groups with no qualifier while the page's own H2 reads "Non-Surgical" and surgery is on the explicitly-not-offered list — an implied-service risk. |
| D3-5 | External slots (Esthetician Appointment, Gift Certificates) **HELD**, destinations not carried forward | mechanical | The published booking href is malformed as shipped — the domain and TLD are run together with no separating dot. |
| D3-6 | A **fourth** domain referenced from site-wide nav is left deliberately unspecified | agent-derived | It is outside the stated 3-domain scope, referenced on 63 of 103 flagship files, and the estate itself links it as EXTERNAL. Its ownership is not established by any capture and **none may be guessed** — the same F4 problem. |
| D3-7 | Merge byte-identical duplicate pairs | mechanical | `/treatments/vanquish/` ≡ `/treatments/vanquish-me/`; `/braintap-sessions/` ≡ `/treatments/braintap-sessions/`. |

## §4 — Page-list, SEO and brief decisions (P4–P6)

| id | decision | decided_by | basis |
|---|---|---|---|
| D4-1 | Closed inventory of **59** pages | mechanical | 132 snapshot files reduced to 69 unique real pages, then to the 59-page closed inventory. Survivor identity decided by each page's own `rel=canonical`, **not** by filename order — an alphabetical tie-break had wrongly dropped the homepage in favour of a mega-menu URL. |
| D4-2 | 404s served as real pages are **defects, not inventory** | mechanical | Detected by title pattern and excluded from the count. |
| D5-1 | No phone digits in any title or meta | mechanical + F5 | Verified: **0** phone-digit matches across all 59 SEO rows. |
| D6-1 | `about` shipped **T-COMPANY / company_variant: standard / bespoke:false**, deviating from F3 | agent-derived, **documented in the brief** | T-MARQUEE founder-led requires ≥1 `D-FOUNDER-*` fact, and **no `D-FOUNDER-*` exists anywhere in the build** — the founder story was never captured upstream. The brief states the deviation and its reason rather than inventing a founder fact to satisfy the type. |
| D6-2 | `before-after-photos` ships **no patient proof element until F7 clears** | agent-derived | Hard-gated on F7 releases and California Business & Professions code. Fail-closed by design. |
| D6-3 | `success-stories` uses the **real** review corpus | agent-derived | **4.8 across 96 Google reviews**, each figure carrying its source — a different proof class from F7-gated patient imagery. ⚠**AMENDED 2026-08-19: the Yelp figure is HELD, not shipped.** "68 Yelp reviews" could not be re-verified (403 on every path; the only evidence was a search-index title of a class proven stale the same day) and a possible duplicate listing may split the corpus. Google-only ships. |
| D6-4 | Three orphans REPORTED, not resolved | agent-derived | `download-app` is a verified estate orphan (zero inbound hrefs); `blog` and `media` are footer/Patient-Resources reachable and deliberately out of primary nav. **An orphan that reflects the real site is a finding; one papered over with an invented link is a defect.** |

## §5 — Standing legal constraints (bind the build)

| id | constraint | basis |
|---|---|---|
| L1 | **No "board certified"** in any phrasing | NPPES taxonomy of record is Internal Medicine. |
| L2 | **Credentials may never be framed as a safety guarantee** | The FDA states harm occurred with **both** licensed and unlicensed injectors, so "licensed, therefore safe" is unsupportable. |
| L3 | **Competitor-teardown language must never become site copy** | Defamation / UDAP exposure. Market-intel findings are internal only. |
| L4 | Findings about competitors are about **what a site PUBLISHES**, never about a person | e.g. never assert a named competitor's founder "isn't a physician". |
| L5 | No unqualified absolutes; banned superlative list governs | Two such absolutes are currently live on the retiring microsite. |

---

## §6 — Decisions this ledger does NOT record

Recorded so the absence is explicit rather than accidental:

- **No owner has confirmed any of the above.** `client-rules.json` states the doctrine is agent-derived
  and operator-approved on the practice's behalf, not owner-confirmed. `owner_intake_reviewed` is
  still `false`.
- **No visual/design decision appears here.** Prep designs nothing; C7 carries inputs only.
- **No pricing DATA.** F1 resolved the *presentation*; the ladder itself was never supplied.
- **No founder narrative.** `D-FOUNDER-*` does not exist in the build; it was not invented to fill a type.
