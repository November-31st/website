<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "nav" | "footer";
  }>(),
  { variant: "nav" }
);

const wrapperClass = computed(() =>
  props.variant === "footer"
    ? "flex flex-col leading-tight"
    : "hidden flex-col leading-tight sm:flex"
);

const titleClass = computed(() =>
  props.variant === "footer"
    ? "text-base font-bold text-white"
    : "text-sm font-bold text-white"
);

const subtitleClass = computed(() =>
  props.variant === "footer"
    ? "text-xs text-ink-300"
    : "text-[11px] text-ink-300"
);
</script>

<template>
  <div :class="wrapperClass">
    <span :class="titleClass">۳۱ نوامبر</span>
    <span :class="subtitleClass">بنیاد نه چندان خیریه</span>
  </div>
</template>
