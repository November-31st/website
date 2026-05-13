<script setup lang="ts">
import { numbers } from "../constants/landing";
import { toFarsiIndex } from "../utils/farsi";
</script>

<template>
  <section id="numbers" class="relative py-28 sm:py-36">
    <div class="container-page">
      <div class="grid items-end gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <span class="eyebrow">عدد و رقم (بدون فتوشاپ)</span>
          <h2 class="section-title mt-5 text-balance">
            اعدادی که اگر
            <span class="text-brand">دروغ بود</span>، یک چیز قشنگ‌تری می‌گفتیم.
          </h2>
          <p class="mt-5 max-w-md text-lg text-ink-300">
            مدیر فروشمان گفت یک سکشن «اعداد» داشته باشید، آدم اعتماد می‌کند. خب،
            بفرمایید.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="(n, i) in numbers"
            :key="n.label"
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7 transition hover:border-brand/40"
          >
            <div
              aria-hidden="true"
              class="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-opacity group-hover:opacity-100"
            />
            <p class="text-[11px] uppercase tracking-widest text-ink-400">
              {{ toFarsiIndex(i + 1) }}
            </p>
            <p
              class="mt-3 text-4xl font-black leading-none text-white sm:text-5xl"
            >
              {{ n.value }}
            </p>
            <p class="mt-3 text-sm font-medium text-brand">{{ n.label }}</p>
            <p class="mt-1 text-xs text-ink-400">{{ n.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
