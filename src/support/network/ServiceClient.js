import { API_CALL, ServiceCallFromObject } from './ServiceCallAction'
import NetClient from './ServiceAxiosNetClient'

class ServiceClient {
  constructor (
    baseUrl,
    store,
    next,
    manageGeneralErrors = () => undefined,
    authRequestInterceptor = () => undefined,
    authResponseInterceptor = () => undefined,
    checkConnectionLost = undefined
  ) {
    this.store = store
    this.next = next
    this.baseUrl = baseUrl
    this.authRequestInterceptor = authRequestInterceptor
    this.authResponseInterceptor = authResponseInterceptor
    this.manageGeneralErrors = manageGeneralErrors
    this.checkConnectionLost = checkConnectionLost
  }

  onInnerSuccess = call => response => {
    const transformedResponse = call.transformResponseDataWithState(response, this.store.getState())
    this.next({
      type: call.successReqType,
      response: transformedResponse
    })
    call.onSuccess(transformedResponse)
  }

  onInnerFailure = call => error => {
    this.next({
      type: call.failureReqType,
      error
    })
    call.onFailure(error)
  }

  onInnerFinish = call => () => {
    call.onFinish()
  }

  executeAction = action => {
    if (!action) return

    const apiCallAction = action[API_CALL]
    if (!apiCallAction) {
      this.next(action)
      return
    }

    if (this.checkConnectionLost !== undefined) {
      this.checkConnectionLost(this.next)
    }

    const call = ServiceCallFromObject(apiCallAction)

    let { body } = call
    if (call.setBodyFromState) {
      body = call.setBodyFromState(this.store.getState())
    }

    const onInnerSuccess = this.onInnerSuccess(call)
    const onInnerFailure = this.onInnerFailure(call)
    const onInnerFinish = this.onInnerFinish(call)

    this.next({ type: call.startedReqType })
    const netClient = new NetClient(
      this.baseUrl,
      call.auth,
      this.authRequestInterceptor(this),
      this.authResponseInterceptor(this),
      this.manageGeneralErrors(this)
    )
    netClient.makeCall(
      call.setEndpointFromState(this.store.getState()),
      call.method,
      body,
      call.getHeadersFromState(this.store.getState()),
      onInnerSuccess,
      onInnerFailure,
      onInnerFinish
    )
  }
}

export default ServiceClient
