# Editorial Creative Portfolio

A responsive portfolio site inspired by the supplied video reference: monochrome editorial interface, vivid vermilion accents, oversized outlined typography, layered hero collage, category filters and a dark project-detail view.

## Run locally
Requires Node.js 18 or newer.
```bash
npm install
npm run dev
```
Open the localhost URL shown in the terminal.

## Build for deployment
```bash
npm run build
npm run preview
```

## Included interactions
- Responsive navigation and mobile menu
- Light/dark theme toggle
- Project category filters and live search
- Save/favourite buttons on project cards
- Project detail overlay with image, description and tags
- Contact modal with validation and mailto submission
- Reset filters control

## Customize before publishing
Replace the demo name, images, descriptions, categories, social/contact links and email address in `src/App.tsx`. Remote images require internet access; verify image licensing before commercial use. The contact form opens the visitor's email client; use a form backend/API if you need submissions stored online.
