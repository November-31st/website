<script setup lang="ts">
import { irajmirzaScreenshots } from "@/constants/irajmirza";

/** چیدمان شبیه کاشی‌های مترو / استارت ویندوز: بزرگ، مربع‌های کوچک، نوار پهن. */
function metroTileClass(index: number) {
  const layouts = [
    "aspect-[2/1] lg:col-span-2 lg:row-span-2 lg:aspect-square",
    "aspect-[2/1] lg:col-span-1 lg:aspect-square",
    "aspect-[2/1] lg:col-span-1 lg:aspect-square",
    "aspect-[2/1] lg:col-span-2 lg:aspect-[2/1]",
    "aspect-[2/1] lg:col-span-4 lg:aspect-[3/1]",
  ] as const;
  return layouts[index as keyof typeof layouts] ?? "aspect-[2/1]";
}
</script>

<template>
  <section
    id="screens"
    aria-label="تصاویر کاربران با گوشی در موقعیت‌های مختلف"
    class="scroll-mt-24 bg-ink-950 px-4 py-16 sm:px-6 sm:py-32"
  >
    <div class="container-page">
      <div class="text-center lg:text-right">
        <UiTitle>
          گوشی در دست، <span class="text-brand">وسط زندگی</span>
        </UiTitle>
        <p class="mx-auto mt-4 max-w-2xl text-ink-400 lg:mx-0">
          اینجا قرار نیست فقط پیکسل‌های UI را ببینی؛ می‌خواهیم ببینی بازی کجا
          وسط روز مردم جا می‌گیرد — مترو، کافه، وسط حرف، وسط بی‌حوصلگی. چیدمان
          زیر شبیه کاشی‌های استارت است: یکی بزرگ، چندتا کوچک، یکی پهن؛ عکس‌ها را
          بعداً می‌گذاریم.
        </p>
      </div>

      <div
        class="mx-auto mt-12 grid max-w-6xl auto-rows-auto grid-cols-1 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-2.5"
      >
        <figure
          v-for="(shot, index) in irajmirzaScreenshots"
          :key="shot.situation"
          :class="metroTileClass(index)"
          class="group relative m-0 w-full overflow-hidden rounded-xl border border-white/10 bg-ink-900/80 shadow-md ring-1 ring-inset ring-white/5 transition-all duration-200 will-change-transform hover:z-1 hover:shadow-lg hover:ring-brand/25 lg:hover:scale-[1.01]"
        >
          <div
            aria-hidden="true"
            class="pointer-events-none absolute left-0 top-0 z-1 h-full w-1 bg-linear-to-b from-brand via-brand/70 to-brand/30 opacity-90"
          />

          <div class="absolute inset-0">
            <img
              v-if="shot.src"
              :src="shot.src"
              :alt="shot.alt"
              class="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div
              v-else
              class="flex h-full w-full flex-col items-center justify-center gap-2 bg-linear-to-br from-ink-800/80 via-ink-900 to-ink-950 p-4 text-center sm:gap-3"
            >
              <div
                class="grid size-10 place-items-center rounded-lg border border-dashed border-white/20 bg-ink-950/50 text-ink-400 sm:size-12"
              >
                <Icon
                  name="lucide:hand-metal"
                  class="size-5 stroke-2 sm:size-6"
                />
              </div>
              <p
                class="max-w-56 text-[10px] font-medium leading-relaxed text-ink-500 sm:text-xs"
              >
                جای عکس {{ index + 1 }}
              </p>
            </div>
          </div>

          <figcaption
            class="pointer-events-none absolute inset-x-0 bottom-0 z-1 bg-linear-to-t from-ink-950 via-ink-950/90 to-transparent px-3 pb-2.5 pt-10 text-right text-xs font-medium leading-snug text-ink-100 sm:text-sm"
          >
            {{ shot.situation }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
