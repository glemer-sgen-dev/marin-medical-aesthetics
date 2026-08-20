# P6 — link funnel map — marin-medical-aesthetics

**Phase:** P6 · **Generated:** 2026-08-19 · **Source:** the `links_to` line of all 59 briefs in `_spec/briefs/`.
Derived mechanically from the briefs on disk. No edge here was invented; every destination is a slug that exists in `page-inventory.md`.

**Totals:** 59 pages · 314 outbound edges · 56 of 59 pages have at least one inbound link.

---

## §1 Convergence — where the funnel actually goes

| destination | inbound links | tier |
|---|---|---|
| `consultation` | 58 | T0 |
| `areas-of-concern` | 29 | T1 |
| `treatments` | 27 | T1 |
| `contact` | 9 | T1 |
| `areas-of-concern-uneven-skin-texture` | 9 | T2 |
| `areas-of-concern-stubborn-fat` | 9 | T2 |
| `areas-of-concern-loose-skin` | 8 | T2 |
| `treatments-clearsilk` | 8 | T2 |
| `about` | 7 | T0 |
| `areas-of-concern-sun-damage` | 6 | T2 |

`consultation` receives 58 of a possible 59 — the single conversion endpoint of record, exactly as `D-IA-003` specifies. The two hubs behind it (`areas-of-concern`, `treatments`) carry the concern-led entry layer and the demoted device index respectively. That shape IS the positioning: concern → physician evaluation → written plan.

## §2 Orphan check — pages with ZERO inbound links from any brief

| page | tier | status |
|---|---|---|
| `blog` | T3 | Reachable from the footer and the Patient Resources group, not from body copy. `D-IA-006` keeps it deliberately OUT of primary nav. Not a defect — but if the owner wants it discoverable, that is a nav decision, not a brief decision. |
| `media` | T3 | Same as `blog` — footer / Patient Resources reachable, deliberately out of primary nav per `D-IA-006`. It is also a PROOF-CLASS page inheriting real-only and F7. |
| `download-app` | T3 | VERIFIED ORPHAN IN THE LIVE ESTATE — zero inbound hrefs to `/download-app/` anywhere in `index.html`. P3 retained it and reclassified it as orphaned pending an OWNER DECISION on the RepeatMD app. This map reports the orphan rather than inventing a link to hide it. |

> **These are reported, not resolved.** An orphan that reflects the real site is a finding; an orphan papered over with an invented link is a defect that reaches the build. All three are T3 terminals, none is on a conversion path, and `download-app` is an inherited estate orphan awaiting an owner call.

## §3 Per-page outbound edges

