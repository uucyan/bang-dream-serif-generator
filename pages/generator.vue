<template lang="pug">
v-layout.px-2.py-2.row.wrap
  //- v-bottom-navigation(scroll-target='#scroll-area-1' absolute grow color='teal')
  //-   v-btn
  //-     span サイトについて
  //-     v-icon mdi-information-outline
  //-   v-btn
  //-     span 保存
  //-     v-icon mdi-download
  //-   v-bottom-sheet(v-model='sheet', inset='' hide-overlay)
  //-     template(v-slot:activator='{ on }')
  //-       v-btn(v-on='on')
  //-         span 編集
  //-         v-icon mdi-square-edit-outline
  //-     v-sheet.text-center
  //-       v-btn.mt-6(text='', color='error', @click='sheet = !sheet') 閉じる
  //-       div.pa-3(v-if='context != null')
  //-         v-text-field.textarea(v-model='name', outline hide-details label='名前', rows='3', color='#333', style='margin: auto;', @input='drawImage')
  //-         v-textarea.textarea(v-model='body', outline hide-details label='本文', rows='3', color='#333', style='margin: auto;', @input='drawImage')
  //-         v-layout
  //-           v-flex.mr-1
  //-             v-slider(v-model='font.size', label='フォントサイズ', color='#333', min='10', max='150', @input='drawImage')
  //-           v-flex.ml-2
  //-             v-text-field(v-model='font.size', hide-details color='#333', type='number', suffix='px', style='width: 56px;', @input='drawImage')
  //- v-flex#scroll-area-1.overflow-y-auto.text-center
  //-   canvas#canvas(:width='size.width' :height='size.height' ref='canvas')

  //- v-bottom-sheet(v-model='sheet', inset='')
  //-   template(v-slot:activator='{ on }')
  //-     v-btn(color='orange', dark='', v-on='on')
  //-       | Open Inset
  //-   v-sheet.text-center(height='200px')
  //-     v-btn.mt-6(text='', color='error', @click='sheet = !sheet') close
  //-     .my-3 This is a bottom sheet using the inset prop

  v-flex.text-center
    canvas#canvas(:width='size.width' :height='size.height' ref='canvas')
  v-flex.lg6.sm12.xs12.align-self-center(v-if='context != null')
    v-text-field.textarea(v-model='name', outline hide-details label='名前', rows='3', color='#333', style='margin: auto;', @input='drawImage')
    v-textarea.textarea(v-model='body', outline hide-details label='本文', rows='3', color='#333', style='margin: auto;', @input='drawImage')
    v-layout
      v-flex.mr-1
        v-slider(v-model='font.size', label='フォントサイズ', color='#333', min='10', max='150', @input='drawImage')
      v-flex.ml-2
        v-text-field(v-model='font.size', hide-details color='#333', type='number', suffix='px', style='width: 56px;', @input='drawImage')
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },

  computed: {
    ...mapState('canvas', [
      'context',
      'size',
      'font',
    ]),

    name: {
      get () { return this.$store.state.canvas.name },
      set (value) { this.$store.commit('canvas/setName', value) },
    },

    body: {
      get () { return this.$store.state.canvas.body },
      set (value) { this.$store.commit('canvas/setBody', value) },
    },
  },

  mounted () {
    this.initCanvas(this.$refs.canvas.getContext('2d'))
  },

  methods: {
    ...mapMutations('canvas', [
      'setContext',
    ]),

    ...mapActions('canvas', {
      initCanvas: 'init',
    }),

    ...mapActions('canvas', [
      'drawImage',
    ]),
  },
}
</script>

<style lang="scss" scoped>
#canvas {
  // height: 100%;
  // max-height: 100vh;
  // padding-bottom: 80px;
  @media screen and (max-width: 525px) {
    width: 100%;
  }
}

.textarea {
  font-size: 18px;
}
</style>
