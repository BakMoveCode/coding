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

function newFunction(fn, ...args) {
  if (typeof fn !== "function") {
    return false;
  }
  let obj = Object.create(fn.prototype);
  let result;
  result = fn.apply(obj, args);
  if (
    typeof result === "function" ||
    (typeof result === "object" && result !== null)
  ) {
    return result;
  } else {
    return obj;
  }
}
