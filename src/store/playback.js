const playback = {
  state:{
    isPlaying: false,
    iterator: 0,
    BPM: 120
  },
  mutations:{
    Play(){
      !state.isPlaying
    }
  }
}

export default playback
