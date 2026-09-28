# Bookish — Visual Direction

## Mood

Warm, literary, calm. A neighborhood bookshop on your phone — not a marketplace dashboard, not a purple SaaS landing page.

**Keywords:** ink, forest shelf, soft paper, quiet confidence, book-forward photography.

**Avoid:** purple-to-indigo gradients, cream+#terracotta cliché, broadsheet hairline newspaper layouts, dark-mode-first, glow effects, emoji clutter, pill-chip overload.

---

## Brand

- **Name:** Bookish (serif lockup)
- **Voice:** Friendly, clear, unfussy — like a well-written margin note
- **Hero rule:** Brand or book cover leads the first viewport; UI chrome stays quiet

---

## Color tokens

| Token | Hex | Use |
|-------|-----|-----|
| `--ink` | `#1A2F23` | Text, nav active, primary buttons |
| `--ink-soft` | `#2D4A3A` | Secondary text emphasis |
| `--forest` | `#3D5C4A` | Accents, chips (For sale) |
| `--moss` | `#5C7A68` | Icons, progress |
| `--paper` | `#F3EFE6` | App background |
| `--paper-raised` | `#FFFbf5` | Cards / sheets |
| `--rule` | `#D4CBB8` | Borders, dividers |
| `--muted` | `#6B6558` | Meta text |
| `--review` | `#8B5E3C` | Review chip / star accent (restrained wood-brown) |
| `--heart` | `#A63D40` | Like active |
| `--success` | `#2F6B4F` | Publish success |

Background is a soft paper wash with a subtle vertical gradient (`paper` → slightly cooler mist), not a flat fill.

---

## Typography

| Role | Family | Notes |
|------|--------|-------|
| Brand & titles | **Fraunces** (Google Fonts) | Soft optical sizing; display for H1 |
| UI & body | **Source Sans 3** | Humanist, readable at 14–16px |

Scale (mobile):
- Brand / hero: 36–40px Fraunces
- Screen title: 24px Fraunces
- Card title: 17px Fraunces or 16px Sans semibold
- Body: 15px Sans
- Meta: 12–13px Sans, muted

---

## Imagery

- Sale detail & review detail: **full-bleed** book photography at top (edge-to-edge inside phone frame)
- Feed cards: cover thumb left or top — not floating collage cards in the hero
- Placeholders: Unsplash book/shelf images with stable URLs

---

## Components

- **Primary button:** filled `--ink`, paper text, 12px radius (not pill)
- **Secondary button:** outline `--ink` on paper
- **Chips:** small, rectangular-soft; forest for For sale, wood for Review
- **Bottom nav:** paper raised, top rule; active = ink + small serif or weight change
- **FAB:** ink circle, paper pencil icon — Create review
- **Cards:** prefer open layout; light raised paper only when needed for separation — no heavy shadows

---

## Motion (prototype)

1. Feed cards: gentle fade-up on load (stagger ~40ms)
2. Tab content: short crossfade
3. Like: heart scale pop (~200ms)
4. Publish: success toast slide + fade

---

## CSS variables (canonical)

See `prototype/css/tokens.css` — single source of truth mirrored from this doc.
