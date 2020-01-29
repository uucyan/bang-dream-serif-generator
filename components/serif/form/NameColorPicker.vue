<template lang="pug">
v-menu(v-model='menu' :close-on-content-click='false' :nudge-width='250' transition='scale-transition')
  template(v-slot:activator='{ on }')
    v-btn(v-on='on' outlined rounded block large color='#00000070')
      v-icon(left size='30' :color='nameColor') mdi-palette
      | 名前の色
  v-card
    v-list
      v-list-item
        h3 名前の色
      v-list-item
        v-color-picker.mx-auto(v-model='nameColor' @input='drawImage' :hide-mode-switch='true' :mode.sync='mode')
    v-divider
    v-card-actions
      .flex-grow-1
      v-btn(text='', @click='menu = false') 閉じる
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      menu: false,
      mode: 'hexa',
    }
  },

  computed: {
    nameColor: {
      get () { return this.$store.state.canvas.name.color },
      set (value) { this.$store.commit('canvas/setNameColor', value) },
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
