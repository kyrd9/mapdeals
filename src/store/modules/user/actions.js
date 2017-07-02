import * as api from '@/lib/api'

export const login = ({commit}, {email}) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => api.login(email).then((user) => {
      commit('login', user)
      resolve()
    }).catch(reject), 250)
  )
}

export const logout = ({ commit }) => {
  commit('logout')
  return Promise.resolve()
}
