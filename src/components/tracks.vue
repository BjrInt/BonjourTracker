<template lang="html">
  <div class="wrapper">
    <div class="tracks" v-for="track in tracks">
      <ul>
        <li v-for="ni in track">{{ni.note}} a </li>
      </ul>
    </div>

    <div class="track_add_control">
      <span @click="addTrack" :class="tracks.length < maxTracks ? 'addtrack' : 'addtrack disabled'">+ add track</span>
      <div class="maxtrackreached">
        <template v-if="tracks.length >= maxTracks">Max number of tracks reached</template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { MAX_TRACKS } from '../lib.helpers'

export default {
  name: 'Tracks',
  data: () => ({maxTracks: MAX_TRACKS}),
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.addtrack{
  text-transform: uppercase;
  font-size: 2vh;
  cursor: pointer;
  border: 3px solid #000;
  border-radius: .5vh;
  padding: .5vh 1vh;
  transition: .5s;
  user-select: none;

  &:hover:not(.disabled){
    background: #000;
    color: #FFF;
  }
  &.disabled{
    opacity: .5;
    cursor: auto;
  }
}

.track_add_control{
  margin-left: 50px;
}

ul{
  margin : 0 0 0 5px;
  padding: 0 5px;
  border-right : 1px solid #000;
  list-style: none;

  li{
    padding : 3px 10px;
    border-bottom : 1px solid #000;
    cursor: pointer;
    transition: .25s;

    &:hover{
      background: #DDD;
    }
  }
}
</style>
