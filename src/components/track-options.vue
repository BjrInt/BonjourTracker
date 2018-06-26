<template lang="html">
  <div class="overlay" @click="(e) => {closeTrackOptions(e)}">
    <div class="wrapper">
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'TrackOptions',
  methods: {
    ...mapActions([
      'closeTrackOptions'
    ])
  },
  computed: mapState({
      openedOptions: state => state.playback.openedOptions
  }),
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
</style>
