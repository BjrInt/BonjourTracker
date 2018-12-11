<template lang="html">
  <div class="global-overlay" @click="e => closeVirtualKeyboard(e)">
    <div class="standard-modal wrapper">
      <div class="keyroll">
        <div v-for="key in KEYROLL"
             :class="key.endsWith('#') ? 'sharpnote' : 'note'"
             :key="key"
             @click="e => insertNote([key, 4])"
             class="key">
             {{key}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { NOTE_FREQUENCIES } from '../lib.helpers.js'

export default {
  name: 'VirtualKeyboard',
  methods: {
    ...mapActions([
      'closeVirtualKeyboard',
      'closeVirtualKeyboardESC',
      'insertNote'
    ])
  },
  data: () => ({
    KEYROLL: Object.keys(NOTE_FREQUENCIES)
  }),
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.keyroll{
  display: flex;
  margin: auto;
}

.key{
  border-radius: 5px;
  width: 24px;
  padding: 0 4px;
  border: 2px solid #000;
  cursor: pointer;
  transition: .3s;
  display: flex;
  padding-top: 12px;
  justify-content: center;
  text-transform: uppercase;

  &.sharpnote{
    height: 120px;
    background: #000;
    color: #FFF;
  }

  &.note{
    height: 160px;
    background: #FFF;
    color: #000;
  }

  &:hover{
    background: rgb(36, 173, 71);
  }
}

</style>
