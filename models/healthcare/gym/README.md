# APEX — Elite Gym Landing Page Model

A high-end, fully responsive gym landing page model built with pure HTML, CSS, and vanilla JavaScript. Designed with an elite gold & black aesthetic, smooth animations, and a modern UX-focused layout. Available in three languages: English, Portuguese, and Spanish.

---

## Preview

> **Live demo:** Open `index.html` in your browser (no build step required).

---

## Project Structure

```
gym/
├── index.html          # English version
├── css/
│   └── styles.css      # All styles (variables, layout, animations, responsive)
├── assets/             # All image assets (17 files)
│   ├── man-1.jpg … man-10.jpg
│   ├── woman.jpg
│   └── equipament-1.jpg … equipament-5.jpg
├── es/
│   └── index.html      # Spanish version
└── pt/
    └── index.html      # Portuguese version
```

---

## Sections

| #  | Section         | Description                                                                 |
|----|-----------------|-----------------------------------------------------------------------------|
| 1  | **Header**      | Fixed navbar with logo, nav links, language switcher, and mobile hamburger menu |
| 2  | **Hero**        | Full-viewport background image with animated headline, stats strip, and CTA buttons |
| 3  | **About**       | Two-column layout with image, floating badge cards, features list, and brand story |
| 4  | **Programs**    | 6-card grid showcasing training modalities with a "Most Popular" highlight card |
| 5  | **Stats**       | Animated counters for members, coaches, equipment, and years of experience |
| 6  | **Gallery**     | Full-width 5-panel image strip with hover overlay labels |
| 7  | **Trainers**    | 4-coach grid with photos and social links revealed on hover |
| 8  | **Pricing**     | 3 membership tiers (Essential / Performance / Elite VIP) with featured card scale-up |
| 9  | **Testimonials**| 3 member reviews with avatar photos and starred ratings |
| 10 | **CTA Banner**  | Full-bleed background image with urgent call-to-action |
| 11 | **Contact**     | Split layout — contact info + functional form with submit feedback |
| 12 | **Footer**      | 4-column grid with navigation, programs, support links, and developer credit with social icons |

---

## Tech Stack

| Technology        | Usage                                                    |
|-------------------|----------------------------------------------------------|
| **HTML5**         | Semantic structure, single-page layout, anchor navigation |
| **CSS3**          | Custom properties, Grid, Flexbox, `clamp()`, keyframe animations |
| **Vanilla JS**    | IntersectionObserver, scroll events, counters, form logic |
| **Google Fonts**  | Bebas Neue (headings) + Poppins (body)                  |
| **Font Awesome 6**| Icons throughout the UI (CDN)                           |

> No frameworks. No dependencies. No build step.

---

## Design System

**Color Palette**
- `--gold: #c9a84c` — primary accent
- `--gold-light: #e8c96f` — hover/gradient highlight
- `--gold-dark: #9a7630` — dark accent
- `--black: #080808` — page background
- `--dark: #111111` — section backgrounds

**Typography**
- **Bebas Neue** — all headings and the logo
- **Poppins** — body text, labels, buttons

**Responsive Breakpoints**
| Breakpoint | Changes |
|------------|---------|
| `1100px`   | 2-column grids for programs, trainers, footer |
| `900px`    | Stack containers, single-column pricing & testimonials |
| `780px`    | Mobile navbar (slide-in drawer), hamburger menu active |
| `480px`    | Stacked hero actions, single-column trainers |

---

## JavaScript Features

- **Scroll effects** — header shrinks and gains blur on scroll; back-to-top button appears
- **Hamburger menu** — mobile slide-in nav drawer with smooth transition
- **Fade-in animations** — `IntersectionObserver` triggers entrance animations as elements enter the viewport
- **Counter animation** — numbers count up when the Stats section scrolls into view
- **Active nav link** — highlights the current section in the navbar while scrolling
- **Language switcher** — dropdown with links to EN / ES / PT versions, closes on outside click
- **Contact form** — submit button shows loading state and success confirmation

---

## Multilingual Setup

The page is available in 3 language versions, each in its own folder:

| Language   | Path              |
|------------|-------------------|
| English    | `index.html`      |
| Portuguese | `pt/index.html`   |
| Spanish    | `es/index.html`   |

All versions share the same `css/styles.css` and `assets/` via relative paths. A language switcher in the header links between them.

---

## Assets

17 real photography assets inside `assets/`:

- **`man-2.jpg`** — Hero background (battle ropes, dark & dramatic)
- **`equipament-3.jpg`** — About section (premium gold/black dumbbells)
- **`man-3.jpg`** — CTA Banner background (spin bike, cinematic)
- **`man-5.jpg`, `woman.jpg`, `man-1.jpg`, `man-4.jpg`** — Trainer profile photos
- **`woman.jpg`, `man-5.jpg`, `man-1.jpg`** — Testimonial avatars
- **`equipament-1/2/4/5.jpg`, `man-10.jpg`** — Gallery strip images

---

## Getting Started

No installation required.

```bash
# Clone or download the repo, then simply open:
models/healthcare/gym/index.html
```

Or serve it locally to avoid any browser file:// restrictions:

```bash
npx serve models/healthcare/gym
# → http://localhost:3000
```

---

## Author

Developed by **[@lucsantosdev](https://github.com/lucsantosdev)**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-lucsantosdev-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/lucsantosdev)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support-FF5E5B?style=flat&logo=ko-fi)](https://ko-fi.com/lucsantosdev)

---

*Part of the [Hub Landing Page Models](../../..) collection.*
