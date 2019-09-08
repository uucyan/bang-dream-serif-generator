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
  v-app-bar(fixed app)
    v-toolbar-title(v-text='title')
  v-content
    v-container
      nuxt
</template>

<script>

export default {
  data () {
    return {
      title: 'バンドリ！ セリフジェネレーター！',
    }
  },
}
</script>

<style lang="scss">
// html {
//   overflow: hidden;
// }
</style>
