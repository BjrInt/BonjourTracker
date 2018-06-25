<template lang="html">
  <div class="wrapper">
    <div class="track_add_control">
      <span @click="addTrack"
            :class="tracks.length < MAX_TRACKS ? 'addtrack' : 'addtrack disabled'">+ add track</span>

      <span class="maxtrackreached">
        <template v-if="tracks.length >= MAX_TRACKS">Max number of tracks reached</template>
      </span>
    </div>

    <div class="tracks-wrapper">
      <div v-if="tracks.length > 0">
        <div class="track-header" />

        <ul class="linelabels">
          <li class="n-line" v-for="n in TRACK_LENGTH">{{n}}</li>
        </ul>
      </div>

      <div class="tracks" v-for="(track, iTrack) in tracks">
        <div class="single-track">
          <div class="track-header">
            <div class="track-name">{{track.name}}</div>

            <div class="track-modifiers">
              <span class="__settings" />
              <span class="__delete" @click="deleteTrack(iTrack)" />
            </div>
          </div>

          <ul>
            <li v-for="(ni, i) in track.notes">
              <div class="line" :class="{isplaying:(iteration == i && isPlaying)}">
                <span class="note"
                      @click="changeNote([iTrack, i, '-'])"
                      :style="{color: colorizeNote(ni.note, ni.octave)}">
                  {{ni.note.padEnd(2, '&nbsp;')}} {{ ni.octave }}
                </span>
                <span class="volume">{{ String(ni.volume).padEnd(2, '&nbsp') }}</span>
                <span class="cmd">--</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {
  MAX_TRACKS,
  TRACK_LENGTH,
  colorizeNote
} from '../lib.helpers'
import TrackOptions from './track-options.vue'

console.log(colorizeNote('b', 3))

export default {
  name: 'Tracks',
  data: () => ({
    MAX_TRACKS,
    TRACK_LENGTH
  }),
  computed:
    mapState({
      tracks: state => state.playback.tracks,
      iteration: state => state.playback.iterator,
      isPlaying: state => state.playback.isPlaying
    })
  ,
  methods:{
    ...mapActions([
      'addTrack',
      'changeNote',
      'deleteTrack'
    ]),
    colorizeNote
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

*{
  box-sizing: border-box;
}

.wrapper{
  background: #FFF;
  box-shadow: -2px 0 12px rgba(0,0,0,.2);
  height : 90vh;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
}

.tracks-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  width : 85%;
  min-width: 1100px;
  margin: 0 auto;
}

.tracks{
  flex-grow: 1;
  max-width: 50%;
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
  margin: 50px auto;
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
  padding : 3px 5px;

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

  &.isplaying{
    background: #FFF;
    filter: invert(1);
  }
}

.maxtrackreached{
  margin: 15px 0 0 0;
  color: #c42c11;
  animation : maxtracks 2s linear alternate infinite;
}

.track-header{
  background: #000;
  width: 100%;
  border: 1px solid #FFF;
  padding: 0 5px;
  color : #FFF;
  display: flex;
  align-items: center;
  height : 32px;
  justify-content: space-between;

  .track-modifiers{
    [class^="__"]{
      cursor: pointer;
      display: inline-block;

      &:first-child{
        margin-right : 5px;
      }
    }
  }

  .track-name{
    overflow: hidden;
    text-overflow: ellipsis;
    width : 100px;
  }
}
</style>
