# IMAGERY SYSTEM — marin-medical-aesthetics

> The reviewable imagery spec (G-IMG-SPEC). This is the single place an owner signs off on the
> **treatment** (the look every photo obeys), the **locked set** (which images exist and where they
> go), the **per-topic + reuse law**, and the **fal-extend allowance** (how to add more on-brand).
> `_images.json` + `assets/` are the source of truth for GENERATION; this doc governs the LOOK.
>
> Derived from C7 `_handoff/visual-direction.md` §4/§5 and the generated manifest. Nothing here is
> invented: every treatment attribute below is read back off the prompts that actually produced the
> ten assets on disk.

---

## §0 — THE PROVENANCE FACT THAT GOVERNS EVERYTHING

**Zero images from the client's existing estate are authorised for re-publication.** C7 §6 records
607 unique magic-byte-verified images across the three live domains, and the owner **waived the
rights question on 2026-08-19 rather than establish it**. So `real_image_count` is recorded as the
number of RIGHTS-CLEARED images, which is **0**, not the number of files on disk. A WordPress media
library on a medical estate routinely mixes owned photography with stock and device-manufacturer
promotional imagery; re-publishing one of those on a rebuilt site is a real exposure.

**Consequence, binding:** every image that ships is **generated or owner-supplied**. There is no
third path.

**F7 is waived and unresolved, so NO patient before/after imagery ships at all** — generated or
otherwise. A before/after pair needs documented patient consent plus Cal. B&P §651(b)(3) disclosure
and comparable views; neither exists. This is why `before-after-photos` ships with no patient proof
element (decisions-ledger D6-2).

**No likeness of a real named person is generated.** Dr. Bacchi's portrait is an owner placeholder
and stays one until the owner supplies a real photograph.

---

## §1 — THE TREATMENT (the look every photo obeys)

One sentence, and every asset in §2 was generated against it:

> **Editorial interior/still-life photography in soft natural daylight — a restrained cream, warm
> off-white and deep-navy palette, calm and clinical but warm rather than sterile, no people, no
> readable text, no branding, no visible device labels.**

Attribute-by-attribute, as actually generated:

| attribute | the rule | why |
|---|---|---|
| **Light** | soft natural daylight, gentle directional shadow; no hard flash, no clinical overhead | the confirmed FEEL is quiet and residential, not procedural |
| **Palette** | cream / warm off-white / deep navy, with olive + muted plum only as small accents | the locked `--ds-*` token palette; a photo that fights it reads as stock |
| **Register** | editorial interior + still-life detail | matches the brand card's evaluation-led, physician-led positioning |
| **People** | **none** | no consent exists for any patient; no model may imply a patient (Cal. B&P §651(b)(3)(B)) |
| **Text / branding** | **none** legible, including device labels and signage | an identifiable device brand is an implied manufacturer claim |
| **Devices** | discreet, unbranded, never the subject | the wedge is the evaluation, not the device menu; a device-hero photo contradicts the whole positioning |
| **Mood** | quiet, unhurried, uncrowded | the copy's promise is an appointment that is an examination, not a sale |

**Off-treatment and therefore not shippable:** stock-looking smiling models · glossy spa/beauty
styling · branded device close-ups · before/after pairs · anything with legible signage · cool blue
"clinical" grading that drops the warmth · any photograph that would need a caption to explain why
it is on a medical page.

---

## §2 — THE LOCKED SET (10 assets, all generated)

Read from `_images.json` and verified present in `assets/`. **8 photographs + 2 seamless textures.**

| id | kind | subject | where it is used today |
|---|---|---|---|
| `hero-consult-room` | photo | consultation room, daylight, desk + one chair | chrome mega-panel feature (all pages) |
| `treatment-room` | photo | treatment chair, unbranded device, navy accent wall | T-FEATURE concept A §6, concept B §2, concept C hero |
| `reception-warm` | photo | reception, oak counter, linen bench, dried grasses | T-FEATURE concept B §4 |
| `detail-linen-tray` | photo | folded linen + stainless tray, close detail | T-FEATURE concept A §4 |
| `skincare-still-life` | photo | unbranded frosted-glass containers, eucalyptus | T-FEATURE concept C §4 |
| `marin-landscape` | photo | golden Marin hills, oaks, late light | T-FEATURE concept C §5 |
| `community-town` | photo | leafy Northern California town street | reserved: `local-community-support` |
| `detail-window-light` | photo | abstract daylight across a cream plaster wall | **currently unplaced** — see the note below |
| `texture-cream-band` | texture | seamless matte cream plaster | quiet background bands |
| `texture-navy-band` | texture | seamless matte deep navy | every `.surface-dark` anchored band |

**Note on `detail-window-light`:** it was placed in T-FEATURE concept B §2 and pulled at the owner
read on 2026-08-21 — in a 3/4 portrait plate it renders as a near-featureless cream wash and carries
no information. It remains useful as a **narrow horizontal** divider, and NOT as
a portrait feature plate. Recorded here so the next build does not re-make that placement.

