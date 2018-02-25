import VueX from 'vuex'
import Vue from 'vue'
import playback from './playback.js'
import tracks from './tracks.js'

Vue.use(VueX)
export default new VueX.Store({
  modules:{
    playback,
    tracks
  }
})
