import axios from 'axios'

export const moviesStore = {
  namespaced : true,
  state : () => ({ 
    movies : []
  }),
  getters : {
    movies(state: any) {
      return state.movies
    }
  },
  mutations : {
    SET_MOVIES(state:any, data:any) {
      state.movies = data
    }
  },
  actions : {
    fetchMovies( {commit} :any, queryParams: any){
      axios.get('/movies', {
        params: {
          ...queryParams
        }
      })
        .then(res => {
          commit('SET_MOVIES', res.data)
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
}

