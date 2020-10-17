import * as types from './Constants'

const initialState = () => ({
  currentLang: 'en'
})

const Reducer = (state = initialState(), action) => {
  switch (action.type) {
    case types.SET_I18N_MUST_UPDATE:
      return { ...state, currentLang: action.lang }
    default:
      return state
  }
}

export default Reducer
