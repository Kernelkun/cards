import * as type from './Constants'

export const setFilter = filter => ({
  type: type.SET_FILTER,
  filter
})

export const setSearch = search => ({
  type: type.SET_SEARCH,
  search
})
