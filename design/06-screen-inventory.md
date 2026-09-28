# Bookish — Screen Inventory & Design Handoff

## How to review

1. Open [`prototype/README.md`](../prototype/README.md) and launch `prototype/index.html` in a browser.
2. Click through the three core jobs: **Sell**, **Browse/Buy**, **Review**.
3. Read docs `01`–`05` for rationale; use this file + [`07-approval.md`](07-approval.md) as the checklist.

---

## Screen inventory

| ID | Screen | Prototype route | Status |
|----|--------|-----------------|--------|
| A1 | Welcome | `#welcome` | Designed |
| A2 | Sign up | `#signup` | Designed |
| A3 | Sign in | `#signin` | Designed |
| A4 | Profile setup | `#setup` | Designed |
| H1 | Home feed | `#home` | Designed |
| E1 | Explore | `#explore` | Designed |
| E2 | Filters (inline chips) | part of `#explore` | Designed |
| S1 | Sale detail | `#sale` | Designed |
| S2 | Sale comments | `#sale-comments` | Designed |
| S3 | Buy / Contact seller | `#contact` | Designed |
| L1–L4 | Sell wizard steps | `#sell-1` … `#sell-4` | Designed |
| L5 | Sell preview / publish | `#sell-preview` | Designed |
| R1 | Create review | `#review-create` | Designed |
| R2 | Review detail | `#review` | Designed |
| P1 | Profile | `#profile` | Designed |
| P2 | Settings stub | `#settings` | Designed |

All routes live in a single SPA shell: [`prototype/index.html`](../prototype/index.html).

---

## Component list (for future build)

- App shell (status bar mock, top bar, bottom nav, FAB)
- Content type chip (For sale / Review)
- Feed sale card / feed review card
- Explore grid tile
- Search field + filter chips
- Primary / secondary / ghost buttons
- Form fields, steppers, star rating input
- Photo picker placeholder
- Comment row + composer
- Toast
- Empty state (optional stub)

---

## Approval checklist

- [ ] Personas & MVP scope feel right (`01`, `02`)
- [ ] Bottom nav: Home · Explore · Sell · Profile (+ review FAB)
- [ ] Sell flow covers photos, info, condition, price, location, delivery, payment
- [ ] Buy flow: detail → comment → contact / arrange (no fake checkout)
- [ ] Review flow: create → like → comment
- [ ] Visual direction (ink/forest/paper + Fraunces / Source Sans 3) approved
- [ ] Ready to plan **development phase**

---

## Open questions for development (not blocking design approval)

1. Region focus (e.g. South Africa first) for location & payment copy?
2. In-app chat vs WhatsApp/deep-link for “Message seller”?
3. Auth provider preference (email, Google, Apple)?
4. Moderation needs for comments and listings?

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product / founder | | | |
| Design | Bookish design phase (this repo) | | |

After sign-off, start a **separate development plan** (stack, data model, auth, implementation). Do not treat this HTML prototype as production code.
