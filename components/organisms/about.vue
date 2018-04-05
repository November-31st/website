<template lang="html">
  <section class="row about align-center relative">
    <about-gradient/>
    <div class="all-12 no-padding relative">
      <div class="container">
        <div class="row">
          <div class="desktop-8 desktop-offset-2 no-padding">
            <div class="row">
              <about-heading/>
              <about-showoff/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import aboutGradient from '~molecule/about-gradient.vue'
  import aboutHeading from '~molecule/about-heading.vue'
  import aboutShowoff from '~molecule/about-showoff.vue'
  export default {
    components: {
      aboutGradient,
      aboutHeading,
      aboutShowoff
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .about{padding-top: calc($gutter * 2.5)}
</style>
