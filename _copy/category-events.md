# COPY - `category-events` (T-INDEX, terminal utility inside Patient Resources)

> Authored at the COPY phase from `_handoff/briefs/category-events.md`. Patient Resources group, not
> primary nav.

## Locked SEO (quoted verbatim from the brief)

- **title:** `Events - Marin Medical Aesthetics`

---

## §1 hero-filter (XS)

**H1:** Events

Open evenings, education sessions and other dates hosted by the practice.

**Filter toolbar fields (exactly the declared set):** category, tags.

---

## §2 featured-pinned (S)

⚠OWNER: **omit this block.** A pinned event must be a real scheduled date. None has been supplied.
The block is omitted rather than filled with a placeholder.

---

## §3 list-grid (S, repeating template declared once)

**Item template fields:** event name, date, time, location, category, tags, and a register action.

Each item carries `category` and `tags` as `data-*` attributes.

**⚠EMPTY STATE, flagged explicitly:**

> **No events scheduled.**
> There is nothing on the calendar right now. When a date is set it will appear here with its time and
> location. To be told about the next one, ask at a consultation or call the practice.

Build note, not page copy: **no invented event, date, time, venue or attendance figure.** An event
listing is a commitment, and a fabricated one is a broken appointment for whoever turns up. A past
event is not shown as upcoming.

---

## §4 category-routing (XS)

**Section heading:** Looking for something else?

- **Explore areas of concern**
- **Browse treatments**

---

## §5 closing-cta (XS)

**Heading:** Start with the evaluation

- **Book a consultation**
- Call (415) 785-4604

---

## Outcome row

```
FEATURE: an events page that lists only real, scheduled dates
DO: find out whether anything is actually happening, without deciphering a stale calendar
MEANS: nobody drives to San Anselmo for an event that was never scheduled
```

## Authoring notes (not page copy)

- No promotional pricing attached to any event. The `$500 OFF` promotion published on a retiring
  property carries restrictions that live on a separate disclaimer page; it does not get lifted onto
  this site without its terms adjacent and legible (⚠OWNER, coupled to F4).
- No "free" event framing until the owner confirms it, for the same reason pricing is held everywhere
  else on this site.
