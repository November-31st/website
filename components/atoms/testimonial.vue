<template lang="html">
  <div class="testimonial relative soft-corner white">
    <div class="profile">
      <img :src="cite.profile" :alt="cite.name" class="responsive circle-corner">
    </div>
    <blockquote class="content double-padding no-margin">
      <p class="grey-darken-1-text no-margin">{{cite.qoute}}</p>
    </blockquote>
    <div class="source">
      <span class="tangerine_yellow-text">{{cite.name}}</span>
      <span v-if="cite.from" class="nero-text"> - {{cite.from}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      cite: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .testimonial{
    box-shadow: 0 0.3rem 1.4rem 0 color($nero a(10%));
    padding: calc($gutter * 2);
    .profile{
      position: absolute;
      top: calc($gutter * -2);
      right: 0; left: 0;
      size: calc($gutter * 4);
      margin: auto}
    .content{
      p{
        font-size: 1.2rem;
        line-height: 1.8}
    }
    .source{
      font-size: 1.3rem;
      font-weight: 600}
  }
</style>
