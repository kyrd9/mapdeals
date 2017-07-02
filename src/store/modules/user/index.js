import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default {
  namespaced: true,
  state: {
    id: undefined,
    title: undefined,
    token: undefined,
    coord: 0,
    role: {
      id: undefined,
      title: undefined
    }
  },
  getters,
  mutations,
  actions
}
