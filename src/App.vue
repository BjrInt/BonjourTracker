<template>
  <div id="app">
    <PlaybackControls />
    <Tracks />
  </div>
</template>

<script>
import PlaybackControls from './components/playback-controls.vue'
import Tracks from './components/tracks.vue'

export default {
  name: 'app',
  components: {
    PlaybackControls,
    Tracks
  }
}
</script>

<style lang="scss">

</style>
