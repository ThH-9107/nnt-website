import localFont from "next/font/local";

// Georgia-compatible metrics, with complete Vietnamese glyphs in both styles.
// Full local files avoid network-dependent builds and missing subset coverage.
export const creativeSerif = localFont({
  src: [
    { path: "./fonts/gelasio/Gelasio-Variable.ttf", weight: "400 700", style: "normal" },
    { path: "./fonts/gelasio/Gelasio-Italic-Variable.ttf", weight: "400 700", style: "italic" },
  ],
  variable: "--font-creative-serif",
  display: "swap",
  fallback: ["Times New Roman", "Noto Serif", "Liberation Serif", "serif"],
  adjustFontFallback: false,
});
