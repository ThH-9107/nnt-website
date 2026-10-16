# Design System — Current Portfolio Direction

Status: **current working direction, October 2026**

## 1. Central concept

Primary concept:

> **Change the scale of attention.**

Supporting line:

> Follow the question from images to organisms, learners, communities, and audiences.

Earlier concept: `Follow the question. Change the scale.` This can still appear, but the **scale concept is now primary**.

The previous branching-tree metaphor should be **demoted**. A subtle connecting path may remain, but the website should not depend on a literal tree.

## 2. Primary scale labels

Use these as the main visible labels:

1. **IMAGE**
2. **ORGANISM**
3. **LEARNER**
4. **COMMUNITY**
5. **AUDIENCE**

Secondary verbs:

1. IMAGE — *See*
2. ORGANISM — *Test*
3. LEARNER — *Share*
4. COMMUNITY — *Serve*
5. AUDIENCE — *Express*

The scale names explain the concept. The verbs add personality but should not carry the information architecture by themselves.

## 3. Visual journey

The visual progression should feel like:

**close observation → wider context**

This is not literal physical magnification. It is the scale of attention.

### IMAGE
- close
- precise
- high information density
- grids
- image tiles
- fine marks
- tighter framing

### ORGANISM
- pull back
- organic contours
- specimen / field / Petri-dish language
- larger forms

### LEARNER
- one point becomes several
- lab-table relationships
- human grouping
- practical activity

### COMMUNITY
- wider network
- multiple clusters
- repeated connections
- geographic / civic logic

### AUDIENCE
- widest framing
- space
- stage / audience geometry
- shared experience
- visual composition

The user should perceive a difference between IMAGE and AUDIENCE even without reading labels.

The October 15 editorial revision preserves this visual system, motion, font sizes, navigation, and the five main stories. The GFP proposal uses the same paper-like overlay as a secondary ORGANISM story, with its own direct URL. Its link in the Phytophthora story is compact; old bookmarked anchors remain useful.

October 16 finishing adjustments: the personal-introduction lead is 20–24px, its body 17–18px, and the Working Method lead 18–20px. Other reading sizes remain unchanged. ORGANISM fills the shared frame with real foliage and a smaller full-tree context inset; one outside caption replaces repeated labels. Its secondary GFP navigation is a direct link with no expanding description. The lakeside hero stays active while the restaurant portrait is used in About and previewed separately as a possible hero.

## 4. Map/path geometry

Do not use:
- five equal spokes
- radial menu
- literal tree
- corporate flowchart
- long alternating vertical timeline

Preferred:
- one restrained continuous path / trace through the five scales
- asymmetrical composition
- scale zones / expanding framing
- soft contours / rings / density changes

The path is a connective motif, not the core metaphor.

The GFP fluorescence proposal side story may use one intentionally incomplete dashed branch because the branch itself has narrative meaning. It remains secondary under ORGANISM.

## 5. Interaction model

### Scroll
Controls the active scale.

Scroll may:
- move framing
- change zoom
- emphasize the scale
- evolve texture / density

### Hover
**Cosmetic only.**

Hover may:
- brighten node
- underline label
- show pointer
- increase local contrast

Hover should **not** switch the active scale if scroll already controls it.

### Click
Intentional action.

Click may:
- jump to a selected scale
- open project story overlay
- open secondary path

## 6. Zoom / scale intensity

Previous iterations were too subtle.

The difference between IMAGE and AUDIENCE should be visually obvious.

Preferred methods:
- SVG viewBox changes
- controlled CSS transforms
- density changes
- layer reveal / hide
- texture transformation
- framing / whitespace changes

Avoid:
- sudden cinematic zooms
- spinning
- endless parallax
- fake 3D

## 7. Project overlays

Normal browsing: project stories open inside a **large editorial overlay / route-aware drawer**.

Not:
- tiny modal
- generic dark backdrop
- completely unrelated full page

Overlay should preserve awareness of the scale map.

Suggested:
- ~90–96vw
- ~90–96vh
- off-white / paper-like overlay
- subtle visible map context behind
- top-left: Back to Inquiry Map
- top-right: scale position / name
- optional previous / next scale

Close must restore:
- map state
- scale
- scroll position

Direct URL: same story content can render standalone.

## 8. Homepage hierarchy

1. Hero — calm, easy to scan
2. A little about me — Thanh's supplied personal introduction, immediately below the hero
3. Scale experience — main memorable moment
4. Current work strip — concise first-author manuscript status
5. Working method — research practice and selected scientific training
6. Selected honors — original list with expandable certificate scans
7. Footer

## 9. Typography / material feel

Desired blend:

**editorial magazine + scientific notebook + biological observation**

Base:
- warm off-white / paper
- deep ink / near-black
- muted grey-green / botanical accent
- restrained secondary tones only

Typography:
- expressive serif for large editorial headings
- clean sans-serif for navigation, labels, metadata
- generous line height
- strong scale hierarchy
- reading text generally 17–20px, with larger introductory serif passages
- navigation 14–15px; captions and supporting text generally 13–15px
- the corner wordmark is NThanh, in the existing restrained serif/green language

Avoid:
- SaaS-card typography
- generic tech gradients
- neon
- glassmorphism
- excessive pills
- huge rounded rectangles

## 10. Photography

Do not use generic stock science images.
Do not generate fake scientific documentation.

Use:
- actual lab / field / workshop / community / stage photos
- verified charts
- actual research diagrams where public-safe
- purposeful placeholders until assets arrive

Different sections may use different image proportions.

## 11. Motion rules

Allowed:
- scale transitions
- path emphasis
- image / texture fade
- restrained line draw
- small text reveals
- overlay transitions
- subtle local parallax

Avoid:
- looping motion
- bouncing
- particle backgrounds
- cursor followers
- glowing neon
- autoplay video
- WebGL spectacle

Typical transition: ~250–500 ms for UI state changes.

## 12. Accessibility

Required:
- keyboard-accessible scale selection
- visible focus states
- semantic links/buttons
- no essential hover-only information
- adequate contrast
- reduced-motion version

For `prefers-reduced-motion`:
- remove camera-like movement
- switch active states with simple fade / instant change
- keep all navigation intact

## 13. Mobile

Do not squeeze desktop composition.

Mobile:
- simple vertical scale path
- IMAGE → ORGANISM → LEARNER → COMMUNITY → AUDIENCE
- tapping reveals / opens
- full-screen project sheets / routes
- closing returns to same scale
- no horizontal primary navigation
- reduced decorative texture

## 14. What "good" should feel like

First 5 seconds:
"Student researcher; I know where research and résumé are."

First 30 seconds:
"Oh, this portfolio is organized by changing scale."

Longer visit:
"I can see how the same person moves from model images to organisms to learners to communities to audiences."

The concept should be clear without explanation and interesting without becoming a puzzle.
