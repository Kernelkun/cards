const API_BASE_ADDRESS = 'http://localhost:3004'

export const loadCards = (filter = '') => {
  let uri = `${API_BASE_ADDRESS}/cards`
  if (filter.length > 0) uri = `${uri}?rarity_like=${filter}`
  return fetch(uri, {
    method: 'GET'
  })
}

export const loadCardsById = id => {
  const uri = `${API_BASE_ADDRESS}/cards/${id}`
  return fetch(uri, {
    method: 'GET'
  })
}

export const patchCardById = ({ id, data }) => {
  const uri = `${API_BASE_ADDRESS}/cards/${id}`
  return fetch(uri, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH'
  })
}
