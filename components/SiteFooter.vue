<script setup lang="ts">
import { footerGroups } from "../constants/landing";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="relative mt-32 border-t border-white/5 bg-ink-950">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-brand/60 to-transparent"
    />

    <div class="container-page py-20">
      <div class="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div class="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="بنیاد ۳۱ نوامبر"
              width="582"
              height="293"
              class="h-12 w-auto"
            />
            <div class="flex flex-col leading-tight">
              <span class="text-base font-bold text-white">۳۱ نوامبر</span>
              <span class="text-xs text-ink-300"> بنیاد نه چندان خیریه </span>
            </div>
          </div>
          <p class="mt-6 max-w-md text-sm leading-7 text-ink-300">
            ما در روزی هستیم که هیچ تقویمی نمی‌شناسد، و چیزهایی می‌سازیم که
            هیچ‌کس از ما نخواسته بود. اپلیکیشن، سخت‌افزار، و یک دوز کوچک از
            بی‌خیالی مهندسی.
          </p>
        </div>

        <div v-for="group in footerGroups" :key="group.title">
          <h4 class="text-sm font-bold text-white">{{ group.title }}</h4>
          <ul class="mt-5 space-y-3">
            <li v-for="item in group.items" :key="item.label">
              <a
                :href="item.href"
                class="text-sm text-ink-300 transition-colors hover:text-brand"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-ink-400 sm:flex-row sm:items-center"
      >
        <p>
          © {{ year }} بنیاد ۳۱ نوامبر — هیچ حقی محفوظ نیست، چون اصلاً قانونی
          نداریم.
          <a
            href="https://nov31st.online"
            class="text-ink-300 transition-colors hover:text-brand"
          >
            nov31st.online
          </a>
        </p>
        <p class="text-ink-500">
          ساخته شده با
          <span class="text-brand">♥</span>،
          چند فنجان قهوه و توهینی به چند هوش مصنوعی.
        </p>
      </div>
    </div>
  </footer>
</template>
