/***
 *
 *
 * let obj = new Obj()
 */

const newFunc = function(fn, ...args) {
  if (typeof fn !== "function") {
    return false;
  }
  let obj = Object.create(fn);
  let result = fn.apply(obj, args);
  if (typeof result === "object") {
    return result;
  }
  return obj;
};
