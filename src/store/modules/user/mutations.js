export const login = (state, user) => {
  state.id = user.id
  state.title = user.title
  state.token = user.token
  state.role = user.role
}

export const logout = (state) => {
  state.id = 0
  state.title = ''
  state.token = ''
}
