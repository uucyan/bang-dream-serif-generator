<template lang="pug">
v-text-field.textarea(
  v-model='nameText'
  @input='drawImage'
  label='名前'
  color='#a4ded8'
  hint='マゼンタ背景色の枠内に表示するテキストです。右横が枠からはみ出る場合は名前のサイズを変更してください。'
  outlined
  rounded
  clearable
)
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    nameText: {
      get () { return this.$store.state.canvas.name.text },
      set (value) { this.$store.commit('canvas/setNameText', value) },
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
