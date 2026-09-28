# Bookish — Product Definition

## Problem statements

1. **Sellers** have nowhere book-specific to list pre-loved titles with condition, price, location, delivery, and payment in one trusted place.
2. **Buyers** struggle to find physical books for sale with enough clarity to decide and arrange a purchase.
3. **Readers** want to share star ratings and thoughts — and react to others — without the noise of general social media.

## Vision (one line)

A book-centered mobile home where people sell and buy pre-loved books, and gather around reviews.

## Success metrics (design / MVP intent)

| Metric | Why it matters |
|--------|----------------|
| Time to publish a sale listing | Friction for sellers |
| Listing completeness (photo + condition + logistics) | Trust for buyers |
| Sale detail → contact / buy intent rate | Commerce viability |
| Reviews published per active user | Community pulse |
| Likes + comments per review | Engagement quality |

## MVP scope

### In scope (design & later build)

- Onboarding: welcome, sign up / sign in, light profile setup (name, city/area)
- Home: mixed feed of **For sale** and **Review** posts (clear labels)
- Explore: search + filters (condition, price, location), sale listings
- Sale detail: photos, title, note, condition, price, location, delivery, payment notes, seller; comments; buy / contact seller
- Sell flow: multi-step create listing → preview → publish
- Community reviews: create (photos, stars, text); detail with likes & comments
- Profile: my listings, my reviews, saved/liked stub, settings stub

### Explicitly out of scope (this phase / early MVP)

- Real payments, escrow, or in-app checkout
- Courier APIs / label generation
- Full messaging inbox (MVP: contact / arrange intent screen)
- Recommendations ML, clubs, reading challenges
- Native iOS/Android apps (mobile-web prototype first; native later)

### Purchase model (MVP honesty)

Buyers tap **Buy / Contact seller** and see how to arrange payment and handoff based on the seller’s stated preferences (meetup, courier, EFT, etc.). No card processing in v1.

## Feature map

```
Bookish
├── Account
│   ├── Welcome
│   ├── Sign up / Sign in
│   └── Profile setup
├── Home (mixed feed)
├── Explore (sales focus)
│   ├── Search & filters
│   ├── Sale detail
│   ├── Sale comments
│   └── Contact / arrange purchase
├── Sell (create listing)
├── Reviews
│   ├── Create review
│   └── Review detail (like + comment)
└── Profile
    ├── My listings
    ├── My reviews
    ├── Saved
    └── Settings
```

## Design principles

1. **Book first** — Covers and photography lead; UI never outshouts the book.
2. **Logistics upfront** — Condition, location, delivery, and payment are first-class on sales.
3. **Two content types, one language** — Sales and reviews share a visual family but stay distinguishable.
4. **Mobile thumb reach** — Primary actions sit in bottom nav and sticky CTAs.
5. **Warm, literary, calm** — Ink / forest greens and paper neutrals; no generic purple SaaS look.
