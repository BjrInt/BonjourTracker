import { TRACK_LENGTH, BPM2ms , initTrack, initRandomTrack, MAX_TRACKS, NOTE_FREQUENCIES } from '../lib.helpers.js'
import { playNote, createOscillator } from '../lib.audio.js'

const playback = {
  state:{
    isPlaying: false,
    iterator: 0,
    BPM: 120,

    tracks: []
  },

  mutations:{
    Play(state){
      state.isPlaying = true
      state.iterator = (state.iterator < TRACK_LENGTH - 1) ? state.iterator + 1 : 0

      state.tracks.forEach(x => {
        const n = x[state.iterator]
        
        const osc = createOscillator('sine', n.volume)
        playNote(osc, NOTE_FREQUENCIES[n.note] * (n.octave + 2))
      })
    },

    Pause(state){
      state.isPlaying = false

      window.clearInterval(window.playbackInterval)
    },

    Stop(state){
      state.isPlaying = false
      state.iterator = 0

      window.clearInterval(window.playbackInterval)
    },

    addTrack(state){
      if(state.tracks.length < MAX_TRACKS)
        state.tracks.push( initTrack() )
    },

    addRandomTrack(state){
      if(state.tracks.length < MAX_TRACKS)
        state.tracks.push( initRandomTrack() )
    },

    changeNote(state, {track, offset, note='-'}){
      console.log(track, offset, note)
      state.tracks[track][offset].note = note
    }
  },

  actions:{
    Play({state, commit, rootState}){
      window.playbackInterval = window.setInterval(() => commit('Play'), BPM2ms(this.getters.BPM))

      commit('Play')
    },

    Pause({commit}){ commit('Pause') },

    Stop({commit}){ commit('Stop') },

    addTrack({commit}){
      commit('addTrack')
    },

    addRandomTrack({commit}){
      commit('addRandomTrack')
    },

    changeNote({commit}, track, offset, note){
      commit('changeNote', {
        track,
        offset,
        note
      })
    }
  },

  getters:{
    BPM(state){
      return state.BPM
    }
  }
}

export default playback
