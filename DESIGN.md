---
name: Yazmin Fest
description: A bright botanical invitation for Yazmin’s quinceañera.
colors:
  background: "#f3e7d3"
  foreground: "#533b2a"
  paper: "#fff9ef"
  ink: "#533b2a"
  muted: "#765a45"
  wine: "#694832"
  berry: "#98565f"
  rose: "#d4a19b"
  pinkwash: "#f0e1d2"
  leaf: "#657650"
  leaf-soft: "#e7ebd9"
  silver: "#c0c0c0"
  silver-soft: "#dedede"
  silver-dark: "#3d3d3e"
  dress-code-beige: "#d9c4a6"
  dress-code-silver-light: "#f4f5f6"
  dress-code-silver-mid: "#aeb4b8"
  dress-code-silver-shadow: "#7f898f"
  dress-code-silver-highlight: "#eceeef"
  line: "#aeb2b4"
typography:
  display:
    fontFamily: "Bodoni Moda, serif"
    fontSize: "clamp(2.75rem, 12vw, 5.25rem)"
    fontWeight: 500
    lineHeight: 0.8
    letterSpacing: "0.14em"
  headline:
    fontFamily: "Bodoni Moda, serif"
    fontSize: "3rem"
    fontWeight: 500
    lineHeight: 0.95
  title:
    fontFamily: "Bodoni Moda, serif"
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 0.98
  script-name:
    fontFamily: "Parisienne, cursive"
    fontSize: "clamp(3.5rem, 14vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 0.92
  script-fest:
    fontFamily: "Parisienne, cursive"
    fontSize: "clamp(4.625rem, 23vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.88
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.2em"
  button:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
rounded:
  sm: "2px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
spacing:
  "4": "1rem"
  "6": "1.5rem"
  "20": "5rem"
  "24": "6rem"
  "28": "7rem"
components:
  button-primary:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "16px 24px"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.wine}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "16px 24px"
  button-outline-venue:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.leaf}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
  button-outline-alias:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.berry}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "12px 20px"
  section-heading:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
---

# Design System: Yazmin Fest

## Overview

**Creative North Star: “The Botanical Keepsake”**

Yazmin Fest treats the page as a personal botanical keepsake that unfolds into a useful invitation. A warm beige cover introduces the celebration with centered editorial lettering, Yazmin’s handwritten name, delicate floral corners, and a supplied portrait rising from the lower edge.

Beyond the cover, the page stays airy and legible. Fine silver rules and accents organize open, print-like sections; cocoa brown marks purposeful changes in tone. Supplied portrait photographs stay full-color and carry their natural field and garden hues.

**Key Characteristics:**
- Warm beige as the dominant field, with botanical corner artwork.
- A high-contrast editorial face paired with a fine handwritten name.
- Dusty-rose and sage accents balanced by cocoa-brown sections.
- Natural-color supplied photography and an easy-to-scan vertical story.

**The Botanical Keepsake Rule.** Keep the identity centered, light, and personal: editorial lettering, Yazmin’s handwritten name, botanical art, and the supplied portraits.

## Colors

The palette pairs a warm beige canvas with dusty-rose and sage pastel text accents, silver details and closing panels, and cocoa-brown anchors.

### Section surfaces
- **Beige:** The hero, event details, gallery, and gift sections use warm beige paper.
- **Sand wash:** The countdown uses a pale beige surface.
- **Dark Silver:** RSVP and the closing section use dark silver backgrounds, with light text and controls.

### Primary
- **Dusty Rose:** The key accent for Yazmin’s script name and selected utility actions.
- **Cocoa Brown:** A warm neutral for prominent title text, the solid WhatsApp action, and supporting copy.

### Secondary
- **Pastel Rose:** A soft accent for Yazmin’s script name and small details.
- **Sand Wash:** A pale tonal surface used to distinguish the countdown from beige sections.

### Tertiary
- **Sage:** A muted botanical accent for event labels and map actions.
- **Soft Sage:** A pale botanical surface token in the palette.
- **Silver:** Fine dividers, controls, botanical line art, focus rings, and the scrollbar.

### Neutral
- **Warm Beige:** The page’s open background and the light surface for controls.
- **Ink:** The primary dark text color.
- **Muted Cocoa:** Supporting copy and captions.
- **Silver Line:** Fine dividers and open section boundaries.

**The Beige, Pastel, and Silver Rule.** Beige remains the dominant canvas; dark silver frames the final RSVP and sign-off sections with light text, while dusty rose and sage color headings and labels elsewhere.

## Typography

**Display Font:** Bodoni Moda (serif fallback)  
**Body Font:** Manrope (Arial, sans-serif fallback)  
**Handwritten Font:** Parisienne (cursive fallback)

**Character:** Bodoni Moda gives the invitation its formal, high-contrast editorial voice. Manrope keeps event facts and actions clear at phone size, while Parisienne supplies a light handwritten signature for Yazmin’s name.

### Hierarchy
- **Display** (weight 500, clamp(2.75rem, 12vw, 5.25rem), line-height 0.8, tracking 0.14em): The uppercase “Mis XV” cover title.
- **Script name** (weight 400, clamp(3.5rem, 14vw, 3.75rem), line-height 0.92): Yazmin’s name on the cover; “Fest” is larger at clamp(4.625rem, 23vw, 6rem) with 0.88 line-height.
- **Headline** (weight 500, 3rem to 3.75rem, line-height 0.95): The closing RSVP invitation.
- **Section title** (weight 500, 2.25rem to 3rem, line-height 0.98): Main headings between the cover and footer.
- **Body** (weight 400, 0.875rem to 1rem, line-height 1.75): Explanations, venue details, and supporting copy.
- **Label** (weight 600, 0.75rem, 0.2em tracking, uppercase): Event times, dates, and compact section labels.
- **Button** (weight 600, 0.875rem): WhatsApp, map, and copy-alias actions.

