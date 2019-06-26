import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = {
  namespaced: true,
  state: {
    showFooter: true,
    changebleNum: 1
  },
  getters: {
    getChangeNum (state) {
      return state.changebleNum
    }
  },
  mutations: {
    newNum (state, sum) {
      state.changebleNum = state.changebleNum * sum
    },
    newNum1 (state, res) {
      state.changebleNum = state.changebleNum * res
    }
  },
  actions: {
    byCommitChange (context, value) {
      context.commit('newNum1', value)
    }
  }
}
export default store
