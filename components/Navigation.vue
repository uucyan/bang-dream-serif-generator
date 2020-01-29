<template lang="pug">
v-bottom-navigation(scroll-target='#container' absolute grow color='teal')
  Save
  CharacterChange
</template>

<script>
import Save from '~/components/serif/Navigation/Save'
import CharacterChange from '~/components/serif/Navigation/CharacterChange'

export default {
  components: {
    Save,
    CharacterChange,
  },
}
</script>

<style lang="scss" scope>
</style>
