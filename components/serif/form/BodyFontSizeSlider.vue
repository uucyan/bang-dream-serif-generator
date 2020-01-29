<template lang="pug">
v-slider(v-model='bodyFontSize' label='本文のサイズ' min='1' max='50' @input='drawImage' color='#a4ded8' track-color='#FFB6ECFF' thumb-label)
  template(v-slot:append='')
    v-text-field.mt-0.pt-0(v-model='bodyFontSize' hide-details single-line type='number' suffix='px' style='width: 60px')
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    bodyFontSize: {
      get () { return this.$store.state.canvas.body.font.size },
      set (value) { this.$store.commit('canvas/setBodyFontSize', value) },
    },
  },

  methods: {
    ...mapActions('canvas', [
      'drawImage',
    ]),
  },
}
</script>

<style lang="scss" scoped>
</style>
