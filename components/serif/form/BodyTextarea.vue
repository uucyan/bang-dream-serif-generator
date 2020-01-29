<template lang="pug">
v-textarea.textarea(
  v-model='bodyText'
  @input='drawImage'
  label='本文'
  rows='4'
  color='#a4ded8'
  hint='白透明背景の枠内に表示するテキストです。右横が枠からはみ出る場合は改行してください。'
  outlined
  rounded
  auto-grow
  clearable
)
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    bodyText: {
      get () { return this.$store.state.canvas.body.text },
      set (value) { this.$store.commit('canvas/setBodyText', value) },
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
