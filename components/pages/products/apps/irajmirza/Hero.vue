<script setup lang="ts">
import PhoneMockup from "./PhoneMockup.vue";
import { irajmirzaGameUrl } from "@/constants/irajmirza";
</script>

<template>
  <section
    id="hero"
    class="relative overflow-hidden border-b border-white/10 px-4 py-18 sm:px-6 sm:py-32"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10 opacity-40 stroke-grid"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand/25 via-transparent to-transparent"
    />

    <div
      class="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-16"
    >
      <div class="max-w-xl flex-1 text-center lg:text-right">
        <UiEyebrow pulse class="mb-3">
          بازی موبایل — یا حداقل چیزی که اسمش را بازی گذاشته‌ایم
        </UiEyebrow>

        <UiTitle variant="hero" class="mt-2 lg:text-[72px]">
          ایرج‌<span class="text-brand">میرزا</span>
        </UiTitle>

        <p class="mt-5 text-lg leading-8 text-ink-300">
          اگر دنبال شاهکار هنری هفتمین قاره‌ی فرهنگی هستی، درِ اشتباهی زدی.
          اینجا بیشتر شبیهِ وسوسه‌ی وسط شب است؛ دو دقیقه‌ی اول «اوه جالب»، بعد
          یادت می‌آید فردا باید زود بیدار شوی.
        </p>

        <div
          class="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
        >
          <UiButton
            :to="irajmirzaGameUrl"
            external
            target="_blank"
            rel="noopener noreferrer"
            title="ورود به بازی"
          >
            ورود به بازی
            <Icon name="lucide:external-link" class="size-4 shrink-0" />
          </UiButton>
          <UiButton
            to="#screens"
            variant="ghost"
            title="رفتن به تصاویر کاربران با گوشی در موقعیت‌های مختلف"
          >
            گوشی در دست مردم
            <Icon name="lucide:camera" class="size-4 shrink-0 stroke-[2.5]" />
          </UiButton>
        </div>

        <p
          class="mt-6 inline-flex items-start justify-center gap-2 text-sm text-ink-500 lg:justify-end"
        >
          <Icon
            name="lucide:wifi-off"
            class="mt-0.5 size-4 shrink-0 stroke-[2.5]"
            aria-hidden="true"
          />
          <span class="text-right"> اگر نرفت، اینترنت مقصر است، نه ما. </span>
        </p>
      </div>

      <PhoneMockup />
    </div>
  </section>
</template>
