import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let dingweicity='北京';// eslint-disable-line no-unused-vars
dingweicity=localStorage.city;
export default new Vuex.Store({
  state: {
    cityName:dingweicity
  },
  mutations: {
    changeCity(state,city){
      state.cityName=city;
      localStorage.city=city;
    }
  },
  actions: {
  },
  modules: {
  }
})
