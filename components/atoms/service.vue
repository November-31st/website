<template lang="html">
  <div class="service relative white soft-corner align-left">
    <div class="icon circle-corner tangerine_yellow"></div>
    <h2 class="nero-text Capitalize">{{detail.title}}</h2>
    <p class="grey-darken-1-text no-margin">{{detail.description}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      detail: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .service{
    margin-top: calc($gutter * 1.5);
    box-shadow: 0 0.3rem 1.4rem 0 color($nero a(10%));
    padding: calc($gutter * 2) calc($gutter * 1.5) calc($gutter * 1.5);
    .icon{
      position: absolute;
      top: calc($gutter * -1.5); left: $gutter;
      size: calc($gutter * 3)}
    h2{
      margin: calc($gutter / 2) *;
      font-size: 1.8rem;
      line-height: 1.2}
    p{
      font-size: 1.2rem;
      line-height: 1.8}
  }
</style>
