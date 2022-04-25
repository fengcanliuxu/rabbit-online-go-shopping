import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'wuyuwei'
  },
  getters: {
    newName(state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName(state) {
      state.username = 'lisi'
    }
  },
  actions: {
  },
  modules: {
  }
})
