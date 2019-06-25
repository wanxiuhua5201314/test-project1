import Vue from 'vue'
import Vuex from 'vuex'
import vueStore1 from './vuexIndex1'
import vueStore2 from './vuexIndex2'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    vueStore1,
    vueStore2
  }
})
export default store
