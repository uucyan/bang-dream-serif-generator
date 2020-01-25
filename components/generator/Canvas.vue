<template lang="pug">
canvas#canvas(ref='canvas' :width='character.width' :height='character.height')
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('canvas', [
      'character',
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
