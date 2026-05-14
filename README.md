# بنیاد ۳۱ نوامبر — Landing

A sleek, modern Farsi (RTL) landing page for the **November 31st not-so-charitable foundation**.

**Domain:** [nov31st.online](https://nov31st.online)

Built with **Nuxt**, **Tailwind CSS** and the brand color `#ffc80b`.

## Stack

- [Nuxt](https://nuxt.com) (Vue, Vite)
- [Tailwind CSS v4](https://tailwindcss.com/) with [`@tailwindcss/vite`](https://tailwindcss.com/docs/installation/framework-guides/nuxt)
- [Vazirmatn](https://github.com/rastikerdar/vazirmatn) via [`@fontsource/vazirmatn`](https://fontsource.org/fonts/vazirmatn) (self-hosted)
- Full RTL (`lang="fa"`, `dir="rtl"`)

## Setup

[Install pnpm](https://pnpm.io/installation) if needed, then:

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Visit http://localhost:3000

## Production

```bash
pnpm build
pnpm preview
```

## Static export

```bash
pnpm generate
```

## Project layout

```
.
├── app.vue                 # Root layout (navbar + page + footer)
├── nuxt.config.ts          # Nuxt + meta + RTL config
├── assets/css/main.css     # Tailwind (@theme), fonts, components
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
