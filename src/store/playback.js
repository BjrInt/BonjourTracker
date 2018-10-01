import {
  TRACK_LENGTH,
  MAX_TRACKS,
  NOTE_FREQUENCIES,

  BPM2ms ,
  initTrack
} from '../lib.helpers.js'
import {
  playNote,
  createOscillator
} from '../lib.audio.js'

const playback = {
  state:{
    isPlaying: false,
    iterator: 0,
    BPM: 120,

    tracks: [],
    trackNameIterator: 0,
    openedOptions: null
  },

  mutations:{
    Play(state){
      state.isPlaying = true

      state.tracks.forEach(x => {
        const n = x.notes[state.iterator]

        if(n.note != '-' && n.note != '#'){
          const osc = createOscillator('sine', n.volume)
          playNote(osc, NOTE_FREQUENCIES[n.note] * Math.pow(2, n.octave))
        }
      })

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
    },

    addTrack(state){
      state.trackNameIterator++

      if(state.tracks.length < MAX_TRACKS){
        state.tracks.push({
          notes: initTrack(),
          name: 'Track ' + state.trackNameIterator,
          bgColor: '#000'
        })
      }
    },

    changeNote(state, {track, offset, note='-'}){
      state.tracks[track].notes[offset].note = note
    },

    deleteTrack(state, i){
      state.tracks.splice(i, 1)
    },

    openTrackOptions(state, trackId){
      state.openedOptions = trackId
    },

    closeTrackOptions(state, e){
      if(e.target.className == 'global-overlay')
        state.openedOptions = null
    },

    closeTrackOptionsESC(state){
      state.openedOptions = null
    },

    setTrackColor(state, col){
      state.tracks[state.openedOptions].bgColor = col
    },

    setTrackName(state, n){
      state.tracks[state.openedOptions].name = n
    }
  },

  actions:{
    Play({state, commit, rootState}){
      window.playbackInterval = window.setInterval(() => commit('Play'), BPM2ms(this.getters.BPM))

      commit('Play')
    },

    Pause({commit}){ commit('Pause') },

    Stop({commit}){ commit('Stop') },

    addTrack({commit}){ commit('addTrack') },

    deleteTrack({commit}, i){ commit('deleteTrack', i) },

    setTrackColor({commit}, col){ commit('setTrackColor', col) },

    setTrackName({commit}, e){ commit('setTrackName', e.target.value) },

    changeNote({commit}, payload){
      commit('changeNote', {
        track: payload[0],
        offset: payload[1],
        note: payload[2]
      })
    },

    openTrackOptions({commit}, trackId){ commit('openTrackOptions', trackId) },

    closeTrackOptions({commit}, e){ commit('closeTrackOptions', e) },

    closeTrackOptionsESC({commit}){ commit('closeTrackOptionsESC') }
  },

  getters:{
    BPM(state){
      return state.BPM
    }
  }
}

export default playback
