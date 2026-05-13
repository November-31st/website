// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-13',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://nov31st.online',
    name: 'بنیاد ۳۱ نوامبر',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fa', dir: 'rtl' },
      title: 'بنیاد نه چندان خیریه‌ی ۳۱ نوامبر',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'بنیاد نه چندان خیریه‌ی ۳۱ نوامبر؛ ساخت اپلیکیشن، سخت‌افزار و چیزهایی فراتر از تصور.',
        },
        { name: 'theme-color', content: '#ffc80b' },
        { property: 'og:title', content: 'بنیاد ۳۱ نوامبر' },
        {
          property: 'og:description',
          content: 'اپلیکیشن، سخت‌افزار و خیلی چیزهای دیگر.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nov31st.online' },
        { property: 'og:image', content: 'https://nov31st.online/logo.png' },
        { property: 'og:site_name', content: 'nov31st.online' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'بنیاد ۳۱ نوامبر' },
        {
          name: 'twitter:description',
          content: 'اپلیکیشن، سخت‌افزار و خیلی چیزهای دیگر.',
        },
        { name: 'twitter:image', content: 'https://nov31st.online/logo.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://nov31st.online' },
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },
})
