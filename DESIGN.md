# English4Kids Design Context

## Product intent
English4Kids is a lightweight discovery portal for children and parents. It presents English Voca, SpeakFlow, and Speaking Test as three equal products without shared accounts, backend dependencies, or runtime coupling.

## Visual direction
An optimistic classroom-editorial style: warm paper background, ink-like headings, playful marker accents, friendly illustration, and asymmetric shapes. It feels energetic for children while remaining trustworthy for parents.

## Design tokens
- Ink #202047 for text and dark panels
- Purple #5844D6 for the ecosystem and English Voca
- Green #168A68 for SpeakFlow
- Coral #ED6A5A for Speaking Test
- Yellow #FFD166 for emphasis and keyboard focus
- Paper #FFF9ED for the background
- Trebuchet MS with Segoe UI and Arial fallbacks; no remote font dependency
- 14px control, 24px card, and 36px feature-panel radii
- 1180px content maximum

## Component contracts
Product cards always include an icon, name, benefit, three supporting points, clear CTA, and approved HTTPS destination. Speaking Test may display the Mới badge during launch but must not receive hero-level priority. All controls use visible focus. Decorative motion respects prefers-reduced-motion. The homepage collects no personal information and uses no analytics by default.

## Navigation and content
Primary navigation anchors to Products, Learning journey, and About. Product order is English Voca, SpeakFlow, Speaking Test. SEO and structured data describe all three products.

## Responsive behavior
Desktop uses a split hero and three cards. Tablet stacks the hero and uses two card columns, with Speaking Test spanning the row. Mobile uses a single column, compact navigation, and no horizontal overflow.

## Speaking Test acquisition pages — 2026-09-17
The approved marketing plan adds a dedicated all-age speaking-test introduction and two practice articles without changing the homepage's three-product hierarchy. These routes use the same normative palette and font stack, implemented in `speaking.css` CSS variables. Their signature is a coral-topped speaking prompt sheet; the CTA is the ink-colored button. They collect no personal data and install no analytics tracker. Each page uses semantic headings, visible focus, responsive single-column layouts and honest descriptions of assessment limits. The homepage links to the new introduction for discoverability.

## Post URL convention — 2026-09-19

All current and future editorial posts use `/post/<slug>`. Canonical URLs omit `.html`; do not introduce additional path segments such as `/post/bai-dang/`.
