# JUSTIN Retirement Partners

A modern, professional website for an Annuity & Retirement Planning Firm built with Next.js 14, TailwindCSS, and OpenAI-powered chatbot.

## Features

- **Modern Design**: Premium financial brand look with navy, gold, and emerald color palette
- **Mobile-First**: Fully responsive design optimized for all devices
- **AI Chatbot**: OpenAI-powered assistant for answering retirement and annuity questions
- **Retirement Calculator**: Interactive tool for estimating retirement income
- **Accessibility**: WCAG-friendly with high contrast and large typography
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Pages

- **Home**: Hero section, value proposition, testimonials, CTAs
- **About Us**: Company mission, team profiles, timeline
- **Annuity Solutions**: Fixed annuities, indexed annuities, income riders
- **Retirement Planning**: Income strategies, risk management, longevity planning
- **Why Choose Us**: Trust signals, commitments, testimonials
- **Resources**: FAQs, glossary, educational guides, retirement calculator
- **Contact**: Consultation request form, contact information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **AI**: OpenAI GPT-3.5 Turbo
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
cd annuity-firm
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Add your OpenAI API key to `.env`:

```
OPENAI_API_KEY=your_openai_api_key_here
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/          # AI chatbot API route
│   ├── about/             # About page
│   ├── annuity-solutions/ # Annuity products page
│   ├── contact/           # Contact form page
│   ├── resources/         # Educational resources page
│   ├── retirement-planning/ # Retirement strategies page
│   ├── why-choose-us/     # Trust & credibility page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── chat/
│   │   └── ChatBot.tsx    # AI chatbot component
│   └── layout/
│       ├── Header.tsx     # Navigation header
│       └── Footer.tsx     # Site footer
└── lib/
    └── utils.ts           # Utility functions
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

- `navy`: Primary brand color
- `gold`: Accent color for CTAs
- `emerald`: Success/positive indicators

### Content

Update the content in each page file to match your firm's information:

- Company name and contact details
- Team member profiles
- Testimonials
- Service descriptions

### AI Chatbot

The chatbot system prompt is in `src/app/api/chat/route.ts`. Customize it to match your firm's voice and compliance requirements.

## Deployment

### Netlify

```bash
npm run build
```

Deploy the `.next` folder to Netlify.

### Vercel

Connect your repository to Vercel for automatic deployments.

## Compliance Notes

- All educational content includes appropriate disclaimers
- The chatbot always reminds users that information is for educational purposes only
- Contact forms include privacy policy references
- Footer contains comprehensive disclosures

## License

Private - All rights reserved.
