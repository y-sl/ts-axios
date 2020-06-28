import { isPlainObject } from './utils'

// 接收到data,如果data是普通对象则JSon.stringfy(),不是就直接返回
export function transformRequest(data: any): any {
    if (isPlainObject(data)) {
        console.log('data', data)
        return JSON.stringify(data)
    }
    return data
}
