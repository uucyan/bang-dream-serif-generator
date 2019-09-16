export const state = () => ({
  // フォントの設定
  font: {
    family: 'Meiryo',
    size: 25,
    lineHeightOffset: 4,
  },
  // TODO: 一旦固定にしてる
  // imgsrc: 'image/chisato_shirasagi.png',
  imgsrc: 'image/kanon_matsubara.png',
  // 実際に表示する画像サイズ（Canvas サイズもこれを使用する）
  size: {
    width: 525,
    height: 788,
  },
  context: null,
  name: '',
  body: '',
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

  setName (state, value) {
    state.name = value
  },

  setBody (state, value) {
    state.body = value
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
    state.context.font = `${state.font.size}px '${state.font.family}'`

    dispatch('drawImage')
  },

  /**
   * 画像の描画
   */
  drawImage ({ state, dispatch }) {
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
    state.context.fillStyle = '#ffffff'
    state.context.fillText(state.name, 65, 616.1)
  },

  /**
   * 画像に本文を描画
   */
  drawBody ({ state }) {
    state.context.fillStyle = '#000000'
    const body = state.body

    let lines = [body]

    if (body.includes('\n')) {
      lines = body.split('\n')
    }

    lines.forEach((line, idx) => {
      state.context.fillText(
        line,
        70, // X 座標
        657 + idx * (state.font.size + state.font.lineHeightOffset) // Y 座標
      )
    })
  },
}
