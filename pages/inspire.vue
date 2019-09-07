<template lang="pug">
v-layout.px-2.py-2.row.wrap
  v-flex.lg6.sm12.xs12.text-center
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
export default {
  data () {
    return {
      // フォントの設定
      font: {
        family: 'Meiryo',
        size: 25,
        lineHeightOffset: 4,
      },
      // TODO: 一旦固定にしてる
      imgsrc: 'image/chisato_shirasagi.png',
      // 実際に表示する画像サイズ（Canvas サイズもこれを使用する）
      size: {
        width: 525,
        height: 788,
      },
      context: null,
      name: '',
      body: '',
    }
  },
  mounted () {
    // Canvas の初期化
    this.initCanvas()
    // 画像描画
    this.drawImage()
  },
  methods: {
    /**
     * Canvas の初期化
     */
    initCanvas () {
      this.context = this.$refs.canvas.getContext('2d')
      this.context.textAlign = 'left'
      this.context.textBaseline = 'middle'
    },

    /**
     * 画像に名前を描画
     */
    drawName () {
      this.context.fillStyle = '#ffffff'
      this.context.fillText(this.name, 65, 616.1)
    },

    /**
     * 画像に本文を描画
     */
    drawBody () {
      this.context.fillStyle = '#000000'
      const body = this.body

      let lines = [body]

      if (body.includes('\n')) {
        lines = body.split('\n')
      }

      lines.forEach((line, idx) => {
        this.context.fillText(
          line,
          70, // X 座標
          657 + idx * (this.font.size + this.font.lineHeightOffset) // Y 座標
        )
      })
    },

    /**
     * 画像の描画
     */
    drawImage () {
      // Canvas のクリア
      this.context.clearRect(0, 0, this.size.width, this.size.height)

      const img = new Image()
      img.src = this.imgsrc
      img.onload = () => {
        this.context.drawImage(img, 0, 0, this.size.width, this.size.height)
        this.context.font = `${this.font.size}px '${this.font.family}'`
        this.drawName()
        this.drawBody()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#canvas {
  @media screen and (max-width: 525px) {
    width: 100%;
  }
}

.textarea {
  font-size: 18px;
}
</style>
