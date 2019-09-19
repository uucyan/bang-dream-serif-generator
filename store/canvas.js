export const state = () => ({
  // フォントの設定
  font: {
    family: 'Meiryo',
    size: 25,
    lineHeightOffset: 4,
  },
  // TODO: 一旦固定にしてる
  imgsrc: 'image/chisato_shirasagi.png',
  // imgsrc: 'image/kanon_matsubara.png',
  // 実際に表示する画像サイズ（Canvas サイズもこれを使用する）
  size: {
    width: 525,
    height: 788,
  },
  context: null,
  name: {
    text: '',
    color: '#FFFFFFFF',
    x: 65,
    y: 616.1,
    font: {
      family: 'Meiryo',
      size: 25,
    },
  },
  body: {
    text: '',
    color: '#000000FF',
    x: 70,
    y: 657,
    font: {
      family: 'Meiryo',
      size: 25,
    },
  },
})

export const getters = {
  getContext (state) {
    return state.context
  },
}

export const mutations = {
  setContext (state, context) {
    state.context = context
  },

  setNameText (state, value) {
    state.name.text = value
  },

  setNameColor (state, value) {
    state.name.color = value
  },

  setNameFontSize (state, value) {
    state.name.font.size = value
  },

  setBodyText (state, value) {
    state.body.text = value
  },

  setBodyColor (state, value) {
    state.body.color = value
  },

  setBodyFontSize (state, value) {
    state.body.font.size = value
  },
}

export const actions = {
  /**
   * Canvas の初期化
   */
  init ({ state, commit, dispatch }, context) {
    commit('setContext', context)
    state.context.textAlign = 'left'
    state.context.textBaseline = 'middle'

    dispatch('drawImage')
  },

  /**
   * 画像の描画
   */
  drawImage ({ state, dispatch }) {
    if (state.context == null) {
      return
    }

    // Canvas の描画をクリア
    state.context.clearRect(0, 0, state.size.width, state.size.height)

    const img = new Image()
    img.src = state.imgsrc
    img.onload = () => {
      state.context.drawImage(img, 0, 0, state.size.width, state.size.height)
      dispatch('drawName')
      dispatch('drawBody')
    }
  },

  /**
   * 画像に名前を描画
   */
  drawName ({ state }) {
    state.context.font = `${state.name.font.size}px '${state.name.font.family}'`
    state.context.fillStyle = state.name.color
    state.context.fillText(state.name.text == null ? '' : state.name.text, state.name.x, state.name.y)
  },

  /**
   * 画像に本文を描画
   */
  drawBody ({ state }) {
    state.context.font = `${state.body.font.size}px '${state.body.font.family}'`
    state.context.fillStyle = state.body.color
    const body = state.body.text == null ? '' : state.body.text

    let lines = [body]

    if (body.includes('\n')) {
      lines = body.split('\n')
    }

    lines.forEach((line, idx) => {
      state.context.fillText(
        line,
        state.body.x,
        state.body.y + idx * (state.body.font.size + state.font.lineHeightOffset)
      )
    })
  },
}
