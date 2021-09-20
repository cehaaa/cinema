import { createStore } from 'vuex'
import {moviesStore} from './movies'
import {usersStore} from './users'

export default createStore({
  state: {
  },
  getters : {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    "movies-store" : moviesStore,
    "users-store": usersStore
    
  }
})
