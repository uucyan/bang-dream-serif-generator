<template lang="pug">
//- v-app.overflow-hidden(dark='')
//-   v-app-bar(
//-     absolute
//-     color='#43a047'
//-     dark
//-     shrink-on-scroll
//-     prominent
//-     src='https://picsum.photos/1920/1080?random'
//-     fade-img-on-scroll
//-     scroll-target='#scrolling-techniques-5'
//-     scroll-threshold='100'
//-   )
//-     template(v-slot:img='{ props }')
//-       v-img(v-bind='props', gradient='to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)')
//-     v-app-bar-nav-icon
//-     v-toolbar-title Title
//-     .flex-grow-1
//-     v-btn(icon='')
//-       v-icon mdi-magnify
//-     v-btn(icon='')
//-       v-icon mdi-heart
//-     v-btn(icon='')
//-       v-icon mdi-dots-vertical
//-   v-content#scrolling-techniques-5.overflow-y-auto(style='max-height: 100vh; padding-top: 128px;')
//-     v-container
//-       nuxt
v-app(dark)
  //- v-app-bar(fixed app)
    //- v-toolbar-title(v-text='title')
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

    //- v-sheet#playground-example.overflow-y-auto(max-height='600')
    //-   v-container
    //-     nuxt
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
