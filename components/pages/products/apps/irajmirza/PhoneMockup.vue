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
    class="relative mx-auto w-full max-w-[min(100%,20rem)] shrink-0 self-center sm:max-w-[min(100%,21.25rem)]"
    :aria-hidden="isImageMode ? undefined : 'true'"
  >
    <div
      class="relative aspect-9/19 w-full rounded-[2.25rem] border border-white/10 bg-ink-900/80 p-2"
    >
      <div
        class="absolute left-1/2 top-2.5 h-5 w-20 -translate-x-1/2 rounded-full bg-ink-950/90"
      />
      <div
        class="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.75rem] bg-linear-to-b from-ink-800 via-ink-900 to-ink-950"
      >
        <template v-if="isImageMode">
          <img
            :src="innerSrc"
            :alt="innerAlt"
            class="h-full w-full min-h-0 flex-1 object-cover"
            loading="lazy"
            decoding="async"
          />
        </template>
        <template v-else>
          <div
            class="pointer-events-none absolute inset-0 opacity-40 stroke-grid"
          />
          <div
            class="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-brand/25 blur-2xl"
          />
          <div
            class="relative flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center"
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
