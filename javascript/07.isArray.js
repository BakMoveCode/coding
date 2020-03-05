/****
 *
 * Array.isArray模式实现
 */

Array.myIsArray = function(arr) {
  return Object.prototype.toString.call(arr) === "[object Array]";
};

console.log(Array.myIsArray([]));
