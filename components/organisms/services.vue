<template lang="html">
  <section class="row services align-center blue-grey-darken-3 relative">
    <services-gradient/>
    <div class="desktop-8 desktop-offset-2 laptop-8 laptop-offset-2 tablet-12 mobile-12 no-padding">
      <div class="container realtive">
        <div class="row">
          <services-heading/>
          <services-list/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import servicesGradient from '~molecule/services-gradient.vue'
  import servicesHeading from '~molecule/services-heading.vue'
  import servicesList from '~molecule/services-list.vue'
  export default {
    components: {
      servicesGradient,
      servicesHeading,
      servicesList
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .services{padding: calc($gutter * 3) *}
</style>
