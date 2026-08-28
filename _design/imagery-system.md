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

## §2 — THE LOCKED SET (46 assets — 16 curated below + 30 derived in §2b)

Read from `_images.json` and verified present in `assets/`. **COMPLETE as of 2026-08-28**: the table
below plus §2b account for all 46 files in `assets/`, reconciled both ways (nothing on disk is
undocumented; nothing documented is missing from disk). The 16 rows here were written and reviewed by
hand; the 30 in §2b were derived from each asset's own recorded prompt and a grep of the pages.

| id | kind | subject | where it is used today |
|---|---|---|---|
| `hero-consult-room` | photo | consultation room, daylight, desk + one chair | chrome mega-panel feature (all pages) |
| `treatment-room` | photo | treatment chair, unbranded device, navy accent wall | T-FEATURE concept A §6, concept B §2, concept C hero |
| `reception-warm` | photo | reception, oak counter, linen bench, dried grasses | T-FEATURE concept B §4 |
| `detail-linen-tray` | photo | folded linen + stainless tray, close detail | T-FEATURE concept A §4 |
| `skincare-still-life` | photo | unbranded frosted-glass containers, eucalyptus | T-FEATURE concept C §4 |
| `marin-landscape` | photo | golden Marin hills, oaks, late light | T-FEATURE concept C §5 |
| `community-town` | photo | leafy Northern California town street | reserved: `local-community-support` |
| `detail-window-light` | photo | abstract daylight across a cream plaster wall | 4 treatment/aesthetic pages as a WIDE plate (1200x520, ratio 2.31) — see the corrected note below |
| `texture-cream-band` | texture | seamless matte cream plaster | quiet background bands |
| `texture-navy-band` | texture | seamless matte deep navy | every `.surface-dark` anchored band |
| `hero-band-consult-depth` | photo | consultation room shot wide along its depth — navy accent wall, oak cabinetry left, linen chair, daylight window right | **home §1 hero, as the section background** (full-bleed, `cover`) |
| `texture-cream-linen` | texture | seamless warm off-white linen weave | home §7 `credential-floor`, §11 `pricing-teaser` |
| `texture-cream-limewash` | texture | seamless warm cream limewash with gentle tonal drift | home §14 closing `kit-cost` band |
| `plan-written-desk` | photo | a BLANK notebook page and a pen on a pale oak desk, navy chair behind | home §4 `inclusion-value`, right column |
| `capability-treatment-corner` | photo | clinical treatment couch + stainless trolley, oak cabinetry, navy accent wall | home §6 `capability-index`, right column |
| `entrance-doorway` | photo | a pale oak door in a cream hallway, afternoon daylight, no signage | home §14 `final-dual-cta`, right column |

**Added 2026-08-28 (the three rows above), owner-requested right-hand balance.** Measured first: seven
image-less home sections ran 25–57% dead space on the right, while all four image-bearing sections
measured 3%. These three sections were chosen by one test — *does an image here make a claim the copy
is not allowed to make?* Note what each prompt had to work around:

- `plan-written-desk` — the section's subject is the written plan you leave with, but **no legible
  text or printed matter may appear in any image on this site**, so the notebook page is blank.
- `capability-treatment-corner` — the section is about devices, and this photograph deliberately is
  **not** of a device: §1 requires devices stay "discreet, unbranded, never the subject", which is the
  same point the section's own copy makes (the device is the OUTPUT of the evaluation, not the entry).
  The first generation came back as a domestic bedroom and was **regenerated**, not shipped.
- `entrance-doorway` — carries no plate, number or sign, because signage is banned outright.

**Four sparse sections were deliberately left without an image, and should stay that way:**

| section | dead right | why no image |
|---|---|---|
| `credential-floor` | 49% | It is Dr. Bacchi's credential line. **No likeness of a real named person may be generated** (§0), and any substitute photograph risks reading as a credential claim. |
| `data-proof` | 50% | The subject is a Google rating. No photograph depicts a rating, so anything here is decoration — the §3 "no padding to hit an image count" rule. |
| `routing-band` | 50% | Its `.kit-go` rows already span the full container; the space is *inside* the rows. Adding a fourth split band would also make it a twin of `capability-index` directly above. |
| `stance-line` | 57% | A deliberately typographic dark creed band carrying one sentence. An image would weaken the one beat on the page that is meant to be type alone. |

