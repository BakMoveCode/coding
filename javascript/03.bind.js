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

// 没有测试通过啊
Function.prototype.bind2 = function(ctx, ...args1) {
  if (typeof this !== "function") {
    return false;
  }
  let _this = this;

  const aFun = function(args2) {
    if (this instanceof aFun) {
      _this.apply(this, args1.concat(args2));
    } else {
      _this.apply(ctx, args1.concat(args2));
    }
  };
  const bFun = function() {};
  bFun.prototype = this.prototype;
  aFun.prototype = new bFun();
  return aFun;
};
