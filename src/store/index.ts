import { createStore } from 'vuex'

import {appStore} from './app'
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
    "users-store": usersStore,
    "app-store" : appStore,
  }
})
