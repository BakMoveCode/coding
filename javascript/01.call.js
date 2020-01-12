/**
 *
 *fn.call(obj, arg1, arg2);
 */

Function.prototype.call2 = function(ctx, ...args) {
  if (typeof this !== "function") {
    return false;
  }
  ctx = ctx || window;
  let symbol = Symbol("ctx");
  ctx[symbol] = this;
  ctx[symbol](...args);
  delete ctx[symbol];
};
