<script setup lang="ts">
import AlternatingFeatures from "@/components/pages/products/apps/irajmirza/AlternatingFeatures.vue";
import DownloadCta from "@/components/pages/products/apps/irajmirza/DownloadCta.vue";
import Faq from "@/components/pages/products/apps/irajmirza/Faq.vue";
import FeatureShowcase from "@/components/pages/products/apps/irajmirza/FeatureShowcase.vue";
import Hero from "@/components/pages/products/apps/irajmirza/Hero.vue";
import Screenshots from "@/components/pages/products/apps/irajmirza/Screenshots.vue";
import Testimonials from "@/components/pages/products/apps/irajmirza/Testimonials.vue";
import { irajmirzaOgImage } from "@/constants/irajmirza";

useSeoMeta({
  title: "بازی موبایل ایرج میرزا - بنیاد نه چندان خیریه‌ی ۳۱ نوامبر",
  ogImage: irajmirzaOgImage,
  twitterImage: irajmirzaOgImage,
});
</script>

<template>
  <div>
    <Hero />
    <AlternatingFeatures />
    <Testimonials />
    <FeatureShowcase />
    <Faq />
    <Screenshots />
    <DownloadCta />
  </div>
</template>
