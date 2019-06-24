import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  showFooter: true,
  changebleNum: 0
}
const getters = {
  ishow (state) {
    return state.showFooter
  },
  getChangeNum () {
    return state.changebleNum
  }
}
const mutations = {
  show (state) {
    state.showFooter = true
  },
  hide (state) {
    state.showFooter = false
  },
  newNum (state, sum) {
    state.changebleNum += sum
  }

}
const store = new Vuex.Store({state, getters, mutations})
export default store
