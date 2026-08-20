# COPY - `treatments` (T-HUB, the device index, demoted BELOW the concern layer)

> Authored at the COPY phase from `_handoff/briefs/treatments.md`. This index sits behind
> `areas-of-concern`, which is the site's entry layer. It exists for readers who already know a
> device name.

## Locked SEO (quoted verbatim from the brief)

- **title:** `Aesthetic Treatments in San Anselmo, CA - Marin County`
- **meta:** `The devices and services Dr. Bacchi uses, from injectables and lasers to Emsella. Which one suits you is decided at your consultation, not before.`

---

## §1 hero: the index, and what it is for (S)

**H1:** Aesthetic treatments in San Anselmo

Every device and service this practice offers, listed plainly. This is a reference page, not the
front door. If you are starting from something you have noticed rather than something you have
already researched, start with areas of concern instead.

---

## §2 how to read this index (M)

**Section heading:** How to use this list

A treatment on this page is a tool, not a recommendation. Which one suits you, and whether any of
them does, is decided at the consultation after an evaluation rather than chosen from a menu
beforehand.

So: read it to know what is available here. Do not read it as a diagnosis. Two people who arrive
asking for the same device frequently leave with different plans, and occasionally one of them leaves
with no treatment at all, which is a legitimate result.

---

## §3 Injectables (S)

| treatment | what it addresses | page |
|---|---|---|
| Botox and Dysport | Lines that follow muscle movement, chiefly across the forehead, brows and eyes. | `treatments-botox-dysport` |

---

## §4 Skin and aesthetics (S)

| treatment | what it addresses | page |
|---|---|---|
| ClearSilk | Background redness, tone and overall skin quality, with minimal interruption. | `treatments-clearsilk` |
| Halo laser | Texture, pigment and sun damage, at a deeper level than a surface treatment reaches. | `treatments-halo-laser-treatment` |
| Forever Young BBL | Broadband light aimed at pigment, redness and the visible signs of sun exposure. | `treatments-forever-young-bbl` |
| Forever Clear | Broadband light directed at active acne. | `treatments-forever-clear-acne` |
| Clear V | Visible vessels, including broken capillaries and facial veins. | `treatments-clear-v` |
| Scarlet RF | Radiofrequency microneedling for laxity and texture. | `treatments-scarlet-rf` |
| Microneedling | Collagen stimulation for texture and acne scarring. | `treatments-microneedling` |
| EmFace | Facial muscle and skin toning without needles. | `treatments-emface` |
| Medical facial | A clinical facial planned around the evaluation rather than a fixed menu. | `treatments-medical-facial` |
| Obagi SkinTrinsiq | Cleansing and infusion, used as preparation or maintenance alongside other treatments. | `treatments-obagi-skintrinsiq` |
| LightStim red light therapy | Low-level light used as an adjunct for skin quality. | `treatments-lightstim-red-light-therapy` |

---

## §5 Body and function (S)

| treatment | what it addresses | page |
|---|---|---|
| Emsella | Pelvic-floor strengthening for urinary incontinence, fully clothed and seated. | `treatments-emsella` |
| Emsculpt NEO | Muscle building and fat reduction in the same session. | `treatments-emsculpt-neo` |
| Emtone | Cellulite and skin quality on the body. | `treatments-emtone` |
| EXION by BTL | Radiofrequency and ultrasound for body and skin, depending on the applicator. | `treatments-exion-by-btl` |
| Vanquish ME | Non-contact fat reduction across a larger treatment area. | `treatments-vanquish-me` |
| Non-Surgical Mommy Makeover | A combined plan spanning body and function after pregnancy, without surgery. | `mommy-makeover` |

---

## §6 Wellness (S)

| treatment | what it addresses | page |
|---|---|---|
| BrainTap sessions | Guided audio-visual sessions used for stress and sleep. | `treatments-braintap-sessions` |
| Lymphatic drainage massage | Manual technique used for swelling and post-treatment recovery. | `treatments-lymphatic-drainage-massage` |

---

## §7 one page per head term, and what is not offered (S)

**Section heading:** What this practice does not do

Every treatment above has its own page. Nothing is listed here that the practice does not actually
provide, and the following are not offered at all:

- **Surgery of any kind**, including facelift, eyelid surgery and liposuction.
- **Medical and surgical dermatology**, including Mohs surgery.
- **Skin-cancer treatment.**
- **Laser hair removal.**

If what you need is on that list, the evaluation will say so and point you elsewhere rather than
offering you something adjacent instead.

---

## §8 closing CTA (XS)

**Heading:** Start with the evaluation

Which treatment suits you is the output of the consultation, not an input to it.

- **Book a consultation** (primary)
- **Explore areas of concern** (secondary)
- Call (415) 785-4604

---

## Outcome row

```
FEATURE: a device index that is explicitly downstream of the evaluation, plus a published not-offered list
DO: check what is available here, and what is not, without being routed into a device
MEANS: you can tell in one page whether this practice can help you at all
```

## Authoring notes (not page copy)

- **The list is the sitemap's treatment slugs**, which is the authoritative record of what gets a page.
  D-OFFER-017's canonical_value is TRUNCATED in the registry (it ends mid-word at "Emscul…"), so it
  could not be used as the source of record. Worth fixing upstream: a truncated canonical is a silent
  data loss, and a less careful pass would have published the truncation.
- **No price anywhere on this page**, and no "from $X" per treatment.
- No outcome guarantee, no "typical results", no unqualified absolutes.
- `stubborn-fat` and body treatments must not name or imply CoolSculpting; it is on the not-offered
  list and is not mentioned here.
- Grouping note: EmFace is filed under Skin and aesthetics because it is a facial treatment, though it
  is an EM-series muscle device. If the owner prefers it under Body and function, it moves.
