import axios from 'axios'
export const usersStore = {
  namespaced : true,
  state : () => ({
    users : [],
    friends : [],
    suggestedFriends : [],
  }),
  getters: {
    users(state:any){
      return state.users
    },
    friends(state:any){
      return state.friends
    },
    suggestedFriends(state:any){
      return state.suggestedFriends
    }
  },
  mutations: {
    SET_USERS(state:any, data:any){
      state.users = data
    },
    SET_FRIENDS(state:any, data:any){
      state.friends = data
    },
    SET_SUGGESTED_FRIENDS(state:any, data:any){
      state.suggestedFriends = data
    }
  },
  actions : {
    fetchUsers( {commit}:any,){
      axios.get('/users')
        .then(res => {
          commit('SET_USERS', res.data);
        })
        .catch(err => {
          console.error(err);
        })
    },
    fetchFriends ({commit}:any ){
      axios.get('/users', {
        params : {
          is_friend : true
        }
      })
        .then(res => {
          commit('SET_FRIENDS', res.data)
        })
        .catch(err =>{
          console.error(err)
        })      
    },
    fetchSuggestedFriends({commit}:any){
      axios.get('/users', {
        params : {
          is_suggested_friend : true
        }
      })
        .then(res => {
          commit('SET_SUGGESTED_FRIENDS', res.data)
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
}