<template lang="html">
  <div class="desktop-10 desktop-offset-1 laptop-10 laptop-offset-1 tablet-12 mobile-12 no-padding">
    <ul class="row no-padding no-margin no-list">
      <li v-for="service in services" class="desktop-4 laptop-4 tablet-6 mobile-12">
        <service :detail="service"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import service from '~atom/service.vue'
  export default {
    components: {
      service
    },
    data () {
      return {
        services: [
          {
            icon: '',
            title: 'Hardware & Electronics',
            description: 'Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.'
          },
          {
            icon: '',
            title: 'Website Development',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.'
          },
          {
            icon: '',
            title: 'Creative Media Production',
            description: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  ul{justify-content: center}
</style>
