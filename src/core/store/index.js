import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  userInfo: null
}
let mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}
let actions = {
  setUserInfo (context, userInfo) {
    context.commit('setUserInfo', userInfo)
  }
}
let modules = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
