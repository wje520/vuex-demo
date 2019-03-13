import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import collection from './modules/collection'
Vue.use(Vuex);
const store=new Vuex.Store({
  modules:{
    list,
    collection
  }
})
export default store