const syncUserState = (store) => {
  const prefix = 'user/'
  const key = 'user'

  try {
    const user = JSON.parse(localStorage.getItem(key))
    store.commit('user/login', user)
  } catch (err) {}

  store.subscribe((mutation, state) => {
    if (mutation.type.startsWith(prefix)) {
      const value = JSON.stringify(state.user)
      localStorage.setItem(key, value)
    }
  })
}

export default [syncUserState]
