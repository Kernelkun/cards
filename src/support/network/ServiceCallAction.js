export const API_CALL = 'API_CALL'

export function ServiceCall () {
  this.startedReqType = undefined
  this.successReqType = undefined
  this.failureReqType = undefined
  this.setEndpointFromState = undefined
  this.method = undefined
  this.setBodyFromState = undefined
  this.getHeadersFromState = undefined
  this.onSuccess = () => {}
  this.onFailure = () => {}
  this.onFinish = () => {}
  this.auth = false
  this.transformResponseDataWithState = data => data

  this.validate = () => {
    if (typeof this.setEndpointFromState !== 'function') {
      throw new Error('Specify a function endpoint URL.')
    }

    if (typeof this.startedReqType !== 'string') {
      throw new Error('Expected a string started action type.')
    }

    if (typeof this.successReqType !== 'string') {
      throw new Error('Expected a success string action type.')
    }

    if (typeof this.failureReqType !== 'string') {
      throw new Error('Expected a failure string action type.')
    }

    if (this.onSuccess && typeof this.onSuccess !== 'function') {
      throw new Error(
        'If there is an on_success parameter it must be a function of type (response) -> {}.'
      )
    }

    if (this.onFailure && typeof this.onFailure !== 'function') {
      throw new Error(
        'If there is an on_failure parameter it must be a function of type (error) -> {}.'
      )
    }

    if (this.onFinish && typeof this.onFinish !== 'function') {
      throw new Error(
        'If there is an on_failure parameter it must be a function of type (error) -> {}.'
      )
    }
    return true
  }

  this.getAction = () => {
    const validation = this.validate()
    if (validation === true) {
      return {
        [API_CALL]: {
          startedReqType: this.startedReqType,
          successReqType: this.successReqType,
          failureReqType: this.failureReqType,
          setEndpointFromState: this.setEndpointFromState,
          method: this.method,
          setBodyFromState: this.setBodyFromState,
          getHeadersFromState: this.getHeadersFromState,
          onSuccess: this.onSuccess,
          onFailure: this.onFailure,
          onFinish: this.onFinish,
          auth: this.auth,
          transformResponseDataWithState: this.transformResponseDataWithState
        }
      }
    }
    throw validation
  }
}

export function ServiceCallFromObject (object) {
  const serviceCall = new ServiceCall()
  if ('startedReqType' in object) serviceCall.startedReqType = object.startedReqType
  if ('successReqType' in object) serviceCall.successReqType = object.successReqType
  if ('failureReqType' in object) serviceCall.failureReqType = object.failureReqType
  if ('setEndpointFromState' in object) {
    serviceCall.setEndpointFromState =
      object.setEndpointFromState !== undefined ? object.setEndpointFromState : () => {}
  }
  if ('method' in object) serviceCall.method = object.method
  if ('setBodyFromState' in object) serviceCall.setBodyFromState = object.setBodyFromState
  if ('getHeadersFromState' in object) {
    serviceCall.getHeadersFromState =
      object.getHeadersFromState !== undefined ? object.getHeadersFromState : () => {}
  }
  if ('onSuccess' in object) {
    serviceCall.onSuccess = object.onSuccess !== undefined ? object.onSuccess : () => {}
  }
  if ('onFailure' in object) {
    serviceCall.onFailure = object.onFailure !== undefined ? object.onFailure : () => {}
  }
  if ('onFinish' in object) {
    serviceCall.onFinish = object.onFinish !== undefined ? object.onFinish : () => {}
  }
  if ('auth' in object) serviceCall.auth = object.auth
  if ('transformResponseDataWithState' in object) {
    serviceCall.transformResponseDataWithState = object.transformResponseDataWithState
  }
  return serviceCall
}
