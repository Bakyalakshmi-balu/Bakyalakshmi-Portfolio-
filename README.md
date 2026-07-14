# Bakyalakshmi B — Portfolio (React)

A React rewrite of the portfolio, built with Vite, Framer Motion, and react-icons.
Design direction: dark "engineering blueprint" theme (CAD/CAM-inspired grid backgrounds,
viewport corner-frames on cards) with a light mode toggle, matching the
React/.NET/CAD-CAM work highlighted in the résumé.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to Netlify (or Vercel).

### Netlify deploy settings
- Build command: `npm run build`
- Publish directory: `dist`

## Things to plug in before going live

1. **Resume PDF** — drop your résumé at `public/resume.pdf`. The "Download Resume"
   buttons in the Navbar and Hero already link to `/resume.pdf`.
2. **Contact form** — the form currently falls back to opening the visitor's email
   client (`mailto:`) since there's no backend. For a real inbox-delivered form
   without writing a backend, sign up at https://formspree.io, create a form, and
   paste your endpoint into `FORM_ENDPOINT` in `src/components/Contact.jsx`.
3. **Project links** — in `src/data/projects.js`, the ESAB "Columbus Suite" and
   related internal projects have placeholder `case: "#"` links since that code is
   confidential. Add real GitHub/live links for the ones you can share (Employee
   Management System, Image Resize App) — the field names are `code` and `live`.
4. **Achievement/certification event names** — `src/data/skills.js` has generic
   wording for the quiz and paper-presentation wins ("Inter-College Technical
   Symposium"). Swap in the real event/college names if different.
5. **Project screenshots** — currently each project card uses an icon instead of a
   screenshot. Drop images into `src/assets/` and swap the icon for an `<img>` in
   `src/components/Projects.jsx` if you'd like real screenshots.

## Structure

```
src/
├── assets/            profile photo etc.
├── components/        one file per section
├── data/               experience.js, projects.js, skills.js — edit these to update content
├── styles/             global.css (tokens/resets), sections.css (component styles)
├── App.jsx
└── main.jsx
```

## Notes

- Dark/light theme persists via localStorage.
- Reduced-motion is respected (see `@media (prefers-reduced-motion)` in global.css).
- Project filter chips are generated automatically from the `tech` arrays in
  `data/projects.js` — no need to maintain a separate filter list.