**CORRECTED 2026-08-21 at the T-ARTICLE tournament.** The wording above previously also offered
this asset as "a low-contrast ground". That was tried in all three T-ARTICLE concepts and FAILED
the full-res read: at `background-size:cover` across a 1440px band the asset stretches and its
internal structure reads as a muddy gold wash with visible vertical seams. It is near-featureless
but it is NOT seamless, and a full-width band needs a seamless texture. **For any band ground use
`texture-cream-band` or `texture-navy-band`;** keep `detail-window-light` for a narrow horizontal
strip where it is not stretched. It is therefore STILL UNPLACED.

---

## §3 — ⚠ THE POOL IS THIN FOR THIS SITE, AND THAT IS AN OPEN OWNER ITEM

**8 photographs for a 59-page site.** T-FEATURE alone is 42 pages. At 2–3 in-page photographs per
page the same eight assets would each recur on roughly 15 pages.

- **G-IMG-CAP (`verify-image-reuse-cap`) will NOT catch this** — it is a PER-PAGE gate (no non-hero
  asset repeats more than ~2× *within one page*; a 4+-image page needs `ceil(total/2)` distinct
  assets). Every current T-FEATURE concept passes it. The thinness is a **cross-page** problem the
  gate does not measure.
- The visible consequence is a site that looks like eight photographs on rotation. That is a
  design-quality outcome, not a gate failure, so it has to be decided rather than detected.

**Two honest routes, owner's call:**
1. **Extend the pool** (see §5) — generate a per-topic set so concern/treatment pages each carry at
   least one image of their own. This is the route the per-topic law in §4 assumes.
2. **Lean text-led** — pick a template concept that uses fewer photographs per page and let type,
   rules and the dark bands carry the design. T-FEATURE concept B ("The Record") was authored this
   way deliberately: 2 in-page photographs, with the anchored band earning its weight from type and
   the navy grain texture rather than another photograph.

Until this is decided, **no page may pad itself with repeated generic photography to hit an image
count.** A section that has no honest image ships without one.

---

## §4 — PER-TOPIC + REUSE LAW (binding on ⑥ BULK)

1. **Per-topic first.** A concern or treatment page draws images relevant to ITS topic. The shared
   pool is a fallback, never the default.
2. **Per-asset repeat cap (G-IMG-CAP rule 1).** No single NON-hero photograph appears more than
   twice on one page. The page's hero/first full-bleed image is exempt.
3. **Diversity floor (G-IMG-CAP rule 2).** On a 4+-image page, distinct assets ≥ `ceil(total/2)`.
4. **No generic-pool concentration (G-IMG-CAP rule 3).** If a shared/generic pool is ever declared in
   `_images.json` via `"generic": true`, a majority of a 4+-image page's distinct non-hero assets
   must NOT come from it. **This build declares no generic pool today, so the rule is inert** — it
   activates the moment one is declared.
5. **Every media frame is capped** — `aspect-ratio` (or `max-height`) plus `object-fit: cover`, so no
   section forces the reader to zoom out (§ PAGE COMPOSITION rule 4).
6. **Every stretched grid-track media frame carries `width:100%` + `min-width:0`** (G-MEDIA-TRACK).
   Without both, a frame with `aspect-ratio` computes its width from its stretched height and
   overlaps its neighbouring column.
7. **Alt text describes the photograph, never the claim.** "A treatment room set up and waiting" is
   correct; "our state-of-the-art treatment room" is a superlative (C7 §5.6) wearing an alt attribute.

---

## §5 — FAL-EXTEND ALLOWANCE (how to add more, on-brand)

Extending the set is allowed and expected. The constraints:

- **Generate through the existing pipeline** (`scripts/generate-images.mjs` off a derived manifest,
  fal), so a new asset lands in `_images.json` + `assets/` with its prompt recorded. An image with no
  prompt in the manifest has no provenance and must not ship.
- **The prompt must restate the §1 treatment verbatim** — light, palette, register, no people, no
  text, no branding, unbranded devices. That sentence is what keeps a fifteenth asset looking like it
  belongs with the first ten.
- **Add the new row to §2** in the same commit. A locked set that does not match `assets/` is not a
  locked set.
- **Never generate:** a person's likeness, a patient, a before/after pair, a legible brand or device
  label, or a photograph that would make a claim the copy is not allowed to make.
- **Owner-supplied photography overrides generated imagery** wherever it exists and is rights-cleared.
  When the owner supplies real practice photography, it replaces the generated stand-in rather than
  sitting beside it.

---

## §6 — WHAT THIS DOC DOES NOT DO

It governs the LOOK. It does not prove the runtime: the ≥3-image floor is CWB-063
(`verify-applied-design`), slot-by-slot photo backing is `verify-no-gradient-placeholders`, the
per-page reuse arithmetic is `verify-image-reuse-cap`, and whether a photograph is actually
*on-brand and topic-correct* stays the undelegatable full-res eye-read. A green gate here means the
spec exists, not that the gallery is good.
