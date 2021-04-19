<template lang="pug">
v-bottom-navigation(scroll-target='#container' absolute grow color='teal')
  Save
  CharacterChange
</template>

<script>
import Save from '~/components/serif/navigation/Save'
import CharacterChange from '~/components/serif/navigation/CharacterChange'

export default {
  components: {
    Save,
    CharacterChange,
  },
}
</script>

<style lang="scss" scope>
</style>
