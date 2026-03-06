# DDS 2026 Workshop Website

## Overview
Static single-page workshop website for "Data-Driven Storytelling: Bridging Knowledge Graphs, GenAI, and Narrative (DDS 2026)" — a workshop co-located with ISWC 2026 in Bari, Italy.

## Architecture
- **Frontend**: React + TypeScript with Vite, Tailwind CSS v4, Framer Motion
- **Backend**: Express server (serves static frontend only — no API routes needed)
- **Routing**: Single-page with smooth scroll navigation (wouter for base routing, scroll-to-section for nav)

## Key Files
- `client/src/pages/Home.tsx` — Main single-page layout with hero, submission guidelines, program schedule
- `client/src/components/workshop/` — Section components (About, Topics, Dates, Chairs, Committee)
- `client/src/components/layout/Nav.tsx` — Fixed glassmorphism navigation bar with scroll-to-section
- `client/src/index.css` — Design system (colors, fonts, mesh gradients, glass effects)
- `client/index.html` — Meta tags, Google Fonts (Space Grotesk + Inter)

## Design System
- **Fonts**: Space Grotesk (headings), Inter (body)
- **Style**: Clean modern with mesh gradient backgrounds, glassmorphism nav, rounded cards, subtle shadows
- **Animations**: Framer Motion scroll-triggered animations

## Content Sections
1. Hero (title, date, venue)
2. Workshop Description (focus, motivation, audience)
3. Topics of Interest
4. Submission Guidelines (paper types, formatting, review process)
5. Important Dates (submission, notifications, camera-ready, workshop day)
6. Workshop Program (half-day schedule)
7. Workshop Organizers (5 chairs with photos and bios)
8. Program Committee (19 members)

## Assets
- Chair photos: mix of local assets (`attached_assets/`) and external URLs
- Uses `@assets` Vite alias for local images
