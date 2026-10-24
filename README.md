# Roy Chess Club — Multi-page React Website

A component-based React + Vite project using React Router.

## Pages / routes
- `/` — Home
- `/about` — About Us
- `/classes` — Chess Classes
- `/tournaments` — Tournaments & Events
- `/leadership` — Leadership Team
- `/contact` — Contact and enquiry form

## Component structure
- `src/components/` — Header, Footer, SectionHeading, CTA
- `src/pages/` — one component for each page
- `src/data/siteData.js` — club details, team profiles, and class content
- `src/styles/` — global styles and page/layout styles
- `src/assets/` — supplied club logo and three leadership photos

## Run locally
1. Install Node.js LTS.
2. Open the extracted folder in VS Code.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## Production build
Run `npm run build`; Vite writes deployable files to `dist/`.

## Notes
- The enquiry form prepares a WhatsApp message; it does not store submissions.
- Confirm that `9131556616` is registered with WhatsApp before publishing.
- Class times, fees, physical venue, and tournament dates are intentionally not invented. Update these when confirmed.
- For deployment with client-side routes, configure the host to rewrite unknown paths to `index.html`.
