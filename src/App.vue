<template>
  <div id="app">
    <h1>{{ msg }}</h1>

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
  },
  data: () => (
    {
      msg: 'Welcome to Your Vue.js App'
    }
  )
}
</script>

<style lang="scss">

</style>
