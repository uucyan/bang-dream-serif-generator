<template lang="pug">
//- v-layout.wrap.align-center.text-center.justify-center.container
  //- v-flex.lg12.sm12.xs12.text-center.justify-center.align-center
    //- v-img(src="~/assets/image/logo.svg")
  img.logo(src="~/assets/image/logo.svg")
v-layout.wrap.container
  //- v-flex.justify-center.align-center.justify-sm-center.align-sm-center.text-center
  nuxt-link(to="/generator")
    img.logo(src="~/assets/image/logo.svg")
  //- v-flex
  //- v-layout.row.wrap
  //-   v-btn(rounded='', color='primary', dark='') つかう
  //-   v-btn(rounded='', color='primary', dark='') このサイトについて

</template>

<script>
export default {
  data () {
    return {
    }
  },

  mounted () {
  },

  methods: {
  },
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.logo {
  filter: drop-shadow(10px 10px 0px rgba(0, 0, 0, 0.4));
  @media screen and (max-width: 738px) {
    width: 100%;
  }
}
</style>