**The Two-Voice Rule.** Bodoni Moda carries the editorial hierarchy; Parisienne is reserved for Yazmin’s name and handwritten signature treatment.

## Layout

The invitation is mobile-first and vertically centered around the cover. The hero fills the viewport; its portrait enters from the bottom beneath the centered title and action. At wider sizes the portrait has more room, while the cover keeps its centered composition.

Content sections use a 24px horizontal gutter and generous vertical padding. The main content is centered within widths from 48rem to 72rem. The event details stack into date, time, and venue rows on narrow screens, then become three columns at the medium breakpoint. Each section fills at least one viewport and aligns to the page’s vertical scroll snap, creating a presentation-like progression with native scrolling.

The implementation uses Tailwind’s small, medium, and large breakpoints at 640px, 768px, and 1024px. The invitation advances through its main sections with vertical scroll snapping. The gallery is one continuous responsive masonry album.

The gallery is one Pinterest-style flow of naturally sized photographs. The closing portrait sits in the final signature section so it is the last image in the invitation.

The cover keeps its supplied floral corner artwork as a still image, softened into beige and dusty rose. Content sections use fine line-art laurel and flower SVGs in their open edges: silver on light panels and pale champagne on silver panels. The stems draw on first entry, leaves and petals unfold in a stagger, and the finished artwork sways gently while visible. The decoration stays behind section content, scales down on mobile, and respects reduced-motion preferences.

## Elevation & Depth

Depth comes from the supplied photography, the hero’s soft image fade, and fine rules.

**The Photo-First Rule.** Use full-color photography and restrained tonal sections to create depth; this surface has no shadow vocabulary.

## Shapes

The form language is restrained and print-like: photos use a 12px radius. Utility controls use gently rounded corners (8px), and the prominent WhatsApp actions use a 12px radius. Thin borders define the map and alias actions, while fine horizontal and vertical rules divide event details. Sections remain open rather than forming a repeated rounded-card grid.

## Components

### Buttons
The actions are clear, compact, and easy to reach.

- **Shape:** WhatsApp links use a 12px radius; map and copy-alias controls use an 8px radius.
- **Primary:** The WhatsApp action uses a cocoa-brown fill with a light label, 24px horizontal and 16px vertical padding, and a 56px minimum height.
- **Light:** In the dark-silver RSVP section, WhatsApp actions use a beige-paper fill with cocoa text.
- **Secondary:** Map and copy-alias controls use silver, sage, and dusty-rose outlines and fills on hover.
- **Focus:** Keyboard focus uses a 2px silver outline with a 4px offset. Color transitions run for 200ms.

### Countdown
A sand-wash band holds four equal-width time columns. Bodoni Moda numerals use 36px on the narrow layout and 60px at the small breakpoint; fine silver dividers and compact uppercase labels keep the units distinct.

### Event details
The date, arrival times, and venue sit in open rows divided by fine rules. A prominent dress-code feature sits within the same section, with a large editorial heading and visual beige and silver swatches. The date numeral is 96px, the time values use 36px and grow to 48px at the small breakpoint, and the venue uses 30px and grows to 36px.

### Botanical invitation cover
The centered “Mis XV” title pairs with Yazmin’s handwritten name and “Fest,” with floral corner artwork above and the portrait material entering from below. The portrait is softly masked at its top edge; the composition remains one centered vertical cover.

### Portrait gallery
The supplied images keep their original proportions in a responsive masonry composition. Tapping a photo opens it directly against a dark overlay in an enlarged viewer that closes with Escape. The closing portrait sits beneath the handwritten signature in the last section. Photos use rounded corners without decorative frames.

### Motion
Native vertical scroll snapping advances between the main sections; existing scroll reveals bring content into view. Event facts settle in sequence, the countdown emerges as guests arrive, the masonry photos preserve their natural proportions, and the gift and RSVP sections open in place. The cover’s floral artwork stays still. Five fine-line SVG families—peony and olive, lavender and wildflowers, magnolia and eucalyptus, rose and laurel, and a lily/anemone arrangement—frame the open edges of their own sections with hand-drawn, non-repeating branches. Stems draw on entry, blooms use distinct reveals, and each branch and flower has a separate wind cycle. Reduced-motion preferences present the botanical art fully drawn without movement, disable smooth travel, and soften snapping.

## Do's and Don'ts

### Do:
- **Do** keep beige dominant, with silver details and dusty-rose, sage, and cocoa accents.
- **Do** use Bodoni Moda for editorial headings, Manrope for practical copy and controls, and Parisienne for Yazmin’s handwritten name and signature.
- **Do** keep supplied portraits natural and full-color; use spacing, fine rules, and quiet tonal bands to organize sections.
- **Do** keep the WhatsApp action prominent and retain the silver keyboard focus ring.

### Don't:
- **Don't** reintroduce plum, pink, or green accents into the interface palette.
- **Don't** replace the open vertical invitation flow with rows of equal floating cards.
- **Don't** tint or recolor the supplied portrait photographs.
