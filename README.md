# بنیاد ۳۱ نوامبر — Landing

A sleek, modern Farsi (RTL) landing page for the **November 31st not-so-charitable foundation**.

**Domain:** [nov31st.online](https://nov31st.online)

Built with **Nuxt 3**, **Tailwind CSS** and the brand color `#ffc80b`.

## Stack

- [Nuxt 3](https://nuxt.com) (Vue 3, Vite)
- [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/)
- [Vazirmatn](https://github.com/rastikerdar/vazirmatn) Persian web font (loaded from Google Fonts)
- Full RTL (`lang="fa"`, `dir="rtl"`)

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Visit http://localhost:3000

## Production

```bash
npm run build
npm run preview
```

## Static export

```bash
npm run generate
```

## Project layout

```
.
├── app.vue                 # Root layout (navbar + page + footer)
├── nuxt.config.ts          # Nuxt + meta + font + RTL config
├── tailwind.config.js      # Brand palette, fonts, animations
├── assets/css/main.css     # Tailwind + design tokens + components
├── components/
│   ├── SiteNavbar.vue
│   ├── SiteFooter.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── ServicesSection.vue
│   ├── NumbersSection.vue
│   └── CtaSection.vue
├── pages/index.vue         # Landing page composition
└── public/favicon.svg
```

## Brand

- Primary: `#ffc80b`
- Background: ink scale (`#050507` → `#f6f6f7`)
- Typography: Vazirmatn (300–900)
