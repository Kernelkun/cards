import axios from 'axios/index'

class NetClient {
  constructor (
    baseUrl,
    auth,
    authRequestInterceptor,
    authResponseInterceptor,
    manageGeneralErrorsInterceptor = error => error
  ) {
    this.instance = axios.create({
      baseURL: baseUrl,
      responseType: 'json',
      timeout: 120000,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json, text/plain, */*'
      },
      data: ''
    })

    this.retries = 1

    this.instance.interceptors.response.use(
      response => response,
      error => {
        // Logger.log(error.response)
        // Logger.log(error.request)
        // Logger.log(error.message)
        let outError = error
        if (manageGeneralErrorsInterceptor) {
          outError = manageGeneralErrorsInterceptor(outError)
        }
        return Promise.reject(outError)
      }
    )

    if (auth) {
      this.instance.interceptors.request.use(config => {
        return authRequestInterceptor ? authRequestInterceptor(config) : config
      })
      this.instance.interceptors.response.use(
        response => response,
        error => {
          if (this.retries > 0 && authResponseInterceptor) {
            this.retries -= 1
            return authResponseInterceptor(error).then(config => {
              return axios(config)
            })
          }
          return Promise.reject(error)
        }
      )
    }

    this.makeCall = (
      url,
      method,
      body,
      headers,
      onSuccess = () => {},
      onFailure = () => {},
      onFinish = () => {}
    ) => {
      const config = {
        url,
        method,
        data: body,
        headers
      }
      // Logger.log('start call')
      // Logger.log(config)
      this.instance(config)
        .then(response => {
          // Logger.log('success')
          // Logger.log(response)
          onSuccess(response.data)
        })
        .catch(error => {
          // Logger.log('error')
          // Logger.log(error)
          onFailure(error)
        })
        .then(() => {
          // Logger.log('finish')
          onFinish()
        })
    }
  }
}

export default NetClient
