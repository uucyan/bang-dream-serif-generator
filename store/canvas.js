export const state = () => ({
  // フォントの設定
  font: {
    family: 'Meiryo',
    size: 25,
    lineHeightOffset: 4,
  },
  // imgsrc: 'image/chisato_shirasagi.png',
  // imgsrc: 'image/kanon.png',
  // imgsrc: 'image/kanon_matsubara.png',
  // 実際に表示する画像サイズ（Canvas サイズもこれを使用する）
  character: {
    // TODO: 一旦固定にしてる
    src: 'image/kanon_matsubara.png',
    x: 0,
    y: 0,
    width: 525,
    height: 788,
  },
  inputArea: {
    src: 'image/input_area.png',
    x: 0,
    y: 600,
    width: 525,
    height: 192,
  },
  context: null,
  name: {
    text: '',
    color: '#FFFFFFFF',
    x: 65,
    y: 620,
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
  async drawImage ({ state, dispatch }) {
    if (state.context == null) {
      return
    }

    // Canvas の描画をクリア
    state.context.clearRect(0, 0, state.character.width, state.character.height)

    // 画像の読み込み完了までを非同期で行うようにする関数定義
    const loadImage = function (src) {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = (e) => reject(e)
        img.src = src
      })
    }

    // キャラクターの画像描画
    const characterImage = await loadImage(state.character.src)
    state.context.drawImage(characterImage, state.character.x, state.character.y, state.character.width, state.character.height)

    // 入力エリアの画像描画
    const inputAreaImage = await loadImage(state.inputArea.src)
    state.context.drawImage(inputAreaImage, state.inputArea.x, state.inputArea.y, state.inputArea.width, state.inputArea.height)

    // テキスト描画
    dispatch('drawName')
    dispatch('drawBody')
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
