/**
 * https://juejin.im/post/5dc3894051882517a652dbd7
 * apply，接受的是参数数组
 * 前提，this的指向是函数的执行环境，即函数所在的执行上下文，即谁调用了函数
 * func.apply(thisArg, [argsArray])
 */

var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);

Function.prototype.apply2 = function(cxt, arr) {
  cxt = cxt || window;
  cxt.fn = this;

  let result;

  if (!arr) {
    result = cxt.fn;
  } else {
    let args = [];
    for (var i = 0; i < arr.length; i++) {
      args.push(`arr[${i}]`);
    }
    result = eval(`cxt.fn(${args})`);
  }

  delete cxt.fn;
  return result;
};

///////////////////////////////////////

// func.apply(obj, args);

Function.prototype.myApply = function(ctx, args) {
  if (this === Function.prototype) {
    return false;
  }
  ctx = ctx || window;
  let fn = Symbol();
  ctx[fn] = this;
  let result = null;
  if (Array.isArray(args)) {
    result = ctx[fn](...args);
  } else {
    result = ctx[fn];
  }

  delete ctx[fn];
  return result;
};

// 测试一下
var value = 2;

var obj = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  };
}

bar.apply2(null); // 2

console.log(bar.apply2(obj, "kevin", 18));
// 1

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

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
