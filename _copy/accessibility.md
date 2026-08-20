# COPY - `accessibility` (T-LEGAL, chrome-only)

> Authored at the COPY phase from `_handoff/briefs/accessibility.md`.

## Locked SEO (quoted verbatim from the brief)

- **title:** `Accessibility Statement - Marin Medical Aesthetics`
- **meta:** `Learn about Marin Medical Aesthetics' commitment to website accessibility. Contact us if you need assistance accessing our website or services.`

---

## §1 hero: what this page is for (S)

**H1:** Accessibility

This page says what the rebuilt site actually does for accessibility, what standard it is being
built toward, and how to tell us when something does not work. It describes work in progress rather
than claiming a finished result.

---

## §2 what the rebuilt site does (M)

**Section heading:** What is built in

- **Keyboard navigation.** Every interactive control is reachable and operable by keyboard, including
  the menu and the mobile drawer. A visible focus outline is drawn on the element that has focus, and
  it is not removed.
- **A skip link.** The first focusable item on every page jumps straight to the main content, so a
  keyboard or screen-reader user does not walk the whole menu on every page.
- **Menus that announce their state.** Menu triggers carry an expanded or collapsed state that
  assistive technology can read, and the mobile drawer reports whether it is open or closed. Escape
  closes an open menu and returns focus to the control that opened it.
- **Colour and contrast.** The site's primary navy is `#073772`, sampled from the practice's own logo
  and existing site. Text and interface colours are set as tokens and checked for contrast against
  the surface they sit on, in both the light and the dark sections of the page, rather than being
  chosen per component.
- **Text that scales.** Type and spacing are set in relative units, so increasing text size in the
  browser reflows the page instead of clipping it.
- **Images carry alternative text**, and decorative images are marked as decorative so they are
  skipped rather than announced.
- **No motion that cannot be escaped.** Movement is limited to short transitions on menus and hover
  states. Nothing auto-plays, flashes or scrolls on its own.

---

## §3 the standard being worked toward (S)

**Section heading:** The standard

The site is being built toward **WCAG 2.1 Level AA**. That is a target being worked toward, not a
certification, and this practice makes no claim to have been audited or certified against it by
anyone.

⚠OWNER: no accessibility badge, seal, certification, overlay or third-party conformance mark is
published on this site. None is verified, so none ships. If a formal audit is commissioned later,
its result and its date can be published here.

---

## §4 reporting a barrier, and how to reach the practice (XS)

**Section heading:** Tell us what is not working

If any part of this site or any part of visiting the practice is difficult to use, say so and it
gets fixed. Describe what you were trying to do and what happened. If a page is blocking you, the
practice will give you the same information another way.

- **Contact the practice**
- Call (415) 785-4604

Marin Medical Aesthetics
100 Sir Francis Drake Blvd
San Anselmo, CA 94960

⚠OWNER: no response-time commitment is published. None is documented upstream.

---

## Authoring notes (not page copy)

- **D-BRAND-RAILS-002** is the crawled primary-palette fact. Its conveyable half is the navy
  `#073772`, which belongs on this page because contrast is genuinely an accessibility subject. Its
  other must_convey token, `138`, is the number of times that colour was counted on the crawled
  homepage. That is a crawl statistic about the OLD site, not a claim any visitor could read, and it
  is not written into the prose. Flagging rather than smuggling it in: if the gate insists on it, the
  registry token is the thing to fix, not this page.
- The standard is stated as a target. No certification, audit, badge or overlay is claimed.
- Every feature listed in §2 describes something the locked chrome actually does. The skip link, the
  aria-expanded menu states, the drawer's aria-hidden and the Escape-to-close behaviour are all in
  the locked carrier and were verified by render at the CHROME stage.
