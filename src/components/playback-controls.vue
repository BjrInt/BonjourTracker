<template>
  <div class="wrapper">
    <div class="playback-controls">
      <div @click="togglePlay">
        <template v-if="isPlaying">
          <span class="__pause"></span>
        </template>

        <template v-else>
          <span class="__play"></span>
        </template>
      </div>

      <span class="bpm">{{ BPM }}</span>

      <span class="__stop"></span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PlaybackControls',
  computed:
    mapState({
      isPlaying: state => state.playback.isPlaying,
      BPM: state => state.playback.BPM
    })
  ,
  methods:{
    ...mapActions({
      togglePlay: 'Play',
      moreBPM: 'MoreBPM'
    })
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    width: 100%;
    height : 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EEE;
    height : 10vh;
  }

  .playback-controls{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 4vh;

    &>div{
      cursor: pointer;
    }
  }
</style>
