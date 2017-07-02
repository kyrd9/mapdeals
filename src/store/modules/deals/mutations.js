export const fetch = (state, deals) => {
  state.splice(0, state.length)
  state.push(...deals)
}
