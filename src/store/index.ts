import { createStore } from 'vuex'
import {moviesStore} from './movies'
import {usersStore} from './users'

export default createStore({
  state: {
    friends : [
      {
        name : "Luigi",
        profile_image : "220px-Ant-Man_poster.jpg",
        online_status : true
      },
      {
        name : "Jhon",
        profile_image : "TheAvengers2012Poster.jpg",
        online_status : false
      }
    ],
    friendSuggestions : [
      {
        name : "Mikey",
        profile_image : "220px-Ant-Man_poster.jpg",
        online_status : true
      },
      {
        name : "Kazutora",
        profile_image : "220px-Ant-Man_poster.jpg",
        online_status : false
      },
      {
        name : "Luffy",
        profile_image : "220px-Ant-Man_poster.jpg",
        online_status : true
      },
      {
        name : "Kobayasi",
        profile_image : "220px-Ant-Man_poster.jpg",
        online_status : false
      },    
    ]    
  },
  getters : {
    friends : (state) => {
      return state.friends
    },
    friendSuggestions : (state) => {
      return state.friendSuggestions
    }
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
