<script setup lang="ts">
import { irajmirzaFaqItems } from "@/constants/irajmirza";
</script>

<template>
  <section
    id="faq"
    aria-label="سوالات متداول"
    class="scroll-mt-24 px-4 py-18 sm:px-6 sm:py-32"
  >
    <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
      <div class="text-center lg:sticky lg:top-28 lg:self-start lg:text-right">
        <UiTitle>
          سوالات پرتکرار و
          <span class="text-brand">جواب‌های کم‌مسئولیت</span>
        </UiTitle>
        <p class="mt-4 text-ink-400">
          اگر جوابت را پیدا نکردی، طبیعی است؛ شاید اصلاً جوابی وجود نداشته باشد.
        </p>
        <img
          src="/logo.png"
          alt=""
          width="160"
          height="160"
          class="mx-auto mt-8 hidden h-20 w-auto opacity-40 grayscale lg:mx-0 lg:block"
          loading="lazy"
          decoding="async"
          role="presentation"
        />
      </div>
      <UiAccordion :items="irajmirzaFaqItems" :default-open-index="0" />
    </div>
  </section>
</template>
