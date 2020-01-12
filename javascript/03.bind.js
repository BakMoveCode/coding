/****
 *
 *
 * let fun = fn.bind(obj, args)
 *
 * new fun
 */

Function.prototype.bind2 = function(obj, ...args1) {
  if (typeof this !== "function") {
    return false;
  }
  let _this = this;
  return function Fn2(...args2) {
    if (this instanceof Fn2) {
      _this.apply(this, args1.concat(args2));
    } else {
      _this.apply(obj, args1.concat(args2));
    }
  };
};
