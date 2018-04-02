<template lang="html">
  <div class="button-wrapper all-12">
    <j-button className="large rum_swizzle grey-darken-2-text UPPERCASE round-corner">get your awesome shit</j-button>
  </div>
</template>

<script>
  import jButton from '~atom/j-button.vue'
  export default {
    components: {
      jButton
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .button-wrapper{
    margin-top: calc($gutter * 2);
    margin-bottom: calc($gutter * -2);
    .button{
      box-shadow: 0 0 0 calc($gutter / 2) color($rum_swizzle a(30%));
      &:hover{box-shadow: 0 0 0 calc($gutter / 6) $rum_swizzle}
    }
  }
</style>
