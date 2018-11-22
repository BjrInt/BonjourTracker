<template lang="html">
  <div class="global-overlay" @click="(e) => { closeVirtualKeyboard(e) }">
    <div class="standard-modal wrapper">

    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'VirtualKeyboard',
  methods: {
    ...mapActions([
      'closeVirtualKeyboard',
      'closeVirtualKeyboardESC',
    ])
  },
  data: () => ({}),
  mounted(){
    window.addEventListener('keyup', e => onESCkey(e, this.closeVirtualKeyboardESC))
  },
  beforeDestroy(){
    window.removeEventListener('keyup', e => onESCkey(e, this.closeVirtualKeyboardESC))
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  width: 500px;
}
</style>
