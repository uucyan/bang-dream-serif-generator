<template lang="pug">
v-bottom-navigation(scroll-target='#container' absolute grow color='teal')
  v-btn
    span サイトについて
    v-icon mdi-information-outline
  v-btn
    span 保存
    v-icon mdi-download
  v-bottom-sheet(v-model='sheet', hide-overlay)
    template(v-slot:activator='{ on }')
      v-btn(v-on='on')
        span キャラ変更
        v-icon mdi-image-filter
    v-sheet.text-center
      v-btn.mt-6(text='', color='error', @click='sheet = !sheet') 閉じる
</template>

<script>

export default {
  data () {
    return {
      sheet: false,
    }
  },
}
</script>

<style lang="scss" scope>
</style>
