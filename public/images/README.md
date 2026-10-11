# Image replacement guide

These SVGs are intentionally abstract placeholders. Replace each with a real, permission-cleared image and update the matching path and alt text in `src/data/inquiry.ts`, `src/app/creative/page.tsx`, or `src/data/project-pages.ts`.

- The Phase 1 homepage hero uses a clearly labeled CSS portrait placeholder in `src/app/page.tsx` and `src/app/home.css`. Replace it with a real portrait of Thanh, ideally in a research setting. `research-portrait-placeholder.svg` is retained from the earlier homepage but is not currently shown there.
- `medical-ai-placeholder.svg`: a real research workspace photograph or a carefully anonymized model-analysis visual. Do not show identifiable patient data.
- `durian-research-placeholder.svg`: field sampling in Lam Ha or pathogen isolation at the bench.
- `molebio-placeholder.svg`: a MoleBio pipetting, microscopy, or outreach workshop.
- `hoa-yen-placeholder.svg`: a Hoa Yen community program photograph used with participants' permission.
- `theatre-placeholder.svg`: a licensed photo from one of the listed stage productions.

Use a photograph with the same subject wherever an SVG appears more than once, or add separate images and update those paths independently. `next/image` already handles responsive rendering.

## Dedicated project pages

The detail-page image paths and visible captions are in `src/data/project-pages.ts`. Replace these SVGs with verified materials:

- `medical-ai-dataset-placeholder.svg`: anonymized dataset or preprocessing diagram, showing the pretraining and downstream sets.
- `medical-ai-experiment-placeholder.svg`: validated chart of the six experimental conditions, including F1 and AUROC.
- `phytophthora-field-placeholder.svg`: field sampling in Lam Ha, with location and date verified.
- `phytophthora-lab-placeholder.svg`: pathogen-isolation workflow or lab photograph; avoid implying a positive result.
- `molebio-lab-placeholder.svg`: real club laboratory session.
- `molebio-fair-placeholder.svg`: Science Fair terrarium activity or outreach workshop.
- `hoa-yen-water-placeholder.svg`: Cai Rang water-safety program, with participant permission.
- `hoa-yen-community-placeholder.svg`: a documented children, elderly-care, or rural program, with date and location.
