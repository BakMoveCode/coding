/**
 * call，接受的是参数列表
 * 前提，this指向的是函数的运行环境，即函数所在的执行上下文，即谁调用了函数
 * 模拟的步骤分为：
 * 1. 将函数设为对象的函数
 * 2. 执行该函数
 * 3. 删除该函数
 * func.call(obj, ...args);
 * fun.call(thisArg, arg1, arg2, ...)
 */
Function.prototype.call2 = function(cxt) {
  cxt = cxt || window;
  // 首先要获取调用call的函数，用this可以获取
  cxt.fn = this;

  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(`arguments[${i}]`);
  }
  //eval会将传入的字符串当做js代码执行
  let result = eval(`cxt.fn(${args})`);
  delete cxt.fn;
  return result;
};

//////////////////////////////
// func.call(obj, ...args);
Function.prototype.myCall = function(ctx, ...args) {
  if (this === Function.prototype) {
    return false;
  }
  ctx = ctx || window;
  let fn = Symbol();
  ctx[fn] = this;
  let result = ctx[fn](...args);
  delete ctx[fn];
  return result;
};

// 测试代码
var value = 2;

var obj = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
}

bar.call2(null); // 2

bar.call2(obj, "kevin", 18);

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

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
