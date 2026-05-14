<script setup lang="ts">
defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    tag?: "article" | "div" | "section";
    /** `default`: primary panels; `stat`: compact metric tiles; `ghost`: soft border, minimal fill. */
    variant?: "default" | "stat" | "ghost";
    /** Resting glow (`shadow-glow-sm`; stronger on hover when `hover` + default variant). */
    glow?: boolean;
    /** Hover affordances: lift + shadow on `default`; border emphasis on `stat` / `ghost`. */
    hover?: boolean;
  }>(),
  { tag: "div", variant: "default", glow: false, hover: true }
);

const attrs = useAttrs();

const fillClass = computed(() => {
  switch (props.variant) {
    case "stat":
      return "card--stat";
    case "ghost":
      return "card--ghost";
    default:
      return "card--default";
  }
});

const mergedClass = computed(() => {
  const list: string[] = ["card", fillClass.value];
  if (props.hover) {
    if (props.variant === "stat") list.push("card--hover-subtle");
    else if (props.variant === "ghost") list.push("card--hover-ghost");
    else list.push("card--hover");
  }
  if (props.glow) list.push("card--glow");
  const extra = attrs.class;
  if (!extra) return list;
  if (Array.isArray(extra)) return [...list, ...extra];
  return [...list, extra];
});

const passthrough = computed(() => {
  const { class: _c, ...rest } = attrs as Record<string, unknown>;
  return rest;
});
</script>

<template>
  <component :is="tag" :class="mergedClass" v-bind="passthrough">
    <slot />
  </component>
</template>

<style scoped>
@reference "../assets/css/main.css";

.card {
  @apply relative overflow-hidden transition-all duration-500;
}

.card--default {
  @apply rounded-3xl border border-white/10 bg-linear-to-b from-white/6 to-white/2 p-8 backdrop-blur;
}

.card--stat {
  @apply rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7;
}

.card--ghost {
  @apply rounded-2xl border border-white/5 bg-white/[0.02] p-5;
}

.card--hover {
  @apply hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow-sm;
}

.card--hover-subtle {
  @apply hover:border-brand/40;
}

.card--hover-ghost {
  @apply hover:border-brand/30;
}

.card--glow {
  @apply shadow-glow-sm;
}

.card--hover.card--glow {
  @apply hover:shadow-glow;
}
</style>
