# Arqestrate — 4-Page B2B Website

A clean, professional dark-themed website for Arqestrate's metal scrap brokerage and trade support business. Built as static React pages — no backend, no database, deployable for free.

## Design System

- **Theme:** Dark mode by default
- **Colors:**
  - Background: deep charcoal/navy (`oklch ~0.18 0.02 250`)
  - Surface/cards: slightly lighter navy
  - Text: white / soft gray
  - Primary accent: steel blue
  - Highlight accent: muted gold (used sparingly on CTAs, key numbers)
  - Borders: subtle white/10%
- **Typography:** Clean sans-serif (Inter), generous spacing, clear hierarchy
- **Visuals:** Simple Lucide icons (truck, ship, package, handshake, file-check, etc.) — no heavy imagery or animation
- **Components:** Reuse shadcn `button`, `card`, `input`, `textarea`, `select`, `label` for consistency

## Page Structure

Site shell (header + footer) lives in `__root.tsx`, applied to every page.

**Header (sticky, mobile responsive)**
- Left: "Arqestrate" wordmark
- Center/right: Home · Services · Materials · Contact
- Right CTA: gold-accented "Send Enquiry" button → `/contact`
- Mobile: hamburger → sheet/drawer with same links

**Footer (every page)**
- Brand line + tagline
- Email, WhatsApp placeholder, locations (Dubai, UAE / Lahore, Pakistan)
- Nav links
- Disclaimer paragraph
- Copyright

### Page 1 — Home (`/`)
- Hero: headline, subheadline, two buttons ("Send Enquiry", "View Materials"), subtle gradient background
- 3 trust cards row (icons + titles)
- "About Arqestrate" two-column section
- "How It Works" — 4 numbered steps in a horizontal/grid layout with connecting line
- Closing CTA band → Contact

### Page 2 — Services (`/services`)
- Title + intro
- 5 service cards in responsive grid (icon, title, description)
- Highlighted disclaimer note card at the bottom

### Page 3 — Materials (`/materials`)
- Title + intro
- Responsive grid of 10 material cards (icon, name, "Subject to quantity, origin, specification, and inspection.")
- Caution section in an accent-bordered callout

### Page 4 — Contact (`/contact`)
- Title + intro
- Two-column layout (stacks on mobile):
  - Left: enquiry form with all listed fields, "I am a" as Select, Incoterm as Select, others as Input/Textarea. Submit builds a `mailto:info@arqestrate.com` link with subject + body composed from fields.
  - Right: contact card (email, WhatsApp, locations) + green "Contact on WhatsApp" button linking to `https://wa.me/971XXXXXXXXX`
- A single `siteConfig.ts` file holds email, WhatsApp number, locations so they're easy to update later

## SEO

- Root `head()`: site-wide defaults
- Each route defines its own `head()` with unique title, description, og:title, og:description per the brief
- Site title pattern: `Page — Arqestrate | Metal Scrap Brokerage & Trade Support`

## Technical

- TanStack Start (existing template), TypeScript, Tailwind v4
- File-based routes: `index.tsx`, `services.tsx`, `materials.tsx`, `contact.tsx`
- Shared components: `Header.tsx`, `Footer.tsx`, `SiteLayout.tsx` wrapping `<Outlet />` in `__root.tsx`
- Config file: `src/lib/site-config.ts` with email, WhatsApp, locations
- Update `src/styles.css` dark palette (charcoal/navy + steel blue + gold accent)
- No new dependencies needed
- Fully responsive, no auth, no DB, no paid integrations