These four are a real, measured, **open** imbalance — recorded rather than papered over. Fixing them
is a typographic/layout question (widening the measure, or the `row--creed` two-column split the
`kit-creed` skin already defines), not an imagery one.

**Added 2026-08-28 (the three rows above), owner-requested full-bleed hero.** Generated through
`generate-images.mjs` per §5; prompts are in `_images.json`. Two candidate hero framings
(`hero-band-consult-wide`, `hero-band-reception-wide`) were generated, read, rejected — both put a
large featureless wall through the middle of the band — and then **deleted from `_images.json` and
from `assets/`**, so the locked set still matches disk.

**Why two more cream textures rather than one.** `texture-cream-band` was stamped on six bands of
the home page. It passed G-IMG-CAP only because it happened to be the page's FIRST image and so took
the gate's hero exemption; the moment a real photograph became the hero, the texture's five
remaining uses breached the 2× per-asset cap. The choice was to strip the texture off four sections
the owner had not asked about, or to widen the cream family. Widening it also answers what the cap
is actually for: three plaster/linen grains across six bands is less monotonous than one stamped six
times. Distribution is now `texture-cream-band` ×2, `texture-cream-linen` ×2, `texture-cream-limewash` ×1.

### §2b — the remaining 30 assets, DERIVED (completed 2026-08-28)

The 21 `concern-*`, 8 `marquee-*` and `detail-mirror-linen` assets were added by earlier work without
being written back into §2, leaving the table at 16 of 46. An earlier note here said back-filling
them would mean "guessing at intent". **That was wrong, and the note is retracted:** nothing here is
guessed. Every row below is machine-derived from two on-disk sources —

- **subject** = the `Subject:` clause of the asset's own recorded prompt in `_images.json`
  (truncated, never paraphrased);
- **where used** = a grep of `pages/*.content.html` for `assets/<id>.jpg`.

Checked while deriving: **all 30 are referenced by at least one page — none is unplaced.** The set
now matches `assets/` exactly (46 = 16 curated + 30 derived), which is what §2 requires of a locked
set. These rows are kept in their own table rather than merged into the one above because their
provenance differs: the rows above were written and reviewed by hand, these were derived. A human
read can promote any of them upward; until then the distinction is worth keeping visible.

