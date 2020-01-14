import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photolist:[]
  },
  mutations: {
    setphotolist(state , _data){
      state.photolist = _data
    }
  },
  actions: {

  }
})
