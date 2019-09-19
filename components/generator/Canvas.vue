<template lang="pug">
canvas#canvas(ref='canvas' :width='size.width' :height='size.height')
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('canvas', [
      'size',
    ]),
  },

  mounted () {
    this.initCanvas(this.$refs.canvas.getContext('2d'))
  },

  methods: {
    ...mapActions('canvas', {
      initCanvas: 'init',
    }),
  },
}
</script>

<style lang="scss" scoped>
#canvas {
  @media screen and (max-width: 525px) {
    width: 100%;
  }
}
</style>
