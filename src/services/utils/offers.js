const OFFERS = '/offers?'
const DEFAULT_PAGESIZE = 20

const param = (name, value) => [name, value].join('=')

export const offersUrl = args => ({
  categories,
  page = 0,
  pageSize = DEFAULT_PAGESIZE,
  search = null,
  type
}) => {
  const { category } = args || {}
  const params = [param('page', page), param('page_size', pageSize), param('type', type)]
  if (category !== undefined) {
    if (!categories) categories = category
    if (!Array.isArray(categories)) categories = [categories]
    categories.forEach(category => params.push(param('categories', category)))
  }
  if (search) params.push(param('search', encodeURIComponent(search)))
  return OFFERS + params.join('&')
}

export const weeklyDiscountUrl = position => {
  const params = [param('type', 'weekly')]
  if (position) {
    params.push(param('longitude', position.longitude))
    params.push(param('latitude', position.latitude))
  }
  return OFFERS + params.join('&')
}
