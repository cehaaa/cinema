import axios from 'axios'
export const moviesStore = {
  namespaced : true,
  state : () => ({ 
    movies : []
  }),
  getters : {
    name(state: any) {
      return state.movies
    }
  },
  mutations : {
    SET_MOVIES(state:any, data:any) {
      state.movies = data
    }
  },
  actions : {
    fetchMovies( {commit} :any ){
      axios.get('/movies')
        .then(res => {
          commit('SET_MOVIES', res.data)
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
}

