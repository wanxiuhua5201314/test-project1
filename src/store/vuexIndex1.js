import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = {
  namespaced: true,
  state: {
    showFooter: true,
    changebleNum: 0
  },
  getters: {
    ishow (state) {
      return state.showFooter
    },
    getChangeNum (state) {
      return state.changebleNum
    }
  },
  mutations: {
    show (state) {
      state.showFooter = true
    },
    hide (state) {
      state.showFooter = false
    },
    newNum (state, sum) {
      state.changebleNum += sum
    },
    newNum1 (state, res) {
      state.changebleNum += res
    }
  },
  actions: {
    byCommitChange (context, value) {
      context.commit('newNum1', value)
    }
  }
}
export default store
