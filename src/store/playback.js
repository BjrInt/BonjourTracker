const playback = {
  state:{
    isPlaying: false,
    iterator: 0,
    BPM: 120
  },

  mutations:{
    Play(state){
      state.isPlaying = !state.isPlaying
    },
    BPMChange(state, o){
      state.BPM += o.inc
    }
  },

  actions:{
    Play({commit}){
      commit('Play')
    },

    MoreBPM({commit}){
      commit({
        type: 'BPMChange',
        inc: 5
      })
    }
  }
}

export default playback
