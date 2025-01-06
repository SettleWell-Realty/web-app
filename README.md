<img src="public/SettleWell-Realty-Logo.svg" alt="SettleWell Realty Logo" width="200"/>

# SettleWell Realty Website

A modern, performant marketing website for SettleWell Realty, a Denver-based property management and real estate brokerage.

## Tech Stack

- ⚡️ [Next.js 15](https://nextjs.org) - The React Framework for the Web
- 🎨 [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- ⚛️ [React 19](https://react.dev) - JavaScript library for user interfaces
- 🎯 [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- 🎪 [shadcn/ui](https://ui.shadcn.com/) - Re-usable UI components
- 📧 [Resend](https://resend.com) - Email delivery for form submissions
- 🔍 [Biome](https://biomejs.dev/) - Fast linter and formatter

## Key Features

- 📱 Responsive design optimized for all devices
- 🚀 Fast page loads with Next.js App Router
- 📬 Contact form integration with Resend
- 🎯 Property management service highlights
- 📍 Denver area real estate focus

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development Commands

```bash
bun dev        # Start development server
bun build      # Create production build
bun start      # Start production server
bun clean      # Clean build artifacts
bun lint       # Run Biome linter
bun format     # Format code with Biome
bun check      # Run all Biome checks
```

## Project Structure

```
settlewell-realty/
├── app/                # Next.js App Router pages and global styles (globals.css)
├── components/         # React components
├── lib/               # Utility functions
└── public/            # Static assets
```

**Styling:**
- Styles are managed through Tailwind CSS
- Global styles and theme configuration are defined in:
  - `tailwind.config.ts` - Theme customization, colors, and design tokens
  - `app/globals.css` - Base styles and CSS variables

## Deployment

This site is deployed on [Vercel](https://vercel.com) and can be accessed at [settlewellrealty.com](https://settlewellrealty.com).

## Contact

For inquiries about property management services:
- 📧 [contact@settlewellrealty.com](mailto:contact@settlewellrealty.com)
- 🌐 [settlewellrealty.com](https://settlewellrealty.com)

## License

Private - All Rights Reserved
