function isType(type) {
    return function (obj) {
        return Object.prototype.toString.call(obj) === `[object ${type}] `
    }
}
const isArray = isType('Array');
const isString = isType('String');
console.log(isArray([1, 2, [3, 4]]);