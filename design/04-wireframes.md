# Bookish — Low-Fidelity Wireframes (Annotated)

Mobile canvas: **390 × 844**. Structure only — visual polish lives in the clickable prototype.

Legend: `[ ]` tap target · `---` divider · `::: ` sticky region

---

## 1. Welcome / Splash

```
┌─────────────────────────┐
│                         │
│      [ Bookish ]        │  ← brand hero (serif)
│   books find new homes  │  ← one short line
│                         │
│                         │
│   [ Get started ]       │
│   [ Sign in      ]      │
└─────────────────────────┘
```

**Notes:** Brand dominates first viewport. No feature grid. Two CTAs only.

---

## 2. Sign up / Sign in

```
┌─────────────────────────┐
│ ‹ Back                  │
│  Create account         │
│  [ Email            ]   │
│  [ Password         ]   │
│  [ Display name     ]   │
│  [ Create account   ]   │
│  Have an account? Sign in│
└─────────────────────────┘
```

**Notes:** Design-only auth. Sign in mirrors fields (email + password).

---

## 3. Profile setup

```
┌─────────────────────────┐
│  Almost there           │
│  [ Avatar placeholder ] │
│  [ Display name     ]   │
│  [ City / area      ]   │
│  [ Continue         ]   │
└─────────────────────────┘
```

---

## 4. Home (mixed feed)

```
┌─────────────────────────┐
│ Bookish          [🔔]   │
│─── feed ────────────────│
│ [For sale] cover · title│
│  R89 · Good · Joburg    │
│───                     ──│
│ [Review] ★★★★☆          │
│  cover · “Loved the…”   │
│  ♥ 24   💬 6            │
│───                     ──│
│                    (✎)  │  ← FAB create review
│─────────────────────────│
│ Home Explore Sell Me    │  ← bottom nav
└─────────────────────────┘
```

**Notes:** Content-type chip on every card. Sale cards show price + condition + area. Review cards show stars + like/comment counts.

---

## 5. Explore

```
┌─────────────────────────┐
│ Explore                 │
│ [ Search books…     ]   │
│ Cond▾ Price▾ Near▾      │  ← filter chips
│ ┌────┐ ┌────┐           │
│ │cov │ │cov │  grid     │
│ │R45 │ │R120│           │
│ └────┘ └────┘           │
│ Home Explore Sell Me    │
└─────────────────────────┘
```

---

## 6. Sale detail

```
┌─────────────────────────┐
│ ‹  For sale             │
│ ╔═══════════════════╗   │
│ ║  full-bleed photo ║   │  ← hero plane
│ ╚═══════════════════╝   │
│ Title of Book           │
│ R89 · Good              │
│ Note / seller blurb…    │
│ Location · Delivery     │
│ Payment notes           │
│ Seller · Thandi         │
│ Comments (3)            │
│ …                       │
│::: [ Comment ] [ Buy ] :::│
└─────────────────────────┘
```

**Notes:** Sticky bottom CTA pair. Logistics block is scannable, not buried.

---

## 7. Sale comments & Contact / Buy

**Comments:** list + composer field.  
**Contact:** restates delivery + payment; primary “Message seller” (prototype stub); secondary “Copy details”.

---

## 8. Sell wizard (steps)

```
Step 1 Photos → 2 Book info → 3 Condition/price/location
      → 4 Delivery & payment → 5 Preview → Publish
```

Each step:
```
┌─────────────────────────┐
│ ‹  Sell · Step n/5      │
│  ████░░░░  progress     │
│  [ step fields… ]       │
│::: [ Continue ]       :::│
└─────────────────────────┘
```

**Condition options:** Like new · Good · Acceptable · Well loved  
**Delivery:** Meetup · Courier · Either  
**Payment:** EFT · Cash on meetup · Other (note)

---

## 9. Create review

```
┌─────────────────────────┐
│ ‹  Write a review       │
│  [ Add photos ]         │
│  ★ ★ ★ ★ ★              │
│  [ Book title       ]   │
│  [ Your thoughts…   ]   │
│::: [ Publish review ] :::│
└─────────────────────────┘
```

---

## 10. Review detail

```
┌─────────────────────────┐
│ ‹  Review               │
│  full-bleed / cover     │
│  Title · ★★★★☆          │
│  Body text…             │
│  ♥ Like · 💬 Comment    │
│  ── comments ──         │
│  …                      │
└─────────────────────────┘
```

---

## 11. Profile

```
┌─────────────────────────┐
│  Avatar · Name · City   │
│  [ Listings ][ Reviews ]│
│  [ Saved ]              │
│  list of user’s posts…  │
│  Settings →             │
│ Home Explore Sell Me    │
└─────────────────────────┘
```

---

## Interaction notes

- Filters open as bottom sheets in production; prototype uses inline chip toggles.
- Like on review toggles filled/outline heart with short scale animation.
- Publish success: brief toast, then navigate to the new detail screen.
