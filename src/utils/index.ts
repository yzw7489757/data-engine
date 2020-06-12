
export function isObject(obj): obj is object {
  return Object.prototype.toString.call(obj) === '[object Object]'
}