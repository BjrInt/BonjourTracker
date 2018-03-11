import { TRACK_LENGTH, BPM2ms } from '../lib.helpers.js'

const playback = {
  state:{
    isPlaying: false,
    iterator: 0,
    BPM: 120
  },

  mutations:{
    Play(state){
      state.isPlaying = true
      state.iterator = (state.iterator < TRACK_LENGTH - 1) ? state.iterator + 1 : 0
    },

    Pause(state){
      state.isPlaying = false

      window.clearInterval(window.playbackInterval)
    },

    Stop(state){
      state.isPlaying = false
      state.iterator = 0

      window.clearInterval(window.playbackInterval)
    }
  },

  actions:{
    Play({commit}){
      window.playbackInterval = window.setInterval(() => {commit('Play')}, BPM2ms(this.getters.BPM))

      commit('Play')
    },

    Pause({commit}){ commit('Pause') },

    Stop({commit}){ commit('Stop') }
  },

  getters:{
    BPM(state){
      return state.BPM
    }
  }
}

export default playback
