export const appStore = {
  namespaced : true,
  state : () => ({
    rightSidebar : true
  }),
  getters : {
    rightSidebar : (state: any): boolean => {
      return state.rightSidebar
    }
  },
  mutations :{
    SET_RIGHT_SIDEBAR_TOOGLE : (state: any, data:boolean) :void => {
      state.rightSidebar = data
    }
  },
  actions : {
    rightSidebarToogle( {commit} :any, data:boolean ) : void{
      commit('SET_RIGHT_SIDEBAR_TOOGLE', data)
    }
  }
}