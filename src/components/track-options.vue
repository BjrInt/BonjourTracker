<template lang="html">
  <Modal :cb="e => closeTrackOptions(e)">
    <div class="wrapper">
      <div style="width:225px">
        <label>Track name:</label>
        <input type="text" :value="trackName" @input="setTrackName" />
      </div>

      <label>Track color:</label>
      <div class="track-colors-wrapper">
        <div class="color-picker"
             v-for="col in colors"
             :key="col"
             @click="setTrackColor(col)"
             :style="{background:col}" />
      </div>

      <label>Oscillator type:</label>
      <div>
        <select @change="e => setTrackOsc(e.target.value)">
          <option v-for="osc_type in OSC_TYPES"
                  :value="osc_type"
                  :key="osc_type"
                  :selected="osc_type === selectedOsc">
                  {{osc_type}}
          </option>
        </select>
      </div>
    </div>
  </Modal>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { getIterableArray, onESCkey } from '../lib.helpers'
import { OSC_TYPES, CUSTOM_WAVEFORMS } from '../lib.audio'

import Modal from './modal.vue'

export default {
  name: 'TrackOptions',
  components: {
    Modal
  },
  methods: {
    ...mapActions([
      'closeTrackOptions',
      'closeTrackOptionsESC',
      'setTrackColor',
      'setTrackName',
      'setTrackOsc'
    ])
  },
  computed: mapState({
      openedOptions: state => state.playback.openedOptions,
      trackName: state => state.playback.tracks[state.playback.openedOptions].name,
      selectedOsc: state => state.playback.tracks[state.playback.openedOptions].oscType
  }),
  data: () => ({
    colors: getIterableArray(6).map((x, i) => (
      'hsl('+ 60 * i +', 100%, 40%)'
    )),
    OSC_TYPES: [
      ...OSC_TYPES,
      ...Object.keys(CUSTOM_WAVEFORMS)
    ]
  }),
  mounted(){
    window.addEventListener('keyup', e => onESCkey(e, this.closeTrackOptionsESC))
  },
  beforeDestroy(){
    window.removeEventListener('keyup', e => onESCkey(e, this.closeTrackOptionsESC))
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  width : 250px;
}

.track-colors-wrapper{
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 200px;

  .color-picker{
    height : 25px;
    width : 25px;
    margin : 4px;
    cursor: pointer;
    transition: .5s;

    &:hover{
      transform: scale(1.15)
    }
  }
}

label{
  display: block;
  text-align: center;
  padding-top: 8px;
}

select{
  width: 100%;
}

input[type="text"]{
  width: 100%;
}
</style>
