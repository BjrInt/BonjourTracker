import { initTrack } from '../lib.helpers.js'

const MAX_TRACKS = 4

const tracks = {
  state:{
    tracks: []
  },

  mutations:{
    addTrack(state){
      if(state.tracks.length < MAX_TRACKS)
        state.tracks.push( initTrack() )
    }
  }
}

export default tracks
