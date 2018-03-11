<template lang="html">
  <div class="wrapper">
    <div v-if="tracks.length > 0">
      <ul class="linelabels">
        <li class="n-line" v-for="n in trackLength">{{n}}</li>
      </ul>
    </div>

    <div class="tracks" v-for="track in tracks">
      <div class="single-track">
        <ul>
          <li v-for="ni in track">
            <div class="line">
              <span class="note">{{ni.note.padEnd(2, '&nbsp;')}}</span>
              <span class="volume">{{ String(ni.volume).padEnd(2, '&nbsp') }}</span>
              <span class="cmd">--</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="track_add_control">
      <span @click="addRandomTrack" :class="tracks.length < maxTracks ? 'addtrack' : 'addtrack disabled'">+ add track</span>
      <div class="maxtrackreached">
        <template v-if="tracks.length >= maxTracks">Max number of tracks reached</template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { MAX_TRACKS, TRACK_LENGTH } from '../lib.helpers'

export default {
  name: 'Tracks',
  data: () => ({
    maxTracks: MAX_TRACKS,
    trackLength: TRACK_LENGTH
  }),
  computed:
    mapState({
      tracks: state => state.tracks.tracks,
    })
  ,
  methods:{
    ...mapActions(['addTrack', 'addRandomTrack'])
  }
}
</script>

<style lang="scss" scoped>
@keyframes maxtracks {
  from{
    color : #dd5d47;
  }
  to{
    color : #7c0000;
  }
}

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

  &.linelabels{
    opacity: .6;
  }

  li{
    padding : 3px 5px;
    border-bottom : 1px solid #000;
    cursor: pointer;
    transition: .25s;

    &.n-line{
      font-family: 'Roboto Mono', monospace;
      padding : 3px 2px;
      cursor: auto;
    }

    &:hover:not(.n-line){
      background: rgba(0,0,0,.15);
    }
  }
}

.line{
  font-family: 'Roboto Mono', monospace;

  span{
    padding : 0 8px;
    border-left : 1px dotted #3d3d3d;
    display: inline-block;

    &:hover{
      background: rgba(0,0,0,.15);
    }
  }

  span:first-child{
    border : 0;
  }
}

.maxtrackreached{
  margin: 15px 0 0 0;
  color: #c42c11;
  animation : maxtracks 2s linear alternate infinite;
}
</style>
