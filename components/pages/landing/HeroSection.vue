<script setup lang="ts">
import { heroBadges, heroStats } from "@/constants/landing";
</script>

<template>
  <section class="relative pt-32 sm:pt-40">
    <div aria-hidden="true" class="absolute inset-0 -z-10 grid-bg opacity-60" />

    <div class="container-page">
      <div class="mx-auto max-w-7xl text-center">
        <div class="flex justify-center animate-fade-up">
          <SiteLogo variant="hero" />
        </div>
        <div
          class="mt-6 flex justify-center animate-fade-up"
          style="animation-delay: 40ms"
        >
          <UiEyebrow pulse> بنیاد نه چندان خیریه‌ی ۳۱ نوامبر </UiEyebrow>
        </div>

        <UiTitle
          variant="hero"
          class="mt-7 animate-fade-up"
          style="animation-delay: 80ms"
        >
          چیزهایی می‌سازیم که
          <span class="text-gradient">روز‌ ۳۱ نوامبر</span>
          متولد می‌شوند.
        </UiTitle>

        <p
          class="mx-auto mt-8 max-w-2xl text-balance text-lg leading-9 text-ink-300 animate-fade-up sm:text-xl"
          style="animation-delay: 160ms"
        >
          یک مشت آدم با مدرک‌های مهندسی و حوصله‌ی صفر، که اپلیکیشن و سخت‌افزار
          می‌سازند. یک‌جایی بین خیریه و کسب‌و‌کار، در روزی که تقویم نمی‌شناسد.
        </p>

        <div
          class="mt-10 flex flex-col items-center justify-center gap-3 animate-fade-up sm:flex-row"
          style="animation-delay: 240ms"
        >
          <UiButton to="/#services" title="رفتن به بخش خدمات">
            ببین چه دسته‌گلی به آب داده‌ایم
            <Icon
              name="lucide:chevron-right"
              class="size-4 shrink-0 rtl:rotate-180"
            />
          </UiButton>
          <UiButton to="/#about" variant="ghost" title="رفتن به بخش دربارهٔ ما">
            داستان جنایت
          </UiButton>
        </div>
      </div>

      <div
        class="relative mx-auto mt-20 max-w-5xl animate-fade-up"
        style="animation-delay: 320ms"
      >
        <div
          class="absolute -inset-x-10 -top-10 -z-10 h-64 rounded-full bg-brand/20 blur-3xl"
        />

        <div
          class="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-2 shadow-glow"
        >
          <div
            class="relative grid grid-cols-2 gap-2 rounded-2xl bg-ink-900/70 p-2 sm:grid-cols-4"
          >
            <div
              v-for="(item, i) in heroStats"
              :key="i"
              class="group relative overflow-hidden rounded-xl border border-white/5 bg-ink-950/60 p-6 transition-colors duration-300 ease-out hover:border-brand/40"
            >
              <div
                aria-hidden="true"
                class="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 scale-75 rounded-full bg-brand/20 opacity-0 blur-2xl transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
              />
              <p class="text-sm text-ink-400">{{ item.label }}</p>
              <p class="mt-3 text-3xl font-black text-white sm:text-4xl">
                {{ item.value }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mt-24 overflow-hidden border-y border-white/5 py-6">
      <div
        class="flex animate-marquee-rtl gap-12 whitespace-nowrap will-change-transform"
      >
        <template v-for="loop in 2" :key="loop">
          <div
            v-for="badge in heroBadges"
            :key="`${loop}-${badge}`"
            class="flex items-center gap-12 text-2xl font-bold text-ink-300 sm:text-3xl"
          >
            <span class="flex items-center gap-3">
              <span class="h-2 w-2 rounded-full bg-brand" />
              <span class="opacity-60">{{ badge }}</span>
            </span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
