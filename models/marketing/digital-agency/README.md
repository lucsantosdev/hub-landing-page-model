# SEO Agency — Landing Page Model

A clean, fully responsive landing page template for a digital marketing / SEO agency. Built with pure HTML, CSS and vanilla JavaScript — no frameworks, no dependencies beyond Font Awesome icons.

---

## Preview

> Open `index.html` in your browser to see the live result.

---

## Features

- **Responsive design** — adapts to desktop, tablet and mobile (breakpoints at 991px, 768px and 450px)
- **Dark / light mode** — toggle button in the header switches the full theme via CSS variables
- **Scroll progress indicator** — a thin red bar at the bottom of the header reflects scroll depth
- **Language switcher** — dropdown in the header links to EN, ES and PT versions
- **SVG favicon** — custom brand icon matching the header logo style
- **Smooth scroll** — native CSS `scroll-behavior: smooth` with `scroll-padding-top` offset for the sticky header

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, Flexbox layout, CSS variables, clip-path animations |
| JavaScript (ES6+) | Theme toggle, mobile menu, language switcher, scroll indicator |
| [Font Awesome 5](https://fontawesome.com/) | Icons (CDN) |
| [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins) | Typography |

---

## Project Structure

```
digital-agency/
├── index.html          # English version
├── css/
│   └── style.css       # All styles (including dark mode and responsive breakpoints)
├── js/
│   └── script.js       # Theme toggle, mobile menu, lang switcher, scroll indicator
├── images/
│   ├── favicon.svg     # SVG favicon
│   ├── home-img-*.png  # Hero section images
│   ├── serv-*.png      # Services section icons
│   ├── work-*.png/jpg  # Portfolio/work gallery images
│   └── pic-*.png       # Testimonial client avatars
├── es/
│   └── index.html      # Spanish version
├── pt/
│   └── index.html      # Portuguese (BR) version
└── README.md
```

---

## Page Sections

### Header
Sticky navigation bar containing the brand logo, nav links, a dark/light mode toggle, a language switcher dropdown (EN / ES / PT) and a scroll progress indicator.

### Home
Three alternating hero boxes — each with an illustration and a short description covering the agency's core value propositions: SEO strategy, customized solutions and full-service offering.

### Services
A 3×2 card grid highlighting the six main service pillars:
- Guaranteed Results
- Competitive Prices
- No Missed Deadlines
- Quick Feedback
- Personalized Approach
- Dedicated Team

### Work
A responsive image gallery showcasing nine portfolio samples.

### Pricing
Three plan tiers (Basic · Standard · Premium) with monthly pricing and a feature checklist per plan.

### Testimonials
Three client review cards with avatar, star rating and quote text.

### Contact
Split layout with contact information + business hours on the left and a message form (name, email, phone, subject, message) on the right.

### Newsletter
A simple email subscription strip.

### Footer
Quick-links bar with brand logo and all navigation anchors, followed by a credit strip with social media icons (LinkedIn, GitHub, Email, Ko-fi).

---

## Multilingual Support

The template ships in three languages. Each version shares the same CSS and JS files — only the HTML content differs.

| File | Language |
|---|---|
| `index.html` | English |
| `es/index.html` | Spanish |
| `pt/index.html` | Portuguese (BR) |

---

## Customization

1. **Colors** — edit the CSS variables at the top of `style.css`:
   ```css
   :root {
     --red: #fa4f09;   /* accent color */
     --black: #333;
     --white: #fff;
     --light-color: #666;
     --light-bg: #eee;
   }
   ```
2. **Content** — replace text, images and links directly in the HTML files.
3. **Pricing** — update plan names, prices and feature lists in the `#pricing` section.
4. **Contact details** — update address, email and phone in the `#contact` section.

---

## Author

Developed by [@lucsantosdev](https://www.linkedin.com/in/lucsantosdev/)
