# Vietnamese font audit — October 26, 2026

## Root cause

The creative story used Georgia-first system serif stacks. Installed Georgia normal, italic, bold, and bold-italic each lack 27 of the 40 distinct Vietnamese letters in the rendered story, including multi-accent vowels such as ầ, ế, ồ, and ắ. Fallback mixing produced the detached-looking accents in headings and dialogue. A CSS subset setting cannot add missing glyphs to an installed system font.

The earlier local fix changed four From Page to Stage selectors to Times New Roman. Production headings such as Khởi Sắc and Hỏa Chí, and narrative leads, still inherited Georgia. That partial fix did not cover the complete creative story.

## Font map and fix

| Text | Before | Now |
| --- | --- | --- |
| Creative headings and serif leads | Georgia-first | Locally bundled Gelasio |
| Feature headings and dialogue | Local Times-first patch | Same bundled Gelasio |
| Body paragraphs and captions | Arial / Helvetica / sans-serif | Unchanged |
| Italic stage directions and music cues | System sans-serif italic | Unchanged |
| Full-script PDF | Embedded TrueType subsets with Unicode mappings | Unchanged |

Gelasio is designed to be metric-compatible with Georgia. Both verified files contain all 90 Vietnamese precomposed code points U+1EA0–U+1EF9, Vietnamese base letters, and combining marks. Their 95 ASCII advance widths match installed Georgia exactly, in normal and italic styles. This preserves the editorial serif appearance and English text geometry while keeping complete Vietnamese runs in one face.

`src/app/fonts.ts` uses `next/font/local` with complete, unmodified variable TTFs, weights 400–700, separate normal/italic declarations, and `display: swap`. Generated `@font-face` rules point to local assets with no restrictive `unicode-range`. No Google Fonts request or subset selection is needed at runtime/build time. The font variable is attached only to the creative article; other pages retain their existing typography. The homepage does not preload the new fonts. The font files include their OFL license and provenance.

## Unicode, transformations, and CSS

- Inspected data sources and creative HTML are already NFC, with zero combining-mark characters. No character replacement or blanket normalization was needed.
- Creative utilities split only whole phrases, and the bilingual component maps whole script blocks. No character-by-character animation separates grapheme clusters.
- No text clipping container or font-feature override caused the issue. Existing font sizes, line heights, layout dimensions, breakpoints, navigation, and animations remain unchanged.
- Production heading tracking remains as designed. The preceding local feature-only spacing correction remains in place.

## Verification

- Production build, lint, and TypeScript checks passed.
- Both generated font assets return HTTP 200 as `font/ttf` and match the original verified bytes.
- Offline normal/italic specimens render Cao Văn Lầu, Khởi Sắc 27, hết lòng, rồi, người, and Dạ cổ hoài lang correctly at heading, dialogue, and phone-size text sizes. NFC and decomposed NFD versions have equal measured widths in the four sample strings. These specimens are not browser screenshots.
- Isolated component-logic checks confirm English default, switching to Vietnamese and back, and correct ARIA states/targets. These checks use stubbed state hooks and do not claim browser hydration coverage.
- Gelasio normal/italic and Arial normal/italic/bold/bold-italic contain all 40 Vietnamese letters used in the built story.
- The five-page PDF hash is unchanged. Its embedded fonts and ToUnicode mappings remain intact; each new in-memory PDF.js page render matches the previously reviewed PNG exactly, and no replacement characters are extracted.

**Browser limitation:** Computer Use found Brave but stopped before interaction because it could not confidently determine the current browser URL for policy enforcement. No Chromium desktop/mobile viewport, live computed-font, or actual browser-toggle check was completed. Do not describe the offline specimens or unit checks as browser verification. No browser workaround was attempted after the stop.

At the time of this audit, the changes remained local under Thanh's instruction not to push. On October 27, 2026, Thanh explicitly authorized committing and pushing the reviewed website updates, superseding that hold.
