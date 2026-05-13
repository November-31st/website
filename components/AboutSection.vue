<script setup lang="ts">
import { aboutPoints, aboutStats } from "../constants/landing";
import { toFarsiIndex } from "../utils/farsi";
</script>

<template>
  <section id="about" class="relative py-28 sm:py-36">
    <div class="container-page">
      <div class="grid items-start gap-16 lg:grid-cols-2">
        <div>
          <span class="eyebrow">درباره‌ی ما (تا حدی)</span>
          <h2 class="section-title mt-5 text-balance">
            ما یک
            <span class="text-brand">بنیاد</span>یم،
            <br />
            ولی نه از آن‌هایی که قبضشان به جایی می‌خورد.
          </h2>
          <p class="mt-6 max-w-xl text-lg leading-9 text-ink-300">
            بنیاد ۳۱ نوامبر، پناهگاه ایده‌هایی است که هیچ سرمایه‌گذار عاقلی
            حاضر نشد رویشان شرط ببندد. ما شرط بستیم. فعلاً نباخته‌ایم.
          </p>

          <div class="mt-10 space-y-5">
            <div
              v-for="(p, i) in aboutPoints"
              :key="p.title"
              class="flex gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-brand/30"
            >
              <div
                class="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/15 text-brand"
              >
                <span class="text-sm font-black">{{
                  toFarsiIndex(i + 1)
                }}</span>
              </div>
              <div>
                <h3 class="text-base font-bold text-white">{{ p.title }}</h3>
                <p class="mt-1 text-sm leading-7 text-ink-300">{{ p.body }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative lg:sticky lg:top-24 lg:self-start">
          <div
            aria-hidden="true"
            class="absolute -right-10 -top-10 -z-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
          />

          <div
            class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand/[0.08] via-white/[0.04] to-transparent p-1"
          >
            <div class="rounded-[22px] bg-ink-950/80 p-8 sm:p-10">
              <div class="flex items-center justify-between">
                <p class="text-xs uppercase tracking-widest text-ink-400">
                  manifesto.txt
                </p>
                <div class="flex gap-1.5">
                  <span class="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span class="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span class="h-2.5 w-2.5 rounded-full bg-brand" />
                </div>
              </div>

              <div class="mt-8 space-y-5 text-right leading-9">
                <p class="text-2xl font-bold text-white sm:text-3xl">
                  «اگر می‌توانی روزی را جشن بگیری که هیچ تقویمی نمی‌شناسد،
                  احتمالاً می‌توانی محصولی هم بفروشی که هیچ‌کس نمی‌شناخت.»
                </p>
                <p class="text-sm text-ink-300">
                  این سوال را هر روز از خودمان می‌پرسیم. جواب معمولاً یک کامیت
                  گیت در ساعت ۳ بامداد است.
                </p>
                <div class="flex items-center gap-3 pt-2">
                  <span
                    class="h-px flex-1 bg-gradient-to-l from-transparent via-brand/40 to-transparent"
                  />
                  <span class="text-xs text-ink-400">— تیم ۳۱ نوامبر</span>
                </div>
              </div>

              <div class="mt-8 grid grid-cols-3 gap-3">
                <div
                  v-for="(b, i) in aboutStats"
                  :key="i"
                  class="rounded-xl border border-white/5 bg-white/[0.03] p-4 text-center"
                >
                  <p class="text-xs text-ink-400">{{ b.label }}</p>
                  <p class="mt-1 text-xl font-black text-brand">
                    {{ b.value }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
