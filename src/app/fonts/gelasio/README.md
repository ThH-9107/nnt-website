# Gelasio creative-page serif

Unmodified full variable fonts from the Google Fonts repository:

- [Normal](https://raw.githubusercontent.com/google/fonts/main/ofl/gelasio/Gelasio%5Bwght%5D.ttf): SHA256 `4DAECEA457258C9EBEB8BC99ED3FD24353618BFAD3EA4B93FA0B5D0468FC04E4`
- [Italic](https://raw.githubusercontent.com/google/fonts/main/ofl/gelasio/Gelasio-Italic%5Bwght%5D.ttf): SHA256 `52559E845A4D33514E5F93BB9AE7DBEAE1894A53F2C565A15F18AF40CD337C09`
- [Project](https://github.com/SorkinType/Gelasio), [metadata](https://raw.githubusercontent.com/google/fonts/main/ofl/gelasio/METADATA.pb)

Both styles support weights 400–700, all Vietnamese precomposed vowels, and combining marks. Their ASCII advance widths match the installed Georgia faces. Keep the complete files and the accompanying `OFL.txt`; do not replace them with Latin-only subsets.

`src/app/fonts.ts` loads these using `next/font/local`. Its variable is attached only to the creative story. Body text and captions retain their system sans-serif stack. Font configuration must keep normal and italic styles separate and use a Vietnamese-capable fallback.
