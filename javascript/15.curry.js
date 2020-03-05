/****
 *
 * 函数柯里化
 *
 * https://github.com/mqyqingfeng/Blog/issues/42
 *
 * https://cloud.tencent.com/developer/article/1431398
 *
 * 用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数
 *
 */

const curry = fn =>
  (judge = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...arg) => judge(...args, ...arg));

const sum = (a, b, c, d) => a + b + c + d;
const currySum = curry(sum);

// 测试代码
// currySum(1)(2)(3)(4); // 10
currySum(1, 2)(3)(4); // 10
// currySum(1)(2, 3)(4); // 10

const fn = curry(function(a, b, c) {
  console.log([a, b, c]);
});

fn("a", "b", "c"); // ["a", "b", "c"]
fn("a", "b")("c"); // ["a", "b", "c"]
fn("a")("b")("c"); // ["a", "b", "c"]
fn("a")("b", "c"); // ["a", "b", "c"]

/**
 * 简化版本
 */

const curry = function(fn) {
  let args = [];

  return function result(...rest) {
    if (rest.length === 0) {
      return fn(...args);
    } else {
      args.push(...rest);
      return result;
    }
  };
};

//
const curry = function(fn, length) {
  length = length || fn.length;
  return function(...args) {
    return args.length >= length
      ? fn.apply(this, args)
      : curry(fn.bind(this, ...args), length - args.length);
  };
};

// 缩减版本
const currying = fn =>
  (judge = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...arg) => judge(...args, ...arg));

// 缩减版本说明
const currying = function(fn) {
  return (judge = (...args) => {
    return args.length >= fn.length
      ? fn(...args)
      : (...arg) => judge(...args, ...arg);
  });
};

// Test
const fn = currying(function(a, b, c) {
  debugger;
  console.log([a, b, c]);
});

fn("a", "b", "c"); // ["a", "b", "c"]

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

const curry = function(fn) {
  let slice = Array.prototype.slice;
  let args = slice.call(arguments, 1);
  return function() {
    let newArgs = args.concat(slice.call(arguments));
    return fn.apply(null, newArgs);
  };
};

// ES6版的柯里化函数
function curry(fn) {
  const g = (...allArgs) =>
    allArgs.length >= fn.length
      ? fn(...allArgs)
      : (...args) => g(...allArgs, ...args);

  return g;
}

// 测试用例
const foo = curry((a, b, c, d) => {
  console.log(a, b, c, d);
});
foo(1)(2)(3)(4); // 1 2 3 4
const f = foo(1)(2)(3);
f(5); // 1 2 3 5
