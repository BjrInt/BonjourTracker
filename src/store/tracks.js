import { initTrack, MAX_TRACKS } from '../lib.helpers'

const tracks = {
  state:{
    tracks: []
  },

  mutations:{
    addTrack(state){
      if(state.tracks.length < MAX_TRACKS)
        state.tracks.push( initTrack() )
    }
  },

  actions:{
    addTrack({commit}){
      commit('addTrack')
    }
  }
}

export default tracks
