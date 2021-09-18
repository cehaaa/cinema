import axios from 'axios'

export const moviesStore = {
  namespaced : true,
  state : () => ({ 
    movies : [],
    bestMovies : [],
    onShowingMovies : []
  }),
  getters : {
    movies(state: any) {
      return state.movies
    },
    bestMovies(state:any){
      return state.bestMovies
    },
    onShowingMovies(state: any) {
      return state.onShowingMovies
    },
  },
  mutations : {
    SET_MOVIES(state:any, data:any) {
      state.movies = data
    },
    SET_BEST_MOVIES(state:any, data:any) {
      state.bestMovies = data
    },
    SET_ON_SHOWING_MOVIES(state:any, data:any) {
      state.onShowingMovies = data
    },    
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
    },
    fetchBestMovies( {commit}:any, queryParams:any){
      axios
        .get('/movies', {
          params : {
            is_best_movies : true,
            ...queryParams,
          }
        })
        .then(res => {
          commit('SET_BEST_MOVIES', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    fetchOnShowingMovies( {commit} : any, queryParams:any){
      axios
        .get('/movies', {
          params : {
            is_on_showing : true,
            ...queryParams,
          }
        })
        .then(res => {
          commit('SET_ON_SHOWING_MOVIES', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },    
  }
}

