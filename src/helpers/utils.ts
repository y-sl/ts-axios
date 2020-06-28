const toString = Object.prototype.toString
// is 操作符的作用  如果函数返回true,则断定 参数 val 是 Date 类型
export function isDate(val: any): val is Date {
    return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
    return val !== null && typeof val === 'object'
}

export function isPlainObject(val: any): val is Object {
    return toString.call(val) === '[object Object]'
}
