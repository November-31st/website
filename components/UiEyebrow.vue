<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Pulsing brand dot (e.g. hero). */
    pulse?: boolean;
  }>(),
  { pulse: false }
);
</script>

<template>
  <span class="eyebrow">
    <span
      v-if="pulse"
      aria-hidden="true"
      class="h-1.5 w-1.5 animate-pulse rounded-full bg-brand"
    />
    <slot />
  </span>
</template>

<style scoped>
@reference "../assets/css/main.css";

.eyebrow {
  @apply inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand;
}
</style>
