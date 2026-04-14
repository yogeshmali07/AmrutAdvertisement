# Amrut Advertising — Premium Website

A classy, modern, premium 3D advertising website built with React, Vite, Tailwind CSS, and Three.js.

## Tech Stack

- **React 19** — Component-based UI
- **Vite 8** — Fast build tooling
- **Tailwind CSS 3.4** — Utility-first styling
- **Three.js + React Three Fiber** — 3D animations
- **Framer Motion** — Page transitions & scroll animations
- **React Router 7** — Client-side routing with lazy loading

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm 9+

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, Layout wrapper
│   ├── three/           # Three.js 3D components (particles, spheres, rings)
│   └── ui/              # Reusable UI components (Button, GlassCard, Modal, etc.)
├── config/              # Site configuration, services, portfolio data
├── hooks/               # Custom React hooks
├── pages/               # Page components (Home, About, Services, Portfolio, Contact)
└── assets/              # Static assets
```

## Pages

1. **Home** — Hero with 3D animation, stats, services preview, testimonials, CTA
2. **About** — Company story, mission/vision, timeline, values
3. **Services** — All services with icons, process workflow
4. **Portfolio** — Filterable project grid with modal preview
5. **Contact** — Contact form (UI only), info cards, map placeholder

## Customization

### Replace Branding

- **Logo**: Update the `A` monogram in `Navbar.jsx` and `Footer.jsx`
- **Favicon**: Replace `public/favicon.svg`
- **Colors**: Edit `tailwind.config.js` — `primary` and `gold` color palettes
- **Fonts**: Update `index.html` Google Fonts link and `tailwind.config.js` fontFamily

### Update Content

All business data is centralized in `src/config/siteConfig.js`:
- Company name, tagline, contact info
- Services list
- Portfolio items
- Stats and testimonials

### Add Images

Replace placeholder areas (marked with "Placeholder" text) with actual images. Key locations:
- Home hero section
- About page story section
- Portfolio project cards

## Code Quality

- ESLint configured with React rules
- Prettier configured for consistent formatting
- Run lint: `npx eslint src/`
- Run format: `npx prettier --write src/`
