<template lang="pug">
v-bottom-sheet(v-model='sheet', hide-overlay)
  template(v-slot:activator='{ on }')
    v-btn(v-on='on')
      span キャラ変更
      v-icon mdi-image-filter

  v-sheet.text-center.sheet(height='1000' max-height='1000')
    v-btn.mt-6(text='', color='error', @click='sheet = !sheet') 閉じる
    v-row
      v-col(cols='12', sm='6', offset-sm='3')
        v-card
          v-container(fluid='')
            v-row
              v-col.d-flex.child-flex(v-for='n in 18', :key='n', cols='4')
                v-card.d-flex(flat='', tile='')
                  v-img.grey.lighten-2(:src='`https://picsum.photos/500/300?image=${n * 5 + 10}`', :lazy-src='`https://picsum.photos/10/6?image=${n * 5 + 10}`', aspect-ratio='1')
                    template(v-slot:placeholder='')
                      v-row.fill-height.ma-0(align='center', justify='center')
                        v-progress-circular(indeterminate='', color='grey lighten-5')
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
.sheet {
  overflow-x: auto;
}
</style>
