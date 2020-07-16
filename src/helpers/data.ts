import { isPlainObject } from './util'

// 接收到data,如果data是普通对象则JSon.stringfy(),不是就直接返回
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    debugger
    console.log('data', data)
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      debugger
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}
