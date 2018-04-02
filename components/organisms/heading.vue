<template lang="html">
  <header>
    <div class="container-narrow">
      <div class="row align-content-middle">
        <div class="desktop-5 laptop-5">
          <navbar type="top"/>
        </div>
        <div class="desktop-2 laptop-2 row">
          <div class="desktop-6 desktop-offset-3">
            <logo/>
          </div>
        </div>
        <div class="desktop-5 laptop-5 align-right double-gaps no-gutter">
          <j-button type="small" className="small UPPERCASE rum_swizzle-text nero-text-hover rum_swizzle-hover thin-border smooth round-corner">get a shit</j-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import navbar from '~molecule/navbar'
  import logo from '~atom/logo'
  import jButton from '~atom/j-button'
  export default {
    components: {
      navbar,
      logo,
      jButton
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  header{
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    .button{
      font-weight: 700 !important;
      text-shadow: 0 0 5rem $nero;
    }
  }
</style>
