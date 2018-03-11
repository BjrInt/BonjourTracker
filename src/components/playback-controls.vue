<template>
  <div class="wrapper">
    <div class="playback-controls">
      <div>
        <template v-if="isPlaying">
          <span class="__pause actionbtn" @click="Pause"></span>
        </template>

        <template v-else>
          <span class="__play actionbtn" @click="Play"></span>
        </template>
      </div>

      <div class="progression">
        <span class="currentline">{{ iteration + 1}}</span> / <span class="totallines">{{ len }}</span>
      </div>

      <span class="__stop actionbtn" @click="Stop"></span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { TRACK_LENGTH } from '../lib.helpers'

let interval

export default {
  name: 'PlaybackControls',
  data: () => ({ len: TRACK_LENGTH }),
  computed:
    mapState({
      isPlaying: state => state.playback.isPlaying,
      BPM: state => state.playback.BPM,
      iteration: state => state.playback.iterator
    })
  ,
  methods:{
    ...mapActions(['Play', 'Pause', 'Stop'])
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    width: 100%;
    height : 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EEE;
    height : 10vh;
  }

  .actionbtn{
    transition: .25s;
    margin : 0 15px;
    cursor: pointer;
    font-size: 5vh;

    &:hover{
      color: #FFF;
      text-shadow: 1px 1px 5px rgba(0,0,0,.75);
    }
  }

  .playback-controls{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .progression{
    font-size: 5vh;
    display: flex;
    align-items: baseline;
    color: #888;

    span.currentline{
      color: #000;
    }

    span.totallines{
      font-size: 50%;
    }
  }
</style>
