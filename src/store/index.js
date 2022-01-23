import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    posts,
    auth
  }
})

export default store