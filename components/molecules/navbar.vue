<template lang="html">
  <nav>
    <ul v-if="type === 'top'" class="row no-gutter double-gaps no-margin no-list">
      <item>about</item>
      <item>testimonial</item>
      <item>services</item>
      <item>portfolio</item>
      <item>contact</item>
    </ul>
  </nav>
</template>

<script>
  import item from '~atom/navbar-item.vue'
  export default {
    props: {
      type: {
        type: String,
        default: 'top'
      }
    },
    components: {
      item
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
</style>
