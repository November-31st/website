<script setup lang="ts">
defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    /** `section`: `.section-title`; `promo`: CTA-style; `hero`: landing hero display. */
    variant?: "section" | "promo" | "hero";
    /** When omitted, tag follows variant (`hero` → `h1`, otherwise `h2`). */
    tag?: "h1" | "h2" | "h3";
  }>(),
  { variant: "section" }
);

const attrs = useAttrs();

const resolvedTag = computed<"h1" | "h2" | "h3">(() => {
  if (props.tag !== undefined) return props.tag;
  return props.variant === "hero" ? "h1" : "h2";
});

const variantClass = computed(() => {
  switch (props.variant) {
    case "hero":
      return "text-balance text-5xl font-black leading-[1.1] tracking-tight text-white animate-fade-up sm:text-6xl md:text-7xl lg:text-[88px]";
    case "promo":
      return "text-balance text-3xl font-black leading-tight text-white sm:text-5xl";
    default:
      return "section-title text-balance";
  }
});

const mergedClass = computed(() => {
  const extra = attrs.class;
  if (!extra) return variantClass.value;
  if (Array.isArray(extra)) return [variantClass.value, ...extra];
  return [variantClass.value, extra];
});

const passthrough = computed(() => {
  const { class: _c, ...rest } = attrs as Record<string, unknown>;
  return rest;
});
</script>

<template>
  <component :is="resolvedTag" :class="mergedClass" v-bind="passthrough">
    <slot />
  </component>
</template>

<style scoped>
@reference "../assets/css/main.css";

.section-title {
  @apply text-3xl font-black text-white sm:text-4xl md:text-5xl md:leading-tight;
}
</style>
