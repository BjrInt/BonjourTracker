import { initTrack } from '../helpers.lib.js'

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
  },

  actions:{

  }
}

export default tracks
