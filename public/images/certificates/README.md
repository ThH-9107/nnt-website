# Certificate previews

The website preserves the original certificate pages and links to their PDFs. Previews are delivered as WebP without cropping or retouching.

The two StemCo previews were rendered from the complete PDF page, including the recipient name, award text, and signatures. Extracting only the embedded background image omits those text overlays.

| Preview | Original upload |
| --- | --- |
| stemco-chemistry-gold.webp | public/images/awards/stemco_chem.pdf |
| stemco-biology-silver.webp | public/images/awards/stemco_bio.pdf |

The existing previews retain their original sources in `public/images/awards`. Titles, issuers, periods, and public PDF paths are maintained in `src/data/certificates.ts`.

The scholarship row summarizes four consecutive years; the displayed certificate covers AY 2025–26 only and is labeled accordingly. No certificate is substituted for the two honors whose matching scans have not yet been uploaded.
