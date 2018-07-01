<template lang="html">
  <div class="overlay" @click="(e) => {closeTrackOptions(e)}">
    <div class="wrapper">
      <div>
        <label>Track name:</label>
        <input type="text" :value="trackName" @input="setTrackName" />
      </div>
      <label>Track color:</label>
      <div class="track-colors-wrapper">
        <div class="color-picker"
             v-for="col in colors"
             @click="setTrackColor(col)"
             :style="{background:col}" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { getIterableArray } from '../lib.helpers'

export default {
  name: 'TrackOptions',
  methods: {
    ...mapActions([
      'closeTrackOptions',
      'setTrackColor',
      'setTrackName'
    ])
  },
  computed: mapState({
      openedOptions: state => state.playback.openedOptions,
      trackName: state => state.playback.tracks[state.playback.openedOptions].name
  }),
  data: () => ({
    colors: getIterableArray(6).map((x, i) => (
      'hsl('+ 60 * i +', 100%, 40%)'
    ))
  })
}
</script>

<style lang="scss" scoped>
.overlay{
  top : 0;
  right : 0;
  bottom : 0;
  left : 0;
  background: rgba(0,0,0, .4);
  position: fixed;
  z-index: 200;
}

.wrapper{
  width : 250px;
  background: #FFF;
  padding : 25px;
  position: absolute;
  top : 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 201;
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
</style>
