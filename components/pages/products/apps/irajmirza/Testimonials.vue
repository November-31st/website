<script setup lang="ts">
import { irajmirzaTestimonials } from "@/constants/irajmirza";
import { toFarsiDigits } from "@/utils/farsi";
</script>

<template>
  <section
    id="stories"
    aria-label="نظرها"
    class="relative scroll-mt-24 border-y border-white/10 bg-linear-to-b from-ink-900/80 via-ink-950 to-ink-950 px-4 py-16 sm:px-6 sm:py-32"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand/12 via-transparent to-transparent"
    />

    <div class="relative mx-auto max-w-6xl text-center">
      <UiTitle>
        حرف‌هایی که <span class="text-brand">نباید جدی گرفت</span>
      </UiTitle>
      <p class="mx-auto mt-4 max-w-2xl text-ink-400">
        سه نفر پیدا کردیم که چیزی گفتند. اصالت‌شان را تضمین نمی‌کنیم؛ شاید همگی
        ما باشیم با کلاه عوض.
      </p>
    </div>

    <div
      class="relative mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <UiCard
        v-for="t in irajmirzaTestimonials"
        :key="t.name"
        tag="article"
        variant="ghost"
        class="flex flex-col p-6 text-right"
      >
        <div class="flex items-center gap-3">
          <img
            :src="t.avatar"
            alt=""
            width="48"
            height="48"
            loading="lazy"
            decoding="async"
            class="size-12 shrink-0 rounded-full border border-white/10 object-cover"
            role="presentation"
          />
          <div>
            <p class="font-semibold text-white">
              {{ t.name }}
            </p>
            <p class="text-xs text-ink-500">
              {{ t.role }}
            </p>
          </div>
        </div>
        <p class="mt-4 flex-1 text-sm leading-7 text-ink-300">
          «{{ t.quote }}»
        </p>
        <div
          class="mt-4 flex gap-0.5 text-brand"
          :aria-label="`${toFarsiDigits(t.stars)} ستاره`"
        >
          <svg
            v-for="s in t.stars"
            :key="`${t.name}-${s}`"
            class="size-5 shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.91 4.97L5.82 21z"
            />
          </svg>
        </div>
      </UiCard>
    </div>
  </section>
</template>
