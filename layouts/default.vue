<template lang="pug">
v-app(dark)
  v-content.body
    nuxt-link(to="/")
      v-app-bar(collapse absolute scroll-target="#container")
        img.logo(src="~/assets/image/logo.svg")

    v-container#container.overflow-y-auto(style='max-height: 100vh; max-width: 100vw; padding-bottom: 80px;')
      nuxt

    Navigation
</template>

<script>
import Navigation from '~/components/Navigation'

export default {
  components: {
    Navigation,
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
