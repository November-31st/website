<template lang="html">
  <h2 :class="['Capitalize relative', className]">
    <slot></slot>
    <span class="hr"></span>
  </h2>
</template>

<script>
  export default {
    props: {
      className: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  h2{
    margin: 0;
    padding-bottom: calc($gutter * 3);
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 1.4;
    .hr{
      content: '';
      background: $tangerine_yellow;
      position: absolute;
      right: 0; left: 0;
      bottom: calc($gutter * 1.5);
      width: calc($gutter * 2); max-width: 20%;
      height: $thick-border-width;
      margin: auto}
  }
</style>
