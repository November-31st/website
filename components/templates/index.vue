<template lang="html">
  <main class="container-narrow">
    <hero/>
    <about/>
    <testimonials/>
    <services/>
    <div style="height: 500px;"></div>
  </main>
</template>

<script>
  import hero from '~organism/hero.vue'
  import about from '~organism/about.vue'
  import testimonials from '~organism/testimonials.vue'
  import services from '~organism/services.vue'
  export default {
    components: {
      hero,
      about,
      testimonials,
      services
    }
  }
</script>

<style lang="css">
</style>
