<template lang="html">
  <div class="about-grad"></div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .about-grad{
    position: absolute;
    right: 0; bottom: -50%;
    width: 60vw;
    padding-top: 40%;
    transform: skewY(-10deg);
    background: linear-gradient(40deg, transparent 40%, $rum_swizzle 240%);
  }
</style>
