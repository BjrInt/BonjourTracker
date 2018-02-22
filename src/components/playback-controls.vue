<template>
  <div class="playback-controls">
    <div @click="togglePlay">
      <template v-if="isPlaying">
        pause
      </template>

      <template v-else>
        play
      </template>
    </div>

    <span class="bpm">{{ BPM }}</span>

    <div class="stop">Stop</div>

    <button @click="moreBPM">Mooooore !</button>
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
  .playback-controls{
    display: flex;
    justify-content: space-between;

    &>div{
      cursor: pointer;
    }
  }
</style>
