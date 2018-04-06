<template lang="html">
  <section class="row testimonials align-center relative">
    <testimonials-button/>
  </section>
</template>

<script>
  import testimonialsButton from '~molecule/testimonials-button.vue'
  export default {
    components: {
      testimonialsButton
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .testimonials{
    height: 500px;
    padding-bottom: calc($gutter * 3);
    background: linear-gradient(to bottom, transparent 0%, $rum_swizzle 100%)}
</style>
