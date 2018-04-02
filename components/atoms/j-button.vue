<template lang="html">
  <router-link v-if="to && !href" :to="to" :title="title" :class="['button smooth', className]" :target="target" v-on:click.native="$emit('onClick')">
    <span>
      <slot></slot>
    </span>
  </router-link>
  <a v-else-if="!to && href" :href="href" :title="title" :class="['button smooth', className]" :target="target" v-on:click.native="$emit('onClick')">
    <span>
      <slot></slot>
    </span>
  </a>
  <span v-else-if="!to && !href" :class="['button smooth', className]" @click="$emit('onClick')">
    <span>
      <slot></slot>
    </span>
  </span>
</template>

<script>
  export default {
    props: {
      className: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      to: {
        type: Object,
        default: null
      },
      href: {
        type: String,
        default: ''
      },
      target: {
        type: String,
        default: '_self'
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .button{
    display: inline-block;
    cursor: pointer;
    outline: none !important;
    text-decoration: none;
    span{user-select: none}
    &.small{
      font-size: 1.2rem;
      font-weight: 400;
      padding: calc($gutter / 2) calc($gutter * 1.5)}
    &.medium{
      font-size: 1.8rem;
      font-weight: 500;
      padding: calc($gutter / 2) calc($gutter * 1.5)}
    &.large{
      font-size: 1.4rem;
      font-weight: 600;
      padding: calc($gutter / 1.1) calc($gutter * 2)}
  }

</style>
