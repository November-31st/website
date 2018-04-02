<template lang="html">
  <section class="row hero align-content-middle align-center">
    <heroHeading/>
    <heroDescription/>
    <heroButton/>
  </section>
</template>

<script>
  import heroHeading from '~molecule/hero-heading.vue'
  import heroDescription from '~molecule/hero-description.vue'
  import heroButton from '~molecule/hero-button.vue'
  export default {
    components: {
      heroHeading,
      heroDescription,
      heroButton
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .hero{
    min-height: 100vh;
    background-image: url('~assets/image/Hero_SMB_960x600.jpg'), linear-gradient(to bottom, $tangerine_yellow 0%, color($tangerine_yellow shade(40%)) 100%);
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    padding: calc($gutter * 4) * calc($gutter * 2)}
</style>
