<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "hero" | "nav" | "footer";
  }>(),
  { variant: "nav" }
);

const imgClass = computed(() => {
  switch (props.variant) {
    case "hero":
      return "h-24 w-auto drop-shadow-[0_0_40px_rgba(255,200,11,0.35)] sm:h-28";
    case "footer":
      return "h-12 w-auto";
    default:
      return "h-9 w-auto sm:h-10";
  }
});
</script>

<template>
  <img
    src="/logo.png"
    alt="بنیاد ۳۱ نوامبر"
    width="582"
    height="293"
    :class="imgClass"
  />
</template>
