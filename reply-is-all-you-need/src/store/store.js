import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import firebase from '@/plugins/firebase'

Vue.use(Vuex)

// デフォルトのステートを変数に格納
const getDefaultState = () => {
  return {
    user: null,
  }
}

export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
    setLoginUser(state, user) {
      state.user = user
    },
    deleteLoginUser(state) {
      state.user = null
    },
    reset(state) {
      Object.assign(state, getDefaultState())
    },
  },
  actions: {
    setCurrentLesson({ commit }, currentLesson) {
      commit('setCurrentLesson', currentLesson)
    },
    async setLoginUser({ commit }, user) {
      commit('setLoginUser', user)
    },
    signIn() {},
    signOut() {},
    deleteLoginUser({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('reset')
        })
    },
  },
  getters: {
    user: state => (state.user ? state.user : null),
  },

  // vuex-persisted-state
  plugins: [
    createPersistedState({
      key: 'reply-is-all-you-need',
      storage: window.sessionStorage,
      paths: ['user'],
    }),
  ],
})
