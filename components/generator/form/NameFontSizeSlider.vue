<template lang="pug">
v-slider(v-model='nameFontSize' label='名前のサイズ' min='1' max='30' @input='drawImage' color='#a4ded8' track-color='#FFB6ECFF' thumb-label)
  template(v-slot:append='')
    v-text-field.mt-0.pt-0(v-model='nameFontSize' hide-details single-line type='number' suffix='px' style='width: 60px')
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    nameFontSize: {
      get () { return this.$store.state.canvas.name.font.size },
      set (value) { this.$store.commit('canvas/setNameFontSize', value) },
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
