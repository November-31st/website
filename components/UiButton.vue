<script setup lang="ts">
defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    variant?: "primary" | "ghost";
    /** When set, renders `NuxtLink`; otherwise a `<button>`. */
    to?: string;
    external?: boolean;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    title?: string;
  }>(),
  {
    variant: "primary",
    type: "button",
  }
);

const attrs = useAttrs();

const mergedClass = computed(() => {
  const base = props.variant === "ghost" ? "btn-ghost" : "btn-primary";
  const extra = attrs.class;
  if (!extra) return base;
  if (Array.isArray(extra)) return [base, ...extra];
  return [base, extra];
});

const passthrough = computed(() => {
  const { class: _c, ...rest } = attrs as Record<string, unknown>;
  return rest;
});
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :external="external"
    :title="title"
    :class="mergedClass"
    v-bind="passthrough"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :title="title"
    :class="mergedClass"
    v-bind="passthrough"
  >
    <slot />
  </button>
</template>

<style scoped>
@reference "../assets/css/main.css";

.btn-primary {
  @apply inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-ink-950 transition-all duration-300 hover:bg-brand-400 hover:shadow-glow active:scale-[0.98] sm:text-base;
}

.btn-ghost {
  @apply inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-ink-100 backdrop-blur transition-all duration-300 hover:border-brand/60 hover:bg-white/10 hover:text-white sm:text-base;
}
</style>
