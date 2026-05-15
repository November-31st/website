<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** When set, fills the screen with this image instead of the default hero graphic. */
    innerSrc?: string;
    innerAlt?: string;
  }>(),
  { innerAlt: "" }
);

const isImageMode = computed(() => Boolean(props.innerSrc));
</script>

<template>
  <div
    class="phone-mockup relative mx-auto w-full max-w-[min(100%,20rem)] shrink-0 self-center sm:max-w-[min(100%,21.25rem)]"
    :aria-hidden="isImageMode ? undefined : 'true'"
  >
    <!-- Ambient glow behind the device -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-brand/25 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute left-1/2 top-[28%] -z-10 h-[55%] w-[72%] -translate-x-1/2 rounded-4xl bg-brand/35 blur-2xl"
    />

    <div class="phone-frame relative aspect-9/19 w-full rounded-[2.25rem] p-2">
      <div
        class="phone-screen relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.75rem]"
      >
        <!-- Light emanating from inside the display -->
        <div
          aria-hidden="true"
          class="phone-screen-light pointer-events-none absolute inset-0 z-10"
        />
        <div
          aria-hidden="true"
          class="phone-screen-vignette pointer-events-none absolute inset-0 z-10"
        />

        <template v-if="isImageMode">
          <img
            :src="innerSrc"
            :alt="innerAlt"
            class="relative z-0 h-full w-full min-h-0 flex-1 object-cover"
            loading="lazy"
            decoding="async"
          />
        </template>
        <template v-else>
          <div
            class="pointer-events-none absolute inset-0 z-0 opacity-40 stroke-grid"
          />
          <div
            class="relative z-0 flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center"
          >
            <Icon
              name="lucide:gamepad-2"
              class="size-14 text-brand/80 sm:size-16"
            />
            <p class="text-lg font-black text-white sm:text-xl">ایرج‌میرزا</p>
            <p class="text-xs leading-relaxed text-ink-400">
              همین حوالی‌ها؛ نه خیلی جدی، نه خیلی بی‌خطر.
            </p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.phone-frame {
  border: 1px solid rgb(255 255 255 / 0.12);
  background: linear-gradient(165deg, rgba(4, 4, 5) 0%, rgb(10, 10, 13) 100%);
  box-shadow: var(--shadow-glow), 0 28px 56px -20px rgb(0 0 0 / 0.65),
    inset 0 1px 0 rgb(255 255 255 / 0.08);
}

.phone-screen {
  background: linear-gradient(
    180deg,
    rgb(42 42 52) 0%,
    rgb(20 20 25) 45%,
    rgb(10 10 13) 100%
  );
  box-shadow: inset 0 0 48px 12px rgb(255 210 80 / 0.14),
    inset 0 2px 24px 0 rgb(255 240 180 / 0.1),
    inset 0 -24px 40px -8px rgb(255 200 11 / 0.06),
    0 0 32px -4px rgb(255 200 11 / 0.28);
}

.phone-screen-light {
  background: radial-gradient(
      ellipse 90% 70% at 50% 32%,
      rgb(255 230 150 / 0.42),
      transparent 68%
    ),
    radial-gradient(
      ellipse 120% 40% at 50% 0%,
      rgb(255 255 255 / 0.12),
      transparent 55%
    ),
    linear-gradient(
      180deg,
      rgb(255 220 120 / 0.08) 0%,
      transparent 35%,
      transparent 100%
    );
  mix-blend-mode: soft-light;
}

.phone-screen-vignette {
  box-shadow: inset 0 0 80px 4px rgb(255 200 11 / 0.07);
}
</style>
