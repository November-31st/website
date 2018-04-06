<template lang="html">
  <section class="row testimonials align-center relative">
    <div class="all-12 no-padding relative">
      <div class="container">
        <div class="row">
          <div class="desktop-10 desktop-offset-1 laptop-10 laptop-offset-1 tablet-12 mobile-12 no-padding">
            <div class="row">
              <testimonials-button/>
              <testimonials-carousel/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import testimonialsButton from '~molecule/testimonials-button.vue'
  import testimonialsCarousel from '~molecule/testimonials-carousel.vue'
  export default {
    components: {
      testimonialsButton,
      testimonialsCarousel
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .testimonials{
    padding-bottom: calc($gutter * 3);
    background: linear-gradient(to bottom, transparent 0%, $rum_swizzle 100%)}
</style>
