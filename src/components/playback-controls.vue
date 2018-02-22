<template>
  <div class="playback-controls">
    <div class="play">
      <span v-if="isPlaying">pause</span>
      <span v-else>play</span>
    </div>
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
