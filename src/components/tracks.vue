<template lang="html">
  <div class="wrapper">
    <button @click="addTrack">Add a track</button>
    <div class="tracks" v-for="track in tracks">
      <ul>
        <li v-for="ni in track">{{ni.note}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Tracks',
  computed:
    mapState({
      tracks: state => state.tracks.tracks,
    })
  ,
  methods:{
    ...mapActions({
      addTrack: 'addTrack'
    })
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  width: 100%;
  background: #FFF;
  box-shadow: -2px 0 12px rgba(0,0,0,.2);
  height : 90vh;
}
</style>
