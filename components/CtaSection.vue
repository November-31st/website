<script setup lang="ts">
import { contactLinks } from "../constants/landing";
</script>

<template>
  <section id="contact" class="relative py-20">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[32px] border border-brand/30 bg-gradient-to-br from-brand/20 via-ink-900 to-ink-950 p-10 shadow-glow sm:p-16"
      >
        <div
          aria-hidden="true"
          class="absolute inset-0 -z-10 opacity-30 stroke-grid"
        />

        <div
          aria-hidden="true"
          class="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-brand/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -bottom-32 left-0 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
        />

        <div class="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span class="eyebrow">نوبت توست (آره با تو، نه بغلی‌ات)</span>
            <h2
              class="mt-5 text-balance text-3xl font-black leading-tight text-white sm:text-5xl"
            >
              یک ایده داری که
              <span class="text-brand">عاقل‌ها</span>
              به آن خندیدند؟
            </h2>
            <p
              class="mt-5 max-w-xl text-base leading-8 text-ink-200 sm:text-lg"
            >
              برای ما بفرست. شاید فردا، شاید پس‌فردا، یا اگر شانس آورد، روز ۳۱
              نوامبر، اولین کاربرش وسط صحنه می‌ایستد.
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="mailto:hi@nov31st.online" class="btn-primary">
                hi@nov31st.online
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
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a href="#services" class="btn-ghost">ببین قبلاً چه گندی زدیم</a>
            </div>
          </div>

          <div class="relative">
            <div
              class="rounded-2xl border border-white/10 bg-ink-950/70 p-6 backdrop-blur"
            >
              <p class="text-xs uppercase tracking-widest text-ink-400">
                خط مستقیم با ما
              </p>
              <div class="mt-5 space-y-4">
                <div
                  v-for="(c, i) in contactLinks"
                  :key="i"
                  class="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-brand/40"
                >
                  <div>
                    <p class="text-[11px] text-ink-400">{{ c.label }}</p>
                    <p class="mt-0.5 text-sm font-medium text-white">
                      {{ c.value }}
                    </p>
                  </div>
                  <a
                    :href="c.href"
                    class="grid h-9 w-9 place-items-center rounded-lg bg-brand/15 text-brand transition hover:bg-brand hover:text-ink-950"
                    aria-label="باز کن"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
