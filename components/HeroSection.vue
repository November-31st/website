<script setup lang="ts">
import { heroBadges, heroStats } from "../constants/landing";
</script>

<template>
  <section class="relative pt-32 sm:pt-40">
    <div aria-hidden="true" class="absolute inset-0 -z-10 grid-bg opacity-60" />

    <div class="container-page">
      <div class="mx-auto max-w-7xl text-center">
        <div class="flex justify-center animate-fade-up">
          <img
            src="/logo.png"
            alt="بنیاد ۳۱ نوامبر"
            width="582"
            height="293"
            class="h-24 w-auto drop-shadow-[0_0_40px_rgba(255,200,11,0.35)] sm:h-28"
          />
        </div>
        <div
          class="mt-6 flex justify-center animate-fade-up"
          style="animation-delay: 40ms"
        >
          <span class="eyebrow">
            <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
            بنیاد نه چندان خیریه‌ی ۳۱ نوامبر
          </span>
        </div>

        <h1
          class="mt-7 text-balance text-5xl font-black leading-[1.1] tracking-tight text-white animate-fade-up sm:text-6xl md:text-7xl lg:text-[88px]"
          style="animation-delay: 80ms"
        >
          چیزهایی می‌سازیم که
          <span class="text-gradient">روز‌ ۳۱ نوامبر</span>
          متولد می‌شوند.
        </h1>

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
          <a href="#services" class="btn-primary">
            ببین چه دسته‌گلی به آب داده‌ایم
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="rtl:rotate-180"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#about" class="btn-ghost">داستان جنایت</a>
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