| page | TYPE | funnel_role | links_to |
|---|---|---|---|
| `about` | T-COMPANY | F4 | `consultation` · `local-community-support` · `contact` · `areas-of-concern` · `treatments` · `success-stories` |
| `accessibility` | T-LEGAL | chrome-only | `contact` · `consultation` · `privacy-policy` · `disclaimer` |
| `areas-of-concern-acne-acne-scars` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `treatments-forever-clear-acne` · `treatments-microneedling` · `treatments-scarlet-rf` · `treatments-medical-facial` · `treatments-obagi-skintrinsiq` · `areas-of-concern-uneven-skin-texture` · `areas-of-concern-rosacea` |
| `areas-of-concern-age-spots` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `treatments-forever-young-bbl` · `treatments-clearsilk` · `treatments-halo-laser-treatment` · `areas-of-concern-sun-damage` · `areas-of-concern-hyperpigmentation` |
| `areas-of-concern-broken-capillaries` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `treatments-clear-v` · `treatments-clearsilk` · `areas-of-concern-rosacea` · `areas-of-concern-spider-veins` |
| `areas-of-concern-cellulite` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `areas-of-concern-stubborn-fat` · `areas-of-concern-loose-skin` |
| `areas-of-concern-core-strength` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `areas-of-concern-muscle-development` · `areas-of-concern-stubborn-fat` |
| `areas-of-concern-double-chin` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `areas-of-concern-jowls` · `areas-of-concern-stubborn-fat` |
| `areas-of-concern-fine-lines` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `treatments-botox-dysport` · `treatments-emface` · `treatments-clearsilk` · `treatments-scarlet-rf` · `areas-of-concern-wrinkles` · `areas-of-concern-loose-skin` |
| `areas-of-concern-hyperpigmentation` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `treatments-clearsilk` · `treatments-forever-young-bbl` · `treatments-obagi-skintrinsiq` · `areas-of-concern-melasma` · `areas-of-concern-age-spots` · `areas-of-concern-sun-damage` |
| `areas-of-concern-jowls` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `areas-of-concern-loose-skin` · `areas-of-concern-turkey-neck` |
| `areas-of-concern-loose-skin` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `areas-of-concern-jowls` · `areas-of-concern-turkey-neck` |
| `areas-of-concern-melasma` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `treatments-clearsilk` · `treatments-obagi-skintrinsiq` · `treatments-medical-facial` · `areas-of-concern-hyperpigmentation` · `areas-of-concern-sun-damage` |
| `areas-of-concern-muscle-development` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `areas-of-concern-core-strength` · `areas-of-concern-stubborn-fat` |
| `areas-of-concern-rosacea` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `treatments-clearsilk` · `treatments-forever-young-bbl` · `treatments-clear-v` · `areas-of-concern-broken-capillaries` · `areas-of-concern-hyperpigmentation` |
| `areas-of-concern-sexual-function-enhancement` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `areas-of-concern-urinary-incontinence` · `mommy-makeover` |
| `areas-of-concern-spider-veins` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `treatments-clear-v` · `areas-of-concern-broken-capillaries` · `areas-of-concern-rosacea` |
| `areas-of-concern-stubborn-fat` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `areas-of-concern-cellulite` · `areas-of-concern-muscle-development` |
| `areas-of-concern-sun-damage` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `treatments-forever-young-bbl` · `treatments-halo-laser-treatment` · `treatments-clearsilk` · `areas-of-concern-age-spots` · `areas-of-concern-uneven-skin-texture` |
| `areas-of-concern-turkey-neck` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `areas-of-concern-jowls` · `areas-of-concern-loose-skin` |
| `areas-of-concern-uneven-skin-texture` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `treatments-microneedling` · `treatments-scarlet-rf` · `treatments-halo-laser-treatment` · `treatments-medical-facial` · `areas-of-concern-acne-acne-scars` · `areas-of-concern-fine-lines` |
| `areas-of-concern-urinary-incontinence` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `areas-of-concern-sexual-function-enhancement` · `areas-of-concern-core-strength` |
| `areas-of-concern-wrinkles` | T-FEATURE | F2 | `areas-of-concern` · `consultation` · `treatments-botox-dysport` · `treatments-halo-laser-treatment` · `treatments-scarlet-rf` · `treatments-emface` · `areas-of-concern-fine-lines` · `areas-of-concern-loose-skin` |
| `areas-of-concern` | T-HUB | F1 | `areas-of-concern-acne-acne-scars` · `areas-of-concern-age-spots` · `areas-of-concern-hyperpigmentation` · `areas-of-concern-melasma` · `areas-of-concern-sun-damage` · `areas-of-concern-uneven-skin-texture` · `areas-of-concern-rosacea` · `areas-of-concern-broken-capillaries` · `areas-of-concern-spider-veins` · `areas-of-concern-fine-lines` · `areas-of-concern-wrinkles` · `areas-of-concern-jowls` · `areas-of-concern-turkey-neck` · `areas-of-concern-double-chin` · `areas-of-concern-loose-skin` · `areas-of-concern-cellulite` · `areas-of-concern-stubborn-fat` · `areas-of-concern-core-strength` · `areas-of-concern-muscle-development` · `areas-of-concern-urinary-incontinence` · `areas-of-concern-sexual-function-enhancement` · `consultation` · `treatments` |
| `before-after-photos` | T-HUB | F4 | `success-stories` · `consultation` · `areas-of-concern` · `treatments` · `disclaimer` |
| `blog` | T-INDEX | F4 | `areas-of-concern` · `consultation` |
| `category-events` | T-INDEX | F4 | `consultation` · `contact` |
| `consultation` | T-FEATURE | F2 | `areas-of-concern` · `treatments` · `about` · `contact` · `what-to-expect-during-your-med-spa-consultation-in-san-anselmo` · `treatments-emsella` |
| `contact` | T-CONTACT | terminal | `consultation` · `about` · `local-community-support` |
| `disclaimer` | T-LEGAL | terminal | `contact` · `consultation` · `privacy-policy` · `accessibility` · `before-after-photos` |
| `download-app` | T-ARTICLE | F4 | `consultation` · `contact` |
| `index` | T-HOME | F1 | `areas-of-concern` · `treatments` · `consultation` · `about` · `local-community-support` · `contact` · `success-stories` · `treatments-emsella` · `areas-of-concern-urinary-incontinence` |
| `local-community-support` | T-COMPANY | F4 | `about` · `consultation` · `contact` · `index` · `category-events` |
| `media` | T-INDEX | F4 | `about` · `consultation` |
| `mommy-makeover` | T-FEATURE | F3 | `treatments` · `consultation` · `areas-of-concern-core-strength` · `areas-of-concern-urinary-incontinence` · `areas-of-concern-stubborn-fat` |
| `privacy-policy` | T-LEGAL | terminal | `contact` · `disclaimer` · `accessibility` · `consultation` |
| `store` | T-INDEX | F4 | `treatments` · `consultation` |
| `success-stories` | T-HUB | F4 | `before-after-photos` · `consultation` · `about` · `areas-of-concern` · `treatments` |
| `treatments-botox-dysport` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-fine-lines` · `areas-of-concern-wrinkles` |
| `treatments-braintap-sessions` | T-FEATURE | F3 | `treatments` · `consultation` · `areas-of-concern-core-strength` |
| `treatments-clear-v` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-spider-veins` · `areas-of-concern-broken-capillaries` |
| `treatments-clearsilk` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-rosacea` · `areas-of-concern-uneven-skin-texture` |
| `treatments-emface` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-fine-lines` · `areas-of-concern-jowls` |
| `treatments-emsculpt-neo` | T-FEATURE | F3 | `treatments` · `consultation` · `areas-of-concern-core-strength` · `areas-of-concern-muscle-development` · `areas-of-concern-stubborn-fat` |
| `treatments-emsella` | T-FEATURE | F3 | `treatments` · `consultation` · `areas-of-concern-urinary-incontinence` · `areas-of-concern-sexual-function-enhancement` |
| `treatments-emtone` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-cellulite` · `treatments-vanquish-me` |
| `treatments-exion-by-btl` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-loose-skin` · `areas-of-concern-turkey-neck` |
| `treatments-forever-clear-acne` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-acne-acne-scars` · `treatments-microneedling` |
| `treatments-forever-young-bbl` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-sun-damage` · `areas-of-concern-age-spots` |
| `treatments-halo-laser-treatment` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-sun-damage` · `areas-of-concern-uneven-skin-texture` |
| `treatments-lightstim-red-light-therapy` | T-FEATURE | F3 | `treatments` · `consultation` · `areas-of-concern-fine-lines` · `areas-of-concern-uneven-skin-texture` |
| `treatments-lymphatic-drainage-massage` | T-FEATURE | F3 | `treatments` · `consultation` · `areas-of-concern-stubborn-fat` · `areas-of-concern-cellulite` |
| `treatments-medical-facial` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-uneven-skin-texture` · `treatments-obagi-skintrinsiq` |
| `treatments-microneedling` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-uneven-skin-texture` · `areas-of-concern-acne-acne-scars` · `treatments-scarlet-rf` |
| `treatments-obagi-skintrinsiq` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-hyperpigmentation` · `store` · `treatments-medical-facial` |
| `treatments-scarlet-rf` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-loose-skin` · `areas-of-concern-uneven-skin-texture` · `treatments-microneedling` |
| `treatments-vanquish-me` | T-FEATURE | F3 | `consultation` · `treatments` · `areas-of-concern-stubborn-fat` · `treatments-emsculpt-neo` |
| `treatments` | T-HUB | F1 | `treatments-botox-dysport` · `treatments-clearsilk` · `treatments-halo-laser-treatment` · `treatments-forever-young-bbl` · `treatments-forever-clear-acne` · `treatments-clear-v` · `treatments-scarlet-rf` · `treatments-microneedling` · `treatments-emface` · `treatments-exion-by-btl` · `treatments-medical-facial` · `treatments-obagi-skintrinsiq` · `treatments-vanquish-me` · `treatments-emtone` · `treatments-emsella` · `treatments-emsculpt-neo` · `treatments-braintap-sessions` · `treatments-lightstim-red-light-therapy` · `treatments-lymphatic-drainage-massage` · `mommy-makeover` · `areas-of-concern` · `consultation` |
| `what-to-expect-during-your-med-spa-consultation-in-san-anselmo` | T-ARTICLE | F4 | `consultation` · `areas-of-concern` · `about` |

---

**Feeds:** §1 confirms the conversion architecture for the build · §2 hands three orphan decisions to the owner · §3 is the nav/interlink source for `client-site-build`.
