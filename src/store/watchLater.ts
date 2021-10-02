export const watchLaterStore = {
  namespaced : true,
  state: () => ({
    watchLater : []
  }),
  getters : {
    watchLater(state:any){
      return state.watchLater
    }
  },
  mutations: {
    SET_WATCH_LATER: (state:any, val:any) => {
      state.watchLater.push(val)
    }
  },
  actions : {
    addToWatchLater( {commit}:any, data:any ){    
      commit('SET_WATCH_LATER', data)
    }
  }
}