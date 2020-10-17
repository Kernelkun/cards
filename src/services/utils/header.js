export const prepareHeadersFromState = state => {
  return {
    Authorization: `Bearer ${state.auth.token}`
  }
}
