<template lang="html">
  <div class="tracks">
    <button @click="addTrack">Add a track</button>
    <div class="track_wrapper" v-for="track in tracks">
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

<style lang="scss">
</style>
