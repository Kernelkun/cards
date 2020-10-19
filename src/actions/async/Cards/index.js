import { loadCards } from 'services/Cards'
import * as type from './Constants'

const parseCards = data => {
  return data.map(card => ({
    // eslint-disable-next-line no-underscore-dangle
    id: card._id,
    name: card.name,
    image: card.imageUrl,
    count: card.count
  }))
}

export const getCards = () => dispatch => {
  dispatch({ type: type.GET_CARDS_STARTED })
  loadCards()
    .then(response => response.json())
    .then(
      data => dispatch({ type: type.GET_CARDS_SUCCESS, data: parseCards(data) }),
      error =>
        dispatch({ type: type.GET_CARDS_FAILURE, error: error.message || 'Unexpected Error!!!' })
    )
}
