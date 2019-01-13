const arr = [1,2]
const str = "arley"
const obj = {}

console.log(Object.prototype.toString.call(arr) === "[object Array]")
console.log(arr.constructor === Array)
console.log(Object.prototype.toString.call(str) === "[object Array]")
console.log(str.constructor === Array)
console.log(Object.prototype.toString.call(obj) === "[object Array]")
console.log(obj.constructor === Array)
