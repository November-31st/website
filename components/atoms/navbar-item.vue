<template lang="html">
  <li :class="[type === 'top' ? 'UPPERCASE padding rum_swizzle-text nero-text-hover smooth' : 'blue', type]">
    <span @click="$emit('clicked')">
      <slot></slot>
    </span>
  </li>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'top'
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  li{
    &.top{
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: 700;
      text-shadow: 0 0 5rem $nero;
      &:hover{text-shadow: 0 0 5rem $rum_swizzle}
      span, a{
        text-shadow: inherit;
        display: block}
    }
  }
</style>
