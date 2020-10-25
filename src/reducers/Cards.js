import * as type from 'actions/async/Cards/Constants'
import { SET_FILTER } from 'actions/sync/Cards/Constants'

const initialState = {
  card: {},
  error: '',
  list: [],
  loading: false,
  search: '',
  filter: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_CARDS_BY_ID_STARTED:
    case type.GET_CARDS_BY_ID_STARTED:
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
    case type.GET_CARDS_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        card: action.data[0]
      }
    }
    case type.SET_CARDS_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        card: action.data[0]
      }
    }
    case type.SET_CARDS_BY_ID_FAILURE:
    case type.GET_CARDS_BY_ID_FAILURE:
    case type.GET_CARDS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    case SET_FILTER: {
      return {
        ...state,
        filter: action.filter
      }
    }
    default:
      return state
  }
}

export default authReducer
