# ADWOX Website Master Specification

Version: 1.0

## Objective

Build a production-ready marketing website for **ADWOX Advertising
Network** using **Next.js (App Router), TypeScript, Tailwind CSS, Framer
Motion**, optimized for **Vercel**.

This is a premium B2B website, not a brochure.

## Design Philosophy

-   Premium
-   Corporate
-   Modern
-   Luxury
-   Fast
-   Minimal

Inspirations: - Apple - Stripe - Vercel - Linear

Avoid: - Clutter - Heavy glowing effects - Dense brochure layouts

## Brand

### Logo

Use the metallic gold/silver ADWOX logo extracted from the supplied
branding images.

### Fonts

-   Headings: Space Grotesk
-   Body: Inter
-   Accent script: only for "We Move Brands"

### Colors

``` txt
Primary Gold: #D4AF37
Accent Gold: #F4C542
Black: #090909
Dark: #111111
Light: #FAFAFA
White: #FFFFFF
Secondary Text: #B8B8B8
```

## Tech Stack

-   Next.js 15
-   TypeScript
-   Tailwind CSS
-   Framer Motion
-   Lucide React
-   React Hook Form
-   Vercel deployment

## Folder Structure

``` text
src/
  app/
  components/
  content/
  lib/
  types/
public/
```

Keep all editable text inside `/content`.

## Navigation

Logo

Services

Industries

Why ADWOX

Contact

Get Quote

Sticky navbar.

## Hero

Dark cinematic hero.

Rotate between: - Apartment Entrance LED - School Bus Advertising - Auto
Advertising

Headline:

India's Premium Outdoor Advertising Network

Subheading:

Transforming high-traffic spaces into powerful advertising opportunities
using LED displays, transit branding and apartment entrance media.

Buttons:

Explore Services

Get Quote

## Services

Three cards:

Apartment Entrance LED

School Bus Branding

Auto LED Advertising

Each card: - image - summary - CTA

## Interactive Campaign Simulator

Most important feature.

User chooses:

-   Apartment
-   School Bus
-   Auto

User types any campaign text.

Show animated LED ticker on realistic mockup.

Examples:

Happy Diwali

Admissions Open

50% OFF

Grand Opening

## Why ADWOX

Animated statistics

Premium cards

## Industries

Retail

Jewellery

Education

Hospitals

Banks

Government

Real Estate

Automotive

## Process

Consultation

Planning

Installation

Content Updates

Monitoring

## Contact

Split layout.

Quote form.

On submit:

Generate WhatsApp message.

Keep WhatsApp number inside configuration file.

## Footer

Logo

Quick Links

Services

Contact

Socials

## SEO

Metadata

OpenGraph

Robots

Sitemap

Schema.org Organization

## Performance

Target Lighthouse \>95.

Lazy-load images.

Optimize fonts.

## Accessibility

Keyboard navigation

Proper contrast

ARIA labels

## Animations

Framer Motion only.

Fade

Slide

Parallax

Number counters

LED ticker

No excessive animations.

## Mobile

Design mobile-first.

## Assets

The user has supplied branding images including: - Primary metallic
logo - Founder branding - Corporate proposal - Stationery - Service
posters

Extract: - official logo - service imagery - color references

Do not invent a different brand identity.

Use placeholders only where assets cannot be cleanly extracted.

## Deliverables

-   Complete source code
-   README
-   .env.example
-   Vercel-ready project
-   No TODO placeholders
-   Production quality
-   Clean reusable components
-   Comments only where useful
