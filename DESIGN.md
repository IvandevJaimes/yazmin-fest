---
name: Yazmin Fest
description: A bright botanical invitation for Yazmin’s quinceañera.
colors:
  background: "#fffefe"
  foreground: "#311e28"
  paper: "#fffefe"
  ink: "#311e28"
  muted: "#61424f"
  wine: "#45152f"
  berry: "#8d1e4f"
  rose: "#d64a7b"
  pinkwash: "#fff0f5"
  leaf: "#34543e"
  leaf-soft: "#e8f0e9"
  line: "#e8cbd6"
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

Yazmin Fest treats the page as a personal botanical keepsake that unfolds into a useful invitation. An open white cover introduces the celebration with centered editorial lettering, Yazmin’s handwritten name, delicate floral corners, and a supplied portrait rising from the lower edge.

Beyond the cover, the page stays airy and legible. Fine rules and leaf-green details organize open, print-like sections; soft rose and deep wine mark purposeful changes in tone. Supplied portrait photographs stay full-color and carry their natural field and garden hues.

**Key Characteristics:**
- Bright white as the dominant field, with botanical corner artwork.
- A high-contrast editorial face paired with a fine handwritten name.
- Berry, rose, and leaf-green details balanced by dark wine and soft rose sections.
- Natural-color supplied photography and an easy-to-scan vertical story.

**The Botanical Keepsake Rule.** Keep the identity centered, light, and personal: editorial lettering, Yazmin’s handwritten name, botanical art, and the supplied portraits.

## Colors

The palette pairs a bright white canvas with berry and rose accents, dark wine anchors, and restrained leaf green.

### Section surfaces
- **Paper:** The hero, event details, gallery, and gift sections use the bright white paper surface.
- **Rose wash:** The countdown uses the pale rose surface.
- **Deep wine:** RSVP and the closing section use the dark wine surface, with light text and controls.

### Primary
- **Berry:** The key celebratory accent for Yazmin’s script name and the gift-alias action.
- **Deep Wine:** The darkest brand color, used for prominent title text, the solid WhatsApp action, and the RSVP and footer fields.

### Secondary
- **Rose:** A lively accent for fine underlines, small details, and the custom scrollbar.
- **Rose Wash:** A pale tonal surface used to distinguish the countdown from the white sections.

### Tertiary
- **Leaf Green:** A botanical utility accent for event labels, map actions, and keyboard focus.
- **Soft Leaf:** A pale botanical surface token defined in the palette; it is not applied to a major section in the current page.

### Neutral
- **Bright White:** The page’s open background and the light surface for controls.
- **Ink:** The primary dark text color.
- **Muted Plum:** Supporting copy and captions.
- **Rose Line:** Fine dividers and open section boundaries.

**The White-Field Rule.** Bright white remains the dominant canvas; rose wash and deep wine create purposeful bands while leaf green stays in small labels and utility actions.

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

The implementation uses Tailwind’s small, medium, and large breakpoints at 640px, 768px, and 1024px. The invitation advances through its main sections with vertical scroll snapping. The gallery is one continuous section with a larger video followed by a responsive masonry album.

The video opens the gallery, followed by one Pinterest-style flow of naturally sized photographs. The closing portrait sits in the final signature section so it is the last image in the invitation.

The cover keeps its supplied floral corner artwork as a still image. Content sections use fine line-art laurel and flower SVGs in their open edges: plum on light panels and champagne on wine panels. The stems draw on first entry, leaves and petals unfold in a stagger, and the finished artwork sways gently while visible. The decoration stays behind section content, scales down on mobile, and respects reduced-motion preferences.

## Elevation & Depth

Depth comes from the supplied photography, the hero’s soft image fade, and fine rules.

**The Photo-First Rule.** Use full-color photography and restrained tonal sections to create depth; this surface has no shadow vocabulary.

## Shapes

The form language is restrained and print-like: photos use a 12px radius and video uses a 16px radius. Utility controls use gently rounded corners (8px), and the prominent WhatsApp actions use a 12px radius. Thin borders define the map and alias actions, while fine horizontal and vertical rules divide event details. Sections remain open rather than forming a repeated rounded-card grid.

## Components

### Buttons
The actions are clear, compact, and easy to reach.

- **Shape:** WhatsApp links use a 12px radius; map and copy-alias controls use an 8px radius.
- **Primary:** The WhatsApp action uses a deep-wine fill with a light label, 24px horizontal and 16px vertical padding, and a 56px minimum height.
- **Light:** In the wine RSVP section, WhatsApp actions use a paper-white fill and change to rose wash on hover.
- **Secondary:** The map action has a leaf-green outline and fills leaf green on hover. The copy-alias button has a berry outline and fills berry on hover.
- **Focus:** Keyboard focus uses a 2px leaf-green outline with a 4px offset. Color transitions run for 200ms.

### Countdown
A rose-wash band holds four equal-width time columns. Bodoni Moda numerals use 36px on the narrow layout and 60px at the small breakpoint; fine rose-line dividers and compact uppercase labels keep the units distinct.

### Event details
The date, arrival times, and venue sit in open rows divided by fine rules. The date numeral is 96px, the time values use 36px and grow to 48px at the small breakpoint, and the venue uses 30px and grows to 36px.

### Botanical invitation cover
The centered “Mis XV” title pairs with Yazmin’s handwritten name and “Fest,” with floral corner artwork above and the portrait material entering from below. The portrait is softly masked at its top edge; the composition remains one centered vertical cover.

### Portrait gallery
The supplied images keep their original proportions in a responsive masonry composition. Tapping a photo opens it directly against a dark overlay in an enlarged viewer that closes with Escape. The closing portrait sits beneath the handwritten signature in the last section. Photos and video use rounded corners without decorative frames. The enlarged video is muted, loops, and plays while visible unless reduced motion is enabled.

### Motion
Native vertical scroll snapping advances between the main sections; existing scroll reveals bring content into view. Event facts settle in sequence, the countdown emerges as guests arrive, the masonry photos preserve their natural proportions, and the gift and RSVP sections open in place. The cover’s floral artwork stays still. Five fine-line SVG families—peony and olive, lavender and wildflowers, magnolia and eucalyptus, rose and laurel, and a lily/anemone arrangement—frame the open edges of their own sections with hand-drawn, non-repeating branches. Stems draw on entry, blooms use distinct reveals, and each branch and flower has a separate wind cycle. The video opens into its frame and pauses while offscreen. Reduced-motion preferences present the botanical art fully drawn without movement, disable smooth travel, and soften snapping.

## Do's and Don'ts

### Do:
- **Do** keep bright white dominant, with berry and rose accents and small leaf-green details.
- **Do** use Bodoni Moda for editorial headings, Manrope for practical copy and controls, and Parisienne for Yazmin’s handwritten name and signature.
- **Do** keep supplied portraits natural and full-color; use spacing, fine rules, and quiet tonal bands to organize sections.
- **Do** keep the WhatsApp action prominent and retain the leaf-green keyboard focus ring.

### Don't:
- **Don't** introduce beige or silver surfaces.
- **Don't** replace the open vertical invitation flow with rows of equal floating cards.
- **Don't** tint or recolor the supplied portrait photographs.
