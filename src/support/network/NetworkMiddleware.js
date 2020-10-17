import { manageError } from './ManageGeneralErrorsAxiosInterceptor'
import ServiceClient from './ServiceClient'
import { AuthRequestInterceptor } from './AuthAxiosInterceptor'

export function getServiceClientMiddleware (baseUrl) {
  return store => next => action => {
    const middleware = new ServiceClient(
      baseUrl,
      store,
      next,
      manageError,
      AuthRequestInterceptor,
      undefined,
      undefined
    )
    middleware.executeAction(action)
  }
}
