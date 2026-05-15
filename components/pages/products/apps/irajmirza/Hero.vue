<script setup lang="ts">
import PhoneMockup from "./PhoneMockup.vue";
import {
  irajmirzaGamePlayUrl,
  irajmirzaGooglePlayUrl,
} from "@/constants/irajmirza";

const { isAndroidPlayCapable, playStoreDisabledBanter } =
  useIrajmirzaGooglePlayCta();
</script>

<template>
  <section
    id="hero"
    class="relative overflow-hidden min-h-screen flex items-center border-b border-white/10 px-4 pt-18 sm:px-6 sm:pt-32"
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
          ایرج میرزا
        </UiTitle>

        <p class="mt-5 text-lg leading-8 text-ink-300">
          اگر دنبال شاهکار ادبی هستی، در اشتباهی؛ اینجا حروف را به هم می‌کشی تا
          کلمه‌ای را بفهمی که شاید بهتر بود نگویی. وسوسهٔ وسط شب، برای
          بزرگسالانی که هنوز «فقط پنج دقیقه» را باور می‌کنند.
        </p>

        <div
          class="mt-8 flex flex-wrap items-start justify-center gap-3 lg:justify-start"
        >
          <UiButton
            :to="irajmirzaGooglePlayUrl"
            :disabled="!isAndroidPlayCapable"
            v-bind="
              isAndroidPlayCapable
                ? {
                    external: true,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : {}
            "
            :title="
              isAndroidPlayCapable
                ? 'دانلود از گوگل پلی'
                : 'گوگل پلی فقط روی اندروید'
            "
          >
            دانلود از گوگل پلی
            <Icon
              v-if="isAndroidPlayCapable"
              name="lucide:external-link"
              class="size-4 shrink-0"
            />
            <Icon
              v-else
              name="lucide:ban"
              class="size-4 shrink-0 stroke-[2.5]"
              aria-hidden="true"
            />
          </UiButton>

          <UiButton
            :to="irajmirzaGamePlayUrl('hero')"
            external
            target="_blank"
            rel="noopener noreferrer"
            title="ورود به بازی (نسخهٔ وب)"
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
          class="mt-6 inline-flex items-start justify-center gap-2 text-sm text-ink-400 lg:justify-end"
        >
          <template v-if="!isAndroidPlayCapable">
            <Icon
              name="lucide:ban"
              class="mt-0.5 size-4 shrink-0 stroke-[2.5]"
              aria-hidden="true"
            />
            {{ playStoreDisabledBanter }}
          </template>
          <template v-else>
            <Icon
              name="lucide:wifi-off"
              class="mt-0.5 size-4 shrink-0 stroke-[2.5]"
              aria-hidden="true"
            />
            <span class="text-right"> اگر نرفت، اینترنت مقصر است، نه ما. </span>
          </template>
        </p>
      </div>

      <PhoneMockup
        inner-src="/products/apps/irajmirza/screenshots/level.webp"
      />
    </div>
  </section>
</template>
