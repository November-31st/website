<template lang="html">
  <div class="about-heading desktop-8 desktop-offset-2 laptop-12 tablet-12 mobile-12">
    <p class="sup-heading tangerine_yellow-text UPPERCASE">Hang on your hat</p>
    <heading className="nero-text" hrColor="tangerine_yellow">We dream of wild when we're high,<br> and build 'em when we're sober</heading>
    <p class="sub-heading align-left grey-darken-1-text no-margin">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
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
