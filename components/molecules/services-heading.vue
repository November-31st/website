<template lang="html">
  <div class="services-heading desktop-8 desktop-offset-2 laptop-12 tablet-12 mobile-12">
    <heading className="grey-lighten-5-text" hrColor="grey-lighten-5">Our Services</heading>
    <p class="sub-heading grey-lighten-5-text no-margin">quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
  </div>
</template>

<script>
  import heading from '~atom/heading.vue'
  export default {
    components: {
      heading
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .sup-heading{
    font-size: 1.2rem;
    font-weight: 700}
  .sub-heading{
    font-size: 1.2rem;
    line-height: 1.8}
</style>
