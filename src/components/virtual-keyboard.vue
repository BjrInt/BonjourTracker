<template lang="html">
  <Modal :cb="e => closeVirtualKeyboard(e)">
    <h1>OCTAVE [{{currentOctave}}]</h1>

    <div class="wrapper">
      <div class="octave lower" @click="lowerOctave">&lt;</div>
      <div class="keyroll">
        <div v-for="key in KEYROLL"
             :class="key.endsWith('#') ? 'sharpnote' : 'note'"
             :key="key"
             @click="e => insertNote(key)"
             class="key">
             {{key}}
        </div>
      </div>
      <div class="octave upper" @click="upperOctave">&gt;</div>
    </div>
  </Modal>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import { NOTE_FREQUENCIES, onESCkey } from '../lib.helpers'

import Modal from './modal.vue'

export default {
  name: 'VirtualKeyboard',
  components: {
    Modal
  },
  methods: {
    ...mapActions([
      'closeVirtualKeyboard',
      'closeVirtualKeyboardESC',
      'insertNote',
      'upperOctave',
      'lowerOctave'
    ])
  },
  computed: mapGetters([
    'currentOctave'
  ]),
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

.octave{
  font-size: 40px;
  cursor: pointer;
  padding: 20px 5px;
  transition: .5s;
  border-radius: 5px;
  margin: 0 5px;

  &:hover{
    background: #000;
    color: #FFF;
  }
}

h1{
  text-align: center;
  padding: 0;
  margin: 0;
  font-size: 40px;
}

</style>
