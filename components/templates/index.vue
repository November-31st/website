<template lang="html">
  <main class="container-narrow">
    <hero/>
    <about/>
    <testimonials/>
  </main>
</template>

<script>
  import hero from '~organism/hero.vue'
  import about from '~organism/about.vue'
  import testimonials from '~organism/testimonials.vue'
  export default {
    components: {
      hero,
      about,
      testimonials
    }
  }
</script>

<style lang="css">
</style>
