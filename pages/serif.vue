<template lang="pug">
v-layout.px-2.py-2.row.wrap
  v-flex.text-center
    Canvas

  v-flex.lg6.sm12.xs12.align-self-center
    v-layout.pt-2
      NameTextField

    v-layout.pt-2
      BodyTextarea

    v-layout
      v-expansion-panels
        v-expansion-panel(style='background-color: transparent; border-radius: 28px;')
          v-expansion-panel-header 名前の詳細設定
          v-expansion-panel-content
            v-layout.pt-2.text-center
              v-flex.pl-2.pr-2
                NameColorPicker
            v-layout.pt-2
              NameFontSizeSlider

    v-layout.pt-4
      v-expansion-panels
        v-expansion-panel(style='background-color: transparent; border-radius: 28px;')
          v-expansion-panel-header 本文の詳細設定
          v-expansion-panel-content
            v-layout.pt-2
              BodyColorPicker
            v-layout.pt-2
              BodyFontSizeSlider
</template>

<script>
import Canvas from '~/components/serif/Canvas'
import NameTextField from '~/components/serif/form/NameTextField'
import NameColorPicker from '~/components/serif/form/NameColorPicker'
import NameFontSizeSlider from '~/components/serif/form/NameFontSizeSlider'
import BodyTextarea from '~/components/serif/form/BodyTextarea'
import BodyColorPicker from '~/components/serif/form/BodyColorPicker'
import BodyFontSizeSlider from '~/components/serif/form/BodyFontSizeSlider'

export default {
  components: {
    Canvas,
    NameTextField,
    NameColorPicker,
    NameFontSizeSlider,
    BodyTextarea,
    BodyColorPicker,
    BodyFontSizeSlider,
  },
}
</script>

<style lang="scss" scoped>
</style>
