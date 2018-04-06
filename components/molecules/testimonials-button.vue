<template lang="html">
  <div class="button-wrapper all-12">
    <j-button className="large tangerine_yellow yellow-darken-1-hover nero-text UPPERCASE round-corner">let's talk how to get you high</j-button>
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
    padding: calc($gutter * 2);
    .button{
      box-shadow: 0 0.4rem 3rem 0.2rem color($tangerine_yellow a(60%));
      &:hover{
        box-shadow: 0 0.4rem 3rem 0.4rem color($tangerine_yellow a(60%));
      }
    }
  }
</style>
