# Bookish — Information Architecture & Flows

## Sitemap

```
Welcome
├── Sign in
└── Sign up → Profile setup → Home

Home (tab)
├── Sale card → Sale detail
│                 ├── Comments
│                 └── Buy / Contact seller
└── Review card → Review detail
                    ├── Like
                    └── Comments
                  └── Create review (FAB)

Explore (tab)
├── Search
├── Filters (condition, price, location)
└── Sale list → Sale detail → …

Sell (tab)
└── Step wizard → Preview → Published → Sale detail

Profile (tab)
├── My listings → Sale detail
├── My reviews → Review detail
├── Saved
└── Settings
```

## Bottom navigation

| Tab | Role |
|-----|------|
| **Home** | Mixed community + sales feed; FAB to create review |
| **Explore** | Browse / search books for sale |
| **Sell** | Start listing a pre-loved book |
| **Profile** | Identity, own content, settings |

**Create review** is not a fifth tab — it lives as a floating action on Home (and entry from Explore header) so Sell stays dedicated to commerce.

## Primary user flows

### A. Sell a book

1. Tap **Sell**
2. Add photos
3. Enter title + optional note / blurb
4. Set condition, price, location
5. Set delivery method(s) + payment preferences
6. Preview listing
7. Publish → land on sale detail (as seller)

### B. Browse & buy

1. Open **Explore** (or tap a sale on Home)
2. Optionally search / filter
3. Open sale detail — read condition, price, logistics
4. Optionally comment
5. Tap **Buy / Contact seller** → arrange screen with seller’s payment & delivery notes

### C. Post & engage a review

1. Tap FAB **Review** (or Create review)
2. Add photos, star rating, written thoughts
3. Publish → review detail
4. Others like and comment

## Content type labels

| Label | Meaning |
|-------|---------|
| **For sale** | Commerce post — price + logistics required |
| **Review** | Community post — stars + thoughts; no price |

## Navigation notes for prototype

- Phone frame ~390×844
- Tab bar persists on Home, Explore, Sell entry, Profile
- Nested screens (detail, wizard steps, contact) use a back chevron in the top bar
- Sell wizard uses step indicator + Continue / Back
