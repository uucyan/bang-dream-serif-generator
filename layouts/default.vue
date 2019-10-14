<template lang="pug">
v-app(dark)
  v-content.body
    v-app-bar(collapse absolute scroll-target="#playground-example")
      img.logo(src="~/assets/image/logo.svg")

    v-container#playground-example.overflow-y-auto(style='max-height: 100vh; max-width: 100vw; padding-bottom: 80px;')
      nuxt

    v-bottom-navigation(scroll-target='#playground-example' absolute grow color='teal')
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
      title: 'バンドリ！ セリフジェネレーター！',
      sheet: false,
    }
  },
}
</script>

<style lang="scss" scope>
html {
  overflow: hidden;
}

.body {
  background: url("~assets/image/bg_pattern.png");
  background-size: 267px;
}

.logo {
  width: 100%;
  height: 100%;
}
</style>
