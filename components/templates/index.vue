<template lang="html">
  <main class="container-narrow">
    <hero/>
    <about/>
  </main>
</template>

<script>
  import hero from '~organism/hero.vue'
  import about from '~organism/about.vue'
  export default {
    components: {
      hero,
      about
    }
  }
</script>

<style lang="css">
</style>
