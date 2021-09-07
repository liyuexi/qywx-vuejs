// initial state
const state = () => ({
  userToken: null,
  userInfo:null 
})

// getters
const getters = {
    userInfo: (state, getters) => {
      
        return state.userInfo
    },
    userToken: (state, getters) => {
        return state.userToken
   }
}

// actions
const actions = {
  async saveUser ({ commit, state }, userInfo) {
    commit('setUserToken', userInfo.token)
    commit('setUserInfo', userInfo)
  },
}

// mutations
const mutations = {
  setUserToken (state, userToken) {
    state.userToken = userToken
  },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

export default {
 // namespaced: true,
  state,
  getters,
  actions,
  mutations,
}