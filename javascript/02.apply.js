/**
 *
 * fn.apply(ctx, args)
 */

Function.prototype.apply2 = function(ctx, args) {
  if (typeof this !== "function") {
    return false;
  }
  ctx = ctx || window;
  let symbol = Symbol("ctx");
  ctx[symbol] = this;
  if (Array.isArray(args)) {
    ctx[symbol](args);
  } else {
    ctx[symbol]();
  }
  delete ctx[symbol];
};
