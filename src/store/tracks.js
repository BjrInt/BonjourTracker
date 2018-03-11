import { initTrack, initRandomTrack, MAX_TRACKS } from '../lib.helpers'

const tracks = {
  state:{
    tracks: []
  },

  mutations:{
    addTrack(state){
      if(state.tracks.length < MAX_TRACKS)
        state.tracks.push( initTrack() )
    },


    addRandomTrack(state){
      if(state.tracks.length < MAX_TRACKS)
        state.tracks.push( initRandomTrack() )
    }
  },

  actions:{
    addTrack({commit}){
      commit('addTrack')
    },

    addRandomTrack({commit}){
      commit('addRandomTrack')
    },

  }
}

export default tracks
