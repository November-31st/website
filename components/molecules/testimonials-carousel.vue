<template lang="html">
  <div class="carousel-wrapper desktop-8 desktop-offset-2 laptop-12 tablet-12 mobile-12 relative">
    <qoutemark/>
    <carousel autoplay="true" loop="true" autoplayTimeout="6000" perPage="1" paginationEnabled="true" paginationActiveColor="#222121" paginationColor="#BDBDBD" paginationPadding="4" paginationSize="4">
      <slide v-for="cite in cites">
        <testimonial :cite="cite"/>
      </slide>
    </carousel>
  </div>
</template>

<script>
  import qoutemark from '~atom/qoutemark.vue'
  import testimonial from '~atom/testimonial.vue'
  export default {
    components: {
      testimonial,
      qoutemark
    },
    data () {
      return {
        cites: [
          {
            name: 'Colleen Hall',
            profile: 'https://randomuser.me/api/portraits/women/76.jpg',
            qoute: 'onsectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
            from: 'CEO at JustMadeup Company'
          },
          {
            name: 'Same Kuhn',
            profile: 'https://randomuser.me/api/portraits/men/22.jpg',
            qoute: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
            from: ''
          }
        ]
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/_vars.css";
  .carousel-wrapper{margin-top: calc($gutter * 1)}
  >>> .VueCarousel-pagination{
      ul{
        li{margin-top: calc($gutter / -2) !important}
      }
    }
  >>> .VueCarousel-slide{padding: 4rem 2.4rem 2.4rem}
</style>
