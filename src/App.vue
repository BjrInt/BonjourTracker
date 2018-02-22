<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <PlaybackControls />
  </div>
</template>

<script>
import PlaybackControls from './components/playback-controls.vue'

export default {
  name: 'app',
  components: {
    PlaybackControls
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
