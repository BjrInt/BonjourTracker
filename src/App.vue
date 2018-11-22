<template>
  <div id="app">
    <transition name="trackoptionstransition">
      <TrackOptions v-if="openedOptions != undefined" />
    </transition>

    <transition name="trackoptionstransition">
      <VirtualKeyboard v-if="openedVK != undefined" />
    </transition>

    <PlaybackControls />
    <Tracks />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import PlaybackControls from './components/playback-controls.vue'
import Tracks from './components/tracks.vue'
import TrackOptions from './components/track-options.vue'
import VirtualKeyboard from './components/virtual-keyboard.vue'

export default {
  name: 'app',
  computed: mapState({
    openedOptions: state => state.playback.openedOptions,
    openedVK: state => state.playback.openedVK,
  }),
  components: {
    PlaybackControls,
    Tracks,
    VirtualKeyboard,
    TrackOptions
  }
}
</script>

<style lang="scss">

</style>
