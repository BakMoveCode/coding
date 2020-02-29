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
