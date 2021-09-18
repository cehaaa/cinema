import axios from 'axios'
export const usersStore = {
  namespaced : true,
  state : () => ({
    users : []
  }),
  getters: {
    users(state:any){
      return state.users
    }
  },
  mutations: {
    SET_USERS(state:any, data:any){
      state.users = data
    }
  },
  actions : {
    fetchUsers( {commit}:any ){
      axios.get('/users')
        .then(res => {
          commit('SET_USERS', res.data);
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
}