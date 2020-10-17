// Immutable Update Patterns
// https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns

export const unshiftItemToArray = (array, item) => {
  const newArray = array.slice()
  newArray.splice(0, 0, item)
  return newArray
}

export const pushItemToArray = (array, item) => {
  const newArray = array.slice()
  newArray.splice(array.length, 0, item)
  return newArray
}

export const filterArray = (array, filterFunc) => {
  return array.filter(filterFunc)
}
