# DDS 2026 Workshop Website

## Overview
Static single-page workshop website for "Data-Driven Storytelling: Bridging Knowledge Graphs, GenAI, and Narrative (DDS 2026)" — a workshop co-located with ISWC 2026 in Bari, Italy.

## Architecture
- **Frontend**: React + TypeScript with Vite, Tailwind CSS v4, Framer Motion
- **Backend**: Express server (serves static frontend only — no API routes needed)
- **Routing**: Single-page with smooth scroll navigation (wouter for base routing, scroll-to-section for nav)

## Key Files
- `client/src/pages/Home.tsx` — Main single-page layout with hero, submission guidelines, program schedule
- `client/src/components/workshop/` — Section components (About, Topics, Dates, Chairs, Committee, Venue, LogoStrip, HeroParticles)
- `client/src/components/layout/Nav.tsx` — Fixed glassmorphism navigation with dark mode toggle, font sizing, active section tracking, mobile menu
- `client/src/components/layout/Footer.tsx` — Full footer with quick links, conference info
- `client/src/components/layout/BackToTop.tsx` — Floating back-to-top button
- `client/src/hooks/useTheme.ts` — Dark mode hook with localStorage persistence
- `client/src/hooks/useFontSize.ts` — Font size scaling hook (100%/112%/125%) with localStorage
- `client/src/lib/calendar.ts` — ICS calendar file generation and download utility
- `client/src/index.css` — Design system (light/dark themes, fonts, mesh gradients, glass effects, print styles, reduced motion)
- `client/index.html` — Meta tags, Google Fonts (Space Grotesk + Inter)

## Design System
- **Fonts**: Space Grotesk (headings), Inter (body)
- **Style**: Clean modern with mesh gradient backgrounds, glassmorphism nav, rounded cards, subtle shadows
- **Themes**: Light and dark mode with CSS variables, toggled via nav button, persisted in localStorage
- **Animations**: Framer Motion scroll-triggered animations, floating hero particles, staggered card reveals
- **Accessibility**: Skip-to-content link, ARIA landmarks, focus traps, reduced motion support, screen reader support for countdowns

## Features
- Dark mode toggle (persisted)
- Font size controls (A-/A+ with 3 sizes)
- Add to Calendar (.ics download) for important dates
- Topic search/filter with keyword highlighting
- Scroll progress bar at top
- Active section highlighting in nav with visited section dots
- Mobile hamburger menu with focus trap and keyboard navigation
- Animated floating shapes in hero background (respects prefers-reduced-motion)
- Back-to-top button
- Print-friendly stylesheet
- Institutional logo marquee strip (EURECOM, U. Salerno, TUM, KCL, Oxford, kFLOW, ANR, Siemens, EPSRC)
- Real-time countdown timers for all dated events
- OpenStreetMap venue embed
- Organizer cards with clickable email/homepage links

## Content Sections
1. Hero (title, date, venue)
2. Logo Strip (institutional partners marquee)
3. Workshop Description (motivation, focus & audience)
4. Topics of Interest (searchable/filterable)
5. Submission Guidelines (paper types, formatting, review process)
6. Important Dates (countdown timers + add-to-calendar)
7. Workshop Program (half-day timeline schedule)
8. Venue (OpenStreetMap + hotel details)
9. Workshop Organizers (5 chairs with photos, bios, contact links)
10. Program Committee (19 members with staggered reveal)
11. Footer (quick links, conference info)

## Assets
- Chair photos: mix of local assets (`attached_assets/`) and external URLs
- Institution logos: mix of local assets and Wikipedia SVGs
- Uses `@assets` Vite alias for local images
