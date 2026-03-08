# Website Update Task — Growing Pains Media

## Context
This is a static HTML/CSS/JS site for a podcast production company (growingpainsmedia.com, deployed on Vercel). We need to add a pricing section and make a few copy tweaks.

## Changes Required

### 1. Add Pricing Section (between "How it works" and "About")
Add a new section with three pricing tiers. Use "starting at" language — no exact prices.

**Tier names and pricing:**
- **Launch** — "Starting at $150/episode" — Production + delivery. Clean audio, edited video, show notes. "We clean it up and ship it."
  - Audio cleanup & editing
  - Video editing + final render
  - Show notes & episode description
  - MP3 + MP4 delivery

- **Grow** — "Starting at $300/episode" — Production + growth. Everything in Launch, plus clips and SEO. "We make people find it."
  - Everything in Launch
  - 3-5 short-form clips (Shorts, Reels, TikTok)
  - Thumbnails
  - SEO-optimized episode page
  - Keyword strategy

- **Scale** — "Starting at $500/episode" — Full service. The whole machine. "We run everything so you can just record."
  - Everything in Grow
  - Weekly newsletter
  - Social media distribution
  - Monthly growth reports
  - Captioned video versions
  - Dedicated growth strategy

Add a note below the tiers: "Every podcast is different. These are starting points — we'll build a plan that fits your show and your budget. Monthly retainers available for ongoing clients."

Add a small CTA button: "Start with a Free Audit" linking to #contact

### 2. Add "Local to Humboldt?" Section
After the pricing tiers (but within or just after the pricing section), add a small callout/card:

**"Local to Humboldt County?"**
"We have a fully equipped recording studio in Eureka — professional cameras, mics, lighting, the works. Come record with us and get studio-quality production without building your own setup. In-studio rates start at $50/hour."

Link: "Book a Session →" pointing to #contact

### 3. Remove Copy
- Remove the line: "Or just reply to any email from us. We're real people." (it's in the CTA section, class "cta-note")

### 4. Add Nav Link
- Add "Pricing" link to the nav between "Services" and "About", pointing to #pricing

## Design Requirements
- Match the existing dark theme, typography (Inter + Playfair Display), and card styling
- Pricing cards should be visually distinct — maybe a subtle highlight/border on the middle "Grow" tier as the recommended option
- Keep the responsive design working on mobile
- The "Local to Humboldt?" callout should feel secondary/smaller than the main pricing cards — maybe a banner or subtle card below them
- Maintain the existing clean, minimal aesthetic

## Do NOT
- Change any existing section content except the one line removal noted above
- Add any external dependencies or libraries
- Change the color scheme or fonts
- Break the mobile responsive layout

Commit your changes when done with message: "Add pricing section, local studio callout, remove real-people line"
