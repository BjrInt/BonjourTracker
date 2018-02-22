import VueX from 'vuex'
import Vue from 'vue'
import playback from './playback.js'

Vue.use(VueX) 
export default new VueX.Store({
  modules:{
    playback
  }
})
