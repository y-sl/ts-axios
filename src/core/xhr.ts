import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { parseHeaders } from '../helpers/headers'
import { createError } from '../helpers/error'
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  console.log('config', config)
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout, cancelToken } = config

    if (cancelToken) {
      cancelToken.promise.then(reason => {
        request.abort()
        reject(reason)
      })
    }

    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    request.open(method.toUpperCase(), url!, true)

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }
      if (request.status === 0) {
        return
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())

      const responseData = responseType && responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      handleResponse(response)

      function handleResponse(response: AxiosResponse) {
        if (response.status >= 200 && response.status < 300) {
          resolve(response)
        } else {
          console.log(
            'createError(`Request failed with status code ${response.status}`, config, null, request, response)',
            createError(`Request failed with status code ${response.status}`, config, null, request, response)
          )
          // console.log('response.status', response.status)
          reject(createError(`Request failed with status code ${response.status}`, config, null, request, response))
        }
      }
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    request.send(data)

    request.onerror = function handleError() {
      reject(createError(`Timeout of ${config.timeout} ms exceeded`, config, 'ECONNABORTED', request))
    }

    if (timeout) {
      request.timeout = timeout
    }

    request.ontimeout = function handleTimeout() {
      reject(createError(`Timeout of ${config.timeout} ms exceeded`, config, 'ECONNABORTED', request))
    }
  })
}
