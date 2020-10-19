import * as type from 'actions/async/Cards/Constants'

const initialState = {
  list: [],
  error: '',
  loading: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_CARDS_STARTED: {
      return {
        ...state,
        loading: true
      }
    }
    case type.GET_CARDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: action.data
      }
    }
    case type.GET_CARDS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    default:
      return state
  }
}

export default authReducer
