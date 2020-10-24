const API_BASE_ADDRESS = 'http://localhost:3004'

export const loadCards = () => {
  const uri = `${API_BASE_ADDRESS}/cards`
  return fetch(uri, {
    method: 'GET'
  })
}
export const loadCardsById = id => {
  const uri = `${API_BASE_ADDRESS}/cards?_id=${id}`
  return fetch(uri, {
    method: 'GET'
  })
}
