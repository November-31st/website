// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  srcDir: ".",
  components: {
    dirs: [
      {
        path: "~/components",
        ignore: ["**/pages/**"],
      },
    ],
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    preset: "github_pages",
  },
  app: {
    baseURL: "/",
    head: {
      htmlAttrs: { lang: "fa", dir: "rtl" },
      title: "بنیاد نه چندان خیریه‌ی ۳۱ نوامبر",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "بنیاد نه چندان خیریه‌ی ۳۱ نوامبر؛ ساخت اپلیکیشن، سخت‌افزار و چیزهایی فراتر از تصور.",
        },
        { name: "theme-color", content: "#ffc80b" },
        { property: "og:title", content: "بنیاد ۳۱ نوامبر" },
        {
          property: "og:description",
          content: "اپلیکیشن، سخت‌افزار و خیلی چیزهای دیگر.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://nov31st.online" },
        { property: "og:image", content: "https://nov31st.online/logo.png" },
        { property: "og:site_name", content: "nov31st.online" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "بنیاد ۳۱ نوامبر" },
        {
          name: "twitter:description",
          content: "اپلیکیشن، سخت‌افزار و خیلی چیزهای دیگر.",
        },
        { name: "twitter:image", content: "https://nov31st.online/logo.png" },
      ],
      link: [
        { rel: "canonical", href: "https://nov31st.online" },
        { rel: "icon", type: "image/png", href: "/logo.png" },
        { rel: "apple-touch-icon", href: "/logo.png" },
      ],
    },
  },
});
