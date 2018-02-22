<template>
  <div class="playback-controls">
    <div v-if="isPlaying">pause</div>
    <div v-else>Play</div>
    <div class="stop">Stop</div>
  </div>
</template>

<script>
export default {
  name: 'PlaybackControls',
  data(){
    return {
      isPlaying: this.$store.state.playback.isPlaying
    }
  }
}
</script>

<style lang="scss" scoped>
  .playback-controls{
    display: flex;
    justify-content: space-between;
  }
</style>
