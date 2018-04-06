<template lang="html">
  <div class="services-grad"></div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .services-grad{
    position: absolute;
    top: 0; left: 0;
    size: 100%;
    overflow: hidden;
    &:after,
    &:before{
      content: '';
      position: absolute;
      padding-top: 30%;
      transform: skewY(10deg);
      user-select: none}
    &:after{
      right: 0; top: -25%;
      width: 50%;
      background: linear-gradient(-20deg, color($aero_blue shade(40%) a(10%)) 0%, transparent 40%)}
    &:before{
      left: 0; bottom: -25%;
      width: 50%;
      background: linear-gradient(160deg, color($aero_blue shade(40%) a(10%)) 0%, transparent 40%)}
  }
</style>
