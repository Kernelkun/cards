import { setLoggedOut } from 'actions/sync/auth'

export const manageError = serviceClient => error => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response.status === 401) {
      // serviceClient.executeAction()
      serviceClient.next(setLoggedOut())
    }
    if (error.response.status === 404) {
      // serviceClient.executeAction()
    }
    if (error.response.status >= 500 && error.response.status < 600) {
      // serviceClient.executeAction()
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    throw new Error('Error before response.')
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new Error('Unmanaged Error.')
  }
  return {
    data: error.response.data,
    status: error.response.status
  }
}
