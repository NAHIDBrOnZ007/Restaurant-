# Tast of Asia - Next.js Version

This is the Next.js + JavaScript + Tailwind CSS version of the Tast of Asia restaurant website.

## Features

- ✅ Next.js 15 with Pages Router
- ✅ JavaScript (no TypeScript)
- ✅ Tailwind CSS with exact same design
- ✅ All original features preserved:
  - Home page with hero slider
  - About page
  - Gallery with filtering
  - Booking/Reservation system
  - Contact form
  - SEO optimized
  - Responsive design

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── pages/
│   ├── _app.js          # Main app wrapper
│   ├── _document.js     # HTML document with SEO
│   ├── index.js         # Home page
│   ├── about.js         # About page
│   ├── gallery.js       # Gallery page
│   ├── booking.js        # Booking page
│   └── contact.js        # Contact page
├── components/
│   ├── Navigation.js    # Navigation component
│   ├── Footer.js        # Footer component
│   ├── SharedComponents.js
│   └── HomeComponents.js
├── lib/
│   ├── constants.js     # All constants and data
│   └── types.js         # Page constants
├── styles/
│   └── globals.css      # Global styles + Tailwind
└── public/              # Static assets
```

## Build for Production

```bash
npm run build
npm start
```

## Key Differences from Original

- **Framework**: Vite → Next.js
- **Language**: TypeScript → JavaScript
- **Routing**: State-based → File-based routing
- **API**: Client-side → Next.js API routes
- **Styling**: Same Tailwind CSS (now properly configured)

## Design

All design elements remain exactly the same:
- Same colors (gold palette, stone colors)
- Same fonts (Cormorant Garamond, Montserrat)
- Same animations
- Same icons (Lucide React)
- Same layout and spacing

## License

Same as original project.

