/**
 *
 * https://github.com/mqyqingfeng/Blog/issues/13
 * new做了什么？
 * 1. 创建了一个全新的对象
 * 2. 这个对象会被执行[[Prototype]]（也就是proto连接）
 * 3. 生成的新对象会绑定到函数调用的this
 * 4. 通过new创建的每个对象将最终被[[prototype]]链接到这个函数的prototype对象上
 * 5. 如果函数没有返回对象类型Object（包含Function，Array，Date，RegExp，Error，那么表达式中的函数调用会自动返回这个新的对象）
 *
 * 使用new操作符后，this就指向了新生成的对象
 *
 * 注意：
 * new是关键字，无法模拟，可以通过函数进行模拟
 * 模拟的函数的第一个参数为函数，后面的为需要传入的参数
 * object.create()，新创建对象，第一个参数为新建对象原型指向的对象
 */

var newFun = function(fun) {
  if (typeof fun !== "function") {
    throw new Error("第一个参数必须为函数");
  }
  const newObj = Object.create(fun.prototype);
  const args = [].slice.call(arguments, 1);
  const funResult = fun.apply(newObj, args);

  if (
    (typeof funResult === "object" && typeof funResult !== null) ||
    typeof funResult === "function"
  ) {
    return funResult;
  }
  return newObj;
};

// 第二版的代码
function objectFactory() {
  let obj = new Object();
  let Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  let ret = Constructor.apply(obj, arguments);
  return typeof ret === "object" ? ret : obj;
}

function myNew(func, ...args) {
  if (typeof func !== "function") {
    throw "第一个参数必须为函数";
  }
  let newObj = Object.create(func.prototype);
  let result = func.apply(newObj, args);
  if (
    (typeof result === "object" && result !== null) ||
    typeof result === "function"
  ) {
    return result;
  }
  return newObj;
}

// ========= 无返回值 =============
const testNewFun = function(name) {
  this.name = name;
};
const newObj = newFun(testNewFun, "foo");
console.log(newObj); // { name: "foo" }
console.log(newObj instanceof testNewFun); // true

// ========= 有返回值 =============
const testNewFun = function(name) {
  this.name = name;
  return {};
};
const newObj = newFun(testNewFun, "foo");
console.log(newObj); // {}
console.log(newObj instanceof testNewFun); // false

// ------------------------- mac电脑版本上，待有时间再整理-------------------------

/***
 *
 * new函数的模式实现
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