| id | kind | subject (from its recorded prompt) | where it is used today |
|---|---|---|---|
| `detail-mirror-linen` | photo | a plain unframed oval hand mirror lying face-up on folded ivory linen beside a small matte ceramic dish,… | `index` |
| `concern-acne-acne-scars` | photo | three plain frosted-glass cleanser bottles and a folded muslin cloth arranged on a pale limestone tray. | `areas-of-concern-acne-acne-scars` |
| `concern-age-spots` | photo | a pair of tortoiseshell reading glasses and a small amber glass dropper bottle arranged on a cream stone tray. | `areas-of-concern-age-spots` |
| `concern-broken-capillaries` | photo | a slender clear glass carafe of water on a stone shelf, daylight refracting through it into fine bright lines. | `areas-of-concern-broken-capillaries` |
| `concern-cellulite` | photo | a neat stack of folded waffle-weave cotton towels on a pale oak bench. | `areas-of-concern-cellulite` |
| `concern-core-strength` | photo | a rolled charcoal exercise mat standing upright beside a plain oak stool in a bright empty studio corner. | `areas-of-concern-core-strength` |
| `concern-double-chin` | photo | a tall smooth matte navy ceramic vessel with a long clean silhouette, shot close from a low angle so the… | `areas-of-concern-double-chin` |
| `concern-fine-lines` | photo | a sheet of ivory linen in raking window light, its fine creases catching the light. | `areas-of-concern-fine-lines` |
| `concern-hyperpigmentation` | photo | a single wide shallow ceramic bowl with a mottled, unevenly speckled cream-and-clay glaze, photographed… | `areas-of-concern-hyperpigmentation` |
| `concern-jowls` | photo | heavy ivory linen draped over the edge of a pale oak table, falling in soft weighted folds. | `areas-of-concern-jowls` |
| `concern-loose-skin` | photo | crumpled ivory silk resting in a shallow wide ceramic bowl, soft daylight raking across its folds. | `areas-of-concern-loose-skin` |
| `concern-melasma` | photo | two round ceramic bowls of dry mineral pigment in cream and warm brown, shot close and from slightly above… | `areas-of-concern-melasma` |
| `concern-muscle-development` | photo | a coiled fabric resistance band and a pale wooden dowel resting on a clean oak bench. | `areas-of-concern-muscle-development` |
| `concern-rosacea` | photo | a shallow wide ceramic bowl of clear water beside a folded pale linen cloth and a small green sprig on a… | `areas-of-concern-rosacea` |
| `concern-sexual-function-enhancement` | photo | a quiet private consulting corner - one upholstered armchair beside a small side table holding a folded… | `areas-of-concern-sexual-function-enhancement`, `index` |
| `concern-spider-veins` | photo | fine bare winter branches seen against a bright frosted window, tracing delicate lines across the light. | `areas-of-concern-spider-veins` |
| `concern-stubborn-fat` | photo | a small balanced stack of smooth grey river stones on a pale linen runner. | `areas-of-concern-stubborn-fat` |
| `concern-sun-damage` | photo | a wide-brimmed natural straw sun hat resting on a pale oak bench beside a plain glass bottle of water. | `areas-of-concern-sun-damage` |
| `concern-turkey-neck` | photo | a tall slender stoneware vase casting a long elegant shadow across a cream surface. | `areas-of-concern-turkey-neck` |
| `concern-uneven-skin-texture` | photo | three squares of natural sponge and a pumice stone on a pale limestone slab, raking light picking out… | `areas-of-concern-uneven-skin-texture` |
| `concern-urinary-incontinence` | photo | a discreet private washroom detail - a folded white towel over a brass rail beside a plain basin, soft… | `areas-of-concern-urinary-incontinence`, `index` |
| `concern-wrinkles` | photo | soft ivory linen gathered over the arm of an upholstered chair, daylight describing each fold. | `areas-of-concern-wrinkles` |
| `marquee-corridor` | photo | a quiet daylit corridor in a small private practice, cream walls and a pale oak door standing ajar. | `index` |
| `marquee-window-seat` | photo | a window seat with a linen cushion and a folded wool throw in morning light. | `index` |
| `marquee-instrument-tray` | photo | an unbranded stainless steel tray holding folded gauze and one small covered ceramic dish on a clean counter. | `index` |
| `marquee-oak-counter` | photo | the corner of a pale oak reception counter with a ceramic jug of dried grasses. | `index` |
| `marquee-linen-stack` | photo | a tall neat stack of folded ivory treatment linens on an open oak shelf. | `index` |
| `marquee-plant-corner` | photo | a large leafy potted plant in a bright corner against a cream wall. | `index` |
| `marquee-waiting-bench` | photo | a simple upholstered bench against a cream wall with one folded throw at its end. | `index` |
| `marquee-marin-oaks` | photo | golden Northern California hills with scattered oaks in late afternoon light, seen through a window frame. | `index` |

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
strip where it is not stretched.

**CORRECTED 2026-08-28 — it is NOT unplaced, and has not been for some time.** The claim above was
stale; a grep plus a render check found it on FOUR pages (`treatments-halo-laser-treatment`,
`treatments-forever-young-bbl`, `treatments-lightstim-red-light-therapy`, `mommy-makeover`), each
time in a `.kit-plate` measuring **1200x520px, ratio 2.31 — wide and horizontal**, which is exactly
the orientation this note prescribes and NOT the portrait plate it warns against. Each carries a
caption tying the light to the treatment ("Light on a wall. This treatment is light, and that is the
whole of what it is.").

Read at full size, it holds up: soft diagonal daylight shafts across cream, legible as an abstract
light study rather than a muddy wash. **One caveat stands, measured not assumed:** a faint vertical
seam is still visible at roughly a quarter across — the artifact this note predicted. It is far
milder at a 2.31 crop than it was as a full-bleed background, and the caption bar anchors the frame,
so it ships. If it is ever re-used at greater width, re-check that seam first.

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
